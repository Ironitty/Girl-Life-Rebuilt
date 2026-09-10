import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRapistGenerate(s: GameState, scene: SceneBuilder): void {
  (s as any).re_i = 0;
  (s as any).temp['rapist_age'] = Math.floor(Math.random() * 27) + 19;
  // TODO-QSP: :rape_gangbang_loop
  qspCall(s, 'npcgeneratec', '', 0, 'rapist', ((s as any).rand ?? 0)(((s as any).temp ?? 0)?.['rapist_age'], (((s as any).temp ?? 0)?.['rapist_age'] + 8)));
  // TODO-QSP: $rapist[re_i] = $npclastgenerated
  (s as any).re_i = ((s as any).re_i ?? 0) + (1);
  if (((s as any).re_i ?? 0) < 3  &&  ((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
    // TODO-QSP: jump 'rape_gangbang_loop'
  }
  scene.build();
}

function enterFightInit(s: GameState, scene: SceneBuilder): void {
  (s as any).fight['rape_loc'] = ((s as any).loc ?? 0);
  qspCall(s, 'fight', 'initFight');
  (s as any).re_i = 0;
  (s as any).temp['rapist_age'] = Math.floor(Math.random() * 27) + 19;
  // TODO-QSP: :rape_gang_fight_loop
  qspCall(s, 'npcgeneratec', '', 0, 'rapist', ((s as any).rand ?? 0)(((s as any).temp ?? 0)?.['rapist_age'], (((s as any).temp ?? 0)?.['rapist_age'] + 8)));
  // TODO-QSP: $rapist[re_i] = $npclastgenerated
  qspCall(s, 'fight_npcdata', 'rapist');
  (s as any).re_i = ((s as any).re_i ?? 0) + (1);
  if (((s as any).re_i ?? 0) < 3  &&  ((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
    // TODO-QSP: jump 'rape_gang_fight_loop'
  }
  (s as any).fightEnding = 23;
  scene.actions([{ label: 'Continue', goto: ['fight', 'start'] }]);
  scene.build();
}

function enterFightWin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
    qspCall(s, 'money', 'earn', Math.floor(Math.random() * 4501) + 1500);
    if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'city_park'  ||  ((s as any).loc ?? 0) === 'pushkin_parks') {
      scene.text('You defeat the rapists and empty their wallets as they lie unconscious in the dirt.');
    } else {
      scene.text('You defeat the rapists and empty their wallet as they lie unconscious on the street.');
    }
  } else {
    qspCall(s, 'money', 'earn', Math.floor(Math.random() * 1501) + 500);
    if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'city_park'  ||  ((s as any).loc ?? 0) === 'pushkin_parks') {
      scene.text('You defeat the rapists and empty their wallets as they lie unconscious on the street.');
    } else {
      scene.text('You defeat the rapist and empty his wallet as he lies unconscious on the street.');
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterUrbanFightRape(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp ?? 0)?.['skip'] !== 1) {
    qspCall(s, 'rape_events', 'rapist_generate');
  } else {
    (s as any).temp['skip'] = 0;
  }
  (s as any).temp_rape_angry = 1;
  scene.img('images/locations/shared/street/alleynight.jpg');
  scene.text('Try as you might, you just can\'t win and you\'re violently knocked to the ground, breath driven from your body as your back slams into the concrete. Your vision swims and you roll over onto your stomach, trying to get your hands and feet underneath you, simultaneously trying to crawl away.');
  scene.text('"Fucking bitch! You\'re going to pay for that!" A muted clinking rings in the alley and some part of your brain registers that it sounds like a belt buckle.');
  qspCall(s, 'rape_events', 'urban_rape_struggle');
  qspCall(s, 'rape_events', 'urban_rape_limp');
  scene.build();
}

function enterUrbanRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'rape_events', 'rapist_generate');
  (s as any).temp['skip'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/street/sex/rape1.jpg');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('Once your attacker drags your far enough down into the alley, he throws you violently against the wall, knocking the wind out of you, stunning you for a moment. He grabs you by the hair and pushes your face against the stone wall, pinning it in place. He leans in, and you can feel his hot breath on your cheek as he whispers to you, "You better not scream bitch, or I will make this a lot worse."');
  } else {
    scene.text('You meekly don\'t move or cry out. In the faint light, you can see him grin as you obey him. "Yeah I knew you wanted this. Walking around naked, you were hoping some man would take you." He leans in further. You can feel his hot breath on your cheek as he whispers to you, "You better not scream bitch, or I will make this a lot worse."');
  }
  scene.actions([
    { label: 'Stay silent', handler: (st: GameState) => {
    (s as any).temp['skip'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape2.jpg');
    scene.text('You meekly don\'t move or cry out. In the corner of your eye, you can see him grin as you obey him. "That\'s right be a good little bitch, and I\'ll take it easy on you as long as you do what I say."');
    qspCall(s, 'rape_events', 'urban_rape_struggle');
    qspCall(s, 'rape_events', 'urban_rape_limp');
  } },
    { label: 'Scream', handler: (st: GameState) => {
    (s as any).temp['skip'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape2.jpg');
    qspCall(s, 'pain', '', 7, 'head', 'slam');
    scene.text('You can\'t help it and shriek at the top of your lungs.');
    scene.text('For a single moment.');
    scene.text('Your scream is immediately cut off as he bashes your head into the wall. Your legs buckle underneath you and your vision goes fuzzy.');
    scene.text('"Fucking bitch. I guess we do it the hard way then." A muted clinking rings in the alley and some part of your brain registers that it sounds like a belt buckle. You groan and roll onto your stomach, trying to get your hands and feet underneath you.');
    (s as any).temp_rape_angry = 1;
    qspCall(s, 'rape_events', 'urban_rape_struggle');
    qspCall(s, 'rape_events', 'urban_rape_limp');
  } },
    { label: 'Fight back', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('You hesitate a moment, relaxing your body, making him think you\'re about to submit. Then without warning, you throw your head back, smashing it into your attacker\'s forehead. He stumbles backward and you bring your hands up. You\'re not going to go down on this guy without a fight!');
    scene.actions([
      { label: 'Fight!', goto: ['street_events_general', 'fight_rape'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterUrbanRapeStruggle(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Struggle', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/sex/rape8.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('A weight from behind crushes you down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. Below your skirt, you feel your panties get pulled aside.');
      } else {
        scene.text('A weight from behind crushes you down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. At the same time, you feel your pants violently yanked down over your ass. You think you hear the sound of the elastic in your panties snapping.');
      }
      scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!"');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('A weight from behind crushes you down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth.');
        scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!" You feel your skirt pulled up and something between your legs. "No panties! You fucking <i>whore!</i>"');
      } else {
        scene.text('A weight from behind crushes you down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. ');
        scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!" You feel your pants violently yanked down over your ass. "No panties! You fucking <i>whore!</i>"');
      }
    }
    if (Math.floor(Math.random() * 2) + 0 === 1) {
      (s as any).temp['rape'] = 'vaginal';
      scene.actions([
        { label: '<i><b>MMMMMRRMMPH-!!!</b></i>', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/sex/rape.mp4');
    scene.text('<i><b>"MMMMMRRMMPH-!!!"</b></i>');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('You try to scream again when something stabs into your vagina, tearing straight through your hymen, but the hand clamped firmly over your mouth prevents anything more than a muffled groan. Your muscles go taut and your insides feel like they\'re on fire as your attacker thrusts into you again and again and again with great self indulgence. All you can do is endure, tears streaming down your face, while your virginity is violently robbed from you by a stranger.');
    } else {
      scene.text('You try to scream again when you feel something stab into your vagina but the hand clamped firmly over your mouth prevents anything more than a muffled groan. Your muscles go taut as your attacker thrusts into you again and again and again with great self indulgence. All you can do is endure, tears streaming down your face, your most intimate place being thoroughly violated by a stranger.');
    }
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 6) + 5, 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Endure it', handler: (st: GameState) => {
    qspCall(s, 'cum_call', '', '', 'rapist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape_cum.mp4');
    scene.text('After what feels like an eternity, the man thrusts into you several times, much harder than before before completely burying his cock inside you.');
    scene.text('"Mmmmph-!" You feel him pulsing inside you and you groan uselessly into his hand. The stranger climbs off of you and his cock withdraws from inside you, eliciting a whimper from your lips. With that final act, you\'re left shivering on the ground, completely spent, not even enough strength left to belatedly cry out for help. You hear the clinking of metal behind you again and you feel something leak from your pussy.');
    scene.text('"You\'re a pretty good fuck girlie. Maybe we can have another \'date\' like this again some time." Even though you can\'t see his face, you can hear the smile in his voice. Moments later, you hear footsteps sound in the alley, slowly fading away until you\'re left in silence.');
    qspCall(s, 'rape_events', 'urban_rape_struggle_after', 'vaginal');
  } },
    ]);
  } },
      ]);
    } else {
      (s as any).temp['rape'] = 'anal';
      scene.actions([
        { label: '<i><b>MMMMMRRMMPH-!!!</b></i>', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/sex/rape.mp4');
    qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 6) + 5, 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.text('<i><b>"MMMMMRRMMPH-!!!"</b></i>');
    scene.text('You try to scream again when you feel something stab into your anus but the hand clamped firmly over your mouth prevents anything more than a muffled groan. Your muscles go taut as your attacker thrusts into you again and again and again with great self indulgence. All you can do is endure, tears streaming down your face, your ass being violently stretched out by a stranger.');
    scene.actions([
      { label: 'The end…', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', 'rapist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape_cum.mp4');
    scene.text('After what feels like an eternity, the man thrusts into you several times, much harder than before before completely burying his cock inside you.');
    scene.text('"Mmmmph-!" You feel him pulsing inside you and you groan uselessly into his hand. The stranger climbs off of you and his cock withdraws from your ass, eliciting a whimper from your lips. With that final act, you\'re left shivering on the ground, completely spent, not even enough strength left to belatedly cry out for help. You hear the clinking of metal behind you again and you feel something trickle out of your ravaged asshole.');
    scene.text('"You\'re a real buttslut, girlie. Maybe we can have another \'date\' like this again some time." Even though you can\'t see his face, you can hear the smile in his voice. Moments later, you hear footsteps sound in the alley, slowly fading away until you\'re left in silence.');
    qspCall(s, 'rape_events', 'urban_rape_struggle_after', 'anal');
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterUrbanRapeStruggleAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rape_angry ?? 0) === 1) {
    if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1) {
      (s as any).temp_thresh = 0;
    } else {
      (s as any).temp_thresh = 3;
      if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
        (s as any).temp_thresh = 1;
      } else {
        (s as any).temp_thresh = 5;
        if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
          (s as any).temp_thresh = 8;
        }
        if (Math.floor(Math.random() * 40) + 1 <= ((s as any).temp_thresh ?? 0)) {
          scene.actions([
            { label: 'Pass out', goto: ['abduction', 'abdCarTrunk'] },
          ]);
        } else {
          qspCall(s, 'rape_events', 'urban_<<$ARGS[1]>>_cry');
        }
      }
      qspCall(s, 'rape_events', 'urban_<<$ARGS[1]>>_cry');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rapist_generate':
      enterRapistGenerate(s, scene);
      break;
    case 'fight_init':
      enterFightInit(s, scene);
      break;
    case 'fight_win':
      enterFightWin(s, scene);
      break;
    case 'urban_fight_rape':
      enterUrbanFightRape(s, scene);
      break;
    case 'urban_rape':
      enterUrbanRape(s, scene);
      break;
    case 'urban_rape_struggle':
      enterUrbanRapeStruggle(s, scene);
      break;
    case 'urban_rape_struggle_after':
      enterUrbanRapeStruggleAfter(s, scene);
      break;
    default:
      enterRapistGenerate(s, scene);
      break;
  }
}

export const rape_events: LocationDef = {
  name: 'rape_events',
  title: 'You defeat the rapists and empty their wallets as they lie u',
  region: 'other',
  enter: enter,
};
