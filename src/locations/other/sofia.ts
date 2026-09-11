import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNotSpying(s: GameState, scene: SceneBuilder): void {
  ((s as any).sofiaQW ?? {})['spying_day'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('As you\'re about to open the door, the noises get louder and leave no question in your mind that somebody is having sex in the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a peek', goto: ['sofia', 'spying'] },
    { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterSpying(s: GameState, scene: SceneBuilder): void {
  ((s as any).sofiaQW ?? {})['spying_day'] = ((s as any).daystart ?? 0);
  if (((s as any).sofiaQW ?? 0)?.['maxim_know'] === 1) {
  } else {
    if (((s as any).sofiaQW ?? 0)?.['spying_times'] === 0) {
    }
  }
  ((s as any).sofiaQW ?? {})['spying_times'] = (((s as any).sofiaQW ?? {})['spying_times'] ?? 0) + (1);
  scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex<<rand(1,6)>>'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSpyingSexIntrodesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sexpartner ?? 0) === 'the boy') {
    scene.text('You open the door carefully as quietly as you can, just far enough for you to see Sofia and a boy on her bed.');
  } else {
    if (((s as any).sexpartner ?? 0) === 'her boyfriend') {
      scene.text('You open the door carefully as quietly as you can, just far enough for you to see Sofia and the same boy as last time, presumably her boyfriend, on her bed.');
    } else {
      scene.text('You open the door carefully as quietly as you can, just far enough for you to see Sofia and Maxim on her bed.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpyingSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex1.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia is on all fours giving <<$sexpartner>> a loud and sloppy blowjob. His cock...
  scene.text(`Sofia is on all fours giving ${((s as any).sexpartner ?? 0)} a loud and sloppy blowjob. His cock is '+iif( npc_dick['A261'] < pcs_vag, 'not that impressive.', 'average-sized.')+'`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'second_floor'] },
    { label: 'Continue to watch', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 4) + 0)=== 0) {
      qspCall(s, 'arousal', 'end');
      scene.text('Sofia suddenly stops and pops his cock out of her mouth. "Did you hear that?" she asks.');
      scene.text('You quickly close the door and head for the elevator before you\'re seen.');
      scene.actions([
        { label: 'Take the elevator', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex2'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterSpyingSex2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex2.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia sits with her back to the headrest, moaning loudly as <<$sexpartner>> goes...
  scene.text(`Sofia sits with her back to the headrest, moaning loudly as ${((s as any).sexpartner ?? 0)} goes down on her.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'second_floor'] },
    { label: 'Continue to watch', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 4) + 0)=== 0) {
      qspCall(s, 'arousal', 'end');
      // TODO-QSP: dynamic text: <<$sexpartner>> suddenly stops. "Did you hear that?" he asks.
      scene.text(`${((s as any).sexpartner ?? 0)} suddenly stops. "Did you hear that?" he asks.`);
      scene.text('You quickly close the door and head for the elevator before you\'re seen.');
      scene.actions([
        { label: 'Take the elevator', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex3'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterSpyingSex3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex3.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia gets on her back and props herself up with her arms, biting her lip as <<$...
  scene.text(`Sofia gets on her back and props herself up with her arms, biting her lip as ${((s as any).sexpartner ?? 0)} moves in between her legs. He gropes her perky breasts as he slides his '+iif( npc_dick['A261'] < pcs_vag, 'not so impressive', 'average')+' cock into her pussy and starts fucking her hard.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', goto: ['uni_dorm', 'second_floor'] },
    { label: 'Continue to watch', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 4) + 0)=== 0) {
      qspCall(s, 'arousal', 'end');
      // TODO-QSP: dynamic text: <<$sexpartner>> suddenly stops. "Did you hear that?" he asks.
      scene.text(`${((s as any).sexpartner ?? 0)} suddenly stops. "Did you hear that?" he asks.`);
      scene.text('You quickly close the door and head for the elevator before you\'re seen.');
      scene.actions([
        { label: 'Take the elevator', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex4'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterSpyingSex4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex4.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia is on all fours moaning loudly as <<$sexpartner>> pounds her hard doggysty...
  scene.text(`Sofia is on all fours moaning loudly as ${((s as any).sexpartner ?? 0)} pounds her hard doggystyle with his '+iif( npc_dick['A261'] < pcs_vag, 'not so impressive', 'average')+' cock.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'second_floor'] },
    { label: 'Continue to watch', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 4) + 0)=== 0) {
      qspCall(s, 'arousal', 'end');
      // TODO-QSP: dynamic text: <<$sexpartner>> suddenly stops. "Did you hear that?" he asks.
      scene.text(`${((s as any).sexpartner ?? 0)} suddenly stops. "Did you hear that?" he asks.`);
      scene.text('You quickly close the door and head for the elevator before you\'re seen.');
      scene.actions([
        { label: 'Take the elevator', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex5'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterSpyingSex5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex5.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia is bouncing up and down on <<$sexpartner>>'s '+iif( npc_dick['A261'] < pcs...
  scene.text(`Sofia is bouncing up and down on ${((s as any).sexpartner ?? 0)}'s '+iif( npc_dick['A261'] < pcs_vag, 'not so impressive', 'average')+' cock, riding him hard cowgirl style while moaning loudly.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'second_floor'] },
    { label: 'Continue to watch', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 4) + 0)=== 0) {
      qspCall(s, 'arousal', 'end');
      scene.text('Sofia suddenly stops. "Did you hear that?" she asks.');
      scene.text('You quickly close the door and head for the elevator before you\'re seen.');
      scene.actions([
        { label: 'Take the elevator', goto: ['uni_dorm', 'elevator'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sofia', 'spying_sex6'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterSpyingSex6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 3);
  scene.img('images/characters/city/university/girl/sofia/dorm/spying_sex6.jpg');
  if ((!((s as any).spyscenefirst ?? 0))) {
    (s as any).spyscenefirst = 1;
    qspCall(s, 'sofia', 'spying_sex_introdesc');
  }
  // TODO-QSP: dynamic text: Sofia sits on all fours on the bed, presenting her big round ass to <<$sexpartne...
  scene.text(`Sofia sits on all fours on the bed, presenting her big round ass to ${((s as any).sexpartner ?? 0)}, who jerks his '+iif( npc_dick['A261'] < pcs_vag, 'not so impressive', 'average')+' cock over it.`);
  scene.text('He finally squirts a small amount of cum over her ass while yelling very loudly, as if he was letting loose a fire hose of it.');
  scene.text('Sofia does cheer him on, so you\'re not sure if she\'s aware of how little cum he actually delivered.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave before you get caught', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'not_spying':
      enterNotSpying(s, scene);
      break;
    case 'spying':
      enterSpying(s, scene);
      break;
    case 'spying_sex_introdesc':
      enterSpyingSexIntrodesc(s, scene);
      break;
    case 'spying_sex1':
      enterSpyingSex1(s, scene);
      break;
    case 'spying_sex2':
      enterSpyingSex2(s, scene);
      break;
    case 'spying_sex3':
      enterSpyingSex3(s, scene);
      break;
    case 'spying_sex4':
      enterSpyingSex4(s, scene);
      break;
    case 'spying_sex5':
      enterSpyingSex5(s, scene);
      break;
    case 'spying_sex6':
      enterSpyingSex6(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sofia: LocationDef = {
  name: 'sofia',
  title: 'As you\'re about to open the door, the noises get louder and ',
  region: 'other',
  enter: enter,
};
