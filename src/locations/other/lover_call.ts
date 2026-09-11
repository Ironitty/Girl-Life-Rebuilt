import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterScheduler(s: GameState, scene: SceneBuilder): void {
  ((s as any).tempLCVars ?? {})['i'] = 0;
  ((s as any).tempLCVars ?? {})['maxi'] = 0;
  if (((s as any).tempLCVars ?? 0)?.['maxi'] > 0) {
    // TODO-QSP: :loverloop2
    // TODO-QSP: gs 'lover_call', 'set_base_schedule', $lover[tempLCVars['i']], (rand(0, 2) = 0)
    ((s as any).tempLCVars ?? {})['i'] = (((s as any).tempLCVars ?? {})['i'] ?? 0) + (1);
    if (((s as any).tempLCVars ?? 0)?.['i'] < ((s as any).tempLCVars ?? 0)?.['maxi']) {
      // TODO-QSP: jump 'loverloop2'
    }
  }
  scene.build();
}

function enterSetBaseSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).tempLCVars2 ?? {})['ID'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).tempLCVars2 ?? {})['type'] = qspUntranslated(s, "ARGS[2]", { location: "lover_call" });
  if (((((s as any).tempLCVars2 ?? 0)?.['ID']).slice((1)-1, ((1)-1)+(1))) === 'B'  &&  ((((s as any).tempLCVars2 ?? 0)?.['ID']).length) > 1  &&  !isNaN(((((s as any).tempLCVars2 ?? 0)?.['ID']).slice((2)-1))) && ((((s as any).tempLCVars2 ?? 0)?.['ID']).slice((2)-1)) !== '') {
    if (((s as any).npc_rel_type ?? 0)[((s as any).tempLCVars2 ?? 0)?.['ID']] === 'dating'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).tempLCVars2 ?? 0)?.['ID']] === 'boyfriend'  ||  ((s as any).npc_rel_type ?? 0)[((s as any).tempLCVars2 ?? 0)?.['ID']] === 'girlfriend') {
      ((s as any).tempLCVars2 ?? {})['OutCode'] = qspUntranslated(s, "\"gt 'lover_call', 'callingTheLover', '<<tempLCVars2['ID']>>'\"", { location: "lover_call" });
      ((s as any).tempLCVars2 ?? {})['OutSched'] = "((s as any).npc_meetday ?? 0)[((s as any).tempLCVars2 ?? 0)?.['ID']] < ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20";
      if (((s as any).tempLCVars2 ?? 0)?.['type'] !== 0) {
        ((s as any).tempLCVars2 ?? {})['InCode'] = qspUntranslated(s, "\"gs 'lover_call', 'lover', '<<tempLCVars2['ID']>>'\"", { location: "lover_call" });
        ((s as any).tempLCVars2 ?? {})['InSched'] = "((s as any).totminut ?? 0) > ((s as any).totminut ?? 0) + (9 - ((s as any).hour ?? 0)) * 24 + (Math.floor(Math.random() * 601) + 0) - ((s as any).minut ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 20";
      } else {
        ((s as any).tempLCVars2 ?? {})['InCode'] = '';
        ((s as any).tempLCVars2 ?? {})['InSched'] = '0';
      }
      // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', $tempLCVars2['ID'], $tempLCVars2['OutCode'], $tempLCVars2['OutSc...
      // TODO-QSP: gs 'telefon', 'SetInCallSchedule', $tempLCVars2['ID'], $tempLCVars2['InCode'], $tempLCVars2['InSched...
    }
  }
  scene.build();
}

function enterTelotkaz(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: dynamic text: <<$ARGS[1]>>, "Sorry, I'm busy right now, maybe next time."
  scene.text(`${((s as any).locArgs?.[1] ?? 0)}, "Sorry, I'm busy right now, maybe next time."`);
  scene.actions([
    { label: 'Hangup', goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enterMobilaraz(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_bad', '');
  qspCall(s, 'telefon', 'phone_balance');
  qspCall(s, 'telefon', 'phone_call_receive');
  (s as any).willAgree = ((Math.floor(Math.random() * 11) + 0) > 3);
  scene.text('"Yes, I\'m listening," says a voice from the speaker.');
  if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Invite to the park', handler: (st: GameState) => {
    scene.text('"Let\'s go for a walk in the park."');
    if (((s as any).willAgree ?? 0)) {
      // TODO-QSP: dynamic text: <<$telsob>>, "See you in the park in an hour."
      scene.text(`${((s as any).telsob ?? 0)}, "See you in the park in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }, goto: ['parksvid', ''] },
      ]);
    } else {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Invite to a movie', handler: (st: GameState) => {
    scene.text('"Want to go see a movie?"');
    if (((s as any).willAgree ?? 0)) {
      // TODO-QSP: dynamic text: <<$telsob>>, "See you at the movie theater in an hour."
      scene.text(`${((s as any).telsob ?? 0)}, "See you at the movie theater in an hour."`);
      scene.actions([
        { label: 'Go', goto: ['kinosvid', ''] },
      ]);
    } else {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
    }
  } },
    { label: 'Invite to the pool hall', handler: (st: GameState) => {
    scene.text('"Let\'s play pool."');
    if (((s as any).willAgree ?? 0)) {
      // TODO-QSP: dynamic text: <<$telsob>>, "See you at the pool hall in an hour."
      scene.text(`${((s as any).telsob ?? 0)}, "See you at the pool hall in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }, goto: ['billsvid', ''] },
      ]);
    } else {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
    }
  } },
    { label: 'Invite to the cafe', handler: (st: GameState) => {
    scene.text('"Let\'s go to the cafe."');
    if (((s as any).willAgree ?? 0)) {
      // TODO-QSP: dynamic text: <<$telsob>>, "See you at the cafe in an hour."
      scene.text(`${((s as any).telsob ?? 0)}, "See you at the cafe in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }, goto: ['kafesvid', ''] },
      ]);
    } else {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
    }
  } },
    { label: 'Invite to the casino', handler: (st: GameState) => {
    scene.text('"Let\'s go to the casino."');
    if (((s as any).willAgree ?? 0)) {
      // TODO-QSP: dynamic text: <<$telsob>>, "See you in the casino in an hour."
      scene.text(`${((s as any).telsob ?? 0)}, "See you in the casino in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
  }, goto: ['kazinosvid', ''] },
      ]);
    } else {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
    }
  } },
    { label: 'Hangup', goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterInitCall4DateLover(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $call4Date["NPC"] = $ARGS[1]
  // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
  // TODO-QSP: $call4Date["CallerName"] = $npc_usedname[$call4Date["NPC"]]
  scene.build();
}

function enterCallingTheLover(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_bad', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'lover_call', 'init_call4Date_lover', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'telefon', 'phone_balance');
  qspCall(s, 'telefon', 'phone_call_receive');
  if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  ||  ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
    scene.actions([{ label: 'Continue', goto: ['lover_call', 'callingTheLover_f'] }]);
  } else {
    if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
      scene.actions([{ label: 'Continue', goto: ['lover_call', 'callingTheLover_m'] }]);
    }
  }
  scene.build();
}

function enterCallingTheLoverF(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: call4Date["willAgree"] = (rand(0, 10) > 3)
  scene.text('"Yes, I\'m listening," says a voice from the speaker.');
  if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Invite to the park', handler: (st: GameState) => {
    scene.text('"Let\'s go for a walk in the park."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$telsob>>, "See you in the park in an hour."
    scene.text(`${((s as any).telsob ?? 0)}, "See you in the park in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['parksvid', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).home ?? 0)?.['town'] === 'city') {
    scene.actions([
      { label: 'Invite to the pool hall', handler: (st: GameState) => {
    scene.text('"Let\'s play pool."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$telsob>>, "See you at the pool hall in an hour."
    scene.text(`${((s as any).telsob ?? 0)}, "See you at the pool hall in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['billsvid', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Hangup', goto: ['lover_call', 'fin'] },
    { label: 'I think we should break up...', handler: (st: GameState) => {
    scene.text('She sounds hurt, but you insist it is for the best. You both say goodbye and part ways.');
    // TODO-QSP: gs 'lover', 'remove_girlfriend', $call4Date["NPC"]
    scene.actions([
      { label: 'Hangup', goto: ['lover_call', 'fin'] },
    ]);
  } },
    { label: 'Invite to a movie', handler: (st: GameState) => {
    scene.text('"Want to go see a movie?"');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$telsob>>, "See you at the movie theater in an hour."
    scene.text(`${((s as any).telsob ?? 0)}, "See you at the movie theater in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['kinosvid', ''] },
    ]);
  } },
    { label: 'Invite to the cafe', handler: (st: GameState) => {
    scene.text('"Let\'s go to the cafe."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$telsob>>, "See you at the cafe in an hour."
    scene.text(`${((s as any).telsob ?? 0)}, "See you at the cafe in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['kafesvid', ''] },
    ]);
  } },
    { label: 'Invite to the casino', handler: (st: GameState) => {
    scene.text('"Let\'s go to the casino."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$telsob>>, "See you in the casino in an hour."
    scene.text(`${((s as any).telsob ?? 0)}, "See you in the casino in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['kazinosvid', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCallingTheLoverM(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: call4Date["willAgree"] = (rand(0, 10) > 3)
  scene.text('"Yes, I\'m listening," says a voice from the speaker.');
  scene.actions([
    { label: 'Hangup', goto: ['lover_call', 'fin'] },
    { label: 'I think we should break up...', handler: (st: GameState) => {
    scene.text('He sounds hurt, but you insist it is for the best. You both say goodbye and part ways.');
    // TODO-QSP: gs 'lover', 'remove_boyfriend', $call4Date["NPC"]
    scene.actions([
      { label: 'Hangup', goto: ['lover_call', 'fin'] },
    ]);
  } },
    { label: 'Date (new WIP content)', handler: (st: GameState) => {
    qspCall(s, 'date_ev', 'phone_invite_start');
  } },
    { label: 'Date (old content)', handler: (st: GameState) => {
    if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Invite to the park', handler: (st: GameState) => {
    scene.text('"Let\'s go for a walk in the park."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$caller>>, "See you in the park in an hour."
    scene.text(`${((s as any).caller ?? 0)}, "See you in the park in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['svidboy', 'parksvid'] },
    ]);
  } },
      ]);
    }
    if (((s as any).home ?? 0)?.['town'] === 'city') {
      scene.actions([
        { label: 'Invite to the pool hall', handler: (st: GameState) => {
    scene.text('"Let\'s play pool."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$caller>>, "See you at the pool hall in an hour."
    scene.text(`${((s as any).caller ?? 0)}, "See you at the pool hall in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['svidboy', 'billsvid'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Invite to a movie', handler: (st: GameState) => {
    scene.text('"Want to go see a movie?"');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$caller>>, "See you at the movie theater in an hour."
    scene.text(`${((s as any).caller ?? 0)}, "See you at the movie theater in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['svidboy', 'kinosvid'] },
    ]);
  } },
      { label: 'Invite to the cafe', handler: (st: GameState) => {
    scene.text('"Let\'s go to the cafe."');
    if (! ((s as any).call4Date ?? 0)?.['willAgree']) {
      qspCall(s, 'lover_call', 'telotkaz', ((s as any).telsob ?? 0));
      return;
    }
    // TODO-QSP: dynamic text: <<$caller>>, "See you at the cafe in an hour."
    scene.text(`${((s as any).caller ?? 0)}, "See you at the cafe in an hour."`);
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    }
    // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
    ((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_dates ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }, goto: ['svidboy', 'kafesvid'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLover(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'lover_call', 'init_call4Date_lover', ((s as any).locArgs?.[1] ?? 0));
  (s as any).ring = 0;
  ((s as any).call4Date ?? {})['lover_days'] = ((s as any).daystart ?? 0) - ((s as any).npc_eventday ?? 0)[((s as any).call4Date ?? {})?.['NPC']];
  qspCall(s, 'stat', '');
  qspCall(s, 'telefon', 'phone_call_receive');
  // TODO-QSP: gs 'telefon', 'ClearInCallSchedule', $call4Date["NPC"]
  if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0  ||  ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 3) {
    scene.actions([{ label: 'Continue', goto: ['lover_call', 'lover_m'] }]);
  } else {
    if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  ||  ((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      scene.actions([{ label: 'Continue', goto: ['lover_call', 'lover_f'] }]);
    }
  }
  scene.build();
}

function enterLoverM(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $DateNickName[0] = 'cutie'
  // TODO-QSP: $DateNickName[1] = 'honey'
  // TODO-QSP: $DateNickName[2] = 'sweetie'
  // TODO-QSP: $DateNickName[3] = 'baby'
  // TODO-QSP: $DateNickName[4] = 'hot stuff'
  // TODO-QSP: $DateNickName[5] = '<<$pcs_nickname>>'
  // TODO-QSP: $call4Date["SvetaName"] = $DateNickName[rand(0, arrsize('$DateNickName')-1)]
  // TODO-QSP: dynamic text: Hey <<$call4Date["SvetaName"]>>, it's me, <<$caller>>. How's it going?
  scene.text(`Hey ${((s as any).call4Date ?? 0)?.['SvetaName']}, it's me, ${((s as any).caller ?? 0)}. How's it going?`);
  scene.actions([
    { label: 'Reply', handler: (st: GameState) => {
    scene.text('"Pretty good, you?"');
    // TODO-QSP: dynamic text: <<$caller>>, "Great, but I kind of miss you, can we meet today?"
    scene.text(`${((s as any).caller ?? 0)}, "Great, but I kind of miss you, can we meet today?"`);
    if (((s as any).knowpreg ?? 0) === 1  &&  (!((s as any).pregtalk ?? 0))) {
      if ((((s as any).pregChem ?? 0) / 24) > ((s as any).call4Date ?? 0)?.['lover_days']) {
        scene.actions([
          { label: 'Honey, you will soon become a dad', handler: (st: GameState) => {
    // TODO-QSP: npc_rel[$call4Date["NPC"]] = 0
    scene.text('"Honey, I\'m pregnant with your child."');
    // TODO-QSP: dynamic text: <<$caller>>, "How the fuck did I manage that? Unless I own a time-machine and we...
    scene.text(`${((s as any).caller ?? 0)}, "How the fuck did I manage that? Unless I own a time-machine and went back to before we met and fucked you, it's someone else's, go and tell him. I don't want to see you again, goodbye."`);
    scene.actions([
      { label: 'Hang up.', goto: ['lover_call', 'fin'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him he\'s going to be a dad', handler: (st: GameState) => {
    (s as any).pregtalk = 1;
    scene.text('"Honey, I\'m pregnant with your child."');
    if (((s as any).npc_gentle ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] === 1) {
      if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] < 85) {
        qspCall(s, 'money', 'earn', 20000);
        // TODO-QSP: dynamic text: <<$caller>> "I'm not yet ready to become a dad. I'll give you the money for an a...
        scene.text(`${((s as any).caller ?? 0)} "I'm not yet ready to become a dad. I'll give you the money for an abortion. Get rid of the child.`);
        scene.actions([
          { label: 'Hang up', goto: ['lover_call', 'fin'] },
        ]);
      } else {
        // TODO-QSP: npc_love[$call4Date["NPC"]] = 1
        // TODO-QSP: dynamic text: <<$caller>>, "This is wonderful! We have to celebrate!"
        scene.text(`${((s as any).caller ?? 0)}, "This is wonderful! We have to celebrate!"`);
        // TODO-QSP: dynamic text: You start talking about living together. <<$caller>> tells you that he is not ag...
        scene.text(`You start talking about living together. ${((s as any).caller ?? 0)} tells you that he is not against it on principle, but first he wants you to meet his parents.`);
        // TODO-QSP: dynamic text: He warns you that his mother is very demanding and rigorous. <<$caller>> says th...
        scene.text(`He warns you that his mother is very demanding and rigorous. ${((s as any).caller ?? 0)} says that he loves his mother and does not want to upset her. Therefore, you must look gorgeous, wear a dress from a boutique, and have well-groomed and curled hair and makeup in moderation.`);
        // TODO-QSP: dynamic text: When you are totally ready <<$caller>> will take you to his parents.
        scene.text(`When you are totally ready ${((s as any).caller ?? 0)} will take you to his parents.`);
        scene.actions([
          { label: 'Hang up', goto: ['lover_call', 'fin'] },
          { label: 'Meet tonight', handler: (st: GameState) => {
    scene.text('"How about this evening?"');
    // TODO-QSP: dynamic text: <<$caller>>, "Sounds great! When can I come to pick you up?"
    scene.text(`${((s as any).caller ?? 0)}, "Sounds great! When can I come to pick you up?"`);
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: npc_meetday[$call4Date['NPC']] = daystart
    // TODO-QSP: npc_meethour[$call4Date['NPC']] = input ("When do you want to be picked up? It is now <<func('time',...
    if (((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= ((s as any).hour ?? 0)  ||  ((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] > 23) {
      // TODO-QSP: npc_meethour[$call4Date['NPC']] = 20
    }
    // TODO-QSP: dynamic text: "How about <<temp_hour>>:00?"
    scene.text(`"How about ${((s as any).temp_hour ?? 0)}:00?"`);
    // TODO-QSP: dynamic text: <<$caller>>, "Okay <<$call4Date["SvetaName"]>>, see you at <<npc_meethour[$call4...
    scene.text(`${((s as any).caller ?? 0)}, "Okay ${((s as any).call4Date ?? 0)?.['SvetaName']}, see you at ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).npc_rough ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] === 0) {
        qspCall(s, 'money', 'earn', 20000);
        // TODO-QSP: dynamic text: <<$caller>> "I'm not yet ready to become a dad. I'll give you the money get an a...
        scene.text(`${((s as any).caller ?? 0)} "I'm not yet ready to become a dad. I'll give you the money get an abortion."`);
        scene.actions([
          { label: 'Hang up', goto: ['lover_call', 'fin'] },
        ]);
      } else {
        (s as any).pregtalk = 0;
        // TODO-QSP: dynamic text: <<$caller>>, "What? You whore! Someone fucked your pussy, and now you drop it on...
        scene.text(`${((s as any).caller ?? 0)}, "What? You whore! Someone fucked your pussy, and now you drop it on me. You're dumped.`);
        // TODO-QSP: gs 'lover', 'remove_boyfriend', $call4Date["NPC"]
        scene.actions([
          { label: 'Hang up', goto: ['lover_call', 'fin'] },
        ]);
      }
    }
  } },
        ]);
      }
    } else {
      if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_work_day', 'city_cafe_waitress', ((s as any).daystart ?? 0)) === 1) {
        scene.actions([
          { label: 'Sorry, I\'m working today', handler: (st: GameState) => {
    scene.text('"Sorry, I\'m working today."');
    // TODO-QSP: dynamic text: <<$caller>>, "Okay, I'll call tomorrow."
    scene.text(`${((s as any).caller ?? 0)}, "Okay, I'll call tomorrow."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'I think we should break up...', handler: (st: GameState) => {
    scene.text('He sounds hurt, but you insist it is for the best. You both say goodbye and part ways.');
    // TODO-QSP: gs 'lover', 'remove_boyfriend', $call4Date["NPC"]
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
      { label: 'Tonight', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(0, 1)
    scene.text('"How about this evening?"');
    scene.actions([
      { label: 'Pick time (new WIP content)', handler: (st: GameState) => {
    qspCall(s, 'date_ev', 'npc_pick_date');
  } },
      { label: 'Pick time (old content)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$caller>>, "Sounds great! When can I come to pick you up?"
    scene.text(`${((s as any).caller ?? 0)}, "Sounds great! When can I come to pick you up?"`);
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: npc_meetday[$call4Date['NPC']] = daystart
    // TODO-QSP: npc_meethour[$call4Date['NPC']] = input ("When do you want to be picked up. It is now <<func('time',...
    if (((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= ((s as any).hour ?? 0)  ||  ((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] > 23) {
      // TODO-QSP: npc_meethour[$call4Date['NPC']] = 20
    }
    // TODO-QSP: dynamic text: "How about <<npc_meethour[$call4Date['NPC']]>>:00?."
    scene.text(`"How about ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00?."`);
    // TODO-QSP: dynamic text: <<$caller>>, "Okay <<$call4Date["SvetaName"]>>, see you at <<npc_meethour[$call4...
    scene.text(`${((s as any).caller ?? 0)}, "Okay ${((s as any).call4Date ?? 0)?.['SvetaName']}, see you at ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Maybe tomorrow', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(-1, 0)
    scene.text('"I\'m busy today. Call tomorrow."');
    if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 0) {
      // TODO-QSP: dynamic text: <<$caller>>, Are you fucking me, you know what. Suck my dick.
      scene.text(`${((s as any).caller ?? 0)}, Are you fucking me, you know what. Suck my dick.`);
      // TODO-QSP: gs 'lover', 'remove_boyfriend', $call4Date["NPC"]
    } else {
      // TODO-QSP: dynamic text: (<<$caller>>) - Okay, I'll call tomorrow.
      scene.text(`(${((s as any).caller ?? 0)}) - Okay, I'll call tomorrow.`);
    }
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
    { label: 'Hang up (end relationship)', handler: (st: GameState) => {
    // TODO-QSP: gs 'lover', 'remove_boyfriend', $call4Date["NPC"]
  }, goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterLoverF(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $DateNickName[0] = 'cutie'
  // TODO-QSP: $DateNickName[1] = 'honey'
  // TODO-QSP: $DateNickName[2] = 'sweetie'
  // TODO-QSP: $DateNickName[3] = 'baby'
  // TODO-QSP: $DateNickName[4] = 'hot stuff'
  // TODO-QSP: $DateNickName[5] = '<<$pcs_nickname>>'
  // TODO-QSP: $call4Date["SvetaName"] = $DateNickName[rand(0, arrsize('$DateNickName')-1)]
  // TODO-QSP: dynamic text: Hey <<$call4Date["SvetaName"]>>, it's me, <<$caller>>. How's it going?
  scene.text(`Hey ${((s as any).call4Date ?? 0)?.['SvetaName']}, it's me, ${((s as any).caller ?? 0)}. How's it going?`);
  scene.actions([
    { label: 'Reply', handler: (st: GameState) => {
    scene.text('"Pretty good, you?"');
    // TODO-QSP: dynamic text: <<$caller>>, "Great, but I kind of miss you, can we meet today?"
    scene.text(`${((s as any).caller ?? 0)}, "Great, but I kind of miss you, can we meet today?"`);
    scene.actions([
      { label: 'Tonight', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(0, 1)
    scene.text('"How about this evening?"');
    // TODO-QSP: dynamic text: <<$caller>>, "Sounds great! When can I come to pick you up?"
    scene.text(`${((s as any).caller ?? 0)}, "Sounds great! When can I come to pick you up?"`);
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: npc_meetday[$call4Date['NPC']] = daystart
    // TODO-QSP: npc_meethour[$call4Date['NPC']] = input ("When do you want to be picked up. It is now <<func('time',...
    if (((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= ((s as any).hour ?? 0)  ||  ((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] > 23) {
      // TODO-QSP: npc_meethour[$call4Date['NPC']] = 20
    }
    // TODO-QSP: dynamic text: "How about <<npc_meethour[$call4Date['NPC']]>>:00?."
    scene.text(`"How about ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00?."`);
    // TODO-QSP: dynamic text: <<$caller>>, "Okay <<$call4Date["SvetaName"]>>, see you at <<npc_meethour[$call4...
    scene.text(`${((s as any).caller ?? 0)}, "Okay ${((s as any).call4Date ?? 0)?.['SvetaName']}, see you at ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
      { label: 'Maybe tomorrow', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(-1, 0)
    scene.text('"I\'m busy today. Call tomorrow."');
    if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 20) {
      // TODO-QSP: dynamic text: <<$caller>>, Are you fucking me, you know what. Fuck off.
      scene.text(`${((s as any).caller ?? 0)}, Are you fucking me, you know what. Fuck off.`);
      // TODO-QSP: gs 'lover', 'remove_girlfriend', $call4Date["NPC"]
    } else {
      // TODO-QSP: dynamic text: (<<$caller>>) - Okay, I'll call tomorrow.
      scene.text(`(${((s as any).caller ?? 0)}) - Okay, I'll call tomorrow.`);
    }
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
      { label: 'I think we should break up...', handler: (st: GameState) => {
    scene.text('She sounds hurt, but you insist it is for the best. You both say goodbye and part ways.');
    // TODO-QSP: gs 'lover', 'remove_girlfriend', $call4Date["NPC"]
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
    { label: 'Hang up (end relationship)', handler: (st: GameState) => {
    // TODO-QSP: gs 'lover', 'remove_girlfriend', $call4Date["NPC"]
  }, goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterInitCall4Date(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: call4Date["ContactIndex"] = ARGS[1]
  // TODO-QSP: $call4Date["NPC"] = $contact[call4Date['ContactIndex']]
  // TODO-QSP: $call4Date["CallerName"] = $npc_nickname[$call4Date["NPC"]]
  if (((s as any).npc_gender ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] === 0) {
    // TODO-QSP: $call4Date["NPC-he"] = 'he'
    // TODO-QSP: $call4Date["NPC-He"] = 'He'
    // TODO-QSP: $call4Date["NPC-his"] = 'his'
    // TODO-QSP: $call4Date["NPC-His"] = 'His'
  } else {
    // TODO-QSP: $call4Date["NPC-he"] = 'her'
    // TODO-QSP: $call4Date["NPC-He"] = 'Her'
    // TODO-QSP: $call4Date["NPC-his"] = 'hers'
    // TODO-QSP: $call4Date["NPC-His"] = 'Hers'
  }
  scene.build();
}

function enterNPCDate(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'lover_call', 'init_call4Date', ARGS[1]
  // TODO-QSP: $call4Date["Location"] = $ARGS[2]
  // TODO-QSP: gs 'npcStat', $call4Date["NPC"]
  qspCall(s, 'mood', 'raise', 'tiny');
  // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(1, 2)
  ((s as any).call4Date ?? {})['leave'] = 'killvar \'call4Date\' & ';
  if (((s as any).npc_gender ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] === 0) {
    if (((s as any).call4Date ?? 0)?.['Location'] === 'city_park') {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateM\', \'datepark\' ');
    } else {
      if (((s as any).call4Date ?? 0)?.['Location'] === 'bar') {
        ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateM\', \'datebar\' ');
      } else {
        if (((s as any).call4Date ?? 0)?.['Location'] === 'movie') {
          ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateM\', \'datecinema\' ');
        } else {
          if (((s as any).call4Date ?? 0)?.['Location'] === 'cafe') {
            ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateM\', \'datecafe\' ');
          } else {
            ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateM\', \'datepark\' ');
          }
        }
      }
    }
  } else {
    if (((s as any).call4Date ?? 0)?.['Location'] === 'city_park') {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateF\', \'datepark\' ');
    } else {
      if (((s as any).call4Date ?? 0)?.['Location'] === 'bar') {
        ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateF\', \'datebar\' ');
      } else {
        if (((s as any).call4Date ?? 0)?.['Location'] === 'movie') {
        } else {
          if (((s as any).call4Date ?? 0)?.['Location'] === 'cafe') {
          } else {
            ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'dateF\', \'datepark\' ');
          }
        }
      }
    }
  }
  scene.build();
}

function enterSvetaCallsNPC(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'lover_call', 'init_call4Date', ARGS[1]
  qspCall(s, 'telefon', 'phone_balance');
  qspCall(s, 'telefon', 'phone_call_receive');
  // TODO-QSP: call4Date["willAgree"] = (rand(0, 10) > 3)
  ((s as any).call4Date ?? {})['leave'] = 'killvar \'call4Date\' & ';
  scene.text('"Yes, I\'m listening," says a voice from the speaker.');
  if (((s as any).month ?? 0) > 5  &&  ((s as any).temper ?? 0) > 20  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Invite to the park', handler: (st: GameState) => {
    scene.text('"Let\'s go for a walk in the park."');
    if (((s as any).call4Date ?? 0)?.['willAgree']) {
      // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "See you in the park in an hour."
      scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "See you in the park in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'lover_call\', \'NPCDate\', ' + qspUntranslated(s, "call4Date[\"ContactIndex\"]>", { location: "lover_call" }) + ', \'city_park\' ');
  } },
      ]);
    } else {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gs \'lover_call\', \'telotkaz\', \'' + qspUntranslated(s, "call4Date[\"CallerName\"]>", { location: "lover_call" }) + '\' ');
    }
  } },
    ]);
  }
  if (((s as any).home ?? 0)?.['town'] === 'city') {
    scene.actions([
      { label: 'Invite to the bar', handler: (st: GameState) => {
    scene.text('"Let\'s go to the bar."');
    if (((s as any).call4Date ?? 0)?.['willAgree']) {
      // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "See you at the bar in an hour."
      scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "See you at the bar in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'lover_call\', \'NPCDate\', ' + qspUntranslated(s, "call4Date[\"ContactIndex\"]>", { location: "lover_call" }) + ', \'bar\' ');
  } },
      ]);
    } else {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gs \'lover_call\', \'telotkaz\', \'' + qspUntranslated(s, "call4Date[\"CallerName\"]>", { location: "lover_call" }) + '\' ');
    }
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 50) {
    // TODO-QSP: $call4Date["loverResist"] = 'easy'
  } else {
    if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 65) {
      // TODO-QSP: $call4Date["loverResist"] = 'medium'
    } else {
      // TODO-QSP: $call4Date["loverResist"] = 'hard'
    }
  }
  // TODO-QSP: gs 'willpower', 'misc', 'self', $call4Date["loverResist"]
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'I think we should break up... [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'I think we should break up... [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$call4Date["NPC-He"]>> sounds hurt, but you insist it is for the best. You bot...
    scene.text(`${((s as any).call4Date ?? 0)?.['NPC-He']} sounds hurt, but you insist it is for the best. You both say goodbye and part ways.`);
    // TODO-QSP: gs 'telefon', 'DeleteContact', $call4Date["NPC"]
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Ask to meet', handler: (st: GameState) => {
    scene.text('"Let\'s meet up."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'lover_call\', \'NPCCallsForDate\', ' + qspUntranslated(s, "call4Date[\"ContactIndex\"]>", { location: "lover_call" }) + '');
  } },
    ]);
  } },
    { label: 'Invite to a movie', handler: (st: GameState) => {
    scene.text('"Want to go see a movie?"');
    if (((s as any).call4Date ?? 0)?.['willAgree']) {
      // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "See you at the movie theater in an hour."
      scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "See you at the movie theater in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'lover_call\', \'NPCDate\', ' + qspUntranslated(s, "call4Date[\"ContactIndex\"]>", { location: "lover_call" }) + ', \'movie\' ');
  } },
      ]);
    } else {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gs \'lover_call\', \'telotkaz\', \'' + qspUntranslated(s, "call4Date[\"CallerName\"]>", { location: "lover_call" }) + '\' ');
    }
  } },
    { label: 'Invite to the cafe', handler: (st: GameState) => {
    scene.text('"Let\'s go to the cafe."');
    if (((s as any).call4Date ?? 0)?.['willAgree']) {
      // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "See you at the cafe in an hour."
      scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "See you at the cafe in an hour."`);
      scene.actions([
        { label: 'Go', handler: (st: GameState) => {
    ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gt \'lover_call\', \'NPCDate\', ' + qspUntranslated(s, "call4Date[\"ContactIndex\"]>", { location: "lover_call" }) + ', \'cafe\' ');
  } },
      ]);
    } else {
      ((s as any).call4Date ?? {})['leave'] = (((s as any).call4Date ?? {})['leave'] ?? 0) + ('gs \'lover_call\', \'telotkaz\', \'' + qspUntranslated(s, "call4Date[\"CallerName\"]>", { location: "lover_call" }) + '\' ');
    }
  } },
    { label: 'Hangup', goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enterNPCCallsForDate(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'lover_call', 'init_call4Date', ARGS[1]
  // TODO-QSP: $DateNickName[0] = 'cutie'
  // TODO-QSP: $DateNickName[1] = 'honey'
  // TODO-QSP: $DateNickName[2] = 'sweetie'
  // TODO-QSP: $DateNickName[3] = 'baby'
  // TODO-QSP: $DateNickName[4] = 'hot stuff'
  // TODO-QSP: $DateNickName[5] = '<<$pcs_nickname>>'
  ((s as any).call4Date ?? {})['SvetaName'] = ((s as any).DateNickName ?? 0)?.[((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('DateNickName')-1)];
  ((s as any).call4Date ?? {})['leave'] = 'killvar \'call4Date\' & ';
  // TODO-QSP: dynamic text: Hey <<$call4Date["SvetaName"]>>, it's me, <<$call4Date["CallerName"]>>. How's it...
  scene.text(`Hey ${((s as any).call4Date ?? 0)?.['SvetaName']}, it's me, ${((s as any).call4Date ?? 0)?.['CallerName']}. How's it going?`);
  scene.actions([
    { label: 'Answer', handler: (st: GameState) => {
    scene.text('"Pretty good, you?"');
    // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "Great, but I kind of miss you, can we meet today?...
    scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "Great, but I kind of miss you, can we meet today?"`);
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_work_day', 'city_cafe_waitress', ((s as any).daystart ?? 0)) === 1) {
      scene.actions([
        { label: 'Sorry, I\'m working today', handler: (st: GameState) => {
    scene.text('"Sorry, I\'m working today."');
    // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "Okay, I'll call tomorrow."
    scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "Okay, I'll call tomorrow."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 50) {
      // TODO-QSP: $call4Date["loverResist"] = 'easy'
    } else {
      if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 65) {
        // TODO-QSP: $call4Date["loverResist"] = 'medium'
      } else {
        // TODO-QSP: $call4Date["loverResist"] = 'hard'
      }
    }
    // TODO-QSP: gs 'willpower', 'misc', 'self', $call4Date["loverResist"]
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I think we should break up... [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I think we should break up... [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$call4Date["NPC-He"]>> sounds hurt, but you insist it is for the best. You bot...
    scene.text(`${((s as any).call4Date ?? 0)?.['NPC-He']} sounds hurt, but you insist it is for the best. You both say goodbye and part ways.`);
    // TODO-QSP: gs 'telefon', 'DeleteContact', $call4Date["NPC"]
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tonight', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(0, 1)
    scene.text('"How about this evening?"');
    // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "Sounds great! When can I come to pick you up?"
    scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "Sounds great! When can I come to pick you up?"`);
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: npc_meetday[$call4Date['NPC']] = daystart
    // TODO-QSP: npc_meethour[$call4Date['NPC']] = input ("When do you want to be picked up. It is now <<func('time',...
    if (((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= ((s as any).hour ?? 0)  ||  ((s as any).npc_meethour ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] > 23) {
      // TODO-QSP: npc_meethour[$call4Date['NPC']] = 20
    }
    // TODO-QSP: dynamic text: "How about <<npc_meethour[$call4Date['NPC']]>>:00?."
    scene.text(`"How about ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00?."`);
    // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, "Okay <<$call4Date["SvetaName"]>>, see you at <<np...
    scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, "Okay ${((s as any).call4Date ?? 0)?.['SvetaName']}, see you at ${((s as any).npc_meethour ?? 0)?.[((s as any).call4Date ?? 0)?.['NPC']]}:00."`);
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
      { label: 'Maybe tomorrow', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $call4Date["NPC"], rand(-1, 0)
    scene.text('"I\'m busy today. Call tomorrow."');
    if (((s as any).npc_rel ?? 0)[((s as any).call4Date ?? 0)?.['NPC']] <= 20) {
      // TODO-QSP: dynamic text: <<$call4Date["CallerName"]>>, Are you fucking me, you know what. Suck my dick.
      scene.text(`${((s as any).call4Date ?? 0)?.['CallerName']}, Are you fucking me, you know what. Suck my dick.`);
      // TODO-QSP: gs 'telefon', 'DeleteContact', $call4Date["NPC"]
    } else {
      // TODO-QSP: dynamic text: (<<$call4Date["CallerName"]>>) - Okay, I'll call tomorrow.
      scene.text(`(${((s as any).call4Date ?? 0)?.['CallerName']}) - Okay, I'll call tomorrow.`);
    }
    scene.actions([
      { label: 'Hang up', goto: ['lover_call', 'fin'] },
    ]);
  } },
    ]);
  } },
    { label: 'Hang up (end relationship)', handler: (st: GameState) => {
    // TODO-QSP: gs 'telefon', 'DeleteContact', $call4Date["NPC"]
  }, goto: ['lover_call', 'fin'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'scheduler':
      enterScheduler(s, scene);
      break;
    case 'set_base_schedule':
      enterSetBaseSchedule(s, scene);
      break;
    case 'telotkaz':
      enterTelotkaz(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    case 'mobilaraz':
      enterMobilaraz(s, scene);
      break;
    case 'init_call4Date_lover':
      enterInitCall4DateLover(s, scene);
      break;
    case 'callingTheLover':
      enterCallingTheLover(s, scene);
      break;
    case 'callingTheLover_f':
      enterCallingTheLoverF(s, scene);
      break;
    case 'callingTheLover_m':
      enterCallingTheLoverM(s, scene);
      break;
    case 'lover':
      enterLover(s, scene);
      break;
    case 'lover_m':
      enterLoverM(s, scene);
      break;
    case 'lover_f':
      enterLoverF(s, scene);
      break;
    case 'init_call4Date':
      enterInitCall4Date(s, scene);
      break;
    case 'NPCDate':
      enterNPCDate(s, scene);
      break;
    case 'SvetaCallsNPC':
      enterSvetaCallsNPC(s, scene);
      break;
    case 'NPCCallsForDate':
      enterNPCCallsForDate(s, scene);
      break;
    default:
      enterScheduler(s, scene);
      break;
  }
}

export const lover_call: LocationDef = {
  name: 'lover_call',
  title: '"Yes, I\'m listening," says a voice from the speaker.',
  region: 'other',
  enter: enter,
};
