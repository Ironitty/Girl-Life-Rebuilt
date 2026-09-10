import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShowerAloneDirect(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Shower', goto: ['sex_ev_shower', 'after_alone'] },
  ]);
  scene.build();
}

function enterShowerFinishDirect(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBeforeBorrowShower(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '"Use your shower?"', handler: (st: GameState) => {
    scene.text('"Mind if I take a quick shower?" you ask.');
    if (((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I don\'t mind the sweat," he answers, grinning.');
      if (((s as any).pcs_horny ?? 0) >= 70) {
        scene.actions([
          { label: 'Good, I\'m horny', handler: (st: GameState) => {
    scene.text('"Good, because I\'m super horny right now..."');
    scene.text('You practically tackle him inside, barely managing to close the door before making your way to the bedroom.');
    scene.actions([
      { label: 'Clothes. Off. Now.', goto: ['sex_ev_clothing', 'frantic_undress'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'I want to shower', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_start', 'undress_function');
    scene.text('"It\'s for me," you roll your eyes. "I\'ll feel better if I clean up first."');
    if (Math.floor(Math.random() * 10) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"How about I join you in there?" he says looking at you meaningfully.');
      qspCall(s, 'sex_ev_shower', 'borrow_shower2');
    } else {
      scene.text('"Okay," he snickers back.');
      qspCall(s, 'sex_ev_shower', 'borrow_shower3');
    }
  } },
        { label: 'If you don\'t care...', handler: (st: GameState) => {
    scene.text('"Well, if <i>you</i> don\'t care then..."');
    scene.text('You give him a lewd smirk and rush inside, slamming the door behind him.');
    scene.actions([
      { label: 'Take it to the bed', goto: ['sex_ev_clothing', 'frantic_undress'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_start', 'undress_function');
      if (Math.floor(Math.random() * 10) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
        scene.text('"How about I join you in there?" he says looking at you meaningfully.');
        qspCall(s, 'sex_ev_shower', 'borrow_shower2');
      } else {
        scene.text('"Sure," he says, widening the door for you to come in.');
        qspCall(s, 'sex_ev_shower', 'borrow_shower3');
      }
    }
  } },
  ]);
  scene.build();
}

function enterBorrowShower2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Save it for later', handler: (st: GameState) => {
    scene.text('"Save it for the bedroom," you smirk, pushing past and heading for the bathroom.');
    scene.actions([
      { label: 'Take a shower', goto: ['sex_ev_shower', 'before_alone'] },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    scene.text('"That sounds great," you say huskily, voice dripping with arousal.');
    scene.text('The two of you rush to the bathroom, peeling off each other\'s clothes along the way.');
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBorrowShower3(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take a shower', goto: ['sex_ev_shower', 'before_alone'] },
    { label: 'You could join me', handler: (st: GameState) => {
    scene.text('"You know, you could always... join me?" you say huskily. "We could get <i>wet</i> together.');
    // TODO-QSP: dynamic text: <<$npcdesc>> locks eyes with you for a split second before both of you rush for ...
    scene.text(`${((s as any).npcdesc ?? 0)} locks eyes with you for a split second before both of you rush for the bathroom, peeling off each other's clothes along the way.`);
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBeforeAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).sex_ev['start_shower'] = 1;
  qspCall(s, 'stat', '');
  scene.text('You slip into the bathroom and turn on the faucet. Hot water comes pouring out and you gratefully step under, rinsing the sweat from your body.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: A few minutes later, you turn off the water and step out, getting practically at...
    scene.text(`A few minutes later, you turn off the water and step out, getting practically attacked by ${((s as any).npcdesc ?? 0)} as soon as you open the door.`);
    qspCall(s, 'sex_ev_foreplay', 'bed_start');
  } },
  ]);
  scene.build();
}

function enterAfterAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).sex_ev['start_shower'] = 1;
  qspCall(s, 'stat', '');
  scene.text('You slip into the bathroom and turn on the faucet. Hot water comes pouring out and you gratefully step under, rinsing the post-sex feeling from your body.');
  if (Math.floor(Math.random() * 10) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_shower', 'boy_shower_join1'
  } },
    ]);
  } else {
    // TODO-QSP: xgt 'sex_ev_shower', 'after_alone_shower'
  }
  scene.build();
}

function enterAfterAloneShower(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Wash up', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bath_room']
    // TODO-QSP: dynamic text: After spending a few minutes enjoying the heat, you borrow some of <<$npcdesc>>'...
    scene.text(`After spending a few minutes enjoying the heat, you borrow some of ${((s as any).npcdesc ?? 0)}'s soap and do a quick scrub before turning off the water and stepping out, clean and dripping.`);
    qspCall(s, 'sex_ev_shower', 'after_alone_towel');
  } },
    { label: 'Rub one out', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash2.mp4');
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2  &&  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 0) {
      qspCall(s, 'arousal', 'clit_finger', 10, 'no_orgasm_msg', 'masturbate');
      scene.text('You try as hard as you can to get an orgasm, but you just can\'t. Finally, you shut off the water in frustration and step out, annoyed and dripping.');
    } else {
      qspCall(s, 'arousal', 'clit_finger', 10, 'no_orgasm_msg', 'masturbate');
      if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
        scene.text('You masturbate to finally get at least one orgasm.');
      } else {
        scene.text('You masturbate to get one more orgasm.');
      }
    }
    qspCall(s, 'sex_ev_shower', 'after_alone_towel');
  } },
  ]);
  scene.build();
}

function enterAfterAloneTowel(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['shower'] = 1;
  scene.actions([
    { label: 'Put on a towel', handler: (st: GameState) => {
    (s as any).sex_ev['towel'] = 1;
    scene.img('images/shared/romance/lovers/misc/towel.jpg');
    // TODO-QSP: dynamic text: You quickly wrap yourself in a spare towel from the cupboard. <<$npcdesc>> is st...
    scene.text(`You quickly wrap yourself in a spare towel from the cupboard. ${((s as any).npcdesc ?? 0)} is still laying in bed, only covered by a sheet.`);
    scene.text('"Thanks," you smile at him.');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Wrap it around your head', handler: (st: GameState) => {
    (s as any).sex_ev['towel'] = 1;
    (s as any).sex_ev['towel_head'] = 1;
    scene.img('images/shared/home/bathroom/towel_head1.jpg');
    // TODO-QSP: dynamic text: You pull a towel from the cupboard and dry your body with it, only pausing to wr...
    scene.text(`You pull a towel from the cupboard and dry your body with it, only pausing to wrapping it around your hair before opening the door. Upon stepping out of the bathroom, ${((s as any).npcdesc ?? 0)} eyes light up at the sight of your body, completely naked except for the towel turban atop your head.`);
    scene.text('"Thanks," you smile at him.');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Skip the towel', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/misc/no_towel.jpg');
    // TODO-QSP: dynamic text: You give your hair a quick wipe with <<$npcdesc>>'s towel to leave it merely dam...
    scene.text(`You give your hair a quick wipe with ${((s as any).npcdesc ?? 0)}'s towel to leave it merely damp instead of soaked and exit the bathroom.`);
    scene.text('His eyes light up as you step into his bedroom, naked, and still wet from the shower.');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Stay to use the mirror', goto: ['sex_ev_after', 'bathroom_after'] },
  ]);
  scene.build();
}

function enterMorningAlone(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bath_room']
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> snoring on the bed and sleepily pad your way into the bat...
    scene.text(`You leave ${((s as any).npcdesc ?? 0)} snoring on the bed and sleepily pad your way into the bathroom, yawning along the way.`);
  } else {
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the bed and pad your way into the bathroom, yawning al...
    scene.text(`You leave ${((s as any).npcdesc ?? 0)} in the bed and pad your way into the bathroom, yawning along the way..`);
  }
  scene.actions([
    { label: 'Shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/shared/home/bathroom/dush.mp4');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
      scene.text('You turn the knob on the faucet and hot water comes pouring out, rinsing the sleep from your eyes.');
    } else {
      scene.text('You turn the knob on the faucet and hot water comes pouring out, washing away the sweat of the sex you decided to start the day with.');
    }
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  Math.floor(Math.random() * 10) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
      (s as any).sex_ev['boy_asleep'] = 0;
      // TODO-QSP: dynamic text: A few minutes later, you hear the door open and <<$npcdesc>> comes clambering in...
      scene.text(`A few minutes later, you hear the door open and ${((s as any).npcdesc ?? 0)} comes clambering into the shower after you.`);
      scene.actions([
        { label: 'Shower with <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together1');
  } },
      ]);
    } else {
      scene.text('After a few minutes spent soaking, you decide you\'ve had enough and turn off the tap, exiting the shower feeling awake and refreshed.');
      scene.actions([
        { label: 'Finish', goto: ['sex_ev_after', 'bathroom_after'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMorningLook1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/nude_walk1.mp4');
  // TODO-QSP: dynamic text: Curious to know where <<$npcdesc>> is, you climb out of bed, wandering his apart...
  scene.text(`Curious to know where ${((s as any).npcdesc ?? 0)} is, you climb out of bed, wandering his apartment looking for him. A few doors down the hall, you realize you hear water running in the bathroom. He must be taking a shower.`);
  scene.actions([
    { label: 'Head back to the bedroom', goto: ['sex_ev_morning', 'morning_menu2'] },
    { label: 'Wait your turn', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 1);
    qspCall(s, 'stat', '');
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You wait a few minutes waiting outside the door for <<$npcdesc>> before you hear...
    scene.text(`You wait a few minutes waiting outside the door for ${((s as any).npcdesc ?? 0)} before you hear the water shuts off and he opens the door, his hair wet and a towel wrapped around his waist.`);
    scene.text('"Hey," you say. "Can I use it now?"');
    // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> replies, smirking as he shamelessly ogles your nude body.
    scene.text(`"Sure," ${((s as any).npcdesc ?? 0)} replies, smirking as he shamelessly ogles your nude body.`);
    scene.text('"Thanks," you smile, casually walking past him and closing the door behind you.');
    scene.actions([
      { label: 'Take a shower', goto: ['sex_ev_morning', 'shower2'] },
    ]);
  } },
    { label: 'Join <<$npcdesc>> in the shower', goto: ['sex_ev_shower', 'shower_join1'] },
  ]);
  scene.build();
}

function enterShowerJoin1(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['join_shower'] = 1;
  (s as any).sex_ev['boy_shower'] = 1;
  (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  scene.img('images/shared/sex/shower/join1.mp4');
  // TODO-QSP: dynamic text: A blast of steam hits you in the face as you open the bathroom door. You pad you...
  scene.text(`A blast of steam hits you in the face as you open the bathroom door. You pad your way inside and open the shower to find ${((s as any).npcdesc ?? 0)} under the faucet.`);
  qspCall(s, 'sex_ev_shower', 'shower_join2');
  scene.build();
}

function enterShowerJoin2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Get under the water with him', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope1.mp4');
    // TODO-QSP: dynamic text: You slip in tight, under the water right beside <<$npcdesc>>.
    scene.text(`You slip in tight, under the water right beside ${((s as any).npcdesc ?? 0)}.`);
    if (((s as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      (s as any).sex_ev['join_shower_offer'] = 0;
      scene.text('"Couldn\'t resist after all, huh?" he smirks as his hands immediately start roaming your body .');
    } else {
      scene.text('He doesn\'t miss a beat and his hands start roaming your body before your hair is even properly wet.');
    }
    scene.actions([
      { label: 'Didn\'t want to wait', handler: (st: GameState) => {
    scene.text('"Didn\'t want to wait my turn," you smirk over your shoulder.');
    scene.actions([
      { label: 'Shower with <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together1');
  } },
    ]);
  } },
      { label: 'Couldn\'t resist', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      scene.text('"Yeah," you smile over your shoulder.');
    } else {
      scene.text('"I couldn\'t resist joining you after all," you smirk over your shoulder.');
    }
    scene.actions([
      { label: 'Shower with <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together1');
  } },
    ]);
  } },
      { label: 'Save the planet', handler: (st: GameState) => {
    scene.text('"Showering together saves water, doesn\'t it?" you grin over your shoulder. "Just doing my part to protect the planet."');
    scene.actions([
      { label: 'Shower with <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together1');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Grab his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/jerkoff2.mp4');
    scene.text('Coming up right behind him, you wrap one arm around his chest and snake the other one down his waist to wrap his cock in your fingers.');
    if (((s as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      (s as any).sex_ev['join_shower_offer'] = 0;
      // TODO-QSP: dynamic text: "Couldn't resist after all, huh?" <<$npcdesc>> smirks as his soft shaft twitches...
      scene.text(`"Couldn't resist after all, huh?" ${((s as any).npcdesc ?? 0)} smirks as his soft shaft twitches in your grip.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn't say anything but you hear his breathing grow heavy and his ...
      scene.text(`${((s as any).npcdesc ?? 0)} doesn't say anything but you hear his breathing grow heavy and his soft shaft twitches in your grip.`);
    }
    qspCall(s, 'sex_ev_shower', 'shower_together_jerkoff1');
    qspCall(s, 'sex_ev_shower', 'together_bj1');
    qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
    scene.actions([
      { label: 'Shower with <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyShowerJoin1(s: GameState, scene: SceneBuilder): void {
  scene.text('After a couple of minutes, you hear the door open.');
  scene.actions([
    { label: 'Cover up (playfully)', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/cover_up.jpg');
    // TODO-QSP: dynamic text: You just manage to put your arm across your breasts and turn your hips in a way ...
    scene.text(`You just manage to put your arm across your breasts and turn your hips in a way that covers all your naughty bits as ${((s as any).npcdesc ?? 0)} comes into view.`);
    scene.text('"Yes? Can I help you?" you ask with a playful smile.');
    // TODO-QSP: '"Well, I got to thinking and thought maybe you might ' + iif(rand(1, 2) = 1, 'need someone to wash ...
    // TODO-QSP: xgt 'sex_ev_shower', 'boy_shower_join_response1'
  } },
  ]);
  scene.build();
}

function enterBoyShowerJoinResponse1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks," you smirk. "I like my alone time in the shower."');
    // TODO-QSP: dynamic text: "Ah. Well. Let me know if you change your mind," <<$npcdesc>> says and leaves.
    scene.text(`"Ah. Well. Let me know if you change your mind," ${((s as any).npcdesc ?? 0)} says and leaves.`);
    // TODO-QSP: xgt 'sex_ev_shower', 'after_alone_shower'
  } },
    { label: 'Nice try', handler: (st: GameState) => {
    scene.text('"Nice try, but no," you smirk. "We already had our fun. I think I\'m allowed a little alone time."');
    // TODO-QSP: dynamic text: "Ah. Well. Let me know if you change your mind," <<$npcdesc>> says and leaves.
    scene.text(`"Ah. Well. Let me know if you change your mind," ${((s as any).npcdesc ?? 0)} says and leaves.`);
    // TODO-QSP: xgt 'sex_ev_shower', 'after_alone_shower'
  } },
    { label: 'Sure', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sure," you smirk and <<$npcdesc>> moves to get into the shower with you. "I wou...
    scene.text(`"Sure," you smirk and ${((s as any).npcdesc ?? 0)} moves to get into the shower with you. "I wouldn't mind a little bit of company..."`);
    // TODO-QSP: xgt 'sex_ev_shower', 'shower_together1'
  } },
  ]);
  scene.build();
}

function enterShowerTogether1(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  // TODO-QSP: gs 'arousal', 'massage',5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/grope1.mp4');
  // TODO-QSP: dynamic text: Time passes indeterminately as you shower with <<$npcdesc>>, letting the hot wat...
  scene.text(`Time passes indeterminately as you shower with ${((s as any).npcdesc ?? 0)}, letting the hot water rain down on you. ${((s as any).npcdesc ?? 0)} fills his hands with soap and runs them up and down your body, sudsing you up and grabbing big handfuls of your breasts and ass in the process.`);
  qspCall(s, 'sex_ev_shower', 'wash_boy1');
  qspCall(s, 'sex_ev_shower', 'shower_together_makeout1');
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('"<i>Aahhh~!</i>"');
    scene.text('Your soft moans encourage him even more and he gropes your tits with both hands, giving them a hard squeeze, producing a gasp from your lips.');
    qspCall(s, 'sex_ev_shower', 'shower_sex_menu');
  } },
    { label: 'Giggle', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('You giggle uncontrollably at his rabid pawing, only serving to encourage him even more and he gropes your tits with both hands, giving them a hard squeeze, producing a gasp from your lips.');
    qspCall(s, 'sex_ev_shower', 'shower_sex_menu');
  } },
    { label: '"Just like that!"', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('"<i>Aahhh~!</i> Just like that!"');
    scene.text('You moan loudly, energizing his groping and making him grab your tits with both hands, giving them a mighty squeeze, producing a gasp to go along with your moans.');
    qspCall(s, 'sex_ev_shower', 'shower_sex_menu');
  } },
  ]);
  scene.build();
}

function enterWashBoy1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Wash him', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'massage_give', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'foreplay_give', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/shower/wash_boy1.mp4');
    scene.text('"Let me get you now," you smile, taking the soap from him.');
    scene.text('After sudsing up your hands, you gently run them down his back, massaging his muscles as you do.');
    scene.text('"Let me get the front too," you whisper in his ears and wrap your arms around his shoulders. As you slide your hands down his chest, press yourself all the way up against him, smooshing the softness of your breasts into his back, feeling them slide around across the soap covering his skin.');
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      scene.actions([
        { label: 'Finish showering', handler: (st: GameState) => {
    scene.text('"You want to finish this in the bedroom?" you whisper in his ear.');
    scene.text('"Yeah," he pants back, voice hoarse.');
    scene.actions([
      { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_shower', 'shower_together_end');
    }
    qspCall(s, 'sex_ev_shower', 'shower_reach_cock');
  } },
  ]);
  scene.build();
}

function enterShowerSexMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  Math.floor(Math.random() * 10) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you but doesn't push for something more, seeming just...
      scene.text(`${((s as any).npcdesc ?? 0)} grins back at you but doesn't push for something more, seeming just be revving you up for the main event.`);
      scene.text('"Bedroom now?" you gasp.');
      scene.text('"Bedroom," he agrees and shuts off the water.');
      scene.actions([
        { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
      ]);
    } else {
      scene.text('But eventually, you have to call it quits. As much as you and him are enjoying this, the soft state of his cock doesn\'t seem like it\'s going to change.');
      qspCall(s, 'sex_ev_shower', 'shower_together_end');
      // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you but doesn't push for something more, seeming cont...
      scene.text(`${((s as any).npcdesc ?? 0)} grins back at you but doesn't push for something more, seeming content to just cop a feel for now.`);
      qspCall(s, 'sex_ev_shower', 'shower_together_end');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] !== 'handjob') {
      qspCall(s, 'sex_ev_shower', 'shower_together_jerkoff1');
    } else {
      qspCall(s, 'sex_ev_shower', 'shower_together_jerkoff2');
    }
    qspCall(s, 'sex_ev_shower', 'together_bj1');
    qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
  }
  scene.build();
}

function enterShowerReachCock(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Reach for his cock', handler: (st: GameState) => {
    (s as any).sex_ev['position'] = 'handjob';
    qspCall(s, 'arousal', 'hj', Math.floor(Math.random() * 4) + 2);
    scene.img('images/shared/sex/shower/jerkoff2.mp4');
    // TODO-QSP: dynamic text: You allow the soap to slip from your fingers, instead snaking your hand down to ...
    scene.text(`You allow the soap to slip from your fingers, instead snaking your hand down to wrap them around ${((s as any).npcdesc ?? 0)}'s cock.`);
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  Math.floor(Math.random() * 10) + 1 > ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('Unfortunately, if you wanted something more, it seems like you already took it out of him. No matter how you work it, his cock stays soft and squishy, though not for lack of enjoyment on his part judging by the groans your fingers elicit.');
      qspCall(s, 'sex_ev_shower', 'shower_together_end');
    } else {
      scene.text('He groans under your touch, growing in stiffness beneath the gentle jerking of your hand.');
      if (((s as any).sex_ev ?? 0)?.['position'] !== 'handjob') {
        qspCall(s, 'sex_ev_shower', 'shower_together_jerkoff1');
      } else {
        qspCall(s, 'sex_ev_shower', 'shower_together_jerkoff2');
      }
      qspCall(s, 'sex_ev_shower', 'together_bj1');
      qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
    }
  } },
  ]);
  scene.build();
}

function enterShowerTogetherMakeout1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Makeout with <<$npcdesc>>', handler: (st: GameState) => {
    (s as any).sex_ev['position'] = 'makeout';
    // TODO-QSP: gs 'arousal', 'foreplay_give', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'kiss', rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/shower/kiss1.mp4');
    // TODO-QSP: dynamic text: Things start getting hot and heavy under the shower. <<$npcdesc>>'s lips find yo...
    scene.text(`Things start getting hot and heavy under the shower. ${((s as any).npcdesc ?? 0)}'s lips find yours and you kiss him back, enjoying the moment. Moans are released into each other's mouths as hands roam bodies with unrestricted access.`);
    qspCall(s, 'sex_ev_shower', 'shower_sex_menu');
  } },
  ]);
  scene.build();
}

function enterShowerTogetherJerkoff1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Jerk his cock', handler: (st: GameState) => {
    (s as any).sex_ev['position'] = 'handjob';
    // TODO-QSP: gs 'arousal', 'clit_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'hj', rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/shower/fun2.mp4');
    // TODO-QSP: dynamic text: You reach back for <<$npcdesc>>'s cock as he keeps groping your tits from behind...
    scene.text(`You reach back for ${((s as any).npcdesc ?? 0)}'s cock as he keeps groping your tits from behind. Both your breathing intensifies as you jerk his shaft and he squeezes your nipples.`);
    scene.text('It feels as though the steam should be coming from your heavy breaths instead of the water.');
    qspCall(s, 'sex_ev_shower', 'together_bj1');
    qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together_jerkoff_cum');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerTogetherJerkoff2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Jerk his cock', handler: (st: GameState) => {
    (s as any).sex_ev['position'] = 'handjob';
    // TODO-QSP: gs 'arousal', 'clit_finger', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'hj', rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/shower/fun3.mp4');
    // TODO-QSP: dynamic text: You and <<$npcdesc>> face each other, staring into one another's eyes as you fon...
    scene.text(`You and ${((s as any).npcdesc ?? 0)} face each other, staring into one another's eyes as you fondle your most intimate parts. His cock is alive in your hand, twitching, stiffening, and pulsing as you work it with fervor. His fingers are on your clit, flicking your bean with intensity, occasionally slipping past to worm their way into your dripping snatch.`);
    scene.text('It feels as though the steam should be coming from your heavy breaths instead of the water.');
    qspCall(s, 'sex_ev_shower', 'together_bj1');
    qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_together_jerkoff_cum');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTogetherBj1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Blow him', handler: (st: GameState) => {
    (s as any).sex_ev['position'] = 'blowjob';
    scene.img('images/shared/sex/shower/bj3.mp4');
    // TODO-QSP: dynamic text: Without a word, you kneel down, taking <<$npcdesc>>'s wet member in your mouth a...
    scene.text(`Without a word, you kneel down, taking ${((s as any).npcdesc ?? 0)}'s wet member in your mouth and noisily lick, suck, and slurp it as water rains down on your head.`);
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      // TODO-QSP: dynamic text: "You're fucking incredible," <<$npcdesc>> groans beneath the ministrations of yo...
      scene.text(`"You're fucking incredible," ${((s as any).npcdesc ?? 0)} groans beneath the ministrations of your lips and tongue. He's rock hard between your lips, somehow seeming to grow even harder by the second.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> groans softly beneath the ministrations of your lips and tongue, oc...
      scene.text(`${((s as any).npcdesc ?? 0)} groans softly beneath the ministrations of your lips and tongue, occasionally letting his hand rest on your hair as a gentle guide to let you know you're doing well.`);
    }
    if (((s as any).stat ?? 0)?.['bj'] === 0  &&  ((s as any).sex_ev ?? 0)?.['bj_count'] === 0) {
      scene.text('You think you\'re doing pretty well for your first blowjob, but the most surprising part of it for you is the taste of cock. You run your tongue up the length of his shaft and... it doesn\'t taste like anything. The flavor that stands out most to you is the mineral taste of tap water. Like rinsing your mouth out in sink. But with the texture of skin. Weird.');
    } else {
      scene.text('It tastes clean, you can\'t help but notice, as you run your tongue up the length of his shaft. Not the usual flavors of salt and sweat you normally associate with sucking cock. Just the mineral taste of tap water. Advantages of shower head.');
    }
    qspCall(s, 'sex_ev_shower', 'together_fuck_menu');
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      scene.actions([
        { label: 'Take it to the bedroom', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/bj5.mp4');
    scene.text('"Mmm mmrm mmm mmph mm mm mmph?"');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> moans breathlessly. You let his cock slip from your mouth w...
    scene.text(`"What?" ${((s as any).npcdesc ?? 0)} moans breathlessly. You let his cock slip from your mouth with a <i>pop</i>.`);
    scene.text('"You wanna take this to the bed?" you ask, running your tongue up the length of his shaft before slipping the head back into your mouth.');
    scene.text('"Yeah," he says nodding, just as breathless as before.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make him come', goto: ['sex_ev_shower', 'shower_cum_mouth1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTogetherFuckMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    (s as any).sex_ev['shower_sex'] = ((s as any).sex_ev['shower_sex'] ?? 0) + (1);
    (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
    scene.actions([
      { label: 'Put your leg up', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'together_fuck_miss1');
  } },
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'together_fuck_doggy1');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFuckCondomCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
      // TODO-QSP: dynamic text: "Is it safe?" <<$npcdesc>> whispers, asking if he can come inside you.
      scene.text(`"Is it safe?" ${((s as any).npcdesc ?? 0)} whispers, asking if he can come inside you.`);
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s safe', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'safe';
    (s as any).sex_ev['no_condom'] = 1;
    (s as any).sex_ev['creampie_allowance'] = 1;
    scene.text('"It\'s safe," you gasp as he pushes his cock into the folds of your pussy. "You can come inside..."');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.actions([
            { label: 'Not safe (pullout)', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'danger';
    (s as any).sex_ev['no_condom'] = 1;
    (s as any).sex_ev['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((s as any).npcdesc ?? 0)} pushes his cock between your folds.`);
    scene.text('"Don\'t forget to pull out~!" you gasp as he starts to fuck your pussy.');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
            { label: 'Not safe (condom after)', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'danger';
    (s as any).sex_ev['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((s as any).npcdesc ?? 0)} pushes his cock between your folds.`);
    scene.text('"You can\'t come inside~!" you gasp as he starts to fuck your pussy. "We need to use condoms after this~!');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
          ]);
        }
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          scene.actions([
            { label: 'It\'s safe', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'safe';
    scene.text('"It\'s a safe d-<i>aaaayyyy</i>," you gasp as he pushes his cock into the folds of your pussy.');
    qspCall(s, 'sex_ev_shower', 'together_fuck_bareback');
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            scene.actions([
              { label: 'Not safe (pullout)', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'danger';
    (s as any).sex_ev['no_condom'] = 1;
    (s as any).sex_ev['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((s as any).npcdesc ?? 0)} pushes his cock between your folds.`);
    scene.text('"Don\'t forget to pull out~!" you gasp as he starts to fuck your pussy.');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
              { label: 'Not safe (condom after)', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'danger';
    (s as any).sex_ev['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((s as any).npcdesc ?? 0)} pushes his cock between your folds.`);
    scene.text('"You can\'t come inside~!" you gasp as he starts to fuck your pussy. "We need to use condoms after this~!');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
            ]);
          }
          scene.actions([
            { label: 'Probably safe', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'prob_safe';
    scene.text('"It should be safe tod-<i>aaaayyyy</i>," you gasp as he pushes his cock into the folds of your pussy.');
    qspCall(s, 'sex_ev_shower', 'together_fuck_bareback');
  } },
          ]);
        }
        scene.text('"<i>Nngh~!</i>"');
        scene.text('A small squeak escapes your lips as he pushes his cock into the folds of your pussy.');
        scene.actions([
          { label: 'Probably safe', handler: (st: GameState) => {
    (s as any).sex_ev['preg_risk'] = 'prob_safe';
    (s as any).sex_ev['no_condom'] = 1;
    (s as any).sex_ev['creampie_allowance'] = 1;
    scene.text('"<i>Probably-!</i>" you squeak, gasping as he pushes his cock into the folds of your pussy. "You can come inside..."');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
          { label: 'Don\'t say anything', handler: (st: GameState) => {
    scene.text('"<i>Nngh~!</i>"');
    scene.text('A small squeak escapes your lips as he pushes his cock into the folds of your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_shower', 'together_fuck_<<$sex_ev[''position'']>>...
  } },
    ]);
  } },
          { label: 'Remember to pullout', handler: (st: GameState) => {
    (s as any).sex_ev['no_condom'] = 1;
    (s as any).sex_ev['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "Don't forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp bre...
    scene.text(`"Don't forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp breath when ${((s as any).npcdesc ?? 0)} pushes his cock balls deep into your pussy.`);
    scene.text('"... out," you finish with a sigh.');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
          { label: 'Condom after (pullout)', handler: (st: GameState) => {
    (s as any).sex_ev['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "We'll need to use a condom after this. But for now just don't forget to pull- <...
    scene.text(`"We'll need to use a condom after this. But for now just don't forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp breath when ${((s as any).npcdesc ?? 0)} pushes his cock balls deep into your pussy.`);
    scene.text('"... out," you finish with a sigh.');
    qspCall(s, 'sex_ev_shower', '', 'together_fuck_<<$sex_ev[\'position\']>>2');
  } },
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_shower', 'together_fuck_<<$sex_ev[''position'']>>...
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'shower_alone_direct':
      enterShowerAloneDirect(s, scene);
      break;
    case 'shower_finish_direct':
      enterShowerFinishDirect(s, scene);
      break;
    case 'before_borrow_shower':
      enterBeforeBorrowShower(s, scene);
      break;
    case 'borrow_shower2':
      enterBorrowShower2(s, scene);
      break;
    case 'borrow_shower3':
      enterBorrowShower3(s, scene);
      break;
    case 'before_alone':
      enterBeforeAlone(s, scene);
      break;
    case 'after_alone':
      enterAfterAlone(s, scene);
      break;
    case 'after_alone_shower':
      enterAfterAloneShower(s, scene);
      break;
    case 'after_alone_towel':
      enterAfterAloneTowel(s, scene);
      break;
    case 'morning_alone':
      enterMorningAlone(s, scene);
      break;
    case 'morning_look1':
      enterMorningLook1(s, scene);
      break;
    case 'shower_join1':
      enterShowerJoin1(s, scene);
      break;
    case 'shower_join2':
      enterShowerJoin2(s, scene);
      break;
    case 'boy_shower_join1':
      enterBoyShowerJoin1(s, scene);
      break;
    case 'boy_shower_join_response1':
      enterBoyShowerJoinResponse1(s, scene);
      break;
    case 'shower_together1':
      enterShowerTogether1(s, scene);
      break;
    case 'wash_boy1':
      enterWashBoy1(s, scene);
      break;
    case 'shower_sex_menu':
      enterShowerSexMenu(s, scene);
      break;
    case 'shower_reach_cock':
      enterShowerReachCock(s, scene);
      break;
    case 'shower_together_makeout1':
      enterShowerTogetherMakeout1(s, scene);
      break;
    case 'shower_together_jerkoff1':
      enterShowerTogetherJerkoff1(s, scene);
      break;
    case 'shower_together_jerkoff2':
      enterShowerTogetherJerkoff2(s, scene);
      break;
    case 'together_bj1':
      enterTogetherBj1(s, scene);
      break;
    case 'together_fuck_menu':
      enterTogetherFuckMenu(s, scene);
      break;
    case 'fuck_condom_check':
      enterFuckCondomCheck(s, scene);
      break;
    default:
      enterShowerAloneDirect(s, scene);
      break;
  }
}

export const sex_ev_shower: LocationDef = {
  name: 'sex_ev_shower',
  title: 'You slip into the bathroom and turn on the faucet. Hot water',
  region: 'other',
  enter: enter,
};
