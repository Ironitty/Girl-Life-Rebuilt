import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWineInvite(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
  scene.text('As the two of you head back inside the house, Albina takes you by the hand and points towards the kitchen.');
  if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
    scene.text('"Hey, wanna break open a bottle of wine with me? Really warms you up after a dip in the pool."');
  } else {
    scene.text('"Hey, wanna drink some wine with me again?"');
  }
  // TODO-QSP: end !}
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
    { label: 'I can\'t get drunk right now', handler: (st: GameState) => {
    scene.text('You shake your head. "No thanks, I can\'t get drunk right now. I have things to do."');
  } },
    { label: 'I remember how the last one ended' }, // TODO-QSP: empty action body
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
  scene.build();
}

function enterDominateAlbina(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Serious question, <<$pcs_nickname>>," she says, looking up at you with a mirthl...
  scene.text(`"Serious question, ${((s as any).pcs_nickname ?? 0)}," she says, looking up at you with a mirthless expression on her face. "If you wanted to dominate me in bed, what would you do?"`);
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
    scene.actions([
      { label: 'Is that an invitation?', handler: (st: GameState) => {
    scene.text('"Is that an invitation?" you ask.');
    scene.text('"Come and find out," she whispers.');
    // TODO-QSP: end !}
    qspCall(s, 'albina_wine_event', 'wine_chat2');
  } },
      { label: 'Force you between my legs', handler: (st: GameState) => {
    scene.text('"I\'d force your head into my crotch and wrap my legs around your head. I\'d keep squeezing harder until you make me cum all over your pretty little face," you tell her with a wicked grin.');
    scene.text('"Well…" she smiles back. "My head is already here… You could, you know, grab my hair and see if I resist…"');
    scene.actions([
      { label: 'Is that an invitation?', handler: (st: GameState) => {
    scene.text('"Is that an invitation?" you ask.');
    scene.text('"Come and find out," she whispers.');
    // TODO-QSP: end !}
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
  } },
    ]);
  } },
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
    default:
      enterWineInvite(s, scene);
      break;
  }
}

export const albina_wine_event: LocationDef = {
  name: 'albina_wine_event',
  title: 'As the two of you head back inside the house, Albina takes y',
  region: 'other',
  description: ['As the two of you head back inside the house, Albina takes you by the hand and points towards the kitchen.'],
  enter: enter,
};
