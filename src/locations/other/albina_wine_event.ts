import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWineInvite(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
  scene.text('As the two of you head back inside the house, Albina takes you by the hand and points towards the kitchen.');
  if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
    scene.text('"Hey, wanna break open a bottle of wine with me? Really warms you up after a dip in the pool."');
  } else {
    scene.text('"Hey, wanna drink some wine with me again?"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['wine_caught'] === 0) {
      scene.text('You shake your head. "No thanks. I\'d rather just shower."');
      // TODO-QSP: dynamic text: "Ugh! You're such a bore, <<$pcs_nickname>>!" she says while rolling her eyes. "...
      scene.text(`"Ugh! You're such a bore, ${((s as any).pcs_nickname ?? 0)}!" she says while rolling her eyes. "Fine, you go shower. <i>I'm</i> getting drunk. Don't bother hanging around if you don't plan on joining me."`);
      scene.text('She pads off into the kitchen, leaving you and a trail of wet footprints behind.');
      scene.actions([
        { label: 'Go and shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You wash up in one of the guest showers, scrubbing the chlorine off your skin before drying off and putting your clothes back on.');
    ((s as any).mc_inventory ?? {})['shampoo'] = (((s as any).mc_inventory ?? {})['shampoo'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('You head downstairs towards the front door, passing by the kitchen along the way. True to her word, Albina is on the couch, still naked and already red faced pouring what is definitely not her first glass of wine.');
    scene.text('"Bye, Albina!" you call while waving your hand. She picks up the glass and starts chugging with one hand while giving you the finger with the other as you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You shake your head. "After being chewed out by your mom last time for getting b...
      scene.text(`You shake your head. "After being chewed out by your mom last time for getting black out drunk? No thanks. I already get enough from my ${((s as any).npc_nickname ?? 0)?.['A29']} back home."`);
      // TODO-QSP: dynamic text: "Ugh! You're such a pussy, <<$pcs_nickname>>!" she replies while rolling her eye...
      scene.text(`"Ugh! You're such a pussy, ${((s as any).pcs_nickname ?? 0)}!" she replies while rolling her eyes. "Fine, you go shower. <i>I'm</i> getting drunk again."`);
      scene.text('She pads off into the kitchen, leaving you and a trail of wet footprints behind.');
    }
    scene.actions([
      { label: 'Go and shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You wash up in one of the guest showers, scrubbing the chlorine off your skin before drying off and putting your clothes back on.');
    ((s as any).mc_inventory ?? {})['shampoo'] = (((s as any).mc_inventory ?? {})['shampoo'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('You head downstairs towards the front door, passing by the kitchen along the way. True to her word, Albina is on the couch, still naked and already red faced pouring what is definitely not her first glass of wine.');
    scene.text('"Bye, Albina!" you call while waving your hand. She picks up the glass and starts chugging with one hand while giving you the finger with the other as you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
    scene.text('Watching Albina walk away, a twinge of regret flashes through your stomach. After a moment\'s hesitation, you follow after, entering the kitchen right as she\'s pulling a wine bottle out of a cabinet.');
    scene.text('"Well, well…" she says, letting her surprise fade into a smug smirk. "Feeling left out, are we?"');
    scene.text('"Maybe a little…" you admit.');
    scene.text('"Well lucky for you, you came just in time," she replies as she grabs a pair of glasses and bumps the cabinet closed with her ass before making her way over to you and pulling you to the couch.');
    scene.text('You wait awkwardly while she opens the bottle before she sits next to you and hands you a glass.');
    scene.text('"Cheers!" she says with a grin, clinking her glass against yours and downing half the thing in one gulp. You take a more reserved sip, but you feel warmth spread through your chest almost immediately.');
    scene.text('<i>Wow, that <b>is</b> really nice,</i> you think, taking another sip.');
    scene.actions([
      { label: 'Drink', goto: ['albina_wine_event', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
      scene.text('"Sure, that sounds nice. Should I just get dressed and meet you back-"');
      scene.text('"Fuck that," she replies, cutting you off and dragging you to the kitchen. "It\'s better if you drink it right after coming out."');
      scene.text('She puts you down on a couch and saunters over to the wine cabinet, shaking her naked ass along the way, and plucks out two glasses and a bottle. You wait awkwardly while she opens the bottle before she sits down next to you and hands you a glass.');
      scene.text('"Cheers!" she says with a grin, clinking her glass against yours and downing half the thing in one gulp. You take a more reserved sip, but you feel warmth spread through your chest almost immediately.');
      scene.text('<i>Wow, that <b>is</b> really nice,</i> you think, taking another sip.');
    } else {
      scene.text('"Sure," you say with a smile.');
      scene.text('"Great! I\'ll get the bottle."');
      scene.text('You head over to the kitchen with her, sitting down on the couch while she procures the alcohol. A short time later, she places a glass in your hand and clinks hers against it.');
      scene.text('"Cheers!" she grins and you both enjoy your wine together.');
    }
    scene.actions([
      { label: 'Drink', goto: ['albina_wine_event', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
    scene.text('A short while later, you find yourself feeling very warm, fuzzy, and <i>very</i> dizzy, halfway through your second glass. Albina is already sipping from her third glass, head laid on your lap after opening a second bottle.');
    scene.text('The flush in her cheeks and the slur of her voice tells you she\'s totally drunk. And judging by the change in conversation and the wetness between her thighs, it seems she\'s a <i>horny</i> drunk.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" Albina shouts, interrupting your thoughts. "I'm fucking tal...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!" Albina shouts, interrupting your thoughts. "I'm fucking talking to you!"`);
    scene.text('You blink in confusion.');
    scene.actions([
      { label: '"What did you say?"', handler: (st: GameState) => {
    // TODO-QSP: AlbinaQW['wine_start'] = 1
  }, goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  } else {
    scene.text('You\'re not sure if you expected something else, but a short while later you find yourself drunk on the couch with Albina. Again.');
    scene.actions([
      { label: 'Drunkenly converse with Albina', goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  }
  ((s as any).AlbinaQW ?? {})['wine'] = (((s as any).AlbinaQW ?? {})['wine'] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enterWineChat1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
  if (((s as any).AlbinaQW ?? 0)?.['wine_date'] !== ((s as any).daystart ?? 0)) {
    ((s as any).AlbinaQW ?? {})['wine_date'] = ((s as any).daystart ?? 0);
    ((s as any).AlbinaQW ?? {})['wine_limit'] = Math.floor(Math.random() * 5) + 4;
  }
  ((s as any).AlbinaQW ?? {})['wine_convo'] = Math.floor(Math.random() * 8) + 1;
  ((s as any).AlbinaQW ?? {})['wine_count'] = (((s as any).AlbinaQW ?? {})['wine_count'] ?? 0) + (1);
  if (((s as any).AlbinaQW ?? 0)?.['wine_count'] >= ((s as any).AlbinaQW ?? 0)?.['wine_limit']) {
    qspCall(s, 'albina_wine_event', 'end');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 1) {
      if (((s as any).AlbinaQW ?? 0)?.['wine_convo_1'] === ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
      } else {
        ((s as any).AlbinaQW ?? {})['wine_convo_1'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'albina_wine_event', 'pussy_taste');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 2) {
        if (((s as any).AlbinaQW ?? 0)?.['wine_convo_2'] === ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
        } else {
          ((s as any).AlbinaQW ?? {})['wine_convo_2'] = ((s as any).daystart ?? 0);
        }
        qspCall(s, 'albina_wine_event', 'shave_talk');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 3) {
          if (((s as any).AlbinaQW ?? 0)?.['wine_convo_3'] === ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
          } else {
            ((s as any).AlbinaQW ?? {})['wine_convo_3'] = ((s as any).daystart ?? 0);
          }
          qspCall(s, 'albina_wine_event', 'dominate_albina');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 4) {
            if (((s as any).AlbinaQW ?? 0)?.['wine_convo_4'] === ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
            } else {
              ((s as any).AlbinaQW ?? {})['wine_convo_4'] = ((s as any).daystart ?? 0);
            }
            qspCall(s, 'albina_wine_event', 'masturbation_talk');
          } else {
            if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 5) {
              if (((s as any).AlbinaQW ?? 0)?.['wine_convo_5'] === ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
              } else {
                ((s as any).AlbinaQW ?? {})['wine_convo_5'] = ((s as any).daystart ?? 0);
              }
              qspCall(s, 'albina_wine_event', 'porn_talk');
            } else {
              if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 6) {
                if (((s as any).AlbinaQW ?? 0)?.['wine_convo_6'] === ((s as any).daystart ?? 0)) {
                  scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
                } else {
                  ((s as any).AlbinaQW ?? {})['wine_convo_6'] = ((s as any).daystart ?? 0);
                }
                qspCall(s, 'albina_wine_event', 'boob_size_talk');
              } else {
                if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 7) {
                  if (((s as any).AlbinaQW ?? 0)?.['commando_know'] === 0) {
                    scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
                  }
                  if (((s as any).AlbinaQW ?? 0)?.['wine_convo_7'] === ((s as any).daystart ?? 0)) {
                    scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
                  } else {
                    ((s as any).AlbinaQW ?? {})['wine_convo_7'] = ((s as any).daystart ?? 0);
                  }
                  qspCall(s, 'albina_wine_event', 'commando_talk');
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 8) {
                    if (((s as any).AlbinaQW ?? 0)?.['wine_convo_8'] === ((s as any).daystart ?? 0)) {
                      scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
                    } else {
                      ((s as any).AlbinaQW ?? {})['wine_convo_8'] = ((s as any).daystart ?? 0);
                    }
                    qspCall(s, 'albina_wine_event', 'stripper_talk');
                  }
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

function enterPussyTaste(s: GameState, scene: SceneBuilder): void {
  scene.text('"I love the taste of my own pussy," she abruptly says out loud. "Is that weird?"');
  if (((s as any).stat ?? 0)?.['mast'] > 0) {
    scene.actions([
      { label: 'I lick my fingers after masturbating', handler: (st: GameState) => {
    scene.text('"I like the taste of my pussy too," you slur back. "Sometimes I stick my fingers in my mouf after I masturbate, lick it all off."');
    scene.text('"Oh fuck, I do that too! Suck my dildo fucking clean right after I cum! It always makes me want to rub another one out. <i>Fuuuuck</i>, I wanna rub one out right now!" she moans while unconsciously squeezing her thighs together.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
    scene.actions([
      { label: 'I like tasting it on a guy\'s dick', handler: (st: GameState) => {
    scene.text('"I like the taste of my pussy too," you slur back. "It tastes even better when it\'s on a dick."');
    // TODO-QSP: dynamic text: "You're a fuckin' slut, <<$pcs_nickname>>!" she replies and you nearly choke on ...
    scene.text(`"You're a fuckin' slut, ${((s as any).pcs_nickname ?? 0)}!" she replies and you nearly choke on your wine as you both burst into laughter.`);
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  if (((s as any).npc_had_sex ?? 0)?.['A23']) {
    scene.actions([
      { label: 'I like your taste too', handler: (st: GameState) => {
    scene.text('"I like the taste of your pussy too," you slur back and give her a filthy grin.');
    scene.text('"Nnnngh~!" She rolls her hips while rubbing her thighs together hard. "<i>Fuuuck!</i> Don\'t say that! You make me want to shove your head between my legs right now!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Super weird', handler: (st: GameState) => {
    scene.text('"That\'s super fucking weird," you slur back.');
    scene.text('"Bullshit!" she shouts even louder than before. "You can\'t tell me you don\'t like the taste of \'ur own brand. I know you do, you filthy slut!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'I like mine too', handler: (st: GameState) => {
    scene.text('"I like the taste of my pussy too," you slur back.');
    scene.text('"I fucking knew it!" she shouts triumphantly. "Every girl loves her own juice!"');
    scene.text('"If you knew, then why are you asking if it\'s weird?" you ask, puzzled.');
    scene.text('"I jus\' wanted to see if <i>you</i> were the weird one!" she mumbles into her glass as she takes another sip, her voice echoing off the inside.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterShaveTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pubestyle ?? 0) === 1  &&  ((s as any).pcs_pubes ?? 0) <= 3) {
    scene.text('"I can\'t believe how many girls at school don\'t shave their pussy," she says with a disgusted look on her face. "How can they stand having all that hair down there?"');
    qspCall(s, 'albina_wine_event', 'shave_answer1');
  } else {
    if (((s as any).pcs_pubes ?? 0) <= 15) {
      scene.text('"You need a shave," she says with a disgusted look on her face as she moves her head uncomfortably on your lap. "I can practically feel your stubble velcroing to my hair right now!"');
      qspCall(s, 'albina_wine_event', 'shave_answer2');
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 25) {
        if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
          scene.text('"Ugh, how can you stand having hair down there?" she rants. "I bet making it look all fancy doesn\'t make it any less itchy!"');
          qspCall(s, 'albina_wine_event', 'shave_answer5');
        } else {
          scene.text('Ugh, how can you stand having hair down there?" she rants. "You\'ve already trimmed it down, so why not just finish the job and shave it off?"');
          qspCall(s, 'albina_wine_event', 'shave_answer5');
        }
      } else {
        if (((s as any).pcs_pubes ?? 0) <= 30) {
          scene.text('"Ugh, how can you stand having all that hair down there?" she says with a disgusted look on her face as she turns to glance down at the pubic hair covering your pussy. "It feels like I\'m putting my head on a fucking hamster!"');
          qspCall(s, 'albina_wine_event', 'shave_answer5');
        } else {
          // TODO-QSP: dynamic text: "Holy shit <<$pcs_nickname>>, do you <i>ever</i> shave?" she asks with a disgust...
          scene.text(`"Holy shit ${((s as any).pcs_nickname ?? 0)}, do you <i>ever</i> shave?" she asks with a disgusted look on her face as she moves her head uncomfortably on your lap before turning to glance down at the wild bush between your legs. "You practically have an entire sheep down there! How can you stand it?"`);
          qspCall(s, 'albina_wine_event', 'shave_answer6');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDominateAlbina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Serious question, <<$pcs_nickname>>," she says, looking up at you with a mirthl...
  scene.text(`"Serious question, ${((s as any).pcs_nickname ?? 0)}," she says, looking up at you with a mirthless expression on her face. "If you wanted to dominate me in bed, what would you do?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Why would I do that?', handler: (st: GameState) => {
    scene.text('"Why would I do that?" you say, puzzled. "You\'re my friend, I wouldn\'t want to do that to you."');
    scene.text('"I was just being hypothetical.." she responds stiffly before burying her face in her wine glass.');
    scene.text('"I thought you said it was serious?" you ask with a nervous chuckle. You try to talk to her, but she seems a bit pouty for some reason, so you leave it alone.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Am I some sort of pervert?', handler: (st: GameState) => {
    scene.text('"Why would I do that?" you ask. "What am I? Some kind of pervert?"');
    scene.text('"It was just a hypothetical…" she responds stiffly before burying her face in her wine glass.');
    scene.text('"I thought you said it was serious?" you ask with a nervous chuckle. You try to talk to her, but she gives you the silent treatment for the next few minutes.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Bend you over and spank you', handler: (st: GameState) => {
    scene.text('"First, I\'d bend you over my lap," you smile gently, running your fingers through her hair. Something in your voice makes her eyes go wide. She glances to the side as if realizing that her head is exactly where you said you\'d bend her over.');
    scene.text('"Then, I\'d sit you up so your ass is nice and high," you continue. "And then I\'d <i>spank you within an inch of your life.</i>" You keep your easy tone, but give Albina a hard stare and her breath hitches. "I\'d keep going until your ass is red and swollen. Let my fingers trail over your pussy, edging you until you <i>beg</i> me to let you cum. And then, <i>I won\'t.</i>"');
    scene.text('Her face flushes red and she swallows reflexively. Looking down her body, you see her nipples are rock-hard and her thighs are practically dripping with girl cum.');
    scene.text('"That…" she gulps. "Would be a pretty good way of doing it…"');
    scene.text('She tears herself away from your gaze and buries her face in her wine glass, taking big desperate gulps.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'I\'d sit on your face', handler: (st: GameState) => {
    scene.text('"I\'d sit on your face," you grin. "Bury your face in my pussy. Force you to lick your way out or drown."');
    scene.text('"Well…" she smiles back. "My head is already here… You could… you know… Just throw one leg over and see what happens…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Force you between my legs', handler: (st: GameState) => {
    scene.text('"I\'d force your head into my crotch and wrap my legs around your head. I\'d keep squeezing harder until you make me cum all over your pretty little face," you tell her with a wicked grin.');
    scene.text('"Well…" she smiles back. "My head is already here… You could, you know, grab my hair and see if I resist…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Grab you by the hair and fuck your ass', handler: (st: GameState) => {
    scene.text('"Well, first thing I would get a nice, <i>big</i>, strapon," you smirk. Albina bites her lip, unconsciously rubbing her thighs together while she waits for your next words. "And then I\'d grab you by the hair, nice and tight, and shove it right up your ass!"');
    scene.text('"<i>Fuck!</i> That\'s good!" she moans, her hand snaking between her legs and shamelessly rubbing her pussy. "Have you been watching me and Lazar or something? That\'s <i>just</i> how I like it," she says, a twinkle in her eye as her fingers come back up wet and sticky. She maintains eye contact as she runs her tongue across them, licking up her own juices.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Tie you down', handler: (st: GameState) => {
    scene.text('"I\'d get some rope and tie you to your own bed," you grin. "And then… I think I\'d do whatever I want to you."');
    scene.text('You let imagination take over for you and it seems to work. Her cheeks immediately flush and her breath grows heavy. Her nipples harden and her thighs rub together as moisture glistens between them.');
    scene.text('"That," she gulps. "Sounds like a pretty good way of doing it…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterMasturbationTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "How often do you masturbate, <<$pcs_nickname>>?" she asks loudly, without even ...
  scene.text(`"How often do you masturbate, ${((s as any).pcs_nickname ?? 0)}?" she asks loudly, without even a shred of shame or decency.`);
  if (((s as any).stat ?? 0)?.['mast'] === 0) {
    scene.actions([
      { label: 'Never done it', handler: (st: GameState) => {
    scene.text('"I don\'t," you say taking another sip of wine.');
    scene.text('"<i>What</i>?!" She sits up suddenly, causing you to curse as wine sloshes out of the glass and onto your chest.');
    scene.text('"I\'ve never masturbated before," you say, scowling as you wipe your mouth.');
    scene.text('"Bull<i>Shit</i>! Everyone masturbates!"');
    if (((s as any).stat ?? 0)?.['sex'] > 0) {
      scene.actions([
        { label: 'I fuck boys instead', handler: (st: GameState) => {
    scene.text('"I let cock take care of my needs," you say, taking another sip with a smirk. Albina returns it immediately with a sly grin.');
    scene.text('"Oh. Well, I guess if you\'re just gonna slut it up instead…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
        { label: 'I fuck girls instead', handler: (st: GameState) => {
    scene.text('"I don\'t need to masturbate because I let other girls take care of that for me instead," you say, taking another sip with a mischievous twinkle in your eye. Albina returns it immediately with a sly grin.');
    scene.text('"Oh. Well, I guess if you\'re just gonna slut it up instead…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      ]);
    } else {
      scene.text('"Well I don\'t," you shrug.');
      scene.text('"You\'re a fucking liar!" she says while narrowing her eyes at you.');
      scene.text('"Believe what you want," you say, using your fingers to lick the spilled wine off your chest. "Not everyone\'s a nympho like you."');
      qspCall(s, 'albina_wine_event', 'wine_chat2');
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Rarely', handler: (st: GameState) => {
    scene.text('"Rarely," you say with a shrug.');
    scene.text('"Ha!" she chortles. "I call bullshit. There isn\'t a girl our age who doesn\'t slack off on a regular basis. I know for a fact that even Katja does it."');
    if (((s as any).stat ?? 0)?.['sex'] > 0) {
      scene.actions([
        { label: 'I fuck boys instead', handler: (st: GameState) => {
    scene.text('"I let cock take care of my needs," you say, taking another sip with a smirk. Albina returns it immediately with a sly grin.');
    scene.text('"Oh. Well, I guess if you\'re just gonna slut it up instead…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
        { label: 'I fuck girls instead', handler: (st: GameState) => {
    scene.text('"I don\'t need to masturbate because I let other girls take care of that for me instead," you say, taking another sip with a mischievous twinkle in your eye. Albina returns it immediately with a sly grin.');
    scene.text('"Oh. Well, I guess if you\'re just gonna slut it up instead…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      ]);
    }
    scene.actions([
      { label: 'No time', handler: (st: GameState) => {
    scene.text('"No, I\'m serious! I would do it more often, but I just don\'t have time," you sigh. "I\'m too busy with other things to masturbate. By the time I get home, I\'m practically asleep."');
    scene.text('She rolls her eyes. "As if it takes more than a few minutes to rub one out. If you have time for other shit, you have time to masturbate!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'No privacy', handler: (st: GameState) => {
    scene.text('"I don\'t have any privacy," you say dryly. "Unlike you, I\'m not an only child in a big ass mansion. I share a room with my sister, have a little brother who doesn\'t respect boundaries, and a mother who loses her mind at the slightest mention of sex! It\'s extremely rare for nobody else to be home so I can rub one out in peace."');
    scene.text('"Excuses, excuses," she says while rolling her eyes. "Ever heard of a shower dildo? Or just a showerhead? It\'s not like your brother is using the bathroom while you shower, is he?"');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] > 0) {
      scene.text('Your face feels hot as you think about all the times you\'ve let Kolka in while you were showering and quickly move to hide it by taking a gulp of wine. Fortunately, Albina takes your silence for a victory.');
      // TODO-QSP: dynamic text: "You need to start thinking with your dick, <<$pcs_nickname>>," she giggles gidd...
      scene.text(`"You need to start thinking with your dick, ${((s as any).pcs_nickname ?? 0)}," she giggles giddily as she takes another sloppy slurp of wine.`);
    } else {
      scene.text('You frown, wanting to come up with an argument against her, but she has an undeniable point. She takes your silence for a victory.');
      // TODO-QSP: dynamic text: "You need to start thinking with your dick, <<$pcs_nickname>>," she giggles gidd...
      scene.text(`"You need to start thinking with your dick, ${((s as any).pcs_nickname ?? 0)}," she giggles giddily as she takes another sip of wine.`);
    }
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'It doesn\'t feel good', handler: (st: GameState) => {
    scene.text('"It just doesn\'t feel good," you complain. "So much effort just for a subpar result."');
    scene.text('"You just need practice," she replies. "Schlick off every day for a month and I guarantee you\'ll find what turns your crank."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'Regularly', handler: (st: GameState) => {
    scene.text('"A few times a week," you admit before taking another sip of wine. "Whenever I feel like it basically."');
    scene.text('"I figured," she nods. "I\'m like that too. Sometimes I just make do with my fingers when I\'m in a rush, but when I really want to enjoy myself I bend over head down, ass up, and shove my favorite dildo up the back door. How do you masturbate?"');
    qspCall(s, 'albina_wine_event', 'masturbate_answer2');
  } },
      { label: 'Every day', handler: (st: GameState) => {
    scene.text('"Every day more or less," you admit before taking another sip of wine. "If I don\'t get off at least once a day I feel… weird…"');
    scene.text('"Seriously?" she asks while raising an eyebrow. "I understand the need to get off regularly but, <i>every day</i>? You really flick the bean <i>every</i> day?"');
    scene.text('"More or less," you say again.');
    scene.text('"That sounds exhausting," she says while shaking her head.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Embarrassed', handler: (st: GameState) => {
    scene.text('"Albina! That\'s…" you stammer and trail off. You suddenly can\'t look at her anymore and your face grows hot for reasons you try to rationalize is just the wine.');
    // TODO-QSP: dynamic text: "Oh please! Don't be such a prude, <<$pcs_nickname>>!" she says as she rolls her...
    scene.text(`"Oh please! Don't be such a prude, ${((s as any).pcs_nickname ?? 0)}!" she says as she rolls her eyes. "I know you do it, everyone does. I have to get off when I feel the urge or I just can't concentrate. Even if you don't do it <i>every</i> day, I know you do."`);
    scene.text('You continue to try and elude her responses, though she grows increasingly bold and entertained in her teasing questions about you.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterPornTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"What kind of porn are you into?" she asks bluntly.');
  if (((s as any).stat ?? 0)?.['porn'] === 0) {
    scene.actions([
      { label: 'I\'ve never watched porn', handler: (st: GameState) => {
    scene.text('"None," you say. "I\'ve never watched porn."');
    scene.text('"You\'re such a prude," she giggles drunkenly.');
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 0) {
      scene.actions([
        { label: ' I don\'t have a computer', handler: (st: GameState) => {
    scene.text('"Not everybody has a computer with unlimited access to free porn, rich girl," you say irritatedly.');
    scene.text('"Oh." She deflates, suddenly looking a little guilty.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      ]);
    }
    scene.actions([
      { label: 'It doesn\'t interest me', handler: (st: GameState) => {
    scene.text('"It\'s not that," you shrug. "I\'m just… not interested."');
    scene.text('"<i>Pruuuuuuude</i>!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'I prefer the real thing', handler: (st: GameState) => {
    scene.text('"Why would I watch porn when I can just get the real thing?" you ask.');
    scene.text('"Why not both?" she grins while rubbing her thighs together.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Vanilla porn', handler: (st: GameState) => {
    scene.text('"Just vanilla stuff," you shrug. "Blowjob, some fucking, finish with a facial. That\'s enough for me to get off."');
    scene.text('"Boooooorriiiing!" she hollers at the top of her lungs.');
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    scene.text('Your face flushes with heat unrelated to the wine.');
    scene.text('"Vanilla? Who the hell likes vanilla?" she rambles, continuing her tirade. "Everybody has some kind of porn kink these days. At least be into anal or like, that weird Japanese shit. <i>Something!</i> Anything!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Pinch her ass', handler: (st: GameState) => {
    scene.text('"Hey!" You pinch her ass, eliciting a yelp. "Don\'t kink shame me just cause I don\'t have any kinks!"');
    scene.text('"Doesn\'t change the fact that you\'re boring," she grumbles into her wine glass. "At least have a spanking fetish or something."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'Anal porn', handler: (st: GameState) => {
    scene.text('"I mostly watch anal stuff," you say. "There\'s something I entrancing about watching a girl take it up the ass."');
    scene.text('"I always imagine it\'s me," she says in a husky voice, unconsciously rubbing her thighs together. "Bent over, a big cock stretching my asshole out. <i>Ungh</i>! You wanna watch something right now?"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Creampie porn', handler: (st: GameState) => {
    scene.text('"Creampies," you say. "Something about watching a guy\'s load dribble out of a girl\'s pussy after he\'s done fucking her… It\'s so… <i>Nnngh</i>!"');
    scene.text('"That\'s what you\'re into?" She visibly pales at your response, trying to hide it inside her wine glass. "That\'s…"');
    scene.text('"What?" you ask, puzzled by her reaction.');
    scene.text('"Nothing. I just… I didn\'t think that you were into that…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Rough porn', handler: (st: GameState) => {
    scene.text('"I like the rough stuff," you admit. "When it\'s fast and hard, when the girl is getting <i>pounded.</i> When her makeup runs and smears across her face."');
    scene.text('"Fuck, I knew you had good taste," she purrs. "That\'s the good shit. Even better when-"');
    scene.text('"He shoves it up her ass without warning. Yeah yeah, I know," you say, rolling your eyes.');
    scene.text('"What? It <i>is</i>!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Incest porn', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['incest_porn'] = 1;
    scene.text('"I kind of like watching incest porn…" you admit.');
    if (((s as any).AlbinaQW ?? 0)?.['kolka_know'] < 1) {
      scene.text('"Oh God, you\'re one of <i>those</i> people?" she replies and makes a face at you. "One of those \'What are you doing STEP bro\' types?"');
      scene.text('"What?" you say, somewhat annoyed by her response. "I think it\'s hot! Is that a problem?"');
      scene.text('"What the fuck is hot about fucking your own brother?" she asks while wrinkling her nose in disgust.');
      scene.text('"Something about the taboo nature of it, I guess?" you shrug. "That it\'s so forbidden. I don\'t know, it\'s just fucking hot."');
      scene.text('She makes a gagging face. "Well <i>I</i> think it\'s <i>fucking gross</i>!"');
    } else {
      scene.text('"<b>OH</b>!" She abuptly sits up in your lap. "Ew! Ew! Ew! Ew!"');
      scene.text('"What? Why are yo-"');
      scene.text('"I should have known after what you told me before," she says before making gagging noises. "I can\'t believe you- No! Never mind! We\'re not talking about this anymore!"');
      scene.text('"But you-"');
      scene.text('"Not-! Discussing-!" She cuts you off in a way that prevents further argument.');
    }
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Lesbian porn', handler: (st: GameState) => {
    scene.text('"I like watching girls," you admit. "It\'s just so much… softer than normal porn."');
    scene.text('"Mmmm…" she hums. "A bit of lesbian porn every now and then is pretty nice…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Interracial', handler: (st: GameState) => {
    scene.text('"Interracial porn," you say. "I love watching a big black cock rail tiny white girls like us."');
    scene.text('She blushes as she gulps down a swig of her wine.');
    scene.text('"What\'s wrong?" you ask.');
    scene.text('"Nothing," she replies. "I sometimes watch porn like that too and like to imagine what it would be like to be in the girl\'s place, but I honestly wouldn\'t know what to think if I saw a monster cock like the ones in those videos."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Gangbangs', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I like gangbang porn," you admit. "Watching a girl get stuffed with so many cocks she can barely handle it is so- <i>Nngh</i>!"');
    scene.text('You let yourself drift off in a momentary fantasy before you look down and see Albina\'s face frozen in a tight expression.');
    scene.text('"What?" you ask. "Is that weird?"');
    scene.text('She stays quiet for a minute, chewing on her lip and appearing to mull over whether she should say something or not before she eventually speaks.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('"There was one time when my… father invited a bunch of his friends over and forced me to strip for them. Then he… handed me over to them…"');
    scene.text('She pauses and takes a dry swallow.');
    scene.text('"They went one at a time at first, but it didn\'t take long for them to get impatient. They stopped taking turns and started shoving their dicks into any hole they could find, even if it was already… occupied… The asshole just sat out by the pool drinking, as if what was happening to me wasn\'t his problem."');
    scene.text('A tear runs down her cheek and she turns away from you.');
    scene.text('"When he eventually came back, I begged him to make it stop, told him I was sorry for whatever I had done wrong and that I would never do it again. And he… he just let them keep going. They kept raping me until I passed out. I don\'t even know if they stopped after that…"');
    scene.text('She lets her hair fall over her face, but you can see her shoulder shaking with silent sobs.');
    scene.actions([
      { label: 'Comfort her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('Without another thought, you wrap your arm around your friend. She doesn\'t acknowledge it, but you do feel her press into you, her hot skin flush against yours.');
    scene.text('"When I eventually woke up, I felt so <i>dirty</i>. I realized then that he was putting me in my place and made sure I knew where that was."');
    scene.text('You pet her hair softly as she continues to weep softly on your lap until a blank look comes over her face. She wipes her eyes, takes a big gulp of her wine and moves on to other topics, pretending like it never happened…');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTellRaped(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['rape_count'] > 0) {
    scene.actions([
      { label: 'Tell her you\'ve been raped', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I\'ve been raped too," you whisper.');
    scene.text('"What…?" She stops shuddering mid sob. "You…"');
    scene.text('You nod.');
    if (((s as any).stat ?? 0)?.['rape_count'] === 1) {
      if (((s as any).pav_swimpool ?? 0)?.['rape'] === 1  ||  ((s as any).pav_swimpool ?? 0)?.['virgin_rape'] === 1) {
        scene.text('"At the swimming pool in town. I was having a late evening swim when some creepy old man attacked me right there in the water."');
      }
      if (((s as any).memory ?? 0)?.['city_res_rape'] === 1  ||  ((s as any).memory ?? 0)?.['city_center_rape'] === 1) {
        scene.text('"In the city. A man pulled me into an alley, fucked me silly, and just left me there leaking his cum."');
      } else {
        if (((s as any).memory ?? 0)?.['city_park_rape'] === 1) {
          scene.text('"In the city park. I was jogging through it when three guys jumped me. They ripped off my clothes, fucked me in every hole at once, and left me there naked."');
        } else {
          if (((s as any).memory ?? 0)?.['pav_comm_rape'] === 1) {
          } else {
            if (((s as any).memory ?? 0)?.['pav_res_rape'] === 1) {
            } else {
              if (((s as any).memory ?? 0)?.['pav_park_rape'] === 1) {
              }
            }
          }
        }
      }
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('"Several times."');
      } else {
        if (((s as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('"More than a few times."');
        } else {
          scene.text('"Lots of times. More than I can count on both hands."');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoobSizeTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) <= 15) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" she says hesitantly. "Does it ever bother you…?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}…" she says hesitantly. "Does it ever bother you…?"`);
    scene.text('"Huh?" you ask, completely lost at what she\'s trying to say.');
    scene.text('"That… you know…" she continues, weirdly cupping her breast with her hand while not looking you in the eye.');
    scene.text('"I don\'t know, Albina," you say dryly. "You haven\'t <i>actually</i> asked me anything."');
    if (((s as any).pcs_cupsize ?? 0) <= 5) {
      scene.text('"That you\'re… flat…?"');
      scene.text('Shockingly, Albina seems… <i>embarrassed</i>? Have you ever seen her embarrassed about anything before?');
    } else {
      if (((s as any).pcs_cupsize ?? 0) <= 10) {
        scene.text('"That your… boobs are… tiny…?"');
        scene.text('Shockingly, Albina seems… <i>embarrassed</i>? Have you ever seen her embarrassed about anything before?');
      } else {
        scene.text('"That your… boobs are… small…?"');
        scene.text('Shockingly, Albina seems… <i>embarrassed</i>? Have you ever seen her embarrassed about anything before?');
      }
    }
    qspCall(s, 'albina_wine_event', 'small_tits');
  } else {
    if (((s as any).pcs_cupsize ?? 0) <= 20) {
      scene.text('"I wish I had bigger tits," she sighs while staring longingly at your shapely breasts that hang above her.');
      qspCall(s, 'albina_wine_event', 'medium_tits');
    } else {
      if (((s as any).pcs_cupsize ?? 0) <= 30) {
        scene.text('"Your tits are so fucking hot," she sighs while staring longingly at your large breasts that hang above her. "Why couldn\'t mine be as big as yours? How did I get stuck with <i>these</i>?"');
        qspCall(s, 'albina_wine_event', 'large_tits');
      } else {
        scene.text('"Your tits are so fucking huge!" she says while staring in wide-eyed awe at your enormous breasts that hang above her. "How do you survive carrying those puppies around?"');
        qspCall(s, 'albina_wine_event', 'huge_tits');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCommandoTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"So, you really don\'t wear panties?" Albina slurs while turning her head toward your pussy. "Like, ever?"');
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
    scene.actions([
      { label: 'Only when I have to', handler: (st: GameState) => {
    scene.text('"Only when I have to," you say while wrinkling your nose in annoyance. "Sometimes you just can\'t get away with it."');
    scene.text('"Like when?" she asks curiously.');
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    scene.text('"At school," you sigh tiredly. "If I don\'t, all the teachers will look up my skirt during class."');
    scene.text('"<i>All</i> of them?!" She looks confused. "I get the males, men are pigs, but the women too? What about Ms. Braakman?"');
    scene.text('"Especially her!" you say, sending you both into fits of laughter.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Disco', handler: (st: GameState) => {
    scene.text('"At the disco," you sigh tiredly. "Everyone will think I\'m a slut if they see me flash on the dance floor."');
    scene.text('"That\'s why I wear thongs," she smirks proudly. "All the ass, none of the slut shame."');
    scene.actions([
      { label: 'Maybe I should switch', handler: (st: GameState) => {
    scene.text('"Maybe I should buy some…" you muse. "I\'d rather not wear anything at all, but\'s better than full shorts I guess."');
    scene.text('"Yeah… Lemme see dat ass…"');
    scene.text('"Albina, I don\'t wear panties. You can see my ass whenever you want."');
    scene.text('"But with a thong, it\'s…" She trails off. "Fuck… What were we talking about?"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'That\'s why I wear pants', handler: (st: GameState) => {
    scene.text('"That\'s why I wear <i>pants</i>," you snort. "No one can tell you\'re going commando when you\'re wearing pants."');
    scene.text('"But don\'t all commandos wear pants?"');
    scene.text('Albina narrows her eyes and looks up at you while you stare down at her.');
    scene.text('"I… Shut up!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Nope, never', handler: (st: GameState) => {
    scene.text('"No<i>p</i>e!" you say. "Never."');
    scene.text('"Doesn\'t your pussy get cold?"');
    scene.text('"Nyeh," you shrug. "You get used to it. After a while it\'s weirder <i>not</i> to feel the breeze."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'I hate them', handler: (st: GameState) => {
    scene.text('"Neverrr!" you say, wrinkling your nose. "I <i>hate</i> wearing them!"');
    scene.text('"Doesn\'t your pussy get itchy when you wear pants?" she asks back.');
    scene.text('"My pussy is tough as nails!" you proclaim proudly. "My pussy doesn\'t need no pussy soft panties to protect it!"');
    scene.text('"What?" She looks confused. "That doesn\'t make any sense at all…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } else {
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 0) {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 1) {
        scene.actions([
          { label: 'Only with skirts', handler: (st: GameState) => {
    scene.text('"Only when I\'m wearing skirts," you say. "My pussy gets itchy when it rubs against my pants."');
    scene.text('"So you\'re saying you just like potentially getting caught."');
    scene.text('"No! That\'s not what I sai-"');
    scene.text('"Yeah yeah, whatever you say," she replies before slurping up another gulp of wine. "Skirts only? Someone wants to show off the goods."');
    scene.text('"Bitch," you growl.');
    scene.text('"Slut," she grins back.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
        ]);
      }
      scene.actions([
        { label: 'I just forget sometimes', handler: (st: GameState) => {
    scene.text('"Not <i>never</i>," you slur. "I just… forget to put them on sometimes…"');
    scene.text('"Ha! Slut!" she shouts before taking another slurp of her wine.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
        { label: 'Rarely', handler: (st: GameState) => {
    scene.text('"Rarely," you mumble.');
    scene.text('"Like when?" she asks curiously.');
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    scene.text('"At school," you sigh tiredly. "If I don\'t, all the teachers will look up my skirt during class."');
    scene.text('"<i>All</i> of them?!" She looks confused. "I get the males, men are pigs, but the women too? What about Ms. Braakman?"');
    scene.text('"Especially her!" you say, sending you both into fits of laughter.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Disco', handler: (st: GameState) => {
    scene.text('"At the disco," you sigh tiredly. "Everyone will think I\'m a slut if they see me flash on the dance floor."');
    scene.text('"That\'s why I wear thongs," she smirks proudly. "All the ass, none of the slut shame."');
    scene.actions([
      { label: 'Maybe I should switch', handler: (st: GameState) => {
    scene.text('"Maybe I should switch," you mumble. "That sounds like a good in-between."');
    scene.text('"Yeah… Lemme see dat ass…"');
    scene.text('"Albina, I\'m already commando most days. You can see my ass whenever you want."');
    scene.text('"But with a thong, it\'s…" She trails off. "Fuck… What were we talking about?"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'That\'s why I wear pants', handler: (st: GameState) => {
    scene.text('"That\'s why I wear <i>pants</i>," you retort. "No one can tell you\'re going commando when you\'re wearing pants."');
    scene.text('"But don\'t all commandos wear pants?"');
    scene.text('Albina narrows her eyes and looks up at you while you stare down at her.');
    scene.text('"I… Shut up!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'It was just that one time', handler: (st: GameState) => {
    scene.text('"It was just that one time!" you protest loudly.');
    scene.text('"Ahuh," she smirks before taking another sip. "Yeah. <i>Suuuuure.</i>"');
    scene.text('"One time… You forget your panties <i>one</i> time…" you grumble. "And you never get to live it down."');
    // TODO-QSP: dynamic text: "Only sluts forget to wear panties <<$pcs_nickname>>."
    scene.text(`"Only sluts forget to wear panties ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Shut up!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStripperTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"Do you think I\'d make a good stripper?" she asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Probably', handler: (st: GameState) => {
    scene.text('"Probably?" you mumble back. "You can dance and love shoving your ass in people\'s faces. Prime stripper qualities. Why do you ask?"');
    scene.text('"I was thinking about how to pay for uni. Mama could probably do it for me, but what if I want some extra cash on the side?"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Hell yeah', handler: (st: GameState) => {
    scene.text('"Hell yeah!" you laugh, almost spilling your wine on both yourself and Albina. "You\'d make a killing shaking that big fat ass in guy\'s faces!"');
    scene.text('Albina silently takes a swig of her wine, but you catch a glimpse of the smug grin on her face as she looks up at you.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Too bitchy', handler: (st: GameState) => {
    scene.text('"Nah." You wave your hand dismissively. "Too bitchy."');
    scene.text('"<i>Bitchy?!</i>" she sputters.');
    scene.text('"Yeah, too bitchy."');
    scene.text('"What the fuck is that supposed to mean?"');
    scene.text('"You\'d rip the balls off the first guy who called you a slut," you say matter-of-factly. "You couldn\'t put up with enough bullshit to be a stripper."');
    scene.text('"…Fuck."');
    scene.text('"See? Bitchy," you smile before smugly sipping your wine.');
    scene.text('"Oh fuck off," she grumbles back and takes a much bigger gulp.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterWineChat2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk_blur.jpg');
    scene.text('Your vision begins to blur and you tilt your head back, slumping against the back of the couch.');
    scene.text('<i>I\'ll just rest my eyes…</i> you think to yourself. <i>For… just a…</i>');
    qspCall(s, 'albina_wine_event', 'end');
  } },
    { label: 'Call her a butt slut', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"You\'re such a butt slut, Albina," you remark, taking another sip from your glass.');
    scene.text('"Fuck yeah, I am. And I <i>love</i> being one," she grins back, almost spilling her wine all over her face when you both cackle with uncontrollable laughter.');
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  } },
    { label: 'Your mom is is very pretty', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('With Albina right on your lap, you find your thoughts drifting to her mother. Her hair, her facial structure, she really is her mother\'s daughter. It\'s easy to tell where she got her good looks from.');
    scene.text('"Your mom is fucking hot," you blurt out, auto-completing your thoughts before it finishes passing through your brain. You freeze in panic.');
    scene.text('"I <i>know</i>!" she whines beneath you. "I got ass for days, but she\'s gots tits to match. Big bootyful bouncy fucking tits that give her cleavage in a motherfucking t-shirt. <i>And</i> a great ass! Life is so un-fucking-fair!"');
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  } },
    { label: 'Why do you like it rough?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"What\'s the deal with you and rough sex?" you ask, idly swirling your wine around. "I know it\'s pretty common to like it rough, but you\'re like, on another level."');
    scene.text('She purses her lips, her expression growing… <i>ashamed</i>?');
    scene.text('"I… I can\'t feel it unless it\'s rough," she says, looking away from you.');
    scene.text('"What do you mean, \'can\'t feel it\'?"');
    scene.text('"I mean I <i>literally</i> can\'t feel it. If a guy is anything other than rough with me… It just doesn\'t feel like anything. It might as well just be a girl humping me. It\'s like my body is numb to it."');
    scene.text('You keep quiet, sensing there\'s something more to this. And sure enough, Albina continues on.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsWhore'] > 0) {
      scene.text('"There was a time when I was being fucked constantly almost every day. I\'d practically go straight from school to some hotel room until the day was over. And <i>that</i> was rough. You know what they\'re like."');
      scene.text('You nod understandingly.');
    } else {
      scene.text('""There was a time when I was being fucked constantly almost every day. I\'d practically go straight from school to some hotel room until the day was over. And none of it was gentle. You don\'t know it, but they don\'t hold back. And they haven\'t changed. At least I managed to protect you from that much."');
      scene.text('You nod appreciatively.');
    }
    scene.text('"After months of this, I couldn\'t take it anymore. I was tired of the pain, tired of crying into the sheets, tired of feeling sore and used. So… I made myself learn to like it." Tears glimmer in her eyes. "I thought, \'If I can\'t make it stop, maybe I can at least take away the pain.\' And it worked. I started to feel good. I started <i>anticipating</i> it. I got wet when they ripped my clothes off. I moaned when they spanked me. My nipples stiffened when they grabbed my hair…"');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"One of my \'clients\' was a boy who was so nice to me, despite the… circumstances. When I was with him, I could almost forget about everything, even the reason why I was with him in the first place. When he fucked me though… I couldn\'t feel it… He was kind and gentle and was asking me if I was okay the whole time but… I just couldn\'t feel <i>anything</i>."');
    scene.text('She wipes her eyes, voice hardening. "So, there you have it. That\'s why I like it rough. Because I\'m a slut who gave her first orgasms to the men who raped her for years. Because I\'m a freak who can\'t be loved. That\'s just who I am now."');
    if (((s as any).npc_had_sex ?? 0)?.['A23']) {
      scene.actions([
        { label: 'Even by me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"Can\'t be loved?" you ask. "Not even by me?"');
    scene.text('You stare into her eyes tenderly and see years of hurt and pain welling up inside them, but also a glimmer of hope staring back at you.');
    scene.text('She doesn\'t say anything, but her breathing grows heavy and hot against your skin. Her thighs rub together and you can see she\'s already soaking wet.');
    scene.actions([
      { label: 'Kiss her', goto: ['albina_wine_event', 'kiss1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Comfort her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('Despite her supposed acceptance, it\'s easy to tell that she\'s trying to be stoic, covering up for the still-open wounds inside her. Taking her head in your arms, you pull her close against your chest. She stiffens at your touch, but slowly loosens up, closing her eyes and nuzzling her face into your breasts. The two of you sit like this for a few minutes and when you finally release her, a real smile is spread across her face.');
    scene.text('No further words are necessary between you.');
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] },
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

function enterMasturbateAnswer2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['vaginal_dildo'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['dildo_small'] >= 1) {
    scene.actions([
      { label: 'Dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I use a dildo too," you say. "But not on my ass."');
    scene.text('"You\'re missing out," she grins and licks her lips lasciviously.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Shower dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I use a dildo too," you say. "But not on my ass. And I usually do it in the shower."');
    scene.text('"Oh, you\'ve got a shower dildo too?"');
    scene.text('"Yeah. Showering is a good time for it. The privacy means I can take my time, and I can use the showerhead to make it even better."');
    scene.text('"Mmmm…" She rubs her thighs together unconsciously. "I love that too. Except I-"');
    scene.text('"Shove it up your ass, yeah yeah," you interrupt.');
    scene.text('"Aww, you know me so well!" she drunkenly giggles.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['anal_dildo'] > 0) {
    scene.actions([
      { label: 'Anal dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"Something like what you do," you say. "I like taking my dildo up the ass too."');
    scene.text('"Isn\'t it the best?" she nods vigorously while rubbing her thighs together.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Clit play', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I usually just play with my clit," you shrug. "A bit of time alone, a nice massage for the little guy, and I\'m satisfied."');
    scene.text('"I guess that\'s why they call it \'rubbing one out\'," she says, making both of you laugh.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Just my fingers', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I like a little penetration," you say. "But I don\'t really use toys. A few minutes of good finger-banging will usually make me cum."');
    scene.text('"You have no idea what you\'re missing," she mumbles drunkenly. "A big dildo up the back door finds the orgasm button <i>so</i> fast."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'Showerhead', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"In the shower usually," you say. "Lots of privacy that means I can take my time, and I can use the showerhead. The pressure on my clit never fails to get me off."');
    scene.text('"A good showerhead is a girl\'s best friend," she nods.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterShaveAnswer1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s so itchy', handler: (st: GameState) => {
    scene.text('You hum in agreement while you take another sip of wine.');
    scene.text('"I\'s sho itchy," you mumble around the glass.');
    scene.text('"<i>Right?!</i>" she says, sitting up to look at you with wide exasperated eyes before laying her head back down on your lap.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'So unfashionable', handler: (st: GameState) => {
    scene.text('You hum in agreement while you take another sip of wine.');
    scene.text('"I\'s sho ugly," you mumble around the glass. "Don\'t they know how unfashionable bush is?"');
    scene.text('"I don\'t care about shit like that," she says while shaking her head. She goes quiet for a moment and stares down into her glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'Easy maintenance', handler: (st: GameState) => {
    scene.text('"Mmmm," you hum in agreement while you take another sip of wine.');
    scene.text('"It\'s definitely easier that way," you mumble around the glass. "I have no patience for styling down there. Easier to shuck it all off. Don\'t know why they all don\'t do the same."');
    scene.text('"Shaving is a pretty annoying chore," she agrees. "But that\'s not what I mean. It\'s just so <i>fucking itchy!</i>"');
    scene.text('She scowls while looking between her legs, seemingly disgusted at the mere thought of hair growing between them.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'Shrug', handler: (st: GameState) => {
    scene.text('"Eh," you shrug, taking another sip of wine.');
    scene.text('"\'ey can \'o wha\'e\'er \'ey \'ant down \'ere," you mumble around the glass. "It\'s their pussy. I just shave cause I like it that way."');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
  ]);
  scene.build();
}

function enterShaveAnswer2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m lazy', handler: (st: GameState) => {
    scene.text('"Meh," you shrug. "I\'m lazy. I\'ll take care of it… eventually…" You look down at Albina while taking another sip of your wine, who just stares down at her own glass while swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'Didn\'t feel like it', handler: (st: GameState) => {
    scene.text('"Meh," you shrug. "Just didn\'t feel like it today. I\'l shave it off tomorrow," you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'I was in a rush', handler: (st: GameState) => {
    scene.text('"I was running late for something," you say, shrugging. "I\'ll take care of it later," you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'I\'m growing it out', handler: (st: GameState) => {
    scene.text('"Actually I\'ve been growing it out," you say before taking another sip of your wine. "I thought I might try having some bush for a change."');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
  ]);
  scene.build();
}

function enterShaveAnswer5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pubestyle ?? 0) === 0  ||  ((s as any).pubestyle ?? 0) === 10) {
    scene.actions([
      { label: 'I\'m lazy', handler: (st: GameState) => {
    if (((s as any).pubestyle ?? 0) === 10) {
      scene.text('"Meh," you shrug. "I\'m just lazy. Shaving is so much work. Best I can do is trim it now and then when it starts to get out of control," you mumble before taking another sip of your wine. Albina just stares down at her own glass, swirling the dark red liquid around inside it.');
    } else {
      scene.text('"Meh," you shrug. "I\'m just lazy. Shaving is so much work. Easier just to let it grow," you mumble before taking another sip of your wine. Albina just stares down at her own glass, swirling the dark red liquid around inside it.');
    }
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
      { label: 'I like it this way', handler: (st: GameState) => {
    scene.text('"I like it this way," you say while shrugging. "Easy to maintain, plus I think I look pretty good with a rug. Don\'t you?" you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    ]);
  } else {
    if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
      scene.actions([
        { label: 'I like it this way', handler: (st: GameState) => {
    scene.text('"I like it this way!" you protest. "I got it styled just the way I like it. Don\'t you think it\'s cute?" you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe I should try shaving', handler: (st: GameState) => {
    scene.text('"Hmmm, you might have a point," you muse. "You look pretty sexy all clean-shaven down there. Maybe I should try it sometime," you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
  ]);
  scene.build();
}

function enterShaveAnswer6(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m lazy', handler: (st: GameState) => {
    scene.text('"Meh," you say while shrugging. "I\'m just lazy. Yeah, sometimes it itches but whenever I think of all the work I\'d have to do to shave it I\'m just like <i>ughhhhhhhh</i>," you mumble before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
    { label: 'Doesn\'t bother me', handler: (st: GameState) => {
    scene.text('"Doesn\'t really bother me," you say while shrugging. "Why should I care? Fashion?" you chuckle before taking another sip of your wine.');
    scene.text('She just stares down at her own glass, swirling the dark red liquid around inside it.');
    qspCall(s, 'albina_wine_event', 'shave_elaborate');
  } },
  ]);
  scene.build();
}

function enterShaveElaborate(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW ?? {})['shave_story'] = 1;
  scene.text('"I only used to shave because of my dad," she says unblinking, like she didn\'t even hear what you said. "When he started renting me out, he demanded that I shave it. Wanted my pussy \'smooth as a baby down there\' for all his rapist friends. I tried to grow it out once just to spite him, but it was so fucking <i>itchy</i> I couldn\'t stand it. In the end, I didn\'t even last a week before giving up. Fuck pussy hair! I should get it all lasered off."');
  scene.text('With that, she tilts her glass back and drains the whole thing in one large swallow before reaching for the bottle to top herself off again.');
  qspCall(s, 'albina_wine_event', 'wine_chat2');
  // TODO-QSP: end
  scene.build();
}

function enterSmallTits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_cupsize ?? 0) <= 5) {
    scene.actions([
      { label: 'I love being flat', handler: (st: GameState) => {
    scene.text('"Are you kidding me? I love being flat!" you reply.');
    scene.text('She looks back at you completely bewildered. "You\'re not being serious!"');
    scene.actions([
      { label: 'I think it suits me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I think I look good like this," you say, looking down and smiling at your barren chest. "I can\'t imagine what it would be like to have boobs, even small ones."');
    scene.text('"No way!" she says while shaking her head. "I don\'t believe you! It has to bother you on some level! I\'m not even as small as you and I get jealous as <i>fuck</i> whenever I catch a glimpse of nerdy Natasha\'s tits!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    scene.text('"I don\'t care," you shrug before taking a sip of wine. "They\'re her tits. I\'m happy with mine."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'No bras', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I never have to wear a bra," you sigh blissfully. "No sweat rashes, no strap lines, I can just throw on a shirt and go out whenever I feel like it and I don\'t have to worry!"');
    scene.text('"But don\'t you ever feel… lacking?" she mumbles while groping herself self-consciously. "Big boobs are sexy after all…"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    scene.text('"I don\'t care," you shrug before taking a sip of wine. "As long as I don\'t have to wear a bra, I\'m fine with being flat."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Worth it', handler: (st: GameState) => {
    scene.text('"A small price to pay," you shrug before taking a sip of wine. "As long as I don\'t have to wear a bra, I\'m fine with being flat."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'No back pain', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"No back pain," you sigh blissfully. "No pain when I go running and no need for a sports bra. It\'s the best! What\'s not to love?"');
    scene.text('"Well… Guys like big boobs," she mumbles while self-consciously groping herself. "Doesn\'t that bother you?"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I\'m happy like this', handler: (st: GameState) => {
    scene.text('"I\'m happy like this," you shrug before taking another sip of wine.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'Sleeping on my stomach', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I love sleeping on my stomach," you smirk. "My sister\'s only about a B but still complains her boobs are sore when she wakes up. But not me!"');
    scene.text('"I do like to sleep on my side or my back because of these," she mumbles while groping herself self-consciously. "But they\'re also too small to be considered sexy…"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pcs_cupsize ?? 0) <= 10) {
      scene.actions([
        { label: 'I love having small boobs', handler: (st: GameState) => {
    scene.text('"Are you kidding me? I love having small boobs!" you reply.');
    scene.text('She looks back at you completely bewildered. "You\'re not serious!"');
    scene.actions([
      { label: 'They\'re perky and cute', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I like how perky they are," you say, looking down and smiling at your modest chest. "I think they make me look cute."');
    scene.text('"No way!" she says while shaking her head. "I don\'t believe you! It has to bother you on some level! I\'m not even as small as you and I still get jealous as <i>fuck</i> whenever I catch a glimpse of nerdy Natasha\'s tits!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    scene.text('"I don\'t care," you shrug before taking a sip of wine. "They\'re her tits. I\'m happy with mine."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'No bras', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"I never have to wear a bra," you sigh blissfully. "No sweat rashes, no strap lines, I can just throw on a shirt and go out whenever I feel like it and I don\'t have to worry!"');
    scene.text('"But don\'t you ever feel… lacking?" she mumbles while groping herself self-consciously. "Guys like big boobs…"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I don\'t care', handler: (st: GameState) => {
    scene.text('"I don\'t care," you shrug, taking a sip of wine. "As long as I don\'t have to wear a bra, I\'m fine with being small."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Worth it', handler: (st: GameState) => {
    scene.text('"A small price to pay," you shrug before taking a sip of wine. "As long as I don\'t have to wear a bra, I\'m fine with being small."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
      { label: 'No back pain', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"No back pain," you sigh blissfully. "No bounce pain when I go running and no need for a sports bra, but still round enough to look feminine. It\'s the best! What\'s not to love?"');
    scene.text('"Well… Guys like big boobs," she mumbles while self-consciously groping herself. "Doesn\'t that bother you?"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'I\'m happy like this', handler: (st: GameState) => {
    scene.text('"I\'m happy like this," you shrug before taking another sip of wine.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It bothers me a little', handler: (st: GameState) => {
    if (((s as any).pcs_cupsize ?? 0) <= 5) {
      scene.text('"I guess it bothers me a little," you say, frowning in displeasure as you look down at your flat chest. "It would be nice to have at least a <i>little</i> bounce in my boobs. Why? Does it bother <i>you</i>?"');
    } else {
      scene.text('"I guess it bothers me a little," you say, frowning in displeasure as you look down at your modest chest. "It would be nice to be a <i>little</i> bigger. Then I\'d be average at least. Why? Does it bother <i>you</i>?"');
    }
    scene.text('"Y-yeah," she stammers, a furious blush spreading through her cheeks. "Whenever I look at the other girls in our class, I get jealous. It\'s bad enough that I have to hang out with Irina and Bella, but even nerdy Natasha has bigger tits than me. It drives me crazy!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you pout and she starts shouting into the ceiling from your lap.');
    scene.text('"It\'s not fucking fair! Why did all the other girls get bigger boobs? Why not us?!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    { label: 'It bothers me a lot', handler: (st: GameState) => {
    if (((s as any).pcs_cupsize ?? 0) <= 5) {
      scene.text('"Of course it bothers me!" you say uncomfortably while looking down at your flat chest. "I\'m flatter than drywall, Albina. Guys like big boobs, things they can grab and play with. At the least, they want a view. I can\'t even give them that. I\'m practically a boy!"');
    } else {
      if (((s as any).pcs_cupsize ?? 0) <= 10) {
        scene.text('"Of course it bothers me!" you say uncomfortably while looking down at your modest chest. "I barely have any curve to me. I wouldn\'t have cleavage if I wore a V-neck down to my stomach. I see the looks that other girls get that I don\'t. Including you!"');
      } else {
        scene.text('"Of course it bothers me!" you say uncomfortably while looking down at your modest chest. "Big boobs draw all the attention. They\'re so much hotter than small boobs."');
      }
    }
    scene.text('"It\'s the worst when I\'m with Irina and Bella," she mumbles, a furious blush spreading through her cheeks. "But even nerdy Natasha has bigger tits than us. It drives me crazy!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you pout and she starts shouting into the ceiling from your lap.');
    scene.text('"It\'s not fucking fair! Why did all the other girls get bigger boobs? Why not us?!"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
    { label: 'Does it really bother you that much?', handler: (st: GameState) => {
    if (((s as any).pcs_cupsize ?? 0) >= 5) {
      scene.text('"Does it really bother you that much?" you ask, your brow scrunched with incomprehension.');
      scene.text('"Yes! How can being flatchested <i>not</i> bother you?! Don\'t you get jealous of the boys always checking out Bella and Irina? I want big tits like them!" she pouts with a loud tantrum.');
      qspCall(s, 'albina_wine_event', 'like_your_boobs');
      qspCall(s, 'albina_wine_event', 'mom_boobs');
    } else {
      if (((s as any).pcs_cupsize ?? 0) <= 10) {
        scene.text('"Does it really bother you that much?" you ask, your brow scrunched with incomprehension.');
        scene.text('"Yes! How can having such small tits <i>not</i> bother you?! Don\'t you get jealous of the boys always checking out Bella and Irina? I want big tits like them!" she pouts with a loud tantrum.');
        qspCall(s, 'albina_wine_event', 'like_your_boobs');
        qspCall(s, 'albina_wine_event', 'mom_boobs');
      }
    }
  } },
  ]);
  scene.build();
}

function enterMediumTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'albina_wine_event', 'like_your_boobs');
  // TODO-QSP: end
  scene.actions([
    { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you sigh in return. "I get so jealous of the girls in our class who have big boobs."');
    scene.text('"It\'s not fair!" she moans. "I want big tits! I want them! I want them! I want them!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
  } },
    { label: 'I wish I were smaller', handler: (st: GameState) => {
    scene.text('"I wish I were smaller actually," you sigh in return. "Like you. I feel like your tits are so much cuter than mine!"');
    scene.text('"No way!" she says, looking shocked. "Big tits are so much sexier than small tits! Better to be your size than my size. And even better to be bigger than both of us."');
    scene.text('She looks down at her chest, seemingly almost ashamed of her perky B-cups as a slow blush spreads across her face. Is she… <i>embarrassed</i>? Have you ever seen her embarrassed about anything before?');
    qspCall(s, 'albina_wine_event', 'each_their_own');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
  } },
  ]);
  scene.build();
}

function enterLargeTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'albina_wine_event', 'like_your_boobs');
  // TODO-QSP: end
  scene.actions([
    { label: 'I wish I were smaller', handler: (st: GameState) => {
    scene.text('"I wish I were smaller actually," you sigh in return. "Like you. I feel like your tits are so much cuter than mine!"');
    scene.text('"No way!" she says, looking shocked. "Big tits are so much sexier than small tits! Your tits are the best size! Big, bouncy, beautiful, they\'re super sexy! I-"');
    scene.text('She cuts off suddenly and looks away, a slow blush spreading across her face. Is she… <i>embarrassed</i>? Have you ever seen her embarrassed about anything before?');
    qspCall(s, 'albina_wine_event', 'each_their_own');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
  } },
  ]);
  scene.build();
}

function enterHugeTits(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It hurts', handler: (st: GameState) => {
    scene.text('"Barely," you grimace. "It really sucks having boobs this big. I think it\'s giving my back problems to be honest."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'A good bra', handler: (st: GameState) => {
    scene.text('"A really good bra," you say, sighing deeply. "If it weren\'t for that, my back would hurt constantly. I even have to wear it at night or it hurts my chest."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    { label: 'I wish I were smaller', handler: (st: GameState) => {
    scene.text('"I wish they weren\'t so big," you say, sighing deeply. "If I were like, your size, then I wouldn\'t have to spend all this money on bras, deal with all this back pain and it would be so much more convenient."');
    scene.text('"I wish I were bigger," she mumbles and you watch her face go red. "Maybe not as big as you, but bigger would be nice. A D-cup would make me feel super sexy."');
    scene.text('Shockingly, she seems <i>embarrassed</i> by the admission. Have you ever seen her embarrassed about anything before?');
    qspCall(s, 'albina_wine_event', 'each_their_own');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
  } },
  ]);
  scene.build();
}

function enterLikeYourBoobs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I like your boobs', handler: (st: GameState) => {
    scene.text('"What\'s with the complaints?" you ask. "I love your boobs! They\'ve got such a nice shape and are still bouncy without being dramatic. Your tits are super hot!"');
    scene.text('"But big boobs are sexier!" she moans. "It\'s not fair! I want big tits!"');
    qspCall(s, 'albina_wine_event', 'mom_boobs');
    scene.actions([
      { label: 'Your boobs are perfect', handler: (st: GameState) => {
    scene.text('"Well <i>I</i> think your boobs are perfect," you say above her loud tantrum. "You should learn to love them too."');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEachTheirOwn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'To each their own', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('"To each their own I guess," you say while shrugging. "Big boob girls aren\'t happy, small boob girls aren\'t happy. Is anybody happy?"');
    scene.text('"Boys with big dicks are happy," she grins while rubbing her thighs together. "Nnngh~! I wish I had a big fat cock up my ass right now! Don\'t you?"');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterMomBoobs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Is this because of your mom?', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    scene.text('You stare at Albina for a moment, judging her expression, peering deep into her psyche.');
    scene.text('"Is this because your mom has big boobs?" you blurt out.');
    scene.text('"No!" she says immediately and her face grows even more red.');
    scene.text('You continue to stare at her until she relents.');
    scene.text('"Okay, maybe a little. Ever since I was a girl, I thought Mama was beautiful. <i>Is</i> beautiful. I always remembered how she looked after she left and even now, more than twice our age, she looks just as good as when I was little. She\'s got legs and ass for days, flat abs, a toned figure, and big sexy fucking tits! I want to be like her so bad… I managed to get my ass like her\'s, but you can\'t squat your way to bigger tits."');
    scene.text('She sighs deeply. "So… yeah. I guess you could say I\'m a little jealous of my mom\'s boobs."');
    scene.text('"Makes sense," you nod sagely. "But your mom\'s tall? Being short doesn\'t seem to bother you?"');
    scene.text('"That\'s because I found out being short makes it easy to get manhandled in bed," she grins and both of you explode into giggles.');
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
  ]);
  scene.build();
}

function enterKiss1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'kiss', (-10));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/lesbian/kiss1.mp4');
  scene.text('You passionately, if drunkenly, make out with each other before Albina settles back into your lap and guzzles her wine.');
  qspCall(s, 'albina_wine_event', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterBoobPlay(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
  scene.text('You look down at Albina, who seems to be working up the courage to ask you something.');
  scene.text('"What\'s up?" you ask.');
  scene.text('"Can I… Can I touch your boobs?" she asks in an uncharacteristically sheepish tone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Question her', handler: (st: GameState) => {
    scene.text('You give her a puzzled stare. "That\'s an odd thing to ask your friend, Albina."');
    scene.text('"I just want to know what they feel like, but if you don\'t want to do it, then you don\'t have to do it. Just forget I said anything," she retorts and proceeds to gulp down her wine while giving you the silent treatment.');
    scene.text('You take a sip from your glass as she pouts underneath you.');
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'end'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    scene.text('You give her a puzzled stare. "Sure, but can I ask why?"');
    scene.text('"I just want to know what they feel like," she replies as she places her glass down and gets on her back on the couch before motioning for you to get on top of her. "Come on, I want those puppies hanging in my face."');
    scene.text('You do as she asks and climb on top of her, allowing your breasts to hang in front of a strangely excited Albina. She immediately grabs them both in her hands and starts squeezing and kneading them between her fingers.');
    scene.text('"Can I suck on them?" she asks rather abruptly.');
    scene.actions([
      { label: 'Too far', handler: (st: GameState) => {
    scene.text('You pull yourself away from her. "That\'s going a bit too far, Albina."');
    // TODO-QSP: dynamic text: She gives you a confused stare. "Seriously, <<$pcs_nickname>>? Why turn into a p...
    scene.text(`She gives you a confused stare. "Seriously, ${((s as any).pcs_nickname ?? 0)}? Why turn into a prude all of a sudden?"`);
    scene.text('You open your mouth to reply, but she cuts you off. "Let\'s just forget any of this happened, yeah?"');
    scene.text('She proceeds to gulp down her wine while giving you the silent treatment. You take a sip from your glass as she pouts next to you.');
    scene.actions([
      { label: 'Continue', goto: ['albina_wine_event', 'end'] },
    ]);
  } },
      { label: 'Let her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'massage', (-10));
    qspCall(s, 'arousal', 'foreplay', (-10));
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/boob_play.jpg');
    scene.text('You silently nod down at her and your nipple immediately tingles with pleasure as you feel her pierced tongue start working circles over it.');
    scene.text('After a few seconds of this, she takes your breast into her mouth and starts sucking on it while continuing to lick your now rock-hard nipple and using her free hand to squeeze your other breast. You moan softly in pleasure as she expertly teases you.');
    if (((s as any).pregChem ?? 0) >= 4380) {
      scene.text('As your pleasure builds, you feel something else and realize too late that Albina\'s actions have caused you to start lactating! You\'re unable to pull away before breast milk starts spurting out of you - and into her mouth.');
      scene.text('You quickly pull away. "Oh my god! Albina, I\'m so sorry! I didn\'t mean to do that!" you say in a panic and feel your face turning red as Albina turns her head and spits your milk out.');
      // TODO-QSP: dynamic text: "Calm down <<$pcs_nickname>>, it wasn't your fault. I should've expected it cons...
      scene.text(`"Calm down ${((s as any).pcs_nickname ?? 0)}, it wasn't your fault. I should've expected it considering your… condition," she replies before a grin appears on her lips. "It was actually kind of hot."`);
      scene.text('You still feel a little embarrassed as you untangle yourselves from each other and Albina cleans herself up before you both grab your glasses and snuggle down on the couch together.');
      scene.actions([
        { label: 'Continue', goto: ['albina_wine_event', 'end'] },
      ]);
    } else {
      scene.text('You feel your pleasure slowly building as Albina continues playing with your nipple, but she abruptly, and rather teasingly stops just as it\'s getting good. You pull away and look down to see her smiling up at you. "Have fun?" you ask with a grin.');
      scene.text('"That was so fucking hot!" she replies with a giggle. "Your tits are amazing! I could suck on them all day!"');
      scene.text('"You can suck on these puppies whenever you feel like it," you giggle back before you untangle yourselves from each other and grab your glasses before snuggling down on the couch together.');
      scene.actions([
        { label: 'Continue', goto: ['albina_wine_event', 'end'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'albinahome', 'zoya_schedule');
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk_blur.jpg');
    scene.text('As you take another sip of your wine, everything starts to get hazy. You try to sit up, but the room spins and the next thing you know…');
    scene.actions([
      { label: 'Pass out', handler: (st: GameState) => {
    qspCall(s, 'albinahome', 'zoya_schedule');
    scene.img('images/system/1_openings/4_csb/11.jpg');
    scene.text('…');
    if (((s as any).locat ?? 0)?.['zoya'] === 3  ||  ((s as any).locat ?? 0)?.['zoya'] === 5) {
      scene.actions([
        { label: 'Continue', goto: ['albina_wine_event', 'caught'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['albina_wine_event', 'wakeup'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCaught(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
  ((s as any).AlbinaQW ?? {})['wine_count'] = 0;
  if (((s as any).AlbinaQW ?? 0)?.['wine_caught'] === 0) {
    ((s as any).AlbinaQW ?? {})['wine_caught'] = 1;
  }
  scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
  scene.text('"<i><b>ALBINA BARLOVSKAYA!</b></i>"');
  scene.text('A deafening blare splits your ears and you sit up, bewildered as to what\'s going on. Looking around, you see Albina just as confused as you are and her mother fuming as she stalks across the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Oh shit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
    scene.text('"What the hell do you think you\'re doing, young lady?!" Zoya asks before grabbing Albina by the ear and yanking her to her feet. "Getting drunk while <i>naked</i>?!"');
    scene.text('"Ow! Ow ow ow ow ow!" Albina whines in pain while standing on her tiptoes, trying to escape her mother\'s grasp. "We\'re just having some fun! Lay off, Mama!"');
    scene.text('Zoya ignores her pleas. "I thought even you had better sense than this, Albina!"');
    scene.text('"What are you gonna do? <i>Spank me</i>?" Albina blurts out as she glares back rebelliously. "Don\'t be such a bitch!"');
    scene.text('"What did you just say to me?!" Zoya sputters before she drags Albina off towards the stairs, howls of pain following. "I am your <i>mother</i>! I will not tolerate such disrespect!"');
    // TODO-QSP: dynamic text: She calls back down towards you. "Put your clothes on, <<$pcs_firstname>>!"
    scene.text(`She calls back down towards you. "Put your clothes on, ${((s as any).pcs_firstname ?? 0)}!"`);
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('You stumble around, drunkenly finding your clothes as shouts of pain and anger echo down from above until a door slams and they finally cease. Zoya then comes huffing down the stairs.');
    scene.text('"I can\'t believe that girl sometimes…" she mutters to herself. "Damn you, Boris! Grooming my daughter into a shameless slut…"');
    scene.text('Once she gets to the bottom of the stairs, she straightens her skirt and grabs you by the hand.');
    scene.text('"Come, I\'m taking you home."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj2.jpg');
    scene.text('The mansion door slams behind you and you suddenly find yourself outside the door of your family\'s apartment.');
    scene.text('"Huh? How did I…?" You try to turn around, but a pair of hands give you a gentle push on the back.');
    scene.text('"Now get inside," Zoya\'s voice sounds from behind you. "I won\'t tell your mother about this as I expect Albina likely… \'seduced\' you into it, but you need to get to bed and sleep off all that alcohol. Drink a full bottle of water before you do. You\'ll thank yourself in the morning."');
    scene.text('After managing to fumble your key into the door, you drunkenly stumble in and Zoya carefully closes the door behind you.');
    scene.actions([
      { label: 'Continue', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 20);
  ((s as any).AlbinaQW ?? {})['wine_count'] = 0;
  scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>… <<$pcs_nickname>>!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}… ${((s as any).pcs_nickname ?? 0)}!"`);
  scene.text('You\'re awakened from your drunken stupor by someone roughly shaking you.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, wake up!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, wake up!"`);
  scene.text('You slowly open your eyes to see Albina staring at you.');
  scene.text('"You need to get dressed before Mama sees us! She would kill me if she found out!"');
  scene.text('You drunkenly stumble around pulling your clothes on before Albina ushers you to the door.');
  scene.text('"You should go," she says. "I\'m going to sleep this off before Mama chews me out. I\'ll talk to you some other time."');
  scene.text('You stumble out of the door before she closes it behind you. The fresh air hitting you helps you wake up a little.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'wine_invite':
      enterWineInvite(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'wine_chat1':
      enterWineChat1(s, scene);
      break;
    case 'pussy_taste':
      enterPussyTaste(s, scene);
      break;
    case 'shave_talk':
      enterShaveTalk(s, scene);
      break;
    case 'dominate_albina':
      enterDominateAlbina(s, scene);
      break;
    case 'masturbation_talk':
      enterMasturbationTalk(s, scene);
      break;
    case 'porn_talk':
      enterPornTalk(s, scene);
      break;
    case 'tell_raped':
      enterTellRaped(s, scene);
      break;
    case 'boob_size_talk':
      enterBoobSizeTalk(s, scene);
      break;
    case 'commando_talk':
      enterCommandoTalk(s, scene);
      break;
    case 'stripper_talk':
      enterStripperTalk(s, scene);
      break;
    case 'wine_chat2':
      enterWineChat2(s, scene);
      break;
    case 'masturbate_answer2':
      enterMasturbateAnswer2(s, scene);
      break;
    case 'shave_answer1':
      enterShaveAnswer1(s, scene);
      break;
    case 'shave_answer2':
      enterShaveAnswer2(s, scene);
      break;
    case 'shave_answer5':
      enterShaveAnswer5(s, scene);
      break;
    case 'shave_answer6':
      enterShaveAnswer6(s, scene);
      break;
    case 'shave_elaborate':
      enterShaveElaborate(s, scene);
      break;
    case 'small_tits':
      enterSmallTits(s, scene);
      break;
    case 'medium_tits':
      enterMediumTits(s, scene);
      break;
    case 'large_tits':
      enterLargeTits(s, scene);
      break;
    case 'huge_tits':
      enterHugeTits(s, scene);
      break;
    case 'like_your_boobs':
      enterLikeYourBoobs(s, scene);
      break;
    case 'each_their_own':
      enterEachTheirOwn(s, scene);
      break;
    case 'mom_boobs':
      enterMomBoobs(s, scene);
      break;
    case 'kiss1':
      enterKiss1(s, scene);
      break;
    case 'boob_play':
      enterBoobPlay(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'caught':
      enterCaught(s, scene);
      break;
    case 'wakeup':
      enterWakeup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_wine_event: LocationDef = {
  name: 'albina_wine_event',
  title: 'As the two of you head back inside the house, Albina takes y',
  region: 'other',
  enter: enter,
};
