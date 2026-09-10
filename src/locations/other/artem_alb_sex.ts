import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAlbina_3some(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('You chat with Artem about what to expect before you reach the door to Albina\'s dorm room. You knock and Albina soon answers it, wearing a T shirt and a pair of shorts.');
  scene.text('She stands aside to let you in, grinning at you before she closes the door and walks over to sit next to you.');
  scene.text('"So… You ready, nerd?"');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    // TODO-QSP: dynamic text: Artem gives her a cocky smirk while shamelessly checking her out. "<<$pcs_nickna...
    scene.text(`Artem gives her a cocky smirk while shamelessly checking her out. "${((s as any).pcs_nickname ?? 0)} said I had to beat you at some game to fuck you, so that's exactly what I'm going to do."`);
    scene.text('She smiles. "Someone\'s feeling confident…"');
    scene.text('"Of course I am," he confidently replies. "Your pussy will be mine before you know it."');
    scene.text('Albina starts the game and hands Artem a controller before she drops down next to him. "Give it your best shot, nerd!"');
    scene.text('You settle down and watch as the two of them choose their characters and start their match. Artem seems very focused and pays little attention to anything else, seemingly forgetting that you\'re even here.');
    scene.actions([
      { label: 'Watch', goto: ['artem_alb_sex', 'game'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: Artem smiles confidently. "<<$pcs_nickname>> said I get to fuck you if I win a g...
    scene.text(`Artem smiles confidently. "${((s as any).pcs_nickname ?? 0)} said I get to fuck you if I win a game against you?"`);
    scene.text('She smiles. "Yeah, but I don\'t think you have it in you."');
    scene.text('He smirks. "Let\'s play and find out then."');
    scene.text('Albina starts the game and hands Artem a controller before dropping down next to him. "Give it your best shot, nerd."');
    scene.text('You settle down and watch as the two of them choose their characters and start their match. Artem glances over and smiles at you a few times as he plays.');
    scene.actions([
      { label: 'Watch', goto: ['artem_alb_sex', 'game'] },
    ]);
  }
  scene.build();
}

function enterGame(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/uni/dorm_game_tv.jpg');
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    scene.text('The two battle it out over multiple rounds, with Artem slowly gaining the edge over Albina before he eventually emerges victorious.');
    scene.text('Albina tosses her controller aside in frustrated defeat. "<i>How</i>?! How did you do that?! Nobody has ever beaten my strategy like that!"');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      // TODO-QSP: dynamic text: "Kicking your ass was far easier than I thought it would be. <<$pcs_nickname>> m...
      scene.text(`"Kicking your ass was far easier than I thought it would be. ${((s as any).pcs_nickname ?? 0)} made it sound like you were actually good at this game," he gloats. "Now get your tits out."`);
      scene.text('Albina bites her lip. She looks just as aroused as she is surprised at Artem\'s brazen confidence. "A bet <i>is</i> a bet after all…"');
      scene.text('She kneels on the bed and pulls her T shirt up, revealing her perky breasts.');
      scene.text('"Like what you see?" she says with a smirk as she pulls her shirt off and jiggles her breasts. "Come and claim your prize, <i>winner</i>…"');
      scene.actions([
        { label: 'Watch', goto: ['artem_alb_sex', 'albina_3some_cuni_dom'] },
      ]);
    } else {
      scene.text('"Looks like you aren\'t as good at this game as you thought," he grins while looking at her expectantly.');
      scene.text('Albina sulks. "Fine! A bet\'s a bet…"');
      scene.text('She kneels on the bed and pulls her T shirt up, revealing her perky breasts.');
      scene.text('"Like what you see?" she says with a smirk as she pulls her shirt off and jiggles her breasts. "Come and claim your prize, <i>winner</i>…"');
      scene.actions([
        { label: 'Watch', goto: ['artem_alb_sex', 'albina_3some_cuni'] },
      ]);
    }
  } else {
    (s as any).artemQW['alb_bet_attempts'] = ((s as any).artemQW['alb_bet_attempts'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('The two battle it out over multiple rounds before Albina emerges victorious, despite Artem\'s best efforts.');
    scene.text('He sulks a little as he places his controller down in defeat.');
    if (((s as any).artemQW ?? 0)?.['alb_bet_attempts'] === 3) {
      scene.text('"Victorious once again," Albina sighs. "I\'m getting tired of kicking your ass when you\'re supposed to be fucking mine, Artem!"');
      scene.text('"How about a rematch?" he asks.');
      scene.text('She scoffs in response. "So you can lose <i>again</i>? No thanks."');
      scene.actions([
        { label: 'Watch Artem\'s reaction', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/shared/sex/blowjob/bj9.mp4');
      scene.text('Artem\'s eyes wander up and down Albina\'s body before he grins.');
      scene.text('"That match was pretty close, was it not? I think I\'ve earned a blowjob from you at least," he confidently states. "Better yet, I\'ll skullfuck your brains out."');
      scene.text('Albina bites her lip. "Let\'s see if you can put your money where your mouth is, nerd!"');
      scene.text('Curious, you watch Artem stand up as Albina gets on her knees in front of him and pulls his pants down, his rock hard cock springing free.');
      scene.text('"Someone\'s eager!" she grins as she wraps her hand around his shaft. "Let\'s have a taste then…"');
      scene.text('He grins smugly as she takes his cock into her mouth and starts sucking, quickly grabbing her head and forcing her down on his cock.');
      scene.text('"Oh fuck yeah! Choke on my dick, bitch!"');
      scene.actions([
        { label: 'Keep watching', handler: (st: GameState) => {
    (s as any).AlbinaQW['artem_dom_bj'] = 1;
    (s as any).artemQW['artem_dom'] = ((s as any).artemQW['artem_dom'] ?? 0) + (1);
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral5.mp4');
    scene.text('You keep watching as Artem tightly balls her hair in his fists before proceeding to roughly fuck her throat without a care, causing her to loudly gag and splutter on his cock as she coughs up drool that drips from her chin and soaks into her T shirt.');
    scene.text('She obediently sucks his dick as best as she can as he continues roughly thrusting into her throat. A few seconds later, he starts loudly grunting and suddenly pulls out, Albina barely able to close her eyes in time before his cum starts splattering all over her face.');
    scene.text('Once he squeezes the last drop of cum out, he shoves his cock back in her mouth and makes her suck it clean.');
    scene.text('Once she finishes, she pops his dick out of her mouth and he collapses back on her bed as she grins up at him.');
    scene.text('"Fuck, I didn\'t know you had that in you, Artem! I think I almost came!" she grins as her hand plunges down her shorts.');
    scene.text('Artem pulls his pants back up while smugly grinning down at her. "You liked choking on my nerd dick like a little slut, huh?"');
    // TODO-QSP: dynamic text: You can see her biting her lip before she gets up and grabs some wipes to clean ...
    scene.text(`You can see her biting her lip before she gets up and grabs some wipes to clean her face. Once she's done, she leads you both to the door. "Bring him back some time soon, ${((s as any).pcs_nickname ?? 0)}. We have some… business to finish…"`);
    scene.text('Artem has a smug swagger to his walk and you smile at her before she closes the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['artem_alb_sex', 'how_he_feels_bj'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/shared/sex/blowjob/kotovbj53.mp4');
      scene.text('"Oh. Is that it then?" he asks.');
      scene.text('Albina seems to ponder it for a moment. "Okay, maybe you deserve a little something for <i>almost</i> beating me…"');
      scene.text('Curious, you watch Albina slide off the bed and get on her knees in front of a surprised Artem. She unbuckles his belt and pulls his pants down, his rock hard cock almost smacking her in the face as it springs free.');
      scene.text('"I\'ve never sucked a nerd\'s cock before," she smirks. "I wonder what it tastes like…"');
      scene.text('She taps his cock on her tongue a few times before she runs her tongue over his balls and up his shaft.');
      scene.actions([
        { label: 'Keep watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    (s as any).AlbinaQW['artem_invite'] = (-1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj46.mp4');
    scene.text('You keep watching as she takes Artem\'s cock into her mouth and starts sucking, causing Artem to moan loudly in pleasure.');
    scene.text('For the next few minutes, the room is filled with the wet, sloppy sounds of Albina sucking and gagging on Artem\'s dick.');
    scene.text('"Gonna cum!" Artem soon cries out and starts tensing up.');
    scene.text('Albina, however, starts sucking even harder until Artem suddenly bucks his hips and groans as he cums in her mouth.');
    scene.text('Once he finishes, she pops his cock out of her mouth and makes a show of swallowing his cum before smiling up at him. "Best blowjob you\'ve ever had, right?"');
    scene.text('Artem just sits on the bed speechless as he pants loudly.');
    scene.text('"I\'ll take that as a yes…" she smirks before she cleans herself up and Artem pulls his pants back up.');
    scene.text('She then walks you both to the door, Artem striding out into the hallway with an aura of newfound confidence. Albina just smiles before she closes the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['artem_alb_sex', 'how_he_feels_bj'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
        scene.text('Albina smirks. "Looks like my pussy won\'t be yours after all…"');
        scene.text('Artem just grins while checking her out. "Not tonight, no, but I\'ll beat you next time and have you begging for my cock in your holes!"');
        scene.text('Albina grins back, clearly impressed by his confidence. "I\'ll give you another chance. Bring your A game next week and you might just get to fuck me…"');
        scene.text('She gives you a hug before walking you to the door. She yelps and grins when Artem smacks her ass on the way out. "See you next time, slut."');
        scene.text('You see her bite her lip before she closes the door behind you.');
        scene.actions([
          { label: 'Leave', goto: ['artem_alb_sex', 'how_he_feels'] },
        ]);
      } else {
        scene.text('Albina smirks. "Looks like you didn\'t have it in you after all…"');
        scene.text('Artem casually shrugs. "Tonight wasn\'t my night, but I\'ll get you next time."');
        scene.text('"We\'ll see," she replies. "Bring your A game next week and you might just get my pussy."');
        scene.text('Artem nods and you both leave her room, Albina giving you a hug before she closes the door.');
        scene.actions([
          { label: 'Leave', goto: ['artem_alb_sex', 'how_he_feels'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAlbina_3someCuniDom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/kotovsex31.mp4');
  scene.text('Artem grins and quickly undresses himself before he pushes her down onto her back. She grins as he roughly pulls her shorts and thong off and tosses them aside before pushing her legs up to her head, allowing him to bury his face in her pussy and start eating her out. His skilled eagerness causes her to moan loudly and rock her hips.');
  scene.text('After a few minutes, he seems to get bored and pulls away from her, taking his clothes off as she lies shaking on the bed.');
  scene.text('"Fuucckkk, where did you learn to do that…?" she moans softly.');
  scene.text('"Shut up and suck my dick like a good little slut!" he orders as he stands next to the bed, his rock hard cock twitching in anticipation.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Albina gives Artem a blowjob', goto: ['artem_alb_sex', 'albina_3some_bj_dom'] },
  ]);
  scene.build();
}

function enterAlbina_3someCuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/kotovsex30.mp4');
  scene.text('Artem undresses as Albina pulls her shorts and thong off and tosses them aside before she flops herself down on her stomach and spreads her legs.');
  scene.text('Getting the hint, Artem quickly kneels down behind her and starts licking her pussy. While she moans a little in pleasure at first, it soon becomes apparent that, while he\'s eager, his technique isn\'t up to her standards.');
  scene.text('"How about you sit back and let me pleasure you instead?" she says as she turns around and pushes him away.');
  scene.text('Artem grins as he sits back on her bed, his rock hard cock visibly twitching in anticipation.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Albina gives Artem a blowjob', goto: ['artem_alb_sex', 'albina_3some_bj'] },
  ]);
  scene.build();
}

function enterAlbina_3someCuni2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/pussylick5.mp4');
  scene.text('He forcefully shoves your face into Albina\'s pussy and you obediently start licking. She\'s already wet and moans loudly, her juices coating your tongue and smearing across your face as she grinds against you.');
  scene.text('You eat her out for a few minutes before Artem suddenly pulls you away and you see him standing next to you stroking his cock before he grabs your hair in his hand and pulls you over to him.');
  qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck his dick', goto: ['artem_alb_sex', 'albina_3some_doggy_dom'] },
  ]);
  scene.build();
}

function enterAlbina_3someBjDom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/kotovbj113.mp4');
  scene.text('Albina seductively crawls over and settles in front of Artem before she takes his dick into her mouth and starts sucking. As she does, he reaches back and starts squeezing and smacking her ass, causing her to moan onto his cock.');
  scene.text('After a minute or so of this, he suddenly grabs her hair in his fist and shoves her down on his dick. You can hear her gagging as he starts roughly fucking her mouth.');
  scene.text('"Of course a slut like you has a tongue piercing, but I\'d be lying if I said it doesn\'t feel good teasing my cock like that!" he smirks.');
  scene.text('After a few minutes, he pulls her off his dick and she looks up at him lustfully as she gasps for air, multiple ropes of saliva running from her mouth to his shaft. Artem offers her no reprieve, however, and roughly before he reaches over and drags you over to him by your hair.');
  scene.text('"Get this slut\'s pussy nice and wet for me!" he barks.');
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Eat her out', goto: ['artem_alb_sex', 'albina_3some_cuni2'] },
  ]);
  scene.build();
}

function enterAlbina_3someBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/bj46.mp4');
  scene.text('Albina gets off the bed and removes the rest of her clothes before she settles between Artem\'s legs, sucking on his balls before she takes his dick into her mouth and starts sucking.');
  scene.text('"I didn\'t know you had a tongue piercing! Fuck, it feels so good!" he moans before he places his hand on the back of her head and encourages her to go deeper. She gags slightly as she obediently deepthroats him.');
  qspCall(s, 'arousal', 'voyeur_sex', (-2));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/shared/sex/handjob/hand.jpg');
    // TODO-QSP: dynamic text: After a few minutes, Albina pops his dick out of her mouth and looks up at him w...
    scene.text(`After a few minutes, Albina pops his dick out of her mouth and looks up at him while slowly jerking it in her hand. "I suck your dick better than ${((s as any).pcs_nickname ?? 0)}, don't I? Or do you want to compare first?" she asks as she turns to you and winks.`);
    scene.text('You give her an amused smirk and undress yourself before you kneel down beside them and obediently starts stroking his cock before you take it into your mouth, tightly wrapping your lips around his shaft before you start sucking.');
    scene.text('Albina resumes licking and sucking on his balls and you hear him moaning loudly.');
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Albina gets fucked', goto: ['artem_alb_sex', 'albina_3some_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someDoggyDom(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog11.mp4');
  scene.text('You obediently open your mouth and he shoves his cock inside. You eagerly suck and gag on it for a few minutes before he pushes you aside and forces Albina down on her bed. He then moves in behind her and gives her ass a few hard smacks before he shoves his dick into her awaiting pussy, causing them both to moan.');
  scene.text('"Fuck, your pussy is tight!" he cries out as he starts fucking her. "I\'m going to enjoy pounding your slutty little hole!"');
  scene.text('"Your dick feels so good stretching my little pussy!" she squeals as Artem starts thrusting hard and deep.');
  scene.text('"Shut up and take my cock, bitch!" he says and smacks her on the ass again before grabbing her hair in his hands and thrusting even harder.');
  scene.text('You climb onto the bed in front of Albina and spread your legs, inviting her to eat you out as Artem pounds her from behind. She obediently does so and you moan softly as she licks and sucks on your clit.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'arousal', 'bj', (-2));
  qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Enjoy it', goto: ['artem_alb_sex', 'albina_3some_rough'] },
  ]);
  scene.build();
}

function enterAlbina_3someDoggy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/doggy/med3.mp4');
  scene.text('Artem is moaning loudly and squirms in pleasure before she suddenly pops his cock out of her mouth.');
  scene.text('She stands and turns around before wiggling her ass at him. "I\'ve never had a nerd cock in my pussy before. Why don\'t you show me how it feels?"');
  scene.text('You watch as she gets on all fours on the bed before Artem eagerly moves in behind her and lines his cock up with her pussy.');
  scene.text('He gasps loudly as he pushes his cock into her pussy, causing Albina to smirk. "Nice and tight, right? Now <i>fuck me</i>."');
  scene.text('He grabs her hips and starts thrusting into her as you climb onto the bed in front of Albina and spread your legs, inviting her to eat you out. She starts licking and sucking on your clit, causing you to moan softly.');
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Swap with Albina', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding.jpg');
    scene.text('Albina moans into your pussy when Artem suddenly grunts and quickly pulls out of her pussy.');
    // TODO-QSP: dynamic text: "Am I too tight for you to handle?" she grins. "How about you give <<$pcs_nickna...
    scene.text(`"Am I too tight for you to handle?" she grins. "How about you give ${((s as any).pcs_nickname ?? 0)} a turn with that cock then?"`);
    scene.text('Artem just smiles at you and you return his smile as he gets into position on his back and pulls you on top of him. You line your pussy up and slide down onto his awaiting cock, moaning softly as it stretches you out.');
    scene.text('You start riding him as Albina straddles his face. He starts eating her out as the two of you make out, causing you to moan into each other\'s mouths.');
    scene.text('After a few minutes, a muffled grunt from Artem tells you both that he\'s about to cum.');
    scene.text('Albina quickly climbs off of him. "Don\'t cum yet or you won\'t get your surprise!"');
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'arousal', 'kiss', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['artem_alb_sex', 'albina_3some_bj_double'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someBjDouble(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'hj', 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj1.jpg');
  scene.text('Curious, you stop riding Artem as you watch Albina climb off of him and motion for you to do the same. You do as she asks and join her as she kneels next to his cock.');
  scene.text('"Your boyfriend has a pretty nice cock," she says teasingly, more to Artem than you. "How about we share it at the same time?"');
  scene.text('You nod and start jerking Artem\'s cock as Albina watches. Glancing up at Artem, you can see that he\'s just as surprised as he is curious.');
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj2.jpg');
    scene.text('Grinning at Albina, you take his cock into your mouth and start sucking as you both gaze up at Artem, a happy smile on his face as he moans softly.');
    scene.text('"This is a dream," he groans. "This can\'t possibly be happening!"');
    scene.text('After a few minutes, Albina stops you. "My turn."');
    scene.actions([
      { label: 'Let her have a turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj3.jpg');
    scene.text('You pop his dick out of your mouth and smile at Albina as you invite her to take your place. She grins back before she wraps her lips around his shaft and starts sucking.');
    scene.text('You watch her bobbing her head up and down his shaft for a few seconds before you focus your efforts on sucking his balls. You gaze up at him as he moans even louder.');
    scene.text('"This is actually happening! Two girls are sucking my dick at the same time!"');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj4.jpg');
    scene.text('Albina continues sucking and you keep licking his balls before he suddenly starts grunting and tensing up.');
    scene.text('Albina starts sucking even harder as you gaze up at Artem, who looks like he\'s trying to hold out as long as he can. Albina\'s skill, however, means that he very quickly reaches his climax.');
    scene.text('Groaning loudly as he bucks his hips, you see his cock twitching as he blows his load into Albina\'s mouth.');
    scene.text('Once he\'s done, she starts sucking on the tip while jerking him off, milking every last drop of his cum into her mouth. You in turn run your tongue up and down his shaft, licking up any cum that\'s left.');
    scene.actions([
      { label: 'Continue', goto: ['artem_alb_sex', 'albina_3some_swallow'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someRough(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss4.mp4');
  scene.text('During one of his thrusts, Artem\'s dick unexpectedly pops out of her pussy and he uses the opportunity to roughly flip her onto her back. You sit up and kneel on the bed, watching Albina spread her legs wide before she reaches down and spreads her pussy lips, eagerly exposing her dripping wet hole.');
  scene.text('"Hurry up and put it back inside me!" she pants, practically begging.');
  scene.text('Artem grins smugly as he climbs in between her legs and slides his dick back inside her awaiting pussy, causing the two of them to moan loudly.');
  scene.text('"We\'ll see how tight this pussy is after I\'m done fucking you like the dirty little slut you are!"');
  scene.text('Albina gazes up at him while biting her lower lip. "Is that so? Then prove it."');
  scene.text('His gaze hardens and he starts ramming his cock into her pussy while roughly kneading her breast in his hand, causing her to moan and gasp loudly in pleasure.');
  scene.text('"Fuck yeah, pound my tight little pussy! Harder!" she squeals as Artem thrusts himself balls deep into her, the bed squeaking loudly beneath them as you continue watching.');
  scene.actions([
    { label: 'Keep watching', handler: (st: GameState) => {
    scene.text('You continue watching Artem roughly pound Albina, who gropes at her breasts as she moans in pleasure. After a few minutes, he pulls out again.');
    scene.text('"Fuck, your pussy felt good!" he grunts. "I\'d pound it all night if I could!"');
    scene.text('Albina just lies on the bed panting loudly, her juices dripping from her soaking wet pussy. "Fuck… That was AMAZING!"');
    scene.text('"Just look at how wet you are!" Artem grins. "You really are a dirty little slut!"');
    scene.text('Albina grins as she continues panting. "Keep going. Keep fucking me just like that!"');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', goto: ['artem_alb_sex', 'albina_3some_rough1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someRough1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 5, 'rough');
  qspCall(s, 'arousal', 'voyeur_sex', (-2));
  qspCall(s, 'arousal', 'breasts', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding1.mp4');
  scene.text('You watch as Artem climbs off the bed and drags Albina over to him, causing her to squeal and giggle.');
  scene.text('"Get over here!" he barks at you. "I\'m going to fuck both of you sluts at the same time."');
  scene.text('You obediently crawl over and climb on top of Albina, smiling down at her as Artem paws at your ass.');
  scene.text('Seconds later, you feel his cock stretching your pussy and moan softly as he pushes it deep inside you.');
  scene.text('Artem then shoves you down and starts roughly pounding you, his hips loudly slapping against your ass. You cry out in pleasure before gasping when you suddenly feel Albina start sucking on your breast and licking your nipple.');
  scene.text('Just as it\'s starting to feel really good, Artem pulls out of you and Albina lets out a muffled moan as he starts fucking her again.');
  scene.text('"Fuck, you two sluts look fucking hot like this!" he grunts as you glance back and watch his cock sliding in and out of Albina\'s wet pussy.');
  scene.text('After a few minutes, he switches back to you. As he fucks you, he grabs Albina\'s legs and wraps them behind your back, the two of you now entangled in each other as he gives you a few deep thrusts before switching back to Albina.');
  scene.text('He continues alternating between fucking the two of you before he starts grunting that he\'s about to cum.');
  scene.actions([
    { label: 'Climax', goto: ['artem_alb_sex', 'albina_3some_cumshot'] },
  ]);
  scene.build();
}

function enterAlbina_3someSwallow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj4.jpg');
  scene.text('Artem lets out a loud satisfied sigh as Albina pops his spent cock out of her mouth.');
  scene.actions([
    { label: 'Let her swallow it and get cleaned up', goto: ['artem_alb_sex', 'albina_3some_cleanup'] },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj5.jpg');
    scene.text('You start kissing Albina as Artem watches, swapping his cum between you as you deeply and passionately make out. Once you\'re finished, you both swallow his cum before you look over at him and notice that his dick is already hard again.');
    scene.text('Albina gets up and grabs some wipes to clean herself before passing some to you. Artem soon follows suit and starts cleaning himself up as well.');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someCumshot(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/eat/eat_cum_butt.mp4');
  scene.text('Trying to fuck both of you as much as he can before he cums, Artem rapidly switches between the two of you before he pulls out of you and starts grunting as you feel spurt after spurt of warm cum splattering over your ass.');
  scene.text('Once he finishes, you collapse on top of Albina, your wet pussy rubbing against her own as the two of you pant loudly.');
  scene.text('"We\'re not done yet," Artem states. "Get up so this slut can clean you up."');
  scene.text('You disentangle yourself from Albina and get on all fours as Artem pulls her up behind you.');
  scene.text('"You\'re going to lick up every last drop like the little slut you are!" he barks.');
  scene.text('You glance back and watch as Albina obediently starts licking the cum from your ass, seemingly enjoying having Artem degrade and dominate her.');
  scene.text('Once she\'s finished, Artem grins smugly. "Good. Now kiss her with that slutty mouth. And don\'t spill a drop!"');
  scene.actions([
    { label: 'Be kissed', handler: (st: GameState) => {
    (s as any).AlbinaQW['artem_dom'] = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj5.jpg');
    scene.text('Albina scoots over and grabs your head before forcing her cum covered tongue into your mouth. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum.');
    scene.text('Albina then gets up and grabs some wipes to clean herself before passing some to you. Artem soon follows suit and starts cleaning himself up as well.');
    scene.actions([
      { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3someCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  (s as any).artemQW['albina_threesome'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/misc/dress_1.mp4');
  scene.text('Once you\'re all cleaned up, you and Artem start getting dressed as Albina lounges back naked on her bed.');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('"Who knew you could be so dominating, Artem? Especially with <i>two</i> girls at the same time…" she smirks before biting her lip. "It\'s quite hot when you act like that…"');
    scene.text('Artem grins smugly at her compliment and you notice his chest swell in obvious pride. "Maybe if you\'re a good little slut, I\'ll come back and fuck you like that again."');
    scene.text('She continues biting her lip and clamps her legs together as she looks at him seductively. "Is that so? I expect an even better pounding next time…"');
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2) {
      scene.text('He grins. "Next time I\'ll tear your ass up even harder than I did with Nush!"');
      scene.text('She appears to frown at the mention of her name. "Uh huh…"');
      scene.text('You smile at him. "Come on, playboy. It\'s time for us to go."');
      scene.text('He smiles back and you both leave Albina\'s room.');
    } else {
      scene.text('He grins. "Don\'t worry. Next time, I\'ll tear your ass up and leave you walking funny for a week!"');
      scene.text('She smiles. "Promises, promises…"');
      scene.text('You smile at him. "Come on, playboy. It\'s time for us to go."');
      scene.text('He smiles back and you both leave Albina\'s room.');
    }
  } else {
    scene.text('Artem glances over at her as he finishes getting dressed. "I hope you had as much fun as I did?"');
    scene.text('She gives him a small smile. "Yeah, you were… okay. Word of advice, though. You need to be more confident. Girls won\'t have any confidence in you if you don\'t have any in yourself. Try some dirty talk or being a bit more physically dominating."');
    scene.text('He nods. "Okay. I\'ll try."');
    scene.text('You smile at him. "It\'s time for us to go."');
    scene.text('He smiles back and you both leave Albina\'s room.');
  }
  scene.actions([
    { label: 'Ask how he feels', goto: ['artem_alb_sex', 'how_he_feels_sex'] },
  ]);
  scene.build();
}

function enterHowHeFeels(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Out in the hallway, you smile at him. "So you didn\'t quite manage to beat her, but how do you feel anyway?"');
  if (((s as any).artemQW ?? 0)?.['alb_bet_attempts'] === 3) {
    scene.text('He sighs. "I fucked up. I screwed my chances at fucking one of the hottest girls I\'ve ever seen! I\'m a fucking idiot! Why didn\'t I try harder?!"');
    scene.text('You grab his hand. "You might have missed your chance with Albina, but there\'s other girls out there you can try your shot with."');
    scene.text('He gives you a weak smile. "Yeah, I guess you\'re right…"');
    scene.text('The two of you fall into talking about how close he came to beating her as you head into the elevator together.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } else {
    scene.text('He sighs. "I was so close! She only won because she knows the game better," he says with complete confidence.');
    scene.text('You nod. "Maybe get a copy and practice for next time then?"');
    scene.text('He smiles. "Good idea! Next time… Next time she goes down!"');
    scene.text('You just laugh at his confidence. He\'s changed so much since your time in school. "I\'m sure you will."');
    scene.text('He smiles again and the two of you fall into talking about how close he came to beating her as you head into the elevator together.');
    scene.text('He shrugs, but you can tell he\'s a little disappointed. "Fine. Maybe I can try again some other time?"');
    scene.text('You nod. "I\'ll talk to her, but I\'m sure she\'ll be willing to give you another chance. I think she likes the challenge."');
    scene.text('He smiles and the two of you fall into talking about how close he came to beating her as you head into the elevator together.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  }
  scene.build();
}

function enterHowHeFeelsBj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom_bj'] === 1) {
    scene.text('Artem starts pacing around the hallway as soon as Albina closes the door. "God, that was amazing! The things she done with her tongue as I fucked her throat…" He trails off when he looks you in the eye. "Oh. Uh, no offence to you or anything. You\'re still pretty good…"');
    scene.text('You just smile at him. "No, it\'s okay. I\'m glad you enjoyed yourself and she clearly enjoyed it as well…"');
    scene.text('He grins. "I know! I can\'t believe she almost came from just a blowjob! I can\'t wait until I get the chance to fuck her!"');
    scene.text('You smile at his confidence. He\'s changed so much since your time in school. "I\'m sure you\'ll get your chance soon…"');
    scene.text('He smiles again and the two of you fall into talking about how close he came to beating her as you head into the elevator together.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } else {
    scene.text('Out in the hallway, you smile and kiss him. "So you didn\'t quite manage to beat her, but how do you feel anyway?"');
    scene.text('A wide grin appears on his face. "I got one of the best blowjobs ever from one of the hottest girls I know! The guys will be so jealous!"');
    scene.text('You give him a stern glare. "I know you had fun, but dial it down. Albina won\'t appreciate you telling people that sort of thing, especially when you\'re bragging about it to your friends."');
    scene.text('He blushes slightly. "Oh, sorry. I guess I got a little carried away there, but Petka and Feofan would flip knowing that I got a blowjob from <i>Albina</i>!"');
    scene.text('"I know," you smile. "But she\'s my friend and I don\'t want everyone knowing her private business."');
    scene.text('The two of you fall into talking about how close he came to beating her as you head into the elevator together.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  }
  scene.build();
}

function enterHowHeFeelsSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Out in the hallway, you smile and kiss him. "So? How did that make you feel?"');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('He starts pacing around, full of energy. "Fuck, that was better than I could ever have imagined!"');
    scene.text('He shakes his head in disbelief, as if he\'s still struggling to believe what just happened. "I <i>actually</i> fucked <i>Albina Barlovskaya</i>! I totally owned her and treated her like my bitch! And her pussy was <i>soooo</i> fucking tight!"');
    scene.text('He goes back to pacing. "Maybe I\'ll invite Petka next time?" he ponders aloud. "Wouldn\'t he be freaked if I made her submit to him?"');
    scene.text('You frown. "She\'s not some whore for you to pimp out to your friends, Artem!"');
    scene.text('"I know," he replies. "I just thought…" He trails off, clearly unsure where he was going with this.');
    scene.actions([
      { label: 'Wait for his reply', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('He blushes a little before he nods. "Sorry. I guess I got carried away in the moment there…"');
    scene.text('You give him a soft, caring smile. "I know, but she\'s my friend and she\'s still a person."');
    scene.text('He nods again. "Yeah, you\'re right. I should count myself lucky that I even had this chance."');
    scene.text('You smile. "Would you like a chance to do this again?"');
    if (((s as any).artemQW ?? 0)?.['nush3some'] >= 3  &&  ((s as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
      scene.text('"Hell yeah!" he nods before you see an idea pop into his head. "Maybe next time we can bring Nush <i>and</i> Katja along and I can fuck all three of them at the same time?! If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
      scene.actions([
        { label: 'We\'ll see', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile again. "Easy there, cowboy! Let\'s not get ahead of ourselves here."');
    scene.text('He laughs and hugs you. "Thank you for a great time anyway. I never realized how much I would enjoy girls being so submissive to me…"');
    scene.text('You talk as you both head to the elevator and it takes him back down to his floor, where he gives you a kiss and a wave goodbye.');
    scene.text('As he leaves, you think about what just happened. You\'ve set it up so your boyfriend is interested in having more threesomes with your friends. As the elevator doors close in front of you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
      ]);
    } else {
      scene.text('He nods. "Hell yeah! Maybe next time we can bring Nush along and I can fuck both of them at the same time?! If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
      if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
        scene.text('He nods. "Hell yeah! Katja is friends with Albina, right? Maybe next time we can bring her along and I can fuck both of them at the same time?! If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
        scene.actions([
          { label: 'We\'ll see', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile again. "Maybe I\'ll save it as a special reward for you…"');
    scene.text('He laughs and hugs you. "Thank you for a great time. I never realized how much I would enjoy girls being so submissive to me…"');
    scene.text('You talk as you both head to the elevator and it takes him back down to his floor, where he gives you a kiss and a wave goodbye.');
    scene.text('As he leaves, you think about what just happened. You\'ve set it up so your boyfriend is interested in having more threesomes with your friends. As the elevator doors close in front of you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      } else {
        scene.text('He nods. "Hell yeah! I mean not all the time, but sometimes. If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
        scene.actions([
          { label: 'We\'ll see', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile again. "Maybe I\'ll save it as a special reward for you…"');
    scene.text('He laughs and hugs you. "Thank you for a great time. I never realized how much I would enjoy a girl being so submissive to me…"');
    scene.text('You talk as you both head to the elevator and it takes him back down to his floor, where he gives you a kiss and a wave goodbye.');
    scene.text('As he leaves, you think about what just happened. You\'ve set it up so your boyfriend is interested in having more threesomes with your friend. As the elevator doors close in front of you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'We\'ll see', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile again. "Maybe I\'ll save it as a special reward for you…"');
    scene.text('He laughs and hugs you. "Thank you for a great time. I never realized how much I would enjoy girls being so submissive to me…"');
    scene.text('You talk as you both head to the elevator and it takes him back down to his floor, where he gives you a kiss and a wave goodbye.');
    scene.text('As he leaves, you think about what just happened. You\'ve set it up so your boyfriend is interested in having more threesomes with your friends. As the elevator doors close in front of you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
      ]);
    }
    scene.text('He starts pacing around, full of energy. "Oh my god, I actually fucked her!"');
    scene.text('He shakes his head in disbelief, as if he\'s still struggling to believe what just happened. "I never dreamed in a million years that I\'d get to fuck <i>Albina Barlovskaya</i>!"');
    scene.text('He goes back to pacing. "Maybe I\'ll invite Petka next time?" he ponders aloud. "Wouldn\'t he be freaked?!"');
    scene.text('You frown. "She\'s not some whore for you to pimp out to your friends, Artem!"');
    scene.text('"I know," he replies. "I just thought…" He trails off, clearly unsure where he was going with this.');
    scene.actions([
      { label: 'She\'s my friend', handler: (st: GameState) => {
    scene.text('You give him a soft, caring smile. "I know, but she\'s my friend and she\'s still a person."');
    scene.text('He nods again. "Yeah, you\'re right. I should count myself lucky that I even had this chance."');
    scene.text('You smile. "Would you like a chance to do this again?"');
    scene.text('He nods. "Hell yeah! I mean not all the time, but sometimes. If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
    scene.actions([
      { label: 'We\'ll see', handler: (st: GameState) => {
    scene.text('You smile again. "Maybe I\'ll save it as a special reward for you…"');
    scene.text('He laughs and hugs you. "Thank you for a great time anyway."');
    scene.text('You talk as you both head to the elevator and it takes him back down to his floor, where he gives you a kiss and a wave goodbye.');
    scene.text('As he leaves, you think about what just happened. You\'ve set it up so your boyfriend is interested in having more threesomes with your friend. As the elevator doors close in front of you, you wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'albina_3some':
      enterAlbina_3some(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    case 'albina_3some_cuni_dom':
      enterAlbina_3someCuniDom(s, scene);
      break;
    case 'albina_3some_cuni':
      enterAlbina_3someCuni(s, scene);
      break;
    case 'albina_3some_cuni2':
      enterAlbina_3someCuni2(s, scene);
      break;
    case 'albina_3some_bj_dom':
      enterAlbina_3someBjDom(s, scene);
      break;
    case 'albina_3some_bj':
      enterAlbina_3someBj(s, scene);
      break;
    case 'albina_3some_doggy_dom':
      enterAlbina_3someDoggyDom(s, scene);
      break;
    case 'albina_3some_doggy':
      enterAlbina_3someDoggy(s, scene);
      break;
    case 'albina_3some_bj_double':
      enterAlbina_3someBjDouble(s, scene);
      break;
    case 'albina_3some_rough':
      enterAlbina_3someRough(s, scene);
      break;
    case 'albina_3some_rough1':
      enterAlbina_3someRough1(s, scene);
      break;
    case 'albina_3some_swallow':
      enterAlbina_3someSwallow(s, scene);
      break;
    case 'albina_3some_cumshot':
      enterAlbina_3someCumshot(s, scene);
      break;
    case 'albina_3some_cleanup':
      enterAlbina_3someCleanup(s, scene);
      break;
    case 'how_he_feels':
      enterHowHeFeels(s, scene);
      break;
    case 'how_he_feels_bj':
      enterHowHeFeelsBj(s, scene);
      break;
    case 'how_he_feels_sex':
      enterHowHeFeelsSex(s, scene);
      break;
    default:
      enterAlbina_3some(s, scene);
      break;
  }
}

export const artem_alb_sex: LocationDef = {
  name: 'artem_alb_sex',
  title: 'You chat with Artem about what to expect before you reach th',
  region: 'other',
  description: ['You chat with Artem about what to expect before you reach the door to Albina\'s dorm room. You knock and Albina soon answers it, wearing a T shirt and a pair of shorts.'],
  enter: enter,
};
