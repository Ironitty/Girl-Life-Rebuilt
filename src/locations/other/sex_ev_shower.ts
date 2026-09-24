import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShowerAloneDirect(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Shower', goto: ['sex_ev_shower', 'after_alone'] },
  ]);
  scene.build();
}

function enterShowerFinishDirect(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBeforeBorrowShower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"Use your shower?"', handler: (st: GameState) => {
    scene.text('"Mind if I take a quick shower?" you ask.');
    if (((st as any).npc_gymrat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I don\'t mind the sweat," he answers, grinning.');
      if (((st as any).pcs_horny ?? 0) >= 70) {
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
    qspCall(st, 'sex_ev_start', 'undress_function');
    scene.text('"It\'s for me," you roll your eyes. "I\'ll feel better if I clean up first."');
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      scene.text('"How about I join you in there?" he says looking at you meaningfully.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowShower2(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"Okay," he snickers back.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowShower3(st, scene); (st as any).locArgs = __savedLocArgs; }
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
      qspCall(st, 'sex_ev_start', 'undress_function');
      if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
        scene.text('"How about I join you in there?" he says looking at you meaningfully.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowShower2(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Sure," he says, widening the door for you to come in.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowShower3(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBorrowShower2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a shower', goto: ['sex_ev_shower', 'before_alone'] },
    { label: 'You could join me', handler: (st: GameState) => {
    scene.text('"You know, you could always... join me?" you say huskily. "We could get <i>wet</i> together.');
    // TODO-QSP: dynamic text: <<$npcdesc>> locks eyes with you for a split second before both of you rush for ...
    scene.text(`${((st as any).npcdesc ?? '')} locks eyes with you for a split second before both of you rush for the bathroom, peeling off each other's clothes along the way.`);
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
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_shower'] = 1;
  qspCall(s, 'stat', '');
  scene.text('You slip into the bathroom and turn on the faucet. Hot water comes pouring out and you gratefully step under, rinsing the sweat from your body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: A few minutes later, you turn off the water and step out, getting practically at...
    scene.text(`A few minutes later, you turn off the water and step out, getting practically attacked by ${((st as any).npcdesc ?? '')} as soon as you open the door.`);
    qspCall(st, 'sex_ev_foreplay', 'bed_start');
  } },
  ]);
  scene.build();
}

function enterAfterAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_shower'] = 1;
  qspCall(s, 'stat', '');
  scene.text('You slip into the bathroom and turn on the faucet. Hot water comes pouring out and you gratefully step under, rinsing the post-sex feeling from your body.');
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_shower', 'boy_shower_join1'
  } },
    ]);
  } else {
    qspGoto(s, 'sex_ev_shower', 'after_alone_shower');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterAloneShower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash up', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bath_room']
    // TODO-QSP: dynamic text: After spending a few minutes enjoying the heat, you borrow some of <<$npcdesc>>'...
    scene.text(`After spending a few minutes enjoying the heat, you borrow some of ${((st as any).npcdesc ?? '')}'s soap and do a quick scrub before turning off the water and stepping out, clean and dripping.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterAloneTowel(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Rub one out', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash2.mp4');
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] <= -2  &&  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 0) {
      qspCall(st, 'arousal', 'clit_finger', 10, 'no_orgasm_msg', 'masturbate');
      scene.text('You try as hard as you can to get an orgasm, but you just can\'t. Finally, you shut off the water in frustration and step out, annoyed and dripping.');
    } else {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'clit_finger', 10, 'no_orgasm_msg', 'masturbate');
      if (((st as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
        scene.text('You masturbate to finally get at least one orgasm.');
      } else {
        scene.text('You masturbate to get one more orgasm.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterAloneTowel(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAfterAloneTowel(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Put on a towel', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['towel'] = 1;
    scene.img('images/shared/romance/lovers/misc/towel.jpg');
    // TODO-QSP: dynamic text: You quickly wrap yourself in a spare towel from the cupboard. <<$npcdesc>> is st...
    scene.text(`You quickly wrap yourself in a spare towel from the cupboard. ${((st as any).npcdesc ?? '')} is still laying in bed, only covered by a sheet.`);
    scene.text('"Thanks," you smile at him.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Wrap it around your head', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['towel'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['towel_head'] = 1;
    scene.img('images/shared/home/bathroom/towel_head1.jpg');
    // TODO-QSP: dynamic text: You pull a towel from the cupboard and dry your body with it, only pausing to wr...
    scene.text(`You pull a towel from the cupboard and dry your body with it, only pausing to wrapping it around your hair before opening the door. Upon stepping out of the bathroom, ${((st as any).npcdesc ?? '')} eyes light up at the sight of your body, completely naked except for the towel turban atop your head.`);
    scene.text('"Thanks," you smile at him.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Skip the towel', handler: (st: GameState) => {
    scene.img('images/shared/romance/lovers/misc/no_towel.jpg');
    // TODO-QSP: dynamic text: You give your hair a quick wipe with <<$npcdesc>>''s towel to leave it merely da...
    scene.text(`You give your hair a quick wipe with ${((st as any).npcdesc ?? '')}'s towel to leave it merely damp instead of soaked and exit the bathroom.`);
    scene.text('His eyes light up as you step into his bedroom, naked, and still wet from the shower.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    { label: 'Stay to use the mirror', goto: ['sex_ev_after', 'bathroom_after'] },
  ]);
  scene.build();
}

function enterMorningAlone(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bath_room']
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> snoring on the bed and sleepily pad your way into the bat...
    scene.text(`You leave ${((s as any).npcdesc ?? '')} snoring on the bed and sleepily pad your way into the bathroom, yawning along the way.`);
  } else {
    // TODO-QSP: dynamic text: You leave <<$npcdesc>> in the bed and pad your way into the bathroom, yawning al...
    scene.text(`You leave ${((s as any).npcdesc ?? '')} in the bed and pad your way into the bathroom, yawning along the way..`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/shared/home/bathroom/dush.mp4');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
      scene.text('You turn the knob on the faucet and hot water comes pouring out, rinsing the sleep from your eyes.');
    } else {
      scene.text('You turn the knob on the faucet and hot water comes pouring out, washing away the sweat of the sex you decided to start the day with.');
    }
    if (((st as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  (Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  &&  ((st as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_asleep'] = 0;
      // TODO-QSP: dynamic text: A few minutes later, you hear the door open and <<$npcdesc>> comes clambering in...
      scene.text(`A few minutes later, you hear the door open and ${((st as any).npcdesc ?? '')} comes clambering into the shower after you.`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Shower with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
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
  scene.text(`Curious to know where ${((s as any).npcdesc ?? '')} is, you climb out of bed, wandering his apartment looking for him. A few doors down the hall, you realize you hear water running in the bathroom. He must be taking a shower.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back to the bedroom', goto: ['sex_ev_morning', 'morning_menu2'] },
    { label: 'Wait your turn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 5) + 1));
    qspCall(st, 'stat', '');
    // TODO-QSP: $sex_ev['hall_way']
    // TODO-QSP: dynamic text: You wait a few minutes waiting outside the door for <<$npcdesc>> before you hear...
    scene.text(`You wait a few minutes waiting outside the door for ${((st as any).npcdesc ?? '')} before you hear the water shuts off and he opens the door, his hair wet and a towel wrapped around his waist.`);
    scene.text('"Hey," you say. "Can I use it now?"');
    // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> replies, smirking as he shamelessly ogles your nude body.
    scene.text(`"Sure," ${((st as any).npcdesc ?? '')} replies, smirking as he shamelessly ogles your nude body.`);
    scene.text('"Thanks," you smile, casually walking past him and closing the door behind you.');
    scene.actions([
      { label: 'Take a shower', goto: ['sex_ev_morning', 'shower2'] },
    ]);
  } },
    { label: '', labelFn: (s: GameState) => 'Join ' + String(((s as any).npcdesc ?? '') ?? '') + ' in the shower', goto: ['sex_ev_shower', 'shower_join1'] },
  ]);
  scene.build();
}

function enterShowerJoin1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['join_shower'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  scene.img('images/shared/sex/shower/join1.mp4');
  // TODO-QSP: dynamic text: A blast of steam hits you in the face as you open the bathroom door. You pad you...
  scene.text(`A blast of steam hits you in the face as you open the bathroom door. You pad your way inside and open the shower to find ${((s as any).npcdesc ?? '')} under the faucet.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerJoin2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerJoin2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get under the water with him', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope1.mp4');
    // TODO-QSP: dynamic text: You slip in tight, under the water right beside <<$npcdesc>>.
    scene.text(`You slip in tight, under the water right beside ${((st as any).npcdesc ?? '')}.`);
    if (((st as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['join_shower_offer'] = 0;
      scene.text('"Couldn\'t resist after all, huh?" he smirks as his hands immediately start roaming your body .');
    } else {
      scene.text('He doesn\'t miss a beat and his hands start roaming your body before your hair is even properly wet.');
    }
    scene.actions([
      { label: 'Didn\'t want to wait', handler: (st: GameState) => {
    scene.text('"Didn\'t want to wait my turn," you smirk over your shoulder.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Shower with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
      { label: 'Couldn\'t resist', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      scene.text('"Yeah," you smile over your shoulder.');
    } else {
      scene.text('"I couldn\'t resist joining you after all," you smirk over your shoulder.');
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Shower with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
      { label: 'Save the planet', handler: (st: GameState) => {
    scene.text('"Showering together saves water, doesn\'t it?" you grin over your shoulder. "Just doing my part to protect the planet."');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Shower with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Grab his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/jerkoff2.mp4');
    scene.text('Coming up right behind him, you wrap one arm around his chest and snake the other one down his waist to wrap his cock in your fingers.');
    if (((st as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['join_shower_offer'] = 0;
      // TODO-QSP: dynamic text: "Couldn''t resist after all, huh?" <<$npcdesc>> smirks as his soft shaft twitche...
      scene.text(`"Couldn't resist after all, huh?" ${((st as any).npcdesc ?? '')} smirks as his soft shaft twitches in your grip.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t say anything but you hear his breathing grow heavy and his...
      scene.text(`${((st as any).npcdesc ?? '')} doesn't say anything but you hear his breathing grow heavy and his soft shaft twitches in your grip.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherJerkoff1(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherBj1(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Shower with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyShowerJoin1(s: GameState, scene: SceneBuilder): void {
  scene.text('After a couple of minutes, you hear the door open.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cover up (playfully)', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/cover_up.jpg');
    // TODO-QSP: dynamic text: You just manage to put your arm across your breasts and turn your hips in a way ...
    scene.text(`You just manage to put your arm across your breasts and turn your hips in a way that covers all your naughty bits as ${((st as any).npcdesc ?? '')} comes into view.`);
    scene.text('"Yes? Can I help you?" you ask with a playful smile.');
    // TODO-QSP: '"Well, I got to thinking and thought maybe you might ' + iif(rand(1, 2) = 1, 'need someone to wash ...
    qspGoto(st, 'sex_ev_shower', 'boy_shower_join_response1');
  } },
  ]);
  scene.build();
}

function enterBoyShowerJoinResponse1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks," you smirk. "I like my alone time in the shower."');
    // TODO-QSP: dynamic text: "Ah. Well. Let me know if you change your mind," <<$npcdesc>> says and leaves.
    scene.text(`"Ah. Well. Let me know if you change your mind," ${((st as any).npcdesc ?? '')} says and leaves.`);
    qspGoto(st, 'sex_ev_shower', 'after_alone_shower');
  } },
    { label: 'Nice try', handler: (st: GameState) => {
    scene.text('"Nice try, but no," you smirk. "We already had our fun. I think I\'m allowed a little alone time."');
    // TODO-QSP: dynamic text: "Ah. Well. Let me know if you change your mind," <<$npcdesc>> says and leaves.
    scene.text(`"Ah. Well. Let me know if you change your mind," ${((st as any).npcdesc ?? '')} says and leaves.`);
    qspGoto(st, 'sex_ev_shower', 'after_alone_shower');
  } },
    { label: 'Sure', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sure," you smirk and <<$npcdesc>> moves to get into the shower with you. "I wou...
    scene.text(`"Sure," you smirk and ${((st as any).npcdesc ?? '')} moves to get into the shower with you. "I wouldn't mind a little bit of company..."`);
    qspGoto(st, 'sex_ev_shower', 'shower_together1');
  } },
  ]);
  scene.build();
}

function enterShowerTogether1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'arousal', 'massage', 5, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/grope1.mp4');
  // TODO-QSP: dynamic text: Time passes indeterminately as you shower with <<$npcdesc>>, letting the hot wat...
  scene.text(`Time passes indeterminately as you shower with ${((s as any).npcdesc ?? '')}, letting the hot water rain down on you. ${((s as any).npcdesc ?? '')} fills his hands with soap and runs them up and down your body, sudsing you up and grabbing big handfuls of your breasts and ass in the process.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWashBoy1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherMakeout1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('"<i>Aahhh~!</i>"');
    scene.text('Your soft moans encourage him even more and he gropes your tits with both hands, giving them a hard squeeze, producing a gasp from your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Giggle', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('You giggle uncontrollably at his rabid pawing, only serving to encourage him even more and he gropes your tits with both hands, giving them a hard squeeze, producing a gasp from your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Just like that!"', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/grope2.mp4');
    scene.text('"<i>Aahhh~!</i> Just like that!"');
    scene.text('You moan loudly, energizing his groping and making him grab your tits with both hands, giving them a mighty squeeze, producing a gasp to go along with your moans.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWashBoy1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'massage_give', 5, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'arousal', 'foreplay_give', (-5), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/shower/wash_boy1.mp4');
    scene.text('"Let me get you now," you smile, taking the soap from him.');
    scene.text('After sudsing up your hands, you gently run them down his back, massaging his muscles as you do.');
    scene.text('"Let me get the front too," you whisper in his ears and wrap your arms around his shoulders. As you slide your hands down his chest, press yourself all the way up against him, smooshing the softness of your breasts into his back, feeling them slide around across the soap covering his skin.');
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 0) {
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
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerReachCock(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerSexMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you but doesn''t push for something more, seeming jus...
      scene.text(`${((s as any).npcdesc ?? '')} grins back at you but doesn't push for something more, seeming just be revving you up for the main event.`);
      scene.text('"Bedroom now?" you gasp.');
      scene.text('"Bedroom," he agrees and shuts off the water.');
      scene.actions([
        { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'makeout') {
        scene.text('But eventually, you have to call it quits. As much as you and him are enjoying this, the soft state of his cock doesn\'t seem like it\'s going to change.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you but doesn''t push for something more, seeming con...
        scene.text(`${((s as any).npcdesc ?? '')} grins back at you but doesn't push for something more, seeming content to just cop a feel for now.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] !== 'handjob') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherJerkoff1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherJerkoff2(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTogetherBj1(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTogetherFuckMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerReachCock(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Reach for his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'handjob';
    qspCall(st, 'arousal', 'hj', (Math.floor(Math.random() * 4) + 2));
    scene.img('images/shared/sex/shower/jerkoff2.mp4');
    // TODO-QSP: dynamic text: You allow the soap to slip from your fingers, instead snaking your hand down to ...
    scene.text(`You allow the soap to slip from your fingers, instead snaking your hand down to wrap them around ${((st as any).npcdesc ?? '')}'s cock.`);
    if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']  ||  (Math.floor(Math.random() * 10) + 1) > ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      scene.text('Unfortunately, if you wanted something more, it seems like you already took it out of him. No matter how you work it, his cock stays soft and squishy, though not for lack of enjoyment on his part judging by the groans your fingers elicit.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('He groans under your touch, growing in stiffness beneath the gentle jerking of your hand.');
      if (((st as any).sex_ev ?? 0)?.['position'] !== 'handjob') {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherJerkoff1(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherJerkoff2(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherBj1(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterShowerTogetherMakeout1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Makeout with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'makeout';
    qspCall(st, 'arousal', 'foreplay_give', (-5), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'arousal', 'kiss', (Math.floor(Math.random() * 4) + 2), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/shower/kiss1.mp4');
    // TODO-QSP: dynamic text: Things start getting hot and heavy under the shower. <<$npcdesc>>''s lips find y...
    scene.text(`Things start getting hot and heavy under the shower. ${((st as any).npcdesc ?? '')}'s lips find yours and you kiss him back, enjoying the moment. Moans are released into each other's mouths as hands roam bodies with unrestricted access.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerTogetherJerkoff1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'handjob';
    qspCall(st, 'arousal', 'clit_finger', (-5), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'arousal', 'hj', (Math.floor(Math.random() * 4) + 2), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/shower/fun2.mp4');
    // TODO-QSP: dynamic text: You reach back for <<$npcdesc>>''s cock as he keeps groping your tits from behin...
    scene.text(`You reach back for ${((st as any).npcdesc ?? '')}'s cock as he keeps groping your tits from behind. Both your breathing intensifies as you jerk his shaft and he squeezes your nipples.`);
    scene.text('It feels as though the steam should be coming from your heavy breaths instead of the water.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherBj1(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerTogetherJerkoff2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'handjob';
    qspCall(st, 'arousal', 'clit_finger', (-5), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    qspCall(st, 'arousal', 'hj', (Math.floor(Math.random() * 4) + 2), 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/shower/fun3.mp4');
    // TODO-QSP: dynamic text: You and <<$npcdesc>> face each other, staring into one another''s eyes as you fo...
    scene.text(`You and ${((st as any).npcdesc ?? '')} face each other, staring into one another's eyes as you fondle your most intimate parts. His cock is alive in your hand, twitching, stiffening, and pulsing as you work it with fervor. His fingers are on your clit, flicking your bean with intensity, occasionally slipping past to worm their way into your dripping snatch.`);
    scene.text('It feels as though the steam should be coming from your heavy breaths instead of the water.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherBj1(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTogetherBj1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Blow him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'blowjob';
    scene.img('images/shared/sex/shower/bj3.mp4');
    // TODO-QSP: dynamic text: Without a word, you kneel down, taking <<$npcdesc>>''s wet member in your mouth ...
    scene.text(`Without a word, you kneel down, taking ${((st as any).npcdesc ?? '')}'s wet member in your mouth and noisily lick, suck, and slurp it as water rains down on your head.`);
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'blowjob') {
      // TODO-QSP: dynamic text: "You''re fucking incredible," <<$npcdesc>> groans beneath the ministrations of y...
      scene.text(`"You're fucking incredible," ${((st as any).npcdesc ?? '')} groans beneath the ministrations of your lips and tongue. He's rock hard between your lips, somehow seeming to grow even harder by the second.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> groans softly beneath the ministrations of your lips and tongue, oc...
      scene.text(`${((st as any).npcdesc ?? '')} groans softly beneath the ministrations of your lips and tongue, occasionally letting his hand rest on your hair as a gentle guide to let you know you're doing well.`);
    }
    if (((st as any).stat ?? 0)?.['bj'] === 0  &&  ((st as any).sex_ev ?? 0)?.['bj_count'] === 0) {
      scene.text('You think you\'re doing pretty well for your first blowjob, but the most surprising part of it for you is the taste of cock. You run your tongue up the length of his shaft and... it doesn\'t taste like anything. The flavor that stands out most to you is the mineral taste of tap water. Like rinsing your mouth out in sink. But with the texture of skin. Weird.');
    } else {
      scene.text('It tastes clean, you can\'t help but notice, as you run your tongue up the length of his shaft. Not the usual flavors of salt and sweat you normally associate with sucking cock. Just the mineral taste of tap water. Advantages of shower head.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      scene.actions([
        { label: 'Take it to the bedroom', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/bj5.mp4');
    scene.text('"Mmm mmrm mmm mmph mm mm mmph?"');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> moans breathlessly. You let his cock slip from your mouth w...
    scene.text(`"What?" ${((st as any).npcdesc ?? '')} moans breathlessly. You let his cock slip from your mouth with a <i>pop</i>.`);
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_count'] = ((st as any).sex_ev['fuck_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['shower_sex'] = ((st as any).sex_ev['shower_sex'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.actions([
      { label: 'Put your leg up', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckCondomCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
      // TODO-QSP: dynamic text: "Is it safe?" <<$npcdesc>> whispers, asking if he can come inside you.
      scene.text(`"Is it safe?" ${((s as any).npcdesc ?? '')} whispers, asking if he can come inside you.`);
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"It\'s safe," you gasp as he pushes his cock into the folds of your pussy. "You can come inside..."');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          scene.actions([
            { label: 'Probably safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"<i>Probably-!</i>" you squeak, gasping as he pushes his cock into the folds of your pussy. "You can come inside..."');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            scene.actions([
              { label: 'Not safe (pullout)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((st as any).npcdesc ?? '')} pushes his cock between your folds.`);
    scene.text('"Don\'t forget to pull out~!" you gasp as he starts to fuck your pussy.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
              { label: 'Not safe (condom after)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((st as any).npcdesc ?? '')} pushes his cock between your folds.`);
    scene.text('"You can\'t come inside~!" you gasp as he starts to fuck your pussy. "We need to use condoms after this~!');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe d-<i>aaaayyyy</i>," you gasp as he pushes his cock into the folds of your pussy.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckBareback(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          scene.actions([
            { label: 'Probably safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"It should be safe tod-<i>aaaayyyy</i>," you gasp as he pushes his cock into the folds of your pussy.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTogetherFuckBareback(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            scene.actions([
              { label: 'Not safe (pullout)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((st as any).npcdesc ?? '')} pushes his cock between your folds.`);
    scene.text('"Don\'t forget to pull out~!" you gasp as he starts to fuck your pussy.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
              { label: 'Not safe (condom after)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"It probably isn\'t safe today," you admit. "But-"');
    // TODO-QSP: dynamic text: Your reply is interrupted by a small squeak when <<$npcdesc>> pushes his cock be...
    scene.text(`Your reply is interrupted by a small squeak when ${((st as any).npcdesc ?? '')} pushes his cock between your folds.`);
    scene.text('"You can\'t come inside~!" you gasp as he starts to fuck your pussy. "We need to use condoms after this~!');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
            ]);
          }
        }
      }
      scene.actions([
        { label: 'Don\'t say anything', handler: (st: GameState) => {
    scene.text('"<i>Nngh~!</i>"');
    scene.text('A small squeak escapes your lips as he pushes his cock into the folds of your pussy.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'together_fuck_' + String((((st as any).sex_ev ?? {})['position'])) + '2'] },
    ]);
  } },
        { label: 'Remember to pullout', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "Don''t forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp br...
    scene.text(`"Don't forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp breath when ${((st as any).npcdesc ?? '')} pushes his cock balls deep into your pussy.`);
    scene.text('"... out," you finish with a sigh.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
        { label: 'Condom after (pullout)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "We''ll need to use a condom after this. But for now just don''t forget to pull-...
    scene.text(`"We'll need to use a condom after this. But for now just don't forget to pull- <i>Nngh~!</i>" Your warning is interrupted by a sharp breath when ${((st as any).npcdesc ?? '')} pushes his cock balls deep into your pussy.`);
    scene.text('"... out," you finish with a sigh.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
      ]);
    }
  } else {
    scene.text('"<i>Nngh~!</i>"');
    scene.text('A small squeak escapes your lips as he pushes his cock into the folds of your pussy.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'together_fuck_' + String((((s as any).sex_ev ?? {})['position'])) + '2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTogetherFuckBareback(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_shower', 'together_fuck_' + (((s as any).sex_ev ?? 0)?.['position']) + '2');
  // TODO-QSP: end
  scene.actions([
    { label: 'Bareback is fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"We\'re fine without a condom," you finish, voice husky as he starts to ramp into a real fuck.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
    { label: 'Creampies are fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"You can come inside me," you finish, voice husky as he starts to ramp into a real fuck.');
    qspCall(st, 'sex_ev_shower', 'together_fuck_' + (((st as any).sex_ev ?? 0)?.['position']) + '2');
  } },
  ]);
  scene.build();
}

function enterTogetherFuckMiss1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  scene.img('images/shared/sex/shower/leg_up_enter1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'handjob') {
    // TODO-QSP: dynamic text: Without a word, you raise your leg, wrapping it around <<$npcdesc>>''s waist and...
    scene.text(`Without a word, you raise your leg, wrapping it around ${((s as any).npcdesc ?? '')}'s waist and he grabs your thigh to hold you in place. `);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
      // TODO-QSP: dynamic text: You pull your lips off <<$npcdesc>>''s cock with a pop and stand to face him. Wi...
      scene.text(`You pull your lips off ${((s as any).npcdesc ?? '')}'s cock with a pop and stand to face him. Without a word, you raise your leg, wrapping it around ${((s as any).npcdesc ?? '')}'s waist and he grabs your thigh to hold you in place.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckCondomCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterTogetherFuckMiss2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 10), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/leg_up2.mp4');
  // TODO-QSP: dynamic text: Water streams down your bodies as <<$npcdesc>> eagerly fucks your pussy, getting...
  scene.text(`Water streams down your bodies as ${((s as any).npcdesc ?? '')} eagerly fucks your pussy, getting hot and steamy in every sense of the phrase. It interferes with the lubrication of your pussy if you're being honest, but the pleasure is far more than the irritation.`);
  if ((Math.floor(Math.random() * 20) + 1) > 1) {
    // TODO-QSP: dynamic text: After what seems like an eternity of pleasure, <<$npcdesc>> moans into your ear.
    scene.text(`After what seems like an eternity of pleasure, ${((s as any).npcdesc ?? '')} moans into your ear.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCumAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: Then, without warning, <<$npcdesc>> stiffens and you feel something hot pour int...
    scene.text(`Then, without warning, ${((s as any).npcdesc ?? '')} stiffens and you feel something hot pour into your pussy.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCreampieSurprise(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTogetherFuckDoggy1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  scene.img('images/shared/sex/shower/doggy_enter1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'handjob') {
    scene.text('Without a word, you turn around and bend over, placing your hands against the tile and invitingly pointing your ass in his direction. ');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
      // TODO-QSP: dynamic text: You pull your lips off <<$npcdesc>>''s cock with a pop and stand to face him. Wi...
      scene.text(`You pull your lips off ${((s as any).npcdesc ?? '')}'s cock with a pop and stand to face him. Without a word, you turn around and bend over, placing your hands against the tile and invitingly pointing your ass in his direction.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckCondomCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterTogetherFuckDoggy2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 10), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/shower/doggy${(Math.floor(Math.random() * 5) + 1)}.mp4`);
  // TODO-QSP: dynamic text: <<$npcdesc>>''s hips slap against your ass as he eagerly fucks your pussy, helpi...
  scene.text(`${((s as any).npcdesc ?? '')}'s hips slap against your ass as he eagerly fucks your pussy, helping you get hot and steamy in every sense of the phrase. Which is a good thing because it's pretty chilly, bent over like this so far outside the range of the shower. But the sex is more than making up for it.`);
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'together_fuck_doggy_rough1'] },
    ]);
  } else {
    qspCall(s, 'sex_ev_cum', 'cum_decider');
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: After what seems like an eternity of pleasure, <<$npcdesc>> moans into your ear.
      scene.text(`After what seems like an eternity of pleasure, ${((s as any).npcdesc ?? '')} moans into your ear.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCumAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTogetherFuckDoggyRough1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 5, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
  scene.img('images/shared/sex/shower/hair_pull1.mp4');
  // TODO-QSP: dynamic text: Suddenly, <<$npc_usedname[$npcID]>> bends you over so swiftly you nearly lose yo...
  scene.text(`Suddenly, ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} bends you over so swiftly you nearly lose your balance. Your head falls forward before being immediately yanked back as he grabs your hair in a tight fist and begins yanking you onto his cock with greater force. The sound of slapping flesh grows notably louder.`);
  scene.text('"Take my cock you fucking bitch!" he growls from behind you.');
  qspCall(s, 'sex_ev_cum', 'cum_decider');
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: After what seems like an eternity of pleasure, <<$npcdesc>> moans into your ear.
    scene.text(`After what seems like an eternity of pleasure, ${((s as any).npcdesc ?? '')} moans into your ear.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCumAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCumAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>-! I''m almost there!"
  scene.text(`"${((s as any).pcs_nickname ?? '')}-! I'm almost there!"`);
  // TODO-QSP: iif(sex_ev['orgasm'] < orgasm, '"Me too-!" you gasp.', '"Mmmm-!" you hum back.')
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger')) {
      scene.actions([
        { label: 'Not inside!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_inside'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherJerkoffCum(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him come inside you', goto: ['sex_ev_shower', 'shower_creampie1'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Come together', goto: ['sex_ev_shower', 'shower_cum_together1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk him off', goto: ['sex_ev_shower', 'shower_together_jerkoff_cum'] },
    { label: 'Suck him dry', goto: ['sex_ev_shower', 'shower_cum_mouth1'] },
    { label: 'Cum on your face', goto: ['sex_ev_shower', 'shower_cum_facial'] },
  ]);
  scene.build();
}

function enterShowerTogetherJerkoffCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'jerkoff';
  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
  scene.img('images/shared/sex/shower/cum_jerkoff1.mp4');
  if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
    scene.text('"Not inside me!" you yelp.');
    scene.text('You practically jump off of his cock and begin furiously working it with your hand. Not even a second later, cum explodes from the tip, spattering across your stomach.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      qspCall(s, 'arousal', 'hj', (-1));
      // TODO-QSP: dynamic text: Tension builds up inside you to bursting. You feel <<$npcdesc>>''s cock throb in...
      scene.text(`Tension builds up inside you to bursting. You feel ${((s as any).npcdesc ?? '')}'s cock throb in your hand and you know he's about to burst too.`);
      // TODO-QSP: dynamic text: You work him even harder, trying to finish him with one final sprint. <<$npcdesc...
      scene.text(`You work him even harder, trying to finish him with one final sprint. ${((s as any).npcdesc ?? '')} grunts and cum explodes from his tip. The feel of his cum spattering across your stomach is the last thing you need and you come as well, moaning loudly even as you continue to finish him off.`);
    } else {
      qspCall(s, 'arousal', 'hj', (-1));
      // TODO-QSP: dynamic text: Tension builds up inside you to bursting. You feel <<$npcdesc>>''s cock throb in...
      scene.text(`Tension builds up inside you to bursting. You feel ${((s as any).npcdesc ?? '')}'s cock throb in your hand and you can tell he's about to burst.`);
      // TODO-QSP: dynamic text: You work him even harder, trying to finish him with one final sprint. <<$npcdesc...
      scene.text(`You work him even harder, trying to finish him with one final sprint. ${((s as any).npcdesc ?? '')} grunts and cum explodes from his tip. It spatters across your belly, his cock pulsing in your hand, and you milk him for every last drop.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCumMouth1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/shower/deepthroat1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'blowjob') {
    // TODO-QSP: dynamic text: With extreme urgency, you hop off of <<$npcdesc>>''s cock and kneel down on the ...
    scene.text(`With extreme urgency, you hop off of ${((s as any).npcdesc ?? '')}'s cock and kneel down on the porcelain floor of the shower, wrapping his cock in your mouth.`);
  }
  // TODO-QSP: dynamic text: "That''s it-!" <<$npcdesc>> grunts when you swallow it whole, lips kissing the b...
  scene.text(`"That's it-!" ${((s as any).npcdesc ?? '')} grunts when you swallow it whole, lips kissing the base of his shaft. "I'm gonna-!"`);
  // TODO-QSP: dynamic text: He doesn''t even manage to finish his warning before he groans loudly and his co...
  scene.text(`He doesn't even manage to finish his warning before he groans loudly and his cock pulses on your tongue. ${((s as any).npcdesc ?? '')} pulls you further down with his hand and hot salty liquid pours into the back of your throat, your only choice to swallow or choke.`);
  scene.text('Eventually his dick stops throbbing and you gently release him from your lips, looking up at him with seductive eyes.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCumMouth2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCumMouth2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_mouth'] = ((s as any).sex_ev['cum_mouth'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'mouth';
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit it out', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['spit_count'] = ((st as any).sex_ev['spit_count'] ?? 0) + (1);
    // TODO-QSP: $sex_ev['bath_room']
    scene.text('You spit it out.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Swallow', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['swallow'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['swallow_count'] = ((st as any).sex_ev['swallow_count'] ?? 0) + (1);
    // TODO-QSP: $sex_ev['bath_room']
    // TODO-QSP: dynamic text: You gulp down <<$npcdesc>>''s load.
    scene.text(`You gulp down ${((st as any).npcdesc ?? '')}'s load.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerCumFacial(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'facial';
  scene.img('images/shared/sex/shower/facial1.jpg');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
    // TODO-QSP: dynamic text: <<$npcdesc>> pulls his cock from your lips and grabs hold of himself. His hand p...
    scene.text(`${((s as any).npcdesc ?? '')} pulls his cock from your lips and grabs hold of himself. His hand pumps his shaft twice `);
  } else {
    // TODO-QSP: dynamic text: You kneel down and <<$npcdesc>> plasters your face with hot, sticky cum.
    scene.text(`You kneel down and ${((s as any).npcdesc ?? '')} plasters your face with hot, sticky cum.`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCumFacialAfter(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCumFacialAfter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Rinse off', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You put your face to the faucet and clean the cum from your face.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerCreampie1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower_creampie'] = ((s as any).sex_ev['shower_creampie'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_count'] = ((s as any).sex_ev['creampie_count'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'creampie';
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/shower/leg_up2.mp4');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/shower/doggy4.mp4');
    }
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> presses you up against the wall, forcing loud squelching from betwe...
  scene.text(`${((s as any).npcdesc ?? '')} presses you up against the wall, forcing loud squelching from between your legs as he continues fervently fucking your pussy. He pulses inside you and you feel something warm shoot into your womb.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCreampie2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCreampie2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re already shuddering from your own orgasm before your brain even registers...
      scene.text(`You're already shuddering from your own orgasm before your brain even registers that he's coming inside you. Muscles spasm. Your leg tightens around his hip. The other nearly cramps from supporting your weight mid-orgasm. And ${((st as any).npcdesc ?? '')} empties his balls into you, pumping load after load into your cunt.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pours load after load into your cunt. You sit patiently for him to ...
      scene.text(`${((st as any).npcdesc ?? '')} pours load after load into your cunt. You sit patiently for him to finish emptying his balls, waiting until you no longer feel the pulse, quiver, and twitch inside you.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerCreampieAfter(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Creampie induced orgasm', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] === ((st as any).orgasm ?? 0)) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/shower/leg_up2.mp4');
      // TODO-QSP: dynamic text: The first spurt of <<$npcdesc>>''s cum into you flips your switch and you''re im...
      scene.text(`The first spurt of ${((st as any).npcdesc ?? '')}'s cum into you flips your switch and you're immediately shuddering, muscles clenching, one leg tightening around his hip while the other wobbles beneath you, both on the verge of cramping in the throes of orgasm while he empties his balls into your cunt.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/shower/doggy_orgasm1.mp4');
        // TODO-QSP: dynamic text: The first spurt of <<$npcdesc>>''s cum into you flips your switch and you''re im...
        scene.text(`The first spurt of ${((st as any).npcdesc ?? '')}'s cum into you flips your switch and you're immediately shuddering in orgasm. Your legs go weak and you nearly slip off his cock even as he pumps load after load into your cunt, emptying his balls inside you.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerCreampieAfter(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_gross'] = 1;
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum in your cunt immediately makes you go stiff, ruining your or...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum in your cunt immediately makes you go stiff, ruining your orgasm and cutting it short right after it started. Disgust and revulsion overwhelm you as he pours load after load into you, but it's too late now. You give a silent sigh, grimacing internally as you wait for him to finish emptying his balls.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum in your cunt immediately makes you stiffen up. Disgust and r...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum in your cunt immediately makes you stiffen up. Disgust and revulsion overwhelm you as he pours load after load into you, but it's too late to do anything more about it. You give a silent sigh, grimacing internally as you wait for him to finish emptying his balls.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerCreampieAfter(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerCumTogether1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'vaginal', (-1));
  }
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower_creampie'] = ((s as any).sex_ev['shower_creampie'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_count'] = ((s as any).sex_ev['creampie_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/shower/leg_up2.mp4');
    // TODO-QSP: dynamic text: You seem to crest the wave of climax right as you feel <<$npcdesc>> pulse inside...
    scene.text(`You seem to crest the wave of climax right as you feel ${((s as any).npcdesc ?? '')} pulse inside you, a sudden warmth filling up your womb. Your eyes roll back and you shudder in orgasm, all muscles clenching, your left leg around his waist tightening and your right one threatening to give out beneath you with unsteady wobbles. Each new load pumped into you fuels your orgasm and it's not until ${((s as any).npcdesc ?? '')} stops twitching inside you that it finally subsides.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/shower/doggy4.mp4');
      // TODO-QSP: dynamic text: You seem to crest the wave of climax right as you feel <<$npcdesc>> pulse inside...
      scene.text(`You seem to crest the wave of climax right as you feel ${((s as any).npcdesc ?? '')} pulse inside you, a sudden warmth filling up your womb. Your eyes roll back and you shudder in orgasm, legs going weak and nearly falling off his cock even as he empties his balls into you. Each new load pumped into you fuels your orgasm and it's not until ${((s as any).npcdesc ?? '')} stops twitching inside you that it finally subsides.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerCreampieAfter(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerCreampieAfter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull apart', handler: (st: GameState) => {
    // TODO-QSP: iif($sex_ev['position'] = 'miss','<center><video autoplay loop <<$set_imgh>> src="images/shared/sex/...
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from your pussy and you shiver as a hot glob of cum ...
      scene.text(`${((st as any).npcdesc ?? '')} slips his cock from your pussy and you shiver as a hot glob of cum immediately seeps out and dribbles down your leg.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from your pussy and a hot glob of cum immediately se...
      scene.text(`${((st as any).npcdesc ?? '')} slips his cock from your pussy and a hot glob of cum immediately seeps out and dribbles down your leg.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerCreampieSurprise(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower_creampie'] = ((s as any).sex_ev['shower_creampie'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_count'] = ((s as any).sex_ev['creampie_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/shower/leg_up2.mp4');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/shower/doggy4.mp4');
    }
  }
  // TODO-QSP: dynamic text: Suddenly, without warning, <<$npcdesc>> stiffens and you feel something hot pour...
  scene.text(`Suddenly, without warning, ${((s as any).npcdesc ?? '')} stiffens and you feel something hot pour into your pussy.`);
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will') {
    scene.actions([
      { label: 'Asshole!', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/creampie1.mp4');
    // TODO-QSP: dynamic text: "Asshole!" you shout, pushing <<$npcdesc>> away from you. But it''s too late and...
    scene.text(`"Asshole!" you shout, pushing ${((st as any).npcdesc ?? '')} away from you. But it's too late and you feel a hot liquid that isn't water running down your leg.`);
    scene.text('"I told you not to come inside!"');
    scene.actions([
      { label: 'Storm out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bath_room']
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('"Fucking moron!!" you shout again, storming out of the shower, not caring that you\'re dripping wet. You make your way over to his bedroom and pick up your clothes, throwing them on.');
    // TODO-QSP: dynamic text: "Wait!" <<$npcdesc>> protests, clumsily wrapping a towel around his waist and fo...
    scene.text(`"Wait!" ${((st as any).npcdesc ?? '')} protests, clumsily wrapping a towel around his waist and following you.`);
    scene.text('"I\'m not waiting for shit!" you sneer. The moment the last item of clothing is over your wet skin, you stomp out the door, slamming it behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Forgive him (my fault)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/shared/sex/shower/after1.mp4');
    // TODO-QSP: dynamic text: After a few more moments of anger, you deflate. You pull <<$npcdesc>> close, pre...
    scene.text(`After a few more moments of anger, you deflate. You pull ${((st as any).npcdesc ?? '')} close, pressing your naked skin against his.`);
    scene.text('"I\'m sorry," you say. "I was just... acting out. It\'s my fault. I should\'ve known better. I can\'t blame you."');
    // TODO-QSP: dynamic text: You stand there holding each other in silence for several more minutes before <<...
    scene.text(`You stand there holding each other in silence for several more minutes before ${((st as any).npcdesc ?? '')} breaks it.`);
    scene.text('"So... what should we do now?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerWhatNow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Forgive him (both our faults)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/shared/sex/shower/after1.mp4');
    // TODO-QSP: dynamic text: After a few more moments of anger, you deflate. You pull <<$npcdesc>> close, pre...
    scene.text(`After a few more moments of anger, you deflate. You pull ${((st as any).npcdesc ?? '')} close, pressing your naked skin against his.`);
    scene.text('"I\'m sorry," you say. "I was just... acting out. You should\'ve held it, but... it takes two to fuck," you smile ruefully. "So it\'s my fault too."');
    // TODO-QSP: dynamic text: You stand there holding each other in silence for several more minutes before <<...
    scene.text(`You stand there holding each other in silence for several more minutes before ${((st as any).npcdesc ?? '')} breaks it.`);
    scene.text('"So... what should we do now?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerWhatNow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it in stride', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/shower/leg_up2.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/shower/doggy4.mp4');
      }
    }
    // TODO-QSP: dynamic text: You gasp in surprise, but hold on to <<$npcdesc>>, allowing him to empty his bal...
    scene.text(`You gasp in surprise, but hold on to ${((st as any).npcdesc ?? '')}, allowing him to empty his balls into your cunt.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerCreampieSurpriseReaction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Creampie induced orgasm', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] === ((st as any).orgasm ?? 0)) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/shower/leg_up2.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/shower/doggy_orgasm1.mp4');
      }
    }
    // TODO-QSP: dynamic text: You gasp in surprise, feeling <<$npcdesc>> pulse inside you. You were already cl...
    scene.text(`You gasp in surprise, feeling ${((st as any).npcdesc ?? '')} pulse inside you. You were already close yourself and his orgasm sends you over the edge. He holds you tight and you clench on to him with all your might, both of you riding out your orgasms completely intertwined.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerCreampieSurpriseReaction(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerCreampieSurpriseReaction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] > 0) {
    scene.actions([
      { label: 'So much for pulling out (tease)', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/after1.mp4');
    scene.text('"So much for pulling out," you say, a smirk twitching at your lips as he pulls away, feeling something hot dribble down your leg.');
    scene.text('"Sorry... I, uhh... So... what now?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerWhatNow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'So much for pulling out (annoyed)', handler: (st: GameState) => {
    scene.img('images/shared/sex/shower/after1.mp4');
    scene.text('"So much for pulling out," you scowl as he pulls away, feeling his spunk dribble out of your pussy.');
    scene.text('"Sorry... I, uhh... So... what now?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerWhatNow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull away', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/shower/after1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/shower/creampie_after1.jpg');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: When your orgasms finally subside, <<$npcdesc>> pulls away, eliciting shudders f...
      scene.text(`When your orgasms finally subside, ${((st as any).npcdesc ?? '')} pulls away, eliciting shudders from you as his cum gushes from your pussy.`);
    } else {
      // TODO-QSP: dynamic text: Once <<$npcdesc>>''s orgasm finally subsides, he pulls out of your pussy with a ...
      scene.text(`Once ${((st as any).npcdesc ?? '')}'s orgasm finally subsides, he pulls out of your pussy with a pop, releasing a gush of cum that dribbles down your leg.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'That was nice', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/shower/after1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/shower/creampie_after1.jpg');
      }
    }
    scene.text('"That was nice," you smile as he pulls away, feeling something hot dribble down your leg.');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>> smiles back at you.
    scene.text(`"Yeah..." ${((st as any).npcdesc ?? '')} smiles back at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerTogetherEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterShowerWhatNow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
    scene.actions([
      { label: 'Fuck, obviously', handler: (st: GameState) => {
    scene.text('"What now?" you ask, looking at him with a humorous expression. "Isn\'t it obvious? We should fuck again. But in a bed this time."');
    scene.actions([
      { label: 'Leave the shower', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'We should stop', handler: (st: GameState) => {
    scene.text('"We should probably stop," you sigh regretfully, turning off the faucet. "We really shouldn\'t have skipped the condom..."');
    scene.actions([
      { label: 'Finish showering', goto: ['sex_ev_shower', 'shower_together_towel'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerTogetherEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_cleanup'] = 1;
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'jerkoff') {
      scene.actions([
        { label: 'Catch your breath', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    scene.img('images/shared/sex/shower/after2.mp4');
    // TODO-QSP: dynamic text: You and <<$npcdesc>> stand there under the hot water together, breathing hard.
    scene.text(`You and ${((st as any).npcdesc ?? '')} stand there under the hot water together, breathing hard.`);
    scene.text('"Bedroom?" he asks.');
    scene.text('"After a quick rinse," you pant.');
    scene.actions([
      { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Bedroom?', handler: (st: GameState) => {
    scene.text('"You wanna take this to the bed?"');
    scene.text('"Yeah," he says nodding, just as breathless as before.');
    scene.actions([
      { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
      ]);
    }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] <= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 0) {
      // TODO-QSP: dynamic text: "Want to go another round?" <<$npcdesc>> pants, grinning at you.
      scene.text(`"Want to go another round?" ${((s as any).npcdesc ?? '')} pants, grinning at you.`);
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"Sorry soldier," you smile back ruefully. "I\'m all tapped out."');
    scene.actions([
      { label: 'Finish showering', goto: ['sex_ev_shower', 'shower_together_towel'] },
    ]);
  } },
        { label: 'Another round', handler: (st: GameState) => {
    scene.text('"Yeah," you reply huskily and you quickly stumble from the bathroom together.');
    scene.actions([
      { label: 'Take it to the bed', goto: ['sex_ev_shower', 'before_to_the_bed'] },
    ]);
  } },
      ]);
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerTogetherEndingKiss(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Finish showering', goto: ['sex_ev_shower', 'shower_together_towel'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerTogetherEndingKiss(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/shower/kiss2.mp4');
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: Still panting as you wind down from your orgasm, you give <<$npcdesc>> one final...
      scene.text(`Still panting as you wind down from your orgasm, you give ${((st as any).npcdesc ?? '')} one final parting kiss, pouring all of your enjoyment and satisfaction into the brief smack of your lips together.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'makeout') {
        // TODO-QSP: dynamic text: All good things must come to an end. <<$npcdesc>> shuts off the water and you gi...
        scene.text(`All good things must come to an end. ${((st as any).npcdesc ?? '')} shuts off the water and you give him one final parting kiss before stepping out of the shower together.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'blowjob'  &&  ((st as any).sex_ev ?? 0)?.['last_cum'] !== 'facial') {
          // TODO-QSP: dynamic text: You smile at <<$npcdesc>> as you get off your knees and stand, giving him a smal...
          scene.text(`You smile at ${((st as any).npcdesc ?? '')} as you get off your knees and stand, giving him a small kiss just before he turns off the faucet and you step out of the shower together.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
            // TODO-QSP: dynamic text: As the last of the cum is cleaned from your face, you turn and give <<$npcdesc>>...
            scene.text(`As the last of the cum is cleaned from your face, you turn and give ${((st as any).npcdesc ?? '')} a small kiss of satisfaction before he turns off the faucet and you step out of the shower together.`);
          } else {
            // TODO-QSP: dynamic text: With a smile, you give <<$npcdesc>> a small kiss of satisfaction just before he ...
            scene.text(`With a smile, you give ${((st as any).npcdesc ?? '')} a small kiss of satisfaction just before he turns off the faucet and you step out of the shower together.`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish showering', goto: ['sex_ev_shower', 'shower_together_towel'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerTogetherTowel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0) === 'A34') {
    qspGoto(s, 'sex_ev_A34', 'kolka_shower_end');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower'] = 1;
  if (((s as any).sex_ev ?? 0)?.['morning_after'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_shower'] = 1;
  }
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  // TODO-QSP: $sex_ev['bath_room']
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
    scene.actions([
      { label: 'Grab towels for both of you', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You grab your towel off the rack and pull one out of the cupboard for <<$npcdesc...
    scene.text(`You grab your towel off the rack and pull one out of the cupboard for ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Thanks," he smiles, wiping himself down next to you.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
      { label: 'Give him a towel (none for you)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You grab your towel off the rack and hand it to <<$npcdesc>>.
    scene.text(`You grab your towel off the rack and hand it to ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Thanks," he smiles, wiping himself down next to you. "Don\'t you need one?"');
    scene.text('"Not really," you smirk back and pad back to your bedroom wet and naked.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home'  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls his towel off the rack, wiping himself down with it.
      scene.text(`${((s as any).npcdesc ?? '')} pulls his towel off the rack, wiping himself down with it.`);
      scene.actions([
        { label: 'Towel for me?', handler: (st: GameState) => {
    scene.text('"Uhh..." you say, looking around. "Can I borrow a towel to dry off?"');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('He stop suddenly.');
      scene.text('"Er... I only have one towel," he says apologetically.');
    } else {
      scene.text('"Sorry, only got one towel," he shrugs.');
    }
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.text('Your forehead creases in irritation.');
    scene.text('<i>Seriously? He couldn\'t have told me that</i> before <i>I showered?</i> you think as you pad back to the bedroom sopping wet.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
      { label: 'Fair', handler: (st: GameState) => {
    scene.text('"Fair," you grin, watching him leer at your naked wet body as you leave the bathroom.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
    ]);
  } },
        { label: 'Leave naked', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You give your hair a quick wring and exit the bathroom naked, <<$npcdesc>> follo...
    scene.text(`You give your hair a quick wring and exit the bathroom naked, ${((st as any).npcdesc ?? '')} following behind you with his towel around his waist.`);
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pulls a towel out of a cupboard, offering it to you.
      scene.text(`${((s as any).npcdesc ?? '')} pulls a towel out of a cupboard, offering it to you.`);
      scene.actions([
        { label: 'Borrow a towel', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['towel'] = 1;
    scene.text('You accept gratefully it and towel off before wrapping it around your chest, exiting the bathroom with him.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
        { label: 'Leave naked', handler: (st: GameState) => {
    scene.text('Your eyes sparkle mischievously and ignore the towel, leaving the bathroom still naked and dripping, and giving him a great view of your wet ass in the process.');
    qspCall(st, 'sex_ev_after', 'after_sex2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeforeToTheBed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('The two of you stumble out of the shower to the bed with hands all over each other. You hit the mattress uncaring of the excess moisture on your bodies and you\'re soaking wet, in every sense of the word.');
  qspCall(s, 'sex_ev_foreplay', 'bed_start');
  // TODO-QSP: end
  scene.build();
}

function enterBoyShowerFinish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: <<$npcdesc>> returns to the bedroom with wet hair and a towel wrapped around his...
  scene.text(`${((s as any).npcdesc ?? '')} returns to the bedroom with wet hair and a towel wrapped around his waist.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyShowerFinishActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBoyShowerFinishActs(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: '"Good shower?"', handler: (st: GameState) => {
    // TODO-QSP: '"Did you have a good shower?" you ask' + iif(sex_ev['drawer_rummage'] = 1, ' innocently putting you...
    if (((st as any).sex_ev ?? 0)?.['join_shower_offer'] === 1) {
      scene.text('"Could have used some company in there," he smiles back wistfully.');
      scene.actions([
        { label: 'Sorry', handler: (st: GameState) => {
    scene.text('"Sorry," you reply.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', '');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Yeah, I feel much better now," he says.');
      scene.actions([
        { label: 'Glad to hear it', handler: (st: GameState) => {
    scene.text('"Glad to hear it," you reply.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', '');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).sex_ev ?? 0)?.['shower'] === 0) {
      scene.actions([
        { label: 'My turn', handler: (st: GameState) => {
    scene.text('"I think it\'s my turn now," you say, hauling yourself out of bed and passing him by into the steamy just-used bathroom.');
    scene.actions([
      { label: 'Shower', goto: ['sex_ev_shower', 'after_alone'] },
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
    case 'together_fuck_bareback':
      enterTogetherFuckBareback(s, scene);
      break;
    case 'together_fuck_miss1':
      enterTogetherFuckMiss1(s, scene);
      break;
    case 'together_fuck_miss2':
      enterTogetherFuckMiss2(s, scene);
      break;
    case 'together_fuck_doggy1':
      enterTogetherFuckDoggy1(s, scene);
      break;
    case 'together_fuck_doggy2':
      enterTogetherFuckDoggy2(s, scene);
      break;
    case 'together_fuck_doggy_rough1':
      enterTogetherFuckDoggyRough1(s, scene);
      break;
    case 'shower_cum_ask':
      enterShowerCumAsk(s, scene);
      break;
    case 'shower_together_jerkoff_cum':
      enterShowerTogetherJerkoffCum(s, scene);
      break;
    case 'shower_cum_mouth1':
      enterShowerCumMouth1(s, scene);
      break;
    case 'shower_cum_mouth2':
      enterShowerCumMouth2(s, scene);
      break;
    case 'shower_cum_facial':
      enterShowerCumFacial(s, scene);
      break;
    case 'shower_cum_facial_after':
      enterShowerCumFacialAfter(s, scene);
      break;
    case 'shower_creampie1':
      enterShowerCreampie1(s, scene);
      break;
    case 'shower_creampie2':
      enterShowerCreampie2(s, scene);
      break;
    case 'shower_cum_together1':
      enterShowerCumTogether1(s, scene);
      break;
    case 'shower_creampie_after':
      enterShowerCreampieAfter(s, scene);
      break;
    case 'shower_creampie_surprise':
      enterShowerCreampieSurprise(s, scene);
      break;
    case 'shower_creampie_surprise_reaction':
      enterShowerCreampieSurpriseReaction(s, scene);
      break;
    case 'shower_what_now':
      enterShowerWhatNow(s, scene);
      break;
    case 'shower_together_end':
      enterShowerTogetherEnd(s, scene);
      break;
    case 'shower_together_ending_kiss':
      enterShowerTogetherEndingKiss(s, scene);
      break;
    case 'shower_together_towel':
      enterShowerTogetherTowel(s, scene);
      break;
    case 'before_to_the_bed':
      enterBeforeToTheBed(s, scene);
      break;
    case 'boy_shower_finish':
      enterBoyShowerFinish(s, scene);
      break;
    case 'boy_shower_finish_acts':
      enterBoyShowerFinishActs(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_shower: LocationDef = {
  name: 'sex_ev_shower',
  title: 'You slip into the bathroom and turn on the faucet. Hot water',
  region: 'other',
  enter: enter,
};
