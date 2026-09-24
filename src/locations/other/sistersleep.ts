import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSisterSleep(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/characters/pavlovsk/resident/anya/home/sleep0${(Math.floor(Math.random() * 7) + 1)}.jpg`);
  scene.text('Anya is sleeping face down on her bed, with her covers tossed aside, exposing her panty-clad ass. She has a really nice ass, but you never see her work out, leaving you wondering how she keeps so fit.');
  if (((s as any).sisterLesb ?? 0) >= 7  ||  ((s as any).sisterLesb ?? 0) === -1) {
    scene.text('You want to touch her again, but stop yourself from doing it. You agreed to not wake her up like this any more, so you sigh and move away.');
    qspCall(s, 'arousal', 'erotic', (-2));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } else {
    if (((s as any).sisterQW ?? 0)?.['lesbDay'] === ((s as any).daystart ?? 0)) {
      scene.text('You want to touch her again, but you change your mind at the last minute. Doing this more than once a day could make her really angry. Better try again tomorrow.');
      scene.actions([
        { label: 'Move away', goto: ['bedrPar', ''] },
      ]);
    } else {
      if (((s as any).sisterbfspy ?? 0) >= 4) {
        ((s as any).sisterQW = (s as any).sisterQW ?? {})['lesbDay'] = ((s as any).daystart ?? 0);
        if ((!((s as any).sisterLesb ?? 0))) {
          qspCall(s, 'willpower', 'foreplay', 'self');
        } else {
          qspCall(s, 'willpower', 'foreplay', 'self', 'easy');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Touch her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Touch her', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['sistersleep', 'sister_sleep_1'] },
          ]);
        }
      }
      scene.actions([
        { label: 'Move away', goto: ['bedrPar', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSisterSleep_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A33');
  scene.img('images/characters/pavlovsk/resident/anya/home/touch1.jpg');
  if (((s as any).sisterLesb ?? 0) <= 2) {
    (s as any).sisterLesb = ((s as any).sisterLesb ?? 0) + (1);
    scene.text('You place your hand on Anya\'s ass. Touching such a soft butt, you feel a shock run through your body. The feeling is weird, and you can\'t seem to place it.');
    scene.text('Her ass feels as good as it looks. You want to touch it more, but when her breathing changes, you panic and pull away.');
  } else {
    if (((s as any).sisterLesb ?? 0) === 3) {
      scene.text('You place your hand on Anya\'s ass. Touching such a soft butt, you feel a shock run through your body. The feeling is weird, and you can\'t seem to place it.');
      scene.text('Her ass feels as good as it looks.');
      qspCall(s, 'willpower', 'foreplay', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['sistersleep', 'sister_sleep_2'] },
        ]);
      }
    } else {
      scene.text('You can\'t stop thinking about the feelings you experienced last time you touched your sister\'s bare ass.');
      scene.text('Convinced that Anya is fast asleep, you once more dare yourself to caress her ass.');
      scene.text('This time, you decide to caress her a little longer, enjoying the moment. You feel yourself being filled with desire…');
      scene.actions([
        { label: 'Continue', goto: ['sistersleep', 'sister_sleep_2'] },
      ]);
    }
  }
  qspCall(s, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['bedrPar', ''] },
  ]);
  scene.build();
}

function enterSisterSleep_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/home/touch2.jpg');
  scene.text('You continue to explore your sister\'s hot body when your fingers accidentally slip between her legs. Her panties are wet. You gently pull them, exposing her wet pussy. Sensations of heat and moisture overwhelm you. Is she having a sexual dream, or is this her response to your touch?');
  scene.text('You\'re caught up in a fantasy and start lowering your face down to her pussy with your tongue out when she suddenly stirs…');
  scene.text('She sleepily rolls over and looks up at you as you hastily remove your hand and hide it behind your back.');
  // TODO-QSP: dynamic text: "What… What''s going on? <<$pcs_nickname>>? What are you doing?" she asks as she...
  scene.text(`"What… What's going on? ${((s as any).pcs_nickname ?? '')}? What are you doing?" she asks as she sleepily sits up.`);
  scene.text('You sit in front of your sister on her bed, caught off guard and not knowing what to do.');
  qspCall(s, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).sisterLesb ?? 0) <= 4) {
    qspCall(s, 'willpower', 'foreplay', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kiss her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss her', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['sistersleep', 'sister_sleep_2_kiss'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Kiss her', goto: ['sistersleep', 'sister_sleep_2_kiss'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Act innocent', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-10));
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_20.jpg');
    scene.text('You decide to do nothing and quietly move away from your sleepy sister. Maybe she\'ll forget it all in the morning…');
    scene.text('As you step away from her bed, she calls out to you.');
    if (((st as any).sisterLesb ?? 0) === 3) {
      (st as any).sisterLesb = 4;
      scene.text('"I don\'t want to know what you did to me while I was asleep, but don\'t do it again."');
    } else {
      scene.text('"I told you last time I don\'t want to do stuff with you, so stop!" she says and rolls over angrily.');
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterSleep_2Kiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/home/touch3.jpg');
  scene.text('With nothing to lose, you feel yourself fill with courage. While Anya is still half asleep, you bring your face to hers and sensually kiss her on the lips.');
  scene.text('Anya is too aroused and sleepy to think or resist, her soft body easily giving in to your touches.');
  scene.text('Your fingers slip under her panties, but your affection is now bold and confident.');
  scene.text('She starts fully waking and breaks the kiss before looking at you in confusion. "What are you doing?"');
  qspCall(s, 'arousal', 'foreplay', 2, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).sisterLesb ?? 0) >= 5) {
    scene.actions([
      { label: 'Tell her you want to have sex', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les1.jpg');
    scene.text('"I want to make you feel good, I want to make you orgasm," you tell her and kiss her. She stiffens at the kiss, but then relents and lets you kiss her.');
    scene.text('She\'s clearly trying to fight her desires, and manages to break the kiss and pull away from you. "No, it\'s wrong! We\'re sisters!" She only sounds half convinced.');
    if (((st as any).sisterLesb ?? 0) === 5) {
      qspCall(st, 'willpower', 'sex', 'force');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['sistersleep', 'sister_sleep_3'] },
        ]);
      }
    } else {
      scene.actions([
        { label: 'What about last time?', goto: ['sistersleep', 'sister_sleep_3'] },
      ]);
    }
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_20.jpg');
    scene.text('You pull away from her. "Sorry, I didn\'t think it was a big deal just comforting each other…" you say softly.');
    scene.text('She sighs. "It\'s fine. Just don\'t do it again, okay? It\'s wrong and I\'m into guys anyway."');
    scene.text('She rolls over and soon goes back to sleep.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les3.jpg');
    scene.text('You smile at her. "Shh… You looked stressed earlier, and I thought I would help you out," you tell her as you slip a finger inside her soaking wet pussy. She grabs your wrist, intent on stopping you until her breath catches and you see how turned on she is.');
    scene.text('She slowly lets go of your wrist and just lies back, spreading her legs and enjoying you fingering her. You pull her panties off and toss them aside before going back to fingering her pussy as she starts to moan in pleasure.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep fingering her', handler: (st: GameState) => {
    if (((st as any).sisterLesb ?? 0) < 5) {
      (st as any).sisterLesb = 5;
    }
    scene.img('images/characters/pavlovsk/resident/anya/sex/les4.jpg');
    scene.text('You slip another finger in her while your thumb rubs her clit. Anya lies back and starts to moan louder, so you lean forward and start kissing and sucking on her nipple as you keep finger banging her soaking wet pussy. Her pussy then gently convulses as she orgasms and she looks at you with a sleepy but pleased look on her face.');
    scene.text('"Well, aren\'t you just the sweetest little sister? Now go to sleep," she says as she grabs her panties, slides them back on and rolls over, nuzzling into her pillow and falling asleep. You\'re a little upset not to receive your own release, but you\'re satisfied for now.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterSleep_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sex/les2.jpg');
  if (((s as any).sisterLesb ?? 0) === 5) {
    scene.text('"Why is it wrong? We love each other, so how can making each other feel good be wrong?" you ask her as you pull her panties down. She only half heartedly resists you.');
    scene.text('"You know why! We\'re sisters, and even if that wasn\'t the case, I like guys!" she says, still not really putting up much of a fight.');
    scene.text('You push her legs apart and you can see her pussy is wet. "If it\'s so wrong, then why are you so wet?"');
    scene.text('"I… I was having a dream!" she explains.');
  } else {
    scene.text('"Did it feel wrong last time? I think you enjoyed it enough to cum! Tell me you didn\'t enjoy it," you say as you pull her panties down. She only half heartedly resists you.');
    scene.text('"It doesn\'t matter. You can enjoy things that are wrong, but it doesn\'t make them any less wrong!" she says, still not really putting up much of a fight.');
    scene.text('You push her legs apart and you can see her pussy is wet. "If it\'s so wrong, then why are you so wet?"');
    scene.text('"I… Shut up!" she says with a blush.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les3.jpg');
    scene.text('You reach down and slide two fingers into her soaking wet pussy. You start rubbing her clit with your other hand as she moans softly, enjoying the sensation.');
    scene.text('"Mmmm… No! We need to stop!" she moans.');
    scene.text('You keep fingering her and rubbing her clit. "Do you really want me to stop?"');
    scene.text('She moans louder. "Yes… No…"');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go down on her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les5.jpg');
    scene.text('You move around, lie down between her legs and start licking and sucking on her clit as your fingers keep plunging in and out of her pussy.');
    if (((st as any).sisterLesb ?? 0) === 5) {
      scene.text('She finally lies back and starts caressing her breasts, no longer resisting or even pretending to not enjoy it anymore.');
    } else {
      scene.text('She lies back and starts caressing her breasts and moaning passionately, having fully given in to your love making.');
    }
    qspCall(st, 'arousal', 'cuni_give', 5, 'incest', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger_give', (-5), 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Have her return the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les6.jpg');
    if (((st as any).sisterLesb ?? 0) === 5) {
      scene.text('You get up and strip down before lying down near her head. She watches you with lust in her eyes, but you can still see a bit of resistance. Not wanting to give her time to recover, you reach over and pull her head between your legs. She resists for only a moment before she starts licking your pussy in return.');
    } else {
      scene.text('You get up and strip down before lying down near her head. Without even needing to prod her, she rolls over, places her face between your legs and starts licking your pussy and clit.');
    }
    (st as any).orgasm_txt = '"Aaaaaaaaaaaah!!!" You catch a wave of pure bliss as you violently cum.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 5, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les7.jpg');
    scene.text('Still wanting more, Anya gets up and climbs on top of you before placing her pussy above your face. You start licking her again as she positions her face over your pussy and starts licking it again as well. The two of you lap away at each other in complete bliss until Anya\'s body starts to convulse and she has an orgasm on your face. She grinds her pussy against you, riding out her orgasm.');
    (st as any).orgasm_txt = '"Aaaaaaaaahhh!!!" You catch a wave of pure bliss as you violently cum.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni_give', (-5), 'lesbian', 'incest');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('Once her orgasm has fully passed, she climbs off you, gets up on her knees and blushes deeply. "Look, I had fun, but let\'s forget this ever happened, okay?"');
    if (((st as any).sisterLesb ?? 0) === 5) {
      (st as any).sisterLesb = 6;
      scene.text('You respond by getting up on your knees and kissing her. "Sure sis, nothing happened," you reply in a slightly teasing tone when you pull away.');
      scene.text('She shakes her head. "I need to get some sleep. You need to go back to your bed and go to sleep too." She lies back down and rolls over, facing away from you, and tries to go back to sleep.');
      scene.actions([
        { label: 'Move away', goto: ['bedrPar', ''] },
      ]);
    } else {
      scene.text('She gives you a stern look. "I\'m serious! We can\'t do this anymore! This is the last time."');
      scene.actions([
        { label: 'Accept her decision', handler: (st: GameState) => {
    (st as any).sisterLesb = (-1);
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_20.jpg');
    scene.text('You put your best little sister pout on, but knowing she\'s already made her mind up, you shrug and accept that you won\'t be having any more \'fun\' with her as she rolls over and goes to sleep.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
        { label: 'Convince her', handler: (st: GameState) => {
    (st as any).sisterLesb = 7;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 'adore');
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('"Anya, you don\'t have to be a lesbian to enjoy a special release that only another woman knows how to give you," you say as you begin lightly caressing her thigh. What if we agreed that we\'ll help each other out when we REALLLLYYYYY need it, but depend on our boyfriends most of the time, hmmm?" Her breathing gets faster as your fingertips glide to the center of her legs.');
    scene.text('"Well… When you put it that way. I\'m still not a lesbian, but helping each other out when we <i> really</i> need… Mmmmmhhmmmm… Help might be okay… Mmmmm…" she moans as she leans in and kisses you.');
    (st as any).orgasm_txt = 'You both start feeling the heat and lie down before kissing, fondling and licking each other into orgasm.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'kiss', 10, 'incest', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', (-10), 'incest', 'lesbian');
    qspCall(st, 'arousal', 'cuni', (-10), 'incest', 'lesbian');
    scene.text('She eventually breaks the kiss. "Okay, but seriously. No more waking me up like this. We can, when we really need it, just tell the other one, okay?"');
    scene.text('You nod and agree to not wake her up anymore. Besides, her being into it from the start would be better anyway. She rolls over and goes back to sleep, so you return to your own bed.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
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
  } },
  ]);
  scene.build();
}

function enterSisterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterLesb = ((s as any).sisterLesb ?? 0) + (1);
  if (((s as any).sisterLesb ?? 0) <= 7) {
    qspGoto(s, 'sistersleep', 'sister_lesbian');
  } else {
    if (((s as any).sisterLesb ?? 0) < 9) {
      qspGoto(s, 'sistersleep', 'sister_strapon');
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        qspGoto(s, 'sistersleep', 'sister_strapon');
      } else {
        qspGoto(s, 'sistersleep', 'sister_lesbian');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSisterLesbian(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A33', 'like');
  scene.img('images/characters/pavlovsk/resident/anya/sex/les1.jpg');
  scene.text('The two of you start kissing and fondling each other as you slowly undress each other. Anya lies back on the bed as you do and your hands roam each other\'s bodies as you undress each other and passionately keep kissing.');
  qspCall(s, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread her legs ', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les2.jpg');
    scene.text('You finally pull her panties off and place your hands on her knees, spreading her legs wide apart. You can see the gleam of her wetness, showing she\'s already turned on.');
    qspCall(st, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finger her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les3.jpg');
    scene.text('You slip one finger in her already wet pussy and start thrusting it in and out of her, causing her to moan in pleasure. After a few minutes, you add a second finger as well.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go down on her', goto: ['sistersleep', 'sister_lesbian_cuni'] },
      { label: 'Keep fingering her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les4.jpg');
    scene.text('She lies back as you keep fingering her, using one hand to kneed her breasts before lowering your mouth to suck on her nipple. She moans and writhes in pleasure as your fingers slide in and out of her and you keep sucking on her nipple.');
    qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'incest', 'lesbian');
    qspCall(st, 'arousal', 'foreplay', (-5), 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go down on her', goto: ['sistersleep', 'sister_lesbian_cuni'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterLesbianCuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sex/les5.jpg');
  scene.text('You slide down the bed and crawl between her legs. You lower your tongue to her clit and start to suck and lick on it as your fingers thrust in and out of her increasingly wet hole, her moans getting steadily louder and louder.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'incest');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-5), 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have her return the favor', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les6.jpg');
    scene.text('You stop licking and fingering her and lie on your back and spread your legs as she rolls over, crawls up between your legs and starts to lick and nuzzle at your pussy. For someone that keeps telling you she isn\'t into girls, she really knows how to eat pussy.');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les7.jpg');
    scene.text('After several minutes of her eating you out, she apparently isn\'t content with just that. While still licking your pussy, she slowly spins her body around and climbs on top of you until her pussy is directly above your face. You start licking her as the two of you enter a sixty-nine. Several minutes pass until she cries out and her whole body quivers as an orgasm shoots through it. Her juices flow out of her pussy, coating your face.');
    (st as any).orgasm_txt = 'With her orgasming above you and your face getting covered in her juices, you feel your own orgasm wrack your body. You cry out as the waves of pleasure rock your body until it slowly fades.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian', 'incest');
    qspCall(st, 'arousal', 'cuni', (-5), 'lesbian', 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('Once the orgasm passes, she rolls off you and the two of you lie side by side, panting and basking in the afterglow before she gets up onto her knees and you do the same. You share a brief kiss and squeeze her ass before she breaks away from you, pushing you slightly away. "That was fun, but we shouldn\'t do that… At least not too often," she says with a slight blush.');
    scene.text('You grin at her. "Whatever you say, sis."');
    scene.text('She starts getting cleaned up and getting ready to go to sleep as you move away.');
    qspCall(st, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterStrapon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A33', 'like');
  scene.img('images/characters/pavlovsk/resident/anya/sex/strap1.jpg');
  if (((s as any).sisterQW ?? 0)?.['strapon'] === 0) {
    scene.text('The two of you start kissing and fondling each other, but when you try to remove her clothes, she stops you. "What? What\'s wrong?" you ask her.');
    scene.text('She smiles at you, but you\'re not sure you like the way she\'s doing it. "Nothing. I just wanted to do something different this time, something I\'ve been wanting to actually try for a long time…"');
    scene.text('She reaches over to her nightstand drawer and opens it up before fishing around for something as you watch her curiously. When she turns back, she has a strapon harness with an attached dildo in her hand.');
  } else {
    scene.text('The two of you start kissing and fondling each other, but when you try to remove her clothes, she stops you. "What? What\'s wrong?" you ask her.');
    scene.text('She smiles at you with a naughty glint in her eye. "Nothing. I just wanted to fuck you again."');
    scene.text('She reaches over to her nightstand drawer and you smile, knowing she\'s grabbing her strapon.');
  }
  qspCall(s, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', 'dislike');
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You shake your head. "No way, I don\'t want to get fucked, I just want to make love to you."');
    scene.text('She frowns and drops the strapon back in the drawer. "Well I don\'t want to do that. I\'ve told you before that I\'m not into girls!"');
    scene.text('You put your hand on her hip. "Come on, you know you love it…"');
    scene.text('She shoves your hand away. "No! I don\'t want to do that and if you don\'t want to do this, then we should just let it be!" She lies down on her bed and pulls a book out. Knowing you shouldn\'t push it, you back away.');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    { label: 'Help her put it on', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/strap2.jpg');
    scene.text('When you don\'t disagree, she takes it as consent and starts slipping the harness on. You help her get it into place and pull all the straps nice and tight. While she\'s on her knees with the dildo pointing at you, you take it in your hand and stroke it, testing if the harness is securely in place. She gives you a lustful stare. "Well? Start sucking my dick."');
    qspCall(st, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck her dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/strap3.jpg');
    if (((st as any).sisterQW ?? 0)?.['strapon'] === 0) {
      ((st as any).sisterQW = (st as any).sisterQW ?? {})['strapon'] = 1;
      scene.text('Anya monitors your actions and talks you through how to suck a cock. You lick the shaft from the base upwards and then suck the head. It isn\'t too big, maybe a bit above average size. Anya then grabs you by the hair and abruptly shoves the dildo down your throat, causing you to choke and thrash your arms in panic. She quickly pulls it out of you, ropes of your drool sticking to the shaft from your mouth as your eyes water.');
      scene.text('You cough and splutter. "What… What are you doing? You could have… killed me!"');
      // TODO-QSP: dynamic text: "Don''t be so dramatic, <<$pcs_nickname>>! I would never hurt you. You see guys ...
      scene.text(`"Don't be so dramatic, ${((st as any).pcs_nickname ?? '')}! I would never hurt you. You see guys like this. It's called 'deepthroating.' I'm just helping you train your mouth and throat so you know how to give boys proper blowjobs."`);
      scene.text('Without another word, she shoves the dildo back in your mouth and teaches you the finer arts of how to suck a cock, not to mention what to expect from the boys.');
    } else {
      scene.text('Anya monitors your actions and talks you through how to suck a cock. You lick the shaft from the base upwards and then suck the head. Anya then grabs you by the hair and abruptly shoves the dildo down your throat. This time, you expect it and are a bit more ready for it, but you still feel your mouth filling with drool and your eyes watering as she fucks your throat. She continues to teach you how to give blowjobs.');
    }
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('After she fucks your mouth for a while, she stops and starts stripping you. Once you\'re fully naked, she slips her hands between your legs and slides a finger inside your pussy. "Oh, you\'re still a virgin. Mom will be happy, but luckily, you have another hole I can use," she says as she pushes you down on the bed to lie on your side. She slides in behind you and starts rubbing the head of the dildo against your anus.');
      qspCall(st, 'arousal', 'bj', 5, 'incest', 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Get butt fucked', goto: ['sistersleep', 'sister_strapon_anal'] },
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-1));
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('You shake your head. "No way, I don\'t want to get fucked in the butt!"');
    scene.text('She frowns and backs away from you. "Okay, suit yourself, but I\'m not taking your virginity and I\'m tired of fucking your mouth." She starts taking the harness off, and feeling a bit disappointed, you help her remove it. Once done, she cleans it up and drops it back on her nightstand.');
    scene.text('With that all taken care of, you share a brief kiss and squeeze her ass before she breaks away from you. "Okay, time for bed." She starts getting cleaned up and getting ready to go to sleep as you move away.');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).sisterQW ?? 0)?.['knownotvirgin'] === 0) {
        ((st as any).sisterQW = (st as any).sisterQW ?? {})['knownotvirgin'] = 1;
        scene.text('After she fucks your mouth with the dildo, she stops and starts stripping you. Once you\'re fully naked, she slips her hands between your legs and slides a finger inside of your vagina. "Oh, you\'re no longer a virgin. Mom won\'t be happy!" she says as she lies down on her back with the dildo pointing straight up. "Mount up and show me what you\'ve learned, cowgirl."');
        qspCall(st, 'arousal', 'bj', 5, 'incest', 'lesbian');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Get fucked', goto: ['sistersleep', 'sister_strapon_vaginal'] },
        ]);
      } else {
        scene.text('After she fucks your mouth with the dildo, she stops and starts stripping you. Once you\'re fully naked, she slips her hands between your legs and slides a finger inside your pussy. "I see you\'re already wet. Good, that will make this more fun," she says as she lies down on her back with the dildo pointing straight up. "Mount up and show me what you\'ve learned, cowgirl."');
        qspCall(st, 'arousal', 'bj', 5, 'incest', 'lesbian');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Get fucked', goto: ['sistersleep', 'sister_strapon_vaginal'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterStraponVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).sisVagFucked = 1;
  scene.img('images/characters/pavlovsk/resident/anya/sex/strap4.jpg');
  scene.text('You straddle your sister and slowly lower yourself down until you feel the tip of the dildo pressing against your slit. You reach between your legs, line up the dildo and lower yourself until you feel it part your lips and start to slide inside you, causing you to moan softly. You lower yourself down further and start to slowly fuck the dildo, your sister taking off her top as you do. You manage to take the whole thing inside you. It\'s slightly longer and thicker than average and fills you up completely.');
  scene.text('As it starts feeling better, you start riding the dildo faster and faster. Just as it really starts to feel good, Anya slaps your ass. "Get up and face the wall. I want to be in control now."');
  qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stand up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/strap5.jpg');
    scene.text('You stand up on the bed and face the wall as Anya gets up and stands behind you. She grabs the dildo and lines it up, rubbing the tip against your wet slit a few times before sliding it in. She quickly thrusts its balls deep into your hole, completely filling you up and quickly starts fucking you hard and fast, her hips bouncing against your ass, causing you to place your hands on the wall to keep your balance as she pounds you. After a few minutes, she starts to pant, clearly starting to wear herself out. She slaps your ass again. "Lie down so I can fuck that little ass of yours."');
    (st as any).orgasm_txt = 'You spasm and have an intense orgasm with the dildo buried deep in your pussy. You almost can\'t keep yourself upright as your legs threaten to give out.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'lesbian', 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', goto: ['sistersleep', 'sister_strapon_anal'] },
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', 'dislike');
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('You shake your head. "No way, I don\'t want to get fucked in the butt!"');
    scene.text('She frowns and backs away, pulling the strapon out of you. "Okay, suit yourself, but I\'m too tired to do this anymore." She starts taking the harness off, and feeling a bit disappointed, you help her remove it. Once done, she cleans it up and drops it back in her nightstand.');
    scene.text('With that all taken care of, you share a brief kiss and squeeze her ass before she breaks away from you. "That was fun, but we shouldn\'t do that… At least not too often," she says with a slight blush.');
    scene.text('You grin at her. "Whatever you say, sis."');
    scene.text('She starts getting cleaned up and getting ready to go to sleep as you move away.');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSisterStraponAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).sisAssFucked = 1;
  scene.img('images/characters/pavlovsk/resident/anya/sex/strap6.jpg');
  scene.text('You do as she says and lie down on your side as Anya goes to her dresser, pulls out a small bottle of lube and generously applies it to the strap-on. She then rubs some on your anus.');
  scene.text('She then lies down behind you and lines the dildo up with your ass. Once she has it in place, she pushes forward. You feel the pressure building before the head of the dildo suddenly pops into your ass.');
  if ((!((s as any).pcs_ass ?? 0))) {
    scene.text('Your first impression is unbearable pain. You want to move away, but her hands on your hips hold you in place and pull you further back as she thrusts her hips forward and the dildo goes deeper into your ass. You gradually stop resisting as the pain slowly gives way to pleasure. Once you stop resisting, she lets go of your hip and lifts your leg up with her hand.');
  } else {
    scene.text('It hurts a little at first, but the pain quickly gives way to pleasure. As you start to moan, she starts thrusting the dildo deeper into your ass. Reading your actions well, she finds the right rhythm and depth and starts butt fucking you to ecstasy.');
  }
  qspCall(s, 'arousal', 'anal_strap', 5, 'lesbian', 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pleasure yourself', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/strap7.jpg');
    scene.text('With Anya lifting your leg as she thrusts the dildo deep into your ass, you start roughly rubbing your clit.');
    scene.text('"Aaahh… Yeah… Mmmhmmm… Fuck me… Yeah, fuck me good!" you cry out as it starts to feel really good.');
    (st as any).orgasm_txt = 'You spasm and have an intense orgasm with the dildo in your ass, your sister holding onto you to keep you from flopping off during your orgasm.';
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal_strap', 5, 'incest', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Aftermath', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/les8.jpg');
    scene.text('Finally, she stops fucking you and rolls onto her back, causing the dildo to pop out of your ass. She\'s sweating slightly and panting, clearly spent from fucking you. The two of you lie side by side panting and basking in the afterglow before she eventually gets up onto her knees and you do the same. You help her take off the harness and share a brief kiss and squeeze her ass before she breaks away from you. "That was a lot of fun, little sis. I think we\'re going to have to do that again sometime," she says with a slight blush.');
    scene.text('You grin at her. "I enjoyed it as well."');
    scene.text('She starts getting cleaned up and getting ready to go to sleep as you move away.');
    qspCall(st, 'arousal', 'foreplay', 3, 'incest', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDrunkAfterParty(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/body/cum/cumsleep/cumsleep1.jpg');
  scene.text('Your sister is totally wasted, evidenced by the fact that she didn\'t undress, clean off her makeup, or even wipe away the cum she is currently drooling into her pillow.');
  if ((!((s as any).sisboyparty ?? 0))) {
    scene.text('<i>Is she really so drunk that she can\'t even remember to wipe her mouth after blowing her boyfriend?</i>');
  } else {
    scene.text('<i>I wonder if that\'s Roma\'s cum or someone else\'s…</i>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['bedrPar', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sister_sleep':
      enterSisterSleep(s, scene);
      break;
    case 'sister_sleep_1':
      enterSisterSleep_1(s, scene);
      break;
    case 'sister_sleep_2':
      enterSisterSleep_2(s, scene);
      break;
    case 'sister_sleep_2_kiss':
      enterSisterSleep_2Kiss(s, scene);
      break;
    case 'sister_sleep_3':
      enterSisterSleep_3(s, scene);
      break;
    case 'sister_sex':
      enterSisterSex(s, scene);
      break;
    case 'sister_lesbian':
      enterSisterLesbian(s, scene);
      break;
    case 'sister_lesbian_cuni':
      enterSisterLesbianCuni(s, scene);
      break;
    case 'sister_strapon':
      enterSisterStrapon(s, scene);
      break;
    case 'sister_strapon_vaginal':
      enterSisterStraponVaginal(s, scene);
      break;
    case 'sister_strapon_anal':
      enterSisterStraponAnal(s, scene);
      break;
    case 'drunk_after_party':
      enterDrunkAfterParty(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sistersleep: LocationDef = {
  name: 'sistersleep',
  title: 'Anya is sleeping face down on her bed, with her covers tosse',
  region: 'other',
  enter: enter,
};
