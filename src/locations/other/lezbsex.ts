import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStartloverhome(s: GameState, scene: SceneBuilder): void {
  (s as any).lezbsexhome = 1;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/lesbian/lezbsexhome.jpg');
  // TODO-QSP: dynamic text: You spend some time with <<$npcdesc>> in the kitchen when she gets impatient and...
  scene.text(`You spend some time with ${((s as any).npcdesc || '')} in the kitchen when she gets impatient and caresses you.`);
  if (((s as any).npc_love ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 100  &&  ((s as any).daystart ?? 0) - ((s as any).npc_daygenerated ?? 0)?.[String((s as any).npcID ?? 0)] >= 180  &&  ((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] >= 30  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
    scene.actions([
      { label: 'Talk about cohabitation', goto: ['love', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss her back and take her to the bedroom', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    qspGoto(s, 'lezbsex', 'start');
  } },
    { label: 'Stop her and say goodbye', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-2));
    qspGoto(s, 'homes_properties', 'go_straight_home');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  if (((s as any).lezbsexhome ?? 0) === 1) {
    (s as any).lezbsexname = ((s as any).npcdesc ?? 0);
  } else {
    (s as any).lezbsexname = 'the girl';
  }
  scene.img('images/shared/sex/lesbian/lezbsexstart.jpg');
  qspGoto(s, 'lezbsex', 'var');
  // TODO-QSP: end
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).picrand ?? 0) !== 11) {
    scene.actions([
      { label: 'Get eaten out', goto: ['lezbsex', 'kuni'] },
    ]);
  }
  if (((s as any).picrand ?? 0) !== 12  &&  ((s as any).picrand ?? 0) !== 13  &&  ((s as any).picrand ?? 0) !== 14  &&  ((s as any).picrand ?? 0) !== 16  &&  ((s as any).picrand ?? 0) !== 17  &&  ((s as any).picrand ?? 0) !== 18  &&  ((s as any).picrand ?? 0) !== 21) {
    scene.actions([
      { label: 'Get a rimjob', goto: ['lezbsex', 'anuli'] },
    ]);
  }
  if (((s as any).picrand ?? 0) !== 12  &&  ((s as any).picrand ?? 0) !== 13  &&  ((s as any).picrand ?? 0) !== 14  &&  ((s as any).picrand ?? 0) !== 16  &&  ((s as any).picrand ?? 0) !== 17  &&  ((s as any).picrand ?? 0) !== 18  &&  ((s as any).picrand ?? 0) !== 21) {
    scene.actions([
      { label: 'Give her a rimjob', goto: ['lezbsex', 'uanuli'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).picrand ?? 0) !== 11  &&  ((s as any).picrand ?? 0) !== 12  &&  ((s as any).picrand ?? 0) !== 13  &&  ((s as any).picrand ?? 0) !== 14  &&  ((s as any).picrand ?? 0) !== 15  &&  ((s as any).picrand ?? 0) !== 16  &&  ((s as any).picrand ?? 0) !== 17  &&  ((s as any).picrand ?? 0) !== 18  &&  ((s as any).picrand ?? 0) !== 19  &&  ((s as any).picrand ?? 0) !== 20  &&  ((s as any).picrand ?? 0) !== 21  &&  ((s as any).picrand ?? 0) !== 22) {
    scene.actions([
      { label: 'Strapon-fuck her', goto: ['lezbsex', 'svag'] },
      { label: 'Strapon-fuck her in the ass', goto: ['lezbsex', 'sanal'] },
      { label: 'Get strapon-fucked', goto: ['lezbsex', 'usvag'] },
      { label: 'Get strapon-fucked in the ass', goto: ['lezbsex', 'usanal'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1  &&  ((s as any).picrand ?? 0) !== 12  &&  ((s as any).picrand ?? 0) !== 19  &&  ((s as any).picrand ?? 0) !== 20  &&  ((s as any).picrand ?? 0) !== 22) {
    if (((s as any).picrand ?? 0) !== 11  &&  ((s as any).picrand ?? 0) !== 15  &&  ((s as any).picrand ?? 0) !== 16  &&  ((s as any).picrand ?? 0) !== 17  &&  ((s as any).picrand ?? 0) !== 18  &&  ((s as any).picrand ?? 0) !== 21) {
      scene.actions([
        { label: 'Anal play with the dildo', goto: ['lezbsex', 'danal'] },
      ]);
    }
    if (((s as any).picrand ?? 0) !== 11) {
      scene.actions([
        { label: 'Let her play with the dildo', goto: ['lezbsex', 'udvag'] },
      ]);
    }
    if (((s as any).picrand ?? 0) !== 11  &&  ((s as any).picrand ?? 0) !== 14  &&  ((s as any).picrand ?? 0) !== 15  &&  ((s as any).picrand ?? 0) !== 16  &&  ((s as any).picrand ?? 0) !== 17  &&  ((s as any).picrand ?? 0) !== 18  &&  ((s as any).picrand ?? 0) !== 21) {
      scene.actions([
        { label: 'Let her put the dildo in your ass', goto: ['lezbsex', 'udanal'] },
      ]);
    }
    scene.actions([
      { label: 'Play with the dildo', goto: ['lezbsex', 'dvag'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her out', goto: ['lezbsex', 'ukuni'] },
  ]);
  scene.build();
}

function enterUkuni(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/ukuni${((s as any).picrand || '')}.jpg`);
  scene.text('You begin by kissing her breasts, moving gradually down her body, lower and lower, until you are facing her pussy. You start by gently caressing her swollen lips with up and down tongue lapping, up and down the swollen mound and moist slit, and getting ready to focus the tip of your tongue directly on her clitoris. Next, you part her outer lips with your fingers, spreading her pouty inner lips, giving you full access to her puffy pink clitoris.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-5), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/kuni${((s as any).picrand || '')}.jpg`);
  scene.text('She begins by dragging her tongue up your thighs to your crotch and plants light kisses from the top of your slit down to the opening of your vagina. Her tongue pushes into your slickened hole a few times, then slides back up your cunny to caress your tingling clitoris again.');
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterAnuli(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/anuli${((s as any).picrand || '')}.jpg`);
  scene.text('She kisses your buttocks in ever-decreasing circles, eventually reaching the center where your puckered anus is waiting. Reaching her goal, she licks all around the tender star to get it plenty moist, then firmly pushes her tongue forward, penetrating your ass with just the tip. Finally, she retracts it, again licking all around your anus, and repeats her tongue invasion into that most private entrance.');
  qspCall(s, 'arousal', 'rimming', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterUanuli(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/uanuli${((s as any).picrand || '')}.jpg`);
  scene.text('You kiss her buttocks in ever-decreasing circles, eventually reaching the center where her puckered anus is waiting. Reaching your goal, you lick all around the tender star to get it plenty moist, then firmly push your tongue forward, penetrating her ass with just the tip. Finally, you retract it, again licking all around her anus and repeating your tongue invasion into that most private entrance.');
  qspCall(s, 'arousal', 'rimming_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterSvag(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/svag${((s as any).picrand || '')}.jpg`);
  scene.text('You put on the strap-on, adjusting it to your hips and centring it, and then insert it slowly into her pussy. She moans and grinds back at you while you fuck her with it.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterSanal(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/sanal${((s as any).picrand || '')}.jpg`);
  // TODO-QSP: dynamic text: You suck on the shaft to get it well-lubed, then put on the strap-on and gently ...
  scene.text(`You suck on the shaft to get it well-lubed, then put on the strap-on and gently insert it into ${((s as any).lezbsexname || '')}'s anus, pressing into her slowly at first. Then, as she adjusts to the backdoor invasion, you push in and out, faster and faster.`);
  qspCall(s, 'arousal', 'anal_strap_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterUsvag(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/usvag${((s as any).picrand || '')}.jpg`);
  scene.text('You watch as she puts on the strap-on, adjusting it to her hips and centring the fake cock, and then she moves to you and inserts it slowly into your pussy. You moan and grind back at her while she fucks you with it.');
  qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterUsanal(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/usanal${((s as any).picrand || '')}.jpg`);
  scene.text('She spits on the crack of your ass, collecting some saliva to moisten the tip of the strap-on and slowly presses it against your pucker, firmly pushing it into you as you adjust to the invasion. You feel the fullness of it as it moves in and out of your ass with every thrust, pumping faster and deeper.');
  qspCall(s, 'arousal', 'anal_strap', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterDvag(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/dvag${((s as any).picrand || '')}.jpg`);
  scene.text('You take a dildo and poke her wet pussy with it. She pulls your face to hers and kisses you while you drive one shaft into her cunny with one hand and caress her breasts with a second dildo.');
  qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterDanal(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/danal${((s as any).picrand || '')}.jpg`);
  // TODO-QSP: dynamic text: You take a dildo, ensuring that she's watching you slowly lick it, trying to cov...
  scene.text(`You take a dildo, ensuring that she's watching you slowly lick it, trying to cover it with the maximum amount of your thick saliva, and gently insert it into ${((s as any).lezbsexname || '')}'s anus. At first, you ease it in slowly, getting her used to the invasion, then push it deeper, stroking it into her faster and faster.`);
  qspCall(s, 'arousal', 'anal_dildo_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterUdvag(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/udvag${((s as any).picrand || '')}.jpg`);
  // TODO-QSP: dynamic text: <<$lezbsexname>> inserts the dildo into your wet pussy, moving it in and out whi...
  scene.text(`${((s as any).lezbsexname || '')} inserts the dildo into your wet pussy, moving it in and out while constantly twisting and turning it in her hands to stimulate your love hole as much as possible.`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterUdanal(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/lesbian/udanal${((s as any).picrand || '')}.jpg`);
  // TODO-QSP: dynamic text: <<$lezbsexname>> spits in your asscrack, watching it slowly glide down to your p...
  scene.text(`${((s as any).lezbsexname || '')} spits in your asscrack, watching it slowly glide down to your pucker as she collects some of the saliva and rubs it all around the tip of the dildo before pressing it against your anus. You feel it stretching your puckered hole as it pushes farther inside, bringing you that unique back-door pleasure.`);
  qspCall(s, 'arousal', 'anal_dildo', 5, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'lezbsex', 'var'
  } },
    { label: 'Finish', goto: ['lezbsex', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/lezbsexstart.jpg');
  // TODO-QSP: dynamic text: When you have finished playing, <<$lezbsexname>> thanks you for the excellent ti...
  scene.text(`When you have finished playing, ${((s as any).lezbsexname || '')} thanks you for the excellent time and leaves.`);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).gfsex ?? 0) === 1) {
      // TODO-QSP: gt 'dateF', $dateFType
    }
    if (((s as any).lezbsexhome ?? 0) === 1) {
      qspGoto(s, 'homes_properties', 'go_straight_home');
    }
    if (((s as any).sexloc ?? 0) === 'stwork') {
      qspGoto(s, 'stwork', 'start');
    }
    if (((s as any).sexloc ?? 0) === 'uni_dorm') {
      qspGoto(s, 'uni_dorm', 'dorm_room');
    }
    if (((s as any).sexloc ?? 0) === 'city_nightclub') {
      qspGoto(s, 'city_nightclub', 'private_rooms');
    }
    if (((s as any).picrand ?? 0) === 22) {
      qspGoto(s, 'city_center', '');
    }
    if (((s as any).picrand ?? 0) === 21) {
      qspGoto(s, 'vann', 'start');
    }
    if (((s as any).picrand ?? 0) === 19  ||  ((s as any).picrand ?? 0) === 20) {
      qspGoto(s, 'office', 'work');
    }
    dynamicGoto(s, 'sexloc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'startloverhome':
      enterStartloverhome(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    case 'ukuni':
      enterUkuni(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'anuli':
      enterAnuli(s, scene);
      break;
    case 'uanuli':
      enterUanuli(s, scene);
      break;
    case 'svag':
      enterSvag(s, scene);
      break;
    case 'sanal':
      enterSanal(s, scene);
      break;
    case 'usvag':
      enterUsvag(s, scene);
      break;
    case 'usanal':
      enterUsanal(s, scene);
      break;
    case 'dvag':
      enterDvag(s, scene);
      break;
    case 'danal':
      enterDanal(s, scene);
      break;
    case 'udvag':
      enterUdvag(s, scene);
      break;
    case 'udanal':
      enterUdanal(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lezbsex: LocationDef = {
  name: 'lezbsex',
  title: 'You begin by kissing her breasts, moving gradually down her ',
  region: 'other',
  enter: enter,
};
