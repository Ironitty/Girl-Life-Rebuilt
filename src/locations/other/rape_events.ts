import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRapistGenerate(s: GameState, scene: SceneBuilder): void {
  (s as any).re_i = 0;
  ((s as any).temp ?? {})['rapist_age'] = Math.floor(Math.random() * 27) + 19;
  // TODO-QSP: :rape_gangbang_loop
  qspCall(s, 'npcgeneratec', '', 0, 'rapist', ((s as any).rand ?? 0)(((s as any).temp ?? {})?.['rapist_age'], (((s as any).temp ?? {})?.['rapist_age'] + 8)));
  // TODO-QSP: $rapist[re_i] = $npclastgenerated
  (s as any).re_i = ((s as any).re_i ?? 0) + (1);
  if (((s as any).re_i ?? 0) < 3  &&  ((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
    // TODO-QSP: jump 'rape_gangbang_loop'
  }
  scene.build();
}

function enterFightInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).fight ?? {})['rape_loc'] = ((s as any).loc ?? 0);
  qspCall(s, 'fight', 'initFight');
  (s as any).re_i = 0;
  ((s as any).temp ?? {})['rapist_age'] = Math.floor(Math.random() * 27) + 19;
  // TODO-QSP: :rape_gang_fight_loop
  qspCall(s, 'npcgeneratec', '', 0, 'rapist', ((s as any).rand ?? 0)(((s as any).temp ?? {})?.['rapist_age'], (((s as any).temp ?? {})?.['rapist_age'] + 8)));
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
    ((s as any).temp ?? {})['skip'] = 0;
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
  ((s as any).temp ?? {})['skip'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/street/sex/rape1.jpg');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('Once your attacker drags your far enough down into the alley, he throws you violently against the wall, knocking the wind out of you, stunning you for a moment. He grabs you by the hair and pushes your face against the stone wall, pinning it in place. He leans in, and you can feel his hot breath on your cheek as he whispers to you, "You better not scream bitch, or I will make this a lot worse."');
  } else {
    scene.text('You meekly don\'t move or cry out. In the faint light, you can see him grin as you obey him. "Yeah I knew you wanted this. Walking around naked, you were hoping some man would take you." He leans in further. You can feel his hot breath on your cheek as he whispers to you, "You better not scream bitch, or I will make this a lot worse."');
  }
  scene.actions([
    { label: 'Stay silent', handler: (st: GameState) => {
    ((s as any).temp ?? {})['skip'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape2.jpg');
    scene.text('You meekly don\'t move or cry out. In the corner of your eye, you can see him grin as you obey him. "That\'s right be a good little bitch, and I\'ll take it easy on you as long as you do what I say."');
    qspCall(s, 'rape_events', 'urban_rape_struggle');
    qspCall(s, 'rape_events', 'urban_rape_limp');
  } },
    { label: 'Scream', handler: (st: GameState) => {
    ((s as any).temp ?? {})['skip'] = 0;
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
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      ((s as any).temp ?? {})['rape'] = 'vaginal';
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
      ((s as any).temp ?? {})['rape'] = 'anal';
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
      if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0) {
        (s as any).temp_thresh = 3;
      } else {
        if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
          (s as any).temp_thresh = 1;
        } else {
          if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3) {
            (s as any).temp_thresh = 5;
          } else {
            if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
              (s as any).temp_thresh = 8;
            }
          }
        }
      }
    }
    if ((Math.floor(Math.random() * 40) + 1) <= ((s as any).temp_thresh ?? 0)) {
      scene.actions([
        { label: 'Pass out', goto: ['abduction', 'abdCarTrunk'] },
      ]);
    } else {
      qspCall(s, 'rape_events', 'urban_<<$ARGS[1]>>_cry');
    }
  }
  qspCall(s, 'rape_events', 'urban_<<$ARGS[1]>>_cry');
  scene.build();
}

function enterUrbanRapeLimp(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Go limp (pass out)', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('Fear flashes through you. Your legs turn to jelly. Your mind goes blank as you tumble to the ground…');
    scene.actions([
      { label: 'Black out', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/unconscious_street.mp4');
    scene.text('Time passes.');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      ((s as any).temp ?? {})['rape'] = 'vaginal';
      scene.text('There is a sensation of something, a pressure stabbing between your legs, but your mind continues to swirl in the darkness and you do not wake.');
    } else {
      ((s as any).temp ?? {})['rape'] = 'anal';
      scene.text('There is a sensation of something, a pressure stabbing into your behind, but your mind continues to swirl in the darkness and you do not wake.');
    }
    // TODO-QSP: gs 'arousal', $temp['rape'], rand(5, 10), 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('Your mind finally returns to you.');
    scene.text('Blinking, you look around, finding yourself naked and alone in the alley.');
    if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
      scene.text('Something warm trickles from between your legs…');
      qspCall(s, 'rape_events', 'urban_vaginal_cry');
    } else {
      if (((s as any).temp ?? 0)?.['rape'] === 'anal') {
        scene.text('Something warm trickles from your ass…');
        qspCall(s, 'rape_events', 'urban_anal_cry');
      }
    }
    qspCall(s, 'rape_events', 'urban_repress');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterUrbanVaginalCry(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/locations/shared/street/sex/rape_after1.mp4');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'rape_events', 'urban_panties_after');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the thick liquid dribbling down your leg.');
      } else {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot spreading through your pants.');
      }
      qspCall(s, 'rape_events', 'urban_rape_end');
    }
  } },
  ]);
  scene.build();
}

function enterUrbanAnalCry(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/locations/shared/street/sex/rape_after1.mp4');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'rape_events', 'urban_panties_after');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the thick liquid dribbling out the back of your ass.');
      } else {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot spreading through your pants.');
      }
      qspCall(s, 'rape_events', 'urban_rape_end');
    }
  } },
  ]);
  scene.build();
}

function enterUrbanRepress(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Repress it', handler: (st: GameState) => {
    ((s as any).temp ?? {})['rape_repress'] = 1;
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('<i>It\'s cum. From the man who r-</i>');
    scene.text('That\'s as far as the thought gets before you forcibly shut it down, refusing to confront the events that just transpired.');
    scene.text('Instead you drag yourself to your feet, dully stumbling around looking for your clothes.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'rape_events', 'urban_panties_after');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('It takes a bit of searching, but you manage to find everything you lost, tugging it back on and ignoring the thick liquid dribbling down your legs.');
        } else {
          scene.text('It takes a bit of searching, but you manage to find everything you lost, tugging it back on and ignoring the thick liquid dribbling out the back of your leg.');
        }
      } else {
        scene.text('It takes a bit of searching, but you manage to find everything you lost, tugging it back on and ignoring the wet spot slowly seeping into your pants.');
      }
      qspCall(s, 'rape_events', 'urban_repress_end');
    }
  } },
  ]);
  scene.build();
}

function enterUrbanPantiesAfter(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('After several minutes of searching, the only thing you can\'t recover are your panties. Just as you\'re about to give up, you find them in a puddle, completely drenched by the stagnant water.');
    scene.actions([
      { label: 'Put them on', handler: (st: GameState) => {
    if (((s as any).temp ?? 0)?.['rape_repress'] === 1) {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('You stare at them a moment while you disassociate before you slip your feet through and tug them up under your skirt with no more emotion than you would have getting dressed in the morning.');
        scene.text('You don\'t feel the chill water being squeezed as they stretch around your thighs. You don\'t feel the grit of infused dirt scrubbing against your skin. You certainly do not feel the thick liquid inside you being stopped by the damp fabric pulled up tight between your legs.');
      } else {
        scene.text('You stare at them a moment while you disassociate before you slip your feet through and tug them up your legs with no more emotion than you would have getting dressed in the morning.');
        scene.text('You don\'t feel the chill water being squeezed as they stretch around your thighs. You don\'t feel the grit of infused dirt scrubbing against your skin. You don\'t feel the dampening of the bottoms you pull up over the panties. You certainly do not feel the thick liquid inside you being stoppered by the drenched pulled up tight underwear between your legs.');
      }
      qspCall(s, 'rape_events', 'urban_repress_end');
    } else {
      scene.text('Staring down at your ruined panties, you nearly burst into tears again, barely holding back sobs as you put your feet through the holes and pull them up.');
      if (((s as any).PCloSkirt ?? 0) > 0) {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('You pull them up under your skirt, cringing in disgust at the cold wet fabric sliding up your legs and the gritty grains of dirt that rub against your privates. The chill of your damp underwear contrasted with the warm liquid leaking from your tender pussy causes you to shudder in revulsion.');
        } else {
          scene.text('You pull them up under your skirt, cringing in disgust at the cold wet fabric sliding up your legs and the gritty grains of dirt that rubs against your privates. The chill of your damp underwear contrasted with the warm liquid leaking from your sore asshole causes you to shudder in revulsion.');
        }
      } else {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('You pull them up under your skirt, cringing in disgust at the cold wet fabric sliding up your legs and the gritty grains of dirt that rubs against your privates. The chill of your damp underwear contrasted with the warm liquid leaking from your tender pussy causes you to shudder in revulsion, as does the feeling of it soaking a panty-shaped wet spot through your bottoms.');
        } else {
          scene.text('You pull them up under your skirt, cringing in disgust at the cold wet fabric sliding up your legs and the gritty grains of dirt that rubs against your privates. The chill of your damp underwear contrasted with the warm liquid leaking from your sore asshole causes you to shudder in revulsion, as does the feeling of it soaking a panty-shaped wet spot through your bottoms.');
        }
      }
      qspCall(s, 'rape_events', 'urban_rape_end');
    }
  } },
      { label: 'Discard them', handler: (st: GameState) => {
    qspCall(s, 'panties', 'dispose');
    if (((s as any).temp ?? 0)?.['rape_repress'] === 1) {
      scene.text('You stare at them a moment while you disassociate before they slip from your fingers, splashing back into the puddle you found them in.');
      scene.text('Why would you put on a random pair panties? They aren\'t yours. You weren\'t wearing any today. That\'s the only explanation for why you don\'t have any now.');
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('You step over the puddle, ignoring the strange sensation of something trickling down your leg.');
      } else {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('You pull up your trousers, ignoring the rubbing of its fabric against your bare crotch and the wet spot slowly forming there.');
        } else {
          scene.text('You pull up your trousers, ignoring the rubbing of its fabric against your bare crotch and the wet spot forming at the back.');
        }
      }
      qspCall(s, 'rape_events', 'urban_repress_end');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('Staring down at your ruined panties, you nearly burst into tears again, barely holding back sobs as you toss them aside, shuddering as a thick liquid dribbles down your leg.');
        } else {
          scene.text('Staring down at your ruined panties, you nearly burst into tears again, barely holding back sobs as you toss them aside, shuddering as a thick liquid dribbles down the back of your leg.');
        }
        scene.text('You could never wear them again after this anyways.');
      } else {
        if (((s as any).temp ?? 0)?.['rape'] === 'vaginal') {
          scene.text('Staring down at your ruined panties, you nearly burst into tears again, barely holding back sobs as you toss them aside. Instead you pull up your bottoms without them, shuddering at the feeling of bare privates on fabric and the wet spot forming at the crotch.');
        } else {
          scene.text('Staring down at your ruined panties, you nearly burst into tears again, barely holding back sobs as you toss them aside. Instead you pull up your bottoms without them, shuddering at the feeling of bare privates on fabric and the wet spot forming at the back.');
        }
      }
      qspCall(s, 'rape_events', 'urban_rape_end');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterUrbanRapeEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'rape_events', 'urban_police_after');
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('Your clothing in place, you limp out of the alley.');
    scene.text('You\'re tired. You\'re sore. All you want is to go home and cry.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Go home (stoic)', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('Your clothing in place, you limp out of the alley with grim determination flowing through your veins.');
    scene.text('You just got raped. It didn\'t feel good. And there was nothing you could have done about it.');
    scene.text('But that doesn\'t mean you need to remain a victim. You\'re still alive. The rapist didn\'t kill you. You\'re not going to let yourself succumb after the fact.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterUrbanRepressEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('Your clothing in place, you limp out of the alley.');
    scene.text('You\'re tired. You\'re sore. All you want is to go home and put an end to this day.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Pretend nothing ever happened', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('You smooth out your clothing, checking yourself like you just came out of a locker room instead of just being rap-');
    scene.text('…');
    scene.text('Repressing everything, you leave the alley, pretending to yourself that this was just part of another normal day…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterUrbanPoliceAfter(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Police?', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('The rapist who did this… If you go to the police…');
    scene.actions([
      { label: 'Go to the police station', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the train depot and the police station that resides next to it.');
    } else {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the city center and the police station that resides in it.');
    }
    scene.actions([
      { label: 'Continue', goto: ['rape_events', 'rape_report'] },
    ]);
  } },
      { label: 'Don\'t go', handler: (st: GameState) => {
    scene.text('For a brief moment you consider telling the police what happened, but emotion wells up inside you and you\'re immediately filled with thoughts of disgust and shame. It doesn\'t make sense. It\'s not like you wanted this to happen. But still. The idea of sharing what happened to you, even to the police… You already feel filthy from what happened tonight. You don\'t want to feel even worse. The only thing you want is to go home.');
    scene.text('You slowly limp away, clutching your arms around your belly, trying your best to leave the events of tonight in the alley behind you…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
    }
  }
  if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/park/skver.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
    }
  }
  if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
    }
  }
  if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
    }
  }
  scene.build();
}

function enterParkRapeFightStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'rape_events', 'rapist_generate');
  qspCall(s, 'rape_events', 'park_image');
  scene.text('Try as you might, you just can\'t win and you\'re violently knocked to the ground, breath driven from your body as you\'re slammed into the mud. Your vision swims and you roll over onto your stomach, struggling to crawl away.');
  scene.text('"Fucking bitch! You\'re going to pay for that!" A multitude of hands grab you and drag you back into the bushes.');
  scene.build();
}

function enterParkRapeStruggleStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).fight ?? {})['rape_type'] = 'gang';
  qspCall(s, 'rape_events', 'rapist_generate');
  qspCall(s, 'rape_events', 'park_image');
  scene.text('You try to scream but the hand clamped over your mouth reduces it to nothing more than a muffled groan as you are dragged into the bushes.');
  scene.text('"Lookie here!" another voice chuckles. "We got ourselves a pretty little play thing to have fun with!"');
  scene.text('Multiple pairs of hands swarm your body, tugging at your clothes.');
  qspCall(s, 'rape_events', 'park_gangrape_struggle1');
  scene.build();
}

function enterParkRapeSolo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/street/sex/rape8.jpg');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('A weight from behind crushes you back down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. Below your skirt, you feel your panties get pulled aside.');
    } else {
      scene.text('A weight from behind crushes you back down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. At the same time, you feel your pants violently yanked down over your ass. You think you hear the sound of the elastic in your panties snapping.');
    }
    scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!"');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('A weight from behind crushes you back down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth.');
      scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!" You feel your skirt pulled up and something between your legs. "No panties! You fucking <i>whore!</i>"');
    } else {
      scene.text('A weight from behind crushes you back down onto the ground. Before you can even grunt in pain, a hand clamps over your mouth. ');
      scene.text('"Made me work for it you cunt. Now I\'m going to <i>really</i> enjoy this!" You feel your pants violently yanked down over your ass. "No panties! You fucking <i>whore!</i>"');
    }
  }
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
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
      { label: 'The end…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', '', '', 'rapist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape_cum.mp4');
    scene.text('After what feels like an eternity, the man thrusts into you several times, much harder than before before completely burying his cock inside you.');
    scene.text('"Mmmmph-!" You feel him pulsing inside you and you groan uselessly into his hand. The stranger climbs off of you and his cock withdraws from inside you, eliciting a whimper from your lips. With that final act, you\'re left shivering on the ground, completely spent, not even enough strength left to belatedly cry out for help. You hear the clinking of metal behind you again and you feel something leak from your pussy.');
    scene.text('"You\'re a pretty good fuck girlie. Maybe we can have another \'date\' like this again some time." Even though you can\'t see his face, you can hear the smile in his voice. Moments later, you hear footsteps sound in the alley, slowly fading away until you\'re left in silence.');
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/locations/shared/street/sex/rape_after1.mp4');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot you feel soaking through your panties.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the thick liquid you feel dribbling down your leg.');
      } else {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot you feel spreading through your pants.');
      }
    }
    scene.actions([
      { label: 'Go to the police station', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    if (((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the train depot and the police station that resides next to it.');
    } else {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the city center and the police station that resides in it.');
    }
    scene.actions([
      { label: 'Continue', goto: ['rape_events', 'rape_report'] },
    ]);
  } },
      { label: 'Don\'t go', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('For a brief moment you consider telling the police what happened, but emotion wells up inside you and you\'re immediately filled with thoughts of disgust and shame. It doesn\'t make sense. It\'s not like you wanted this to happen. But still. The idea of sharing what happened to you, even to the police… You already feel filthy from what happened tonight. You don\'t want to feel even worse. The only thing you want is to go home.');
    scene.text('You slowly limp away, clutching your arms around your belly, trying your best to leave the events of tonight in the alley behind you…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
  } else {
    scene.actions([
      { label: '<i><b>MMMMMRRMMPH-!!!</b></i>', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/sex/rape.mp4');
    qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 6) + 5, 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.text('<i><b>"MMMMMRRMMPH-!!!"</b></i>');
    scene.text('You try to scream again when you feel something stab into your anus but the hand clamped firmly over your mouth prevents anything more than a muffled groan. Your muscles go taut as your attacker thrusts into you again and again and again with great self indulgence. All you can do is endure, tears streaming down your face, your ass being violently stretched out by a stranger.');
    scene.actions([
      { label: 'The end…', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'anus', 'rapist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/sex/rape_cum.mp4');
    scene.text('After what feels like an eternity, the man thrusts into you several times, much harder than before before completely burying his cock inside you.');
    scene.text('"Mmmmph-!" You feel him pulsing inside you and you groan uselessly into his hand. The stranger climbs off of you and his cock withdraws from your ass, eliciting a whimper from your lips. With that final act, you\'re left shivering on the ground, completely spent, not even enough strength left to belatedly cry out for help. You hear the clinking of metal behind you again and you feel something trickle out of your ruined asshole.');
    scene.text('"You\'re a real buttslut, girlie. Maybe we can have another \'date\' like this again some time." Even though you can\'t see his face, you can hear the smile in his voice. Moments later, you hear footsteps sound in the alley, slowly fading away until you\'re left in silence.');
    scene.actions([
      { label: 'Cry', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images/locations/shared/street/sex/rape_after1.mp4');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot you feel soaking through the back of your panties.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the thick liquid you feel leaking from between your cheeks and dribbling down your leg.');
      } else {
        scene.text('Once you realize you\'re alone, your emotions completely break through. Sobs rack your body and you writhe on the ground, shuddering as you grit your teeth. Slowly… very slowly… you pull yourself together, tugging your clothes back into place and stumbling to your feet, trying not to think about the wet spot you feel spreading through your pants.');
      }
    }
    scene.actions([
      { label: 'Go to the police station', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    if (((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the train depot and the police station that resides next to it.');
    } else {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the city center and the police station that resides in it.');
    }
    scene.actions([
      { label: 'Continue', goto: ['rape_events', 'rape_report'] },
    ]);
  } },
      { label: 'Don\'t go', handler: (st: GameState) => {
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('For a brief moment you consider telling the police what happened, but emotion wells up inside you and you\'re immediately filled with thoughts of disgust and shame. It doesn\'t make sense. It\'s not like you wanted this to happen. But still. The idea of sharing what happened to you, even to the police… You already feel filthy from what happened tonight. You don\'t want to feel even worse. The only thing you want is to go home.');
    scene.text('You slowly limp away, clutching your arms around your belly, trying your best to leave the events of tonight in the alley behind you…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
  scene.build();
}

function enterParkGangrapeStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).fight ?? {})['rape_type'] = 'gang';
  qspCall(s, 'rape_events', 'rapist_generate');
  // TODO-QSP: gs 'npcStat', $rapist[0]
  scene.img('images/shared/sex/rape/park_gangrape_undress1.mp4');
  scene.text('The men haul you off into the bushes and you try to scream, but the hand clamped over your mouth prevents anything from coming out but muffled sobs. They tear the clothes from your body as you struggle but it\'s no use.');
  scene.text('You can\'t escape.');
  qspCall(s, 'rape_events', 'park_gangrape_struggle1');
  scene.build();
}

function enterParkGangrapeFightLoss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/rape/park_gangrape_undress1.mp4');
  scene.text('A fist slugs you upside the head and your legs turn to jelly. You collapse to the ground and your vision swims.');
  scene.text('"Fucking bitch made us work for it."');
  scene.text('"Just that much more excited to hear her scream when I fuck her ass."');
  scene.text('You hazily feel yourself get dragged into the bushes as clothes are torn off of you. You want to struggle but none of your limbs are moving correctly.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', 1, $rapist[0], 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/rape/park_rape1.jpg');
    scene.text('Some modicum of control makes its way back into your muscles and you begin to struggle even as your attackers force your legs apart.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Then you scream as a cock is shoved into your pussy, tearing your hymen and stealing your virginity.');
    } else {
      scene.text('Then you scream as a cock is shoved into your pussy.');
    }
    qspCall(s, 'rape_events', 'park_gangrape_struggle2');
  } },
  ]);
  scene.build();
}

function enterParkGangrapeFightSurrender(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/rape/park_gangrape_undress1.mp4');
  scene.text('"Stop!" you cry out. "Please! Stop! I give u-"');
  scene.text('Even as you attempt to surrender, a fist slugs you upside the head and your legs turn to jelly. You collapse to the ground and your vision swims.');
  scene.text('"Fucking bitch made us work for it."');
  scene.text('"Just that much more excited to hear her scream when I fuck her ass."');
  scene.text('You hazily feel yourself get dragged into the bushes as clothes are torn off of you. You want to struggle but none of your limbs are moving correctly.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', 1, $rapist[0], 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/rape/park_rape1.jpg');
    scene.text('Some modicum of control makes its way back into your muscles and you begin to struggle even as your attackers force your legs apart.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Then you scream as a cock is shoved into your pussy, tearing your hymen and stealing your virginity.');
    } else {
      scene.text('Then you scream as a cock is shoved into your pussy.');
    }
    qspCall(s, 'rape_events', 'park_gangrape_struggle2');
  } },
  ]);
  scene.build();
}

function enterParkGangrapeStruggle1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Struggle', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', 1, $rapist[0], 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/rape/park_rape1.jpg');
    scene.text('Despite knowing escape is an impossibility, your fight or flight response refuses to let you give in and you continue to struggle beneath the hard grips of the men assaulting you. They force your legs apart and something hard is roughly shoved into your pussy.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('You scream as your hymen tears and your virginity is lost to a rapist.');
    } else {
      scene.text('You scream as the first man begins to rape you.');
    }
    qspCall(s, 'rape_events', 'park_gangrape_struggle2');
  } },
  ]);
  scene.build();
}

function enterParkGangrapeStruggle2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Scream louder', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', rand(3, 5), $rapist[0], 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/rape/park_rape1.jpg');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"Hey, I think this bitch is a virgin," the man giggles.');
      scene.text('"<i>Was</i> a virgin," another voice snickers.');
    }
    scene.text('You keep squirming, keep screaming, as the man keeps fucking you, desperately trying to break free.');
    scene.text('But the multitude of men holding you down is too much and soon, they grow impatient, deciding not to wait their turn.');
    qspCall(s, 'rape_events', 'park_gangrape_tp');
  } },
  ]);
  scene.build();
}

function enterParkGangrapeTp(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Gangraped', handler: (st: GameState) => {
    ((s as any).temp ?? {})['rape_time'] = Math.floor(Math.random() * 21) + 10;
    // TODO-QSP: gs 'arousal', 'vaginal', temp['rape_time'], 'rough', 'rape'
    // TODO-QSP: gs 'arousal', 'anal', -temp['rape_time'], $rapist[1], 'rough', 'rape'
    // TODO-QSP: gs 'arousal', 'bj', -temp['rape_time'], $rapist[2], 'rough', 'rape'
    qspCall(s, 'stat', '');
    scene.text('The men violate you, roughly fucking you with no regard for your pain or your pleasure. With one cock choking your mouth, it\'s all you can do to breathe, let alone make any noise other than the occasional groan as the others ravage your ass and pussy.');
    scene.text('There\'s nothing for you to do except hold on for dear life until it ends.');
    qspCall(s, 'rape_events', 'park_gangrape_end1');
  } },
  ]);
  scene.build();
}

function enterParkGangrapeCum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'cum_call', '', $rapist[0]
  // TODO-QSP: gs 'cum_call', 'anus', $rapist[1]
  // TODO-QSP: gs 'cum_call', 'mouth_swallow', $rapist[2]
  qspCall(s, 'pain', '', 4, 'asshole', 'stretch');
  qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
  qspCall(s, 'pain', '', 4, 'wrists', 'bind');
  qspCall(s, 'pain', '', 4, 'armL', 'bind');
  qspCall(s, 'pain', '', 4, 'armR', 'bind');
  qspCall(s, 'pain', '', 3, 'thighs', 'ache');
  qspCall(s, 'pain', '', 3, 'legL', 'ache');
  qspCall(s, 'pain', '', 3, 'legR', 'ache');
  qspCall(s, 'stat', '');
  scene.build();
}

function enterParkGangrapeEnd1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Endure', handler: (st: GameState) => {
    qspCall(s, 'rape_events', 'park_gangrape_cum');
    scene.img('images/shared/sex/rape/park_gangrape_fuck3.mp4');
    scene.text('Time passes in a blur. You feel like your rape has been going on for hours. You\'re not sure how much longer you can-');
    scene.text('<b><i>"MMMMPH-!"</i></b>');
    scene.text('Just as you are near the breaking point, a hot glob fills your ass causing you to shriek a muffled scream around the cock in your mouth.');
    scene.text('Seconds later, the man in your pussy grunts, blasting his load into your uterus.');
    scene.text('Even as you try to scream, hot bitter sperm fills your mouth and your rapist jams his entire cock down your throat. Tears fill your eyes as you are forced to swallow or drown.');
    qspCall(s, 'rape_events', 'park_gangrape_end2');
  } },
    { label: 'Pass out', handler: (st: GameState) => {
    qspCall(s, 'rape_events', 'park_gangrape_cum');
    scene.img('images/shared/sex/rape/park_rape5.jpg');
    scene.text('In the end, it\'s too much to bear.');
    scene.text('With your body being pummelled in every hole and your mind overwhelmed, everything just shuts down, and unconsciousness takes you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/11.jpg');
    if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1) {
      (s as any).temp_thresh = 0;
    } else {
      if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0) {
        (s as any).temp_thresh = 3;
      } else {
        if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
          (s as any).temp_thresh = 1;
        } else {
          if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3) {
            (s as any).temp_thresh = 5;
          } else {
            if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
              (s as any).temp_thresh = 8;
            }
          }
        }
      }
    }
    if ((Math.floor(Math.random() * 40) + 1) <= ((s as any).temp_thresh ?? 0)) {
      qspCall(s, 'abduction', 'abdCarTrunk');
    } else {
      qspCall(s, 'rape_events', 'park_wakeup');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkGangrapeEnd2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Cough', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude2.jpg');
    scene.text('Their lust satisfied, your rapists toss you aside into the mud where you retch, hacking up the remnants of the cum you were unable to swallow.');
    scene.text('You writhe on the ground, trembling as they walk away laughing, as casual as if they had just finished getting drunk at the cinema. By the time you manage to struggle to your knees, they\'re already gone.');
    qspCall(s, 'rape_events', 'park_walkaway1');
  } },
    { label: 'Pass out', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_rape5.jpg');
    scene.text('In the end, it\'s too much to bear.');
    scene.text('You try to pull back from the cock that chokes you, but you\'re unable to escape it. You panic, coughing even as your vision grows blurry, but your rapist refuses to let you go until you\'ve swallowed every drop.');
    scene.text('You black out instead.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/system/1_openings/4_csb/11.jpg');
    qspCall(s, 'rape_events', 'park_wakeup');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkWakeup(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['no_health'] = 1;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'sleep_simple', 'forced', Math.floor(Math.random() * 61) + 60);
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude1.jpg');
    scene.text('Slowly, you come back to consciousness and your eyes creak open.');
    scene.text('You\'re laying naked in the mud. Your body aches and something leaks from your sore ass and pussy and your mouth has an odd taste in it.');
    scene.text('<i>What happ-</i> Memory comes rushing back before the thought can complete.');
    scene.text('You were raped.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude2.jpg');
    scene.text('Shakily, you pull haul yourself out of the mud, stumbling to your feet.');
    scene.text('There are no signs of your attackers except for the muddy ground where bodies wrestled.');
    scene.text('You are alone.');
    qspCall(s, 'rape_events', 'park_walkaway1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkWakeupMorning(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterParkWalkaway1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Look for your clothes', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 60);
    qspCall(s, 'clothing', 'dispose');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/rape/park_after_nude3.jpg');
    scene.text('Looking around, you try to find something to cover yourself with. All around you are the remains of your ruined clothing.');
    if (((s as any).PCloDress ?? 0) === 1) {
      scene.text('Your dress is in tatters, torn to shreds.');
    } else {
      scene.text('Your outfit is in tatters, torn to shreds.');
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      scene.text('Your bra\'s clasps have been ripped off, the cups badly ripped.');
    }
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Your panties have been snapped, now nothing more than a randomly shaped string of fabric.');
    }
    qspCall(s, 'rape_events', 'park_walkaway2');
  } },
  ]);
  scene.build();
}

function enterParkWalkaway2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Back to the road', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude_walk1.mp4');
    scene.text('Naked and with cum leaking from every orifice, you limp away, looking for the road…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Back to the road (stoic)', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude_walk1.mp4');
    scene.text('You limp away, forcing yourself to take one step after the other.');
    scene.text('You\'ve been gangraped. Your body is bruised, battered, and filthy from the ordeal, cum leaking from every orifice. And there was nothing you could have done about it.');
    scene.text('But that doesn\'t mean you need to remain a victim. You\'re still alive. That means something. You survived the rape, you can survive the aftermath too. You just need to keep going.');
    scene.text('Grim determination flows through you, giving strength to your steps, and you stumble through the park until you find the road…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterParkWalkaway3(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Back to the road', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude_walk1.mp4');
    scene.text('You don\'t even bother trying to find your clothes. Instead you limp away, naked and with cum leaking from every orifice, looking for the road…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Back to the road (stoic)', handler: (st: GameState) => {
    scene.img('images/shared/sex/rape/park_after_nude_walk1.mp4');
    scene.text('You don\'t even bother trying to find your clothes. Instead you limp away, forcing yourself to take one step after the other.');
    scene.text('You\'ve been gangraped. Your body is bruised, battered, and filthy from the ordeal, cum leaking from every orifice. And there was nothing you could have done about it.');
    scene.text('But that doesn\'t mean you need to remain a victim. You\'re still alive. That means something. You survived the rape, you can survive the aftermath too. You just need to keep going.');
    scene.text('Grim determination flows through you, giving strength to your steps, and you stumble through the park until you find the road…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRapeReport(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/pavlovsk/police/pavrec.jpg');
    scene.text('One step after another, you trudge through town until you suddenly find yourself standing inside the police station. A bored looking cop glances at you.');
    scene.text('"Can I help you?"');
    scene.text('"I- I\'d like t-to report a r-rape…" you stammer out. The officer\'s eyes go wide with surprise, but less like he seems shocked at what you said happened to you and more like he didn\'t expect you to have a real complaint.');
    scene.text('"Oh! Well, just come this way, we can take your statement over here."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('You sit down at a shoddy looking desk and another officer who looks only marginally more competent than the one who greeted you sits down across from you.');
    scene.text('"Alright ma\'am, tell me what happened to you."');
    scene.text('You explain to the officer as best as you can what happened to you while he takes notes. How you were randomly attacked, how you were violated.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('"And where did the attack occur?"');
    if (((s as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"In th-the commercial district. But he pulled me away. I… I don\'t remember how far…"');
    } else {
      if (((s as any).loc ?? 0) === 'pav_residential') {
        scene.text('"In th-the commercial district. But he pulled me away. I… I don\'t remember how far…"');
      }
    }
    scene.text('"Can you describe what he looked like?"');
    scene.text('The blood drains from your face. "I… I-!"');
    scene.text('"Anything about him will be helpful. Height? Build? Hair color? Eye color?"');
    scene.actions([
      { label: 'I… can\'t…', handler: (st: GameState) => {
    scene.text('"He was… I don\'t remember how tall he was… And… he was wearing a nondescript hoody, I couldn\'t tell what his body type was… And-! And I don\'t know what he looks like… he was behind me during… the event…"');
    scene.text('The officer doesn\'t say anything but you see him slightly shake his head. You realize that the information you gave him is going to be of little to no use at all. A rape in town and nothing else to go off of? You might as well have told him you saw a bird in the park.');
    scene.text('For a moment, you wonder how many other girls like you have sat at this desk filing a report just like this one only for it to go nowhere. You wonder if any of them were been raped by the same man who raped you…');
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/pavrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('And then he walks away. Leaving you so very alone…');
    scene.actions([
      { label: 'Leave', goto: ['pav_market', ''] },
    ]);
  } },
      { label: 'Can I get a rape kit?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('Suddenly, a spark of hope alights in your brain.');
    scene.text('"What about a rape kit?" you ask desperately. "He… finished inside of me. I could-"');
    scene.text('Before you can finish, you see the officer shaking his head.');
    scene.text('"I\'m sorry ma\'am, but we are a small town police department. We simply don\'t have enough funding to afford rape kits. Even if we did, we don\'t have a lab that could examine it. I\'m sorry."');
    scene.text('As quickly as your hope flared, it is extinguished and you slump in your chair, feeling defeated.');
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/pavrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you." And then he walks away.');
    scene.text('Leaving you alone with your thoughts and memories of your rape…');
    scene.actions([
      { label: 'Leave', goto: ['pav_market', ''] },
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
  } else {
    scene.img('images/locations/city/citycenter/police/cityrec.jpg');
    scene.text('One step after another, you trudge through town until you suddenly find yourself standing inside the police station. On the other side of a plexiglass reception, you can see several officers milling about, though none pay attention to you. Stepping up to the window, you pick up the phone and hear a buzzer sound on the other side. One of the officers picks it up without hesitation and looks at you.');
    scene.text('"Can I help you?"');
    scene.text('"I- I\'d like t-to report a r-rape…" you stammer out. The officer nods but his expression doesn\'t change in the slightest.');
    scene.text('"Someone will come out to meet you. Follow them and they\'ll take your statement in the back."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('As promised, someone comes out and takes you into their office space behind. You sit down at a shoddy looking desk and the officer takes his place on the other side of it.');
    scene.text('"Alright ma\'am, tell me what happened to you."');
    scene.text('You explain to the officer as best as you can what happened to you while he takes notes. How you were randomly attacked, how you were violated.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('"And where did the attack occur?"');
    if (((s as any).loc ?? 0) === 'city_center') {
      scene.text('"Here, i-in the city center. But he pulled me away. I… I don\'t remember how far…"');
    } else {
      if (((s as any).loc ?? 0) === 'city_residential') {
        scene.text('"In th-the residential district. But he pulled me away. I… I don\'t remember how far…"');
      } else {
        if (((s as any).loc ?? 0) === 'city_industrial') {
          scene.text('"In th-the industrial district. But he pulled me away. I… I don\'t remember how far…"');
        } else {
          if (((s as any).loc ?? 0) === 'city_island') {
            scene.text('"On th-the island, Vasilyevsky Island. But he pulled me away. I… I don\'t remember how far…"');
          } else {
            if (((s as any).loc ?? 0) === 'city_park') {
              scene.text('"In th-the park. But he pulled me away. I… I don\'t remember how far…"');
            }
          }
        }
      }
    }
    scene.text('"Can you describe what he looked like?"');
    scene.text('The blood drains from your face. "I… I-!"');
    scene.text('"Anything about him will be helpful. Height? Build? Hair color? Eye color?"');
    scene.actions([
      { label: 'I… can\'t…', handler: (st: GameState) => {
    scene.text('"He was… I don\'t remember how tall he was… And… he was wearing a nondescript hoody, I couldn\'t tell what his body type was… And-! And… I don\'t know what he looks like… he was behind me during… the event…"');
    scene.text('The officer doesn\'t say anything but you see him slightly shake his head. You realize that the information you gave him is going to be of little to no use at all. A rape in town and nothing else to go off of? You might as well have told him you a pigeon did it.');
    scene.text('For a moment, you wonder how many other girls like you have sat at this desk filing a report just like this one only for it to go nowhere. You wonder if any of them were been raped by the same man who raped you…');
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/pavrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('And then he walks away. Leaving you so very alone…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Can I get a rape kit?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cubicle.jpg');
    scene.text('"C-can I get a… a rape kit…?" you mumble.');
    scene.text('The officer nods at you and pulls a small box out of a drawer in his desk.');
    scene.text('"If you just come this way ma\'am." The two of you get up and he leads you through the office area to the bathroom where he hands you the box. Looking down at it, you read the label on it.');
    scene.text('<i><b>SEXUAL ASSAULT EVIDENCE COLLECTION KIT</b></i>');
    scene.text('You take it from him, cradling it in your hands.');
    scene.text('"This will let you catch him right?" The officer shrugs in return.');
    scene.text('"It depends. DNA evidence is only useful if we can match it to the person it came from."');
    scene.text('"So you\'re saying this might not do anything?"');
    scene.text('He shrugs again. "It\'s better than nothing."');
    scene.actions([
      { label: 'Use the rape kit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityext.jpg');
    scene.text('Closing the bathroom door, you open the kit and you swab your insides, feeling humiliated and disgusted when it comes back covered in semen. Packaging it up, you re-open the door and hand the evidence to the officer.');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you." And then he walks away.');
    scene.text('Leaving you alone with your thoughts and memories of your rape…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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
    case 'urban_rape_limp':
      enterUrbanRapeLimp(s, scene);
      break;
    case 'urban_vaginal_cry':
      enterUrbanVaginalCry(s, scene);
      break;
    case 'urban_anal_cry':
      enterUrbanAnalCry(s, scene);
      break;
    case 'urban_repress':
      enterUrbanRepress(s, scene);
      break;
    case 'urban_panties_after':
      enterUrbanPantiesAfter(s, scene);
      break;
    case 'urban_rape_end':
      enterUrbanRapeEnd(s, scene);
      break;
    case 'urban_repress_end':
      enterUrbanRepressEnd(s, scene);
      break;
    case 'urban_police_after':
      enterUrbanPoliceAfter(s, scene);
      break;
    case 'park_image':
      enterParkImage(s, scene);
      break;
    case 'park_rape_fight_start':
      enterParkRapeFightStart(s, scene);
      break;
    case 'park_rape_struggle_start':
      enterParkRapeStruggleStart(s, scene);
      break;
    case 'park_rape_solo':
      enterParkRapeSolo(s, scene);
      break;
    case 'park_gangrape_start':
      enterParkGangrapeStart(s, scene);
      break;
    case 'park_gangrape_fight_loss':
      enterParkGangrapeFightLoss(s, scene);
      break;
    case 'park_gangrape_fight_surrender':
      enterParkGangrapeFightSurrender(s, scene);
      break;
    case 'park_gangrape_struggle1':
      enterParkGangrapeStruggle1(s, scene);
      break;
    case 'park_gangrape_struggle2':
      enterParkGangrapeStruggle2(s, scene);
      break;
    case 'park_gangrape_tp':
      enterParkGangrapeTp(s, scene);
      break;
    case 'park_gangrape_cum':
      enterParkGangrapeCum(s, scene);
      break;
    case 'park_gangrape_end1':
      enterParkGangrapeEnd1(s, scene);
      break;
    case 'park_gangrape_end2':
      enterParkGangrapeEnd2(s, scene);
      break;
    case 'park_wakeup':
      enterParkWakeup(s, scene);
      break;
    case 'park_wakeup_morning':
      enterParkWakeupMorning(s, scene);
      break;
    case 'park_walkaway1':
      enterParkWalkaway1(s, scene);
      break;
    case 'park_walkaway2':
      enterParkWalkaway2(s, scene);
      break;
    case 'park_walkaway3':
      enterParkWalkaway3(s, scene);
      break;
    case 'rape_report':
      enterRapeReport(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rape_events: LocationDef = {
  name: 'rape_events',
  title: 'You defeat the rapists and empty their wallets as they lie u',
  region: 'other',
  enter: enter,
};
