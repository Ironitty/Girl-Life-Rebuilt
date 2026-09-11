import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).bilrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).bilsvidukiy = 0;
  (s as any).bilsvidkiy = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/sex/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> rent a booth
  scene.text(`You and ${((s as any).telsob ?? 0)} rent a booth`);
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
        if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
        }
        if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
        }
        if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      } else {
        if (((s as any).alla ?? 0) < 20) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      }
    } else {
      if (((s as any).telsob ?? 0) === 'Masha') {
        (s as any).masha = ((s as any).masha ?? 0) + (1);
        if (((s as any).masha ?? 0) >= 20) {
          (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
          }
          if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
          }
          if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
          }
        } else {
          if (((s as any).masha ?? 0) < 20) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
          }
        }
      } else {
        if (((s as any).telsob ?? 0) === 'Kate') {
          qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
          if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
            if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
              scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
            }
            if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
              scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
            }
            if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
              scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
          }
        } else {
          if (((s as any).telsob ?? 0) === ((s as any).npcdesc ?? 0)) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
            if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 60) {
              (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
              if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
                scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
              }
              if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
                scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
              }
              if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
                scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
              }
            } else {
              scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
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
  // TODO-QSP: dynamic text: When you once again leaned over the table to play a shot, <<$telsob>> leans over...
  scene.text(`When you once again leaned over the table to play a shot, ${((s as any).telsob ?? 0)} leans over and slips her hands on your hips, then upwards to cup your breasts.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Not now <<$telsob>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Not now <<$telsob>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '3'] },
    ]);
  }
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    (s as any).stat['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
    scene.img('images/locations/city/citycenter/mall/pool/sex/2.jpg');
    // TODO-QSP: dynamic text: You turn around and kiss her, in response <<$telsob>> quickly takes off her clot...
    scene.text(`You turn around and kiss her, in response ${((s as any).telsob ?? 0)} quickly takes off her clothes, helps you strip and throws you against the table, you jump on it, and continue to kiss.`);
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Get licked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get licked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '11'] },
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
      { label: 'Get licked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get licked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '11'] },
    ]);
  }
  if ((!((s as any).bilsvidkiy ?? 0))) {
    // TODO-QSP: act 'Play with a cue': gt 'billsvid', '12'
  }
  if ((!((s as any).bilsvidukiy ?? 0))) {
    // TODO-QSP: act 'Ask her to play with a cue': gt 'billsvid', '13'
  }
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/3.jpg');
  // TODO-QSP: dynamic text: You stand in front of the table, legs spread, and <<$telsob>> drops to her knees...
  scene.text(`You stand in front of the table, legs spread, and ${((s as any).telsob ?? 0)} drops to her knees in front of you and begins to kiss your pussy, but her tongue does not bring you to the desired state.`);
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidkiy ?? 0))) {
    // TODO-QSP: act 'Play with a cue': gt 'billsvid', '12'
  }
  if ((!((s as any).bilsvidukiy ?? 0))) {
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her to play with a cue [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to play with a cue [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '13'] },
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
  // TODO-QSP: dynamic text: <<$telsob>> climbs on the table and spreads her legs wide. Picking up the cue yo...
  scene.text(`${((s as any).telsob ?? 0)} climbs on the table and spreads her legs wide. Picking up the cue you decide to try and pot the pink in the middle pocket. ${((s as any).telsob ?? 0)} diligently responds to your movements and rhythm. A few minutes later collapsing on the table in a shuddering orgasm.`);
  qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidukiy ?? 0))) {
    qspCall(s, 'willpower', 'sex', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her to play with a cue [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to play with a cue [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '13'] },
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
  // TODO-QSP: dynamic text: You sit on the edge of the table, throwing one leg on the table. "How's my cuein...
  scene.text(`You sit on the edge of the table, throwing one leg on the table. "How's my cueing action?" ${((s as any).telsob ?? 0)} jokes as she dramatically uses her tongue to moisten her cue, before quickly inserting it into your pussy. You squeal in surprise. She diligently fucks you with the cue, turning it in different directions, you're massaging your clitoris with a finger. After a few minutes of pleasant sensations spread through your body and you float into a world of orgasm.`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if ((!((s as any).bilsvidkiy ?? 0))) {
    // TODO-QSP: act 'Play with a cue': gt 'billsvid', '12'
  }
  scene.actions([
    { label: 'Finish', goto: ['billsvid', '3'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/pool/sex/10.jpg');
  // TODO-QSP: dynamic text: During the game <<$telsob>> is constantly trying to put her arms around you, she...
  scene.text(`During the game ${((s as any).telsob ?? 0)} is constantly trying to put her arms around you, she wraps her hand around your hips, then casually touches your chest.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cuni', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Continue to play <<$telsob>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue to play <<$telsob>> [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['billsvid', '3'] },
    ]);
  }
  scene.actions([
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/11.jpg');
    // TODO-QSP: dynamic text: When <<$telsob>> once again put her hand on your stomach, you move closer to her...
    scene.text(`When ${((s as any).telsob ?? 0)} once again put her hand on your stomach, you move closer to her and kiss. Her hand immediately slipped under your clothes and massaged your breast.`);
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Proceed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/12.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> knelt down and taking off your clothes starts to kiss you down towar...
    scene.text(`${((s as any).telsob ?? 0)} knelt down and taking off your clothes starts to kiss you down toward your crotch, until her tongue is under your pussy.`);
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/13.jpg');
    scene.text('Lifting her knee onto the table you kneel below her, pull her panties aside and begin to kiss her pussy, caress it with your tongue and suck it between your lips.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Proceed', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/14.jpg');
    scene.text('turning to face you, you help her onto the table and spreading her legs continue to caress her pussy with your tongue until she cums.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/15.jpg');
    // TODO-QSP: dynamic text: When <<$telsob>> has finished, you climb on the table and position your pussy ri...
    scene.text(`When ${((s as any).telsob ?? 0)} has finished, you climb on the table and position your pussy right in front of her face, ${((s as any).telsob ?? 0)} immediately begins to caress you with her lips, and parting you with her fingers she tries to thrust her tongue even deeper.`);
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/pool/sex/16.jpg');
    // TODO-QSP: dynamic text: You turn around so that your face is above her pussy, and start licking her. Aft...
    scene.text(`You turn around so that your face is above her pussy, and start licking her. After a few minutes, you feel her body shake and ${((s as any).telsob ?? 0)} groans strongly pressing against your pussy, and then you are shrouded in pleasant waves of orgasm.`);
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
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
    // TODO-QSP: dynamic text: When you have finished playing, <<$telsob>> looks at you and waits for your next...
    scene.text(`When you have finished playing, ${((s as any).telsob ?? 0)} looks at you and waits for your next move.`);
    scene.actions([
      { label: 'Say goodbye', goto: ['city_mall', ''] },
      { label: 'Invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: When you have finished playing, <<$telsob>> says that she needs to run and leave...
    scene.text(`When you have finished playing, ${((s as any).telsob ?? 0)} says that she needs to run and leaves.`);
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
