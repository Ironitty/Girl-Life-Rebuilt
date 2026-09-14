import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterZoyaChatMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Make small talk', handler: (st: GameState) => {
    qspCall(st, 'albina_mother_events', 'zoya_small_talk');
  } },
  ]);
  scene.build();
}

function enterZoyaSmallTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  if ((Math.floor(Math.random() * 5) + 1) === 1) {
    scene.text('"Thank you for coming over by the way," Zoya smiles at you warmly. "I\'m not just being polite. After everything Albina\'s been through, I\'m glad she has a friend like you to rely on. She needs it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaChatMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterZoyaMeet(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['visiting'] = 1;
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['meet_zoya'] = 1;
  scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
  scene.text('You notice a sleek and expensive looking Audi you\'ve never seen before parked in the drive before the door opens to reveal a beautiful, well-dressed woman you estimate to be in her late 30s. She\'s wearing high heels, a pencil skirt, and a partially unbuttoned blouse that gives you a view of her substantial cleavage that bulges against the fabric.');
  // TODO-QSP: dynamic text: "You must be <<$pcs_firstname>>," she smiles. "Albina has told me quite a bit ab...
  scene.text(`"You must be ${((s as any).pcs_firstname || '')}," she smiles. "Albina has told me quite a bit about you. All good things, I assure you," she adds with a laugh.`);
  scene.text('The woman holds her hand for you to shake, and you do so tentatively. "I\'m sorry, and you are…?"');
  scene.text('"Oh! Forgive my rudeness. I\'m Albina\'s mother, Zoya Petrenkoa."');
  scene.text('You\'re shocked by the introduction. Albina\'s <i>mother</i>?');
  scene.text('"It\'s a pleasure to meet you!" you blurt out. "Mrs… Ms… Uhh…" you flounder, realizing she didn\'t use Albina\'s surname, and you\'re unsure what to do.');
  scene.text('"Doctor, actually," she says, smirking wryly. "But you can just call me Zoya."');
  scene.text('"Oh no! I could-"');
  scene.text('"I insist," she smiles warmly. "Would you like to come inside?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoya.jpg');
    scene.text('"Albina is in her room right now. I expect the maid has told her of your arrival already," she says as she grabs her coat and clatters her way to the front door.');
    scene.text('"I wish I could be a more entertaining host, but my bosses at the hospital have decided to schedule an important meeting on my day off of all days! I know you come here to see Albina, but do come and say hello if I\'m ever home when you visit."');
    scene.text('She gives a parting smile and closes the door behind her. You hear the car starting up outside before it roars away.');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaSunbathingSolo1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
  scene.text('You walk in and the maid closes the door behind you before escorting you out to the pool.');
  if (((s as any).AlbinaQW ?? 0)?.['pool'] === 0) {
    scene.text('You see Zoya laying back on a floatie in the middle of the pool. She\'s topless and looks very relaxed, moving only for a moment to adjust her bikini bottom, allowing you to catch the briefest glimpse of her pussy lips as she does.');
    scene.text('"A visitor for you, Ms. Zoya," the maid says and bows before returning to her duties.');
    scene.text('Zoya cracks an eye open to look at you as you approach.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>," she says, carefully sitting up on her elbows, the fl...
    scene.text(`"Hello ${((s as any).pcs_firstname || '')}," she says, carefully sitting up on her elbows, the floatie wobbling beneath her.`);
    scene.text('"I hope I\'m not intruding?" you reply politely.');
    scene.text('"No no, not at all. Were you looking for Albina? I think she\'s out right now, but you\'re welcome to make yourself at home until she comes back."');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['pool'] = 1;
    scene.actions([
      { label: 'Check her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['check_out_zoya'] = ((s as any).AlbinaQW['check_out_zoya'] ?? 0) + (1);
    scene.text('"Okay. Thanks, Zoya."');
    scene.text('Your gaze wanders up and down her body. Zoya looks incredible for her age, especially given that she wasn\'t a teen parent like your own mother.');
    scene.text('Her skin is wonderfully tanned, unmarred by any white lines, clearly due to her topless sunbathing habits. Her breasts are exceptionally full, large and with a beautiful symmetrical roundness to them. Not to mention her flat, toned stomach and long shapely legs. Though mostly obscured by the floatie, her thick thighs give you a pretty good idea of where Albina got her ass from.');
    scene.text('"<i>Ahem</i>."');
    // TODO-QSP: dynamic text: You blink and realize that Zoya is looking sternly at you, seemingly annoyed. "I...
    scene.text(`You blink and realize that Zoya is looking sternly at you, seemingly annoyed. "It's rude to stare at someone's body like that, ${((s as any).pcs_firstname || '')}."`);
    scene.text('"Oh, sorry…" you gulp.');
    scene.text('"Perhaps you should wait for Albina inside?"');
    scene.text('"Yeahhhh… I\'ll go do that…" Awkwardly walking away, you head back inside, taking one last glance back at Zoya to see her lay her head back on the floatie and close her eyes again.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('You see Zoya sunbathing in the pool again. Reacting to some kind of sound you made, she opens her eyes and sits up to look at you.');
    // TODO-QSP: dynamic text: "Hello again, <<$pcs_firstname>>. Waiting for Albina again?"
    scene.text(`"Hello again, ${((s as any).pcs_firstname || '')}. Waiting for Albina again?"`);
    scene.text('"Mhmm," you respond with a nod.');
    scene.text('"Well, as always, make yourself at home until she comes back."');
    scene.actions([
      { label: 'Check her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('"Okay. Thanks, Zoya."');
    if (((s as any).AlbinaQW ?? 0)?.['check_out_zoya'] > 0) {
      scene.text('You can\'t help but ogle her body again. Those big tanned tits, those long toned legs… You vaguely imagine what it would be like to bury your head into her breasts or feel her thighs squeeze your head during climax. A tingling sensation runs through your crotch at the thought.');
      scene.text('"Ahem."');
      // TODO-QSP: dynamic text: You blink and realize that Zoya is glaring at you. "I believe we talked about th...
      scene.text(`You blink and realize that Zoya is glaring at you. "I believe we talked about this before, ${((s as any).pcs_firstname || '')}…`);
      scene.text('"Oh, uhh…" you gulp.');
      scene.text('"You should go and wait for Albina inside."');
      scene.text('"Umm, yeah.. I\'ll go do that…" Awkwardly walking away, you head back inside, taking one last glance back at Zoya before you go.');
      scene.text('<i>That body… Damn</i>!');
    } else {
      scene.text('Your gaze wanders up and down her body. Zoya looks incredible for her age, especially given that she wasn\'t a teen parent like your own mother. Her skin is wonderfully tanned, unmarred by any white lines, clearly due to her topless sunbathing habits. Her breasts are exceptionally full, large and with a beautiful symmetrical roundness to them. Not to mention her flat, toned stomach and long shapely legs. Though mostly obscured by the floatie, her thick thighs give you a pretty good idea of where Albina got her ass from.');
      scene.text('"Ahem."');
      // TODO-QSP: dynamic text: You blink and realize that Zoya is looking sternly at you, seemingly a bit annoy...
      scene.text(`You blink and realize that Zoya is looking sternly at you, seemingly a bit annoyed. "It's rude to stare at someone's body like that, ${((s as any).pcs_firstname || '')}."`);
      scene.text('"Oh, sorry…" you gulp.');
      scene.text('"Perhaps you should wait for Albina inside?"');
      scene.text('"Yeahhhh… I\'ll go do that…"');
      scene.text('Awkwardly walking away, you head back inside, taking one last glance back at Zoya to see her lay her head back on the floatie and close her eyes again.');
    }
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Make small talk until Albina returns', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('"So," you begin, sitting down next to the pool to be closer to eye level. "How have you been?"');
    scene.text('The two of you chat about various subjects until Milena interrupts to tell you that Albina has returned home.');
    scene.text('Ending on that note, you wave goodbye and head back in to see Albina.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    { label: 'Go inside', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('"Okay. Thanks, Zoya. I\'ll let you get back to your sunbathing."');
    scene.text('You wave goodbye and head back into the house, thinking about how to pass the time until Albina returns.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaSunbathingSolo2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['pool'] === 0) {
    scene.text('As you approach, she moves to adjust her bikini bottom, allowing you to catch the briefest glimpse of her pussy lips as she does. Seemingly hearing you, she cracks open an eye to look at you.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>," she smiles, carefully sitting up on her elbows, the ...
    scene.text(`"Hello ${((s as any).pcs_firstname || '')}," she smiles, carefully sitting up on her elbows, the floatie wobbling beneath her.`);
    scene.text('"I hope I\'m not intruding?" you reply politely.');
    scene.text('She waves her hand. "No no, not at all!"');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['pool'] = 1;
    scene.actions([
      { label: 'Check her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['check_out_zoya'] = ((s as any).AlbinaQW['check_out_zoya'] ?? 0) + (1);
    scene.text('Your gaze wanders up and down her body. Zoya looks incredible for her age, especially given that she wasn\'t a teen parent like your own mother.');
    scene.text('Her skin is wonderfully tanned, unmarred by any white lines, clearly due to her topless sunbathing habits. Her breasts are exceptionally full, large and with a beautiful symmetrical roundness to them. Not to mention her flat, toned stomach and long shapely legs. Though mostly obscured by the floatie, her thick thighs give you a pretty good idea of where Albina got her ass from.');
    scene.text('"<i>Ahem</i>."');
    // TODO-QSP: dynamic text: You blink and realize that Zoya is looking sternly at you, seemingly annoyed. "I...
    scene.text(`You blink and realize that Zoya is looking sternly at you, seemingly annoyed. "It's rude to stare at someone's body like that, ${((s as any).pcs_firstname || '')}."`);
    scene.text('"Oh, sorry…" you gulp.');
    scene.text('"Perhaps you should go back inside?"');
    scene.text('"Yeahhhh… I\'ll go do that…"');
    scene.text('Awkwardly walking away, you head back inside, taking one last glance back at Zoya to see her lay her head back on the floatie and close her eyes again.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('Reacting to some kind of sound you made, Zoya opens her eyes and sits up to look at you.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>."
    scene.text(`"Hello ${((s as any).pcs_firstname || '')}."`);
    scene.text('"Hey Zoya," you reply.');
    scene.actions([
      { label: 'Check her out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['check_out_zoya'] > 0) {
      scene.text('You can\'t help but ogle her body again. Those big tanned tits, those long toned legs… You vaguely imagine what it would be like to bury your head into her breasts or feel her thighs squeeze your head during climax. A tingling sensation runs through your crotch at the thought.');
      scene.text('"Ahem."');
      // TODO-QSP: dynamic text: You blink and realize that Zoya is glaring at you. "I believe we talked about th...
      scene.text(`You blink and realize that Zoya is glaring at you. "I believe we talked about this before, ${((s as any).pcs_firstname || '')}…`);
      scene.text('"Oh, uhh…" you gulp.');
      scene.text('"Perhaps you should go back inside?"');
      scene.text('"Umm, yeah.. I\'ll go do that…"');
      scene.text('Awkwardly walking away, you head back inside, taking one last glance back at Zoya before you go.');
      scene.text('<i>That body… Damn</i>!');
    } else {
      scene.text('Your gaze wanders up and down her body. Zoya looks incredible for her age, especially given that she wasn\'t a teen parent like your own mother. Her skin is wonderfully tanned, unmarred by any white lines, clearly due to her topless sunbathing habits. Her breasts are exceptionally full, large and with a beautiful symmetrical roundness to them. Not to mention her flat, toned stomach and long shapely legs. Though mostly obscured by the floatie, her thick thighs give you a pretty good idea of where Albina got her ass from.');
      scene.text('"Ahem."');
      // TODO-QSP: dynamic text: You blink and realize that Zoya is looking sternly at you, seemingly a bit annoy...
      scene.text(`You blink and realize that Zoya is looking sternly at you, seemingly a bit annoyed. "It's rude to stare at someone's body like that, ${((s as any).pcs_firstname || '')}."`);
      scene.text('"Oh, sorry…" you gulp.');
      scene.text('"Perhaps you should go back inside?"');
      scene.text('"Yeahhhh… I\'ll go do that…"');
      scene.text('Awkwardly walking away, you head back inside, taking one last glance back at Zoya to see her lay her head back on the floatie and close her eyes again.');
    }
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['check_out_zoya'] = ((s as any).AlbinaQW['check_out_zoya'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('You decide to sit next to the pool and chat with Zoya.');
    scene.actions([
      { label: 'Chat', goto: ['zoya_chat', 'pool_chat'] },
    ]);
  } },
    { label: 'Go back inside', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapool.jpg');
    scene.text('"I\'ll let you get back to your sunbathing," you say and wave goodbye before heading back into the house.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaSunbathingAlbina(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['mother_daughter_sunbathe'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/home/pool/alb_zoya1.jpg');
  scene.text('You hear the latch unlocking before the door is opened by the maid.');
  // TODO-QSP: dynamic text: "Hello Miss <<$pcs_firstname>>," she smiles. "Ms. Zoya and Miss Albina are out b...
  scene.text(`"Hello Miss ${((s as any).pcs_firstname || '')}," she smiles. "Ms. Zoya and Miss Albina are out by the pool."`);
  scene.text('She closes the door behind you and escorts you through the house to the pool before returning to her duties.');
  scene.text('You see Albina and Zoya both lying topless upon the poolside deck chairs, cocktail glasses filled with fruity looking liquids at elbowside tables beside them next to various oils and lotions.');
  scene.text('Zoya notices you first, casually rolling away from you and onto her belly, her dark hair shifting to let you see her marvelously toned back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Approach them', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/home/pool/alb_zoya2.jpg');
    scene.text('Only once you get closer does Albina notice you, making no move to cover herself as her lips give way to a sly smile.');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she says. "Did Milena let you in?"
    scene.text(`"Hey ${((s as any).pcs_nickname || '')}," she says. "Did Milena let you in?"`);
    scene.text('"Yeah," you nod.');
    scene.text('"Mama and I were just tanning ourselves," she smirks, casually picking up one of the bottles on the tables and drizzling a line of oil across her stomach. It sparkles in the sunlight as she rubs it in with her hands, clearly defining the muscles of her core. Her hands move up to her breasts, rubbing it in there as well. She massages and knead with almost groping motions. Her fingers squeeze from the base of her mounds all the way up to her nipples, rolling them between them and forefinger, only releasing after gentle tugs.');
    scene.text('You can\'t help but stare as she does this until your eyes flicker to her face and only then do you realize:');
    scene.text('She\'s doing this on purpose!');
    scene.actions([
      { label: 'Interrupted', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/home/pool/alb_zoya2.jpg');
    scene.text('"Why must you act like this, Albina?" Zoya sighs, rolling her eyes from the other chair.');
    // TODO-QSP: dynamic text: Albina snorts. "Why not? It's nothing <<$pcs_nickname>> hasn't seen before. We s...
    scene.text(`Albina snorts. "Why not? It's nothing ${((s as any).pcs_nickname || '')} hasn't seen before. We shower together all the time at school. Besides, you're topless too, Mama."`);
    scene.text('"It\'s called <i>modesty</i>, young lady!" Zoya snorts in return. "You could stand to have some. It was time for my back anyway. And it\'s time you went inside. You\'ve been out here long enough. Go rinse off before you get skin cancer."');
    scene.text('Albina sighs and gets up. "Yes, Mama…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/home/pool/bottoms_off.jpg');
    scene.text('Albina drains her cocktail glass in one gulp and then shamelessly pulls down her bikini bottom to stand completely nude on the deck. Her mother gives her an eyeful, but you see her physically bite her tongue as Albina pads her way back through the house, you following along behind her.');
    scene.text('"I need to take a shower," she says, casually twirling her bottoms around one finger before carelessly letting them fall to the floor. She stops in the hall outside her room and gives you a playful smile. "Care to join me?"');
    qspCall(s, 'albina_house_events', 'albina_shower_talk_start');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaYogaAlbina(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/yoga.jpg');
  scene.text('You hear the latch unlocking before the door is opened by the maid.');
  // TODO-QSP: dynamic text: "Hello Miss <<$pcs_firstname>>," she smiles. "Ms. Zoya and Miss Albina are in th...
  scene.text(`"Hello Miss ${((s as any).pcs_firstname || '')}," she smiles. "Ms. Zoya and Miss Albina are in the gym."`);
  scene.text('She closes the door behind you and escorts you through the house to the home gym before returning to her duties.');
  // TODO-QSP: dynamic text: "Is that you, <<$pcs_nickname>>?" you hear Albina call out from the room and ent...
  scene.text(`"Is that you, ${((s as any).pcs_nickname || '')}?" you hear Albina call out from the room and enter to find her and Zoya doing some yoga.`);
  scene.text('You get a great view of their round asses and toned legs stretching their skintight yoga pants and aren\'t sure where to look as they finish their routine.');
  // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>. I'd love to stay and chat, but I need to shower and g...
  scene.text(`"Hello ${((s as any).pcs_firstname || '')}. I'd love to stay and chat, but I need to shower and get some paperwork done for work," Zoya says and excuses herself from the room, leaving you with Albina.`);
  // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, I gotta get showered and changed."
  scene.text(`"Come on ${((s as any).pcs_nickname || '')}, I gotta get showered and changed."`);
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('You follow Albina to her room, where she strips from her clothes and tosses them aside without a care.');
    scene.text('"I need to take a shower and wash all this sweat off. Care to join me?" she asks with a playful smile.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Join her', goto: ['albina_sex_scenes', 'albina_shower'] },
      { label: 'Just talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/showering.jpg');
    scene.text('"No thanks, but I wouldn\'t mind talking while you do."');
    scene.text('"Suit yourself," she shrugs and heads into her personal bathroom, leaving the door open for you to follow her in. You sit down on the edge of her bath while she steps into the shower.');
    scene.text('"So you and your mother work out together?"');
    scene.text('"When we can," she replies, her voice echoing off the glass and tile. "Sometimes I\'m busy, sometimes she\'s busy. She says I should always try and keep myself in shape and use yoga to calm myself and my mind. Says it\'ll \'do me a world of good\', whatever the hell that means."');
    scene.text('The tap squeaks off and she steps out of the shower before grabbing a towel to dry herself off. You follow her into her room and sit on her bed, continuing to chat while she gets dressed.');
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Wait out here', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    scene.text('"No thanks. I\'ll just wait until you\'re done."');
    scene.text('"Suit yourself I guess," she shrugs and heads into the bathroom, closing the door behind her.');
    scene.text('You twiddle your thumbs for a few minutes until she comes back out, towel wrapped around her hair and with nothing around her body.');
    scene.text('She heads straight to her dresser to start picking out clothes, chatting with you while she gets dressed.');
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaWorkoutSolo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/zoyaworkout.jpg');
  scene.text('You walk in and the maid closes the door behind you before escorting you to the home gym.');
  scene.text('"A visitor for you, Ms. Zoya," she says before she bows and returns to her duties.');
  scene.text('"Thank you, Milena," Zoya says as you finishes doing some squats. Her technique looks flawless and you get a great view of her voluptuous ass and her heavily toned legs visibly flexing beneath the skintight yoga pants covering them.');
  // TODO-QSP: dynamic text: Noticing your reflection in the mirror, she turns her head over her shoulder to ...
  scene.text(`Noticing your reflection in the mirror, she turns her head over her shoulder to smile at you while continuing to squat. "Hello ${((s as any).pcs_firstname || '')}. What can I do for you?"`);
  scene.text('"I hope I\'m not intruding?" you reply politely.');
  scene.text('"No no, not at all. Were you looking for Albina? I think she\'s out right now, but you\'re welcome to make yourself at home until she comes back."');
  scene.text('You chat with Zoya for a few minutes as she finishes her workout. "I\'d love to stay and chat, but I need to shower and get some paperwork done for work."');
  scene.text('She excuses herself and leaves the room, leaving you alone to decide what to do.');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for Albina', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
  }, goto: ['albinahome', 'hallway'] },
    { label: 'Follow her', goto: ['albina_mother_events', 'peep1'] },
  ]);
  scene.build();
}

function enterPeep1(s: GameState, scene: SceneBuilder): void {
  scene.text('You carefully follow Zoya to her bedroom, waiting around the corner as she enters the room and closes the door behind her.');
  scene.text('After waiting a few seconds, you walk up to the door and listen carefully. You hear her walking around before the sound of running water from the shower fills the room.');
  scene.text('You stand frozen at the door, deciding whether or not you should enter.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('You decide not to invade Zoya\'s privacy and leave, waiting downstairs for Albina to return.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for Albina', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyaroom.jpg');
    scene.text('You quietly open the door and step into the room before closing the door behind you.');
    scene.text('Zoya doesn\'t hear you over the sound of the running water and continues showering. You take a minute to appreciate the lavishly decorated room before turning your attention to the en-suite bathroom, separated from the bedroom only by a sliding wall.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('You don\'t feel comfortable invading Zoya\'s privacy any further and so quickly and quietly leave the room.');
    scene.text('You then quickly head back downstairs ans wait for Albina to return.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    scene.actions([
      { label: 'Wait for Albina', goto: ['albinahome', 'hallway'] },
    ]);
  } },
      { label: 'Take a peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyashower.jpg');
    scene.text('Your curiosity gets the better of you and you peek around the sliding wall panel into the en-suite. Zoya is unaware of your presence and continues showering.');
    scene.text('Being a former model, she has a great body that she keeps in shape and you can see where Albina gets some of her curvy nature from, especially her ass.');
    scene.text('You continue watching for a few seconds before deciding you shouldn\'t push your luck. You quietly slip back out into the hallway just as you hear the water stop running.');
    (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for Albina', goto: ['albinahome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPeep2(s: GameState, scene: SceneBuilder): void {
  scene.text('As you approach the door to Zoya\'s bedroom, you find it slightly ajar. You can hear Zoya inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('You decide not to disturb her and go on your way.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albinahome', 'hallway'] },
    ]);
  } },
    { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyapeeping.jpg');
    scene.text('Your curiosity gets the better of you and you carefully peek through the gap in the door. Peering into the room, you see Zoya, her back turned to you as she finishes drying herself with a towel. You hold in a gasp when she drops her towel, exposing her naked body as she prepares to get dressed.');
    scene.text('Being a former model, she has a great body that she keeps in shape and you can see where Albina gets some of her curvy nature from, especially her ass.');
    scene.text('She suddenly turns around and you duck out of view, but she doesn\'t react and you peer back in. This time, you get a good view of her large breasts and the neatly trimmed tuft of pubic hair sitting atop her pussy, the only hair on her otherwise silky smooth body.');
    scene.text('You keep watching her as she starts putting on her underwear, her breasts bouncing slightly as she adjusts her bra. She then disappears out of your view and you hear her rummaging through her closet before returning with the rest of her clothes.');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('You decide not to push your luck any further and leave before someone catches you peeping.');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'hallway'] },
    ]);
  } },
      { label: 'Keep watching', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.img('images/locations/pavlovsk/resident/albinahome/zoyapeeping1.jpg');
      scene.text('Before you can peek back in and watch any further, you hear someone coming and run over to the bathroom, pretending to leave just as Albina arrives. She has an inquisitive look on her face.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>? What are you doing?" she asks, noticing the flushed appearan...
      scene.text(`"${((s as any).pcs_nickname || '')}? What are you doing?" she asks, noticing the flushed appearance on your face.`);
      scene.text('"Oh, uuhh… I was… just leaving the bathroom," you reply, awkwardly trying to hide the fact that you were peeping on her mother.');
      scene.text('She raises a brow. "You didn\'t clog the toilet, did you?"');
      scene.text('"No! I\'m just… I\'m fine. I promise!" you blurt out and she seems even more confused.');
      scene.text('She gives you an awkward glare, but Zoya peers out into the hallway before she can push you further.');
      scene.text('"Is everything okay out here, girls?" she asks.');
      scene.text('Albina silently nods and motions for you to follow her. You awkwardly avoid eye contact with Zoya as you hastily walk past her.');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/zoyapeeping1.jpg');
      scene.text('Before you can peek back in and watch any further, you hear someone coming and run over to the bathroom, pretending to leave just as the maid walks up the stairs doing her rounds. She seems a little surprised to see you.');
      // TODO-QSP: dynamic text: "Are you okay, Miss <<$pcs_firstname>>?" she asks, noticing the flushed appearan...
      scene.text(`"Are you okay, Miss ${((s as any).pcs_firstname || '')}?" she asks, noticing the flushed appearance on your face.`);
      scene.text('"Oh, uuhh… I was… just leaving the bathroom," you reply, awkwardly trying to hide the fact that you were peeping on her employer.');
      scene.text('"I\'m just… I\'m fine. I promise!" you awkwardly blurt out and she seems even more confused. ');
      scene.text('She gives you an awkward stare, but Zoya peers out into the hallway before she can push you further.');
      scene.text('"Is everything okay out here, Milena?"');
      scene.text('The maid silently nods and continues on her duties, giving you a disapproving glare as she enters Zoya\'s bedroom.');
      scene.text('You awkwardly avoid eye contact with Zoya as you hastily walk past her and return to Albina.');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albinahome', 'bedroom'] },
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
    case 'zoya_chat_menu':
      enterZoyaChatMenu(s, scene);
      break;
    case 'zoya_small_talk':
      enterZoyaSmallTalk(s, scene);
      break;
    case 'zoya_meet':
      enterZoyaMeet(s, scene);
      break;
    case 'zoya_sunbathing_solo1':
      enterZoyaSunbathingSolo1(s, scene);
      break;
    case 'zoya_sunbathing_solo2':
      enterZoyaSunbathingSolo2(s, scene);
      break;
    case 'zoya_sunbathing_albina':
      enterZoyaSunbathingAlbina(s, scene);
      break;
    case 'zoya_yoga_albina':
      enterZoyaYogaAlbina(s, scene);
      break;
    case 'zoya_workout_solo':
      enterZoyaWorkoutSolo(s, scene);
      break;
    case 'peep1':
      enterPeep1(s, scene);
      break;
    case 'peep2':
      enterPeep2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_mother_events: LocationDef = {
  name: 'albina_mother_events',
  title: '"Thank you for coming over by the way," Zoya smiles at you w',
  region: 'other',
  enter: enter,
};
