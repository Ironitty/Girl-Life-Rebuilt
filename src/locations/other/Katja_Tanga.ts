import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  if (((s as any).katjaQW ?? 0)?.['school_sex'] === 0) {
    (s as any).katjaQW['school_sex'] = 1;
    // TODO-QSP: !! Flag sex with Kate at the school
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_4.jpg');
  scene.text('You hurry down the hall hand in hand with Katja towards the storage room she told you about as each of you tries to pull up the other\'s skirt. Once at the door, she pulls out a key and unlocks it. You grab and squeeze her ass as she does before she pushes the door open and turns towards you. You both immediately start kissing and fondling each other, barely avoiding tumbling into the room before you manage to close the door and lock it.');
  scene.actions([
    { label: 'Bare her breasts', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_3.jpg');
    scene.text('You continue kissing as you start to unbutton each other\'s shirts and you\'re both soon topless. You stop kissing her lips and start kissing her neck, then her shoulder, leaving a trail of kisses down to her breasts. You begin to kiss, lick and suck on her nipple as your hand fondles her other breast. She moans softly in pleasure.');
    scene.actions([
      { label: 'Work your way to her pussy', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', (-5), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_10.jpg');
    scene.text('After a few minutes of teasing her nipples, you kiss your way down to her stomach, pulling off her skirt as you do. Your lips descend down her body and you begin kissing and teasing her clit with your tongue. You pull her down and gently push her down on her back. Once she\'s comfortable, you slide two of your fingers into her wet pussy and begin to finger fuck her. She moans in pleasure as she squeezes her breasts firmly in her hands.');
    if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1)  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).npc_vag ?? 0)?.['A14'] > 0) {
      scene.actions([
        { label: 'Get dildo', handler: (st: GameState) => {
    if (((s as any).dildonumber ?? 0) > 0) {
      qspCall(s, 'boyStat', 'D<<dildonumber>>');
    } else {
      qspCall(s, 'boyStat', 'D1');
      if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
        qspCall(s, 'boyStat', 'D2');
      } else {
        qspCall(s, 'boyStat', 'D3');
        if (((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
          qspCall(s, 'boyStat', 'D4');
        } else {
          qspCall(s, 'boyStat', 'D5');
          if (((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
            qspCall(s, 'boyStat', 'D6');
          } else {
            qspCall(s, 'boyStat', 'D7');
          }
          qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian');
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_5.jpg');
          scene.text('Her pussy is now soaking wet and you can tell she would like something bigger than your fingers in her. Reaching over to your bag, you pull out your dildo and slide it up between her breasts to show her what you have in store for her. Her eyes widen slightly at the sight of the dildo, but she quickly pulls your hand up and begins to suck on the dildo. She moans onto the dildo as you continue to finger fuck her.');
          scene.actions([
            { label: 'Fuck Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_dildo_give', (-5), 'lesbian');
    qspCall(s, 'arousal', 'rimming_give', 5, 'lesbian');
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    (s as any).katjaQW['horny'] = 0;
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_9.jpg');
    scene.text('Katja begins moaning louder and bucking her hips against your fingers. You pull the dildo out of her mouth and your fingers out of her pussy before rolling her onto her stomach and sliding the wet dildo into her soaking wet pussy.');
    scene.text('You bury your face between her ass cheeks and lick her asshole as you start thrusting the dildo as deep as it will go. Her moans of pleasure get ever louder and she begins to arch her hips up, trying to take even more of the dildo into herself, but there is no more to give.');
    scene.text('Instead, you stick your tongue in her ass and begin to tongue fuck her ass. This causes her to moan even louder and before long she starts bucking her hips as her body spasms in an intense orgasm as she cums.');
    scene.actions([
      { label: 'Use dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_7.jpg');
    scene.text('As her quivering body subsides and her panting breath gets under control, you pull the dildo out of her pussy and your tongue out of her ass. She gives you a dreamy smile and reaches over to take the dildo out of your hand. She gets up and sits down between your legs, lifting them up and dragging your pussy up to her. "You\'re so beautiful, I could just eat you right up…" she whispers before she starts licking your pussy, her tongue occasionally darting inside you.');
    scene.text('As your pussy gets wetter, you reach up and grab her hair. "Yes, faster, faster!" you moan, wanting more. For several minutes, she only uses her tongue before she pulls away, slides the dildo into your wet pussy and begins furiously fucking you with it. Using her other hand, she slips one of her fingers in your ass and begins to finger fuck your ass at the same time.');
    qspCall(s, 'arousal', 'anal_finger', (-5), 'lesbian');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.text('After your orgasm subsides, she pulls her finger and the dildo out of you before she extends the dildo down to your mouth. You open your mouth and she slides the wet dildo inside. You happily suck your own pussy juices off of it as Katja watches with hungry eyes, biting her lower lip as you finish cleaning the dildo with your mouth. "That was amazing! I bet all the boys will be walking to class with erections thinking about what we were doing," she says and you both laugh before quickly getting dressed.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Tongue fuck Katja', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    (s as any).katjaQW['horny'] = 0;
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_8.mp4');
    scene.text('Pulling your fingers out of her pussy, you run your lips along her inner thighs until you reach her clit. You kiss, lick and tease her clit with your tongue, causing her to moan in pleasure while raising her hips to try and force your tongue into her as her wetness soaks her inner thighs and your face. Giving in, you slip your tongue inside her pussy and moans loudly and bucks against your face before she reaches down and grabs your hair, holding your head in place as she grinds her crotch against your face and you tongue fuck her pussy, completely covering your face with her pussy juices. After several minutes, she begins moaning loudly as she cums.');
    scene.actions([
      { label: 'Katja returns the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_6.jpg');
    scene.text('Katja gets up and pushes you down on all fours before moving between your legs. She sucks on her fingers before sliding two of them into your pussy, slowly finger fucking you while her thumb works on your clit. It feels amazing, and you moan loudly as your juices run down your inner thighs. Katja then pulls her fingers out and starts licking your pussy while her fingers, coated with your juices, slide into your asshole. She vigorously eats your pussy while finger fucking your ass.');
    qspCall(s, 'arousal', 'anal_finger', 5, 'lesbian');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.text('Waiting until you recover from your orgasm, Katja looks at you while biting her lip. "That was amazing! I bet all the boys will be walking to class with erections thinking about what we were doing in here," You both laugh before quickly getting dressed.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const Katja_Tanga: LocationDef = {
  name: 'Katja_Tanga',
  title: 'You hurry down the hall hand in hand with Katja towards the ',
  region: 'other',
  description: ['You hurry down the hall hand in hand with Katja towards the storage room she told you about as each of you tries to pull up the other\'s skirt. Once at the door, she pulls out a key and unlocks it. You grab and squeeze her ass as she does before she pushes the door open and turns towards you. You both immediately start kissing and fondling each other, barely avoiding tumbling into the room before you manage to close the door and lock it.'],
  enter: enter,
};
