import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vanrPar', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  scene.text('The bathroom is very small and unimpressive. Nevertheless, it has everything you need.');
  // TODO-QSP: dynamic text: There is a shower, toilet, sink, <a href="exec:gt 'mirror','start'">mirror</a> w...
  scene.text('There is a shower, toilet, sink, <a href="exec:gt \'mirror\',\'start\'">mirror</a> where you can \' + iif(pcs_hairbsh = 0, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, and even a bathtub.');
  if ((!((s as any).vanr_lock ?? 0))) {
    scene.text('The door is not locked and does not close properly. <a href="exec:gt \'vanrPar\',\'latch\'">Latch the door</a> or <a href="exec:gt \'vanrPar\',\'perm_latch\'">Always latch the door</a>.');
  } else {
    if (((s as any).vanr_lock ?? 0) === 2) {
      scene.text('The door is always securely locked, ensuring your privacy. <a href="exec:gt \'vanrPar\',\'latch\'">Remove automatic latching</a>.');
    } else {
      scene.text('The door is securely locked, ensuring your privacy. <a href="exec:gt \'vanrPar\',\'unlatch\'">Unlatch the door</a>.');
    }
  }
  qspCall(s, 'selfplay', 'suction_dildo');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 1  &&  ((s as any).motherKnowDildo ?? 0) === 1) {
    // TODO-QSP: dynamic text: <i>Huh? Where'd my dildos go? I thought I- oh shit! <<$npc_nickname['A29']>> pro...
    scene.text(`<i>Huh? Where'd my dildos go? I thought I- oh shit! ${((s as any).npc_nickname ?? 0)?.['A29']} probably took them again…</i>`);
  } else {
    if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1  &&  ((s as any).motherKnowDildo ?? 0) === 1) {
      // TODO-QSP: dynamic text: <i>Huh? Where'd my dildo go? I thought I- oh shit! <<$npc_nickname['A29']>> prob...
      scene.text(`<i>Huh? Where'd my dildo go? I thought I- oh shit! ${((s as any).npc_nickname ?? 0)?.['A29']} probably took it again…</i>`);
    } else {
      if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 1  &&  (!((s as any).vanrPar_suction_dildo ?? 0))) {
        scene.text('<i>Huh? Where\'d my dildos go? I thought I left them right here…</i>');
      } else {
        if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] === 1  &&  (!((s as any).vanrPar_suction_dildo ?? 0))) {
          scene.text('<i>Huh? Where\'d my dildo go? I thought I left it right here…</i>');
        }
      }
    }
  }
  if (((s as any).vanr_lock ?? 0) === 0  ||  ((s as any).vanr_lock ?? 0) === 2) {
    if (((s as any).fullmorrout ?? 0) === 1) {
      scene.actions([
        { label: '<b>Finish and go to the kitchen</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['kuhrPar', ''] },
      ]);
    } else {
      scene.actions([
        { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      ]);
    }
  } else {
    if (((s as any).vanr_lock ?? 0) === 1) {
      scene.actions([
        { label: 'Unlatch the door and leave', handler: (st: GameState) => {
    (st as any).vanr_lock = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      ]);
    }
  }
  qspCall(s, 'din_van', 'private');
  // TODO-QSP: end
  scene.build();
}

function enterLatch(s: GameState, scene: SceneBuilder): void {
  (s as any).vanr_lock = 1;
  scene.actions([{ label: 'Continue', goto: ['vanrPar', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterUnlatch(s: GameState, scene: SceneBuilder): void {
  (s as any).vanr_lock = 0;
  scene.actions([{ label: 'Continue', goto: ['vanrPar', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPermLatch(s: GameState, scene: SceneBuilder): void {
  (s as any).vanr_lock = 2;
  scene.actions([{ label: 'Continue', goto: ['vanrPar', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPeek(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['sdad_athome'] === 1  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 0  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).stepdadqw_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).iif ?? 0)(((s as any).stepdadqw ?? 0)>0, 1, (Math.floor(Math.random() * 2) + 0)) === 1) {
    (s as any).stepdadqw_day = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 60  ||  ((s as any).stepdadqw ?? 0) < 3) {
      scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_0.mp4');
      scene.text('As luck would have it, you hear footsteps at the door. Turning around, you catch a glimpse of your stepfather through the gap in the door right before he moves away, muttering something about the door.');
      scene.text('Once again alone, you find yourself feeling confused, and with a rapidly beating heart.');
      (s as any).stepdadqw = ((s as any).stepdadqw ?? 0) + (1);
      scene.actions([
        { label: 'Finish', goto: ['vanrPar', ''] },
      ]);
    } else {
      if (((s as any).npc_had_sex ?? 0)?.['A28'] === 0  ||  ((s as any).stepdadqw ?? 0) < 5  ||  ((s as any).mesec ?? 0) > 0  ||  ((s as any).locat ?? 0)?.['Mom_athome'] === 1) {
        qspCall(s, 'vanrPar', 'stepdad_nosex');
      } else {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_3.jpg');
        scene.text('You suddenly hear the bathroom door creak open and turn to see your stepfather devouring your naked body with his eyes.');
        // TODO-QSP: dynamic text: In that instant, all the little moments the two of you have shared flash through...
        scene.text(`In that instant, all the little moments the two of you have shared flash through your mind as it dawns on you that your ${((s as any).npc_nickname ?? 0)?.['A29']} is at work…`);
        scene.actions([
          { label: 'Daddy wants to join?', handler: (st: GameState) => {
    qspCall(st, 'vanrPar', 'stepdad_sex');
  } },
          { label: 'Go away', handler: (st: GameState) => {
    qspCall(st, 'vanrPar', 'stepdad_sex_no');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).locat ?? 0)?.['Kolka_athome'] === 1  &&  ((s as any).brotherQW ?? 0)?.['bath_voyeur_day'] !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 5) + 0) < 2  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      ((s as any).brotherQW ?? {})['bath_voyeur_day'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/kolka/event/shower/spotkolka.jpg');
      scene.text('You hear the bathroom door creaking open over the sound of the running water and turn around, immediately spotting Kolka watching you through the crack in the door.');
      if (((s as any).brotherQW ?? 0)?.['shower_talk'] < 1) {
        scene.actions([
          { label: 'Tell him off', goto: ['brother_voyeur', 'brother_go_away2'] },
        ]);
      }
      if ((((s as any).pcs_inhib ?? 0) >= 30  &&  ((s as any).npc_rel ?? 0)?.['A34'] > 60)  ||  ((s as any).npc_rel ?? 0)?.['A34'] > 90) {
        qspCall(s, 'willpower', 'exhib', 'self', 'easy', 'incest');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Invite him in for a chat [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Invite him in for a chat [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'easy', 'incest');
    qspCall(st, 'willpower', 'pay', 'self');
  }, goto: ['brother_voyeur', 'showertalk1'] },
          ]);
        }
      }
      if (((s as any).brotherQW ?? 0)?.['shower_times'] > 0) {
        qspCall(s, 'willpower', 'exhib', 'self', 'incest');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Invite him into the shower with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Invite him into the shower with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self', 'incest');
    qspCall(st, 'willpower', 'pay', 'self');
  }, goto: ['brother_voyeur', 'brother_shower_together'] },
          ]);
        }
      }
      if (((s as any).brotherQW ?? 0)?.['shower_talk'] > 0) {
        scene.actions([
          { label: 'Tell him that you\'re too busy to talk', goto: ['brother_voyeur', 'showertalkbusy'] },
        ]);
      }
      return;
      scene.actions([
        { label: 'Scream', goto: ['brother_voyeur', 'brother_go_away'] },
        { label: 'Let him look', goto: ['brother_voyeur', 'brother_voyeur_ev1'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStepdadNosex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_2.mp4');
  scene.text('You hear movement at the door and turn around. It\'s your stepfather. It looks like he passed by and accidentally peeked in. Catching his glance, you feel mischievous and excited, so you blow him a kiss.');
  scene.text('He disappears without a word, yet you can\'t help but smile as you dry your hair.');
  (s as any).stepdadqw = ((s as any).stepdadqw ?? 0) + (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['vanrPar', ''] },
  ]);
  scene.build();
}

function enterStepdadSexNo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A28', 'loathe');
  scene.img('images/shared/home/bathroom/shower_coverup.jpg');
  scene.text('He stands at the threshold, staring at you and nervously licking his lips. The way he\'s looking at you makes you feel exposed, so you quickly cover yourself up. "Oh my god! What you are doing?! Get out! Get out and close the door!"');
  scene.text('He looks surprised by your outburst and is about to say something before he shakes his head and pulls the door closed behind him, letting you finish your shower in peace.');
  (s as any).stepdadqw = ((s as any).stepdadqw ?? 0) - (2);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['vanrPar', ''] },
  ]);
  scene.build();
}

function enterStepdadSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A28');
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_5.jpg');
  scene.text('You feel your core tighten with desire. "Do you want to join me, daddy?"');
  scene.text('He stands at the threshold and stares at you before he seems to come to a decision. He steps inside - crossing the line that\'s always separated you up until now - and locks the door behind him.');
  scene.text('"You drive me crazy!" he mutters as he frantically undresses, his voice rough as a manic look appears in his eyes.');
  scene.text('As soon as he\'s undressed, he climbs in the shower with you. He wastes no time in feeling you up, tracing your curves and squeezing your breasts with his large, rough hands.');
  scene.text('Then he turns you around, forcing you against the cold, tiled wall. You spread your legs a little wider when you feel his hands grope your ass and slide between your thighs, briefly teasing your asshole on their way to your pussy.');
  scene.text('You\'re already dripping wet and bite your lip to stop yourself from moaning loudly when his fingers find your pussy.');
  (s as any).stepdadqw = ((s as any).stepdadqw ?? 0) + (1);
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'arousal', 'vaginal_finger', (-5));
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cum_inside', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Can you put on a condom? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Can you put on a condom? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_9.mp4');
    scene.text('Thankfully, your mind is still clear enough to remember protection. You know you\'ll probably pay the price if your stepfather doesn\'t wear a condom.');
    scene.text('"Hey, can you put on a condom?" you ask, glancing at him anxiously.');
    scene.text('Your stepfather pauses for a moment. Though he probably doesn\'t want to impregnate his teenage stepdaughter, there are no condoms in the bathroom, and he\'s far too excited to step away from this.');
    scene.text('"<i>Shhhh,</i> Sunshine," he whispers soothingly while kissing your ear. "Everything will be fine. I\'ll pull out in time."');
    scene.text('<i>But pulling out doesn\'t work all the time…</i>');
    scene.text('While you\'re still worrying over this, you suddenly feel your stepfather\'s hot, hard dick enter your pussy, and nothing else seems to matter.');
    scene.text('He moves slowly and gently at first, but after a few seconds, he abruptly shifts forward and buries himself balls-deep. Your eyes roll back into your head from the sharp spike of pleasure.');
    scene.actions([
      { label: 'Giggle deliriously', goto: ['vanrPar', 'stepdad_sex_vag', '1'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'cum_inside', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Don\'t cum inside me! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t cum inside me! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'vaginal', 10, 'rough');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_7.mp4');
    scene.text('At this point, you\'re so horny that checking for protection is the last thing on your mind. Your stepfather is in a similar condition.');
    scene.text('"Just don\'t cum inside me, please," you breathe. It\'s your final moment of clarity before his hard, unprotected dick enters you and the sensation of skin-on-skin sweeps you away.');
    scene.text('He moves slowly and gently at first, but after a few seconds, he abruptly shifts forward and buries himself balls-deep, making your eyes roll back into your head from the sharp spike of pleasure.');
    scene.text('It\'s not his style to be so rough, but when he forcefully enters you, it feels so good that you don\'t even think of protesting.');
    scene.actions([
      { label: 'Continue', goto: ['vanrPar', 'stepdad_sex_vag', '2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck me!', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5, 'gentle');
    qspCall(s, 'cum_call', 'butt', 'A28', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_8.mp4');
    scene.text('At this point, you\'re so horny that you can\'t think straight. Your stepfather is obviously in a similar condition. Gone is the careful family man, replaced with a dog who sees a bitch in heat and wants to mount her.');
    scene.text('You wiggle your ass invitingly, and that\'s all it takes for him to step forward and guide himself inside you, slowly filling your pussy with his hot, hard dick.');
    scene.text('"Fuck me hard, Daddy!" you lustily beg as you moan with satisfaction.');
    scene.text('Your stepfather is in no hurry, however. He thrusts into you slowly, savouring every inch of your tight little pussy, making you impatiently beg for it.');
    scene.text('"Please, Daddy! <i>Please!</i>"');
    scene.text('"You want it that badly, Sunshine?" he pants.');
    scene.actions([
      { label: 'Yes', goto: ['vanrPar', 'stepdad_sex_vag', '3'] },
    ]);
  } },
    { label: 'Fuck my ass!', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5, 'gentle');
    qspCall(s, 'cum_call', 'butt', 'A28', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_11.mp4');
    scene.text('At this point, you\'re so horny that you can\'t think straight. Your stepfather is obviously in a similar condition. Gone is the careful family man, replaced with a dog who sees a bitch in heat and wants to mount her.');
    scene.text('You spread your ass invitingly, and that\'s all it takes for him to step forward and guide himself inside you, slowly filling your ass with his hot, hard dick.');
    scene.text('"Fuck me hard, Daddy!" you lustily beg as you moan with satisfaction.');
    scene.text('Your stepfather is in no hurry, however. He thrusts into you slowly, savouring every inch of your tight asshole, making you impatiently beg for it.');
    scene.text('"Please, Daddy! <i>Please!</i>"');
    scene.text('"You want it that badly, Sunshine?" he pants.');
    scene.actions([
      { label: 'Yes', goto: ['vanrPar', 'stepdad_sex_anal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStepdadSexVag(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_6.mp4');
  (s as any).tempcpchance = qspUntranslated(s, "ARGS[1]", { location: "vanrPar" });
  if (((s as any).tempcpchance ?? 0) === 1) {
    scene.text('Your giggles quickly turn to moans as he starts fucking you at a punishing pace, dominating you with his strong hands and heavy body. You feel his hot breath on the back of your neck as he continues at this brutal pace, and it\'s clear he intends for you to understand who the boss is here.');
    scene.text('As it turns out, you don\'t mind at all. You become his little bitch, moaning under him and moving your hips frantically, seeking pleasure, wanting more. With the intense pounding your stepfather is giving you, you doubt you\'ll last much longer.');
  } else {
    if (((s as any).tempcpchance ?? 0) === 2) {
      scene.text('His pace switches up, until it feels like he\'s tearing your pussy apart.');
      scene.text('All you can think about is the amazing feeling of your stepfather\'s dick spreading you open as he dominates you with his strong hands and heavy body. You feel his hot breath on the back of your neck and his fingers around your throat. It\'s clear he intends to show you who\'s the boss here.');
      scene.text('As it turns out, you\'re only too happy to be his little bitch. You move your hips frantically, desperately seeking every bit of pleasure he\'ll give you. With the intense pounding your stepfather is giving you, you doubt you\'ll last much longer.');
    } else {
      scene.text('He begins to fuck you at a punishing pace, and you moan wildly, dominated by his strong hands and heavy body. You feel his hot breath on the back of your neck as he continues at this brutal pace, and it\'s clear he intends for you to understand who the boss is here.');
      scene.text('As it turns out, you\'re only too happy to be his little bitch. You move your hips frantically, desperately seeking every bit of pleasure he\'ll give you. With the intense pounding your stepfather is giving you, you doubt you\'ll last much longer.');
    }
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Climax', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 6) + 0) < ((s as any).tempcpchance ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['vanrPar', 'stepdad_sex_creampie'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['vanrPar', 'stepdad_sex_pullout'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterStepdadSexCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_10.mp4');
  scene.text('As you near orgasm, you register that your stepfather is too. You can feel his unprotected dick throbbing inside you, and the realisation sends a warning flashing through your mind!');
  scene.text('"Don\'t forget-- to-- pull-- out!" you gasp between each thrust of his hips.');
  scene.text('With each word that comes out of your mouth, he only seems to thrust harder, and you feel increasingly alarmed. It\'s as if he\'s deliberately ignoring your warning!');
  scene.text('To your dismay, your suspicion proves true.');
  scene.text('When the first shot of cum hits your pussy walls, he presses his hips tightly against yours, stopping even the tiniest bit of cum from escaping. You start struggling, trying to get free of his hold, but he doesn\'t allow it. He stays pressed against you until every last drop of his cum has been spilled deep inside your unprotected pussy.');
  scene.text('You\'ve never been filled up like this. You didn\'t even know it was <i>possible</i> for a man to cum this much!');
  scene.text('The thought alone is almost enough to make you forget the gravity of the situation - overcome with pleasure and on the cusp of orgasm - but your anger wins out.');
  qspCall(s, 'arousal', 'vaginal', 5, 'rough');
  qspCall(s, 'cum_call', '', '', 'A28', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Shove him', handler: (st: GameState) => {
    scene.img('images/shared/sex/massage/creampie5.mp4');
    scene.text('"I told you to <i>pull out</i>!" you spit angrily before shoving him.');
    scene.text('Your stepfather stumbles back and his dick slips free of your pussy, splattering cum onto the floor.');
    scene.text('He sheepishly scratches his head, but then flashes a cocky grin. "Sorry, Sunshine, I guess the devil made me do it. I\'m sure nothing will come of it, though."');
    scene.text('Furious, you push him out of the bathroom and toss his clothes out after him. Slamming the door closed, you look down at yourself with a troubled sigh as warm cum drips down your leg. You\'ll need to have another shower.');
    qspCall(s, 'vanrPar', 'stepdad_sex_end');
  } },
  ]);
  scene.build();
}

function enterStepdadSexPullout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_11.mp4');
  scene.text('When your climax hits, warmth spreads all over your body, and your fingers and toes curl in satisfaction. Your sweet moans help your stepfather along too, and he soon pulls out and shoots his cum all over your ass.');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('"Now that was something special, Sunshine," he says afterwards, giving you a soft smile and wiping the sweat from his forehead.');
    scene.text('You can\'t help but smile, still basking in the glow of your powerful orgasm as your quivering legs barely hold you up.');
    scene.text('Your stepfather steps out of the shower and starts getting dressed, but it looks like you\'ll have to wash yourself again before you can do the same.');
  } else {
    // TODO-QSP: dynamic text: "Ahh, my sweet <<$pcs_nickname>>! I've wanted to do that for quite a while," he ...
    scene.text(`"Ahh, my sweet ${((s as any).pcs_nickname ?? 0)}! I've wanted to do that for quite a while," he admits, giving you a soft smile as he wipes the sweat from his forehead.`);
    scene.text('He pinches your cheek fondly and gives you a slap on the ass before he steps out of the shower and gets dressed. He then leaves.');
    scene.text('Sweaty and covered in cum, it looks like you\'ll be needing another shower before you can leave too.');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'rough');
  qspCall(s, 'cum_call', 'butt', 'A28', 1);
  qspCall(s, 'stat', '');
  qspCall(s, 'vanrPar', 'stepdad_sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterStepdadSexAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_6.mp4');
  scene.text('His pace switches up until it feels like he\'s tearing your ass apart.');
  scene.text('When your climax hits, warmth spreads all over your body, and your fingers and toes curl in satisfaction. Your sweet moans help your stepfather along too, and he soon pulls out and shoots his cum all over your ass.');
  scene.text('"Now that was something special, Sunshine," he says afterwards, giving you a soft smile and wiping the sweat from his forehead.');
  scene.text('You can\'t help but smile, still basking in the glow of your powerful orgasm as your quivering legs barely hold you up.');
  scene.text('Your stepfather steps out of the shower and starts getting dressed, but it looks like you\'ll have to wash yourself again before you can do the same.');
  qspCall(s, 'arousal', 'anal', 10, 'rough');
  qspCall(s, 'cum_call', 'butt', 'A28', 1);
  qspCall(s, 'stat', '');
  qspCall(s, 'vanrPar', 'stepdad_sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterStepdadSexEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A28'] = 1;
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
  }, goto: ['vanrPar', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'latch':
      enterLatch(s, scene);
      break;
    case 'unlatch':
      enterUnlatch(s, scene);
      break;
    case 'perm_latch':
      enterPermLatch(s, scene);
      break;
    case 'peek':
      enterPeek(s, scene);
      break;
    case 'stepdad_nosex':
      enterStepdadNosex(s, scene);
      break;
    case 'stepdad_sex_no':
      enterStepdadSexNo(s, scene);
      break;
    case 'stepdad_sex':
      enterStepdadSex(s, scene);
      break;
    case 'stepdad_sex_vag':
      enterStepdadSexVag(s, scene);
      break;
    case 'stepdad_sex_creampie':
      enterStepdadSexCreampie(s, scene);
      break;
    case 'stepdad_sex_pullout':
      enterStepdadSexPullout(s, scene);
      break;
    case 'stepdad_sex_anal':
      enterStepdadSexAnal(s, scene);
      break;
    case 'stepdad_sex_end':
      enterStepdadSexEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vanrPar: LocationDef = {
  name: 'vanrPar',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['The bathroom is very small and unimpressive. Nevertheless, it has everything you need.'],
  enter: enter,
};
