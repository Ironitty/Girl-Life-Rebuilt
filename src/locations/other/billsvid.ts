import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).bilrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).bilsvidukiy = 0;
  (s as any).bilsvidkiy = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/sex/0.jpg');
  scene.text(`You and ${((s as any).telsob ?? '')} rent a booth`);
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((st as any).telsob ?? 0) === 'Alla') {
      (st as any).alla = ((st as any).alla ?? 0) + (1);
      if (((st as any).alla ?? 0) >= 20) {
        (st as any).bilrand = (Math.floor(Math.random() * 11) + 0);
        if (((st as any).bilrand ?? 0) > 0  &&  ((st as any).bilrand ?? 0) < 3) {
          qspGoto(st, 'billsvid', '1');
        }
        if (((st as any).bilrand ?? 0) > 2  &&  ((st as any).bilrand ?? 0) < 5) {
          qspGoto(st, 'billsvid', '2');
        }
        if (((st as any).bilrand ?? 0) === 0  ||  ((st as any).bilrand ?? 0) > 4) {
          qspGoto(st, 'billsvid', '3');
        }
      } else {
        if (((st as any).alla ?? 0) < 20) {
          qspGoto(st, 'billsvid', '3');
        }
      }
    } else {
      if (((st as any).telsob ?? 0) === 'Masha') {
        (st as any).masha = ((st as any).masha ?? 0) + (1);
        if (((st as any).masha ?? 0) >= 20) {
          (st as any).bilrand = (Math.floor(Math.random() * 11) + 0);
          if (((st as any).bilrand ?? 0) > 0  &&  ((st as any).bilrand ?? 0) < 3) {
            qspGoto(st, 'billsvid', '1');
          }
          if (((st as any).bilrand ?? 0) > 2  &&  ((st as any).bilrand ?? 0) < 5) {
            qspGoto(st, 'billsvid', '2');
          }
          if (((st as any).bilrand ?? 0) === 0  ||  ((st as any).bilrand ?? 0) > 4) {
            qspGoto(st, 'billsvid', '3');
          }
        } else {
          if (((st as any).masha ?? 0) < 20) {
            qspGoto(st, 'billsvid', '3');
          }
        }
      } else {
        if (((st as any).telsob ?? 0) === 'Kate') {
          qspCall(st, 'npc_relationship', 'modify', 'A219', 1);
          if (((st as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (st as any).bilrand = (Math.floor(Math.random() * 11) + 0);
            if (((st as any).bilrand ?? 0) > 0  &&  ((st as any).bilrand ?? 0) < 3) {
              qspGoto(st, 'billsvid', '1');
            }
            if (((st as any).bilrand ?? 0) > 2  &&  ((st as any).bilrand ?? 0) < 5) {
              qspGoto(st, 'billsvid', '2');
            }
            if (((st as any).bilrand ?? 0) === 0  ||  ((st as any).bilrand ?? 0) > 4) {
              qspGoto(st, 'billsvid', '3');
            }
          } else {
            qspGoto(st, 'billsvid', '3');
          }
        } else {
          if (((st as any).telsob ?? 0) === ((st as any).npcdesc ?? 0)) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
            if (((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)] >= 60) {
              (st as any).bilrand = (Math.floor(Math.random() * 11) + 0);
              if (((st as any).bilrand ?? 0) > 0  &&  ((st as any).bilrand ?? 0) < 3) {
                qspGoto(st, 'billsvid', '1');
              }
              if (((st as any).bilrand ?? 0) > 2  &&  ((st as any).bilrand ?? 0) < 5) {
                qspGoto(st, 'billsvid', '2');
              }
              if (((st as any).bilrand ?? 0) === 0  ||  ((st as any).bilrand ?? 0) > 4) {
                qspGoto(st, 'billsvid', '3');
              }
            } else {
              qspGoto(st, 'billsvid', '3');
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/1.jpg');
  scene.text(`When you once again leaned over the table to play a shot, ${((s as any).telsob ?? '')} leans over and slips her hands on your hips, then upwards to cup your breasts.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Not now ' + String(((s as any).telsob ?? '') ?? ''), handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Not now ' + String(((s as any).telsob ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '3');
  } },
    ]);
  }
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['lesbian_count'] = ((st as any).stat['lesbian_count'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/mall/pool/sex/2.jpg');
    scene.text(`You turn around and kiss her, in response ${((st as any).telsob ?? '')} quickly takes off her clothes, helps you strip and throws you against the table, you jump on it, and continue to kiss.`);
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'cuni', 'force');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Get licked', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get licked', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '11');
  } },
      ]);
    }
    scene.actions([
      { label: 'Lick her', goto: ['billsvid', '10'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/4.jpg');
  scene.text('She leans over the table and squatting yourself behind her, you press your lips to her pussy. You kiss her and caress with your tongue until she comes.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cuni', 'force');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get licked', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get licked', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '11');
  } },
    ]);
  }
  if ((!((s as any).bilsvidkiy ?? 0))) {
    scene.actions([
      { label: 'Play with a cue', goto: ['billsvid', '12'] },
    ]);
  }
  if ((!((s as any).bilsvidukiy ?? 0))) {
    scene.actions([
      { label: 'Ask her to play with a cue', goto: ['billsvid', '13'] },
    ]);
  }
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/3.jpg');
  scene.text(`You stand in front of the table, legs spread, and ${((s as any).telsob ?? '')} drops to her knees in front of you and begins to kiss your pussy, but her tongue does not bring you to the desired state.`);
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidkiy ?? 0))) {
    scene.actions([
      { label: 'Play with a cue', goto: ['billsvid', '12'] },
    ]);
  }
  if ((!((s as any).bilsvidukiy ?? 0))) {
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her to play with a cue', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to play with a cue', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '13');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Lick her', goto: ['billsvid', '10'] },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  (s as any).bilsvidkiy = 1;
  scene.img('images/locations/city/citycenter/mall/pool/sex/6.jpg');
  scene.text(`${((s as any).telsob ?? '')} climbs on the table and spreads her legs wide. Picking up the cue you decide to try and pot the pink in the middle pocket. ${((s as any).telsob ?? '')} diligently responds to your movements and rhythm. A few minutes later collapsing on the table in a shuddering orgasm.`);
  qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidukiy ?? 0))) {
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her to play with a cue', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to play with a cue', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '13');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Finish', goto: ['billsvid', '3'] },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).bilsvidukiy = 1;
  scene.img('images/locations/city/citycenter/mall/pool/sex/5.jpg');
  scene.text(`You sit on the edge of the table, throwing one leg on the table. "How's my cueing action?" ${((s as any).telsob ?? '')} jokes as she dramatically uses her tongue to moisten her cue, before quickly inserting it into your pussy. You squeal in surprise. She diligently fucks you with the cue, turning it in different directions, you're massaging your clitoris with a finger. After a few minutes of pleasant sensations spread through your body and you float into a world of orgasm.`);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidkiy ?? 0))) {
    scene.actions([
      { label: 'Play with a cue', goto: ['billsvid', '12'] },
    ]);
  }
  scene.actions([
    { label: 'Finish', goto: ['billsvid', '3'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/10.jpg');
  scene.text(`During the game ${((s as any).telsob ?? '')} is constantly trying to put her arms around you, she wraps her hand around your hips, then casually touches your chest.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Continue to play ' + String(((s as any).telsob ?? '') ?? ''), handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Continue to play ' + String(((s as any).telsob ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'billsvid', '3');
  } },
    ]);
  }
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/11.jpg');
    scene.text(`When ${((st as any).telsob ?? '')} once again put her hand on your stomach, you move closer to her and kiss. Her hand immediately slipped under your clothes and massaged your breast.`);
    qspCall(st, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Proceed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/12.jpg');
    scene.text(`${((st as any).telsob ?? '')} knelt down and taking off your clothes starts to kiss you down toward your crotch, until her tongue is under your pussy.`);
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/13.jpg');
    scene.text('Lifting her knee onto the table you kneel below her, pull her panties aside and begin to kiss her pussy, caress it with your tongue and suck it between your lips.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Proceed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/14.jpg');
    scene.text('turning to face you, you help her onto the table and spreading her legs continue to caress her pussy with your tongue until she cums.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/15.jpg');
    scene.text(`When ${((st as any).telsob ?? '')} has finished, you climb on the table and position your pussy right in front of her face, ${((st as any).telsob ?? '')} immediately begins to caress you with her lips, and parting you with her fingers she tries to thrust her tongue even deeper.`);
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/16.jpg');
    scene.text(`You turn around so that your face is above her pussy, and start licking her. After a few minutes, you feel her body shake and ${((st as any).telsob ?? '')} groans strongly pressing against your pussy, and then you are shrouded in pleasant waves of orgasm.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['billsvid', '3'] },
    ]);
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
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'arousal', 'end');
  if (((s as any).telsob ?? 0) === ((s as any).boydesc ?? 0)) {
    scene.text(`When you have finished playing, ${((s as any).telsob ?? '')} looks at you and waits for your next move.`);
    scene.actions([
      { label: 'Say goodbye', goto: ['city_mall', ''] },
      { label: 'Invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  } else {
    scene.text(`When you have finished playing, ${((s as any).telsob ?? '')} says that she needs to run and leaves.`);
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const billsvid: LocationDef = {
  name: 'billsvid',
  title: '<center><b>Pool</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
