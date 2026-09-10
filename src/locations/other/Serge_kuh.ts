import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sergebazarkuh_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sergebazarkuh_count = 5;
  }
  if (((s as any).sergehelppos_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sergehelppos_count = 1;
  }
  if (((s as any).sergehelppol_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sergehelppol_count = 1;
  }
  qspCall(s, 'core_library', 'setloc', 'Serge_kuh', '');
  qspCall(s, 'boyStat', 'A112');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big112.jpg');
  scene.text('Sergey is standing at the kitchen counter. He\'s making soup, cutting up ingredients and throwing them into a large pan.');
  qspCall(s, 'Serge_Shulgin', 'rep');
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
    { label: 'Chat with Sergey', handler: (st: GameState) => {
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
    }
    (s as any).sergebazarkuh_day = ((s as any).daystart ?? 0);
    (s as any).sergebazarkuh_count = ((s as any).sergebazarkuh_count ?? 0) - (1);
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A112', 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
    scene.text('Sergey is standing at the kitchen counter. He\'s making soup, cutting up ingredients and throwing them into a large pan.');
    scene.text('You don\'t want to get in his way and sit down on a chair near the kitchen table, so you can have a chat with him while he keeps preparing the food.');
    (s as any).serge_textbk_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).serge_textbk_rand ?? 0))) {
    }
    if (((s as any).serge_textbk_rand ?? 0) === 1) {
    }
    if (((s as any).serge_textbk_rand ?? 0) === 2) {
    }
    if (((s as any).serge_textbk_rand ?? 0) === 3) {
    }
    if (((s as any).serge_textbk_rand ?? 0) === 4) {
    }
    if (((s as any).sergebazarkuh_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Sergey says: "Listen, <<$pcs_nickname>>… I don't mind having you around the hous...
      scene.text(`Sergey says: "Listen, ${((s as any).pcs_nickname ?? 0)}… I don't mind having you around the house, but you're really distracting me from my cooking. I don't want my food to burn! Go do something else for a while, okay?"`);
    }
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$serge_textbk>>
      scene.text(`${((s as any).serge_textbk ?? 0)}`);
    }
    scene.actions([
      { label: 'Continue', goto: ['Serge_kuh', ''] },
    ]);
  } },
    { label: 'Ask if there\'s anything you can do to help', goto: ['Serge_kuh', 'posuda'] },
  ]);
  scene.build();
}

function enterKuhBuh(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big112.jpg');
  // TODO-QSP: dynamic text: Sergey is sitting at the kitchen table, drinking vodka. "Hi, <<$pcs_nickname>>! ...
  scene.text(`Sergey is sitting at the kitchen table, drinking vodka. "Hi, ${((s as any).pcs_nickname ?? 0)}! Great day, isn't it?" he shouts cheerfully as he raises his glass to you.`);
  qspCall(s, 'Serge_Shulgin', 'rep');
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 50) {
    // TODO-QSP: act 'Ask if you can have some too': gt 'Serge_kuh', 'vodka'
  }
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
    { label: 'Chat with Sergey', handler: (st: GameState) => {
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
    }
    (s as any).sergebazarkuh_day = ((s as any).daystart ?? 0);
    (s as any).sergebazarkuh_count = ((s as any).sergebazarkuh_count ?? 0) - (1);
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A112', 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
    scene.text('Sergey pours himself another glass and licks his lips, getting ready to tell a story. You sit down next to him, wondering what he\'s going to want to talk about today.');
    (s as any).remp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).remp_rand ?? 0))) {
    }
    if (((s as any).remp_rand ?? 0) === 1) {
    }
    if (((s as any).remp_rand ?? 0) === 2) {
    }
    if (((s as any).remp_rand ?? 0) === 3) {
    }
    if (((s as any).remp_rand ?? 0) === 4) {
    }
    if (((s as any).remp_rand ?? 0) === 5) {
    }
    if (((s as any).sergebazarkuh_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Sergey looks at you a bit wearily and says: "Look, <<$pcs_nickname>>… you're a n...
      scene.text(`Sergey looks at you a bit wearily and says: "Look, ${((s as any).pcs_nickname ?? 0)}… you're a nice girl, but sometimes a man just wants to enjoy his drink in peace. Leave me alone, will you?"`);
    }
    if (((s as any).sergebazarkuh_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$serge_textbuhk>>
      scene.text(`${((s as any).serge_textbuhk ?? 0)}`);
    }
    scene.actions([
      { label: 'Continue', goto: ['Serge_kuh', 'kuh_buh'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVodka(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko2.jpg');
  // TODO-QSP: dynamic text: He looks at you intently and says: "No, <<$pcs_nickname>>. I'm not giving you an...
  scene.text(`He looks at you intently and says: "No, ${((s as any).pcs_nickname ?? 0)}. I'm not giving you any vodka."`);
  scene.text('"Aww, why not?" you ask him.');
  scene.text('Sergey takes a sip of his vodka and laughs: "I\'ve seen women drink… it never ends well. Besides that, you\'re still a girl! I\'m not giving you any, end of discussion!"');
  qspCall(s, 'willpower', 'drink', 'force');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Convince him to give you some [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Convince him to give you some', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'drink', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko1.jpg');
    scene.text('"But uncle Sergey, that\'s not fair!" you shout angrily, trying to flirt with him by making a cute pouty face.');
    // TODO-QSP: dynamic text: Sergey realizes it, and smirks: "Why are you pouting like that, <<$pcs_nickname>...
    scene.text(`Sergey realizes it, and smirks: "Why are you pouting like that, ${((s as any).pcs_nickname ?? 0)}? You cannot manipulate me!"`);
    scene.text('He then sighs, and compromises: "Look… if you want, I can give you some beer, but that\'s all you\'re getting! I don\'t want your parents to be upset with me for getting you drunk!"');
    scene.actions([
      { label: 'Accept the beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).beer_count ?? 0) > 0) {
      qspCall(s, 'drugs', 'alcohol', 'beer');
    }
    (s as any).beer_day = ((s as any).daystart ?? 0);
    if (((s as any).beer_count ?? 0) > 0) {
      (s as any).beer_count = ((s as any).beer_count ?? 0) - (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko2.jpg');
    scene.text('You immediately turn your pout into a smile, and nod happily: "Thanks, uncle Sergey! You\'re the best!"');
    if (((s as any).beer_count ?? 0) > 0) {
      scene.text('Sergey sighs again and walks over to the refrigerator, taking a bottle of beer and handing it to you.');
      scene.text('You quickly take it from him before he can change his mind, and take a swig. His face breaks into a smile, he was trying to be firm with you but can\'t help but laugh.');
      scene.text('"There, happy now? Are you done pouting?" he grins.');
      scene.text('"Very happy", you purr, looking deep into his eyes with a wide grin on your face.');
      scene.text('"Good. Now… how about you make me happy?" Sergey says, nodding to his groin. You can\'t help but blush when you notice he\'s got quite the bulge down there!');
    } else {
      scene.text('Sergey sighs again and walks over to the refrigerator, to grab a bottle for you.');
      // TODO-QSP: dynamic text: "Huh… that's weird. <<$pcs_nickname>>, did you already drink my beer? I know I p...
      scene.text(`"Huh… that's weird. ${((s as any).pcs_nickname ?? 0)}, did you already drink my beer? I know I put two bottles in, not too long ago!"`);
      scene.text('You bite your nip nervously, and cast down your eyes.');
      scene.text('"I see", Sergey frowns. "What am I to do now? Vodka is no good without a nice cold beer to wash it down with!"');
      scene.text('"I\'m sorry, uncle Sergey", you mutter, your cheeks a deep red from the shame.');
      // TODO-QSP: dynamic text: "You leave me no choice, <<$pcs_nickname>>… I think I'm going to have to punish ...
      scene.text(`"You leave me no choice, ${((s as any).pcs_nickname ?? 0)}… I think I'm going to have to punish you!" Sergey says sternly, with a horny look in his eyes.`);
    }
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Quickly get away from him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Quickly get away from him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'vasilykitchen'] },
      ]);
    }
    scene.actions([
      { label: 'Thank him for the beer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko3.jpg');
    scene.text('Sergey nods to the floor in front of him and orders you: "Go on, girl. Get on your knees, don\'t be shy! I want you to put that sweet little mouth of yours to use."');
    scene.text('You obediently kneel down where he tells you to, and you put your hand on his groin. You rub it gently through the fabric; it\'s a big bulge already! He must have been horny already, even before you entered the kitchen…');
    scene.text('Sergey finishes unbuttoning his pants and pulls them down, grinning proudly when he sees that admiring look in your eyes. His dick is impressive!');
    // TODO-QSP: dynamic text: He takes your hand and puts it on his penis, whispering: "Go on, <<$pcs_nickname...
    scene.text(`He takes your hand and puts it on his penis, whispering: "Go on, ${((s as any).pcs_nickname ?? 0)}. Rub it… suck on it… make me feel good."`);
    scene.text('You nod and squeeze it lightly, beginning by masturbating him slowly. His cock grows a bit further while you stroke it, and you feel it pulsing strongly between your fingers when it\'s fully erect. He\'s definitely ready for more now.');
    (s as any).npc_had_sex['A112'] = 1;
    qspCall(s, 'boyStat', 'A112');
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck on his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko4.jpg');
    scene.text('You move forward and close your lips around the head of his cock a bit hesitantly. "Hmm, this doesn\'t taste bad at all", you think to yourself, and you begin to suck on the head of his dick a bit more enthusiastically. When you glance up, you look Sergey straight in the eye. He\'s smiling at you benevolently, enjoying the look of you happily sucking him off like a good girl.');
    // TODO-QSP: dynamic text: After a minute or two, he takes his dick out of your mouth and slaps it against ...
    scene.text(`After a minute or two, he takes his dick out of your mouth and slaps it against your cheeks playfully. Then he lifts it up and grins: "Suck on my balls, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('When you move in to do as he asks, his musky masculine smell fills your nostrils. You take one of his balls in your mouth and suck and lick on it, and then the other. You also try to take both in your mouth at once, but they\'re too big.');
    scene.text('"You\'re such a good girl", Sergey grins. "Licking and sucking my balls like that, doing everything I tell you to. We\'re going to have a lot of fun together, you and I!"');
    scene.text('He sits back while you take his dick back in your mouth and has another gulp, straight from the bottle. You can tell he\'s close to finishing; his breathing is shorter and faster, and you feel his dick pulsing strongly between your lips. Then he suddenly pulls away from you.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko5.jpg');
    // TODO-QSP: dynamic text: "My turn. <<$pcs_nickname>>, get on the table, I'll return the favor now", Serge...
    scene.text(`"My turn. ${((s as any).pcs_nickname ?? 0)}, get on the table, I'll return the favor now", Sergey grins.`);
    scene.text('You\'re not really sure what he means by that, but you\'re not about to say no! You obediently sit down on the corner of the table, and pull up your legs. "Like this, uncle Sergey?" you ask him.');
    scene.text('Sergey gives you a pleased nod: "Excellent. Now, let me help you with these…"');
    // TODO-QSP: dynamic text: He begins to tug at your clothes, wanting easy access to your wet slit. "There w...
    scene.text(`He begins to tug at your clothes, wanting easy access to your wet slit. "There we go… show me that young pussy and those cute tits of yours, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You do as he asks and spread your legs, while you pull your clothes aside to show your boobs.');
    scene.text('You lean back on the table and let him admire your tight body. Your nipples are fully erect from your arousal by now, and your pussy glistens from how wet it is.');
    scene.text('Sergey is kneeling down in front of you now, so your pussy is at eye level for him. He\'s clearly enjoying the view of your wet folds, studying them intently. You slowly spread your legs even further and your pussy opens for him.');
    scene.text('"Do you like it, uncle Sergey?" you ask him, wondering why he\'s only looking at it.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'flash', (-10), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'large');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko6.jpg');
    scene.text('Sergey doesn\'t say anything, but suddenly leans forward and gently runs his tongue over the insides of your pussy lips, touching your clitoris too on his way up.');
    scene.text('You shudder when you feel his touch, and can\'t help but thrust your hips forward. Sergey eagerly accepts your invitation and plunges his tongue inside you as far as he can, resting his nose against your crotch as he begins to fuck your pussy with his tongue.');
    scene.text('You moan softly and grind your hips against his face, encouraging him to keep going.');
    scene.text('Sergey takes his time, he seems to really enjoy pleasing you with his mouth. He pays more and more attention to your clitoris, licking, sucking and sometimes even nibbling on it gently.');
    scene.text('"No hands… just your tongue please…" you moan, when he wants to slide two fingers inside you. He grins and pulls back his hand, and instead redoubles his efforts with his tongue.');
    scene.text('Within minutes he licks you to an orgasm and you groan and grab his hair, forcing his face against your groin as you feel a warm tingling sensation spread through your whole body. When it finally subsides, you feel goosebumps all over your skin.');
    scene.text('Sergey gives your cunny one more kiss and gets up, and you can\'t help but laugh when you see him trying to rub some feeling back into his legs. He pours himself another glass of vodka, while he winks at you. Wow… that was great!');
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko7.jpg');
    scene.text('You\'re still catching your breath when Sergey prompts: "Now, will you fulfil all my wishes?" You couldn\'t help but notice the emphasis he put on the word \'all\'.');
    scene.text('You nod, still a bit hazy in the head from your orgasm: "Yes, I\'ll do whatever you want…"');
    // TODO-QSP: dynamic text: He grins, happy with your answer. "Your boobs are so nice, <<$pcs_nickname>>…" h...
    scene.text(`He grins, happy with your answer. "Your boobs are so nice, ${((s as any).pcs_nickname ?? 0)}…" he mutters, as he comes closer to you and begins to knead them. He fondles your nipples, tweaking them between his fingers. Meanwhile, you feel his hard cock resting on your stomach. It had gone a bit softer from when he was licking you, but it's growing fully hard again.`);
    scene.text('You sigh happily and roll your hips back a bit, giving him full access to your pussy. Delighted with your willingness, Sergey teases you by squeezing your nipples harder, trying to make you moan louder.');
    qspCall(s, 'gopsex', 'gg_devst_deflor');
    scene.text('You\'re still so wet from when he licked you, his cock plunges inside you without much resistance. He gently fucks you like this for a little while, and then whispers that you should roll onto your stomach.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Turn over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko8.jpg');
    scene.text('Sergey\'s eyes are gleaming; it\'s been a while since he had a cute, flexible girl such as yourself at his disposal. And now, here you are… willing to do whatever he wants.');
    scene.text('You stand on the floor with your legs, leaning forward on the table. Sergey takes a moment to admire your nicely toned calves and thighs, gently running his hands over them. For a second he\'s not sure what he wants to do with you, with you standing in this inviting position.');
    scene.text('Then he rubs the head of his cock against your wet cunt a few times, still glistening from before. Then he rams his cock all the way in with one firm push, and begins to thrust eagerly. You cry out when he pushes in, and the kitchen is soon filled with sounds of your moaning and his grunting, combined with the lewd sopping sound of your pussy getting filled over and over.');
    scene.text('You reach for your clit and fondle yourself while Sergey fucks you from behind, occasionally running your fingers over his balls too.');
    // TODO-QSP: dynamic text: He then begins to fuck you so hard that you have to hold onto the table, making ...
    scene.text(`He then begins to fuck you so hard that you have to hold onto the table, making the table creak and groan while it moves over the kitchen floor. It feels fantastic, and you eagerly raise your hips up to meet his thrusts half-way. Sergey's moans grow louder and he grunts in your ear: "Where do you want me to finish, ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 5);
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1, '', '', 35);
    (s as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko9.jpg');
    scene.text('"In my mouth, uncle Sergey!" you tell him.');
    scene.text('Sergey nods: "Alright, get on your knees then."');
    // TODO-QSP: dynamic text: You quickly drop to your knees in front of him and begin to jerk him off, aiming...
    scene.text(`You quickly drop to your knees in front of him and begin to jerk him off, aiming his cock at your mouth. "Make sure you don't miss a drop, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('He groans while you milk his dick, eagerly trying to get him to cum. Soon he groans loudly, and you feel the hot jets of his cum land on your face. You open your mouth to try and catch as much of it as you can, but you miss most of it. Some of his cum drips down to your clothes, while you look him in the eye with the head of his dick between your lips.');
    // TODO-QSP: dynamic text: Sergey laughs: "Close enough! You're such a good little slut, <<$pcs_nickname>>!...
    scene.text(`Sergey laughs: "Close enough! You're such a good little slut, ${((s as any).pcs_nickname ?? 0)}!"`);
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Chat with Sergey afterwards', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'cum_call', 'clothes', ((s as any).boy ?? 0), 1, '', '', 15);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko10.jpg');
    scene.text('Sergey sighs and sits down on a chair, still catching his breath. You notice you\'re feeling a bit weak in your knees as well, and sit down on another chair next to him.');
    scene.text('You wearily look at the small puddle of sperm on your clothes and sigh: "Wow, I don\'t think I\'ve ever had a load that big before!"');
    scene.text('Sergey grins: "I\'ve been saving it for you. I knew you\'d come, sooner or later… I recognized that look in your eyes."');
    scene.text('You blush and bite your lip, tasting Sergey\'s sperm on it while Sergey has another sip of his vodka. He laughs: "Next time, you don\'t have to ask for booze. You can just ask for what you want right away. Because admit it… isn\'t sex better than booze?"');
    scene.text('You don\'t answer his question, but just give him a weak smile.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Straighten your clothes', goto: ['vasilyhome', 'vasilykitchen'] },
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
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
  ]);
  scene.build();
}

function enterPosuda(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
  if (((s as any).sergehelppos_count ?? 0) > 0  ||  ((s as any).sergehelppol_count ?? 0) > 0) {
    // TODO-QSP: dynamic text: Sergey smiles: "Actually, that would be nice! <<$pcs_nickname>>, if it's not too...
    scene.text(`Sergey smiles: "Actually, that would be nice! ${((s as any).pcs_nickname ?? 0)}, if it's not too much trouble, could you do the dishes or mop the floor?"`);
  }
  if (((s as any).sergehelppos_count ?? 0) <= 0  &&  ((s as any).sergehelppol_count ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Sergey shakes his head with a smile on his face: "No need, <<$pcs_nickname>>! Yo...
    scene.text(`Sergey shakes his head with a smile on his face: "No need, ${((s as any).pcs_nickname ?? 0)}! You've already helped me out a great deal today, thank you!"`);
  }
  if (((s as any).sergehelppos_count ?? 0) > 0) {
    scene.actions([
      { label: 'Do the dishes for Sergey', handler: (st: GameState) => {
    if (((s as any).sergehelppos_count ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
    }
    (s as any).sergehelppos_day = ((s as any).daystart ?? 0);
    (s as any).sergehelppos_count = ((s as any).sergehelppos_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/posuda\' + rand(1, 5) + \'.jpg');
    scene.text('You wash the mountain of dishes that piled up since yesterday. It takes you roughly fifteen minutes to get through.');
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 25) {
      qspCall(s, 'Serge_kuh', 'help_ev1');
    }
    scene.actions([
      { label: 'Finish', goto: ['Serge_kuh', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).sergehelppol_count ?? 0) > 0) {
    scene.actions([
      { label: 'Mop the floors for Sergey', handler: (st: GameState) => {
    if (((s as any).sergehelppol_count ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (15);
    }
    (s as any).sergehelppol_day = ((s as any).daystart ?? 0);
    (s as any).sergehelppol_count = ((s as any).sergehelppol_count ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/pol\' + rand(1, 4) + \'.jpg');
    scene.text('You spend the next fifteen minutes on your hands and knees, washing the floors of the apartment.');
    scene.text('Sergey can\'t help but stare at your ass from time to time, when he thinks you\'re not looking.');
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 25) {
      qspCall(s, 'Serge_kuh', 'help_ev1');
    }
    scene.actions([
      { label: 'Finish', goto: ['Serge_kuh', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Finish', goto: ['Serge_kuh', ''] },
  ]);
  scene.build();
}

function enterHelpEv1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([{ label: 'Continue', goto: ['Serge_kuh', 'izn1'] }]);
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Flirt with Sergey', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/jara\' + rand(1, 4) + \'.jpg');
    scene.text('One quick glimpse at Sergey tells you that you\'re not the only one who\'s a bit worked up from your activities in the kitchen. Sergey looks a bit tired, but at the same time he can\'t stop staring at your ass. When you\'re finished and take a breather, you decide to tease him a little. As soon as you do, you can hear his breathing intensify a little. You keep doing what you\'re doing though, pretending it\'s by accident that you\'re showing off as much as you are.');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave him alone [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave him alone', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'vasilykitchen'] },
      ]);
    }
    scene.actions([
      { label: 'Show him your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/vert\' + rand(1, 9) + \'.jpg');
    scene.text('That was fun, but you can do better! When you bend over exaggeratedly and show him your ass, you can\'t help but giggle. Oops!');
    scene.text('Sergey sighs, realizing your game now… and feeling a bit busted at the same time.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, stop tormenting me!" he tells you. "I'm not a robot, I'm a m...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, stop tormenting me!" he tells you. "I'm not a robot, I'm a man with needs and desires! If you keep that up, you have no one but yourself to blame for what happens next…"`);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A112'] < 50  ||  ((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Stop teasing Sergey', goto: ['vasilyhome', 'vasilykitchen'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop teasing Sergey [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop teasing Sergey', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'vasilykitchen'] },
        ]);
      }
      scene.actions([
        { label: 'Continue teasing Sergey', handler: (st: GameState) => {
    // TODO-QSP: gt 'Serge_kuh', $rand_kuh_izdev
  } },
      ]);
    }
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
    case 'kuh_buh':
      enterKuhBuh(s, scene);
      break;
    case 'vodka':
      enterVodka(s, scene);
      break;
    case 'posuda':
      enterPosuda(s, scene);
      break;
    case 'help_ev1':
      enterHelpEv1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Serge_kuh: LocationDef = {
  name: 'Serge_kuh',
  title: 'Sergey is standing at the kitchen counter. He\'s making soup,',
  region: 'other',
  locclass: 'kitr',
  description: ['Sergey is standing at the kitchen counter. He\'s making soup, cutting up ingredients and throwing them into a large pan.'],
  enter: enter,
};
