import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Empty Stall</b></center>');
  scene.img('images/locations/shared/gloryhole/action/sitting.jpg');
  if (((s as any).stat ?? 0)?.['bj'] === 0  ||  ((s as any).stat ?? 0)?.['know_glory'] === 0) {
    qspCall(s, 'stat', '');
    scene.text('You walk down to the last stall and sit down, next to the toilet is a rather large almost perfectly round hole. Puzzled, you wonder how it got there and why no one has fixed it.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('You walk down to the last stall. The large almost perfectly round hole is still there. You wonder how many women have used that hole. You feel a little excited as you contemplate your next move.');
  }
  qspCall(s, 'gloryhole', 'start_options');
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Last Stall</b></center>');
  scene.img('images/locations/shared/gloryhole/action/sitting.jpg');
  if (((s as any).stat ?? 0)?.['bj'] === 0  ||  ((s as any).stat ?? 0)?.['know_glory'] === 0) {
    qspCall(s, 'stat', '');
    scene.text('You are still in the last stall. Next to the toilet is a rather large almost perfectly round hole. You still don\'t know how it got there and why no one has fixed it.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('You are still in the last stall. The large almost perfectly round hole is still there. You wonder how many women have used that hole. You feel a little excited as you contemplate your next move.');
  }
  qspCall(s, 'gloryhole', 'start_options');
  scene.build();
}

function enterStartOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >=40) {
    qspCall(s, 'willpower', 'mast', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Caress Yourself [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Caress Yourself', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'willpower', 'mast', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['gloryhole', 'mast'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Stand up and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Look at the Hole', goto: ['gloryhole', 'hole'] },
  ]);
  scene.build();
}

function enterMast(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/caress1.mp4');
    scene.text('Feeling a bit turned on, you close the door to the stall and you behind to reach down your underwear and start rubbing your clit.');
    qspCall(s, 'arousal', 'clit_finger', 4, 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gloryhole', 'mast', 'stage2');
  } },
    ]);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'stage2') {
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).picrand ?? 0) === 1) {
      scene.img('images/locations/shared/gloryhole/sex/caress1.mp4');
    } else {
      scene.img('images/shared/sex/mast/mastr.jpg');
    }
    if (((s as any).pcs_horny ?? 0) <= 60) {
      scene.text('You are starting to feel warm and you insert your finger in your pussy.');
    } else {
      scene.text('You are starting to feel warm and you insert your finger in your pussy. You keep fingering your pussy and before long you are breathing heavily and start to moan.');
    }
    qspCall(s, 'arousal', 'clit_finger', 4, 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'mast', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'willpower', 'mast', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'end');
    scene.text('You decide that you shouldn\'t continue and stop yourself from finishing.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_horny ?? 0) >= 90) {
      scene.actions([
        { label: 'Climax', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    scene.img('images/locations/shared/gloryhole/sex/orgasm.mp4');
    qspCall(s, 'arousal', 'clit_finger', 2, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gloryhole', 'mast', 'stage2'
  } },
      ]);
    }
  }
  scene.build();
}

function enterHole(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'unknown guy', Math.floor(Math.random() * 23) + 18);
  if (((s as any).npc_dick ?? 0)?.[String((s as any).npclastgenerated ?? 0)] < 6) {
    (s as any).npc_dick[$npclastgenerated] = 6;
  }
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/gloryhole/action/looking.jpg');
  if (((s as any).stat ?? 0)?.['gloryhole'] === 0  ||  Math.floor(Math.random() * 5) + 1 === 5) {
    scene.actions([
      { label: 'Sign the wall', handler: (st: GameState) => {
    (s as any).stat['know_glory'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/ghstartled.mp4');
    scene.text('While looking through the hole you decided to write something on the wall just above it. While you were focused on writing, you didn\'t notice the dick poking through the hole until the tip of it nearly went into your mouth. Startled you jerk away from the offending penis.');
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suck it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suck it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['gloryhole', 'blowjob'] },
      ]);
    }
    if (((s as any).pcs_throat ?? 0) === 0) {
      qspCall(s, 'willpower', 'hj', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Touch the shaft [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Touch the shaft', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['gloryhole', 'virgin'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Quickly leave the stall ', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/eww.mp4');
    scene.text('You shudder in disgust at the thought that some stranger\'s dick was just practically in your mouth, you get up and quickly leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/action/see_men.jpg');
    scene.text('You look through the hole and see several men with their backs to you, using the urinals.');
    qspCall(s, 'willpower', 'bj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stick your finger in the hole [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stick your finger in the hole', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 100);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['gloryhole'] === 0) {
      scene.img('images/shared/sex/gloryhole/ghfinger\'+rand(1, 5)+\'.jpg');
      scene.text('You put your finger in the hole hoping to entice a man to come over…');
      // TODO-QSP: dynamic text: The man slips <<$func('money', 'string_profit', 100)>> into the hole, and then p...
      scene.text(`The man slips ${qspFunc(s, 'money', 'string_profit', 100)} into the hole, and then puts his erect cock through the hole.`);
    } else {
      scene.img('images/locations/shared/gloryhole/action/ready.jpg');
      scene.text('You poke your finger in the hole showing that you are ready to serve a man. Then you put your face close to the hole and open your mouth.');
      // TODO-QSP: dynamic text: The stranger slips <<$func('money', 'string_profit', 100)>> into the hole, and t...
      scene.text(`The stranger slips ${qspFunc(s, 'money', 'string_profit', 100)} into the hole, and then his erect cock pokes out of the hole.`);
    }
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('Seeing the dick poke through, you reconsider what you are about to do, do you really want to suck some strange man\'s dick, through a hole in the bathroom for money?');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Take his money and Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take his money and Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Give back the money and Leave', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 100);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Blow Him', goto: ['gloryhole', 'blowjob'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck it', goto: ['gloryhole', 'blowjob'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/action/see_none.jpg');
    scene.text('Looking through the hole, you can see a row of urinals on the other side. The hole must be to the men\'s room next door. You don\'t see any men currently in there.');
    scene.actions([
      { label: 'Don\'t do it', handler: (st: GameState) => {
    scene.text('You move away from the hole reconsidering what you were about to do and quickly leave the stall.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Wait to see if someone turns up', goto: ['gloryhole', 'hole'] },
    ]);
  }
  scene.build();
}

function enterVirgin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/gloryhole/sex/ghvirgin1.mp4');
  scene.text('You tentatively reach out and gently touch the dick, half afraid to, but also half wanting to.');
  scene.actions([
    { label: 'Quickly leave the stall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/eww.mp4');
    scene.text('You shudder in disgust at the thought that you were just touching some stranger\'s dick. You get up and quickly leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    { label: 'Grab it', handler: (st: GameState) => {
    scene.img('images/locations/shared/gloryhole/sex/ghfeeling.mp4');
    scene.text('Biting your lip and deciding you want to feel it some more, you reach over again and grab it. You caress it with your hand, it is harder than you expected and warm to the touch, it almost feels like it is throbbing in your hand. Unexplained feelings of excitement run through your body. You hear through the wall the guy saying, "Stop playing with it and stroke it." "Huh?" You reply, not knowing why he wants you to stroke it. He replies, "Really, you don\'t know? Just grab it with your hand and slide it up and down."');
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/eww.mp4');
    scene.text('You let go of him, wondering what possessed you to grab some stranger\'s dick in the first place. You quickly leave the stall, you can hear the guy. "Hey why did you stop…? Hello? Are you still there? What the fuck!"');
    scene.actions([
      { label: 'Quickly get out', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Slide your hand on his penis', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/ghstroke1.mp4');
    scene.text('You decide to gently slide your hand on his dick. You feel his hard penis throb as you continue to slide your hand up and down. To your surprise you are really enjoying stroking the dick, your pussy starts to itch from the experience. As you get more turned on, you grab it with both hands and stroke it.');
    qspCall(s, 'arousal', 'hj', 5, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue Stroking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'hands', 'an unknown guy from the gloryhole');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/gloryhole/sex/ghmastcum.mp4');
    scene.text('Without any warning, hot white liquid spurts out the tip of his penis. You look at your hands, watching the sperm run down the back of your hand and down onto your arm. The man panting says, "That was," he takes another breath, "That was great."');
    scene.text('You decide to lick a bit of the white liquid off your hand curiously wanting to know what it tastes like. It\'s slimy and tastes tart.');
    scene.actions([
      { label: 'Continue', goto: ['gloryhole', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).ghnow = ((s as any).ghnow ?? 0) + (1);
  (s as any).stat['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
  (s as any).temp = Math.floor(Math.random() * 5) + 1;
  scene.img(`images/locations/shared/gloryhole/sex/dressed/bj${Math.floor(Math.random() * 5) + 1}.mp4`);
  // TODO-QSP: dynamic text: You wrap your lips around his dick and take his <<npc_dick[$npclastgenerated]>>c...
  scene.text(`You wrap your lips around his dick and take his ${((s as any).npc_dick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]}cm long ${((s as any).npc_thdick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]} cock in your mouth and start to suck it, you suck the cock enthusiastically.`);
  qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['vaginal'] > 0  ||  ((s as any).stat ?? 0)?.['anal'] > 0) {
    // TODO-QSP: act 'Undress': gt 'gloryhole', 'ghsex'
  }
  scene.actions([
    { label: 'Continue to Suck', handler: (st: GameState) => {
    scene.img(`images/locations/shared/gloryhole/sex/dressed/bj${Math.floor(Math.random() * 5) + 1}.mp4`);
    scene.text('You suck on his dick, bobbing your head, sometimes using your hands to stroke his shaft at the same time, other times your hands massage his balls. Before to long you hear the guy moan in pleasure, "I\'m cuming."');
    qspCall(s, 'arousal', 'bj', 5, 'unknown', 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'swallow', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Step back [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Step back', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'swallow', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'cum_call', 'face', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/ghfacial.mp4');
    scene.text('You pull your mouth off his dick but keep jerking him off, shortly later, hot spurts of cum start flying and covering your face.');
    scene.actions([
      { label: 'Get up', goto: ['gloryhole', 'return'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img(`images/locations/shared/gloryhole/sex/dressed/bj${Math.floor(Math.random() * 5) + 1}.mp4`);
    scene.text('Despite what he says you keep sucking his dick, you are looking forward to him filling your mouth up with his tasty sperm. Moments later hot spurts of cum fill your mouth.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'end');
    scene.text('You gather a mouthful of sperm, and then swallow it. Their sperm has a sticky and sharp taste which makes you grimace.');
    scene.actions([
      { label: 'Get up', goto: ['gloryhole', 'return'] },
    ]);
  } },
      { label: 'Spit out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'end');
    scene.text('You decide to spit it all out.');
    scene.actions([
      { label: 'Get up', goto: ['gloryhole', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGhsex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Empty Stall</b></center>');
  scene.img('images/locations/shared/gloryhole/action/undress.mp4');
  scene.text('You let go of him and quickly undress, once you are naked you start stroking him again while you line yourself up with his dick. You badly want to fuck him.');
  qspCall(s, 'arousal', 'hj', 5, 'unknown', 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['anal'] > 0) {
    // TODO-QSP: act 'Ass': gt 'gloryhole', 'anal'
  }
  if (((s as any).stat ?? 0)?.['vaginal'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      // TODO-QSP: act "Use a condom": gt 'gloryhole', 'condom'
    }
    qspCall(s, 'willpower', 'sex', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pussy', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).sexcontra = 0;
  }, goto: ['gloryhole', 'pussy'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Re-dress and suck it instead', goto: ['gloryhole', 'blowjob'] },
  ]);
  scene.build();
}

function enterCondom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/gloryhole/sex/condom_on.mp4');
  qspCall(s, 'dina', 'prezik');
  (s as any).protect = 1;
  if (((s as any).preziktype ?? 0) === 2) {
    (s as any).sexcontra = 7;
    scene.text('You take one of your sabotaged condoms and put it on the stranger.');
  } else {
    (s as any).sexcontra = 3;
    scene.text('You take a condom and put it on the stranger\'s dick.');
  }
  scene.actions([
    { label: 'Continue', goto: ['gloryhole', 'pussy'] },
  ]);
  scene.build();
}

function enterPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).temp = Math.floor(Math.random() * 5) + 1;
  if (Math.floor(Math.random() * 3) + 0 > 0) {
    scene.img(`images/locations/shared/gloryhole/sex/sex${((s as any).temp ?? 0)}.mp4`);
  } else {
    if (((s as any).protect ?? 0) === 1) {
      scene.img(`images/locations/shared/gloryhole/sex/vagcon${((s as any).temp ?? 0)}.mp4`);
    } else {
      scene.img(`images/locations/shared/gloryhole/sex/vag${((s as any).temp ?? 0)}.mp4`);
    }
  }
  // TODO-QSP: dynamic text: You turn around and back up to the hole, you use one hand to guide his dick into...
  scene.text(`You turn around and back up to the hole, you use one hand to guide his dick into your pussy. The ${((s as any).npc_dick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]}cm long ${((s as any).npc_thdick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]} cock slides easily into your wet pussy, causing you to moan in pleasure as you move your hips back and forth. You start humping his dick with fast movements, taking the full length of him balls deep into you, which causes him to moan loudly. After several minutes, you hear him on the other side of the wall yell out, "I'm gonna cum."`);
  qspCall(s, 'arousal', 'vaginal', 10, 'unknown', 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).protect ?? 0) !== 1) {
    qspCall(s, 'dinSex', 'std_trigger');
    if (((s as any).tabletkicheck ?? 0) === 0) {
      qspCall(s, 'willpower', 'cum_inside', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Allow him to cum inside [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Allow him to cum inside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'cum_call', '', '', 'an unknown guy from the gloryhole');
    scene.img('images/locations/shared/gloryhole/sex/ghcreampie.mp4');
    scene.text('Instead of pulling away, you moan "Inside me, please," and push yourself hard against the opening in the wall. You feel his hot sperm fill your pussy in spurt after spurt. When you finally pull yourself off him, you can feel the sperm leaking out of your pussy.');
    qspCall(s, 'cuminsidereact', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'vaginal', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Allow him to cum inside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', '', '', 'an unknown guy from the gloryhole');
    scene.img('images/locations/shared/gloryhole/sex/ghcreampie.mp4');
    scene.text('Instead of pulling away, you moan "Inside me, please," and push yourself hard against the opening in the wall. You feel his hot sperm fill your pussy in spurt after spurt. When you finally pull yourself off him, you can feel the sperm leaking out of your pussy.');
    qspCall(s, 'cuminsidereact', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'vaginal', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Quickly turn around and get on your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'mouth_swallow', 'an unknown guy from the gloryhole');
    scene.img('images/locations/shared/gloryhole/sex/ghswallow.mp4');
    scene.text('Once down on your knees you take his dick into your mouth and start sucking him. You are looking forward to him filling your mouth up with his tasty sperm. Moments later hot spurts of cum fill your mouth, you savor the taste of it in your mouth, before you swallow it all down.');
    qspCall(s, 'arousal', 'bj', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
      { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'face', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'hj', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/ghfacial.mp4');
    scene.text('You put your face near his dick and start jerking him off, shortly later, hot spurts of cum start flying and covering your face.');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sexcontra ?? 0) === 4) {
      // TODO-QSP: dynamic text: You pull off of <<$boydesc>> and look at his dick and think, "Oh shit! The condo...
      scene.text(`You pull off of ${((s as any).boydesc ?? 0)} and look at his dick and think, "Oh shit! The condom burst."`);
    } else {
      // TODO-QSP: dynamic text: You pull off of <<$boydesc>> and look at his dick and think, "Oh shit! The condo...
      scene.text(`You pull off of ${((s as any).boydesc ?? 0)} and look at his dick and think, "Oh shit! The condom is missing!"`);
      // TODO-QSP: dynamic text: <<$boydesc>> groaned and you realized that he came in the condom.
      scene.text(`${((s as any).boydesc ?? 0)} groaned and you realized that he came in the condom.`);
    }
    (s as any).sexcontra = 0;
    (s as any).protect = 0;
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  }
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/gloryhole/sex/ghintoass.mp4');
  // TODO-QSP: dynamic text: You rub your wet pussy and get your fingers nice and wet and then rub it on your...
  scene.text(`You rub your wet pussy and get your fingers nice and wet and then rub it on your asshole, you do the same to his dick, then you guide his ${((s as any).npc_dick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]}cm ${((s as any).npc_thdick ?? 0)?.[String((s as any).npclastgenerated ?? 0)]} cock into your ass. You feel his dick enter your tight ass, feelings of pain and pleasure rush through you.`);
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'arousal', 'clit_finger', 5, 'unknown', 'sub');
  qspCall(s, 'arousal', 'anal', (-5), 'unknown', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep Going', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).temp = Math.floor(Math.random() * 5) + 1;
    if (Math.floor(Math.random() * 3) + 0 > 0) {
      scene.img(`images/locations/shared/gloryhole/sex/sex${((s as any).temp ?? 0)}.mp4`);
    } else {
      scene.img(`images/locations/shared/gloryhole/sex/anal${((s as any).temp ?? 0)}.mp4`);
    }
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.text('The pain doesn\'t fade and instead it starts to hurt worse after a while and the pleasure starts to fade. You fuck his dick with your ass, at first taking him deeper and deeper, as you get faster and faster. As the pleasure fades and the pain gets worse you slow down and don\'t take him as deep. You start to rub your clit to help with the sensation of pleasure. You consider stopping as the pain gets worse, but you can tell by the throbbing of his dick and ragged breathing he is about to cum and decided to keep it up so he can finish.');
    } else {
      scene.text('The pain fades slowly and soon all you feel pleasure. You fuck his dick with your ass, taking him deeper and deeper, as you get faster and faster, you start to rub your clit as you feel yourself getting close to climax. You can tell by the throbbing of his dick and ragged breathing he is about to cum.');
      scene.text('The pain fades quickly and soon all you feel pleasure. You fuck his dick with your ass, taking him deeper and deeper, as you get faster and faster, you start to rub your clit as you feel yourself getting close to climax. You can tell by the throbbing of his dick and ragged breathing he is about to cum.');
    }
    qspCall(s, 'arousal', 'anal', 5, 'unknown', 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) < 10) {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/analpain.jpg');
    scene.text('The pain becomes too much and you can\'t take it anymore, on the verge of tears you stop and pull your ass off his dick. You quickly get dressed and leave, you wonder if it was supposed to hurt that much. You can hear the guy yelling at you for having stopped before he finished.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
    }
    qspCall(s, 'willpower', 'anal', 'resist');
    qspCall(s, 'willpower', 'swallow', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Turn around, kneel and let him cum in your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Turn around, kneel and let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'willpower', 'swallow', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'cum_call', 'mouth_swallow', 'an unknown guy from the gloryhole');
    scene.img('images/locations/shared/gloryhole/sex/ghswallow.mp4');
    scene.text('Once down on your knees you take his dick into your mouth and start sucking him, tasting your own ass on his dick. But you are looking forward to him filling your mouth up with his tasty sperm. Moments later hot spurts of cum fill your mouth, you savor the taste of it in your mouth, before you swallow it all down.');
    qspCall(s, 'arousal', 'bj', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him cum in your ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'anus', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'anal', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/ghanalcream1.mp4');
    scene.text('You feel his dick throb as he shoots his load of sperm deep in your ass, filling it up. When you pull your ass off his dick, you feel the hot sperm spilling out of your gaping asshole.');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
      { label: 'Let him cum all over your ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'butt', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'anal', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/ghcumonass.jpg');
    scene.text('You pull your ass away, feeling his cock slip out of your asshole, just as you feel hot splashing of cum landing on your butt, coating your cheeks and running down the crack of your ass.');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
      { label: 'Turn around, kneel and let him cum on your face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'cum_call', 'face', 'an unknown guy from the gloryhole');
    qspCall(s, 'arousal', 'hj', (-10), 'unknown', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/shared/gloryhole/sex/ghfacial.mp4');
    scene.text('You put your face near his dick and start jerking him off, shortly later, hot spurts of cum start flying and covering your face.');
    scene.actions([
      { label: 'Get dressed', goto: ['gloryhole', 'return'] },
    ]);
  } },
    ]);
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
    case 'return':
      enterReturn(s, scene);
      break;
    case 'start_options':
      enterStartOptions(s, scene);
      break;
    case 'mast':
      enterMast(s, scene);
      break;
    case 'hole':
      enterHole(s, scene);
      break;
    case 'virgin':
      enterVirgin(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'ghsex':
      enterGhsex(s, scene);
      break;
    case 'condom':
      enterCondom(s, scene);
      break;
    case 'pussy':
      enterPussy(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const gloryhole: LocationDef = {
  name: 'gloryhole',
  title: 'Empty Stall',
  region: 'other',
  description: ['You walk down to the last stall and sit down, next to the toilet is a rather large almost perfectly round hole. Puzzled, you wonder how it got there and why no one has fixed it.'],
  enter: enter,
};
