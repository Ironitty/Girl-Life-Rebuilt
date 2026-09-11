import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
    ((s as any).artemQW ?? {})['alb_bet_attempts'] = (((s as any).artemQW ?? {})['alb_bet_attempts'] ?? 0) + (1);
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
    ((s as any).AlbinaQW ?? {})['artem_dom_bj'] = 1;
    ((s as any).artemQW ?? {})['artem_dom'] = (((s as any).artemQW ?? {})['artem_dom'] ?? 0) + (1);
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
    ((s as any).AlbinaQW ?? {})['artem_invite'] = (-1);
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Climax', goto: ['artem_alb_sex', 'albina_3some_cumshot'] },
  ]);
  scene.build();
}

function enterAlbina_3someSwallow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj4.jpg');
  scene.text('Artem lets out a loud satisfied sigh as Albina pops his spent cock out of her mouth.');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Be kissed', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['artem_dom'] = 1;
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
  ((s as any).artemQW ?? {})['albina_threesome'] = 1;
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
  // TODO-QSP: end
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
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('He sighs. "I was so close! She only won because she knows the game better," he says with complete confidence.');
      scene.text('You nod. "Maybe get a copy and practice for next time then?"');
      scene.text('He smiles. "Good idea! Next time… Next time she goes down!"');
      scene.text('You just laugh at his confidence. He\'s changed so much since your time in school. "I\'m sure you will."');
      scene.text('He smiles again and the two of you fall into talking about how close he came to beating her as you head into the elevator together.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.text('He shrugs, but you can tell he\'s a little disappointed. "Fine. Maybe I can try again some other time?"');
      scene.text('You nod. "I\'ll talk to her, but I\'m sure she\'ll be willing to give you another chance. I think she likes the challenge."');
      scene.text('He smiles and the two of you fall into talking about how close he came to beating her as you head into the elevator together.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
      ]);
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
      if (((s as any).artemQW ?? 0)?.['nush3some'] >= 3) {
        scene.text('He nods. "Hell yeah! Maybe next time we can bring Nush along and I can fuck both of them at the same time?! If you\'re okay with it, that is…" he says while looking at you, worried he might be coming across as too eager.');
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
      }
    }
  } },
    ]);
  } else {
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbina_3some2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  scene.text('The two of you talk about last time and what he\'s expecting this time before you knock on the door. Albina answers it and stands aside to let you in.');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('Artem firmly smacks her ass as he walks into the room behind you.');
    scene.text('"Someone\'s feeling confident!" she grins.');
    scene.text('"I\'m going to do a lot more than spank that sweet ass tonight!" he replies with a grin.');
    scene.text('She gives you an amused, yet slightly aroused grin as you walk over to her bed, where you all take a seat.');
  } else {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5  &&  ((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 0) {
      scene.text('Artem firmly smacks her ass as he walks into the room behind you.');
      scene.text('Albina yelps in surprise before grinning. "It seems someone was listening about improving their confidence…"');
      scene.text('"I had a good reason," he grins back.');
      scene.text('She gives you an amused, yet slightly aroused grin as you walk over to her bed, where you all take a seat.');
    } else {
      scene.text('Artem smiles at her as he walks into the room behind you.');
      scene.text('"Ready to take me to pound town tonight?" she smirks.');
      scene.text('He blushes slightly, but smiles as he walks over to her bed, where you all take a seat.');
    }
  }
  qspCall(s, 'arousal', 'voyeur', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let Albina suck his dick', goto: ['artem_alb_sex', 'albina_3some2_bj_alb'] },
    { label: 'Suck his dick yourself', goto: ['artem_alb_sex', 'albina_3some2_bj_sveta'] },
  ]);
  scene.build();
}

function enterAlbina_3some2BjAlb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral1.mp4');
    scene.text('"On your knees and open your mouth, slut!" he barks at Albina as he unbuttons his pants and pulls his cock out.');
    scene.text('She smirks, a hint of arousal in her eye as she gets on her knees in front of him and sticks her tongue out.');
    scene.text('"Now suck my dick, bitch!" he barks before he grabs her hair in his hand and shoves his already rock hard cock into her open mouth.');
    scene.text('She obediently starts sucking, and after a minute or so, he shoves his dick all the way into her throat. You can hear her gagging as he starts roughly fucking her mouth.');
    scene.text('After a few seconds, he finally pulls his dick out of her mouth and she gasps for air as she happily grins up at him. He then pulls her up and roughly undresses her, smacking her firmly on the ass before he shoves her onto the bed. He then reaches over to grab you and pulls your head over to her pussy.');
  } else {
    scene.img('images/shared/sex/blowjob/bj46.mp4');
    scene.text('Artem grins at Albina as he unbuttons his pants and pulls his cock out.');
    scene.text('"Straight to it, I see. I can do that," she replies as she gets on her knees in front of him.');
    scene.text('She strokes his cock in her hand before she takes it into her mouth and starts sucking. After a minute or so, you can hear her gagging as she takes his dick into her throat.');
    scene.text('After a few more seconds, she pops his dick out of her mouth and stands up to undress herself, Artem groping her ass before he turns her around and pushes her onto the bed. He then motions for you to get between her legs.');
  }
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/ukuni11.jpg');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('Artem shoves your face into Albina\'s pussy and you start licking. She\'s already wet and moans loudly.');
      // TODO-QSP: dynamic text: "Get this slut's pussy wet, <<$pcs_nickname>>. I want to hear her begging for my...
      scene.text(`"Get this slut's pussy wet, ${((s as any).pcs_nickname ?? 0)}. I want to hear her begging for my cock!"`);
      scene.text('As you eat her out, you notice Artem undressing out of the corner of your eye. Once he\'s naked, he pushes you aside.');
      scene.text('"Strip," he bluntly orders before he roughly flips her over onto her stomach and kneels between her legs.');
    } else {
      scene.text('You bury your face in Albina\'s pussy and start licking. She\'s already wet and moans loudly.');
      // TODO-QSP: dynamic text: "That's it. Get her nice and wet for me, <<$pcs_nickname>>."
      scene.text(`"That's it. Get her nice and wet for me, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('As you eat her out, you notice Artem undressing out of the corner of your eye. Once he\'s naked, he kneels down next to you.');
      scene.text('He tells you to strip before he gets Albina to roll over onto her stomach and he kneels between her legs.');
    }
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem eat her out', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/kotovsex30.mp4');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('Artem forcefully smacks her ass a few times before he buries his face in her pussy and starts eagerly eating her out, which causes her to moan loudly as you watch the action while undressing.');
      scene.text('After a few minutes, he pulls away and wipes her pussy juices from his face before he grins. "Look how wet you are! You just can\'t wait to have my nerd dick in your pussy, can you? Beg me to fuck you."');
      scene.text('She glances over at you with a bemused grin on her face as she wiggles her ass. "Please fuck my tight little pussy!"');
      scene.text('He suddenly grabs a fistful of her hair and roughly pulls on it. "I can\'t hear you, slut!"');
      scene.text('Albina moans softly. "Fuck yeah…"');
      scene.text('He pulls on her hair again before firmly smacking her ass with his other hand. "I said I can\'t hear you!"');
      scene.text('Albina moans even louder. "Fuck my pussy! Pound my slutty little hole!" she cries out as you watch the rush of pleasure pulse through her squirming body.');
    } else {
      scene.text('Artem starts licking her pussy and she eagerly bucks her hips, grinding herself against him as he eats her out. You just watch the action as you undress.');
      scene.text('Albina moans softly. "Fuck yeah…"');
      scene.text('After a few minutes, he pulls away and wipes her pussy juices from his face.');
      scene.text('"Ready to fuck me now?" she smirks as she gets up on all fours and wiggles her ass at him.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Artem fuck her', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog11.mp4');
      // TODO-QSP: dynamic text: Still tightly grasping her hair, Artem proceeds to shove his <<dick>>cm <<$dick_...
      scene.text(`Still tightly grasping her hair, Artem proceeds to shove his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into her soaking wet pussy, causing them both to moan loudly.`);
      scene.text('"Fuck, your pussy feels even tighter than last time!" he groans and smacks her ass again before letting her hair go, only to grab her firmly by the hips and start roughly pounding her, causing her to cry out in pleasure.');
      scene.text('"Yes, yes! Fuck me, Artem! Pound my little pussy!"');
    } else {
      scene.img('images/shared/sex/vag/doggy/kotovsexbonus91.mp4');
      // TODO-QSP: dynamic text: He smacks his dick against her ass cheeks a few times and rubs the tip against h...
      scene.text(`He smacks his dick against her ass cheeks a few times and rubs the tip against her wet pussy, causing her to moan. You continue watching as he then slides his dick into her, her pussy easily swallowing up his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock as he starts fucking her.`);
      scene.text('Artem looks like he\'s trying not to cum too early and you see a smirk creep onto Albina\'s face as she starts thrusting herself back into him, causing her ass to loudly slap against his hips.');
    }
    scene.text('Listening to her moaning with each thrust is arousing you, so you slide your hand down to your wet pussy and start rubbing your clit, masturbating as you watch them fuck.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Albina get pounded', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/shared/sex/vag/doggy/orgasm_rough1.mp4');
      scene.text('Artem suddenly buries his cock balls deep into her pussy and she moans loudly as he starts really pounding her hard, his balls slapping against her pussy with each thrust.');
      scene.text('Just as Albina is really getting into it, Artem suddenly pulls out and glances over at you.');
      scene.text('"Are you ready to help me dominate this slut?" he asks before he smacks her ass, causing her to moan softly.');
    } else {
      scene.img('images/shared/sex/vag/doggy/med4.mp4');
      scene.text('Artem pushes his cock as deep as he can into Albina\'s pussy, causing her to moan softly as he squeezes and gently spanks her ass.');
      scene.text('She stares at you rubbing your clit as you watch Artem fuck her before he pulls out and glances over at you. "Are you ready to join in, my love?"');
    }
    scene.actions([
      { label: 'Yes', goto: ['artem_alb_sex', 'albina_3some2_bj_sveta'] },
      { label: 'Just watch them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/insert1.mp4');
    scene.text('You look at him and smile. "I just want to watch you fuck her this time."');
    scene.text('He looks a little surprised, but just nods. "Okay. Can you hand me her lube then?"');
    scene.text('You grab the lube out of her desk and pass it to him. Albina moans softly as he uses his finger to work the lube into her asshole.');
    scene.text('Once he has her ready, he squirts some lube on his dick and works it in before he lines it up against her asshole and pushes forward, his slick cock easily sliding into her ass, causing her to moan softly as it stretches her out.');
    scene.text('She glances back over her shoulder, watching you masturbate as Artem starts fucking her ass.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      ((s as any).artemQW ?? {})['alb_anal_cum'] = 1;
      qspCall(s, 'stat', '');
      scene.img('images/shared/sex/anal/doggy/hard1.mp4');
      scene.text('Artem roughly pounds her ass as hard as he can, showing her no mercy as lust overtakes him. The sound of his hips slapping against her ass is almost as loud as her cries of pleasure.');
      scene.text('"Take my cock, slut! Beg me to let you cum!" he growls as he suddenly spanks her as hard as he can.');
      scene.text('Seemingly aroused at how roughly Artem is treating her, Albina moans louder and reaches back to eagerly rub her clit before her legs start to shake and she suddenly cries out, her juices soaking both herself and the sheets.');
      scene.text('Artem keeps fucking her hard and fast as she rides through her orgasm.');
      scene.text('"Fuck, your ass gets even tighter when you cum!" he moans, seemingly close to climax himself.');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.img('images/shared/sex/anal/doggy/rough1.mp4');
      scene.text('"Harder! Faster!" Albina moans as Artem fucks her ass. However, while he\'s fucking her somewhat hard, he\'s not being as rough as she likes and she isn\'t able to reach orgasm.');
      scene.text('Artem, however, seems oblivious to this and keeps enthusiastically fucking her ass just a little harder as she reaches back and teases her clit.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog8.mp4');
      scene.text('Artem roughly grabs her hair in his fist and starts really hammering her ass, his hips loudly smacking off her ass. "This ass is mine, so take my cock. Take it!" he grunts, barely able to contain himself as he slams his cock in and out of her ass.');
      scene.text('Albina has been reduced to a quivering mess of pleasured moans and grunts, her eyes almost rolling back in her head as she eagerly thrusts herself back against Artem in an attempt to take him as deep as she can.');
    } else {
      scene.img('images/shared/sex/anal/doggy/kotovsexanal11.mp4');
      scene.text('Artem grunts loudly with each thrust, but doesn\'t slow down. "Fuck, your ass… is nice and tight!"');
      scene.text('"Don\'t you dare stop!" she cries out as she continues rubbing her clit. "I want you to cum in my tight little asshole!"');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch him cum', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      // TODO-QSP: dynamic text: Artem pulls roughly on her hair, causing a guttural moan of pleasure to escape h...
      scene.text(`Artem pulls roughly on her hair, causing a guttural moan of pleasure to escape her mouth as he rams his entire ${((s as any).dick ?? 0)}cm cock up her ass before he cums with a loud grunt. Once he's done, he pulls out and grins at the sight of her stretched hole before he roughly shoves her down on the bed.`);
      scene.text('"Have fun trying to walk after that pounding, slut!" he smugly grins as he sits back on the bed, looking very proud of himself.');
      scene.text('An overwhelmed Albina just lies panting on the bed as a mix of cum and lube leaks out of her asshole.');
    } else {
      scene.text('Artem grunts and buries his cock deep in Albina\'s ass before he starts cumming. Once he\'s done, he lets out a loud sigh and pulls out, half sitting, half collapsing on the bed.');
      scene.text('Albina flops down on the bed in front of him as a mix of cum and lube starts leaking out of her asshole.');
    }
    scene.text('Once she\'s recovered, Albina gets up and grabs some wipes to start cleaning herself up.');
    scene.text('"Why didn\'t you join in?" she asks.');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('You smirk. "I just wanted to watch you get your ass owned. You really became a submissive little slut to him there."');
    } else {
      scene.text('You smile. "He looked happy enough to just fuck you, so I let him have his moment."');
    }
    scene.text('As she finishes cleaning herself, you and Artem get dressed.');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'clit_finger', (-2), 'masturbate');
    qspCall(s, 'arousal', 'end');
    if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
      ((s as any).AlbinaQW ?? {})['artem_dom'] = 2;
    }
    ((s as any).AlbinaQW ?? {})['artem_solo'] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some2_cleanup'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3some2BjSveta(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/oral1.mp4');
    scene.text('"Suck my dick!" he orders and forces you down between his legs before he shoves his cock into your awaiting mouth. You obediently start sucking his dick as Albina watches.');
    scene.text('"Don\'t just sit there! Use that slutty mouth of yours to get my girl nice and wet!" he barks at Albina and you let out a muffled yelp as you suddenly feel her start licking and sucking on your clit.');
  } else {
    scene.img('images/shared/sex/blowjob/bj46.mp4');
    scene.text('You get down in front of Artem and start stroking his cock with your hand before you take it into your mouth, bobbing your head up and down on his shaft.');
    scene.text('Albina watches for a few seconds before she moves around behind you. You let out a muffled yelp as you suddenly feel her start licking and sucking on your clit.');
  }
  qspCall(s, 'arousal', 'bj', 2);
  qspCall(s, 'arousal', 'cuni', (-2), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus16.mp4');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('He grabs hold of your head and pulls you off his dick, forcing you to look up at him. "You\'re going to ride my dick like a good little slut now."');
      // TODO-QSP: dynamic text: He lies back and you obediently climb up and straddle him before lining his dick...
      scene.text(`He lies back and you obediently climb up and straddle him before lining his dick up with your pussy and slowly lowering yourself down onto it, taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you.`);
      scene.text('As you start riding him, he pulls Albina up and makes her straddle his face. She lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act.');
      scene.text('A few minutes later, he pushes her off and smacks your ass. "Bring that sweet pussy up here."');
    } else {
      // TODO-QSP: dynamic text: He pulls out of your mouth and looks down at you. "I want you to ride me, <<$pcs...
      scene.text(`He pulls out of your mouth and looks down at you. "I want you to ride me, ${((s as any).pcs_nickname ?? 0)}."`);
      // TODO-QSP: dynamic text: He lies back and you climb up and straddle him before lining his dick up with yo...
      scene.text(`He lies back and you climb up and straddle him before lining his dick up with your pussy and slowly lowering yourself down onto it, taking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you.`);
      scene.text('As you start riding him, he pulls Albina up and makes her straddle his face. She lowers herself down, grinding her crotch into his face as you ride him. You both moan from the pleasure of the act.');
      scene.text('A few minutes later, he pushes her off and smacks your ass. "Bring that sweet pussy up here."');
    }
    qspCall(s, 'arousal', 'vaginal', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Switch with Albina', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding.jpg');
    scene.text('You get off him and move up to his face. As you do, you look up at Albina. "Ride him like a good little slut."');
    scene.text('Albina lifts herself up and shimmies down before grabbing his cock in her hand and guiding it into her wet pussy. She moans softly as she lowers herself down on it and starts riding him reverse cowgirl style.');
    scene.text('"Take the whole thing," you tell her as you reach over and grab her shoulders, pushing her down until she\'s impaled balls deep on his cock.');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('"Give me a taste of that sweet pussy!" Artem says before he roughly grabs you and pulls you on top of him.');
      scene.text('He then starts eagerly licking your pussy, causing you to moan loudly as you watch him fuck Albina.');
    } else {
      scene.text('"Come over here," Artem says and you smile before crawling over and straddling his face, moaning loudly as you lower yourself down and let him start licking your pussy.');
    }
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'cuni', (-2));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let Artem take charge', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/facesitting.jpg');
      scene.text('Artem suddenly pushes you off before he lifts Albina off of his dick. You glance at each other in confusion before looking at Artem.');
      scene.text('He roughly grabs Albina by the chin. "I want you to make my girl feel good. She\'s going to sit on your face and you\'re going to eat her out. Understand?"');
      scene.text('He pushes her back and she bites her lip before turning to you and grinning. You also can\'t help but feel a little aroused at Artem\'s show of dominance and the two of you passionately make out in front of him before you push her down on her back and straddle her face. Lowering yourself down, you moan loudly when you feel her pierced tongue start teasing your clit.');
      scene.text('As she passionately eats your pussy, you see Albina seductively gazing up at Artem. You glance over and see him watching with a smug grin on his face.');
      qspCall(s, 'arousal', 'cuni', 2, 'lesbian', 'dom');
      qspCall(s, 'stat', '');
    } else {
      scene.img('images/shared/sex/lesbian/69_1.mp4');
      scene.text('Artem suddenly pushes you off before he lifts Albina off of his dick. You glance at each other in confusion before looking at Artem.');
      scene.text('"I think it would be hot if you lick each other\'s pussy. Can you do that for me?" he asks.');
      scene.text('Albina smirks at Artem, who looks eager to see if you\'ll do it. She turns to you and grins, briefly making out with you before she pushes you down into a 69 position. You moan loudly when you feel her pierced tongue start teasing your clit before you start licking and sucking on her clit and she moans moans in return.');
      scene.text('As the two of you passionately eat each other out, you can just about see Artem watching you with a shocked look on his face, seemingly surprised that you and Albina are actually doing what he asked.');
      qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
      qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('You start grinding your pussy against Albina, smearing your juices over her face before Artem suddenly stops you.');
      scene.text('"That\'s enough. I\'m going to fuck one of you sluts in the ass now, but I don\'t know who…" he grins as he looks smugly between you and Albina. "Maybe I\'ll fuck you both and you can fight over who gets to go first…"');
      scene.text('Disentangling yourself from Albina, you see him grinning as he grabs a bottle of lube from his bag and starts applying it to his cock.');
      qspCall(s, 'arousal', 'cuni', 2, 'lesbian', 'dom');
      qspCall(s, 'stat', '');
    } else {
      scene.text('You start grinding your pussy against Albina\'s face as you continue eating each other out. You don\'t know how long passes as you keep grinding her face until you hear her muffled moan and her juices squirt over your face and into your mouth.');
      scene.text('Disentangling yourself from Albina, you glance up and see Artem smiling as he grabs a bottle of lube from his bag and starts applying it to his cock.');
      qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
      qspCall(s, 'arousal', 'cuni_give', (-2), 'lesbian');
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Let him butt fuck Albina', goto: ['artem_alb_sex', 'albina_3some2_anal_alb'] },
      { label: 'Ask him to butt fuck you', goto: ['artem_alb_sex', 'albina_3some2_anal_sveta'] },
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

function enterAlbina_3some2AnalAlb(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding_anal.mp4');
  scene.text('You want to watch him fuck her ass, so you sit next to Artem and nod at her. She smirks at you before grabbing the lube and working it into her asshole.');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    scene.text('"Turn around," he grins as he roughly spins around and smacks her ass. "I want to see that fat ass riding my dick."');
    scene.text('She bites her lip before straddling Artem\'s cock reverse cowgirl and allowing him to guide it into her asshole. She moans softly before she starts riding him, starting off slowly as you watch his cock sliding in and out of her ass.');
    scene.text('She then starts riding him faster, her bubble butt loudly slapping against Artem\'s hips as he grins. "By the time I\'m done with her, this tight little asshole will be looser than a gossip\'s lips!"');
    scene.text('She keeps riding him before his cock suddenly pops out of her ass, giving you both a brief glimpse of her slightly stretched asshole before Artem smacks her ass. "Squat over my cock, bitch. I want to see that slutty ass <i>really</i> riding it!"');
    scene.text('Albina grins before lifting herself up and squatting above Artem\'s cock, moaning softly as she guides it back into her ass. You lean in and start kissing Artem as she starts slamming herself up and down on his cock, taking almost his full length up her ass.');
  } else {
    scene.text('She then turns around and wiggles her ass at Artem. "Want me to ride your cock?"');
    scene.text('Artem nods and she smiles as she straddles him reverse cowgirl before guiding his cock into her ass, causing them both to moan as it penetrates her before she starts riding him. You just watch his cock slowly sliding in and out of her ass.');
    scene.text('She keeps riding him before his cock suddenly pops out of her ass, giving you both a brief glimpse of her slightly stretched asshole.');
    scene.text('Artem is eager to put it back in and keep fucking her, but Albina lifts herself up and squats above his cock first before sliding back down onto it. You lean in and start kissing Artem as she starts slamming herself up and down on his cock, taking almost his full length up her ass.');
  }
  qspCall(s, 'arousal', 'voyeur_sex', 2);
  qspCall(s, 'arousal', 'kiss', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['artem_alb_sex', 'albina_3some2_creampie_alb'] },
  ]);
  scene.build();
}

function enterAlbina_3some2AnalSveta(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  scene.img('images/shared/sex/anal/doggy/anal31.jpg');
  scene.text('You reach up and cup his face in your hands, holding his gaze so he looks directly into your eyes. "I want you to fuck my ass."');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    scene.text('He grins and shoves you down on all fours before he squirts some lube onto your asshole and works it in before he lines his cock up and slides it up your ass. He\'s soon fucking your ass hard and fast.');
    scene.text('"That\'s it, Artem! Fuck her slutty little ass even harder!" you hear Albina say before she suddenly smacks you on the ass, causing you to yelp slightly.');
    scene.text('He starts fucking you a little faster and you look back to see the two of them passionately making out as he roughly gropes and squeezes your ass in his hands.');
  } else {
    scene.text('He smiles and moves around behind you as you get on all fours. He squirts some lube onto your asshole and works it in before he gently slides his cock up your ass, pausing when you tense up and only moving again when you relax. He\'s soon slowly yet lovingly fucking your ass.');
    scene.text('"Come on Artem, you can give it to her harder than that!" you hear Albina say before she suddenly smacks you on the ass, causing you to yelp slightly.');
    scene.text('He starts fucking you a little faster and you look back to see the two of them passionately making out as she encourages him to fondle one of her breasts in his hand.');
  }
  qspCall(s, 'arousal', 'anal', 2, 'lube');
  qspCall(s, 'arousal', 'voyeur', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A2');
    scene.img('images/shared/sex/kuni/pussylick5.mp4');
    scene.text('Not wanting to be left out, Albina gets on all fours in front of you, inviting you to eat her now dripping wet pussy. You obediently lower your head and start lapping at her clit as Artem continues fucking your ass. He gets a little rougher with you and starts fucking you harder and deeper as he seems to get caught up in the moment.');
    scene.text('You spend the next few minutes licking Albina\'s pussy as Artem continues pounding your ass. You soon bring Albina to an explosive orgasm and she drenches your face with her juices as Artem watches.');
    scene.text('"Fuck, that\'s hot!" he says before he really starts pounding your ass, forcing your face into Albina\'s crotch. "I\'m gonna cum!"');
    qspCall(s, 'arousal', 'anal', 2, 'lube');
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['artem_alb_sex', 'albina_3some2_creampie_sveta'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3some2CreampieAlb(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/analcreampie/cumanal1.mp4');
  scene.text('You continue making out with Artem as Albina rides his dick hard and fast. She moans loudly before she starts panting and his dick pops out of her ass again as she\'s overwhelmed by an orgasm. She collapses on the bed in a shaking mess and her legs are soaked by her juices when she clamps them tightly together.');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    ((s as any).artemQW ?? {})['alb_anal_cum'] = 1;
    scene.text('"She really did enjoy riding your dick. Just look how hard she\'s cumming!" you laugh and Artem smugly grins before he shifts position and moves Albina on her side before spreading her ass cheeks and shoving his dick back up her ass.');
    scene.text('"I\'m not done with this ass just yet," he smirks as he starts fucking her ass again. Albina is still riding out her orgasm and can only moan softly as Artem spanks her as hard as he can. After a few minutes, he buries his dick deep in her ass and grunts loudly as he starts cumming in her ass.');
    scene.text('Once he squeezes the last drop of cum out, he lets out a loud satisfied sigh and pulls out of her before flopping back on the bed and panting loudly. His cum soon starts leaking out of Albina\'s ass and dribbling down her ass cheek as she lies next to him in satisfied bliss.');
  } else {
    scene.text('Albina slowly shifts herself onto her side and spreads her ass, inviting Artem to keep fucking her. "Keep going… I want you to… Cum in my ass…"');
    scene.text('Artem eagerly positions himself behind her and slides his dick back into her ass. After a few minutes, he grunts loudly as he starts cumming.');
    scene.text('Once he squeezes the last drop of cum out, he lets out a loud satisfied sigh and pulls out of her before flopping back on the bed and panting loudly. His cum soon starts leaking out of Albina\'s ass and dribbling down her ass cheek as she lies next to him in satisfied bliss.');
  }
  qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj5.jpg');
    scene.text('Once she\'s recovered, you pull Albina up and start kissing her, the two of you deeply and passionately making out as Artem watches. Once you\'re finished, you look over at him and notice that his dick is already hard again as Albina grabs some wipes to clean herself.');
    scene.text('"Damn Artem, ready for round two already? Give my ass a few minutes at least!" she smirks as she hands him some wipes.');
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('"I can\'t help it if you have the greatest ass I\'ve ever seen! You\'re just begging for me to fuck you again!" he grins as he gives her ass a firm smack.');
    } else {
      scene.text('He blushes slightly as he starts cleaning himself up as well.');
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some2_cleanup'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3some2CreampieSveta(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A2');
  qspCall(s, 'cum_call', 'anus', 'A2', 1);
  qspCall(s, 'arousal', 'rimming', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/eat/eat_cum_anus.mp4');
  scene.text('Your face buried in Albina\'s pussy, you can only let out muffled moans as Albina rides out her orgasm in front of you.');
  scene.text('Artem just keeps fucking you until he suddenly groans loudly and you feel spurt after spurt of his warm cum shooting into your ass.');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
    scene.text('Once he\'s done, he pulls out of you. "Sit on that slut\'s face so she can clean your ass!"');
    scene.text('You obediently do as he orders and swing your legs over Albina before lowering yourself down. You gasp when you feel her tongue eagerly lapping away at your asshole, licking up Artem\'s cum as it leaks out of you.');
  } else {
    scene.text('Once he\'s done, he pulls out of you and sits back. Before you can react, Albina pulls you on top of her and you gasp when you feel her tongue eagerly lapping away at your asshole, licking up Artem\'s cum as it leaks out of you.');
  }
  scene.text('When you pull away, you look back and see her rolling up onto her knees and showing off her cum covered tongue to Artem.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her swallow it and get cleaned up', goto: ['artem_alb_sex', 'albina_3some2_cleanup'] },
    { label: 'Kiss her', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.img('images/locations/city/redlight/studio_porn/sex/mff5.mp4');
      scene.text('You\'re about to kiss Albina when Artem gets her attention.');
      scene.text('"I want you to spit my cum into her dirty whore mouth!" he tells her in a commanding tone.');
      scene.text('In response, Albina grabs your hair and pulls your head back before she spits Artem\'s load into your mouth. The mix of cum and saliva hits your tongue and rolls down to your throat.');
      scene.text('Albina then starts kissing you, her tongue forcing its way into your mouth as the two of you exchange the cum in your mouths. Once you\'re finished, you both swallow his cum.');
      scene.text('She then gets up and grabs some wipes to clean herself before passing some to you. Artem soon follows suit and starts cleaning himself up as well.');
      qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
      qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some2_cleanup'] },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj5.jpg');
      scene.text('You grab Albina\'s head before you force your tongue into her mouth. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum.');
      scene.text('She then gets up and grabs some wipes to clean herself before passing some to you. Artem soon follows suit and starts cleaning himself up as well.');
      qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
      qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some2_cleanup'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAlbina_3some2Cleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 12;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/misc/dress_1.mp4');
  if (((s as any).artemQW ?? 0)?.['alb_anal_cum'] !== 1) {
    scene.text('Once you\'re dressed, a still naked Albina walks you over to the door, where Artem grins at her. "How do you feel knowing that a nerd fucked your ass?"');
    scene.text('She shrugs. "You were okay."');
    scene.text('He looks a little deflated. "Just okay? I\'ll do better next time, I promise!"');
    scene.text('She gives him a weak smile. "I… There\'s not going to be a next time, Artem. You\'re a nice guy, but you\'re <i>too nice</i> for a girl like me. I need a guy who can dominate me in bed and… that\'s just not you."');
    scene.text('He looks crestfallen. "Oh… Okay. I understand…"');
    scene.text('"Like I said, you were good. You\'re just not my type," she quickly replies.');
    scene.text('He just bows his head and walks out the door. You give Albina a hug before following him.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    ((s as any).artemQW ?? {})['albina_threesome'] = (-1);
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem sighs as you walk towards the elevator. "I guess that\'s that then…"');
    scene.text('You give him a kiss on the cheek. "Think on the bright side. At least you actually got to fuck her. How many guys can say they\'ve done that?"');
    scene.text('He perks up slightly. "You\'re right! I actually got to fuck here while other guys can only dream of that chance."');
    scene.text('As the elevator arrives on his floor, he gives you a kiss goodbye before walking out. As the doors close, you wonder how this will affect things going forward.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Once you\'re dressed, a still naked Albina walks you over to the door, where Artem grins at her. "How do you feel knowing that a nerd destroyed your ass and you took it like a submissive little slut?"');
    scene.text('Albina smirks. "I came, so that means you done a good job."');
    scene.text('You see his chest puff up with pride. "Cool. I\'ll see you next week then?"');
    if (((s as any).artemQW ?? 0)?.['albina_warning'] !== 0) {
      scene.text('"Easy there, stud," she replies. "I appreciate the enthusiasm, but I\'m not your personal whore that you can fuck whenever you please."');
      scene.text('He puffs up his chest and looks like he\'s about to say something, but he glances over at you and seemingly remembers what you told him about not pushing things.');
      scene.text('He relaxes and smiles. "Of course not, but I like fucking you. And I think you like it as well, otherwise you wouldn\'t be inviting me over."');
      // TODO-QSP: dynamic text: She bites her lip. "Of course I do, but a girl needs a break sometimes. Just giv...
      scene.text(`She bites her lip. "Of course I do, but a girl needs a break sometimes. Just give it a few days and have ${((s as any).pcs_nickname ?? 0)} text me to see if I'm free."`);
      scene.text('He grins, looking very happy. "I get it. Your ass needs a rest after such a good pounding. I look forward to next time then."');
      scene.text('She just smirks in response before you and Artem leave her room, Albina yelping in surprise and smiling at Artem when he spanks her on the way out.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    ((s as any).artemQW ?? {})['albina_threesome'] = 3;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Out in the hallway, you smile and kiss him. "You handled that quite well."');
    scene.text('He smiles back. "I was going to say something, but I remembered what you said and realized that she might not like it. I know she likes me giving it to her rough, but I have to respect her boundaries outside of sex."');
    scene.text('You kiss him again. "I\'m glad you had fun, and that you remembered what I said, but I need to get going."');
    scene.text('He hugs you. "I look forward to next time."');
    scene.text('He kisses you again before walking you to the elevator. He pushes the button and it soon arrives on his floor. As he leaves and the doors close, you think about what just happened. You\'ve managed to make it a regular thing for you and your boyfriend to have a threesome with your best friend. You wonder if this was a mistake or the smartest thing you\'ve ever done. You suppose only time will tell…');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Easy there, stud," she replies. "I appreciate the enthusiasm, but I\'m not your personal whore that you can fuck whenever you please."');
      scene.text('He glances at you before he straightens up his shoulders. He seems more confident all of a sudden.');
      scene.text('"You sure about that?" he smirks. "I\'ve basically been inviting myself over and every time I did, you\'ve submissively bent over and took my cock like a good little slut."');
      scene.text('She starts to retort, but before she can, he continues. "When we see each other around campus, we\'ll both know that a nerd like me made you, the high and mighty cheerleader, his little buttslut bitch, and nothing will ever change that."');
      scene.text('He backs her up against the wall, giving her nowhere to go. "I know you loved getting dominated by a nerd…" He suddenly gets up in her face, causing her to squirm. "The idea of getting owned and humiliated by someone like me turns you on, doesn\'t it… <i>whore</i>?"');
      scene.actions([
        { label: 'Stop him', handler: (st: GameState) => {
    ((s as any).artemQW ?? {})['albina_threesome'] = (-2);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
    scene.text('You can see Albina is uncomfortable with the situation and quickly step in. "That\'s enough, Artem! You\'re going a little too far."');
    scene.text('He looks at you in confusion before looking at Albina and quickly removing his hands. "Sorry… I guess I, uh, got a little carried away there…"');
    scene.text('Albina shoves him back. "Get the fuck out of my room, asshole!"');
    scene.text('You quickly pull Artem away and send him out the door. "Sorry, Albina…" you say with a weak smile.');
    scene.text('"Whatever," she replies before she sighs. "I\'ll talk to you some other time. Just don\'t bring <i>him</i> back here again."');
    scene.text('You nod and give her another smile before leaving her room and closing the door.');
    scene.actions([
      { label: 'Question Artem', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem looks rather confused as you both stand out in the hallway.');
    scene.text('"Did I do something wrong?" he asks.');
    scene.text('"<i>Something wrong</i>?!" you splutter. "You can\'t just get up in her face and say things like that! What the hell were you thinking?!"');
    scene.text('He looks confused. "She said she likes being submissive! I was just playing around…"');
    scene.text('"<i>Sexually submissive</i>!" you retort. "You can\'t just bully her like that!"');
    scene.text('You sigh. "It\'s my fault for not warning you first."');
    scene.text('"It\'s okay. I\'m the one who fucked up and went too far. Just… Just tell I\'m sorry, okay? I didn\'t mean to upset her like that."');
    scene.text('You nod and the two of you head for the elevator, where he takes it down to his floor. You give him a kiss and a hug before he walks out.');
    scene.actions([
      { label: 'Continue', goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
    ]);
  } },
        { label: 'Just watch', handler: (st: GameState) => {
    ((s as any).artemQW ?? {})['albina_threesome'] = (-2);
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/albinaroom/room.jpg');
    scene.text('Albina is in as much shock as you are by how Artem is acting; you\'ve never seen him like this. When she doesn\'t respond, he suddenly gets up in her face.');
    scene.text('"Say it!" he demands in a forceful tone.');
    scene.text('Albina whimpers as she tries to turn her head away from him, pushing herself up against the wall.');
    scene.text('Artem grins. "You love being a little whore that screams for me to fuck her harder, don\'t you?"');
    scene.text('Albina suddenly bursts into tears, causing a confused looking Artem to back away. "Oh, sorry. Did I go too far?"');
    scene.text('"Get out. GET OUT! GET OUT, GET OUT, GET. <b><i>OUT</i></b>!!!" she screams through her tears.');
    scene.text('You try to approach and comfort her, but she shoves you back. "<i>Don\'t touch me</i>! Both of you just <i>get out</i>!"');
    scene.text('"I\'m sorry…" you mumble, but she just ignores you. You and Artem both leave her room, closing the door behind you as Albina continues crying.');
    scene.actions([
      { label: 'Question Artem', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem looks rather confused as you both stand out in the hallway.');
    scene.text('"Did I do something wrong?" he asks.');
    scene.text('"<i>Something wrong</i>?!" you splutter. "You can\'t just get up in her face like that! What the hell were you thinking?!"');
    scene.text('"She said she likes being submissive!"');
    scene.text('"<i>Sexually submissive</i>!" you retort. "You can\'t just bully her like that!"');
    scene.text('You sigh as you try to calm down. "It\'s my fault. I should have said something before things went too far."');
    scene.text('He suddenly looks rather concerned. "Maybe you should check on her? Tell her I\'m sorry and that I didn\'t mean to upset her like that. I\'ll just head back to my dorm room now. Talk to you later."');
    scene.text('He kisses you and heads for the elevator, the guilt seemingly weighing him down.');
    scene.actions([
      { label: 'Check on Albina', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
    scene.text('You can still hear Albina faintly sobbing through the door, so you give it a knock.');
    scene.text('"Albina? Are you okay?" you ask softly.');
    scene.text('"Go away!" she shouts back. "I don\'t want to talk!"');
    scene.actions([
      { label: 'Leave her be', handler: (st: GameState) => {
    scene.text('You don\'t press the issue.');
    scene.text('"I… I\'m sorry…" you tell her before walking away from the door.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
    ]);
  } },
      { label: 'I need to talk to you', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('"We need to talk about what happened, Albina. I don\'t want you to hate me," you tell her through the door.');
    scene.text('A few seconds of silence pass before the door suddenly opens to reveal a teary-eyed Albina.');
    // TODO-QSP: dynamic text: "I could never hate you, <<$pcs_nickname>>," she says before she suddenly spring...
    scene.text(`"I could never hate you, ${((s as any).pcs_nickname ?? 0)}," she says before she suddenly springs forward to hug you tightly.`);
    scene.text('"I\'m sorry," you tell her as tears start welling up in your eyes. "I should have stopped him before it went that far. He says he\'s sorry too."');
    scene.text('"It\'s okay…" she replies softly as the two of you remain tightly embraced.');
    scene.actions([
      { label: 'Keep hugging her', handler: (st: GameState) => {
    scene.text('You don\'t know how long passes before she pulls away and wipes the tears from her eyes.');
    scene.text('"I\'m… I\'m okay. I think we should stop this little game we\'re playing, though."');
    scene.text('"I get it. Sorry that I let it happen," you reply.');
    scene.text('She sighs loudly. "I just… I know he thought it was just a bit of fun and that he didn\'t mean it, but it wasn\'t fun to me. He brought back some really bad memories, memories that I don\'t want to remember…"');
    scene.text('You give her another hug. "I promise I\'ll never let something like that happen to you again. You have my word."');
    scene.text('You stay with her for a few minutes before she sees you out, closing the door behind you with a smile.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'seventh_floor'] },
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbina_3someRepeating(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur', 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/artemroom/artem_dorm_room.jpg');
  scene.text('The two of you sit and talk about last time and what he\'s expecting this time before you hear a knock on the door. Artem gets up to answer it and stands aside to let Albina in.');
  scene.text('She\'s wearing a pair of skingtight yoga pants that all but accent her toned leg muscles.');
  if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
    scene.text('Artem firmly smacks her ass as she walks into the room.');
    scene.text('"Someone\'s feeling confident!" she grins.');
    scene.text('"I\'m going to do a lot more than spank that sweet ass tonight!" he replies with a grin.');
    scene.text('She gives you an amused, yet slightly aroused grin as she walks over to his bed, where you all take a seat.');
    if (((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 0) {
      // TODO-QSP: dynamic text: "I might have an idea on how to spice things up," she smirks. "So long as <<$pcs...
      scene.text(`"I might have an idea on how to spice things up," she smirks. "So long as ${((s as any).pcs_nickname ?? 0)} is okay with it, that is…"`);
      scene.text('"What did you have in mind?" you ask as Artem gives her a curious look.');
      scene.text('"How about… Artem fucks <i>only</i> me tonight?"');
      scene.text('Artem looks at you with the biggest grin, practically begging you to allow it.');
      scene.actions([
        { label: 'Let him fuck Albina solo', handler: (st: GameState) => {
    scene.text('"Okay, okay. Put the puppy eyes away," you tell him. "You can have some fun without me."');
    // TODO-QSP: dynamic text: His grin grows even wider. "You really are the best girlfriend ever, <<$pcs_nick...
    scene.text(`His grin grows even wider. "You really are the best girlfriend ever, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You just smile back and turn to Albina. "He\'s all yours."');
    scene.actions([
      { label: 'See what happens', goto: ['artem_alb_sex', 'albina_3some3_solo'] },
    ]);
  } },
        { label: 'Just have another threesome', handler: (st: GameState) => {
    scene.text('"No, I\'m fine with the threesome, thanks," you reply.');
    scene.text('Artem looks a little disappointed as Albina smiles at you.');
    scene.text('"Okay. Shall we get started?"');
    scene.actions([
      { label: 'Get started', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['artem_solo'] = (-1);
    scene.text('"Let\'s just stick to having threesomes, yeah?" you reply.');
    scene.text('Artem looks a little disappointed as Albina smiles at you.');
    scene.text('"Okay, I won\'t bring it up again if it makes you uncomfortable. So when are we starting the fun?"');
    scene.actions([
      { label: 'Get started', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['artem_solo'] > 0) {
        scene.text('"Is it going to be another one girl show tonight?" she grins.');
        scene.text('Artem smiles at her before he turns to you with a hopeful look in his eyes.');
        scene.actions([
          { label: 'Let him fuck Albina solo', handler: (st: GameState) => {
    scene.text('"Okay, okay. Put the puppy eyes away," you tell him. "You can have some fun without me again."');
    // TODO-QSP: dynamic text: He grins happily. "You really are the best girlfriend ever, <<$pcs_nickname>>!"
    scene.text(`He grins happily. "You really are the best girlfriend ever, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You just smile back and turn to Albina. "He\'s all yours."');
    scene.actions([
      { label: 'See what happens', goto: ['artem_alb_sex', 'albina_3some3_solo'] },
    ]);
  } },
          { label: 'Just have another threesome', handler: (st: GameState) => {
    scene.text('"No, I\'m fine with the threesome, thanks," you reply.');
    scene.text('Artem looks a little disappointed as Albina smiles at you.');
    scene.text('"Okay. Shall we get started?"');
    scene.actions([
      { label: 'Get started', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
    ]);
  } },
          { label: 'No', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['artem_solo'] = (-1);
    scene.text('"Let\'s just stick to having threesomes, yeah?" you reply.');
    scene.text('Artem looks a little disappointed as Albina smiles at you.');
    scene.text('"Okay, I won\'t bring it up again if it makes you uncomfortable. So when are we starting the fun?"');
    scene.actions([
      { label: 'Get started', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"So…" she smiles. "When are we getting started?"');
        scene.actions([
          { label: 'Have another threesome', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
        ]);
      }
    }
  } else {
    scene.text('Artem firmly smacks her ass as she walks into the room.');
    scene.text('Albina yelps in surprise before grinning. "Someone seems eager!"');
    scene.text('"I have a good reason and you know it," he grins back.');
    scene.text('She gives you an amused, yet slightly aroused grin as she walks over to his bed, where you all take a seat.');
    scene.actions([
      { label: 'Have another threesome', goto: ['artem_alb_sex', 'albina_3some3_threesome'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbina_3some3Solo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo1.jpg');
  scene.text('You watch Artem eagerly undress as Albina pulls her yoga pants off, showing off her thong-clad ass as she lies down on the bed. She grins as Artem steps up and presents his rock hard cock.');
  scene.text('"And to think that this cock is all for me tonight…"');
  scene.text('"Shut up and get sucking, slut!" he orders and she obediently takes his cock into her mouth.');
  scene.text('The room is soon filled with the sounds of both Artem\'s moans and Albina gagging and slurping as she sucks his dick.');
  scene.text('After a few minutes, he abruptly slides his cock out of her mouth, but offers her no reprieve as she gasps for air.');
  scene.text('"Open wide, slut!" he orders. "I\'m going to fuck your throat now."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj51.mp4');
    scene.text('You watch as Albina lies back on the bed and Artem kneels above her, his cock hanging in front of her face. She smiles before opening her mouth, allowing Artem to slide his cock inside.');
    scene.text('She chokes slightly as he pushes deep, her throat visibly bulging as she near effortlessly swallows his entire length.');
    scene.text('Artem then braces himself before he starts thrusting, driving his entire cock into Albina\'s throat.');
    scene.text('"That\'s right! Swallow my cock, bitch!" he grunts before thrusting hard enough that his hips slap against her lips.');
    scene.text('After a few minutes, he pulls out and grins smugly as Albina gasps for air. You can, however, see the happy smile on her face.');
    scene.text('"Panties off, slut," he barks. "You\'re going to ride my dick now."');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo2.jpg');
    scene.text('Artem drops down on the bed next to her and Albina grins as she peels her thong off and tosses it aside. A smug smile appears on his lips as Albina swings her leg over and straddles him, sitting on his lap with his cock nestled between her ass cheeks.');
    scene.text('"So… What hole are you putting in, nerd?" she asks teasingly as his cock starts twitching in anticipation.');
    scene.text('He gives her a firm smack on the ass, the sound of which echoes through the room. "As tempting as your sweet ass is, I\'m going to fuck that tight little pussy."');
    scene.text('She giggles. "Okay, but you <i>will</i> fuck my ass before you cum!"');
    scene.text('"Shut up and get riding, slut!" he barks and gives her another slap on the ass.');
    scene.text('She giggles again as she lifts herself up and guides him into her pussy, moaning softly as she slides down onto his cock.');
    scene.text('She almost immediately starts riding him hard as he uses one hand to eagerly squeeze and smack her ass while using the other to pull her top up and start kneading one of her breasts.');
    scene.text('While you can imagine that he can\'t believe his luck right now, the smug grin never leaves his face.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo3.jpg');
    scene.text('Albina yelps when Artem suddenly pushes her off and he scrambles to his feet before pulling her up to the edge of the bed.');
    scene.text('"Fuck…" she moans. "Hurry up and put it back inside me!"');
    scene.text('Artem responds by ramming his cock balls deep into her pussy in one thrust, his hips loudly slapping against her ass as she lets out a wordless cry of pleasure.');
    scene.text('"You like that, slut? You like having my cock in your slutty little pussy?" he grunts as he eagerly hammers his cock in and out of her wet pussy.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo4.jpg');
    scene.text('After a few minutes, Artem pulls out of her and roughly flips her up onto her knees. You watch Albina as she arches her back and eagerly jiggles her ass.');
    scene.text('Artem grins smugly as he kneels behind her and slides his dick back inside her awaiting pussy, causing the two of them to moan loudly.');
    scene.text('His gaze hardens and he starts ramming his cock into her pussy, causing her to moan and gasp loudly in pleasure as he grabs the back of her top and starts roughly pulling her back onto his cock.');
    scene.text('"Fuck yeah, pound my tight little pussy! Harder!" she squeals as Artem thrusts himself balls deep into her, the bed squeaking loudly beneath them as she tightly grips the sheets in her hands.');
    scene.text('"What a view!" he exclaims as he smacks her ass with his free hand.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo6.jpg');
    scene.text('During one of his thrusts, Artem\'s dick unexpectedly pops out of her pussy and he uses the opportunity to roughly push her down on her stomach.');
    scene.text('Albina just lies on the bed while panting loudly, her juices dripping from her soaking wet pussy. "Fuck… That was AMAZING!"');
    scene.text('"Just look at how wet you are!" Artem grins. "You really are a dirty little slut!"');
    scene.text('She gazes back at him expectantly and he smugly grins before smacking her ass.');
    scene.text('"Okay, slut. I\'ll fuck your slutty ass now."');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo5.jpg');
    scene.text('He smiles as he squirts some lube onto her asshole and works it in before he climbs on top of her and gently slides his cock up her ass, pausing when she tenses up and only moving again when she relaxes. He\'s soon slowly fucking her ass, causing Albina to moan softly.');
    scene.text('"Come on Artem, you can give it to her harder than that!" you tell him with a smile and he grins before he smacks her ass, causing her to moan loudly before he starts pounding her asshole.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>'s right. I'm going to pound your ass raw and you're going to ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}'s right. I'm going to pound your ass raw and you're going to beg me to keep going!" he grunts, barely able to contain himself as he slams his cock in and out of her ass. "This ass is mine, so take my cock. Take it!"`);
    scene.text('When you look at Albina, you\'re not sure she heard him or if she\'s even paying any attention. She\'s been reduced to a quivering mess of pleasured moans and grunts, her eyes almost rolling back in her head as she eagerly thrusts herself back against Artem in an attempt to take him as deep as she can.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/artem_alb_solo6.jpg');
    scene.text('A few minutes later, Artem starts grunting as he continues pounding Albina\'s ass. "Gonna cum! Tell me where you want it, slut!"');
    scene.text('Albina moans instead of replying, causing Artem to grab her hair in his fist and pull. "I said <b><i>where do you want my cum, you fucking slut</b></i>?!"');
    scene.text('Albina lets out an almost orgasmic squeal of pleasure. "Cum in my ass! I want your cum in my ass!"');
    scene.text('He grins smugly and smacks her ass a few times. "Then take it, slut!"');
    scene.text('He gives her a few more hard thrusts before he pushes his cock deep into her ass and grunts loudly as he blows his load.');
    scene.text('When he finishes and pulls out, she looks back at him with an appreciative smile on her face while bucking her hips and jiggling her ass.');
    scene.actions([
      { label: 'Finish up', goto: ['artem_alb_sex', 'solo_aftermath'] },
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
  } },
  ]);
  scene.build();
}

function enterSoloAftermath(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'end');
  ((s as any).AlbinaQW ?? {})['artem_solo'] = (((s as any).AlbinaQW ?? {})['artem_solo'] ?? 0) + (1);
  scene.img('images/locations/city/island/university/dorm/artemroom/artem_dorm_room.jpg');
  scene.text('They both bask in the afterglow for a few minutes before Albina moves to get ready. "Have you got some wipes or something I can clean up with? You really went to town on my ass there! Not that I\'m complaining…"');
  scene.text('Artem grins before picking up her clothes and handing them to her. "No. You can walk back to your room knowing that <i>my</i> cum is leaking out of <i>your</i> slutty ass. Now hurry up and get dressed!"');
  if (((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 2) {
    scene.text('Albina gives him a once over before she grins. "I have another idea…"');
    scene.text('She grins while twirling her thong on her finger. "How about you keep this? Call it a souvenir of your… conquest."');
    scene.text('Artem looks a little surprised at first, but grins as he takes it from her and stuffs it away in a drawer. "You really are a little slut, aren\'t you?"');
    scene.text('She just smiles as she pulls her yoga pants back on, the outline of her pussy slightly visible through the thin fabric. "I\'ll see you guys around, but give me a text next time you want to have some fun."');
    scene.text('You just nod as she pulls her top back into place and seductively walks over to the door. She gives Artem a shake of her ass before she opens the door and steps out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going myself," you tell Artem as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon? To have another threesome, of course."');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room. You just let your boyfriend fuck your friend. You let it happen, but now that it has, you\'re not sure what to think about it.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Stay and chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"The guys would <i>never</i> believe me if they ever found out I was fucking Albina!" he exclaims, the happy grin still on his face.');
    scene.text('You can\'t help but smile at his happiness. "I\'m glad you had fun."');
    if (((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 2) {
      scene.text('"I really did," he smiles. "I can\'t believe she gave me her panties! What am I going to do with those?"');
      scene.text('"Just don\'t show your friends. They\'ll start asking when you started wearing thongs," you jest, causing him to smile.');
      // TODO-QSP: dynamic text: "Thanks for letting that happen, <<$pcs_nickname>>. What did I do to deserve a g...
      scene.text(`"Thanks for letting that happen, ${((s as any).pcs_nickname ?? 0)}. What did I do to deserve a girl like you?"`);
      scene.text('"I know. I really am the best, aren\'t I?" you reply, causing you both to laugh.');
    } else {
      scene.text('"I really did," he smiles. "If it\'s okay with you, I\'d like to keep doing this. Fucking her by myself that is…"');
      scene.text('"We\'ll see," you smile. "Don\'t forget that you have a super hot girlfriend who wants to have some fun as well."');
      scene.text('He blushes slightly. "Of course not! If you want to have a threesome next time, then just say so."');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going," you tell him as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon?"');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room. You just let your boyfriend fuck your friend. You let it happen, but now that it has, you\'re not sure what to think about it.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Stay a little longer', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('She bites her lip as she pulls her yoga pants back on.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> really has changed you, Artem. And for the better, I'd say…" ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)} really has changed you, Artem. And for the better, I'd say…" she grins. "I'll see you guys around, but give me a text next time you want to have some fun."`);
    scene.text('You just nod as she pulls her top back into place and seductively walks over to the door. She gives Artem a shake of her ass before she opens the door and steps out.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going myself," you tell Artem as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon?"');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room. You just let your boyfriend fuck your friend. You let it happen, but now that it has, you\'re not sure what to think about it.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Stay and chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"The guys would <i>never</i> believe me if they ever found out I was fucking Albina!" he exclaims, the happy grin still on his face.');
    scene.text('You can\'t help but smile at his happiness. "I\'m glad you had fun."');
    if (((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['artem_solo'] === 2) {
      scene.text('"I really did," he smiles. "I can\'t believe she gave me her panties! What am I going to do with those?"');
      scene.text('"Just don\'t show your friends. They\'ll start asking when you started wearing thongs," you jest, causing him to smile.');
      // TODO-QSP: dynamic text: "Thanks for letting that happen, <<$pcs_nickname>>. What did I do to deserve a g...
      scene.text(`"Thanks for letting that happen, ${((s as any).pcs_nickname ?? 0)}. What did I do to deserve a girl like you?"`);
      scene.text('"I know. I really am the best, aren\'t I?" you reply, causing you both to laugh.');
    } else {
      scene.text('"I really did," he smiles. "If it\'s okay with you, I\'d like to keep doing this. Fucking her by myself that is…"');
      scene.text('"We\'ll see," you smile. "Don\'t forget that you have a super hot girlfriend who wants to have some fun as well."');
      scene.text('He blushes slightly. "Of course not! If you want to have a threesome next time, then just say so."');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going," you tell him as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon?"');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room. You just let your boyfriend fuck your friend. You let it happen, but now that it has, you\'re not sure what to think about it.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Stay a little longer', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbina_3some3Threesome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'hj', 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj1.jpg');
  if (((s as any).artemQW ?? 0)?.['alb_double_bj'] === 0) {
    scene.text('You all undress before you join Albina on the bed as she kneels next to Artem\'s cock.');
    scene.text('"Your boyfriend has a pretty nice cock," she says teasingly, more to Artem than you. "How about we share it at the same time?"');
    scene.text('You nod and start jerking Artem\'s cock as Albina watches. Glancing up at Artem, you can see that he\'s just as surprised as he is curious.');
  } else {
    scene.text('You all undress before you join Albina on the bed as she kneels next to Artem\'s cock.');
    scene.text('"Think you can handle us both sucking your dick at the same time again?" she teasingly asks Artem.');
    scene.text('You start jerking Artem\'s already rock hard cock in your hand. Glancing up at him, you see a smug, yet happy grin on his face.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj2.jpg');
    if (((s as any).artemQW ?? 0)?.['alb_double_bj'] === 0) {
      ((s as any).artemQW ?? {})['alb_double_bj'] = 1;
      scene.text('Grinning at Albina, you take his cock into your mouth and start sucking as you both gaze up at Artem, a happy smile on his face as he moans softly.');
      scene.text('"This is actually happening! Two girls are sucking my dick at the <i>same time</i>!"');
      scene.text('After a few minutes, Albina stops you. "My turn."');
    } else {
      scene.text('You take his cock into your mouth and start sucking as you both gaze up at Artem, a happy smile on his face as he moans softly.');
      scene.text('"I can\'t believe it! I have two girls sucking my dick at the same time <i>again</i>!"');
      scene.text('After a few minutes, Albina stops you. "My turn."');
    }
    scene.actions([
      { label: 'Let her have a turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj3.jpg');
    scene.text('You pop his dick out of your mouth and smile at Albina as you invite her to take your place. She grins back before she wraps her lips around his shaft and starts sucking.');
    scene.text('You watch her bobbing her head up and down his shaft for a few seconds before you focus your efforts on sucking his balls. You gaze up at him as he moans even louder.');
    scene.text('After a few more minutes, he has you stop. "As much as I enjoyed that girls, I want to fuck you now."');
    scene.actions([
      { label: 'Watch Albina get fucked', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/miss4.mp4');
    scene.text('You watch as he roughly pushes Albina down on her back and she spreads her legs wide.');
    scene.text('She then reaches down and spreads her pussy lips, eagerly exposing her dripping wet hole. "Hurry up and put it inside me!"');
    scene.text('Artem grins smugly as he climbs in between her legs and slides his dick inside her awaiting pussy, causing the two of them to moan loudly.');
    scene.text('His gaze then hardens and he starts ramming his cock into her pussy while roughly kneading her breast in his hand, causing her to moan and gasp loudly in pleasure.');
    scene.text('"Fuck yeah, pound my tight little pussy! Harder!" she squeals as Artem thrusts himself balls deep into her, the bed squeaking loudly beneath them as you continue watching.');
    scene.actions([
      { label: 'Switch position', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/pussylick5.mp4');
    scene.text('You squeal as he grabs you by the hair and forcefully shoves your face into Albina\'s already wet pussy. You obediently start licking and she moans loudly, her juices coating your tongue and smearing across your face as she grinds against you.');
    scene.text('You eat her out for a few minutes before Artem suddenly pulls you away and you see him standing next to you stroking his cock before he grabs your hair in his hand and pulls you over to him.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'arousal', 'bj', (-2));
    qspCall(s, 'arousal', 'cuni', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom/event/rought/dog11.mp4');
    scene.text('You obediently open your mouth and he shoves his cock inside. You eagerly suck and gag on it for a few minutes before he pushes you aside and forces Albina down on the bed. He then moves in behind her and gives her ass a few hard smacks before he shoves his dick back into her awaiting pussy, causing them both to moan.');
    scene.text('"Uhh, your dick feels so good stretching my little pussy!" she squeals as Artem starts thrusting hard and deep.');
    scene.text('"Shut up and take my cock, bitch!" he says and smacks her on the ass again before grabbing her hair in his hands and thrusting even harder.');
    scene.text('You climb onto the bed in front of Albina and spread your legs, inviting her to eat you out as Artem pounds her from behind. She obediently does so and you moan softly as she licks and sucks on your clit.');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'rough');
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'arousal', 'kiss', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding.jpg');
    scene.text('After a few minutes, Artem suddenly pulls out of Albina and pushes her aside. "Enough of you. I want to fuck my girl now."');
    scene.text('You squeal as Artem gets on his back next to you and pulls you on top of him. "Time to go for a ride, slut!" he laughs and smacks your ass.');
    scene.text('You moan as you start riding him, his already slick cock easily sliding in and out of your pussy. You watch as he motions for Albina to sit on his face and she moans as he starts eating her pussy.');
    scene.text('You and Albina moan in pleasure before she leans over and starts kissing you, her tongue eagerly exploring your mouth as she moans into it.');
    scene.actions([
      { label: 'Switch position', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'arousal', 'breasts', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_riding1.mp4');
    scene.text('You yelp when Artem suddenly pushes you off of him and gets up on his knees.');
    scene.text('"Get in a position where I can fuck both of you sluts at the same time!" he barks.');
    scene.text('You obediently crawl over and climb on top of Albina, smiling down at her as Artem paws at your ass.');
    scene.text('Seconds later, you feel his cock once again stretching your pussy and moan softly as he pushes it deep inside you.');
    scene.text('Artem then shoves you down and starts roughly pounding you, his hips loudly slapping against your ass. You cry out in pleasure before gasping when you suddenly feel Albina start sucking on your breast and licking your nipple.');
    scene.text('Just as it\'s starting to feel really good, Artem pulls out of you and Albina lets out a muffled moan as he starts fucking her again.');
    scene.text('"Fuck, you two sluts look fucking hot like this!" he grunts as you glance back and watch his cock sliding in and out of Albina\'s wet pussy.');
    scene.text('After a few minutes, he switches back to you. As he fucks you, he grabs Albina\'s legs and wraps them behind your back, the two of you now entangled in each other as he gives you a few deep thrusts before switching back to Albina.');
    scene.text('He continues alternating between fucking the two of you before he starts grunting that he\'s about to cum.');
    scene.actions([
      { label: 'Keep getting fucked', handler: (st: GameState) => {
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
    qspCall(s, 'cum_call', 'mouth_swallow', 'A2', 1);
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/artem/threesome_bj5.jpg');
    scene.text('Albina scoots over and grabs your head before forcing her cum covered tongue into your mouth. The two of you deeply and passionately make out, passing Artem\'s cum back and forth between you. Once you\'re finished, you both swallow his cum.');
    scene.text('Albina then gets up and grabs some wipes to clean herself before passing some to you. Artem soon follows suit and starts cleaning himself up as well.');
    scene.actions([
      { label: 'Clean up', goto: ['artem_alb_sex', 'albina_3some3_aftermath'] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbina_3some3Aftermath(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/artemroom/artem_dorm_room.jpg');
  scene.text('You all bask in the afterglow for a few minutes before Albina moves to get ready.');
  scene.text('She smiles as she pulls her yoga pants back on. "I\'ll see you guys around, but give me a text next time you want to have some more fun."');
  scene.text('Artem smiles and you nod as she seductively walks over to the door. She gives Artem a shake of her ass before she opens the door and steps out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going myself," you tell Artem as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon?"');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    { label: 'Stay and chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('Artem can\'t help but smile as he sighs happily. "She really is amazing…"');
    scene.text('You can\'t help but smile yourself. "I\'m glad you had fun again."');
    scene.text('"I really did," he smiles. "I can\'t believe I\'m actually getting to fuck a girl like her, but I can\'t forget my beautiful girlfriend who made it all possible!"');
    scene.text('"Nice save," you grin, causing him to smile.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I should get going," you tell him as you give him a kiss. "I have some things I need to do."');
    scene.text('"Okay," he smiles. "Do you think we could invite her over again soon?"');
    scene.text('"We\'ll see," you reply, smiling at his eagerness. "She can be a pretty busy girl sometimes."');
    scene.text('He just nods and you blow him another kiss before leaving his room.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Stay a little longer', goto: ['artem_dorm', 'start'] },
    ]);
  } },
  ]);
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
    case 'albina_3some2':
      enterAlbina_3some2(s, scene);
      break;
    case 'albina_3some2_bj_alb':
      enterAlbina_3some2BjAlb(s, scene);
      break;
    case 'albina_3some2_bj_sveta':
      enterAlbina_3some2BjSveta(s, scene);
      break;
    case 'albina_3some2_anal_alb':
      enterAlbina_3some2AnalAlb(s, scene);
      break;
    case 'albina_3some2_anal_sveta':
      enterAlbina_3some2AnalSveta(s, scene);
      break;
    case 'albina_3some2_creampie_alb':
      enterAlbina_3some2CreampieAlb(s, scene);
      break;
    case 'albina_3some2_creampie_sveta':
      enterAlbina_3some2CreampieSveta(s, scene);
      break;
    case 'albina_3some2_cleanup':
      enterAlbina_3some2Cleanup(s, scene);
      break;
    case 'albina_3some_repeating':
      enterAlbina_3someRepeating(s, scene);
      break;
    case 'albina_3some3_solo':
      enterAlbina_3some3Solo(s, scene);
      break;
    case 'solo_aftermath':
      enterSoloAftermath(s, scene);
      break;
    case 'albina_3some3_threesome':
      enterAlbina_3some3Threesome(s, scene);
      break;
    case 'albina_3some3_aftermath':
      enterAlbina_3some3Aftermath(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_alb_sex: LocationDef = {
  name: 'artem_alb_sex',
  title: 'You chat with Artem about what to expect before you reach th',
  region: 'other',
  enter: enter,
};
