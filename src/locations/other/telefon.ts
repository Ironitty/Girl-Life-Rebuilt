import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAddContact(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['Anonymous'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = 0;
    ((s as any).contact = (s as any).contact ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['NPC']);
    ((s as any).contactOCode = (s as any).contactOCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactOSche = (s as any).contactOSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
    ((s as any).contactICode = (s as any).contactICode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactISche = (s as any).contactISche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
    ((s as any).contactOSMSCode = (s as any).contactOSMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactOSMSSche = (s as any).contactOSMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
    ((s as any).contactISMSCode = (s as any).contactISMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactISMSSche = (s as any).contactISMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
  }
  ((s as any).contactIcon = (s as any).contactIcon ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['Icon']);
  ((s as any).contactAnon = (s as any).contactAnon ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['Anonymous']);
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterDeleteContact(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    (s as any).contact = undefined;
    (s as any).contactIcon = undefined;
    (s as any).contactAnon = undefined;
    (s as any).contactOCode = undefined;
    (s as any).contactOSche = undefined;
    (s as any).contactICode = undefined;
    (s as any).contactISche = undefined;
    (s as any).contactOSMSCode = undefined;
    (s as any).contactOSMSSche = undefined;
    (s as any).contactISMSCode = undefined;
    (s as any).contactISMSSche = undefined;
  }
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterSetCallSchedule(s: GameState, scene: SceneBuilder): void {
  alert('Warning SetCallSchedule is deprecated. Use SetInCallSchedule and SetOutCallSchedule instead');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterSetOutCallSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0)]; enterSetInCallSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSetInCallSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).telefonCon ?? 0)?.['NPC']), 'icon_na', 1]; enterAddContact(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = 0;
  }
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['InCode'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['InSched'] = ((String((s as any).locArgs?.[3] ?? '') === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  ((s as any).contactICode = (s as any).contactICode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['InCode']);
  ((s as any).contactISche = (s as any).contactISche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['InSched']);
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterSetOutCallSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).telefonCon ?? 0)?.['NPC']), 'icon_na', 1]; enterAddContact(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = 0;
  }
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['OutCode'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['OutSched'] = ((String((s as any).locArgs?.[3] ?? '') === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  ((s as any).contactOCode = (s as any).contactOCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['OutCode']);
  ((s as any).contactOSche = (s as any).contactOSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['OutSched']);
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterClearCallSchedule(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearInCallSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearOutCallSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterClearInCallSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    ((s as any).contactICode = (s as any).contactICode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactISche = (s as any).contactISche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
  }
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterClearOutCallSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    ((s as any).contactOCode = (s as any).contactOCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactOSche = (s as any).contactOSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
  }
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterSetSMSSchedule(s: GameState, scene: SceneBuilder): void {
  alert('Warning SetSMSSchedule is deprecated. Use SetInSMSSchedule and SetOutSMSSchedule instead');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0)]; enterSetOutSMSSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0)]; enterSetInSMSSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterSetInSMSSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).telefonCon ?? 0)?.['NPC']), 'icon_na', 1]; enterAddContact(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = 0;
  }
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['InSMSCode'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['InSMSSched'] = ((String((s as any).locArgs?.[3] ?? '') === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  ((s as any).contactISMSCode = (s as any).contactISMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['InSMSCode']);
  ((s as any).contactISMSSche = (s as any).contactISMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['InSMSSched']);
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterSetOutSMSSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).telefonCon ?? 0)?.['NPC']), 'icon_na', 1]; enterAddContact(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = 0;
  }
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['OutSMSCode'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['OutSMSSched'] = ((String((s as any).locArgs?.[3] ?? '') === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  ((s as any).contactOSMSCode = (s as any).contactOSMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['OutSMSCode']);
  ((s as any).contactOSMSSche = (s as any).contactOSMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = (((s as any).telefonCon ?? 0)?.['OutSMSSched']);
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterClearSMSSchedule(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearOutSMSSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterClearInSMSSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterClearInSMSSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    ((s as any).contactISMSCode = (s as any).contactISMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactISMSSche = (s as any).contactISMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
  }
  (s as any).telefonCon = undefined;
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterClearOutSMSSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonCon = (s as any).telefonCon ?? {})['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    ((s as any).contactOSMSCode = (s as any).contactOSMSCode ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '';
    ((s as any).contactOSMSSche = (s as any).contactOSMSSche ?? {})[(((s as any).telefonCon ?? 0)?.['ContactListID'])] = '0';
  }
  (s as any).telefonCon = undefined;
  (s as any).telefonCon = undefined;
  scene.build();
}

function enterPhoneSelfieImageBathing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 5));
  qspCall(s, 'phone_selfies', 'camera_take_selfie_bathing', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterDailyStatRefresh(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
      ((s as any).contactToday = (s as any).contactToday ?? {})[String((s as any).telefon_i ?? 0)] = 0;
      if (String((s as any).locArgs?.[1] ?? '') === 1) {
        ((s as any).contactWeek = (s as any).contactWeek ?? {})[String((s as any).telefon_i ?? 0)] = 0;
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    (s as any).telefon_i = undefined;
  }
  scene.build();
}

function enterIncomingCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefIncCheck = (s as any).telefIncCheck ?? {})['PrevTotalMinutes'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefIncCheck = (s as any).telefIncCheck ?? {})['NewTotalMinutes'] = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).telefIncCheck ?? 0)?.['PrevTotalMinutes'] > ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']  ||  ((s as any).telefon ?? 0)?.['LastIncCallCheck'] > ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']  ||  ((s as any).telefon ?? 0)?.['LastIncCallCheck'] === 0) {
    ((s as any).telefon = (s as any).telefon ?? {})['LastIncCallCheck'] = (((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']);
  }
  if (((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes'] - ((s as any).telefon ?? 0)?.['LastIncCallCheck'] > 60  &&  (((s as any).menu_off ?? 0) === 0  &&  ((s as any).phone_off ?? 0) === 0  ||  ((s as any).phone_on ?? 0) === 1)) {
    ((s as any).telefon = (s as any).telefon ?? {})['LastIncCallCheck'] = (((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterIncomingCallChooser(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).telefIncCheck = undefined;
  scene.build();
}

function enterIncomingCallChooser(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
      if (((s as any).contactICode ?? 0)?.[String((s as any).telefon_i ?? 0)] !== "") {
        if ((0 as any)) {
          (s as any).telefon_j = 0;
          if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 1) {
            ((s as any).telefIncIcon = (s as any).telefIncIcon ?? {})[String((s as any).telefon_j ?? 0)] = 'images/system/phone/decline.png';
            ((s as any).telefIncName = (s as any).telefIncName ?? {})[String((s as any).telefon_j ?? 0)] = 'Unknown Caller';
          } else {
            ((s as any).telefIncIcon = (s as any).telefIncIcon ?? {})[String((s as any).telefon_j ?? 0)] = (((s as any).contactIcon ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0);
            ((s as any).telefIncName = (s as any).telefIncName ?? {})[String((s as any).telefon_j ?? 0)] = (((s as any).npc_nickname ?? 0)?.[(((s as any).contact ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0)] ?? 0);
          }
          ((s as any).telefIncCall = (s as any).telefIncCall ?? {})[String((s as any).telefon_j ?? 0)] = (((s as any).contactICode ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0);
          ((s as any).telefIncNPC = (s as any).telefIncNPC ?? {})[String((s as any).telefon_j ?? 0)] = (((s as any).contact ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0);
        }
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    if (Object.keys((s as any).telefIncCall ?? {}).length > 0) {
      (s as any).telefon_j = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
      if (((s as any).telefIncNPC ?? 0)?.[String((s as any).telefon_j ?? 0)] !== "") {
        (s as any).telefon_i = qspUntranslated(s, "arrpos('contact', telefIncNPC[telefon_j])", { location: "telefon" });
        ((s as any).contactLastCall = (s as any).contactLastCall ?? {})[String((s as any).telefon_i ?? 0)] = ((s as any).totminut ?? 0);
        ((s as any).contactToday = (s as any).contactToday ?? {})[String((s as any).telefon_i ?? 0)] = ((s as any).contactToday[String((s as any).telefon_i ?? 0)] ?? 0) + (1);
        ((s as any).contactWeek = (s as any).contactWeek ?? {})[String((s as any).telefon_i ?? 0)] = ((s as any).contactWeek[String((s as any).telefon_i ?? 0)] ?? 0) + (1);
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).telefIncIcon ?? 0)?.[String((s as any).telefon_j ?? 0)] ?? 0), (((s as any).telefIncName ?? 0)?.[String((s as any).telefon_j ?? 0)] ?? 0), (((s as any).telefIncCall ?? 0)?.[String((s as any).telefon_j ?? 0)] ?? 0)]; enterIncomingCall(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    (s as any).telefon_i = undefined;
    (s as any).telefon_j = undefined;
    (s as any).telefIncIcon = undefined;
    (s as any).telefIncName = undefined;
    (s as any).telefIncCall = undefined;
    (s as any).telefIncNPC = undefined;
  }
  scene.build();
}

function enterIncomingCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefonIncC = (s as any).telefonIncC ?? {})['Icon'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefonIncC = (s as any).telefonIncC ?? {})['Name'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefonIncC = (s as any).telefonIncC ?? {})['Code'] = ((s as any).locArgs?.[3] ?? 0);
  if (((s as any).sound_settings ?? 0)?.['menu_off'] === 0) {
  }
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>' + (((s as any).telefonIncC ?? 0)?.['Name']) + ' calling</font><br>\n<img width="200" src="' + (((s as any).telefonIncC ?? 0)?.['Icon']) + '"><br>\n<br>\n<br>\n<br>\n<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: /u003c/u003c$telefonIncC[ */ return s; }); return false;"><img src="images/system/phone/call_accept.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;"><img src="images/system/phone/decline.png"></a><br>\n<b><font color="red">Your phone is ringing</font></b><br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).telefonIncC = undefined;
  scene.build();
}

function enterAddSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSLastID'] = ((s as any).telefon['SMSLastID'] ?? 0) + (1);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSidentifier'] = (((s as any).telefon ?? 0)?.['SMSLastID']);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSIndex'] = (((s as any).telefon ?? 0)?.['SMSCount']);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSCount'] = ((s as any).telefon['SMSCount'] ?? 0) + (1);
  ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
  ((s as any).SMSIdentifier = (s as any).SMSIdentifier ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = (((s as any).telefon ?? 0)?.['SMSidentifier']);
  ((s as any).SMSContact = (s as any).SMSContact ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).SMSMessage = (s as any).SMSMessage ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).SMSReplies = (s as any).SMSReplies ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).SMSTime = (s as any).SMSTime ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = '' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0)) + ' ' + ((s as any).weekName ?? 0) + ' ' + ((s as any).day ?? 0) + ' ' + ((s as any).monthName ?? 0) + ' ' + ((s as any).year ?? 0) + '';
  ((s as any).SMSPicture1 = (s as any).SMSPicture1 ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).SMSPicture2 = (s as any).SMSPicture2 ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[5] ?? 0);
  ((s as any).SMSPicture3 = (s as any).SMSPicture3 ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[6] ?? 0);
  ((s as any).SMSPicture4 = (s as any).SMSPicture4 ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = ((s as any).locArgs?.[7] ?? 0);
  ((s as any).SMSMessageRead = (s as any).SMSMessageRead ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = 0;
  scene.build();
}

function enterDeleteSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSIndex'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).SMSIdentifier = undefined;
  (s as any).SMSContact = undefined;
  (s as any).SMSMessage = undefined;
  (s as any).SMSReplies = undefined;
  (s as any).SMSTime = undefined;
  (s as any).SMSPicture1 = undefined;
  (s as any).SMSPicture2 = undefined;
  (s as any).SMSPicture3 = undefined;
  (s as any).SMSPicture4 = undefined;
  (s as any).SMSMessageRead = undefined;
  ((s as any).telefon = (s as any).telefon ?? {})['SMSCount'] = ((s as any).telefon['SMSCount'] ?? 0) - (1);
  if (String((s as any).locArgs?.[2] ?? '') === 'all'  &&  ((s as any).telefon ?? 0)?.['SMSCount'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '0', 'all']; enterDeleteSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterDeleteSendId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).telefon_i ?? 0)]; enterDeleteSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).telefon_i = undefined;
  scene.build();
}

function enterShowSmsFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).telefon_i ?? 0)]; enterShowSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).telefon_i = undefined;
  scene.build();
}

function enterShowSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSIndex'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSidentifier'] = qspUntranslated(s, "SMSIdentifier[telefon['SMSIndex']]", { location: "telefon" });
  if (((s as any).SMSMessageRead ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] === 0) {
    ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) - (1);
    ((s as any).SMSMessageRead = (s as any).SMSMessageRead ?? {})[(((s as any).telefon ?? 0)?.['SMSIndex'])] = 1;
  }
  ((s as any).telefon = (s as any).telefon ?? {})['contactid'] = qspUntranslated(s, "arrpos('contact', SMSContact[telefon['SMSIndex']])", { location: "telefon" });
  if (((s as any).telefon ?? 0)?.['contactid'] === -1) {
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPCName'] = '';
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = 'icon_na.png';
  } else {
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPCName'] = (((s as any).npc_nickname ?? 0)?.[qspUntranslated(s, "contact[telefon['contactid']]", { location: "telefon" })] ?? 0);
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = qspUntranslated(s, "contactIcon[telefon['contactid']]", { location: "telefon" });
  }
  if ((!((String(((s as any).telefonCon ?? 0)?.['Icon']).indexOf(String('.'))) + 1))) {
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = ((s as any).telefonCon['Icon'] ?? 0) + ('.png');
  }
  if ((!((String(((s as any).telefonCon ?? 0)?.['Icon']).indexOf(String('/'))) + 1))) {
    ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = 'images/system/phone/icons/' + (((s as any).telefonCon ?? 0)?.['Icon']);
  }
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>SMS</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/' + ((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_sms.png') : ('icon_sms_new.gif')) + '"><br>';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><table><tr><td align="right" valign="middle"><img height=100 src="' + (((s as any).telefonCon ?? 0)?.['Icon']) + '"></td><td valign="middle">' + (((s as any).telefonCon ?? 0)?.['NPCName']) + '</td></tr></table></tr>');
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td>' + qspUntranslated(s, "SMSMessage[telefon['SMSIndex']]", { location: "telefon" }) + '</td></tr>');
  if (((s as any).SMSReplies ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><th> </th></tr>');
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td>' + qspUntranslated(s, "SMSReplies[telefon['SMSIndex']]", { location: "telefon" }) + '</td></tr>');
  }
  if (((s as any).SMSPicture1 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="' + qspUntranslated(s, "SMSPicture1[telefon['SMSIndex']]", { location: "telefon" }) + '"></td></tr>');
  }
  if (((s as any).SMSPicture2 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="' + qspUntranslated(s, "SMSPicture2[telefon['SMSIndex']]", { location: "telefon" }) + '"></td></tr>');
  }
  if (((s as any).SMSPicture3 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="' + qspUntranslated(s, "SMSPicture3[telefon['SMSIndex']]", { location: "telefon" }) + '"></td></tr>');
  }
  if (((s as any).SMSPicture4 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="' + qspUntranslated(s, "SMSPicture4[telefon['SMSIndex']]", { location: "telefon" }) + '"></td></tr>');
  }
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'telefon\', \'Phone_sms\' ';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).telefon = (s as any).telefon ?? {})['SMS'] = '$result = $func(\'telefon\', \'get_sms_row\', ARGS[0], $ARGS[1], $ARGS[2], $ARGS[3], ARGS[4])';
  scene.build();
}

function enterGetSmsRow(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSIndex'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['ContactNickName'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSTime'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSStatus'] = ((s as any).locArgs?.[5] ?? 0);
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('.'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('/'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = 'images/system/phone/icons/' + (((s as any).telefon ?? 0)?.['ContactIcon']);
  }
  if (((s as any).telefon ?? 0)?.['SMSStatus'] === 0) {
    ((s as any).telefon = (s as any).telefon ?? {})['SMSstyle1'] = '<b>';
    ((s as any).telefon = (s as any).telefon ?? {})['SMSstyle2'] = '</b>';
  } else {
    ((s as any).telefon = (s as any).telefon ?? {})['SMSstyle1'] = '';
    ((s as any).telefon = (s as any).telefon ?? {})['SMSstyle2'] = '';
  }
  (s as any).result = '<tr>\n<td><img height=100 src="' + (((s as any).telefon ?? 0)?.['ContactIcon']) + '"></td>\n<td>' + (((s as any).telefon ?? 0)?.['SMSstyle1']) + '' + (((s as any).telefon ?? 0)?.['ContactNickName']) + '' + (((s as any).telefon ?? 0)?.['SMSstyle2']) + '</td>\n<td align="right">' + (((s as any).telefon ?? 0)?.['SMSstyle1']) + '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027show_sms\u0027\u0027, (((s as any).telefon ?? 0)?.[\u0027SMSIndex\u0027] ?? \u0027\u0027)); return false;">' + (((s as any).telefon ?? 0)?.['SMSTime']) + '</a>' + (((s as any).telefon ?? 0)?.['SMSstyle2']) + '</td>\n<td>' + (((s as any).telefon ?? 0)?.['SMSstyle1']) + '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027delete_sms\u0027\u0027, (((s as any).telefon ?? 0)?.[\u0027SMSIndex\u0027] ?? \u0027\u0027)); return false;">Delete</a>' + (((s as any).telefon ?? 0)?.['SMSstyle2']) + '</td>\n</tr>';
  return;
  scene.build();
}

function enterSendSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'telefon\', \'Phone_sms\'';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Send SMS</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/' + ((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_sms.png') : ('icon_sms_new.gif')) + '"><br>';
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0) {
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<br/>');
    if (((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] > 0) {
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<b>You still can send ' + (((s as any).subscription ?? 0)?.['metered_calls-sms_limit']) + ' text messages on your contract</b>');
    } else {
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<b>You have run out of text messages on your contract</b>');
    }
  }
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
      if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
        ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_contactsms_row', ((s as any).telefon_i ?? 0)));
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).telefon_i = undefined;
    ((s as any).telefon = (s as any).telefon ?? {})['contactsms'] = '$result = $func(\'telefon\', \'get_contactsms_row\', ARGS[0])';
  }
  scene.build();
}

function enterGetContactsmsRow(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = qspUntranslated(s, "contactIcon[ARGS[1]]", { location: "telefon" });
  ((s as any).telefon = (s as any).telefon ?? {})['ContactNPCcode'] = qspUntranslated(s, "contact[ARGS[1]]", { location: "telefon" });
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('.'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('/'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = 'images/system/phone/icons/' + (((s as any).telefon ?? 0)?.['ContactIcon']);
  }
  (s as any).result = '<tr>';
  (s as any).result = ((s as any).result ?? 0) + ('<td><img width="75" src="' + (((s as any).telefon ?? 0)?.['ContactIcon']) + '"></td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td>' + (((s as any).npc_nickname ?? 0)?.[(((s as any).telefon ?? 0)?.['ContactNPCcode'])] ?? 0) + '</td>');
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0  &&  ((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] <= 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<td>New Message</td>');
  } else {
    (s as any).result = ((s as any).result ?? 0) + ('<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027telefon\u0027, \u0027npcSendListSms\u0027, (((s as any).telefon ?? 0)?.[\u0027ContactNPCcode\u0027] ?? \u0027\u0027)); return false;">New Message</a></td>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  return;
  scene.build();
}

function enterNpcSendListSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'telefon\', \'send_sms\' ';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Send SMS</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/' + ((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_sms.png') : ('icon_sms_new.gif')) + '"><br>';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).SMSSendContact ?? {}).length) {
      if (((s as any).SMSSendContact ?? 0)?.[String((s as any).telefon_i ?? 0)] === String((s as any).locArgs?.[1] ?? '')) {
        ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_sms_send_row', ((s as any).telefon_i ?? 0)));
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).telefon_i = undefined;
    ((s as any).telefon = (s as any).telefon ?? {})['smsMessageToSend'] = '$result = $func(\'telefon\', \'get_sms_send_row\', ARGS[0])';
  }
  scene.build();
}

function enterGetSmsSendRow(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['ContactNPCcode'] = qspUntranslated(s, "SMSSendContact[ARGS[1]]", { location: "telefon" });
  (s as any).result = '\n<tr>\n<td>' + (((s as any).npc_nickname ?? 0)?.[(((s as any).telefon ?? 0)?.['ContactNPCcode'])] ?? 0) + '</td>\n<td><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027telefon\u0027, \u0027smsSendMessage\u0027, ((s as any).locArgs?.[0] ?? \u0027\u0027)); return false;">' + qspUntranslated(s, "SMSSendMessage[ARGS[0]]", { location: "telefon" }) + '</a></td>\n</tr>';
  return;
  scene.build();
}

function enterSmsSendMessage(s: GameState, scene: SceneBuilder): void {
  scene.text('' + qspUntranslated(s, "SMSSendCode[ARGS[1]]", { location: "telefon" }) + '');
  qspCall(s, 'internet_mobile', 'send_sms');
  if (((s as any).SMSSendRepeatable ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterDeleteSmsSendIndex(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterAddSmsToSend(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSSendid'] = 0;
  ((s as any).telefon = (s as any).telefon ?? {})['SMSSendLastID'] = ((s as any).telefon['SMSSendLastID'] ?? 0) + (1);
  ((s as any).SMSSendContact = (s as any).SMSSendContact ?? {})[(((s as any).telefon ?? 0)?.['SMSSendid'])] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).SMSSendMessage = (s as any).SMSSendMessage ?? {})[(((s as any).telefon ?? 0)?.['SMSSendid'])] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).SMSSendCode = (s as any).SMSSendCode ?? {})[(((s as any).telefon ?? 0)?.['SMSSendid'])] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).SMSSendRepeatable = (s as any).SMSSendRepeatable ?? {})[(((s as any).telefon ?? 0)?.['SMSSendid'])] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).SMSSendIdentifier = (s as any).SMSSendIdentifier ?? {})[(((s as any).telefon ?? 0)?.['SMSSendid'])] = (((s as any).telefon ?? 0)?.['SMSSendLastID']);
  ((s as any).telefon = (s as any).telefon ?? {})['SMSSendIdentifier'] = qspUntranslated(s, "SMSSendIdentifier[telefon['SMSSendid']]", { location: "telefon" });
  scene.build();
}

function enterDeleteSmsSendIndex(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['SMSSendid'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).SMSSendContact = undefined;
  (s as any).SMSSendMessage = undefined;
  (s as any).SMSSendCode = undefined;
  (s as any).SMSSendRepeatable = undefined;
  (s as any).SMSSendIdentifier = undefined;
  scene.build();
}

function enterDeleteSmsSendId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSSendIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).telefon_i ?? 0)]; enterDeleteSmsSendIndex(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).telefon_i = undefined;
  scene.build();
}

function enterIncomingSMSCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
      if (((s as any).contactISMSCode ?? 0)?.[String((s as any).telefon_i ?? 0)] !== "") {
        if ((0 as any)) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).contact ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0)]; enterClearInSMSSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    (s as any).telefon_i = undefined;
  }
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[0] = 'Custom_Standard';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[1] = 'Bimbo';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[2] = 'Custom_Aluminus';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[3] = 'Custom_Bottlecapped';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[4] = 'Custom_Galactic';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[5] = 'Custom_Vectored';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[6] = 'Custom_Veneer';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[7] = 'Custom_Voidwalker';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[8] = 'Custom_Voidwalker Red';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[9] = 'Custom_Voidwalker Toxic';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[10] = 'Gopnik';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[11] = 'Sports';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[12] = 'Succubus';
  ((s as any).phonetheme_name = (s as any).phonetheme_name ?? {})[13] = 'Woodshop';
  ((s as any).phonetheme = (s as any).phonetheme ?? {})[0] = 1;
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  ((s as any).telefon = (s as any).telefon ?? {})['print'] = 'gs \'telefon\', \'display\', iif(ARGS[0]=0, $ARGS[0], ARGS[0])';
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).menu_off ?? 0))) {
    if (String((s as any).locArgs?.[1] ?? '') !== 0  &&  String((s as any).locArgs?.[1] ?? '') !== '') {
      ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'stat\' ';
    }
    scene.text(qspFunc(s, 'cleanHTML', qspFunc(s, 'telefon', 'get_header_string') + (((s as any).telefon ?? {})?.['body'] ?? 0) + qspFunc(s, 'telefon', 'get_footer_string'), 1));
  } else {
    scene.text(qspFunc(s, 'cleanHTML', qspFunc(s, 'telefon', 'get_header_string') + (((s as any).telefon ?? {})?.['body'] ?? 0), 1));
  }
  return;
  ((s as any).telefon = (s as any).telefon ?? {})['header'] = '$result = $func(\'telefon\', \'get_header_string\')';
  scene.build();
}

function enterGetHeaderString(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<center>';
  (s as any).result = ((s as any).result ?? 0) + ('<b>' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0)) + '</b><br>');
  (s as any).result = ((s as any).result ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).result = ((s as any).result ?? 0) + ('<tr>');
  (s as any).result = ((s as any).result ?? 0) + ('<td><img src="images/system/icons/icon_statusbar_left.png"></td>');
  if (((s as any).telefon ?? 0)?.['UnreadSMS'] === 0) {
    (s as any).result = ((s as any).result ?? 0) + ('<td></td>');
  } else {
    if (((s as any).telefon ?? 0)?.['UnreadSMS'] === 1) {
      (s as any).result = ((s as any).result ?? 0) + ('<td>You have 1 unread message</td>');
    } else {
      (s as any).result = ((s as any).result ?? 0) + ('<td>You have ' + (((s as any).telefon ?? 0)?.['UnreadSMS']) + ' unread messages</td>');
    }
  }
  (s as any).result = ((s as any).result ?? 0) + ('<td align="right"><img src="images/system/icons/icon_statusbar_right' + Math.min(Math.max(0, (((s as any).pcs_sleep ?? 0) + 10) / 20), 5) + '.png"></td>');
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  (s as any).result = ((s as any).result ?? 0) + ('</table><br>');
  return;
  ((s as any).telefon = (s as any).telefon ?? {})['footer'] = '$result = $func(\'telefon\', \'get_footer_string\')';
  scene.build();
}

function enterGetFooterString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).telefon ?? 0)?.['backButton'] === '') {
    ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'telefon\', \'Phone_menu\' ';
  }
  (s as any).result = '<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: /u003c/u003c$telefon[\u0027backButton\u0027]>> */ return s; }); return false;"><img src="images/system/icons/back.png"></a>';
  (s as any).result = ((s as any).result ?? 0) + ('<br><br>');
  (s as any).result = ((s as any).result ?? 0) + ('<a href="exec:gs\'stat\'">Put Phone Away.</a>');
  (s as any).result = ((s as any).result ?? 0) + ('<br>');
  (s as any).result = ((s as any).result ?? 0) + ('</center>');
  ((s as any).telefon = (s as any).telefon ?? {})['backButton'] = 'gs \'telefon\', \'Phone_menu\' ';
  return;
  scene.build();
}

function enterPhoneMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).phone_off ?? 0) === 1) {
    scene.text('<center><b>Your phone is disabled for this event</b></center>');
  } else {
    if (((s as any).menu_off ?? 0) === 1  &&  (!((s as any).phone_on ?? 0))) {
      qspCall(s, 'obj_din', 'menu_disabled');
    } else {
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_camera\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_camera.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_calendar\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_calendar.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_pictures\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_pictures.png"></a>\n<br>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_media\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_music.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_notebook\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_notebook.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_wheather\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_weather.png"></a>\n<br>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_contactlist\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_call.png"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_sms\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/' + ((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_sms.png') : ('icon_sms_new.gif')) + '"></a>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_megafon\u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_megafon.png"></a>\n<br>';
      if (((s as any).menu_off ?? 0) === 1) {
        ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027obj_din\u0027, \u0027menu_disabled\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_settings.png"></a><br>');
      } else {
        ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { delete (s as any)[\u0027menu_page\u0027]; return s; }); window.__gameStore.getState().doGoto(\u0027$menu_settings\u0027, \u0027\u0027); return false;"><img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_settings.png"></a><br>');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'main']; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterPhoneCamera(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '<font size=6>Camera</font><br>';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<img src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_camera.png" height="80" width="80"><br><br>');
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'phone_selfies', 'open_camera'));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneCalendar(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Calendar</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_calendar.png"><br><br>\n<b>Today:</b><br>\n' + ((s as any).weekName ?? 0) + ', ' + ((s as any).day ?? 0) + ' ' + ((s as any).monthName ?? 0) + ' ' + ((s as any).year ?? 0) + '<br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhonePictures(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'phone_selfies', 'view_selfies');
  scene.build();
}

function enterPhoneMedia(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Media</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_music.png"><br>\n<b>This option is not active</b><br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneNotebook(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'housing', 'rent');
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Planner</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_notebook.png"><br>\n' + ((s as any).year ?? 0) + '-' + ((s as any).monthName ?? 0) + '-' + ((s as any).day ?? 0) + ', ' + ((s as any).weekName ?? 0) + '<br><br>';
  (s as any).rent1 = (-1);
  (s as any).rent4 = (-1);
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'city_apartment')) {
    (s as any).rent1 = qspFunc(s, 'homes_properties', 'get_rent_days', 'city_apartment');
  }
  if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'rented', 'old_town_apartment')) {
    (s as any).rent4 = qspFunc(s, 'homes_properties', 'get_rent_days', 'old_town_apartment');
  }
  (s as any).ds1 = ((s as any).daystart ?? 0);
  (s as any).d1 = ((s as any).day ?? 0);
  (s as any).w1 = ((s as any).week ?? 0);
  (s as any).m1 = ((s as any).month ?? 0);
  (s as any).y1 = ((s as any).year ?? 0);
  (s as any).i = 0;
  (s as any).list = '<br>&emsp;<b>•</b> ';
  while (true) {
    (s as any).daynum = ((s as any).daystart ?? 0)+((s as any).i ?? 0);
    (s as any).calendarday = '';
    if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) < 9) {
      (s as any).calendarday = ((s as any).calendarday ?? 0) + (((s as any).list ?? 0) + 'New Year holidays');
      if (((s as any).d1 ?? 0) === 1) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ', New Year';
      }
      if (((s as any).d1 ?? 0) === 7) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ', Christmas';
      }
    }
    if (((s as any).m1 ?? 0) === 2  &&  ((s as any).d1 ?? 0) === 23) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Defender of Fatherland Day';
    }
    if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 8) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Women\'s Day';
    }
    if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 1) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Spring and Labor Day';
    }
    if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 2) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'National holiday';
    }
    if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 9) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Victory Day';
    }
    if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 12) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Russia Day';
    }
    if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 13) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'National holiday';
    }
    if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Unity Day';
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) === 1) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'First day of Winter break.';
      }
      if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) === 15) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Last day of Winter break.';
      }
      if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 20) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'First day of Spring break.';
      }
      if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 26) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Last day of Spring break.';
      }
      if (((s as any).y1 ?? 0) === 2017  &&  ((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 25) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Graduation Day!';
      }
      if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 1) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'First day of Summer break.';
      }
      if (((s as any).m1 ?? 0) === 8  &&  ((s as any).d1 ?? 0) === 31) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Last day of Summer break.';
      }
      if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'First day of Autumn break.';
      }
      if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 11) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Last day of Autumn break.';
      }
    }
    if (((s as any).daynum ?? 0) >= ((s as any).daylastperiod ?? 0)+28  &&  ((s as any).daynum ?? 0) < ((s as any).daylastperiod ?? 0)+31) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<font color=\'red\'><b>Menstruation!</b></font>';
    }
    if (((s as any).daynum ?? 0) >= ((s as any).daylastperiod ?? 0)+12  &&  ((s as any).daynum ?? 0) < ((s as any).daylastperiod ?? 0)+14) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<font color=#336600><b>Ovulation!</b></font>';
    }
    if (((s as any).pregChem ?? 0) >= 6720) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<font color=\'red\'><b>Birthing day!</b></font>';
    }
    if (((s as any).w1 ?? 0) < 5  &&  (((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed')) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Working as a secretary. <i>(9:00 - ' + qspFunc(s, 'time', 'get_time_string', 17, 0) + ')</i>';
    }
    if (((s as any).w1 ?? 0) < 5  &&  ((s as any).job_status ?? 0)?.['pav_factory'] === 'employed') {
      (s as any).calendarday = ((s as any).calendarday ?? 0) + (((s as any).list ?? 0) + 'Working as a seamstress. ');
      if (((s as any).age ?? 0) < 18) {
        (s as any).calendarday = ((s as any).calendarday ?? '') + '<i>(' + qspFunc(s, 'time', 'get_time_string', 16, 0) + ' - ' + qspFunc(s, 'time', 'get_time_string', 20, 0) + ')</i>';
      } else {
        (s as any).calendarday = ((s as any).calendarday ?? '') + '<i>(8:00 - ' + qspFunc(s, 'time', 'get_time_string', 16, 0) + ')</i>';
      }
    }
    if (((s as any).w1 ?? 0) > 1  &&  ((s as any).w1 ?? 0) <= 6  &&  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Working as a waitress. <i>(' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ' - ' + qspFunc(s, 'time', 'get_time_string', 20, 0) + ')</i>';
    }
    if (((s as any).w1 ?? 0) > 1  &&  ((s as any).w1 ?? 0) <= 5  &&  ((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed') {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Working as a nurse. <i>(' + qspFunc(s, 'time', 'get_time_string', 8, 0) + ' - ' + qspFunc(s, 'time', 'get_time_string', 16, 0) + ')</i>';
    }
    if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
      (s as any).temp_strip_sched = parseFloat((((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl']));
      if (((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl'] === '') {
        (s as any).temp_strip_sched = 0;
      }
      if (((s as any).temp_strip_sched ?? 0) === 1) {
        if (((s as any).w1 ?? 0) === 5  ||  ((s as any).w1 ?? 0) === 6) {
          (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Working as a bargirl at Golden Girls. <i>(Arrive ' + qspFunc(s, 'time', 'get_time_string', 17, 0) + '-' + qspFunc(s, 'time', 'get_time_string', 18, 0) + ', shift ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + '-' + qspFunc(s, 'time', 'get_time_string', 3, 0) + ')</i>';
        }
        if (((s as any).w1 ?? 0) === 6) {
          (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<i>Bargirl payday.</i>';
        }
      } else {
        if (((s as any).w1 ?? 0) === 3  ||  ((s as any).w1 ?? 0) === 4) {
          (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Working as a bargirl at Golden Girls. <i>(Arrive ' + qspFunc(s, 'time', 'get_time_string', 17, 0) + '-' + qspFunc(s, 'time', 'get_time_string', 18, 0) + ', shift ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + '-' + qspFunc(s, 'time', 'get_time_string', 3, 0) + ')</i>';
        }
        if (((s as any).w1 ?? 0) === 4) {
          (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<i>Bargirl payday.</i>';
        }
      }
      (s as any).temp_strip_sched = undefined;
    }
    (s as any).temp_tel_pf_type = qspFunc(s, 'jobs', 'get_booking_data_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + ((s as any).i ?? 0));
    if (((s as any).temp_tel_pf_type ?? 0) !== '') {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Porn shoot: <i>' + (((s as any).porndesc ?? 0)?.[parseFloat(((s as any).temp_tel_pf_type ?? 0))] ?? 0) + '</i>';
    }
    (s as any).temp_tel_pf_type = undefined;
    if (((s as any).d1 ?? 0) === 25  &&  (((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed'  ||  ((s as any).tanwork ?? 0) === 1  ||  ((s as any).job_status ?? 0)?.['pav_factory'] === 'employed')) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<i>Pay day!</i>';
    }
    if (((s as any).d1 ?? 0) === ((s as any).nyp_day ?? 0)  &&  ((s as any).m1 ?? 0) === 12  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'New Year\'s party at ' + qspFunc(s, 'time', 'get_time_string', 14, 0) + '!';
    }
    if ((((s as any).npc_QW ?? 0)?.['A33']-2) % 2 === 1  &&  ((s as any).sisboyday ?? 0)+1 === ((s as any).daynum ?? 0)) {
      if (((s as any).sisboytrioQW ?? 0) === 1) {
        (s as any).calendarday = ((s as any).calendarday ?? 0) + (((s as any).list ?? 0) + '<font color="orange">Threesome with Anya and Roma at ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + '</font>');
      } else {
        (s as any).calendarday = ((s as any).calendarday ?? 0) + (((s as any).list ?? 0) + '<font color="orange">Anya having sex with Roma at ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + '</font>');
      }
    }
    if (((s as any).sisboyparty ?? 0) === 2  &&  ((s as any).sisboyparty_day ?? 0)+1 === ((s as any).daynum ?? 0)) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + '<font color="orange">Party at Rex\'s, gathering before ' + qspFunc(s, 'time', 'get_time_string', 18, 0) + ' at Community Center</font>';
    }
    if ((!((s as any).rent1 ?? 0))) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Rent on city apartment expires!';
    }
    if ((!((s as any).rent4 ?? 0))) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Rent on Pushkin apartment expires!';
    }
    if (((s as any).birthday ?? 0) === ((s as any).d1 ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).m1 ?? 0)) {
      (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'My birthday!';
    }
    if (((s as any).kid ?? 0) > 0) {
      (s as any).k1 = ((s as any).kid ?? 0);
      while (true) {
        if (((s as any).daykid ?? 0)?.[String((s as any).k1 ?? 0)] === ((s as any).d1 ?? 0)  &&  ((s as any).monthkid ?? 0)?.[String((s as any).k1 ?? 0)] === ((s as any).m1 ?? 0)) {
          (s as any).calendarday = ((s as any).calendarday ?? '') + ((s as any).list ?? 0) + 'Birthday of my ' + (((s as any).polreb ?? 0)?.[String((s as any).k1 ?? 0)] ?? 0) + ' ' + (((s as any).kidname ?? 0)?.[String((s as any).k1 ?? 0)] ?? 0) + ', my ' + ((s as any).kid ?? 0) + '. baby!';
        }
        if (((s as any).k1 ?? 0) > 1) {
          (s as any).k1 = ((s as any).k1 ?? 0) - (1);
          break;
        }
      }
    }
    if (((s as any).calendarday ?? 0) !== '') {
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<b>' + (((s as any).monthName ?? 0)?.[String((s as any).m1 ?? 0)] ?? 0) + ' ' + ((s as any).d1 ?? 0) + ', ' + (((s as any).weekName ?? 0)?.[String((s as any).w1 ?? 0)] ?? 0) + ':</b>');
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (((s as any).calendarday ?? 0) + '<br>');
    }
    if (((s as any).i ?? 0) < 14) {
      (s as any).rent1 = ((s as any).rent1 ?? 0) - (1);
      (s as any).rent4 = ((s as any).rent4 ?? 0) - (1);
      (s as any).i = ((s as any).i ?? 0) + (1);
      (s as any).ds1 = ((s as any).ds1 ?? 0) + (1);
      qspCall(s, 'time', 'to_date', ((s as any).ds1 ?? 0));
      (s as any).w1 = (((s as any).dateVars ?? 0)?.['week']);
      (s as any).d1 = (((s as any).dateVars ?? 0)?.['day']);
      (s as any).m1 = (((s as any).dateVars ?? 0)?.['month']);
      (s as any).y1 = (((s as any).dateVars ?? 0)?.['year']);
      break;
    }
    (s as any).calendarday = undefined;
    (s as any).rent1 = undefined;
    (s as any).rent4 = undefined;
    (s as any).d1 = undefined;
    (s as any).w1 = undefined;
    (s as any).m1 = undefined;
    (s as any).y1 = undefined;
    (s as any).daynum = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterPhoneWheather(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Weather</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_weather.png"><br><br>\n<b>Temperature:</b><br>\n' + ((s as any).temperature ?? 0) + '. ' + ((s as any).osadki ?? 0) + '<br>\nP.O.P. today is ' + ((s as any).weatherFall ?? 0) + '%<br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneContactlist(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Contacts</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_call.png"><br><br>\n<table cellspacing="0" width="80%">';
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
      if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
        ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'format_contact_string', (((s as any).contactIcon ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0), (((s as any).npc_nickname ?? 0)?.[(((s as any).contact ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0)] ?? 0), (((s as any).contactOCode ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0), (((s as any).contactOSche ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0)));
      }
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    (s as any).telefon_i = undefined;
    if (((s as any).telalla ?? 0) > 0) {
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'format_contact_string', 'icon_ira1', 'Alla', '$telsob === \'Alla\' & gt \'lover_call\', \'mobilaraz\'', 'hour >= 8  &&  hour <= 20'));
    }
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterFormatContactString(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['ContactNickName'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['ContactCallCode'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).telefon = (s as any).telefon ?? {})['ContactCallSchedule'] = ((s as any).locArgs?.[4] ?? 0);
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('.'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if ((!((String(((s as any).telefon ?? 0)?.['ContactIcon']).indexOf(String('/'))) + 1))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactIcon'] = 'images/system/phone/icons/' + (((s as any).telefon ?? 0)?.['ContactIcon']);
  }
  if ((!(0 as any))) {
    ((s as any).telefon = (s as any).telefon ?? {})['ContactCallCode'] = 'gs \'telefon\', \'phone_call_reject\'';
  }
  (s as any).result = '<tr>';
  (s as any).result = ((s as any).result ?? 0) + ('<td><img width="75" src="' + (((s as any).telefon ?? 0)?.['ContactIcon']) + '"></td>');
  (s as any).result = ((s as any).result ?? 0) + ('<td>' + (((s as any).telefon ?? 0)?.['ContactNickName']) + '</td>');
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0  &&  ((s as any).subscription ?? 0)?.['metered_calls'] < 4) {
    (s as any).result = ((s as any).result ?? 0) + ('<td align="right"><b>Call</b></td>');
  } else {
    // TODO-QSP: $result += '<td align="right"><b><a href="exec:$callerid = ''<<$telefon[''ContactIcon'']>>'' & <<$telefon[''ContactCallCode'']>>">Call</a></b></td>'
  }
  (s as any).result = ((s as any).result ?? 0) + ('</tr>');
  scene.build();
}

function enterPhoneSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>SMS</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/' + ((((s as any).telefon ?? 0)?.['UnreadSMS']===0) ? ('icon_sms.png') : ('icon_sms_new.gif')) + '"><br>';
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<b><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027telefon\u0027, \u0027send_sms\u0027); return false;">Send new SMS</a></b><br>');
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%"><tr><th>Icon</th><th>Name</th><th align="right">Received</th><th></th></tr>');
  ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = 0;
  (s as any).telefon_i = 0;
  while (true) {
    if (((s as any).telefon_i ?? 0) < Object.keys((s as any).SMSContact ?? {}).length) {
      ((s as any).telefon = (s as any).telefon ?? {})['contactid'] = qspUntranslated(s, "arrpos('contact', SMSContact[telefon_i])", { location: "telefon" });
      if (((s as any).telefon ?? 0)?.['contactid'] === -1) {
        ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPCName'] = '';
        ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = 'icon_na.png';
      } else {
        ((s as any).telefonCon = (s as any).telefonCon ?? {})['NPCName'] = (((s as any).npc_nickname ?? 0)?.[qspUntranslated(s, "contact[telefon['contactid']]", { location: "telefon" })] ?? 0);
        ((s as any).telefonCon = (s as any).telefonCon ?? {})['Icon'] = qspUntranslated(s, "contactIcon[telefon['contactid']]", { location: "telefon" });
      }
      if (((s as any).SMSMessageRead ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
        ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
      }
      ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_sms_row', ((s as any).telefon_i ?? 0), (((s as any).telefonCon ?? 0)?.['Icon']), (((s as any).telefonCon ?? 0)?.['NPCName']), (((s as any).SMSTime ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0), (((s as any).SMSMessageRead ?? 0)?.[String((s as any).telefon_i ?? 0)] ?? 0)));
      (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
      break;
    }
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('<b><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027telefon\u0027, \u0027delete_sms\u0027, \u00270\u0027); return false;">Delete All</a></b><br>');
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).telefon_i = undefined;
  }
  scene.build();
}

function enterPhoneMegafon(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] < ((s as any).day ?? 0)) {
      (s as any).contractmessage = 'You have a valid monthly contract that will renew on ' + (((s as any).subscription ?? 0)?.['monthly_calls-date']) + '/' + ((s as any).month ?? 0) + '';
    } else {
      (s as any).contractmessage = 'You have a valid monthly contract that will renew on ' + (((s as any).subscription ?? 0)?.['monthly_calls-date']) + '/' + Math.max(1, ((s as any).month ?? 0) + 1 % 12) + '';
    }
  } else {
    if (((s as any).subscription ?? 0)?.['metered_calls'] >= 4) {
      (s as any).contractmessage = 'You have a valid minutes based contract that still has ' + (((s as any).subscription ?? 0)?.['metered_calls']) + ' minutes left';
    } else {
      if (((s as any).subscription ?? 0)?.['monthly_calls-date'] > 0) {
        (s as any).contractmessage = '<font size=6>Your mobile contract has expired, you have renew it or buy some minutes.</font><br>';
      } else {
        if (((s as any).subscription ?? 0)?.['metered_calls-date'] > 0) {
          (s as any).contractmessage = '<font size=6>You have a minute based plan, but it doesn\'t have enough minutes left to make a call</font><br>';
        } else {
          (s as any).contractmessage = '<font size=6>You don\'t have any valid contracts, you should buy one at MegaFon.</font><br>';
        }
      }
    }
  }
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>MegaFon</font><br>\n<img height="80" width="80" src="images/system/phone/theme/' + (((s as any).phonetheme_name ?? 0)?.[String((s as any).pcs_phonetheme ?? 0)] ?? 0) + '/icon_megafon.png"><br><br>\n<b>' + ((s as any).contractmessage ?? 0) + '</b>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).contractmessage = undefined;
  scene.build();
}

function enterPhoneRing(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>' + ((s as any).caller ?? 0) + ' calling</font><br>\n<img src="' + ((s as any).callerid ?? 0) + '"><br>\n<br>\n<br>\n<br>\n<br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneCallReceive(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Talking to ' + ((s as any).caller ?? 0) + '</font><br>\n<img src="' + ((s as any).callerid ?? 0) + '"><br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneBalance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0  &&  ((s as any).subscription ?? 0)?.['metered_calls'] < 4) {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] > 0) {
      (s as any).contractmessage = '<font size=6>Your mobile contract has expired, you have renew it or buy some minutes.</font><br>';
    } else {
      if (((s as any).subscription ?? 0)?.['metered_calls-date'] > 0) {
        (s as any).contractmessage = '<font size=6>Not enough minutes left on your contract to make a call</font><br>';
      } else {
        (s as any).contractmessage = '<font size=6>You don\'t have a valid contract, you should buy one at MegFon.</font><br>';
      }
    }
    ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n' + ((s as any).contractmessage ?? 0) + '\n<img src="' + ((s as any).callerid ?? 0) + '"><br><br>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_menu\u0027\u0027); return false;"><img src="images/system/phone/decline.png"></a><br>';
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).contractmessage = undefined;
    dynamicGoto(s, 'prevLoc', 'prevArg');
  } else {
    if (((s as any).subscription ?? 0)?.['metered_calls'] >= 4) {
      ((s as any).subscription = (s as any).subscription ?? {})['metered_calls'] = ((s as any).subscription['metered_calls'] ?? 0) - (4);
    }
  }
  scene.build();
}

function enterPhoneCall(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Calling ' + (((s as any).npc_nickname ?? 0)?.['A29']) + '</font><br>\n<img src="images/system/phone/icons/icon_npc1.png"><br><br>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_contactlist\u0027\u0027); return false;"><img src="images/system/phone/decline.png"></a><br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).callerid = 'images/system/phone/icons/icon_npc1.png';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneBalance(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).callerid = 'images/system/phone/icons/icon_npc1.png';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPhoneCallReject(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterPhoneCallReject(s: GameState, scene: SceneBuilder): void {
  ((s as any).telefon = (s as any).telefon ?? {})['body'] = '\n<font size=6>Calling…</font><br>\n<img src="' + ((s as any).callerid ?? 0) + '"><br><br>\n<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027\u0027telefon\u0027\u0027, \u0027\u0027Phone_contactlist\u0027\u0027); return false;"><img src="images/system/phone/decline.png"></a><br>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterEdit_CustomList(s: GameState, scene: SceneBuilder): void {
  (s as any).dummyas = 0;
  while (true) {
    (s as any).dummyas = ((s as any).dummyas ?? 0) - (1);
    if (((s as any).dummyas ?? 0) >= 0) {
      (s as any).dummyedit = (((s as any).contact ?? 0)?.[String((s as any).dummyas ?? 0)] ?? 0);
      (s as any).dummyedit1 = 0;
      (s as any).dummyedit2 = (String(((s as any).dummyedit ?? 0)).split('<b>Call</b>').join(((s as any).dummyedit1 ?? 0)));
      scene.text(String((s as any).dummyedit2 ?? ''));
      break;
    }
    (s as any).dummyas = undefined;
    (s as any).dummyedit = undefined;
    (s as any).dummyedit1 = undefined;
    (s as any).dummyedit2 = undefined;
    scene.text('<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027telefon\u0027, \u0027Phone_menu\u0027); return false;"><img src="images/system/icons/back.png"></a></center>');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'AddContact':
      enterAddContact(s, scene);
      break;
    case 'DeleteContact':
      enterDeleteContact(s, scene);
      break;
    case 'SetCallSchedule':
      enterSetCallSchedule(s, scene);
      break;
    case 'SetInCallSchedule':
      enterSetInCallSchedule(s, scene);
      break;
    case 'SetOutCallSchedule':
      enterSetOutCallSchedule(s, scene);
      break;
    case 'ClearCallSchedule':
      enterClearCallSchedule(s, scene);
      break;
    case 'ClearInCallSchedule':
      enterClearInCallSchedule(s, scene);
      break;
    case 'ClearOutCallSchedule':
      enterClearOutCallSchedule(s, scene);
      break;
    case 'SetSMSSchedule':
      enterSetSMSSchedule(s, scene);
      break;
    case 'SetInSMSSchedule':
      enterSetInSMSSchedule(s, scene);
      break;
    case 'SetOutSMSSchedule':
      enterSetOutSMSSchedule(s, scene);
      break;
    case 'ClearSMSSchedule':
      enterClearSMSSchedule(s, scene);
      break;
    case 'ClearInSMSSchedule':
      enterClearInSMSSchedule(s, scene);
      break;
    case 'ClearOutSMSSchedule':
      enterClearOutSMSSchedule(s, scene);
      break;
    case 'Phone_selfie_image_bathing':
      enterPhoneSelfieImageBathing(s, scene);
      break;
    case 'DailyStatRefresh':
      enterDailyStatRefresh(s, scene);
      break;
    case 'IncomingCheck':
      enterIncomingCheck(s, scene);
      break;
    case 'IncomingCallChooser':
      enterIncomingCallChooser(s, scene);
      break;
    case 'IncomingCall':
      enterIncomingCall(s, scene);
      break;
    case 'add_sms':
      enterAddSms(s, scene);
      break;
    case 'delete_sms':
      enterDeleteSms(s, scene);
      break;
    case 'delete_send_id':
      enterDeleteSendId(s, scene);
      break;
    case 'show_sms_from_id':
      enterShowSmsFromId(s, scene);
      break;
    case 'show_sms':
      enterShowSms(s, scene);
      break;
    case 'get_sms_row':
      enterGetSmsRow(s, scene);
      break;
    case 'send_sms':
      enterSendSms(s, scene);
      break;
    case 'get_contactsms_row':
      enterGetContactsmsRow(s, scene);
      break;
    case 'npcSendListSms':
      enterNpcSendListSms(s, scene);
      break;
    case 'get_sms_send_row':
      enterGetSmsSendRow(s, scene);
      break;
    case 'smsSendMessage':
      enterSmsSendMessage(s, scene);
      break;
    case 'add_sms_to_send':
      enterAddSmsToSend(s, scene);
      break;
    case 'delete_sms_send_index':
      enterDeleteSmsSendIndex(s, scene);
      break;
    case 'delete_sms_send_id':
      enterDeleteSmsSendId(s, scene);
      break;
    case 'IncomingSMSCheck':
      enterIncomingSMSCheck(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'display':
      enterDisplay(s, scene);
      break;
    case 'get_header_string':
      enterGetHeaderString(s, scene);
      break;
    case 'get_footer_string':
      enterGetFooterString(s, scene);
      break;
    case 'Phone_menu':
      enterPhoneMenu(s, scene);
      break;
    case 'Phone_camera':
      enterPhoneCamera(s, scene);
      break;
    case 'Phone_calendar':
      enterPhoneCalendar(s, scene);
      break;
    case 'Phone_pictures':
      enterPhonePictures(s, scene);
      break;
    case 'Phone_media':
      enterPhoneMedia(s, scene);
      break;
    case 'Phone_notebook':
      enterPhoneNotebook(s, scene);
      break;
    case 'Phone_wheather':
      enterPhoneWheather(s, scene);
      break;
    case 'Phone_contactlist':
      enterPhoneContactlist(s, scene);
      break;
    case 'format_contact_string':
      enterFormatContactString(s, scene);
      break;
    case 'Phone_sms':
      enterPhoneSms(s, scene);
      break;
    case 'Phone_megafon':
      enterPhoneMegafon(s, scene);
      break;
    case 'phone_ring':
      enterPhoneRing(s, scene);
      break;
    case 'phone_call_receive':
      enterPhoneCallReceive(s, scene);
      break;
    case 'phone_balance':
      enterPhoneBalance(s, scene);
      break;
    case 'Phone_call':
      enterPhoneCall(s, scene);
      break;
    case 'phone_call_reject':
      enterPhoneCallReject(s, scene);
      break;
    case 'Edit_Custom_list':
      enterEdit_CustomList(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const telefon: LocationDef = {
  name: 'telefon',
  title: 'Your phone is disabled for this event',
  region: 'other',
  enter: enter,
};
