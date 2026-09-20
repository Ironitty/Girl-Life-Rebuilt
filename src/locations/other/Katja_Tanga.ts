import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSecretroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  if (((s as any).katjaQW ?? 0)?.['school_sex'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_sex'] = 1;
    // TODO-QSP: !! Flag sex with Kate at the school
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_4.jpg');
  scene.text('You hurry down the hall hand in hand with Katja towards the storage room she told you about as each of you tries to pull up the other\'s skirt. Once at the door, she pulls out a key and unlocks it. You grab and squeeze her ass as she does before she pushes the door open and turns towards you. You both immediately start kissing and fondling each other, barely avoiding tumbling into the room before you manage to close the door and lock it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Bare her breasts', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_3.jpg');
    scene.text('You continue kissing as you start to unbutton each other\'s shirts and you\'re both soon topless. You stop kissing her lips and start kissing her neck, then her shoulder, leaving a trail of kisses down to her breasts. You begin to kiss, lick and suck on her nipple as your hand fondles her other breast. She moans softly in pleasure.');
    scene.actions([
      { label: 'Work your way to her pussy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_10.jpg');
    scene.text('After a few minutes of teasing her nipples, you kiss your way down to her stomach, pulling off her skirt as you do. Your lips descend down her body and you begin kissing and teasing her clit with your tongue. You pull her down and gently push her down on her back. Once she\'s comfortable, you slide two of your fingers into her wet pussy and begin to finger fuck her. She moans in pleasure as she squeezes her breasts firmly in her hands.');
    if ((((st as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_small'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_large'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  ||  ((st as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1)  &&  ((st as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((st as any).npc_vag ?? 0)?.['A14'] > 0) {
      scene.actions([
        { label: 'Get dildo', handler: (st: GameState) => {
    if (((st as any).dildonumber ?? 0) > 0) {
      qspCall(st, 'boyStat', 'D' + ((st as any).dildonumber ?? 0) + '');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
        qspCall(st, 'boyStat', 'D1');
      } else {
        if (((st as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
          qspCall(st, 'boyStat', 'D2');
        } else {
          if (((st as any).mc_inventory ?? 0)?.['dildo_big'] === 1) {
            qspCall(st, 'boyStat', 'D3');
          } else {
            if (((st as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
              qspCall(st, 'boyStat', 'D4');
            } else {
              if (((st as any).mc_inventory ?? 0)?.['dildo_huge'] === 1) {
                qspCall(st, 'boyStat', 'D5');
              } else {
                if (((st as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
                  qspCall(st, 'boyStat', 'D6');
                } else {
                  if (((st as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1) {
                    qspCall(st, 'boyStat', 'D7');
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_5.jpg');
    scene.text('Her pussy is now soaking wet and you can tell she would like something bigger than your fingers in her. Reaching over to your bag, you pull out your dildo and slide it up between her breasts to show her what you have in store for her. Her eyes widen slightly at the sight of the dildo, but she quickly pulls your hand up and begins to suck on the dildo. She moans onto the dildo as you continue to finger fuck her.');
    scene.actions([
      { label: 'Fuck Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_dildo_give', (-5), 'lesbian');
    qspCall(st, 'arousal', 'rimming_give', 5, 'lesbian');
    if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
      ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((st as any).npc_vag ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
      ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_9.jpg');
    scene.text('Katja begins moaning louder and bucking her hips against your fingers. You pull the dildo out of her mouth and your fingers out of her pussy before rolling her onto her stomach and sliding the wet dildo into her soaking wet pussy.');
    scene.text('You bury your face between her ass cheeks and lick her asshole as you start thrusting the dildo as deep as it will go. Her moans of pleasure get ever louder and she begins to arch her hips up, trying to take even more of the dildo into herself, but there is no more to give.');
    scene.text('Instead, you stick your tongue in her ass and begin to tongue fuck her ass. This causes her to moan even louder and before long she starts bucking her hips as her body spasms in an intense orgasm as she cums.');
    scene.actions([
      { label: 'Use dildo', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_7.jpg');
    scene.text('As her quivering body subsides and her panting breath gets under control, you pull the dildo out of her pussy and your tongue out of her ass. She gives you a dreamy smile and reaches over to take the dildo out of your hand. She gets up and sits down between your legs, lifting them up and dragging your pussy up to her. "You\'re so beautiful, I could just eat you right up…" she whispers before she starts licking your pussy, her tongue occasionally darting inside you.');
    scene.text('As your pussy gets wetter, you reach up and grab her hair. "Yes, faster, faster!" you moan, wanting more. For several minutes, she only uses her tongue before she pulls away, slides the dildo into your wet pussy and begins furiously fucking you with it. Using her other hand, she slips one of her fingers in your ass and begins to finger fuck your ass at the same time.');
    (st as any).orgasm_txt = 'You can\'t take it and quickly orgasm. Your pussy overflows with your juices and you feel them running down your stomach as the intense orgasm rocks your body.';
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'anal_finger', (-5), 'lesbian');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'arousal', 'vaginal_dildo', (-5), 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.text('After your orgasm subsides, she pulls her finger and the dildo out of you before she extends the dildo down to your mouth. You open your mouth and she slides the wet dildo inside. You happily suck your own pussy juices off of it as Katja watches with hungry eyes, biting her lower lip as you finish cleaning the dildo with your mouth. "That was amazing! I bet all the boys will be walking to class with erections thinking about what we were doing," she says and you both laugh before quickly getting dressed.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tongue fuck Katja', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 10, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_8.mp4');
    scene.text('Pulling your fingers out of her pussy, you run your lips along her inner thighs until you reach her clit. You kiss, lick and tease her clit with your tongue, causing her to moan in pleasure while raising her hips to try and force your tongue into her as her wetness soaks her inner thighs and your face. Giving in, you slip your tongue inside her pussy and moans loudly and bucks against your face before she reaches down and grabs your hair, holding your head in place as she grinds her crotch against your face and you tongue fuck her pussy, completely covering your face with her pussy juices. After several minutes, she begins moaning loudly as she cums.');
    scene.actions([
      { label: 'Katja returns the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tanga4_6.jpg');
    scene.text('Katja gets up and pushes you down on all fours before moving between your legs. She sucks on her fingers before sliding two of them into your pussy, slowly finger fucking you while her thumb works on your clit. It feels amazing, and you moan loudly as your juices run down your inner thighs. Katja then pulls her fingers out and starts licking your pussy while her fingers, coated with your juices, slide into your asshole. She vigorously eats your pussy while finger fucking your ass.');
    (st as any).orgasm_txt = 'Unable to take it anymore, you orgasm hard as convulsions run through your body. Your legs shaking, you can barely keep yourself from collapsing on her.';
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'anal_finger', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.text('Waiting until you recover from your orgasm, Katja looks at you while biting her lip. "That was amazing! I bet all the boys will be walking to class with erections thinking about what we were doing in here," You both laugh before quickly getting dressed.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
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

function enterSchool(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_day'] = ((s as any).daystart ?? 0);
  scene.text('You do a quick turn, causing your skirt to twirl up and expose your lack of panties for a brief second. Katja\'s eyes widen in surprise. "You\'re not wearing panties?!" she whispers in shock.');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga1_7.mp4');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 4) + 1));
    scene.text('"I\'m not only not wearing panties!" you say while smiling enigmatically. You turn and lift your skirt before parting your ass cheeks, showing Katja the butt plug in your ass.');
  } else {
    scene.img(`images/characters/pavlovsk/school/girl/katja/tanga1_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    scene.text('You look around, making sure that nobody is nearby before turning your ass towards Katja and bending over, showing off your bare ass and pussy and proving that you\'re not wearing any panties.');
  }
  scene.text('');
  scene.text('"I showed you mine," you state. "Now I want to know if you\'re wearing any panties."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 5) {
      qspGoto(st, 'Katja_Tanga', 'school5');
    } else {
      if (((st as any).katjaQW ?? 0)?.['school_sex'] >= 1  &&  ((st as any).katjaQW ?? 0)?.['slut'] > 60  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        qspGoto(st, 'Katja_Tanga', 'school4');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] > 40) {
          qspGoto(st, 'Katja_Tanga', 'school3');
        } else {
          if (((st as any).katjaQW ?? 0)?.['slut'] >= 20) {
            qspGoto(st, 'Katja_Tanga', 'school2');
          } else {
            qspGoto(st, 'Katja_Tanga', 'school1');
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterSchool1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/tanga2.jpg');
  // TODO-QSP: dynamic text: Katja blushes in embarrassment and covers her eyes, "You''re such a bad influenc...
  scene.text(`Katja blushes in embarrassment and covers her eyes, "You're such a bad influence, ${((s as any).pcs_nickname || '')}! I always wear shorts since the boys in this school are all perverts."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSchool2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-5));
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/girl/katja/tanga3_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
  scene.text('Katja looks around to make sure nobody is nearby before furtively lifting up her skirt and showing you her panties. "See? I\'m wearing panties."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSchool3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_1.jpg');
  scene.text('You give Katja a slightly disappointed frown. "Still wearing panties, huh?"');
  scene.text('Katja blushes. "Yes, but I\'m not wearing a bra…" she whispers.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Share', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', (-5));
    qspCall(st, 'arousal', 'foreplay', (-5), 'lesbian');
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga4_2.jpg');
    scene.text('Katja looks around to make sure nobody is watching before she unbuttons her shirt and pulls it open to reveal her bare breasts. With a smile, you reach up and grab her breasts in your hands, teasing her nipples with your fingers. A moan of pleasure escapes from her mouth.');
    if (((st as any).pcs_horny ?? 0) >= 50  &&  ((st as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).mesec ?? 0) <= 0  &&  ((st as any).katjaQW ?? 0)?.['school_sex'] === 0) {
      scene.text('Blushing, Katja pulls away from you and buttons her shirt back up, but looks at you with a sly grin. "I have a key to a storage closet. We can go there for a bit more privacy if you want…" She gives you pleading eyes, hoping that you\'ll agree.');
      scene.actions([
        { label: 'Go', goto: ['Katja_tanga', 'secretroom'] },
      ]);
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
      if (((st as any).katjaQW ?? 0)?.['school_sex'] === 1) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
      }
      // TODO-QSP: dynamic text: Blushing, Katja pulls away from you and buttons her shirt back up, looking aroun...
      scene.text(`Blushing, Katja pulls away from you and buttons her shirt back up, looking around to see if anyone has seen you. "${((st as any).pcs_nickname || '')}, are you crazy?! Someone could have seen us! What would they say?!"`);
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchool4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/girl/katja/tanga5_1.jpg');
  if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
    scene.text('Katja quickly lifts her skirt, showing you her thong-clad ass. "You\'re back to wearing panties again?" you cry.');
    scene.text('Katja hisses at you. "So? It\'s not like you haven\'t seen everything before."');
  } else {
    scene.text('Katja quickly lifts her skirt, showing her thong-clad ass. "Still wearing panties, huh?" you ask and Katja hisses at you. "So? It\'s not like you haven\'t seen everything before."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Denied', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', (-5), 'lesbian');
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 1) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 1;
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga_kiss1.jpg');
    scene.text('"Fine, whatever," you say and turn to leave, dejected at her reaction. Katja, afraid that she has offended you, grabs your hand and pulls you into a passionate kiss. "Don\'t pout sweetie, I\'m sorry. Let me make it up to you!"');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'erotic', (-5));
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 1) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 2;
      scene.img('images/characters/pavlovsk/school/girl/katja/tanga5_2.jpg');
      scene.text('Katja sits on the floor and parts her legs as she pulls her panties aside.');
      qspCall(st, 'arousal', 'end');
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    } else {
      if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 3;
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga5_3.jpg');
        scene.text('Turning away from you and bending over, Katja lifts up her skirt and pulls down her panties, showing you her ass and pussy. Hearing someone coming, she quickly pulls her panties back up and straightens up her skirt as she smiles at you shyly.');
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/tanga5_4.jpg');
        scene.text('Turning away from you and bending over, Katja lifts up her skirt and pulls down her panties, showing you her ass and pussy. She starts to pull her panties back up as you pout. "Is that it?"');
        scene.actions([
          { label: 'That\'s all?', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['slut'] > 80  &&  ((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 4) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 5;
    }
    if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] === 3) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = 4;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['take_of_panties_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'arousal', 'erotic', (-5));
    qspCall(st, 'arousal', 'end');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga5_5.jpg');
    scene.text('Katja looks over her shoulder at you, biting her lower lip as she looks around with a mischievous smile to make sure nobody is nearby. She then pulls her panties down further, letting them drop around her ankles. "To hell with panties then." She quickly gathers her panties off the floor and sticks them in her purse before she twirls in front of you, giving you a fantastic view of her pussy and bare ass.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchool5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-5));
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  scene.img(`images/characters/pavlovsk/school/girl/katja/tanga6_${(Math.floor(Math.random() * 6) + 1)}.jpg`);
  scene.text('Without any hesitation, Katja pulls up her skirt and shows you her pussy.');
  scene.text('"Like what you see?" she asks with a teasing smile.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'stat', '');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_day_disco'] = ((s as any).daystart ?? 0);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  scene.img(`images/characters/pavlovsk/school/girl/katja/katja_disco2_${(Math.floor(Math.random() * 3) + 1)}.jpg`);
  scene.text('You lift the edge of your skirt up and flash your pussy at Katja. "I showed you mine, now show me yours."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask to see', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['slut'] <= 20) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco3.jpg');
      scene.text('Katja blushes in embarrassment. "I\'m not as brave as you! I can\'t to go to a dance without my panties on."');
      qspCall(st, 'arousal', 'end');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] <= 40) {
        qspCall(st, 'arousal', 'erotic', (-5));
        qspCall(st, 'arousal', 'end');
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
        scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco4.jpg');
        scene.text('Katja looks around to make sure nobody is watching before partially bending over and lifting her skirt, showing you her thong and giving you a nice view of her ass.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] <= 60) {
          qspCall(st, 'arousal', 'erotic', (-5));
          qspCall(st, 'arousal', 'end');
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
          qspCall(st, 'stat', '');
          if (((st as any).katjaQW ?? 0)?.['disco_Foto'] === 0) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['disco_Foto'] = 1;
            scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco5_1.jpg');
            scene.text('Katja unbuttons her shirt and exposes her bra. There is a brief flash as someone takes a picture. You quickly look around, but can\'t tell who took the picture.');
          } else {
            scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco5_2.jpg');
            scene.text('Katja unbuttons her shirt and exposes her bra.');
          }
        } else {
          if (((st as any).katjaQW ?? 0)?.['slut'] <= 80) {
            if (((st as any).katjaQW ?? 0)?.['horny'] > 70) {
              qspCall(st, 'arousal', 'erotic', (-5));
              ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
              ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
              scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco6_1.jpg');
              scene.text('Katja resolutely lifts her dress up to her neck, showing not only her panties but also her bare breasts. She smiles as she pulls her dress back down. "Now show me your tits."');
              if (((st as any).pcs_horny ?? 0) > 70  ||  ((st as any).alko ?? 0) > 1) {
                scene.actions([
                  { label: 'Show your tits', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco6_2.jpg');
    scene.text('Laughing, you pull aside your dress and reveal one of your bare breasts. Katja looks at you, wanting more. "I showed you both of mine!"');
    scene.text('You smile. "Yeah, but you\'re wearing panties and I\'m not."');
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Tease her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco6_3.jpg');
    scene.text('You pull at the edge of your dress, barely exposing one of your nipples as Katja indignantly squeaks."Hey, I showed you mine!"');
    scene.text('You respond with a laugh. "I already showed you my pussy, so that makes us even."');
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              qspCall(st, 'arousal', 'end');
              scene.img('images/characters/pavlovsk/school/girl/katja/katja_disco6_4.jpg');
              scene.text('You watch with anticipation, but Katja just pulls down her top, showing a little extra cleavage before stopping. After seeing your disappointed look, she sticks out her tongue and turns away. You grit your teeth at her teasing.');
            }
          } else {
            qspCall(st, 'arousal', 'erotic', (-10));
            qspCall(st, 'arousal', 'end');
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['no_panties_at_disco'] = 1;
            qspCall(st, 'stat', '');
            scene.img(`images/characters/pavlovsk/school/girl/katja/katja_disco7_${(Math.floor(Math.random() * 3) + 1)}.jpg`);
            scene.text('Katja doesn\'t hesitate and lifts the hem of her skirt, showing you her bare pussy.');
          }
        }
      }
    }
    if (((st as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
    }
    qspGoto(st, 'pav_disco_coolkids', 'katja_dance');
  } },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'secretroom':
      enterSecretroom(s, scene);
      break;
    case 'school':
      enterSchool(s, scene);
      break;
    case 'school1':
      enterSchool1(s, scene);
      break;
    case 'school2':
      enterSchool2(s, scene);
      break;
    case 'school3':
      enterSchool3(s, scene);
      break;
    case 'school4':
      enterSchool4(s, scene);
      break;
    case 'school5':
      enterSchool5(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Katja_Tanga: LocationDef = {
  name: 'Katja_Tanga',
  title: 'You hurry down the hall hand in hand with Katja towards the ',
  region: 'other',
  enter: enter,
};
