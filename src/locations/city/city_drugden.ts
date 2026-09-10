import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  scene.text('The skinny guy looks you up and down as you enter.');
  scene.text('"So what can I get for you, honey?"');
  if (((s as any).drugUser ?? 0) === 1) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).drugVars ?? 0)?.['pav_dropoff'] === 0) {
      // TODO-QSP: act 'Ask for a drop-off point in Pavlovsk':  minut += 5
      qspCall(s, 'events', 'ask_pav_drug_dropoff');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Ask for heroin', goto: ['city_drugden', 'heroin'] },
      { label: 'Ask for amphetamine', goto: ['city_drugden', 'amphetamine'] },
      { label: 'Ask for weed', goto: ['city_drugden', 'joints'] },
      { label: 'Ask for cocaine', goto: ['city_drugden', 'cocaine'] },
    ]);
  } else {
    scene.text('"Ahhh, what do you have?" you ask.');
    scene.text('His eyes light up and he smiles wildy. "Well, I have some H and amphetamine…"');
    if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 23  ||  ((s as any).drugVars ?? 0)?.['heroin_high'] > 23) {
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'kiteHigh'] }]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Ask for heroin', goto: ['city_drugden', 'heroin'] },
      { label: 'Ask for amphetamine', goto: ['city_drugden', 'amphetamine'] },
      { label: 'Ask for weed', goto: ['city_drugden', 'joints'] },
      { label: 'Ask for cocaine', goto: ['city_drugden', 'cocaine'] },
    ]);
  }
  if (qspFunc(s, 'money', 'can_afford', 420, 'cash') === 0  &&  ((s as any).drugVars ?? 0)?.['heroin_need'] > 0) {
    scene.actions([
      { label: 'Beg him to give you some', handler: (st: GameState) => {
    qspCall(st, 'city_drugden', 'drugslut');
  } },
    ]);
  }
  scene.actions([
    { label: 'Buy some amphetamine instead', goto: ['city_drugden', 'amphetamine'] },
    { label: 'Buy some weed instead', goto: ['city_drugden', 'joints'] },
    { label: 'Buy some cocaine instead', goto: ['city_drugden', 'cocaine'] },
  ]);
  scene.build();
}

function enterDrugslut(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).drugVars ?? 0)?.['heroin_whore'] > 0) {
    scene.text('"Bobka, please! You remember me, right? I\'m good for it, you can trust me!" you beg, but he gives you a wicked grin.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! You know I don't do credit!" he snorts.
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! You know I don't do credit!" he snorts.`);
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave dejectedly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    if (((s as any).drugVars ?? 0)?.['heroin_whore'] > 5) {
      scene.actions([
        { label: 'Submit to your fate', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/den/crackwhore.jpg');
    scene.text('Your ever increasing dependence on drugs has taken its toll on you. Your will has slowly being worn down by always having to go to Bobka to beg for your next dosage and he readily supplies it, considering it an investment. When he thinks you\'re ready, he offers you permanent lodging in the drug den.');
    scene.text('You readily accept. Paid housing, food and your daily dose! What more could you need?');
    scene.text('Of course Bobka is no kind Samaritan, and expects things from you in return…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore2.jpg');
    scene.text('Your life has changed drastically. Your mouth, pussy and ass are completely owned by Bobka, and he readily whores you out. The rumour of the drug den having a new full-time whore spreads quickly. Bobka is willing to rent you out to whoever is willing to pay, even if they\'re not paying much at all! Some money is better than no money in the end…');
    scene.text('You try to resist at first, but you soon realize that you can\'t. You need Bobka to survive, and have no choice but to meekly accept your new role as his whore.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore3.jpg');
    scene.text('"What difference does it make?" you think to yourself as yet another stranger buries his cock in your well-used ass.');
    scene.text('Bobka sold you to a brothel owner, who keeps you in his basement as a cheap attraction for his regulars. He takes good care of you though, giving you a roof over your head and the daily dosage of heroin you need so badly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore4.jpg');
    scene.text('In the rare moments your mind is not intoxicated by your last hit, you think back to the friends and family you used to have. It all seems surreal now…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore5.jpg');
    scene.text('Your future was so bright when you were in school. The teachers would sing your praises, saying how much potential you had.');
    scene.text('You can\'t help but wonder what they would think of you now. On your knees as some random stranger feeds you his fat cock. The guy snaps you out of your memories when he roughly forces his cock down your throat, nearly making you choke.');
    scene.text('It\'s nothing new to you. This is your life now. You don\'t try to resist or fend him off, but simply open your mouth wider and stick your tongue out to give him full access to your throat.');
    scene.text('You\'ve long since realized that you\'re a whore now, doing whatever perverted acts the customers demand from you. You have to! Anything to earn enough money for your next dose…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore6.jpg');
    scene.text('You\'ve long since stopped taking care of yourself, tending to your poor-paying customers\' cocks out of sheer habit. Your former beauty is completely gone, and traces of dried semen cover your hair, face and clothes.');
    scene.text('The brothel owner is starting to lose his patience with you. Even his customers, who already have fairly low standards, no longer seem to be very interested in you. Lucky for you, some them of them can\'t afford any better.');
    scene.text('Occasionally, when you get ready to offer your broken down holes to yet another customer, you wonder… Was there anything you could\'ve done differently?');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gameover', 'force', 8
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
      { label: 'Promise you\'ll do anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('With a trembling lip, you drop to your knees and continue to beg. "Please! I\'ll do anything, anything you want!"');
    scene.text('He looks at you appreciatively for a moment before he gives you a short nod. "Shut up and follow me. I may have some for you, but you\'re going to have to earn it."');
    scene.actions([
      { label: 'Follow him into the house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).bobrand = Math.floor(Math.random() * 5) + 0;
    if (((s as any).bobrand ?? 0) < 3) {
    }
    // TODO-QSP: dynamic text: bobrand: <<bobrand>>
    scene.text(`bobrand: ${((s as any).bobrand ?? 0)}`);
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('You keep begging Bobka to give you some heroin as you follow him to an empty room.');
    // TODO-QSP: dynamic text: He just laughs at you. <<$bobtalk>>
    scene.text(`He just laughs at you. ${((s as any).bobtalk ?? 0)}`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: '<<$bobtext>>', handler: (st: GameState) => {
    // TODO-QSP: drugVars['heroin_whore'] += 1
    // TODO-QSP: gt 'city_bobka', bobrand
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('"Please!" you beg. "I need a hit… I need it badly! Please, I\'ll pay you back! I promise!"');
    scene.text('The guy laughs. "Yeah, sure. Do you know how many times a day I hear that? If I had a ruble for every time someone told me that, I would\'ve retired by now! I don\'t do credit, simple as that. Get lost."');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave dejectedly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Promise you\'ll do anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('With a trembling lip, you drop to your knees and continue to beg. "Please! I\'ll do anything, anything you want!"');
    scene.text('He looks at you appreciatively for a moment before he gives you a short nod. "Shut up and follow me. I may have some for you, but you\'re going to have to earn it."');
    scene.actions([
      { label: 'Follow him into the house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You follow him dejectedly. You don\'t know what he wants from you, but what choice do you have?');
    scene.text('He takes you by the hand and pulls you into an empty room. He doesn\'t bother closing the door.');
    scene.text('"Get down on your knees and suck me off!" he orders. "If you do good, we\'ll see about getting you your hit."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).drugVars['heroin_whore'] = ((s as any).drugVars['heroin_whore'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'dinSex', 'std_trigger');
    scene.img('images/characters/city/bobka/sex/bj.jpg');
    scene.text('You need the drugs, so you drop to your knees and quickly pull his pants down without even thinking about it. His cock is still flaccid, but you close your lips around it anyway, doing the best you can to arouse him. You slowly feel his cock grow hard inside your mouth and obediently suck him off until you feel several warm jets of cum land on the back of your throat.');
    scene.text('"Could be better…" the guy moans in boredom.');
    scene.text('He pulls up his pants and throws you a syringe with a discompassionate look in his eyes.');
    scene.text('"This what you were looking for?" he smirks.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take the hit right in front of him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'heroin');
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/usingheroin.jpg');
    scene.text('You grab the syringe off the ground and use it without a second thought, injecting it into your arm with a shaky hand.');
    scene.text('He shakes his head, almost as if he is disappointed in you. "I reckon I\'m going to see you around more often! My name is Bobka. Who are you?"');
    // TODO-QSP: dynamic text: The drugs are quickly clouding your mind, and you barely register him talking. "...
    scene.text(`The drugs are quickly clouding your mind, and you barely register him talking. "${((s as any).pcs_nickname ?? 0)}…" you mutter softly.`);
    // TODO-QSP: dynamic text: He laughs. "I think we'll be seeing more of you here, <<$pcs_nickname>>…"
    scene.text(`He laughs. "I think we'll be seeing more of you here, ${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('When the fog in your mind clears, Bobka is gone and you\'re by yourself in the room.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'drugslut':
      enterDrugslut(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const city_drugden: LocationDef = {
  name: 'city_drugden',
  title: '<center><b>Local drug den</b></center>',
  region: 'city',
  description: ['The skinny guy looks you up and down as you enter.'],
  enter: enter,
};
