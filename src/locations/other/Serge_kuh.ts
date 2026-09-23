import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

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
  (s as any).locclass = 'kitr';
  qspCall(s, 'boyStat', 'A112');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big112.jpg');
  scene.text('Sergey is standing at the kitchen counter. He\'s making soup, cutting up ingredients and throwing them into a large pan.');
  qspCall(s, 'Serge_Shulgin', 'rep');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
    { label: 'Chat with Sergey', handler: (st: GameState) => {
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + (15);
    }
    (st as any).sergebazarkuh_day = ((st as any).daystart ?? 0);
    (st as any).sergebazarkuh_count = ((st as any).sergebazarkuh_count ?? 0) - (1);
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A112', 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
    scene.text('Sergey is standing at the kitchen counter. He\'s making soup, cutting up ingredients and throwing them into a large pan.');
    scene.text('You don\'t want to get in his way and sit down on a chair near the kitchen table, so you can have a chat with him while he keeps preparing the food.');
    (st as any).serge_textbk_rand = (Math.floor(Math.random() * 5) + 0);
    if ((!((st as any).serge_textbk_rand ?? 0))) {
      (st as any).serge_textbk = 'When you ask about Vasily\'s mother, Sergey shrugs: "It\'s a short story, really. I met Vasily\'s mother at my graduation party. We all got drunk and she and I had some fun. When she turned out to be pregnant, we got married. We didn\'t have much of a say in the matter, that\'s just how it worked back then. Shulga was born a few months after that. We tried to make it work, but she got bored and left me a year later when she got offered a job abroad, leaving Shulga with me. I haven\'t heard from her since. It\'s fine, though… me and him managed just fine, without her."';
    }
    if (((st as any).serge_textbk_rand ?? 0) === 1) {
      (st as any).serge_textbk = 'You spend fifteen minutes talking to Sergey about everyday things.';
    }
    if (((st as any).serge_textbk_rand ?? 0) === 2) {
      (st as any).serge_textbk = 'When you ask Sergey what he does for a living, he smiles and says: "I work in a factory where we produce bricks. I work the day shift, from ' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 15, 0) + ', five days a week. I\'m a foreman there, managing the labourers and keeping an eye on the machinery. Of course I pitch in as well, when the men need help. It\'s dusty, hard work, and it doesn\'t pay well, but it\'s work worth doing!"';
    }
    if (((st as any).serge_textbk_rand ?? 0) === 3) {
      (st as any).serge_textbk = 'When you ask about his relationship with his son, Sergey shrugs and says in a tired voice: "Eh. We do okay, given the circumstances. He\'s… changed, though. He\'s rather difficult to handle nowadays. For the last year or so, he has shown no interest in school and he stays out until late every day, doing God knows what. I\'m just not sure how to get through to him any more."';
    }
    if (((st as any).serge_textbk_rand ?? 0) === 4) {
      (st as any).serge_textbk = 'Sergey is actually a pretty smart guy, and you listen to him for fifteen minutes while he tells you stories about his past.';
    }
    if (((st as any).sergebazarkuh_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Sergey says: "Listen, <<$pcs_nickname>>… I don''t mind having you around the hou...
      scene.text(`Sergey says: "Listen, ${((st as any).pcs_nickname ?? '')}… I don't mind having you around the house, but you're really distracting me from my cooking. I don't want my food to burn! Go do something else for a while, okay?"`);
    }
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$serge_textbk>>
      scene.text(`${((st as any).serge_textbk ?? '')}`);
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
  scene.text(`Sergey is sitting at the kitchen table, drinking vodka. "Hi, ${((s as any).pcs_nickname ?? '')}! Great day, isn't it?" he shouts cheerfully as he raises his glass to you.`);
  qspCall(s, 'Serge_Shulgin', 'rep');
  if (((s as any).npc_rel ?? 0)?.['A112'] >= 50) {
    scene.actions([
      { label: 'Ask if you can have some too', goto: ['Serge_kuh', 'vodka'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
    { label: 'Chat with Sergey', handler: (st: GameState) => {
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + (15);
    }
    (st as any).sergebazarkuh_day = ((st as any).daystart ?? 0);
    (st as any).sergebazarkuh_count = ((st as any).sergebazarkuh_count ?? 0) - (1);
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A112', 1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
    scene.text('Sergey pours himself another glass and licks his lips, getting ready to tell a story. You sit down next to him, wondering what he\'s going to want to talk about today.');
    (st as any).remp_rand = (Math.floor(Math.random() * 6) + 0);
    if ((!((st as any).remp_rand ?? 0))) {
      (st as any).serge_textbuhk = 'You and Sergey listen to a radio while you chat, and mostly talk about events from the local news.';
    }
    if (((st as any).remp_rand ?? 0) === 1) {
      (st as any).serge_textbuhk = 'Sergey seems a bit tipsy, and talks for fifteen minutes about why potato soup is better than turnip soup.';
    }
    if (((st as any).remp_rand ?? 0) === 2) {
      (st as any).serge_textbuhk = 'Sergey makes you laugh, when he tells you another funny story.';
    }
    if (((st as any).remp_rand ?? 0) === 3) {
      (st as any).serge_textbuhk = 'You try to talk to Sergey about clothing, but you can tell he\'s not all that interested in the subject. The only thing he can contribute is that there is a tailor at the garment factory, who adjusted some ill-fitting jeans for him a while ago.';
    }
    if (((st as any).remp_rand ?? 0) === 4) {
      (st as any).serge_textbuhk = 'You spend fifteen minutes talking to Sergey about everyday things.';
    }
    if (((st as any).remp_rand ?? 0) === 5) {
      (st as any).serge_textbuhk = 'Sergey laughs: "If I was forced to choose between Parkinson\'s and Alzheimer\'s, I\'d definitely choose Parkinson\'s. It\'s better to sometimes spill some vodka on your pants, than to forget where you stored the bottle!"';
    }
    if (((st as any).sergebazarkuh_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: Sergey looks at you a bit wearily and says: "Look, <<$pcs_nickname>>… you''re a ...
      scene.text(`Sergey looks at you a bit wearily and says: "Look, ${((st as any).pcs_nickname ?? '')}… you're a nice girl, but sometimes a man just wants to enjoy his drink in peace. Leave me alone, will you?"`);
    }
    if (((st as any).sergebazarkuh_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$serge_textbuhk>>
      scene.text(`${((st as any).serge_textbuhk ?? '')}`);
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
  // TODO-QSP: dynamic text: He looks at you intently and says: "No, <<$pcs_nickname>>. I''m not giving you a...
  scene.text(`He looks at you intently and says: "No, ${((s as any).pcs_nickname ?? '')}. I'm not giving you any vodka."`);
  scene.text('"Aww, why not?" you ask him.');
  scene.text('Sergey takes a sip of his vodka and laughs: "I\'ve seen women drink… it never ends well. Besides that, you\'re still a girl! I\'m not giving you any, end of discussion!"');
  qspCall(s, 'willpower', 'drink', 'force');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Convince him to give you some', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Convince him to give you some', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'drink', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko1.jpg');
    scene.text('"But uncle Sergey, that\'s not fair!" you shout angrily, trying to flirt with him by making a cute pouty face.');
    // TODO-QSP: dynamic text: Sergey realizes it, and smirks: "Why are you pouting like that, <<$pcs_nickname>...
    scene.text(`Sergey realizes it, and smirks: "Why are you pouting like that, ${((st as any).pcs_nickname ?? '')}? You cannot manipulate me!"`);
    scene.text('He then sighs, and compromises: "Look… if you want, I can give you some beer, but that\'s all you\'re getting! I don\'t want your parents to be upset with me for getting you drunk!"');
    scene.actions([
      { label: 'Accept the beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if (((st as any).beer_count ?? 0) > 0) {
      qspCall(st, 'drugs', 'alcohol', 'beer');
    }
    (st as any).beer_day = ((st as any).daystart ?? 0);
    if (((st as any).beer_count ?? 0) > 0) {
      (st as any).beer_count = ((st as any).beer_count ?? 0) - (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko2.jpg');
    scene.text('You immediately turn your pout into a smile, and nod happily: "Thanks, uncle Sergey! You\'re the best!"');
    if (((st as any).beer_count ?? 0) > 0) {
      scene.text('Sergey sighs again and walks over to the refrigerator, taking a bottle of beer and handing it to you.');
      scene.text('You quickly take it from him before he can change his mind, and take a swig. His face breaks into a smile, he was trying to be firm with you but can\'t help but laugh.');
      scene.text('"There, happy now? Are you done pouting?" he grins.');
      scene.text('"Very happy", you purr, looking deep into his eyes with a wide grin on your face.');
      scene.text('"Good. Now… how about you make me happy?" Sergey says, nodding to his groin. You can\'t help but blush when you notice he\'s got quite the bulge down there!');
    } else {
      if (((st as any).beer_count ?? 0) <= 0) {
        scene.text('Sergey sighs again and walks over to the refrigerator, to grab a bottle for you.');
        // TODO-QSP: dynamic text: "Huh… that''s weird. <<$pcs_nickname>>, did you already drink my beer? I know I ...
        scene.text(`"Huh… that's weird. ${((st as any).pcs_nickname ?? '')}, did you already drink my beer? I know I put two bottles in, not too long ago!"`);
        scene.text('You bite your nip nervously, and cast down your eyes.');
        scene.text('"I see", Sergey frowns. "What am I to do now? Vodka is no good without a nice cold beer to wash it down with!"');
        scene.text('"I\'m sorry, uncle Sergey", you mutter, your cheeks a deep red from the shame.');
        // TODO-QSP: dynamic text: "You leave me no choice, <<$pcs_nickname>>… I think I''m going to have to punish...
        scene.text(`"You leave me no choice, ${((st as any).pcs_nickname ?? '')}… I think I'm going to have to punish you!" Sergey says sternly, with a horny look in his eyes.`);
      }
    }
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Quickly get away from him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Quickly get away from him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'vasilykitchen');
  } },
      ]);
    }
    scene.actions([
      { label: 'Thank him for the beer', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko3.jpg');
    scene.text('Sergey nods to the floor in front of him and orders you: "Go on, girl. Get on your knees, don\'t be shy! I want you to put that sweet little mouth of yours to use."');
    scene.text('You obediently kneel down where he tells you to, and you put your hand on his groin. You rub it gently through the fabric; it\'s a big bulge already! He must have been horny already, even before you entered the kitchen…');
    scene.text('Sergey finishes unbuttoning his pants and pulls them down, grinning proudly when he sees that admiring look in your eyes. His dick is impressive!');
    // TODO-QSP: dynamic text: He takes your hand and puts it on his penis, whispering: "Go on, <<$pcs_nickname...
    scene.text(`He takes your hand and puts it on his penis, whispering: "Go on, ${((st as any).pcs_nickname ?? '')}. Rub it… suck on it… make me feel good."`);
    scene.text('You nod and squeeze it lightly, beginning by masturbating him slowly. His cock grows a bit further while you stroke it, and you feel it pulsing strongly between your fingers when it\'s fully erect. He\'s definitely ready for more now.');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A112'] = 1;
    qspCall(st, 'boyStat', 'A112');
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck on his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko4.jpg');
    scene.text('You move forward and close your lips around the head of his cock a bit hesitantly. "Hmm, this doesn\'t taste bad at all", you think to yourself, and you begin to suck on the head of his dick a bit more enthusiastically. When you glance up, you look Sergey straight in the eye. He\'s smiling at you benevolently, enjoying the look of you happily sucking him off like a good girl.');
    // TODO-QSP: dynamic text: After a minute or two, he takes his dick out of your mouth and slaps it against ...
    scene.text(`After a minute or two, he takes his dick out of your mouth and slaps it against your cheeks playfully. Then he lifts it up and grins: "Suck on my balls, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('When you move in to do as he asks, his musky masculine smell fills your nostrils. You take one of his balls in your mouth and suck and lick on it, and then the other. You also try to take both in your mouth at once, but they\'re too big.');
    scene.text('"You\'re such a good girl", Sergey grins. "Licking and sucking my balls like that, doing everything I tell you to. We\'re going to have a lot of fun together, you and I!"');
    scene.text('He sits back while you take his dick back in your mouth and has another gulp, straight from the bottle. You can tell he\'s close to finishing; his breathing is shorter and faster, and you feel his dick pulsing strongly between your lips. Then he suddenly pulls away from you.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko5.jpg');
    // TODO-QSP: dynamic text: "My turn. <<$pcs_nickname>>, get on the table, I''ll return the favor now", Serg...
    scene.text(`"My turn. ${((st as any).pcs_nickname ?? '')}, get on the table, I'll return the favor now", Sergey grins.`);
    scene.text('You\'re not really sure what he means by that, but you\'re not about to say no! You obediently sit down on the corner of the table, and pull up your legs. "Like this, uncle Sergey?" you ask him.');
    scene.text('Sergey gives you a pleased nod: "Excellent. Now, let me help you with these…"');
    // TODO-QSP: dynamic text: He begins to tug at your clothes, wanting easy access to your wet slit. "There w...
    scene.text(`He begins to tug at your clothes, wanting easy access to your wet slit. "There we go… show me that young pussy and those cute tits of yours, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You do as he asks and spread your legs, while you pull your clothes aside to show your boobs.');
    scene.text('You lean back on the table and let him admire your tight body. Your nipples are fully erect from your arousal by now, and your pussy glistens from how wet it is.');
    scene.text('Sergey is kneeling down in front of you now, so your pussy is at eye level for him. He\'s clearly enjoying the view of your wet folds, studying them intently. You slowly spread your legs even further and your pussy opens for him.');
    scene.text('"Do you like it, uncle Sergey?" you ask him, wondering why he\'s only looking at it.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'large');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko6.jpg');
    scene.text('Sergey doesn\'t say anything, but suddenly leans forward and gently runs his tongue over the insides of your pussy lips, touching your clitoris too on his way up.');
    scene.text('You shudder when you feel his touch, and can\'t help but thrust your hips forward. Sergey eagerly accepts your invitation and plunges his tongue inside you as far as he can, resting his nose against your crotch as he begins to fuck your pussy with his tongue.');
    scene.text('You moan softly and grind your hips against his face, encouraging him to keep going.');
    scene.text('Sergey takes his time, he seems to really enjoy pleasing you with his mouth. He pays more and more attention to your clitoris, licking, sucking and sometimes even nibbling on it gently.');
    scene.text('"No hands… just your tongue please…" you moan, when he wants to slide two fingers inside you. He grins and pulls back his hand, and instead redoubles his efforts with his tongue.');
    scene.text('Within minutes he licks you to an orgasm and you groan and grab his hair, forcing his face against your groin as you feel a warm tingling sensation spread through your whole body. When it finally subsides, you feel goosebumps all over your skin.');
    scene.text('Sergey gives your cunny one more kiss and gets up, and you can\'t help but laugh when you see him trying to rub some feeling back into his legs. He pours himself another glass of vodka, while he winks at you. Wow… that was great!');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko7.jpg');
    scene.text('You\'re still catching your breath when Sergey prompts: "Now, will you fulfil all my wishes?" You couldn\'t help but notice the emphasis he put on the word \'all\'.');
    scene.text('You nod, still a bit hazy in the head from your orgasm: "Yes, I\'ll do whatever you want…"');
    // TODO-QSP: dynamic text: He grins, happy with your answer. "Your boobs are so nice, <<$pcs_nickname>>…" h...
    scene.text(`He grins, happy with your answer. "Your boobs are so nice, ${((st as any).pcs_nickname ?? '')}…" he mutters, as he comes closer to you and begins to knead them. He fondles your nipples, tweaking them between his fingers. Meanwhile, you feel his hard cock resting on your stomach. It had gone a bit softer from when he was licking you, but it's growing fully hard again.`);
    scene.text('You sigh happily and roll your hips back a bit, giving him full access to your pussy. Delighted with your willingness, Sergey teases you by squeezing your nipples harder, trying to make you moan louder.');
    qspCall(st, 'gopsex', 'gg_devst_deflor');
    scene.text('You\'re still so wet from when he licked you, his cock plunges inside you without much resistance. He gently fucks you like this for a little while, and then whispers that you should roll onto your stomach.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko8.jpg');
    scene.text('Sergey\'s eyes are gleaming; it\'s been a while since he had a cute, flexible girl such as yourself at his disposal. And now, here you are… willing to do whatever he wants.');
    scene.text('You stand on the floor with your legs, leaning forward on the table. Sergey takes a moment to admire your nicely toned calves and thighs, gently running his hands over them. For a second he\'s not sure what he wants to do with you, with you standing in this inviting position.');
    scene.text('Then he rubs the head of his cock against your wet cunt a few times, still glistening from before. Then he rams his cock all the way in with one firm push, and begins to thrust eagerly. You cry out when he pushes in, and the kitchen is soon filled with sounds of your moaning and his grunting, combined with the lewd sopping sound of your pussy getting filled over and over.');
    scene.text('You reach for your clit and fondle yourself while Sergey fucks you from behind, occasionally running your fingers over his balls too.');
    // TODO-QSP: dynamic text: He then begins to fuck you so hard that you have to hold onto the table, making ...
    scene.text(`He then begins to fuck you so hard that you have to hold onto the table, making the table creak and groan while it moves over the kitchen floor. It feels fantastic, and you eagerly raise your hips up to meet his thrusts half-way. Sergey's moans grow louder and he grunts in your ear: "Where do you want me to finish, ${((st as any).pcs_nickname ?? '')}?"`);
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'In your mouth', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1, '', '', 5);
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1, '', '', 35);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko9.jpg');
    scene.text('"In my mouth, uncle Sergey!" you tell him.');
    scene.text('Sergey nods: "Alright, get on your knees then."');
    // TODO-QSP: dynamic text: You quickly drop to your knees in front of him and begin to jerk him off, aiming...
    scene.text(`You quickly drop to your knees in front of him and begin to jerk him off, aiming his cock at your mouth. "Make sure you don't miss a drop, ${((st as any).pcs_nickname ?? '')}!"`);
    scene.text('He groans while you milk his dick, eagerly trying to get him to cum. Soon he groans loudly, and you feel the hot jets of his cum land on your face. You open your mouth to try and catch as much of it as you can, but you miss most of it. Some of his cum drips down to your clothes, while you look him in the eye with the head of his dick between your lips.');
    // TODO-QSP: dynamic text: Sergey laughs: "Close enough! You''re such a good little slut, <<$pcs_nickname>>...
    scene.text(`Sergey laughs: "Close enough! You're such a good little slut, ${((st as any).pcs_nickname ?? '')}!"`);
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Chat with Sergey afterwards', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'clothes', ((st as any).boy ?? 0), 1, '', '', 15);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/event/alko10.jpg');
    scene.text('Sergey sighs and sits down on a chair, still catching his breath. You notice you\'re feeling a bit weak in your knees as well, and sit down on another chair next to him.');
    scene.text('You wearily look at the small puddle of sperm on your clothes and sigh: "Wow, I don\'t think I\'ve ever had a load that big before!"');
    scene.text('Sergey grins: "I\'ve been saving it for you. I knew you\'d come, sooner or later… I recognized that look in your eyes."');
    scene.text('You blush and bite your lip, tasting Sergey\'s sperm on it while Sergey has another sip of his vodka. He laughs: "Next time, you don\'t have to ask for booze. You can just ask for what you want right away. Because admit it… isn\'t sex better than booze?"');
    scene.text('You don\'t answer his question, but just give him a weak smile.');
    qspCall(st, 'arousal', 'end');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', goto: ['vasilyhome', 'vasilykitchen'] },
  ]);
  scene.build();
}

function enterPosuda(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/serge/serge1.jpg');
  if (((s as any).sergehelppos_count ?? 0) > 0  ||  ((s as any).sergehelppol_count ?? 0) > 0) {
    // TODO-QSP: dynamic text: Sergey smiles: "Actually, that would be nice! <<$pcs_nickname>>, if it''s not to...
    scene.text(`Sergey smiles: "Actually, that would be nice! ${((s as any).pcs_nickname ?? '')}, if it's not too much trouble, could you do the dishes or mop the floor?"`);
  }
  if (((s as any).sergehelppos_count ?? 0) <= 0  &&  ((s as any).sergehelppol_count ?? 0) <= 0) {
    // TODO-QSP: dynamic text: Sergey shakes his head with a smile on his face: "No need, <<$pcs_nickname>>! Yo...
    scene.text(`Sergey shakes his head with a smile on his face: "No need, ${((s as any).pcs_nickname ?? '')}! You've already helped me out a great deal today, thank you!"`);
  }
  if (((s as any).sergehelppos_count ?? 0) > 0) {
    scene.actions([
      { label: 'Do the dishes for Sergey', handler: (st: GameState) => {
    if (((st as any).sergehelppos_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + (15);
    }
    (st as any).sergehelppos_day = ((st as any).daystart ?? 0);
    (st as any).sergehelppos_count = ((st as any).sergehelppos_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/posuda` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    scene.text('You wash the mountain of dishes that piled up since yesterday. It takes you roughly fifteen minutes to get through.');
    if (((st as any).npc_rel ?? 0)?.['A112'] >= 25) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHelpEv1(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    if (((st as any).sergehelppol_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + (15);
    }
    (st as any).sergehelppol_day = ((st as any).daystart ?? 0);
    (st as any).sergehelppol_count = ((st as any).sergehelppol_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/pol` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    scene.text('You spend the next fifteen minutes on your hands and knees, washing the floors of the apartment.');
    scene.text('Sergey can\'t help but stare at your ass from time to time, when he thinks you\'re not looking.');
    if (((st as any).npc_rel ?? 0)?.['A112'] >= 25) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHelpEv1(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    scene.actions([
      { label: 'Finish', goto: ['Serge_kuh', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['Serge_kuh', ''] },
  ]);
  scene.build();
}

function enterHelpEv1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspGoto(s, 'Serge_kuh', 'izn1');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      (s as any).rand_kuh_izdev = 'izdev' + (Math.floor(Math.random() * 3) + 1) + '';
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        (s as any).rand_kuh_izdev = 'izdev' + (Math.floor(Math.random() * 4) + 4) + '';
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          (s as any).rand_kuh_izdev = 'izdev' + (Math.floor(Math.random() * 5) + 8) + '';
        } else {
          (s as any).rand_kuh_izdev = 'izdev' + (Math.floor(Math.random() * 5) + 13) + '';
        }
      }
    }
  }
  (s as any).rand_kuh_sex = 'sex' + (Math.floor(Math.random() * 3) + 1) + '';
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Flirt with Sergey', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/jara` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
    scene.text('One quick glimpse at Sergey tells you that you\'re not the only one who\'s a bit worked up from your activities in the kitchen. Sergey looks a bit tired, but at the same time he can\'t stop staring at your ass. When you\'re finished and take a breather, you decide to tease him a little. As soon as you do, you can hear his breathing intensify a little. You keep doing what you\'re doing though, pretending it\'s by accident that you\'re showing off as much as you are.');
    qspCall(st, 'willpower', 'exhib', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave him alone', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave him alone', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'vasilykitchen');
  } },
      ]);
    }
    scene.actions([
      { label: 'Show him your ass', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/vert` + (Math.floor(Math.random() * 9) + 1) + '.jpg"></center>');
    scene.text('That was fun, but you can do better! When you bend over exaggeratedly and show him your ass, you can\'t help but giggle. Oops!');
    scene.text('Sergey sighs, realizing your game now… and feeling a bit busted at the same time.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, stop tormenting me!" he tells you. "I''m not a robot, I''m a...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, stop tormenting me!" he tells you. "I'm not a robot, I'm a man with needs and desires! If you keep that up, you have no one but yourself to blame for what happens next…"`);
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'stat', '');
    if (((st as any).npc_rel ?? 0)?.['A112'] < 50  ||  ((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Stop teasing Sergey', goto: ['vasilyhome', 'vasilykitchen'] },
      ]);
    } else {
      qspCall(st, 'willpower', 'sex', 'resist');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop teasing Sergey', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop teasing Sergey', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'vasilykitchen');
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue teasing Sergey', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_izdev ?? '')); } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIzdev1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'boyStat', 'A112');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-1.jpg');
  scene.text('You look at Sergey and smirk at him: "You want me, don\'t you? It\'s okay, uncle Sergey… I don\'t mind pleasing you. Do you want me to undress?"');
  scene.text('Before he can even reply, you begin to take your clothes off. Sergey tries to raise his hands to stop you, but you deftly slap them away: "No, no touching! Not just yet, anyway!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-2.jpg');
    scene.text('Sergey looks at you a bit embarrassedly, while you take your clothes off piece by piece. Soon you\'re wearing little more than your panties.');
    scene.text('You look at him again and say: "I know, I know… the panties need to go too."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-3.jpg');
    scene.text('You stand up for dramatic effect, and make a show out of dropping your panties for him while you look him straight in the eye.');
    scene.text('You have Sergey\'s full attention, and smile at him: "You seem a bit uncomfortable, uncle Sergey. Is there anything I can do to make you feel better?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-4.jpg');
    scene.text('You sit back down on the chair and spread your legs, displaying your naked body proudly. You muse: "I bet there is something I could do…"');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-5.jpg');
    scene.text('"Do you like my ass, uncle Sergey? Maybe I\'ll let you fuck it, some day…" you tease him. "Not today though. If you want me to help you with that, unbutton your pants now", you grin, nodding at the bulge in his groin.');
    scene.text('Sergey is not used to not being in charge but lets our a dejected sigh and unbuttons his pants, hoping you weren\'t kidding.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-6.jpg');
    scene.text('You smile when he reveals his erection to you: you love having this effect on men! "Very nice, uncle Sergey! Don\'t worry, I\'ll take good care of you…"');
    scene.text('After you drop to your knees before him, you begin to jerk him off slowly: "It\'s so hard…"');
    scene.text('You tease him by kissing him all over his shaft, avoiding the head for now. That will come. When you lick his shaft over and over, you can feel him stir a little: he\'s growing impatient.');
    // TODO-QSP: dynamic text: Finally, you kiss the head of his cock, smearing his precum all over your lips. ...
    scene.text(`Finally, you kiss the head of his cock, smearing his precum all over your lips. You lick your lips afterwards and muse: "Mmm… delicious…" before taking it between your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips, sucking on it eagerly.`);
    qspCall(st, 'arousal', 'bj', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-7.jpg');
    scene.text('Once you\'ve had a taste of him you can\'t hold yourself back any longer, and passionately suck on his cock like the depraved slut that you are.');
    // TODO-QSP: dynamic text: After he notices you happily sucking his cock for a minute or so, he decides to ...
    scene.text(`After he notices you happily sucking his cock for a minute or so, he decides to try his luck and suggests: "Don't forget my balls, ${((st as any).pcs_nickname ?? '')}!"`);
    scene.text('You nod and immediately let go of his cock, sucking his balls one by one instead. After a while he groans and says: "Alright, back to your mouth."');
    scene.text('Once again, you follow his directions eagerly and take his cock back in your mouth, in an attempt to please him as good as you can. Unable to restrain himself, Sergey grabs you by your hair and pushes your head down into his groin, making you take most of his length down your throat.');
    // TODO-QSP: dynamic text: He forcefully thrusts his hips up and down a few times and groans: "Oh yea… that...
    scene.text(`He forcefully thrusts his hips up and down a few times and groans: "Oh yea… that's more like it. You're a little slut, aren't you ${((st as any).pcs_nickname ?? '')}? A little slut, happy that she found a cock to suck on…"`);
    scene.text('You bob your head up and down obediently, vaguely trying to wrap your head around how he managed to turn the tables on you so easily. Weren\'t you teasing him? Nevertheless: with this juicy cock between your lips, you\'re not complaining!');
    qspCall(st, 'arousal', 'bj', 5, 'dom', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1, '', '', 20);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    (st as any).pcs_hairbsh = 0;
    qspCall(st, 'cum_call', 'breasts', ((st as any).boy ?? 0), 1, '', '', 20);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-8.jpg');
    scene.text('Sergey grins and leans back, satisfied that you\'ll please him the way he wants you to. There\'s no need to tell you what to do, you know perfectly well what he wants!');
    scene.text('Without any warning, you suddenly feel him orgasming inside your mouth. You hold still and flick your tongue over the head of his cock, not letting any of his load escape.');
    scene.text('Once you think he\'s done, you try to swallow his load. But wow… it\'s a lot! You let some of it run down your chin onto your boobs, and give his cock one last kiss when you reluctantly let go. There are so many things you could do with it! All in good time, though… that was enough for one day.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzdev2(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'boyStat', 'A112');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-1.jpg');
  scene.text('You decide to just be honest, and smile at Sergey: "Uncle Sergey, do you think I have a nice body?"');
  scene.text('He\'s not really sure how to respond, and just stares at your shirt: "Uhh… I guess?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-2.jpg');
    scene.text('D\'oh, if you want him to be able to answer, you\'ll need to show him something first! Silly you…');
    scene.text('You lift up your shirt apologetically and repeat your question: "Well? How about my boobs, do you like them?"');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-3.jpg');
    // TODO-QSP: dynamic text: Sergey watches you intently now. "They''re very nice, <<$pcs_nickname>>… squeeze...
    scene.text(`Sergey watches you intently now. "They're very nice, ${((st as any).pcs_nickname ?? '')}… squeeze them together for me, I want to check something."`);
    scene.text('You do as he says, and he has a doubtful look in his eyes: "Hmm, no that probably won\'t work… they\'re lovely all the same, though. Show me your ass, next."');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-4.jpg');
    scene.text('You turn around and pull up your skirt. "Like this, uncle Sergey?"');
    // TODO-QSP: dynamic text: "Just like that… you have a nice ass, <<$pcs_nickname>>. Very nice", he nods.
    scene.text(`"Just like that… you have a nice ass, ${((st as any).pcs_nickname ?? '')}. Very nice", he nods.`);
    scene.text('"Thank you!" you blush. Is he going to touch you already or what!?');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-5.jpg');
    scene.text('"Bend over and get me a mug from that cabinet, will you?" he asks as he nods down. You bend over and open the closet, but don\'t find any mugs in there. When you turn around to ask him where it is, you see that Sergey pulled his dick free and is slowly stroking it.');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-6.jpg');
    scene.text('"Come here, girl. Put that mouth of yours to use", he grunts.');
    scene.text('You quickly move over to him and drop to your knees, covering his large cock in kisses. You don\'t forget his testicles either, placing kisses all over them before you slowly lick your way back up to the head of his member.');
    scene.text('You lick it like a lollipop for a moment, before carefully taking it in your mouth. After you suck him off for a little while, he grows impatient and grabs you by the hair, fucking your throat more and more roughly.');
    scene.text('"You thought you could just tease me like that, didn\'t you? You little minx…" Sergey scolds you, right before plunging his cock all the way down your throat again.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-7.jpg');
    scene.text('"Since you asked me what I think about your body, I think I\'m going to need the full tour. Your mouth is not bad… let\'s try your pussy next." Sergey demands, and he pulls you up and places you against the kitchen table.');
    // TODO-QSP: dynamic text: He slips his dick into your soppy pussy with one firm thrust, and begins to fuck...
    scene.text(`He slips his dick into your soppy pussy with one firm thrust, and begins to fuck you thoroughly. "Very nice, very wet… you're a good little slut, ${((st as any).pcs_nickname ?? '')}. Did getting me off with your mouth really turn you on so much?"`);
    scene.text('To your shame you have to admit that: yes, yes it did.');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      scene.text('While Sergey keeps pounding your pussy, he begins to tug at your butt plug. It\'s not that easy to take out while you\'re moving constantly, and eventually Sergey stops fucking you for a second to pull it out.');
    }
    scene.text('With his cock still inside your pussy, he begins to finger your tight little asshole.');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
      if (((st as any).agape ?? 0) < 1) {
        (st as any).agape = 1;
      }
      scene.text('"Uncle Sergey, wait!" you gasp. "I have lube, you should use some if you want to go there!"');
      scene.text('Sergey wordlessly takes the lube out of your pocket and smears some on his fingers before he penetrates you again. They go in a lot easier now.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        if (((st as any).agape ?? 0) < 2) {
          (st as any).agape = 2;
        }
      }
    }
    scene.text('Sergey keeps fingering your ass while he fucks your pussy. The sensation feels weird, but oddly arousing!');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(st, 'arousal', 'anal_finger', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-8.jpg');
    scene.text('"Time for the next part of my tour", Sergey grins. He pulls out of your pussy and switches to your ass, immediately slamming his cock in you.');
    scene.text('You scream and wince, despite his preparation that was a bit too sudden! Just when you were about to complain, Sergey puts his hand over your throat and pulls you up against his chest. He grunts in your ear: "My tour, my rules… I warned you, I don\'t play nice. Now stand there and take it."');
    scene.text('Sergey begins to move his hips, fucking you more and more roughly in your ass while he dominates your body.');
    scene.text('He\'s much stronger than you, and you can do little more than just let it happen.');
    // TODO-QSP: dynamic text: After a few minutes he pulls out of you and demands: "Show me your ass, <<$pcs_n...
    scene.text(`After a few minutes he pulls out of you and demands: "Show me your ass, ${((st as any).pcs_nickname ?? '')}. Show me how it looks so far."`);
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-9.jpg');
    scene.text('You bite your lip and obediently pull your ass cheeks aside, showing your stretched anus to Sergey. He nods, clearly pleased: "Not bad… but you can take more."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-10.jpg');
    scene.text('Sergey pushes you with your back onto the table and pulls your legs up, immediately leading his cock back into your ass. He thrusts wildly against you and slaps your ass cheeks and thighs hard whenever he gets the chance, making you moan and cry out loudly.');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = '"Ahhh, uncle Sergey! Please! I\'m… I\'m cumming!" you scream. At the same time, your whole body begins to tremble as you orgasm violently on his cock, while you were not even touching your pussy at all. Wow, this is intense!';
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex6-11.jpg');
    // TODO-QSP: dynamic text: Mere seconds after you orgasm, Sergey grunts and you feel his cock pulsing insid...
    scene.text(`Mere seconds after you orgasm, Sergey grunts and you feel his cock pulsing inside you, pumping hot ropes of cum into your intestines. He's gasping for breath by now, exhausted by the intense fucking he just gave you. "That was… amazing… ${((st as any).pcs_nickname ?? '')}!" he stumbles.`);
    scene.text('Unsure what to say back, you just lie down on your back and slowly let Sergey\'s cum drip out of your ass while you try to catch your breath too.');
    scene.text('While you put your clothes on, Sergey suddenly says: "Yes, I do." When you look at him questioningly, he adds: "I do think you have a nice body. Can\'t wait to get another crack at it!"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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
  scene.build();
}

function enterIzdev3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-1.jpg');
  scene.text('"My mother thinks this skirt is too short… what do you think? It looks nice, right?" you ask Sergey with an impish grin on your face.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-2.jpg');
    scene.text('You put one knee on the kitchen counter, showing Sergey everything underneath your skirt.');
    scene.text('"I mean… I know I shouldn\'t do this out in the street! So I don\'t! It\'s not that difficult to be modest, despite how short this skirt is, right?" you prompt. Sergey is not giving an answer, looking at you intently.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-3.jpg');
    scene.text('"If this skirt is too short, this top is too! I mean, all I have to do is this", you say as you stretch your top down, "and everyone can see what\'s underneath there too! What kind of argument is that!?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-4.jpg');
    scene.text('"And if I get rid of my bra, people can see my boobs too! Do you like my boobs, uncle Sergey? You don\'t mind, right?" you ask innocently.');
    scene.text('Sergey still says nothing, but is definitely admiring the shape of your bare boobs.');
    qspCall(st, 'arousal', 'flashlite', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-5.jpg');
    scene.text('You show him your pussy too, and decide to get to the point: "Look, uncle Sergey… my pussy looks so tight! Don\'t you want to fuck me? I think you do…"');
    scene.text('Sergey groans. He knows he shouldn\'t, but at the same time he really, <b>really</b> does.');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za6-6.jpg');
    scene.text('"I\'d even let you fuck my ass, uncle Sergey", you confess. "You can do anything you want to me…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za1-1.jpg');
  scene.text('You make yourself a cup of coffee and lean back against the kitchen counter.');
  scene.text('Sergey looks a bit embarrassed when you smile at him seductively.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za1-2.jpg');
    scene.text('You turn your back to him and take the back of your dress in your hand, asking him: "Uncle Sergey, do you think this is too short?"');
    // TODO-QSP: dynamic text: Sergey coughs nervously, not really sure how to respond to that. "<<$pcs_nicknam...
    scene.text(`Sergey coughs nervously, not really sure how to respond to that. "${((st as any).pcs_nickname ?? '')}, stop that!" he tells you.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za1-3.jpg');
    scene.text('You sigh and sit down on the kitchen counter, and begin to suck on your finger when you realize you still have his attention.');
    qspCall(st, 'arousal', 'foreplay', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za1-4.jpg');
    scene.text('"The straps of my dress keep sliding down! That\'s so annoying!" you complain to Sergey, while you push them back up demonstratively.');
    scene.text('Sergey grunts softly, realizing you\'re not going to stop teasing him and considers just leaving the kitchen.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za1-5.jpg');
    scene.text('"Uncle Sergey, you never answered my question", you remark, and get up from the counter and turn your back to him again. "Is this dress too short, yes or no?"');
    scene.text('You move to turn your head, to see if he\'s looking. Before you can, you already feel his hand on your buttocks.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-1.jpg');
  scene.text('You move to stand in the middle of the kitchen. Sergey looks at you a bit puzzled, not sure why.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-2.jpg');
    scene.text('"Uncle Sergey, do you like this skirt?" you ask him sweetly.');
    scene.text('Sergey doesn\'t really know how to respond. "Yea… it\'s okay, I guess", he shrugs.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-3.jpg');
    scene.text('"You don\'t sound convinced", you pout. "Do you think my ass looks better without the skirt, then?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, stop that!" he tells you. At the same time, he can''t keep h...
    scene.text(`"${((st as any).pcs_nickname ?? '')}, stop that!" he tells you. At the same time, he can't keep his eyes off your bare ass.`);
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-4.jpg');
    scene.text('"What about my pussy, uncle Sergey? Surely you like that better than my skirt?" you grin sheepishly.');
    scene.text('Sergey is speechless, and just stares at you now.');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-5.jpg');
    scene.text('"Do you like my boobies? Some of the boys at school say they\'re too small, but I like them", you smile at him.');
    qspCall(st, 'arousal', 'flashlite', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-6.jpg');
    scene.text('"Wait! I\'ll just take my clothes off for you, so you can have a better look!" you suggest, and promptly begin to undress in front of him.');
    scene.text('Realizing there\'s no stopping you, Sergey just sits back in his chair and lets it all happen. You can tell he\'s about to devour you, when you stand in front of him naked. You nearly have him where you want him!');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'arousal', 'flashlite', (-5), 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za3-7.jpg');
    scene.text('You decide to just go for broke now, and turn around and spread your ass cheeks. You ask him sweetly: "Do you like my asshole, uncle Sergey? I\'m not very experienced yet there, but I\'m trying to learn. Maybe you can help me?"');
    scene.text('Sergey can\'t hold back any longer, and you feel him slapping your ass cheek as he moves to stand next to you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za5-1.jpg');
  scene.text('"This dress is so warm!" you complain to Sergey. "I can\'t work in the kitchen like this!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za5-2.jpg');
    scene.text('The dress actually consists of two parts, and you slide the top over your head laughing.');
    scene.text('"But…" Sergey begins but then closes his mouth again, staring at your boobs.');
    qspCall(st, 'arousal', 'flashlite', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za5-3.jpg');
    scene.text('You lower the skirt too, and kick it into a corner of the kitchen.');
    scene.text('"There, much better!" you say.');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za5-4.jpg');
    scene.text('You get back to cleaning the kitchen counter, feeling a cool breeze on your skin. Sergey doesn\'t know where to look, and just stares at your naked body.');
    scene.text('"Oh I\'m sorry, uncle Sergey! Am I making you feel uncomfortable? In the groin area perhaps?" you apologize, with a sly smile on your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za5-5.jpg');
    scene.text('"You know, while I\'m helping you… I bet I could help you with that too!" you offer.');
    scene.text('That was the final straw for Sergey, and he stands next to you almost immediately, his hands eagerly pawing your naked ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-1.jpg');
  scene.text('"These flowers are lovely, uncle Sergey!" you say. He shrugs and looks at your ass, while you lean over to smell them.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-2.jpg');
    scene.text('"Are you looking at my ass?" you ask him intently, when you catch his stare. He quickly looks the other way, feeling caught.');
    scene.text('"It\'s okay, you can look!" you reassure him quickly. "In fact… why don\'t I show you some more?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-3.jpg');
    scene.text('"If you could fuck me… which hole would you go for first? My pussy or my ass?" you grin impishly at him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-4.jpg');
    scene.text('"Here, I\'ll give you a better view so you can decide!" you offer, pushing your dress to the side.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-5.jpg');
    scene.text('Sergey takes a few steps back, so he can get a better view of your entire body. He eyes you up and down greedily.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'flash', (-10), 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-6.jpg');
    scene.text('You let the dress slip off your shoulder, showing Sergey your boobs too. "This dress is so annoying… stupid straps…" you mutter.');
    qspCall(st, 'arousal', 'flashlite', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za11-7.jpg');
    scene.text('You forget about your dress and just pose for Sergey, who is upon you in an instant. From the large bulge in his pants, you can tell your teasing definitely had an effect on him!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-1.jpg');
  scene.text('You\'re so horny right now, you want him! Despite what he said… how bad could it be, really?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-2.jpg');
    scene.text('Sergey is upon you before you can even do anything more, and pulls you against his lap. One of his hands hold you tight against him, while the other eagerly rubs your crotch');
    // TODO-QSP: dynamic text: He grunts in your ear: "Why do you keep teasing me, <<$pcs_nickname>>? Do you no...
    scene.text(`He grunts in your ear: "Why do you keep teasing me, ${((st as any).pcs_nickname ?? '')}? Do you not know any better, or are you just a little slut for older men?"`);
    scene.text('You bite your lip nervously, and Sergey smirks: "I see. Say no more. You\'ll get what you want today, girl… get on your knees."');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-3.jpg');
    scene.text('You eagerly drop to your knees, and automatically close your lips around his cock when he pulls it out of his pants. You even catch yourself playing with your boob while you suck on his dick, while he has his hand behind your head, holding it in a firm grip. Even though you\'re eager to please him, he\'s not leaving any room for doubt: you do as he says, today.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-4.jpg');
    scene.text('You stand up again and bend over, never taking your mouth off his cock. You begin to bob your head up and down again, but realize it\'s all the easier for Sergey to push your head down and force you to take more of his cock in your mouth, in this position. He does exactly that, making you swallow his length all the way down your throat until your nose is resting against his groin.');
    scene.text('You can\'t breathe like this, and your movements become more and more frantic in an attempt to get away, and Sergey groans when you\'re swallowing in a reflex, effectively only massaging his cock more. Finally he lets you pull back, and you cough and gasp for air.');
    scene.text('Sergey smirks at you: "You okay?"');
    scene.text('Still gasping for breath, you nod: "I\'m okay." He did warn you…');
    // TODO-QSP: dynamic text: "Good. Again." He puts his hand back against your head and guides you to his coc...
    scene.text(`"Good. Again." He puts his hand back against your head and guides you to his cock, doing the same thing as before. You were expecting it this time, so it's not quite as difficult. Sergey really pushes your limits though, only letting you catch a breath when he thinks you really need to. After several more times, Sergey lets go of you completely and grins proudly at you: "You took it like a champ, ${((st as any).pcs_nickname ?? '')}. I'm impressed! Few girls can take my entire length down their throat like that!"`);
    scene.text('You smile meekly and spit a large gob of saliva over his dick, and spread it out with your hand. You feel somewhat proud of yourself for being able to deepthroat him… and horny, too!');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-6.jpg');
    scene.text('Sergey picks up in his strong arms as if you weigh nothing, and puts you down on top of the kitchen counter. He plunges two fingers in your pussy, only to find that you\'re sopping.');
    scene.text('"You\'re wet, slut. Why is that?" he asks sharply, expecting an answer from you.');
    scene.text('You moan like a whore when he fingers you, causing him to chuckle. He never lets up though, and asks you again: "Well? Why is that?"');
    scene.text('"Because I want you to fuck me! Please fuck me, I can\'t take it any more!" you cry out.');
    scene.text('"That\'s all I wanted to hear", he grins. When he moves his hips towards you, you practically skewer yourself onto him and begin to buck your hips against him once his dick is inside you. It\'s fairly big, and your pussy lips feel a bit stretched for taking him in, but you don\'t care… as long as he\'ll fuck you, you\'d do anything!');
    // TODO-QSP: dynamic text: You button down your shirt while he fucks you, showing him your bare <<$titsize>...
    scene.text(`You button down your shirt while he fucks you, showing him your bare ${((st as any).titsize ?? '')} breasts while Sergey fucks you. He redoubles his efforts and fucks you even harder, feeling empowered by you surrendering your body to him like that. His invigorated thrusts make your boobs bounce up and down.`);
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-5.jpg');
    scene.text('Once your moans quiet down a bit, Sergey pulls out of you and orders you: "Not good enough for you, huh? Go stand with your back turned to me."');
    scene.text('You obey him dutifully, and he thrusts his cock back inside you with one firm thrust, and fucks you mercilessly.');
    scene.text('"Fuck me, uncle Sergey!", you groan. "Fuck me like the slut that I am! Treat me like a whore!"');
    scene.text('You eagerly meet his thrusts half-way, and don\'t object when he puts his hand over your throat. He tilts your face upwards, softly biting your neck while he pounds you from behind.');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if ((!((st as any).spanked ?? 0))) {
      (st as any).spanked = 1;
    }
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-7.jpg');
    scene.text('Sergey spanks your buttocks quite hard from behind, but it only makes you bounce up and down harder on his cock. He grins evilly once he realizes this, and times his slaps perfectly to make you ride him to the best of your abilities.');
    // TODO-QSP: dynamic text: "See, <<$pcs_nickname>>… I knew you''d be a good slut for me. All you need is a ...
    scene.text(`"See, ${((st as any).pcs_nickname ?? '')}… I knew you'd be a good slut for me. All you need is a little encouragement!" he whispers in your ear, right before landing another slap.`);
    scene.text('You\'re crying out loudly by now, no longer caring if anyone can hear you. Sergey continues \'encouraging\' you for another few minutes, and your buttocks feel like they\'re on fire by the time he\'s done with you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'clothes', ((st as any).boy ?? 0), 1, '', '', 20);
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1, '', '', 10);
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1, '', '', 10);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex2-8.jpg');
    scene.text('When Sergey is about to cum, he pulls out of you and grunts: "On your knees, now!"');
    scene.text('A bit taken aback by how urgently it sounds, you quickly drop to your knees and look at him questioningly, and then immediately grab his penis and begin sucking on it.');
    scene.text('You can clearly taste yourself on it… you\'re still not used to the taste, but can\'t help but get turned on by the very idea of it.');
    scene.text('While you lick and suck him off eagerly in an attempt to taste more of yourself, the cock in your hand begins to pulse more intensely and spurts hot jets of cum all over your hand and face.');
    scene.text('You try to aim his dick at your mouth and catch his sperm in there, but by the time you do, you\'re already wearing most of his load on your face.');
    // TODO-QSP: dynamic text: Sergey snickers: "That''s a good look for you, <<$pcs_nickname>>! I guess it''s ...
    scene.text(`Sergey snickers: "That's a good look for you, ${((st as any).pcs_nickname ?? '')}! I guess it's true what they say: the apple doesn't fall far from the tree…"`);
    scene.text('You feel obligated (and also want to) lick him clean, and you smile sweetly at him once you\'re satisfied.');
    scene.text('"That was fun, uncle Sergey", you grin. "I can\'t wait to come help you again!"');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzdev9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex3-1.jpg');
  scene.text('"Uncle Sergey, you look thirsty!" you smile at him, while you lean against the fridge. "Is there anything I can get you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex3-2.jpg');
    scene.text('"Or… is there something else you\'d rather have?" you suggest innocently, while you take off your shirt. "Phew, that work in the kitchen got me worked up!"');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex3-3.jpg');
    scene.text('When you see ogling your body Sergey\'s greedily, you smile: "What\'s the matter, uncle Sergey? Am I distracting you? You don\'t mind, do you? I can put my shirt back on, if it makes you feel awkward…"');
    scene.text('Sergey smirks: "Just keep going, girl." He knows exactly what you\'re up to.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex3-4.jpg');
    scene.text('You stand in front of him in your underwear now, and ask: "Do you like this set of underwear? I don\'t know… it\'s a bit bright!"');
    scene.text('Sergey pretends to be pondering and shrugs: "Hard to say, I have nothing to compare it to!" He looks at you intently for a second and then nods: "Okay, got it. Why don\'t you take it off now, so I can see whether I like it better on you or on the floor?"');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex3-5.jpg');
    scene.text('"Definitely on the floor", Sergey grins once you take it off. "You look fine just the way you are now."');
    scene.text('You move over to Sergey and begin to unbutton his pants, no longer interested in playing this little role game.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-6.jpg');
    scene.text('Sergey leans back against the counter, when he sees how eager you are. Normally he comes across as a very demanding man, but he\'s happy to leave you in control for now.');
    scene.text('You drop to your knees in front of him and take out his cock, gently licking it with your tongue. While you\'re so close to him, his strong, masculine scent fills your nostrils. It\'s… intoxicating!');
    scene.text('You obediently close your lips around the head of his cock and take it in your mouth.');
    // TODO-QSP: dynamic text: "No hands, <<$pcs_nickname>>", Sergey grins. "Only use your mouth."
    scene.text(`"No hands, ${((st as any).pcs_nickname ?? '')}", Sergey grins. "Only use your mouth."`);
    scene.text('That sounds like it could be fun! You use your hands to steady yourself against his thighs, but make an effort of showing they\'re not going anywhere near his dick while you try to deepthroat him.');
    scene.text('When Sergey tries to put his hand behind your head, you pull away from him and say: "No no. If I can\'t use my hands, you can\'t either!"');
    scene.text('Sergey laughs: "That\'s fair!" and puts his hands back on the counter. You try to deepthroat him again, but struggle when he begins to move his hips, forcing his length inside your mouth. "Hey, all you said was no hands", he grins when you were about to complain. "Now take it."');
    scene.text('He\'s right: fair\'s fair.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-7.jpg');
    // TODO-QSP: dynamic text: "When Sergey tells you to stop after a few minutes of throatfucking, his cock is...
    scene.text(`"When Sergey tells you to stop after a few minutes of throatfucking, his cock is covered in a layer of saliva. "Very good, ${((st as any).pcs_nickname ?? '')}. You're almost as good as your classmate. Now get on your hands and knees."`);
    scene.text('Sergey\'s hands explore your body greedily, but end up a little bit higher than you had anticipated.');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      // TODO-QSP: dynamic text: Sergey laughs when he finds your butt plug and says: "Wow, <<$pcs_nickname>>! I ...
      scene.text(`Sergey laughs when he finds your butt plug and says: "Wow, ${((st as any).pcs_nickname ?? '')}! I never would've thought… good for you, though. Let's get this out of the way for now."`);
      scene.text('He carefully pulls your butt plug out of your ass, and plunges his fingers in to test how loose your ass is. "Very nice. That should make the next step easier. Will save some time, too… no need to take it slow!"');
    }
    scene.text('He guides his hard cock to your anus and rubs it over your tight sphincter a few times.');
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
      if (((st as any).agape ?? 0) < 1) {
        (st as any).agape = 1;
      }
      scene.text('"Wait! I brought some lubricant with me, it\'ll feel better for both of us if you use that!" you offer quickly.');
      scene.text('"Really? Go get it for me", Sergey smiles benevolently, and squirts a generous amount onto his fingers when you offer him the tube. He spends a few minutes preparing your anus for his cock, making you feel surprisingly good in response. Anal really does feel nice, if your partner takes the time to prepare you first.');
      scene.text('Then he spreads some lube on his dick and guides it to your anus once more, pushing it past your sphincter relatively easily.');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        if (((st as any).agape ?? 0) < 2) {
          (st as any).agape = 2;
        }
        scene.text('You wince when you feel Sergey slowly but surely push the large head of his cock past your sphincter. You thought you did a good job lubricating it when you deepthroated him, but it was not enough. You want to please Sergey though, so you bite through the pain and let him do it anyway.');
      }
    }
    scene.text('Finally his hard cock is all the way inside your ass. Sergey takes his time, letting you get adjusted to his size before he begins to thrust. While his large cock still makes you feel uncomfortably full, it doesn\'t really hurt any more and you move your hand down to stimulate your clitoris while he fucks you.');
    scene.text('Sergey increases the force of his thrusts and begins to fuck you rougher, and a loud moan escapes your mouth - not only from pain, but mixed with pleasure! You freeze for a moment, trying to wrap your head around how this could feel this good.');
    scene.text('Sergey grins, interpreting your moan as a sign of submission, and begins to seriously pound your asshole now. Lost in your own little world, you can do little more than just keep rubbing your clit and rub yourself to your inevitable orgasm… if he keeps this up any longer, you\'re going to explode!');
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(st, 'arousal', 'clit_finger', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex5-8.jpg');
    // TODO-QSP: dynamic text: A few minutes later, Sergey grabs your <<$pcs_haircolor>> <<$curly_txt>> in his ...
    scene.text(`A few minutes later, Sergey grabs your ${((st as any).pcs_haircolor ?? '')} ${((st as any).curly_txt ?? '')} in his fist and guides you to the ground, his cock never leaving your ass. You meekly let him guide you, this feels way too good to object! You plunged several fingers in your vagina by now, and are fingerbanging yourself to an orgasm while Sergey has his fun with your backside.`);
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'It doesn\'t take long for you to reach orgasm, and you moan loudly while your body quivers against his, in your submissive kneeling position.';
    // TODO-QSP: dynamic text: Sergey grins as he feels your muscles tighten around his cock repeatedly and gri...
    scene.text(`Sergey grins as he feels your muscles tighten around his cock repeatedly and grins: "Just the way I like my sluts… on their knees, orgasming while I fuck their ass. Here it comes, ${((st as any).pcs_nickname ?? '')}!"`);
    scene.text('He pulls out of your ass and jerks himself off over your buttocks, his sperm landing all over your back and your ass as he lets out a primal roar.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzdev10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-1.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>… why are you taking your pants off!?" Sergey asks you.
  scene.text(`"${((s as any).pcs_nickname ?? '')}… why are you taking your pants off!?" Sergey asks you.`);
  scene.text('"It\'s just how I prefer to work in the kitchen, uncle Sergey", you reply. "You don\'t mind, do you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-2.jpg');
    scene.text('You bend over and show off your ass to Sergey again, with a devious smile on your lips. Then you proceed to clean the kitchen counter, as if nothing happened.');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-3.jpg');
    scene.text('"Uncle Sergey, are you looking at my panties!?" you exclaim, pretending to be insulted. Sergey ignores you, and just keeps looking.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-4.jpg');
    scene.text('"Uncle Sergey, stop it!" you say, stretching your shirt to cover yourself up.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-5.jpg');
    scene.text('Just when he was about to apologize, you smile at him: "It\'s okay… I forgive you. It\'s probably not every day that you have a girl in your kitchen like this!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-6.jpg');
    scene.text('"You want me, don\'t you?" you smile at Sergey, who swallows nervously. He knows he shouldn\'t, but… you\'re making it very hard on him to do the right thing and say no.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-7.jpg');
    scene.text('You take off your shirt and walk up to him, teasing him: "Go on… take them off."');
    scene.text('He hates himself for it, but at the same time he can\'t stop his hand from pulling your panties down.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za7-8.jpg');
    scene.text('When you\'re completely naked, you lean back against the kitchen counter and spread your legs, spreading your pussy for him. Sergey immediately gets out of his chair and follows you, greedily putting his hands on your hips.');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-1.jpg');
  scene.text('You lean back against the kitchen counter and ask Sergey confidently: "Say, uncle Sergey… what kind of women are you into, anyway? You can tell me, no need to be ashamed!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-2.jpg');
    scene.text('"Erm…" he begins, not really sure what to tell you. Finally he says: "I like younger women. Preferably athletic girls, with a nice tight body.');
    scene.text('You smile sweetly and ask him: "Really… so, kind of like me, then?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-3.jpg');
    scene.text('You undo your pants while you\'re talking with him, and Sergey stares at your legs in amazement.');
    scene.text('"Uncle Sergey?" you try to get his attention. When he nods, you repeat the question: "I said, kind of like me then? Do you think I\'m attractive?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-4.jpg');
    scene.text('"Uhh, sure…" he says, unsure how far he can go with you. At the same time, his raging hormones are starting to take over. If you play your cards right, you can make him show you how attractive he really thinks you are.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-5.jpg');
    scene.text('"I\'m glad… because I think you\'re attractive too", you smile at him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za9-6.jpg');
    scene.text('You sit back on the kitchen counter, spreading your legs slightly for him. By now, his hormones have conquered over his common sense, and he stands up and moves over to you.');
    scene.text('"Is that so?" he smirks. "I\'ll give you ample opportunity to prove that…"');
    qspCall(st, 'arousal', 'foreplay', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev12(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-1.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>… why are you taking your clothes off!?" Sergey asks you.
  scene.text(`"${((s as any).pcs_nickname ?? '')}… why are you taking your clothes off!?" Sergey asks you.`);
  scene.text('"It\'s just how I prefer to work in the kitchen, uncle Sergey", you reply. "You don\'t mind, do you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-2.jpg');
    scene.text('You bend over and show off your ass to Sergey again, with a devious smile on your lips. Then you proceed to clean the kitchen counter, as if nothing happened.');
    scene.text('"Oooo, strawberries!" you squee, and eat one.');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-3.jpg');
    scene.text('"Uncle Sergey, are you looking at my panties!?" you exclaim, pretending to be insulted. "I\'m only trying to help you!"');
    scene.text('Sergey ignores you, and just keeps looking.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-4.jpg');
    scene.text('"Just kidding… you can look at me as much as you want", you purr. "Do you like my boobs?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-5.jpg');
    scene.text('"I\'ll just take this off… I don\'t think we\'ll be needing it for what happens next! Will we?" you grin sheepishly at him, and try to take your shirt off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-6.jpg');
    scene.text('You can\'t get the shirt over your head, and slide it down your waist instead. Sergey looks at you amusedly, watching your boobs bounce up and down while you try to squirm out of your shirt.');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za10-7.jpg');
    scene.text('When you\'re wearing nothing but your socks, you sit down on the floor and cross your legs demonstratively.');
    // TODO-QSP: dynamic text: "Do you want to see my cunny, uncle Sergey? Just come over and have a look!" you...
    scene.text(`"Do you want to see my cunny, uncle Sergey? Just come over and have a look!" you tease him. Sergey walks over to you in a few brisk paces, with a decisive look in his eyes. He roughly pulls you up from the ground and grunts in your ear: "I'm going to do more than just look, ${((st as any).pcs_nickname ?? '')}… much more."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzdev13(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-1.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>… why are you taking your clothes off!?" Sergey asks you, a bi...
  scene.text(`"${((s as any).pcs_nickname ?? '')}… why are you taking your clothes off!?" Sergey asks you, a bit uncomfortable with you undressing.`);
  scene.text('"It\'s just how I prefer to work in the kitchen, uncle Sergey", you reply. "You don\'t mind, do you?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-2.jpg');
    scene.text('"Uncle Sergey, are you looking at my panties!?" you exclaim, pretending to be insulted. Sergey seems a bit embarrassed, but can\'t stop staring at you. You smile to yourself, you have him right where you want him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-3.jpg');
    scene.text('"Do you think my ass looks good in these panties, uncle Sergey?" you ask sweetly. He doesn\'t respond, but the bulge in his groin tells you everything you need to know.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-4.jpg');
    scene.text('"What do you think about my boobs? Don\'t you want to touch them?" you smile at him. Sergey is stirring in his seat uncomfortably now.');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-5.jpg');
    scene.text('You get rid of your panties and spread your legs for Sergey, showing him your pussy. You\'re quite aroused from the little show you just put up, and your pussy lips are glistening with your juices.');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-6.jpg');
    scene.text('Then Sergey can\'t take it any more, and walks over to you. He firmly grabs you by your hair while his pants drop to the ground, making his cock spring free eagerly.');
    // TODO-QSP: dynamic text: "Now look what you''ve done, <<$pcs_nickname>>… what are you going to do about i...
    scene.text(`"Now look what you've done, ${((st as any).pcs_nickname ?? '')}… what are you going to do about it?" he demands.`);
    scene.text('"Don\'t worry, uncle Sergey. I\'ll take good care of it!" you smile sweetly at him and squat, taking the head of his penis in your mouth.');
    scene.text('That\'s not what he had in mind, though. Sergey impatiently puts his hands behind your head and begins to direct the pace, holding your head in position while he begins to move his hips, forcing his cock a bit further down your throat with every thrust. You do your best to take his length down your throat without complaining but eventually you have to pull away from him, sputtering and coughing.');
    // TODO-QSP: dynamic text: Sergey lets you catch your breath for a moment, and then brings his cock back to...
    scene.text(`Sergey lets you catch your breath for a moment, and then brings his cock back to your mouth, letting you suck it this time. "I did warn you, ${((st as any).pcs_nickname ?? '')}", he muses. "I can be fairly demanding, when a slut keeps teasing me over and over."`);
    scene.text('You nod obediently, while you bob your head up and down his dick. He did warn you…');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-7.jpg');
    scene.text('After a while Sergey pulls his cock out of your mouth, grinning at the strand of spittle dripping from the head. He then helps you up and takes your ankle in his hand, making you rest one knee on the table surface. He rubs his fingers over your pussy, and slips two fingers inside you.');
    scene.text('"Dripping… just as I suspected", he grins. He fucks you with his fingers for a moment, and then wipes his wet fingers on your ass cheeks. You yelp in surprise when he gives you two loud slaps on your buttocks, ouch!');
    scene.text('Without any warning, he rams his penis all the way inside you in one firm thrust. You cry out in pain from the sudden intrusion, and to your relief he begins slowly, so as to not cause you more pain. Despite his size you can take him fairly well, and soon he has you moaning and mewling on the table as he picks up the pace.');
    scene.text('Your juices are running down your legs now, and your sopping cunt is making a loud squelching sound every time Sergey drives his dick deep into you.');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'sub');
    qspCall(st, 'arousal', 'vaginal', (-10), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-8.jpg');
    scene.text('Then Sergey turns you on your back, and continues to fuck you as intensely as before. You moan loudly, not even caring if anyone else can hear you.');
    scene.text('"Fuck me, uncle Sergey! Fuck me harder!" you cry out, rubbing your clitoris frantically.');
    scene.text('He grins and does as you ask, entertained by the thought of how eager you were to please him. His balls slap against your buttocks while he pounds you hard.');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Then your orgasm hits you: its powerful waves rip through your body, making your whole body tremble and tingle. Sergey has to actually hold you in place, to make sure you don\'t fall off the table.';
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-9.jpg');
    scene.text('Sergey gives you a minute or two to catch your breath, holding perfectly still. He never pulls his cock out of you though; he\'s not finished with you yet, and his posture is making it very clear that he\'s not about to let you go.');
    // TODO-QSP: dynamic text: He then helps you up from the table and lies down on it himself, his erection st...
    scene.text(`He then helps you up from the table and lies down on it himself, his erection still pointing straight up in the air. "Ride me, ${((st as any).pcs_nickname ?? '')}. I made you feel good… now it's time for you to return the favor", he grins.`);
    scene.text('You happily do as he says, and slowly lower yourself onto his cock after you climb on top of him. You have full control over the situation like this, and ride him eagerly. Sometimes increasing the pace and fucking him enthusiastically, sometimes slowing down to catch your breath and tease him at the same time.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).boy ?? 0), 1, '', '', 30);
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1, '', '', 5);
    qspCall(st, 'cum_call', 'clothes', ((st as any).boy ?? 0), 1, '', '', 5);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex1-10.jpg');
    // TODO-QSP: dynamic text: After you ride him for a few more minutes, Sergey suddenly wraps his arms around...
    scene.text(`After you ride him for a few more minutes, Sergey suddenly wraps his arms around you in a bear grip and stands up, holding you up in the air for a second while you're still skewered on his dick. He then puts you on the ground and tells you: "Get down on your knees, ${((st as any).pcs_nickname ?? '')}. I want you to take my load on your face."`);
    scene.text('When you wait for him to jerk off on your face, he smirks at you and says: "What, you thought I was going to do it? No, no. For a little slut like yourself, that\'s your job… get to work."');
    scene.text('You wrap your fingers around his erection and begin to pump your fist up and down, aiming his dick at your face when he begins to groan more intently. When you feel the first drop of sperm land on your face, you quickly take the head of his dick in your mouth and let him shoot the rest in your mouth. It\'s not what he wanted, but from the satisfied look on his face, he\'s not about to complain.');
    scene.text('You swallow some of it, but wow… it\'s a lot! You let the rest flow down your skin, and look up at Sergey with a sweet smile on your face while his cum slowly drips onto your boobs. You give the head of his cock one more kiss and smile: "I\'m sorry for teasing you so much, uncle Sergey. I hope that made up for it?"');
    // TODO-QSP: dynamic text: Sergey laughs: "It sure did, <<$pcs_nickname>>. Fair warning though: I went easy...
    scene.text(`Sergey laughs: "It sure did, ${((st as any).pcs_nickname ?? '')}. Fair warning though: I went easy on you this time…"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzdev14(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-1.jpg');
  scene.text('You decide to have a glass of juice. While you have a sip, Sergey is looking at you intently.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-2.jpg');
    scene.text('Suddenly Sergey reaches out for you and pulls up your shirt, before resting his hand on your right boob. "Uncle Sergey!?" you exclaim. "What are you doing?"');
    scene.text('You\'re surprised he would be that handsy with you, but you don\'t mind. You don\'t mind at all! With a devious grin you think to yourself: "I knew he wouldn\'t be able to keep his hands off me!"');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-3.jpg');
    scene.text('Then Sergey\'s hand slides inside your pants, and he thrusts two fingers inside your pussy.');
    // TODO-QSP: dynamic text: "You want me… don''t you, <<$pcs_nickname>>?" he asks you intently. When you nod...
    scene.text(`"You want me… don't you, ${((st as any).pcs_nickname ?? '')}?" he asks you intently. When you nod, he continues: "What is it that you want?"`);
    scene.text('You sigh excitedly, and softly confess: "I want you to… I want you to fuck me, uncle Sergey! Fuck me, please!"');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-4.jpg');
    // TODO-QSP: dynamic text: Sergey roughly turns you around, and pulls your pants down below your ass cheeks...
    scene.text(`Sergey roughly turns you around, and pulls your pants down below your ass cheeks. "And how do you want me to fuck you, ${((st as any).pcs_nickname ?? '')}?" he asks, while he's admiring your ass.`);
    scene.text('"I want you to fuck my wet slit!" you tell him, so loud that there is an awkward silence in the room for a second. Then Sergey laughs: "Oh, I will… if you do something for me, first! Get down on your knees."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-5.jpg');
    scene.text('You immediately drop to your knees with your mouth wide open, eagerly taking his cock inside your mouth while your hands caress his balls.');
    scene.text('Sergey leaves the initiative to you first but begins to move his hips shortly after, forcing most of his length down your throat. Your saliva is dripping down your chin and onto your tits, where you rub it out obediently.');
    scene.text('Sergey then takes his dick from your mouth and slaps it against your cheeks a couple of times. He\'s fully hard now, and you\'re actually impressed with how rigid it is. You wouldn\'t go as far as to say you\'re scared… but definitely a little nervous, knowing how demanding and dominant Sergey can be.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-6.jpg');
    scene.text('Once Sergey decides you\'ve sucked him off enough, he tells you to sit on a stool with his back towards him and lean on the table. When you do as he says, you suddenly feel the head of his erection poking between your pussy lips.');
    scene.text('"Please fuck me, uncle Sergey! Please!" you beg him, which only makes Sergey grin cruelly. He enters you teasingly slowly, and every centimeter of his length makes you moan and gasp a little more.');
    scene.text('"Enjoying yourself there, girl?" he smirks, holding his hips perfectly still once he\'s inside you. You merely let out a satisfied whimper, simply waiting for him to start fucking you. Begging didn\'t help, so…');
    scene.text('After a little while he gets bored of trying to make you beg and begins to move slowly; he\'s way too much into this to show much self-restraint.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-7.jpg');
    scene.text('Suddenly he stops again. Why is he stopping!?');
    scene.text('He whispers in your ear: "If you want me to fuck you again, I want to feel your lips around my cock first… you have 10 seconds."');
    scene.text('You immediately drop to your knees, and have his dick most of the way inside your mouth before he can even count to 2. He grins, happily surprised with your quick response and very much enjoying how good you are with your mouth. He strokes your hair almost lovingly while you suck him off eagerly.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-8.jpg');
    scene.text('After a few minutes of you diligently sucking him off, Sergey grabs you under your arm pits and pulls you up. He lowers you down onto the stool and immediately guides his cock back inside you. You pull up your legs, giving him easy access and place your fingers on your clitoris, gently rubbing it while Sergey fucks you.');
    scene.text('He can go very deep inside you at this angle, filling you up with his entire length. You squeal and cry out loudly, unable to quiet yourself down. If anyone hears you… so be it!');
    scene.text('Sergey gives you the thorough fucking he promised, and eventually you feel that he\'s about to finish.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 0;
    qspCall(st, 'cum_call', 'stomach', ((st as any).boy ?? 0), 1, '', '', 20);
    qspCall(st, 'cum_call', 'breasts', ((st as any).boy ?? 0), 1, '', '', 20);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/sex4-9.jpg');
    scene.text('Sergey doesn\'t want to get you pregnant, and pulls out right before he orgasms. He shoots his thick jets of cum all over your stomach and labia, some of it even landing on your tits. He came so much! You smear it out with a satisfied smile on your face, your head still feeling a bit hazy from the intense fucking you just received.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzdev15(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za2-1.jpg');
  scene.text('You raise your hands in defence, claiming you\'ll stop. You turn around to wash your hands in the sink, and make your clothes all wet on purpose.');
  scene.text('Sergey feels a bit embarrassed, but at the same time can\'t keep his eyes off you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za2-2.jpg');
    scene.text('"Oops!" you exclaim. You excitedly cover your chest with your arm, your clothes all wet from the water.');
    scene.text('Sergey looks intently at your nipples, that are tenting through the fabric now.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za2-3.jpg');
    scene.text('Your attempts to wipe the water off your clothes only resulted in you rubbing it out, and the entire front is soaked now.');
    scene.text('Sergey doesn\'t even pretend to be modest any more, and openly stares at you now.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za2-4.jpg');
    scene.text('With a deep sigh, you decide that you can\'t keep this shirt on and decide to just pull it up. It did a very poor job of covering anything up anyway, as wet as it was.');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za2-5.jpg');
    scene.text('When you look at Sergey, you see that he\'s ogling your body now, licking his lips. Deciding to tease him even further, you lower your pants too. "Sorry uncle Sergey, they\'re all wet! I can be so clumsy sometimes…" you smile at him. He\'s looking at your pussy so intently now, you\'re not even sure he hears what you said. Then suddenly, he moves over and reaches out for you.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    (st as any).randkuhizn = (Math.floor(Math.random() * 100) + 1);
    if (((st as any).randkuhizn ?? 0) < 50) {
      scene.actions([
        { label: 'Continue', goto: ['Serge_kuh', 'izn1'] },
      ]);
    }
    if (((st as any).randkuhizn ?? 0) >= 50) {
      scene.actions([
        { label: 'Continue', goto: ['Serge_kuh', 'izn2'] },
      ]);
    }
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

function enterIzdev16(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za4-1.jpg');
  scene.text('You take off your pants and kick them to a corner. When Sergey looks at you confused, you smile at him: "I prefer to be naked when I work in the kitchen. Don\'t worry, I\'ll keep my shirt on…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za4-2.jpg');
    scene.text('You pretend to clean the kitchen counter, leaning over it seductively. When you look back, you notice that Sergey\'s gaze is fixated on your bare ass.');
    qspCall(st, 'arousal', 'flash', 5, 'dom');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za4-3.jpg');
    scene.text('"Maybe I should just take my shirt off too. What do you think?" you ask sweetly.');
    // TODO-QSP: dynamic text: Sergey opens his mouth to say something, but then changes his mind. "<<$pcs_nick...
    scene.text(`Sergey opens his mouth to say something, but then changes his mind. "${((st as any).pcs_nickname ?? '')}… this is not fair…" he mutters eventually.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za4-4.jpg');
    scene.text('You lower yourself to your knees and show him what it\'d look like when you mop the floor like this. "See? My shirt would just get in the way!" you complain.');
    scene.text('Sergey can\'t take any more of your teasing, and roughly puts his hands under your armpits, pulling you up to your feet.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIzdev17(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-1.jpg');
  // TODO-QSP: dynamic text: Sergey looks at you and says in a stern voice: "<<$pcs_nickname>>, don''t be a t...
  scene.text(`Sergey looks at you and says in a stern voice: "${((s as any).pcs_nickname ?? '')}, don't be a tease. Put your shirt back down."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-2.jpg');
    scene.text('You bite your lip and turn around, showing him your ass while you wipe the kitchen counter. When you turn around to look at him, you see he\'s staring at your ass intently.');
    qspCall(st, 'arousal', 'flash', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-3.jpg');
    scene.text('"It\'s okay, uncle Sergey", you smile at him. "It\'ll be our little secret, you don\'t have to be careful around me."');
    scene.text('When he\'s about to object, you pull up your shirt and show him your rack. "See… just me and you…"');
    qspCall(st, 'arousal', 'flashlite', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-4.jpg');
    scene.text('Then your phone rings, you got a message! You quickly pull your shirt back down and sit down on the kitchen counter to see who it\'s from. Sergey is looking around the kitchen, not really sure where to look now that you\'re no longer putting up a show.');
    scene.text('You see his discomfort (and the way he\'s awkwardly rubbing his groin) and grin to yourself: "Let\'s give him something to look at!"');
    scene.text('You idly run your hand over your crotch and look at him apologetically: "I\'m sorry, uncle Sergey. This will only take a minute…"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-5.jpg');
    scene.text('When you put your phone away Sergey sits up straight again, expecting you to continue your show. You look at him teasingly and take off your shirt, before throwing it at him. You laugh: "Here, I don\'t need this for now. Maybe you could hold onto it for me?"');
    scene.text('You climb onto the kitchen counter again and lean forward, showing off your body.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/za8-6.jpg');
    scene.text('Then you get off the counter and begin to lower your pants, leaving them just below your hips. "I\'ll make you a deal, uncle Sergey: I\'ll do whatever you want, if you come over right now and pull my pants down…" you challenge him. Sergey stands up with a frustrated look on his face and yanks down your pants forcefully, making you yelp. Uh oh… did you push him too hard?');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'Serge_kuh', ((st as any).rand_kuh_sex ?? '')); } },
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

function enterIzn1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
  (s as any).pcs_hairbsh = 0;
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/bj` + (Math.floor(Math.random() * 11) + 1) + '.mp4"></video></center>');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('Sergey roughly strips you, easily overpowering you. He tosses your clothes aside, laughing at your futile attempts to break free.');
  }
  // TODO-QSP: dynamic text: "Why do you keep flaunting your body like you''re some cheap whore, <<$pcs_nickn...
  scene.text(`"Why do you keep flaunting your body like you're some cheap whore, ${((s as any).pcs_nickname ?? '')}? Are you a cheap whore?" Sergey demands. He pressed you against the wall, and has one hand around your throat.`);
  scene.text('"Uncle Sergey, please! I w-" you try to explain, but he interrupts you.');
  scene.text('Angrily, he asks: "Do you think you can just barge into my home, tease me like you\'re doing, and get away with that!?" He spits in your face, making you flinch.');
  scene.text('"No! Uncle Sergey, please!" you try again.');
  // TODO-QSP: dynamic text: He laughs and says, mocking your voice: "''Uncle Sergey, please fuck me like the...
  scene.text(`He laughs and says, mocking your voice: "'Uncle Sergey, please fuck me like the little slut that I am!' That's what you were going to say, was it not? I'm planning to. ${((s as any).pcs_nickname ?? '')}, as long as you behave like a whore in my home, I will do with you whatever I would with any other whore that walks through that door. Are we clear?"`);
  scene.text('"I\'m sorry, uncle Sergey. I\'ll go put some clothes on", you apologize. Sergey doesn\'t let go of you though, not satisfied with your apology. Your heart is pounding now… what does he want from you!?');
  scene.text('"Too late, bitch", he grunts. He undoes his pants and pushes you down, before leading his cock towards your mouth. "If I feel teeth, you\'re going to be fucking sorry."');
  scene.text('Understanding there\'s little you can do to change his mind, you part your lips reluctantly. This is not what you wanted! But… why is this turning you on so much?');
  scene.text('Sergey immediately rams his cock down your throat, and begins to fuck you with no regard for your feelings whatsoever. You cough and sputter loudly whenever he gives you a chance to breathe, which is not very often. He gives you very little respite and continues fucking your throat almost immediately after. Thick tears roll down your cheeks by the time he\'s done with your mouth, and you urgently gasp for breath.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
    scene.text('Sergey roughly pulls you up, and makes you lean against a kitchen counter. "He\'s going to fuck me now!" you giddily think to yourself. Finally! The rough throat fucking he gave you earlier will be worth it.');
    scene.text('He rubs his cock against your wet slit, with a cruel grin on his face. "Beg", he orders.');
    scene.text('"Please…" you whimper, your cheeks burning with shame.');
    scene.text('"Please what, slut? Speak up!" he demands, slapping your ass cheeks hard.');
    scene.text('"Please fuck me! I want you to fuck me!" you cry out in a hurry, between whimpers. When he doesn\'t move, you continue: "Please, uncle Sergey! I need it, please fuck me!"');
    scene.text('He abruptly thrusts his entire length inside you, watching your eager reaction with a grin on his face. He often has girls over that aren\'t really into it, just lying there like a rubber doll waiting for it to be over… you\'re obviously not one of those girls, groaning and begging and moaning eagerly while he begins to fuck you teasingly slowly.');
    scene.text('You\'re no longer in control of your body, completely surrendering yourself to Sergey as long as he keeps this up. Sergey frowns a bit, you\'re not experiencing this as punishment at all!');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).agape ?? 0) < 2) {
      (st as any).agape = 2;
    }
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra` + (Math.floor(Math.random() * 3) + 5) + '.mp4"></video></center>');
    scene.text('Sergey orders you: "Stand before me with your hands behind your back, and look at the floor!"');
    scene.text('You do as he says, not daring to look back at him. With your eyes cast down, you stand before him obediently.');
    scene.text('Suddenly, he slaps your left boob hard, with the palm of his hand. "Ow! That hurts!" you yell, and try to reach out to massage the pain out of it.');
    scene.text('"I said hands behind your back!" Sergey demands, slapping your hand away. "Eyes on the floor!"');
    scene.text('"I have all day, slut! We\'ll repeat this until you get it right! Hands behind your back!" he growls, and slaps your hand away once more.');
    scene.text('He repeats this three more times. When he realizes you\'re no longer trying to disobey him, he nods: "That\'s better, slut. Turn around."');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      scene.text('Sergey notices your butt plug and pulls it out of you in one quick motion, tossing it aside carelessly.');
    }
    scene.text('When you turn your back to him, you feel his raging erection poking against the small of your back. He takes it in his hand and guides it towards your tight anus, and begins to work the head inside your asshole. "You handle pain well, slut", Sergey groans. "This should be easy for you."');
    scene.text('You cry out when the head of his cock passes your sphincter, and Sergey pushes more and more of his length inside you. You stand still, biting through the pain while Sergey begins to fuck your ass, holding you in his strong arms the whole time. He laughs at your loud cries, and laughs even harder when they slowly turn into moans of pleasure. You\'re no longer resisting now, enduring and even enjoying his rough treatment every time he slams his cock into your by now stretched butthole.');
    qspCall(st, 'arousal', 'anal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/foto.mp4');
    // TODO-QSP: dynamic text: "Not bad, <<$pcs_nickname>>. You sure you''re no whore?" Sergey laughs. He pulls...
    scene.text(`"Not bad, ${((st as any).pcs_nickname ?? '')}. You sure you're no whore?" Sergey laughs. He pulls out and tells you: "Stay there. I'll be right back."`);
    scene.text('Sergey leaves, and comes back carrying your stuff. He empties your pockets until he finds your phone: "Excellent, it has a camera. Let\'s get something to remember this moment by."');
    scene.text('He fidgets around on your phone for a little while, and then points it at you. "Suck", he orders, swinging his cock in front of your face.');
    scene.text('It\'s been in your ass last, and you wince a bit when you close your lips around it. Still, it\'s not that bad and soon you\'re eagerly sucking Sergey off, while he films you with your own phone.');
    // TODO-QSP: dynamic text: "That''s it, <<$pcs_nickname>>… all the way!" he grunts, as he makes you deepthr...
    scene.text(`"That's it, ${((st as any).pcs_nickname ?? '')}… all the way!" he grunts, as he makes you deepthroat him yet again. Fortunately you're used to that by now, and you flutter your eye lashes at the camera while he bottoms out in your mouth.`);
    scene.text('Sergey nods happily and fidgets around on your phone a little more, leaving you to gently suck him off for a moment. "And… there!" he grins, and you hear a phone in the other end of the room beep. "Just sent it to myself", he explains. "For later."');
    // TODO-QSP: dynamic text: Just as you were about to ask what he means by that, he puts your phone down. "Y...
    scene.text(`Just as you were about to ask what he means by that, he puts your phone down. "You've been a good slut, ${((st as any).pcs_nickname ?? '')}, but I have to go soon. Let's wrap this up", he says as he grabs a clump of your hair. He fucks your throat roughly again, looking to get himself off.`);
    qspCall(st, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/end1.mp4');
    scene.text('Then, before you know it, it\'s over. With a loud groan, Sergey shoots his load all over your face, leaving you looking like a complete mess.');
    scene.text('"And what do you say then, slut?" Sergey asks expectantly, as he towers over your slumped figure.');
    scene.text('"Thank you, uncle Sergey", you mutter softly, knowing he\'s not going to let it go.');
    // TODO-QSP: dynamic text: Sergey scoffs, not showing any compassion: "Don''t give me that tone. I warned y...
    scene.text(`Sergey scoffs, not showing any compassion: "Don't give me that tone. I warned you, ${((st as any).pcs_nickname ?? '')}… if you act like a whore around me, I'll treat you like one. You should freshen up before you head out, you look horrible."`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterIzn2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
  (s as any).pcs_hairbsh = 0;
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/bj` + (Math.floor(Math.random() * 3) + 1) + '.mp4"></video></center>');
  // TODO-QSP: dynamic text: "You''re such a slut, <<$pcs_nickname>>… you''re not even wearing a bra! Everyon...
  scene.text(`"You're such a slut, ${((s as any).pcs_nickname ?? '')}… you're not even wearing a bra! Everyone can see your nipples poking through your clothes!" Sergey scolds you, making you blush and lower your head in shame.`);
  scene.text('"How big are those tits of yours, anyway?" he asks.');
  // TODO-QSP: dynamic text: "<<$titsize>>, uncle Sergey", you say softly.
  scene.text(`"${((s as any).titsize ?? '')}, uncle Sergey", you say softly.`);
  scene.text('"Speak up, girl! Answer the question" he insists, pretending he didn\'t hear you. You loudly repeat your answer, and Sergey grins: "Actually… why don\'t we have a little chat about you? Sit down."');
  scene.text('When you sit down at the table, Sergey begins to ask you all sorts of questions. Intimate questions! How long ago you\'ve lost your virginity, how many partners you\'ve had, your favourite position, whether you like anal sex, how often you masturbate…');
  // TODO-QSP: dynamic text: You answer all his questions truthfully, without exaggerating. Sergey likes your...
  scene.text(`You answer all his questions truthfully, without exaggerating. Sergey likes your answers and continues asking more and more. "Do you like sucking dick, ${((s as any).pcs_nickname ?? '')}?"`);
  scene.text('All these questions have really made you think about your sexuality… and you feel very turned on right now! Your pussy is wet, you feel a tingle in your lower abdomen, and your nipples are rock-hard, poking through your clothes again.');
  scene.text('Sergey notices you fidgeting in your chair and laughs: "You\'re thinking about cock right now, aren\'t you? Here, suck."');
  scene.text('He pulls you down to the ground in front of him, and exposes his fully erect penis. Deciding you don\'t need to get used to it slowly, he begins to fuck your throat right away.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'large');
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra` + (Math.floor(Math.random() * 5) + 1) + '.mp4"></video></center>');
    scene.text('"But I\'m being selfish, I guess you want to orgasm too?" he grins. Without waiting for an answer he moves his hand between your legs, trying to find your clitoris. You\'re still a bit ashamed of this situation, and squeeze your thighs together, making it more difficult for him.');
    scene.text('A few minutes later he finds it anyway, and you immediately feel a surge through your body once his fingers finds your swollen clit. He twirls his finger across the surface, making you moan with pleasure - if he keeps that up, you\'ll orgasm in no time!');
    scene.text('Mad with lust, you eagerly suck on his cock while Sergey fingers you to an orgasm. You moan around his cock, which he refuses to take out of your mouth, and feel your whole body trembling underneath his.');
    scene.text('"Get up, slut", Sergey orders you, barely giving you any time to recover. He pulls you up and makes you stand leaning on the countertop, and abruptly penetrates your vagina. He fucks you furiously from behind, forcing his hard cock all the way inside you. You\'re still very sensitive from your orgasm, and beg him: "Aaah, uncle Sergey! Slowly, please! Aaaahh!"');
    scene.text('His balls are slapping against your clit now, and the kitchen is filled with the obscene squishing and sopping sounds your vagina makes when Sergey enters you over and over.');
    scene.text('Then he stops, and rubs his cock against your puckered asshole.');
    (st as any).orgasm_or = 'yes';
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      scene.text('Or at least, he tries to. "What\'s this?" he asked, a bit amazed… he was not expecting you to be wearing a butt plug! He grins as he pulls it out, and holds it in front of your mouth: "Lick it clean while I stuff your ass with something else, slut."');
    }
    scene.text('He slips one finger inside your ass, and then another. And then another! With three fingers inside you, he begins to move his hand.');
    scene.text('You groan loudly… you\'re going to cum again! Your moans turn into screams, and your body spasms as your second orgasm hits you within ten minutes of the first.');
    // TODO-QSP: dynamic text: "From anal stimulation alone, <<$pcs_nickname>>!?" Sergey asks, with a hint of a...
    scene.text(`"From anal stimulation alone, ${((st as any).pcs_nickname ?? '')}!?" Sergey asks, with a hint of admiration in his voice. "That's two for you… it's time you do something for me in return!"`);
    scene.text('He leads his penis to your sphincter, and rubs the head against it.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'sub', 'rough');
    qspCall(st, 'arousal', 'vaginal', (-10), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).agape ?? 0) < 1) {
      (st as any).agape = 1;
    }
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/bj` + (Math.floor(Math.random() * 8) + 4) + '.mp4"></video></center>');
    scene.text('"Actually, I\'m in a good mood", Sergey says. "You\'re being such a good little slut for me today, I\'ll let you lube up my cock before I fuck your ass. With your mouth, of course."');
    scene.text('You smile at him thankfully and quickly drop to your knees before he changes his mind. That will actually help a lot! You eagerly take his cock in your mouth and begin to suck and lick it eagerly.');
    scene.text('"You\'ll never get enough saliva like that", he mutters. "Here, I\'ll help."');
    scene.text('He puts his hands on your head and forces his dick all the way down your throat in one firm thrust. He then holds your head firmly in place as he fucks your throat brutally, giving you a very difficult time suppressing your gag reflex. Your help is no longer required, he\'s only focused on fucking your throat as rough and deep as possible.');
    scene.text('One thing you can\'t deny though: it\'s making you produce a lot of saliva. Thick strands of it are running down your chin and dripping onto your chest, even as he is still fucking your throat. When he pulls out, his entire cock is covered in a thick layer of saliva, and a long strand is connecting him to your lips.');
    scene.text('Sergey laughs as he sees your exhausted face: "You\'re welcome. Now turn around."');
    scene.text('He is too impatient to actually wait for you to get up, and pulls you up and gives you a ringing slap on your ass cheek. He spanks you several more times, and then suddenly thrusts his hips forward, pushing the head of his slippery cock past your sphincter. It doesn\'t actually hurt as much as you thought it would.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/resid...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra` + (Math.floor(Math.random() * 3) + 6) + '.mp4"></video></center>');
    scene.text('Feeling his cock in your ass, you can\'t resist the urge to masturbate. Sergey\'s rough pounding makes it difficult for you to hold yourself in place and masturbate at the same time, but with some difficulty you manage and let your fingers dart over your clit. Your pussy and clit feel very slippery, probably because of your saliva from the extensive deepthroating earlier.');
    scene.text('You feel Sergey\'s cock rubbing your fingertips several times, when he slips out of your ass. He always immediately slides it back in, making you moan in delight.');
    scene.text('"Uncle Sergey, it feels so good! Fuck me! Fuck me harder!" you encourage him, while you feel yet another orgasm bubbling up deep inside of you.');
    scene.text('You close your eyes and moan like a whore, much to Sergey\'s delight. He rewards you by fucking your ass with long, firm thrusts regularly, while you finger yourself. Soon you can\'t hold back any more and your vagina and anus rhythmically contract while you\'re experiencing your third orgasm for this session. You groan wildly when you feel a warm liquid spread inside your ass; Sergey couldn\'t take it any more either and came right inside your used ass.');
    scene.text('Sergey sighs happily as he pulls out of you, and wipes his member on your ass cheeks before letting him self crash down onto the couch.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'clit_finger', 10, 'sub');
    qspCall(st, 'arousal', 'anal', (-10), 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (5);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    }
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/end1.mp4');
    scene.text('When you move to sit down next to him, he stops you: "You\'re not sitting on my couch with your cum-filled ass. Sit on the ground."');
    scene.text('You nod understandingly, you wouldn\'t want that either if it were your couch. Sergey smiles at you benevolently as he sits quietly on the couch, admiring your pussy and anus that are still glistening from his seed, while your face is still covered in saliva from earlier.');
    // TODO-QSP: dynamic text: Sergey stands up to caress your face, and slaps you playfully. He then offers yo...
    scene.text(`Sergey stands up to caress your face, and slaps you playfully. He then offers you a glass of vodka: "Here, ${((st as any).pcs_nickname ?? '')}… you were great! Drink this and then go wash up, you uhh… you have a little something on your face."`);
    scene.text('He points at his chin demonstratively as he says it, and you both laugh. You drink the vodka in one large gulp, and you feel a shiver run down your spine as you swallow it. "Thank you, uncle Sergey… I can\'t wait to come help you in the kitchen again", you say with a meek smile and head towards the bathroom.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex1-1.jpg');
  // TODO-QSP: dynamic text: Sergey moves up to you and starts fondling your boobs, whispering how sexy and g...
  scene.text(`Sergey moves up to you and starts fondling your boobs, whispering how sexy and good looking you are. He's crazy about your ${((s as any).titsize ?? '')} boobs!`);
  scene.text('To prove it, he gently kneads your boobs one by one, and squeezes your nipples. He even leans over and takes them in his mouth, where they steadily harden. He flicks his tongue over your fully erect nipples, making you moan softly. You\'re beginning to feel seriously turned on now, and know you\'re quite wet between your legs.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex1-2.jpg');
    scene.text('He quickly undresses, and you do the same. His impressive cock is already mostly erect when he takes off his pants, and you quickly drop to your knees in front of it. His precum is a bit salty to the taste, and you rub the head of his cock all across your lips before licking the head of his cock completely clean.');
    scene.text('You take it slow on purpose, wanting to savour the moment… and also wanting to tease Sergey. Teasing him is so much fun!');
    scene.text('To your surprise he\'s very patient, and just groans softly when you refuse to take his cock in your mouth directly. Unable to resist, you\'re the first to cave and part your lips to take him in. Sergey doesn\'t say anything, but when you look up you see he has a satisfied smile on his lips.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex1-3.jpg');
    scene.text('After a while, you let go of his dick and smile: "I want to feel your cock inside my cunny now, uncle Sergey."');
    scene.text('For a moment it looks like he\'s about to protest, but he doesn\'t say anything. You mount him and carefully maneuver your pussy over his cock, slowly skewering yourself onto his stiff rod.');
    scene.text('You lean over and kiss him eagerly while you begin to grind your hips against his, and Sergey plays with your nipples again.');
    scene.text('You\'re quite sensitive in this position. When you\'re in complete control of riding a man\'s penis, you can orgasm without ever touching your clitoris! Meanwhile Sergey\'s hands caress you all over your body, they\'re everywhere!');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex1-4.jpg');
    scene.text('You\'re very close to your orgasm when Sergey suddenly interrupts you. He wraps his arms around you and lifts you up, putting you down before him. "Uncle Sergey, I was just about to-" you complain, but he puts his finger over your lips and whispers: "Shh… I know. You\'ll get there."');
    scene.text('He moves you onto a dining chair and makes you lean over on the dining table, sliding his cock back inside your wet slit. He gently stimulates your anus at the same time, and you feel your interrupted orgasm from before bubbling up again.');
    scene.text('"Uncle Sergey, please… fuck me! Tease my ass! Pinch my nipples! Fill me up with your cum!" you beg, and cry out when you orgasm. Your pussy contracts tightly around his penis, and he chuckles: "Told you you\'d get there!"');
    scene.text('You ride out the rest of your orgasm in silence, feeling hazy for a while. When you come back to your senses you realize - uncle Sergey is still fucking your pussy! You begin to move with him, grinding your hips eagerly against his to reward him for making you feel so great. Almost immediately he has to pull out, and shoots his load onto your face. You greedily open your mouth to catch some of it, but he deftly avoids your mouth.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex2-1.jpg');
  scene.text('You see Sergey hesitate, and decide to take matters into your own hands.');
  scene.text('You drop to your knees before him and smile: "Let me help you, uncle Sergey!" and begin to take off his clothes, one by one. You coo happily when you see the impressive bulge in his briefs, and eagerly close your fingers around his hard member when it springs free.');
  // TODO-QSP: dynamic text: With you teasing him by only placing soft kisses on his cock, it doesn''t take l...
  scene.text(`With you teasing him by only placing soft kisses on his cock, it doesn't take long for Sergey to groan: "I want you, ${((s as any).pcs_nickname ?? '')}! If you're only going to tease me like that, I'll go mad!"`);
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex2-2.jpg');
    scene.text('"I\'m sorry, uncle Sergey… but your dick is just so beautiful!" you whisper at him. "It\'s like it was made to please women! I\'m so lucky!"');
    // TODO-QSP: dynamic text: Sergey relaxes when you open your mouth wide and close your <<$pc_desc[''lips'']...
    scene.text(`Sergey relaxes when you open your mouth wide and close your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around the head of his penis. You take your time, but skillfully suck his dick to about half its length. Then a few minutes later, the whole of it is in your mouth!`);
    scene.text('You look up at Sergey\'s face intently while you try out different techniques, doing your best to make him feel wonderful. Oral sex can be so much fun! You especially remember his impressed look when you took him as deep as possible down your throat, and were licking the side of his balls with your tongue out of your mouth.');
    scene.text('He put his hand behind your head a long time ago, but never forces you to do anything; everything you do today is because you want to please him. Even when you deepthroat him repeatedly… it\'s because you want to. You\'re such a slut sometimes, and you love it!');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex2-3.jpg');
    scene.text('When Sergey\'s breathing grows heavier, you frown… you don\'t want it to be over yet! You reluctantly take his cock out of your mouth and smile sweetly at him: "Are you okay, uncle Sergey? Do you need to rest for a moment?"');
    // TODO-QSP: dynamic text: Sergey laughs: "Heh… you really want it badly, don''t you <<$pcs_nickname>>?"
    scene.text(`Sergey laughs: "Heh… you really want it badly, don't you ${((st as any).pcs_nickname ?? '')}?"`);
    scene.text('He walks over to a chair and nods at his cock. You could sit in his lap! You quickly skip over to him and run your finger down the length of his stiff rod, before turning your ass to him and carefully guiding your pussy to his cock. You lower yourself onto his lap, with his dick firmly lodged inside you.');
    scene.text('You begin by barely moving your hips up and down, gently bobbing your buttocks on his lap. In your eagerness you begin to move your hips up and down more and more, and he helps you by putting your feet on the chair. Before you know it, you\'re railing yourself on the full length of his cock, moaning lewdly every time he bottoms out in you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex2-4.jpg');
    scene.text('This time it\'s Sergey who decides to slow things down a notch, and he firmly puts his hands on your hips to tell you to stop. He lifts you up in his strong arms and places you on the kitchen table, sliding his cock back inside you. You place your feet on his shoulders and beg him: "Uncle Sergey, please fuck me! Fuck me hard!"');
    scene.text('Your pussy is sopping wet by now, and all you want right now is for it to be filled by a man. By this man.');
    scene.text('Sergey grins happily and gives you what you want, fucking you harder and faster. He\'s driving his full length inside you with every stroke, making his balls slap against your buttocks. You rock your hips enticingly and try to match his thrusts, trying to coax him to cum inside you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex2-5.jpg');
    scene.text('Your mouth is wide open, producing lewd moans and cries while Sergey pleases you.');
    scene.text('Sergey groans suddenly and shoots his sperm deep inside you, making you feel quiver with delight. But… you didn\'t get to cum yet!');
    // TODO-QSP: dynamic text: He lets your eager pussy milk all the cum out of him, and then pulls out of you ...
    scene.text(`He lets your eager pussy milk all the cum out of him, and then pulls out of you with a satisfied sigh. "That was great, ${((st as any).pcs_nickname ?? '')}! Now, I believe I owe you something…"`);
    scene.text('He kisses you gently on your lips, while one hand finds his way to your breasts while the other fondles your pussy, trying to find your clitoris. He ends up rubbing out some of his cum over your clit and rubs you to an explosive orgasm, kissing you passionately to drown out your cries.');
    scene.text('When your orgasm finally subsides, you quiet down and look at him shyly, feeling just a tiny bit ashamed. That was wrong to do, but it felt so right!');
    scene.text('You feel a bit confused though, you never would\'ve thought he could be such a caring man! Maybe you should go and help him out in the kitchen more often…');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterSex3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A112');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A112'] = 1;
  (s as any).serge_countsex = ((s as any).serge_countsex ?? 0) + (1);
  qspCall(s, 'mood', 'raise', 'tiny');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-1.jpg');
  // TODO-QSP: dynamic text: "You seem tense, uncle Sergey. Is there something I can do for you?" you ask inn...
  scene.text(`"You seem tense, uncle Sergey. Is there something I can do for you?" you ask innocently, bringing your fingers to your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
  scene.text('When Sergey sees you sucking on your fingers he laughs: "Hah… yes there is, you slut!"');
  scene.text('Ignoring the fact that he called you a slut, you sweetly continue: "Oh, and what would that be?"');
  scene.text('Sergey gropes your tits with one hand and slides the other hand under your clothes to finger you. He grunts: "You know perfectly well what I mean. Stop teasing me and get to it."');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-2.jpg');
    scene.text('You run your hand over his groin with a smile on your lips, but decide not to tease him any further and squat down.');
    scene.text('When you lower his pants and wrap your fingers around his penis, you\'re impressed at how rigid it feels. The exposed purple head is glistening with precum, and Sergey grins when he sees your admiring look: "Do you like what you see?"');
    scene.text('Wordlessly you close your lips around the head and begin to lick it with your tongue. Why tell him when you can show him?');
    scene.text('He thrusts his cock all the way down your throat with a proud grin on his face, just because he can. After a few seconds he pulls back to let you service him the way you want to, and you eagerly suck him off… you don\'t want him to take control again, he\'d probably keep fucking your throat like that!');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-3.jpg');
    scene.text('While you suck Sergey\'s cock, you fondle yourself: rubbing your fingers over your engorged labia, fondling your clitoris every so often, fucking yourself with your fingers…');
    scene.text('You love the way your pussy feels, but you bet Sergey could make you feel even better. Your juices are slowly running down your leg, that\'s how wet you are. You feel like a bitch in heat!');
    scene.text('"Uncle Sergey, fuck me!" you tell him. It\'s more of an order than a question, but Sergey seems happy to oblige and turns you around, showing his cock inside you in one firm thrust.');
    scene.text('He\'s satisfied enough to just fuck you for a while, but you notice his attention is going to your asshole more and more.');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      // TODO-QSP: dynamic text: Sergey laughs when he finds your butt plug and says: "Wow, <<$pcs_nickname>>! I ...
      scene.text(`Sergey laughs when he finds your butt plug and says: "Wow, ${((st as any).pcs_nickname ?? '')}! I never would've thought… good for you, though. Let's get this out of the way for now."`);
      scene.text('He carefully pulls your butt plug out of your ass, and plunges his fingers in to test how loose your ass is. "Very nice. That should make the next step easier. Will save some time, too… no need to take it slow!"');
    }
    scene.text('First he gently rubs his fingers against your tight sphincter while he fucks you, but soon enough he pulls out of you and spits on it before he tries to force two, and then three fingers in. He thrusts his cock back inside your pussy, gently moving his hips while both of your holes are filled; your pussy with his dick, and your ass with his fingers.');
    scene.text('You have to admit: that actually feels very nice! Knowing he\'s going to want to fuck your ass soon, you moan: "Uncle Sergey, let me suck you off again, please!"');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'anal_finger', 5, 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-4.jpg');
    scene.text('Sergey hesitates for a second, unwilling to let the prospect of having your ass go. Then he shrugs and pulls out of you, looking at you expectantly.');
    scene.text('Not willing to let this chance go, you quickly squat down again and take his cock in your mouth. You enjoy the taste your own juices on it, and run your tongue across his length, trying to lap it all up. Sergey gets impatient though; he was expecting to fuck your ass in a second, and doesn\'t want to let you off the hook this easily!');
    // TODO-QSP: dynamic text: Without saying a word, he grabs you by the hair and thrusts his cock down your t...
    scene.text(`Without saying a word, he grabs you by the hair and thrusts his cock down your throat repeatedly, nearly making you gag with every stroke. "If you don't want me to fuck your ass, you're going to have to earn it! Is that what you want, ${((st as any).pcs_nickname ?? '')}?"`);
    scene.text('As he asks that, he makes you take his full length down your throat, making it impossible for you to breathe. After about fifteen seconds, he still hasn\'t pulled back! You anxiously nod your head yes, assuming that is what he wants to hear from you.');
    // TODO-QSP: dynamic text: Sergey smiles at you benevolently and says: "I knew you would say that. Just a w...
    scene.text(`Sergey smiles at you benevolently and says: "I knew you would say that. Just a while longer, ${((st as any).pcs_nickname ?? '')}… I'll get to your ass in a minute!"`);
    scene.text('He continues to fuck your throat for another minute or two, as if you\'re nothing more than a sex doll. By the time he\'s satisfied, thick strands of your saliva run down his shaft and down your chin, dripping onto the floor as you gasp for breath');
    qspCall(st, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).agape ?? 0) < 1) {
      (st as any).agape = 1;
    }
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-5.jpg');
    scene.text('He makes you lean against the kitchen counter again, and guides his cock straight to your anus. When he penetrates you, you let out a painful groan: your deepthroating lubed him up nicely, but it\'s still so big!');
    scene.text('"Slowly, please!" you beg him, hoping he\'ll have mercy on you. To your surprise he does, and patiently waits until you get used to the sensation.');
    scene.text('Once he notices the worst of your discomfort is over, he begins to thrust his length inside your ass. He can tell it\'s still a tad uncomfortable for you, but no longer cares; it\'s all about his pleasure now.');
    qspCall(st, 'arousal', 'anal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-6.jpg');
    scene.text('Several minutes later, he finally pulls out of you and admires your ass. Your anus is gaping lewdly, and he slaps your buttocks hard while you lie on the kitchen counter. Your discomfort is mostly gone, and you moan eagerly when he thrusts back in. He fucks you in a slow but steady pace, and you expect he can keep this up for a long time.');
    scene.text('"You like being treated like a whore, don\'t you?" Sergey laughs. He keeps fucking you the whole time, and all you can do is groan contently in response.');
    scene.text('Then he pulls out of you entirely and insists: "Go on, beg. I\'ll fuck you again if you ask me nicely."');
    qspCall(st, 'arousal', 'anal', 10, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0), 1);
    (st as any).pcs_hairbsh = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/sex3-7.jpg');
    scene.text('"Uncle Sergey, please… fuck me?" you mutter. Why is he making you beg? Doesn\'t he want this just as much?');
    scene.text('"Why?" he asks intently. He rubs several fingers over your drenched pussy, toying with your clit while he waits for an answer. A smile escapes his lips when he notices you squirm with delight.');
    scene.text('"Please! I need your cum! Please fuck me!" you beg him, louder this time.');
    // TODO-QSP: dynamic text: He rubs his hard cock against your pussy lips now and asks: "Do you want me to f...
    scene.text(`He rubs his hard cock against your pussy lips now and asks: "Do you want me to fill up your pussy, ${((st as any).pcs_nickname ?? '')}?"`);
    scene.text('Without waiting for an answer, he rams his dick inside your wet snatch and begins to fuck it furiously, grunting: "You can be my little cum dump any time…"');
    scene.text('You were already close, and his rough touch pushes your over the edge! Your hips shiver and shake while you feel your orgasm exploding inside you, so intensely that you nearly black out for a second.');
    scene.text('Sergey slaps your ass a few times and continues to fuck you for another minute or so, before he too reaches his point of no return and deposits his load deep inside you. You whimper softly when you feel the hot jets of his sperm in you, and slowly feel it dribbling out of you when he pulls his dick out.');
    scene.text('"Good slut…" he sighs happily.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'vasilykitchen'] },
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

function enterOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 70) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    (s as any).orgasm_or = 'custom';
    (s as any).orgasm_txt = 'The abundance of surging emotions you with a loud groan finished.';
  }
  // TODO-QSP: end
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
    case 'izdev1':
      enterIzdev1(s, scene);
      break;
    case 'izdev2':
      enterIzdev2(s, scene);
      break;
    case 'izdev3':
      enterIzdev3(s, scene);
      break;
    case 'izdev4':
      enterIzdev4(s, scene);
      break;
    case 'izdev5':
      enterIzdev5(s, scene);
      break;
    case 'izdev6':
      enterIzdev6(s, scene);
      break;
    case 'izdev7':
      enterIzdev7(s, scene);
      break;
    case 'izdev8':
      enterIzdev8(s, scene);
      break;
    case 'izdev9':
      enterIzdev9(s, scene);
      break;
    case 'izdev10':
      enterIzdev10(s, scene);
      break;
    case 'izdev11':
      enterIzdev11(s, scene);
      break;
    case 'izdev12':
      enterIzdev12(s, scene);
      break;
    case 'izdev13':
      enterIzdev13(s, scene);
      break;
    case 'izdev14':
      enterIzdev14(s, scene);
      break;
    case 'izdev15':
      enterIzdev15(s, scene);
      break;
    case 'izdev16':
      enterIzdev16(s, scene);
      break;
    case 'izdev17':
      enterIzdev17(s, scene);
      break;
    case 'izn1':
      enterIzn1(s, scene);
      break;
    case 'izn2':
      enterIzn2(s, scene);
      break;
    case 'sex1':
      enterSex1(s, scene);
      break;
    case 'sex2':
      enterSex2(s, scene);
      break;
    case 'sex3':
      enterSex3(s, scene);
      break;
    case 'orgasm':
      enterOrgasm(s, scene);
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
