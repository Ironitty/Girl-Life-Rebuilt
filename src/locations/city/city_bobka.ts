import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInject(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).drugVars['heroin_whore'] = ((s as any).drugVars['heroin_whore'] ?? 0) + (1);
  qspCall(s, 'drugs', 'heroin');
  if (((s as any).drugVars ?? 0)?.['cocaine_addict'] !== 0) {
  }
  scene.img('images/locations/city/residential/den/crackwhore.jpg');
  // TODO-QSP: dynamic text: You desperately grab the syringe and inject yourself<<$tempval>>.
  scene.text(`You desperately grab the syringe and inject yourself${((s as any).tempval ?? 0)}.`);
  scene.text('Meanwhile, Bobka is looking down at you haughtily, shaking his head while laughing softly. "Another happy customer. Just like you\'re going to make a lot of customers happy one day…"');
  if ((!((s as any).HaveMetBobka ?? 0))) {
    // TODO-QSP: dynamic text: "By the way, I'm Bobka. Who are you?"<br>The drug is quickly clouding your mind,...
    scene.text(`"By the way, I'm Bobka. Who are you?"<br>The drug is quickly clouding your mind, and you barely register him talking. "${((s as any).pcs_nickname ?? 0)}…" you softly mutter.`);
    (s as any).HaveMetBobka = 1;
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterRimming2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/bobka/sex/rimming2.jpg');
  scene.text('You bite your lip and look at him pleadingly, hoping he\'ll change his mind. He doesn\'t though, and you crawl over to him and reluctantly stick out your tongue, brushing his anus with it. It smells and tastes horrible!');
  scene.text('It nearly makes you throw up, but through sheer willpower, you persevere and lick his asshole.');
  scene.text('"Are you sleeping or something? Put some effort into it, whore!" he orders, reinforcing it by slapping you in the face. You look at him fearfully, tears escaping your eyes.');
  scene.text('You lick his ass more enthusiastically, licking his sweaty balls every now and then.');
  scene.text('Bobka laughs. "That\'s better. You sluts always need some encouragement!"');
  scene.text('He forces your face onto his ass, and you do your best to please him with your tongue. The mere thought of it sickens you, but at the same time there\'s nothing you can do to stop yourself now…');
  scene.actions([
    { label: 'Put your tongue to work', goto: ['city_bobka', 'rimming4'] },
  ]);
  scene.build();
}

function enterRimming3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/bobka/sex/rimming3.jpg');
  scene.text('You bite your lip but nod understandingly, knowing it\'s useless to try and argue with him. You crawl over to him and lick his ass eagerly, not skipping his balls either. The nasty taste and smell of it makes you wince, but you continue to service him as he told you.');
  scene.text('Bobka laughs. "That\'s it, whore! I knew you were a keeper! You love this, don\'t you?"');
  scene.text('He forces your face against his ass. "Time to really get your tongue in there where it belongs! And put some effort into it or else…" he smirks.');
  scene.actions([
    { label: 'Put your tongue to work', goto: ['city_bobka', 'rimming4'] },
  ]);
  scene.build();
}

function enterRimming4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).SUB = ((s as any).SUB ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/bobka/sex/rimming4.mp4');
  scene.text('After a few minutes, the thought of thrusting your tongue inside his hairy asshole doesn\'t bother you quite as much any more. If that\'s what it takes for you to get your next fix…');
  scene.text('You try to ignore the disgusting taste on your tongue when you press your tongue against his spincter, pushing it inside him as far as it will go.');
  scene.text('Bobka lets out a satisfied moan. "Oh yeah, that\'s it! I want you to clean me thoroughly. We haven\'t had hot water in some time, so I haven\'t had a chance to shower!"');
  scene.text('You feel nauseated from the sight, smell and mere thought of what he\'s making you do. The thought of having to do this to get drugs brings tears to your eyes, and you do your best to think of other things as your tongue prods his anus over and over.');
  scene.text('Bobka\'s cock stands fully erect now and he lazily jerks off as you fuck his ass with your tongue. He grins when he sees your pleading look. "Soon, slut. Keep licking!"');
  scene.actions([
    { label: 'Continue', goto: ['city_bobka', 'rimming5'] },
  ]);
  scene.build();
}

function enterRimming5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 12;
  (s as any).sexvolume = 5;
  qspCall(s, 'cum_manage', '');
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 11;
  (s as any).sexvolume = 35;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/bobka/sex/rimming5.jpg');
  scene.text('Bobka finally lets out a groan and you feel a warm gob of his cum landing on your forehead.');
  scene.text('"Yeah, that\'s it! Keep licking, whore!" he laughs, thoroughly enjoying your humiliated position as he squeezes the last drops of cum out.');
  scene.text('He scolds you when you slowly pull back. "Aren\'t you forgetting something, slut?" he asks as he waves his softening cock in front of your face.');
  scene.text('With a deep sigh, you take his flaccid penis in your mouth and lick it clean. After spending so much time around his anus, the taste of his cum is almost pleasant in comparison.');
  // TODO-QSP: dynamic text: He scoffs when he sees the hopeful look in your eyes. "That was… disappointing, ...
  scene.text(`He scoffs when he sees the hopeful look in your eyes. "That was… disappointing, ${((s as any).pcs_nickname ?? 0)}. Show some more enthusiasm next time! Remember that heroin whores can't afford to be squeamish."`);
  scene.text('While he looks hesitant for a while, he eventually he hands you a syringe.');
  scene.actions([
    { label: 'Inject yourself with the drugs ', goto: ['city_bobka', 'inject'] },
  ]);
  scene.build();
}

function enterPeeface(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  scene.img('images/characters/city/bobka/sex/peeface.jpg');
  scene.text('Bobka releases his flaccid penis and unleashes a warm stream of urine almost immediately. He shouts angrily when you wince and close your eyes.');
  scene.text('"Don\'t turn away! Open your eyes and look at me, slut! Right now!"');
  scene.actions([
    { label: 'Look into his eyes', goto: ['city_bobka', 'peeface2'] },
  ]);
  scene.build();
}

function enterPeeface2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  scene.img('images/characters/city/bobka/sex/peeface2.jpg');
  scene.text('You open your eyes and look at him obediently, keeping your face up so the urine at least won\'t splash up your nose. His urine smells horrible and slowly drips down your body, forming a puddle underneath you. Your mind is going through a desperate struggle as you sit there; on the one hand you feel terrible for demeaning yourself so much, but on the other hand you\'re happily anticipating your next high.');
  scene.text('When you wipe your eyes clear with the back of your trembling hands, Bobka smiles meanly.');
  scene.actions([
    { label: 'Ask for the dose', goto: ['city_bobka', 'peeface3'] },
  ]);
  scene.build();
}

function enterPeeface3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/bobka/sex/peeface3.jpg');
  scene.text('Bobka gets closer to you and shakes the last drops off his penis before he wipes it on your hair.');
  scene.text('"Did you like your shower? It seems just right for the whore that you are…" he smiles serenely, seeing the defeated look in your eyes.');
  scene.text('He knows he\'s very close to breaking you and offers you the syringe without playing any games.');
  scene.actions([
    { label: 'Grab the syringe', goto: ['city_bobka', 'peewhore'] },
  ]);
  scene.build();
}

function enterPeeswallow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  qspCall(s, 'money', 'earn', 100);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  scene.img('images/characters/city/bobka/sex/peeswallow.jpg');
  scene.text('As soon as you open your mouth, a torrent of Bobka\'s urine enters your mouth. You nearly choke and cough from the horrible taste, and grimace from the nasty smell that fills your nostrils.');
  scene.actions([
    { label: 'Cough uncontrollably', goto: ['city_bobka', 'peeswallow2'] },
  ]);
  scene.build();
}

function enterPeeswallow2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  scene.img('images/characters/city/bobka/sex/peeswallow2.mp4');
  scene.text('Bobka interrupts his stream until you\'re done coughing and have your mouth open again. Your mouth fills up quickly with his nasty liquid and you carefully try to swallow some to make space.');
  scene.text('You barely manage to suppress your gag reflex and attempt to swallow it as it flows, but it\'s too much. His urine dribbles down your chin and out of the corners of your mouth.');
  scene.text('"Swallow it, whore! Swallow it all or you\'re not getting anything!" Bobka barks loudly.');
  scene.text('You throw your head back and open your mouth as far as you can, letting the urine flow directly down your throat. Your stomach fills quickly and you feel a bit bloated when the stream finally slows down.');
  scene.actions([
    { label: 'Swallow the last drops', goto: ['city_bobka', 'peeswallow3'] },
  ]);
  scene.build();
}

function enterPeeswallow3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  scene.img('images/characters/city/bobka/sex/peeswallow3.jpg');
  scene.text('Bobka steps a bit closer to you and puts the tip of his cock directly onto your lower lip and makes you close your mouth, forcing you to suck the last drops out of him directly.');
  scene.actions([
    { label: 'Lick his cock clean', goto: ['city_bobka', 'peeswallow4'] },
  ]);
  scene.build();
}

function enterPeeswallow4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation');
  qspCall(s, 'arousal', 'end');
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  scene.img('images/characters/city/bobka/sex/peeswallow4.jpg');
  scene.text('You obediently suck on his cock, no longer caring about the horrible taste.');
  scene.text('While you try not to think about what you just did to earn it, you extend your trembling hand.');
  // TODO-QSP: dynamic text: Bobka laughs as he offers you a syringe and the <<$func('money', 'string_profit'...
  scene.text(`Bobka laughs as he offers you a syringe and the ${qspFunc(s, 'money', 'string_profit', 100)} he promised you. "I think you may have found your calling! This might be a decent career for you… Maybe I can make some arrangements? Anyway, here you go. I hope it was worth it."`);
  scene.actions([
    { label: 'Grab the syringe', goto: ['city_bobka', 'peewhore'] },
  ]);
  scene.build();
}

function enterPeewhore(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  (s as any).drugVars['heroin_whore'] = ((s as any).drugVars['heroin_whore'] ?? 0) + (1);
  qspCall(s, 'drugs', 'heroin');
  scene.img('images/characters/city/bobka/sex/peewhore.jpg');
  scene.text('You don\'t even bother washing yourself as you quickly grab the syringe and inject yourself with it.');
  scene.text('Bobka looks down on you with a devious smile. He knows he\'s very close to completely controlling your life. Soon, you won\'t be able to say no any more…');
  scene.actions([
    { label: 'Leave the drug den', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'inject':
      enterInject(s, scene);
      break;
    case 'rimming2':
      enterRimming2(s, scene);
      break;
    case 'rimming3':
      enterRimming3(s, scene);
      break;
    case 'rimming4':
      enterRimming4(s, scene);
      break;
    case 'rimming5':
      enterRimming5(s, scene);
      break;
    case 'peeface':
      enterPeeface(s, scene);
      break;
    case 'peeface2':
      enterPeeface2(s, scene);
      break;
    case 'peeface3':
      enterPeeface3(s, scene);
      break;
    case 'peeswallow':
      enterPeeswallow(s, scene);
      break;
    case 'peeswallow2':
      enterPeeswallow2(s, scene);
      break;
    case 'peeswallow3':
      enterPeeswallow3(s, scene);
      break;
    case 'peeswallow4':
      enterPeeswallow4(s, scene);
      break;
    case 'peewhore':
      enterPeewhore(s, scene);
      break;
    default:
      enterInject(s, scene);
      break;
  }
}

export const city_bobka: LocationDef = {
  name: 'city_bobka',
  title: 'Bobka lies back and lifts his legs, exposing his ass to you.',
  region: 'city',
  description: ['Meanwhile, Bobka is looking down at you haughtily, shaking his head while laughing softly. "Another happy customer. Just like you\'re going to make a lot of customers happy one day…"'],
  enter: enter,
};
