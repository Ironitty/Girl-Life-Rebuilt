import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower1.jpg');
  scene.text('You hear a suspicious noise.');
  scene.actions([
    { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower2.jpg');
    scene.text('Wiping the steam off the glass, you see only a vaguely outline of a man. The man quickly moves to the exit and leaves before you can tell who it was.');
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (2);
    scene.actions([
      { label: 'Finish shower', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower1.jpg');
  scene.text('You hear a suspicious noise. Wiping the steam off the glass, you see the coach hiding quite poorly in the dark, spying on you as you shower.');
  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Carry on [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Carry on [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A69', 2);
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower6.jpg');
    scene.text('You smile at Mikhail Nikolaevich and continue to wash, making a show of cleaning your bulging ass and breasts. The coach watches but stays perfectly still.');
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Dry yourself off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower5.mp4');
    scene.text('Stepping out of the shower, you are not at all embarrassed by the coach who continues to stare at you. Drying yourself with a towel, you ask, "Get everything you wanted, coach?" The coach smiles, then shakes his head, before leaving slowly.');
    scene.actions([
      { label: 'Finish shower', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower4.jpg');
    scene.text('You scream with fright, and the coach quickly runs out.');
    scene.actions([
      { label: 'Finish shower', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower1.jpg');
  scene.text('You hear a suspicious noise. Wiping the steam off the glass, you see coach there, his cock in his hand, looking at your silhouette…');
  qspCall(s, 'willpower', 'exhib', 'self');
  if ((((s as any).pcs_horny ?? 0) >= 70  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 50)) {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Masturbate [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A69', 1);
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (4);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower8.jpg');
    scene.text('You stop and fall into a stupor for a few seconds, feeling a fire in your belly. You want to do it, but you still hesitate. Watching you frozen with your hand on your pussy, coach says, "Don\'t be afraid, you\'re a big girl now and it\'s normal to have urges. You\'ve let me watch you, now you can watch me."');
    scene.actions([
      { label: 'Watch him', handler: (st: GameState) => {
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower9.mp4');
    scene.text('You look at his cock as if spellbound… at the same time caressing your clit and struggling to suppress a groan. You see his hand stroking his member, the head appearing and disappearing. Shaking his balls… the coach groans, and his dick squirts straight at you. Sperm splashes on your body, destroying your resolve, and you shake in a powerful orgasm. Through the waves of orgasm you just barely manage to make out what the coach is saying: "That was fun, we should do it again sometime."');
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish shower', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Flip him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower7.jpg');
    scene.text('The coach takes the hint and, tucking his cock away, does up his trousers and leaves. "It seems he did not have time to cum." You think with a touch of glee."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower10.jpg');
  scene.text('Leaning against the glass and sticking out your ass, you moan from the pounding your ass is receiving. What the fuck is that moving on the other side of the glass?');
  scene.actions([
    { label: 'Get a better look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower19.jpg');
    scene.text('You wipe the steam off a patch of the glass in front of you and see coach sitting in the dark, watching as Ivan fucks you in the ass. When he got here and how much he\'s seen, you don\'t know, but your eyes meet, and you are hit by a wave of shame and arousal. You literally throw yourself forward trying to jump off Ivan\'s member, but your shaky legs betray you.');
    scene.text('Whether from Ivan\'s actions, the fact that the coach is watching you, or the combination of both, you begin to cum violently, shouting and rhythmically squeezing your classmates cock with your anus. This is more than enough to send Ivan over the edge, his cum filling your ass.');
    qspCall(s, 'arousal', 'anal', 10, 'exhibitionism');
    qspCall(s, 'cum_call', 'anus', 'A3');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Recover', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower20.mp4');
    scene.text('Opening your eyes, you see coach standing above you. He quite unceremoniously says: "Spread your bread."');
    qspCall(s, 'willpower', 'cum_outside', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Cover up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Cover up [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower12.jpg');
    scene.text('Scared, you cover you ass with your hands and look at him like a deer caught in the headlights.');
    scene.text('Mikhail Nikolaevich gives you an evil look, "Prokhorov fucks your ass and you scream with joy, but your coach just wants to alleviate some tension and you curl up all scared?"');
    scene.text('You can see from the look in his eyes that he\'s been at the wine, and his slurring and unsteady legs confirm this. "Your ass isn\'t that special." He spits on you and stumbles out of the showers.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wash your ass', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
  }, goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Comply', handler: (st: GameState) => {
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (2);
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower11.mp4');
    scene.text('You have no idea what he means, but a simple gesture makes it clear what he wants. You willingly grab your butt cheeks and stretch them apart, giving coach full view of your holes. The coach walks up to you his cock in his hand, and with just a few quick jerks, sprays his seed over your ass, his cum mixing with Ivan\'s as it dribbles out of your butt.');
    qspCall(s, 'arousal', 'flash', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash your ass', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
  }, goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower10.jpg');
  scene.text('Leaning against the glass and sticking out your ass, you moan from the pounding your ass is receiving. You can see movement through the glass…');
  scene.actions([
    { label: 'Get a better look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower19.jpg');
    scene.text('It seems Mikhail, again, decided to admire how your classmate fucks your anus, but Ivan is too busy with your ass to notice anything. You decide to tease the coach a little…');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Drop to your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower14.mp4');
    scene.text('You get on your knees and begin to carefully suck Ivan\'s member. Surprised, you hear a satisfied snort from both parties, the participant and the viewer. It seems they like what\'s happening. You accidentally nudge the door into the shower, and it opens, giving the coach an unobstructed view of what you plan to do next.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick his balls', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower15.mp4');
    scene.text('Pulling the cock from your mouth, you begin excitedly licking your classmate\'s swinging balls. You first put one, then the other in your mouth, kissing and sucking them, while stroking his shaft with your hands. Finally, you let them slide out of your mouth and down your chin, as you move behind them and start licking your way up, between his butt cheeks.');
    qspCall(s, 'arousal', 'rimming_give', 5, 'sub', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'That did it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower16.mp4');
    scene.text('It seems Ivan never expected this, but moments later, jets of sperm begin fountaining from his member, and heavy, warm drops start falling on your face. He clearly liked it very much.');
    scene.actions([
      { label: 'Turn', handler: (st: GameState) => {
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    (s as any).pcs_horny = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower17.jpg');
    scene.text('You turn to see the coach still looking, wide-eyed and with his jaw hanging open. Ivan finally notices this, and oblivious to the fact that your actions were only partially for his benefit, hastily covers up, grabs his things and jumps out of the shower. As soon as the door closes behind Ivan, the coach walks closer to you, pulls his member out of his pants and points it at you. Passion and lust overpower you and you immediately reach for his cock, but unfortunately, it seems the coach was already on the edge, and he begins to cum as soon as your hands envelop his shaft. He sprays your breasts with his spunk, then promptly pulls up his pants and leaves you in the shower. On your knees. Overflowing with arousal.');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower18.jpg');
    qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Wash your face', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'Wash your face', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gdksport', 'start'] },
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

function enter5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower10.jpg');
  scene.text('Leaning against the glass and sticking out your ass, you moan from the pounding your ass is receiving. You can see movement through the glass…');
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get a better look', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower19.jpg');
    scene.text('Through the glass, you see Mikhail staring and approaching the booth, while Ivan pays attention to nothing but your ass bouncing with his thrusts. Ivan forgot to close the shower door, and you frantically try to correct his mistake, but the constant ass-pounding and Ivan\'s tight grip on your hips will not let you do it. The door abruptly opens, and you hear the coach growl: "Again? Prokhorov, I\'ve had it with you! I will tell your coach and have you banned from the competitions you are preparing for." You immediately feel Ivan\'s penis going soft and shrinking inside you, before sliding limply out of your ass. Still terrified, he turns sideways to hide his dignity and pleads "Please don\'t do that coach Nikolaevich! It won\'t happen again, and I\'ll help with the hall whenever you need me to!" before grabbing his stuff and getting out of the shower.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) < 30) {
      scene.actions([
        { label: 'Close the shower door', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower21.jpg');
    scene.text('Left there cold and upset with the abrupt end of your sex session with Ivan, you look indifferently at the coach and close the shower door. With nothing else left, you proceed with what you came here for in the first place and finish washing in the shower…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Seduce coach', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A69');
    qspCall(s, 'npc_relationship', 'modify', 'A69', 3);
    (s as any).voltrenerVoyeur = ((s as any).voltrenerVoyeur ?? 0) + (1);
    (s as any).ShowerIvan = 3;
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenersexshower22.jpg');
    scene.text('Still unsatisfied by the abrupt end of your sex session with Ivan, you make no effort to close the door or hide your body from the coach. Any fool would understand what you wanted in this situation, and it seems the coach has thought about what you said earlier, so he undresses and climbs into the shower.');
    scene.actions([
      { label: 'On your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower23.jpg');
    scene.text('You drop to your knees and take a moment to admire Mikhail\'s impressive, rock-hard member. As it moves closer, you start to work your tongue, carefully licking first the head of the penis and then the whole thing, with determination burning in your eyes.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take it in your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower24.mp4');
    scene.text('Kissing his head, you take it in your mouth and begin to lightly suck, before you try to take him deeper in your mouth. Soon, the coach begins thrusting into your mouth, cautiously building up to fucking your throat, but not shoving in his whole length like Ivan.');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lift your legs', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A69');
    (s as any).pose = 0;
    (s as any).finrand = 1;
    if (((s as any).vballVars ?? 0)?.['coachsex'] < 1) {
      (s as any).vballVars['coachsex'] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.text('After a few minutes the coach pulls his cock out of your mouth, pushes you on your back, and raises and spreads your knees so they\'re slightly bent and resting against his chest. In this position your holes are unceremoniously put on display. He pushes a finger into each hole and starts to rub your insides, gradually increasing his pace.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower26.mp4');
      scene.text('For a moment, you feel some regret you might lose your virginity like this, though in your excitement you don\'t focus too much on this thought. However, then the coach stops with surprise and says: "Are you a virgin?". It seems he felt one of his finger push against your hymen. Pulling his fingers from your pussy, he switches all his focus to your ass, saying: "No, I will not take your virginity. Besides, you\'ve got more beautiful young holes for me to explore." He continues to finger your anus, which along with his words has you whining with desire. You can\'t wait any longer and moan out loud: "Fuck me!"');
    } else {
      if (((s as any).pcs_vag ?? 0) <= 15) {
        scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower26.mp4');
        scene.text('He is having some difficulties fingering your pussy. It seems you\'re too tight for him. Pulling the finger from your pussy, he switches all his focus to your ass, saying: "You\'re a bit too tight for me, but no matter, you\'ve got more beautiful young holes for me to explore." He continues to finger your anus, which along with his words has you whining with desire. You can\'t wait any longer and moan out loud: "Fuck me!"');
      } else {
        if (((s as any).pcs_vag ?? 0) > 15  &&  ((s as any).mesec ?? 0) <= 0) {
          scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower25.mp4');
          scene.text('Thrusting one finger in your ass and one in your pussy, the coach begins to move them at the same time in both holes. The feeling of them rubbing against each other through the thin walls between them is driving you wild and forcing you to moan and squirm. A moan almost becomes a scream: "Fuck me, fuck, fuck…", - you cry completely deprived of reason from the overflowing desire.');
          qspCall(s, 'willpower', 'sex', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Jump on his member [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Jump on his member [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower27.jpg');
    qspCall(s, 'arousal', 'foreplay', (-15), 'sub');
    qspCall(s, 'arousal', 'vaginal', 15, 'sub');
    qspCall(s, 'arousal', 'end');
    (s as any).finrand = 0;
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Offer your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower28.jpg');
    scene.text('You present your ass to the coach and soon feel the head of his penis pushing against your anus. You feel a slight pain as it passes through and try to relax your ass for what\'s coming.');
    scene.actions([
      { label: 'Relax your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenersexshower29.mp4');
    qspCall(s, 'arousal', 'anal', 15, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const volley_coach_shower: LocationDef = {
  name: 'volley_coach_shower',
  title: 'You hear a suspicious noise.',
  region: 'other',
  enter: enter,
};
