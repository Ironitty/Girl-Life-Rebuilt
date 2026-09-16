import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You go to the cinema with <<$npcdesc>>, who buys two tickets for the back row.
  scene.text(`You go to the cinema with ${((s as any).npcdesc || '')}, who buys two tickets for the back row.`);
  // TODO-QSP: dynamic text: While you wait for the movie to start, <<$npcdesc>> tells you an anecdote as he ...
  scene.text(`While you wait for the movie to start, ${((s as any).npcdesc || '')} tells you an anecdote as he buys popcorn and drinks.<br>`);
  qspCall(s, 'anekdot', '');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      qspCall(s, 'boylove', 'tits');
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 30) {
      qspCall(s, 'boylove', 'figure');
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        qspCall(s, 'boylove', 'figure');
      }
    } else {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 15) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'figure');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 1);
  }, goto: ['kinoM', 'a'] },
    { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kinoM', 'a'
  } },
    { label: 'Not funny', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (-3));
  }, goto: ['kinoM', 'a'] },
  ]);
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/cinema/kino.jpg');
  // TODO-QSP: dynamic text: You and <<$npcdesc>> quickly find your seats and <<$npcdesc>> puts the big cup o...
  scene.text(`You and ${((s as any).npcdesc || '')} quickly find your seats and ${((s as any).npcdesc || '')} puts the big cup of popcorn on your lap.`);
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Hug his arm', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    scene.text('You lean against him and hold his arm, taking his hand in yours. He leans over and kisses you in response. The two of you sit there holding hands for the entire movie.');
    qspGoto(s, 'kinoM', 'b');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Hug his arm', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    scene.text('You lean against him and hug his arm, taking his hand in yours. He leans over and kisses you. Once the lights go out and the theatre gets dark, his hand breaks free from yours and begins to rub your knee. A few minutes later the hand works its way up your thighs, sliding between them to your crotch. He rubs your pussy with his fingers and leans over to whisper, "Baby, I want you right here, right now."');
    scene.actions([
      { label: 'Shush him and remove his hand, so you can watch the movie', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kinoM', 'b'
  } },
      { label: 'Jerk him off', goto: ['kinoM', 'hj'] },
      { label: 'Give him a blowjob', goto: ['kinoM', 'bj'] },
      { label: 'Sit on his lap and fuck him', goto: ['kinoM', 'sex'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the movie', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
    qspCall(s, 'exp_gain', 'intel', 1);
    scene.text('The movie proves interesting and you sit through the whole thing without interruption.');
    qspGoto(s, 'kinoM', 'b');
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 2);
  scene.img('images/characters/city/boyfriend/sex/event/cinema/sinema.jpg');
  // TODO-QSP: dynamic text: You reach over and undo his pants, opening his fly and pulling the front of his ...
  scene.text(`You reach over and undo his pants, opening his fly and pulling the front of his boxers just far enough down for his dick to spring free - he was already rock-hard. Looking around to make sure no one is watching, ${((s as any).npcdesc || '')} takes out a condom and puts it on his penis; while he does that, you adjust your clothes so that you can pull your panties down to allow access to your pussy. With a final look around you lift up slightly and slide across his lap, reaching between your legs to take his dick in your hand and guide it inside your moist cunt. You bite your lip as his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock enters your pussy, to keep from moaning out loud. Then you begin to slowly move, sneakily fucking your lover in the dark theatre behind the rest of the audience.`);
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).orgasm_or = 'yes';
    (s as any).orgasm_txt = 'As you feel pleasure growing inside of you, you start moaning involuntarily, louder and louder. ' + ((s as any).npcdesc ?? 0) + ' puts his hand over your mouth in an effort to muffle the noises. Then a massive orgasm hits you, leaving you shuddering and quivering on his cock.';
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> cannot take it any longer and shoots his load into the condom. Once...
  scene.text(`${((s as any).npcdesc || '')} cannot take it any longer and shoots his load into the condom. Once he is finished, you move back to your seat and straighten out your clothes. Once you both are fully dressed again, you look at each other and stifle a laugh. Your act went unnoticed and you watch the rest of the movie holding hands.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kinoM', 'b'
  } },
  ]);
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 2);
  scene.img('images/characters/city/boyfriend/sex/event/cinema/sinema1.jpg');
  // TODO-QSP: dynamic text: You reach over and undo his pants, opening the fly and pulling the front of his ...
  scene.text(`You reach over and undo his pants, opening the fly and pulling the front of his underwear down just enough. His dick springs free, already rock-hard. You look around to make sure no one is watching, then lean over and put your face in his lap. You wrap your lips around the shaft of his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock and begin to slowly suck him off in the dark theater.`);
  // TODO-QSP: dynamic text: Soon <<$npcdesc>> can no longer hold back and shoots his load into your mouth, f...
  scene.text(`Soon ${((s as any).npcdesc || '')} can no longer hold back and shoots his load into your mouth, flooding it with spurts of hot sperm. You keep your lips wrapped tightly around his dick until he is finished unloading. Lacking any better options, you swallow it all down and suck his dick clean. Once done you sit back up. The two of you look at each other and stifle a laugh, as no one seems to have noticed what you just did. You watch the rest of the movie holding hands quietly.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kinoM', 'b'
  } },
  ]);
  scene.build();
}

function enterHj(s: GameState, scene: SceneBuilder): void {
  (s as any).hja = ((s as any).hja ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  scene.img('images/characters/city/boyfriend/sex/event/cinema/sinema2.jpg');
  // TODO-QSP: dynamic text: You reach over and undo his pants, opening the fly and pulling the front of his ...
  scene.text(`You reach over and undo his pants, opening the fly and pulling the front of his underwear down just enough. His dick springs free, already rock-hard. You look around to make sure no one is watching, while ${((s as any).npcdesc || '')} takes out a condom and puts it on his penis. You begin to stroke his cock while watching the movie.`);
  scene.text('Soon your skillful movements make him shoot his load in the condom. Once done, you lean back and watch the rest of the movie holding hands.');
  qspCall(s, 'arousal', 'hj', 10, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kinoM', 'b'
  } },
  ]);
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  scene.text('The movie ends and the lights switch on in the theater. Soon the audience heads for the exits.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Home', goto: ['sexm', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'a':
      enterA(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'b':
      enterB(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kinoM: LocationDef = {
  name: 'kinoM',
  title: 'Soon your skillful movements make him shoot his load in the ',
  region: 'other',
  enter: enter,
};
