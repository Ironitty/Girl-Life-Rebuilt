import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAddContact(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['Icon'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonCon['Anonymous'] = qspUntranslated(s, "ARGS[3]", { location: "telefon" });
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    (s as any).telefonCon['ContactListID'] = 0;
    // TODO-QSP: $contact[telefonCon['ContactListID']] = $telefonCon['NPC']
    // TODO-QSP: $contactOCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactOSche[telefonCon['ContactListID']] = "0"
    // TODO-QSP: $contactICode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactISche[telefonCon['ContactListID']] = "0"
    // TODO-QSP: $contactOSMSCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactOSMSSche[telefonCon['ContactListID']] = "0"
    // TODO-QSP: $contactISMSCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactISMSSche[telefonCon['ContactListID']] = "0"
  }
  // TODO-QSP: $contactIcon[telefonCon['ContactListID']] = $telefonCon['Icon']
  // TODO-QSP: contactAnon[telefonCon['ContactListID']] = telefonCon['Anonymous']
  scene.build();
}

function enterDeleteContact(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
  }
  scene.build();
}

function enterSetCallSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'SetOutCallSchedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'telefon', 'SetInCallSchedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0));
  scene.build();
}

function enterSetInCallSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    // TODO-QSP: gs 'telefon', 'AddContact', $telefonCon['NPC'], 'icon_na', 1
    (s as any).telefonCon['ContactListID'] = 0;
  }
  (s as any).telefonCon['InCode'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonCon['InSched'] = ((((s as any).locArgs?.[3] ?? 0) === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  // TODO-QSP: $contactICode[telefonCon['ContactListID']] = $telefonCon['InCode']
  // TODO-QSP: $contactISche[telefonCon['ContactListID']] = $telefonCon['InSched']
  scene.build();
}

function enterSetOutCallSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    // TODO-QSP: gs 'telefon', 'AddContact', $telefonCon['NPC'], 'icon_na', 1
    (s as any).telefonCon['ContactListID'] = 0;
  }
  (s as any).telefonCon['OutCode'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonCon['OutSched'] = ((((s as any).locArgs?.[3] ?? 0) === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  // TODO-QSP: $contactOCode[telefonCon['ContactListID']] = $telefonCon['OutCode']
  // TODO-QSP: $contactOSche[telefonCon['ContactListID']] = $telefonCon['OutSched']
  scene.build();
}

function enterClearCallSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInCallSchedule', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'telefon', 'ClearOutCallSchedule', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterClearInCallSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    // TODO-QSP: $contactICode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactISche[telefonCon['ContactListID']] = "0"
  }
  scene.build();
}

function enterClearOutCallSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    // TODO-QSP: $contactOCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactOSche[telefonCon['ContactListID']] = "0"
  }
  scene.build();
}

function enterSetSMSSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'SetOutSMSSchedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0));
  qspCall(s, 'telefon', 'SetInSMSSchedule', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0));
  scene.build();
}

function enterSetInSMSSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    // TODO-QSP: gs 'telefon', 'AddContact', $telefonCon['NPC'], 'icon_na', 1
    (s as any).telefonCon['ContactListID'] = 0;
  }
  (s as any).telefonCon['InSMSCode'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonCon['InSMSSched'] = ((((s as any).locArgs?.[3] ?? 0) === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  // TODO-QSP: $contactISMSCode[telefonCon['ContactListID']] = $telefonCon['InSMSCode']
  // TODO-QSP: $contactISMSSche[telefonCon['ContactListID']] = $telefonCon['InSMSSched']
  scene.build();
}

function enterSetOutSMSSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] < 0) {
    // TODO-QSP: gs 'telefon', 'AddContact', $telefonCon['NPC'], 'icon_na', 1
    (s as any).telefonCon['ContactListID'] = 0;
  }
  (s as any).telefonCon['OutSMSCode'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonCon['OutSMSSched'] = ((((s as any).locArgs?.[3] ?? 0) === '') ? ('0') : (((s as any).locArgs?.[3] ?? 0)));
  // TODO-QSP: $contactOSMSCode[telefonCon['ContactListID']] = $telefonCon['OutSMSCode']
  // TODO-QSP: $contactOSMSSche[telefonCon['ContactListID']] = $telefonCon['OutSMSSched']
  scene.build();
}

function enterClearSMSSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearOutSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterClearInSMSSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    // TODO-QSP: $contactISMSCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactISMSSche[telefonCon['ContactListID']] = "0"
  }
  scene.build();
}

function enterClearOutSMSSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonCon['NPC'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonCon['ContactListID'] = qspUntranslated(s, "arrpos('contact', telefonCon['NPC'])", { location: "telefon" });
  if (((s as any).telefonCon ?? 0)?.['ContactListID'] >= 0) {
    // TODO-QSP: $contactOSMSCode[telefonCon['ContactListID']] = ""
    // TODO-QSP: $contactOSMSSche[telefonCon['ContactListID']] = "0"
  }
  scene.build();
}

function enterPhoneSelfieImageBathing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 5);
  qspCall(s, 'phone_selfies', 'camera_take_selfie_bathing', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterDailyStatRefresh(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  // TODO-QSP: :DailyStatRefLoop
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
    (s as any).contactToday[String((s as any).telefon_i ?? 0)] = 0;
    if (((s as any).ARGS ?? 0)[1] === 1) {
      (s as any).contactWeek[String((s as any).telefon_i ?? 0)] = 0;
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'DailyStatRefLoop'
  }
  scene.build();
}

function enterIncomingCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).telefIncCheck['PrevTotalMinutes'] = qspUntranslated(s, "ARGS[1]", { location: "telefon" });
  (s as any).telefIncCheck['NewTotalMinutes'] = qspUntranslated(s, "ARGS[2]", { location: "telefon" });
  if (((s as any).telefIncCheck ?? 0)?.['PrevTotalMinutes'] > ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']  ||  ((s as any).telefon ?? 0)?.['LastIncCallCheck'] > ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes']  ||  ((s as any).telefon ?? 0)?.['LastIncCallCheck'] === 0) {
    (s as any).telefon['LastIncCallCheck'] = ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes'];
  }
  if (((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes'] - ((s as any).telefon ?? 0)?.['LastIncCallCheck'] > 60  &&  (((s as any).menu_off ?? 0) === 0  &&  ((s as any).phone_off ?? 0) === 0  ||  ((s as any).phone_on ?? 0) === 1)) {
    (s as any).telefon['LastIncCallCheck'] = ((s as any).telefIncCheck ?? 0)?.['NewTotalMinutes'];
    qspCall(s, 'telefon', 'IncomingCallChooser');
  }
  scene.build();
}

function enterIncomingCallChooser(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  // TODO-QSP: :telefonIncLoop1
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
    if (((s as any).contactICode ?? 0)?.[String((s as any).telefon_i ?? 0)] !== "") {
      if ((0 as any)) {
        (s as any).telefon_j = 0;
        if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 1) {
          // TODO-QSP: $telefIncIcon[telefon_j] = "images/system/phone/decline.png"
          // TODO-QSP: $telefIncName[telefon_j] = "Unknown Caller"
        } else {
          // TODO-QSP: $telefIncIcon[telefon_j] = $contactIcon[telefon_i]
          // TODO-QSP: $telefIncName[telefon_j] = $npc_nickname[$contact[telefon_i]]
        }
        // TODO-QSP: $telefIncCall[telefon_j] = $contactICode[telefon_i]
        // TODO-QSP: $telefIncNPC[telefon_j] = $contact[telefon_i]
      }
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'telefonIncLoop1'
  }
  if (Object.keys((s as any).telefIncCall ?? {}).length > 0) {
    (s as any).telefon_j = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).telefIncCall ?? 0)')-1);
    if (((s as any).telefIncNPC ?? 0)?.[String((s as any).telefon_j ?? 0)] !== "") {
      (s as any).telefon_i = qspUntranslated(s, "arrpos('contact', telefIncNPC[telefon_j])", { location: "telefon" });
      (s as any).contactLastCall[String((s as any).telefon_i ?? 0)] = ((s as any).totminut ?? 0);
      (s as any).contactToday[String((s as any).telefon_i ?? 0)] = ((s as any).contactToday[String((s as any).telefon_i ?? 0)] ?? 0) + (1);
      (s as any).contactWeek[String((s as any).telefon_i ?? 0)] = ((s as any).contactWeek[String((s as any).telefon_i ?? 0)] ?? 0) + (1);
    }
    // TODO-QSP: gs 'telefon', 'IncomingCall', $telefIncIcon[telefon_j], $telefIncName[telefon_j], $telefIncCall[tele...
  }
  scene.build();
}

function enterIncomingCall(s: GameState, scene: SceneBuilder): void {
  (s as any).telefonIncC['Icon'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefonIncC['Name'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefonIncC['Code'] = ((s as any).locArgs?.[3] ?? 0);
  if (((s as any).sound_settings ?? 0)?.['menu_off'] === 0) {
  }
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6><<$telefonIncC["Name"]>> calling</font><br>
  // TODO-QSP: <img width="200" src="<<$telefonIncC["Icon"]>>"><br>
  // TODO-QSP: <br>
  // TODO-QSP: <br>
  // TODO-QSP: <br>
  // TODO-QSP: <a href="exec:<<$telefonIncC["Code"]>>"><img src="images/system/phone/call_accept.png"></a>
  // TODO-QSP: <a href="exec:gt $loc, $loc_arg"><img src="images/system/phone/decline.png"></a><br>
  // TODO-QSP: <b><font color="red">Your phone is ringing</font></b><br>'
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterAddSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSLastID'] = ((s as any).telefon['SMSLastID'] ?? 0) + (1);
  (s as any).telefon['SMSidentifier'] = ((s as any).telefon ?? 0)?.['SMSLastID'];
  (s as any).telefon['SMSIndex'] = ((s as any).telefon ?? 0)?.['SMSCount'];
  (s as any).telefon['SMSCount'] = ((s as any).telefon['SMSCount'] ?? 0) + (1);
  (s as any).telefon['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
  // TODO-QSP: SMSIdentifier[telefon['SMSIndex']] = telefon['SMSidentifier']
  // TODO-QSP: $SMSContact[telefon['SMSIndex']] = $ARGS[1]
  // TODO-QSP: $SMSMessage[telefon['SMSIndex']] = $ARGS[2]
  // TODO-QSP: $SMSReplies[telefon['SMSIndex']] = $ARGS[3]
  // TODO-QSP: $SMSTime[telefon['SMSIndex']] = "<<$func('time', 'get_time_string', hour, minut)>> <<$weekName>> <<d...
  // TODO-QSP: $SMSPicture1[telefon['SMSIndex']] = $ARGS[4]
  // TODO-QSP: $SMSPicture2[telefon['SMSIndex']] = $ARGS[5]
  // TODO-QSP: $SMSPicture3[telefon['SMSIndex']] = $ARGS[6]
  // TODO-QSP: $SMSPicture4[telefon['SMSIndex']] = $ARGS[7]
  // TODO-QSP: SMSMessageRead[telefon['SMSIndex']] = 0
  scene.build();
}

function enterDeleteSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSIndex'] = qspUntranslated(s, "ARGS[1]", { location: "telefon" });
  (s as any).telefon['SMSCount'] = ((s as any).telefon['SMSCount'] ?? 0) - (1);
  if (((s as any).locArgs?.[2] ?? 0) === 'all'  &&  ((s as any).telefon ?? 0)?.['SMSCount'] > 0) {
    qspCall(s, 'telefon', 'delete_sms', '0', 'all');
  } else {
    qspCall(s, 'telefon', 'Phone_sms');
  }
  scene.build();
}

function enterDeleteSendId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    qspCall(s, 'telefon', 'delete_sms', ((s as any).telefon_i ?? 0));
  }
  scene.build();
}

function enterShowSmsFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    qspCall(s, 'telefon', 'show_sms', ((s as any).telefon_i ?? 0));
  }
  scene.build();
}

function enterShowSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSIndex'] = qspUntranslated(s, "ARGS[1]", { location: "telefon" });
  (s as any).telefon['SMSidentifier'] = qspUntranslated(s, "SMSIdentifier[telefon['SMSIndex']]", { location: "telefon" });
  if (((s as any).SMSMessageRead ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] === 0) {
    (s as any).telefon['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) - (1);
    // TODO-QSP: SMSMessageRead[telefon['SMSIndex']] = 1
  }
  (s as any).telefon['contactid'] = qspUntranslated(s, "arrpos('contact', SMSContact[telefon['SMSIndex']])", { location: "telefon" });
  if (((s as any).telefon ?? 0)?.['contactid'] === -1) {
    (s as any).telefonCon['NPCName'] = '';
    (s as any).telefonCon['Icon'] = 'icon_na.png';
  } else {
    (s as any).telefonCon['NPCName'] = ((s as any).npc_nickname ?? 0)?.[qspUntranslated(s, "contact[telefon['contactid']]", { location: "telefon" })];
    (s as any).telefonCon['Icon'] = qspUntranslated(s, "contactIcon[telefon['contactid']]", { location: "telefon" });
  }
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('.'))) + 1 === 0) {
    (s as any).telefonCon['Icon'] = ((s as any).telefonCon['Icon'] ?? 0) + ('.png');
  }
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('/'))) + 1 === 0) {
    (s as any).telefonCon['Icon'] = '((s as any).images ?? 0)/((s as any).system ?? 0)/((s as any).phone ?? 0)/((s as any).icons ?? 0)/' + ((s as any).telefonCon ?? 0)?.['Icon'];
  }
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>SMS</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/<<ii...
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><table><tr><td align="right" valign="middle"><img height=100 src="<<$telefonCon[\'Icon\']>>"></td><td valign="middle"><<$telefonCon[\'NPCName\']>></td></tr></table></tr>');
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><<$SMSMessage[telefon[\'SMSIndex\']]>></td></tr>');
  if (((s as any).SMSReplies ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><th> </th></tr>');
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><<$SMSReplies[telefon[\'SMSIndex\']]>></td></tr>');
  }
  if (((s as any).SMSPicture1 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="<<$SMSPicture1[telefon[\'SMSIndex\']]>>"></td></tr>');
  }
  if (((s as any).SMSPicture2 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="<<$SMSPicture2[telefon[\'SMSIndex\']]>>"></td></tr>');
  }
  if (((s as any).SMSPicture3 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="<<$SMSPicture3[telefon[\'SMSIndex\']]>>"></td></tr>');
  }
  if (((s as any).SMSPicture4 ?? 0)[((s as any).telefon ?? 0)?.['SMSIndex']] !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<tr><td><img src="<<$SMSPicture4[telefon[\'SMSIndex\']]>>"></td></tr>');
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  (s as any).telefon['backButton'] = 'gs \'telefon\', \'Phone_sms\' ';
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterGetSmsRow(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSIndex'] = qspUntranslated(s, "ARGS[1]", { location: "telefon" });
  (s as any).telefon['ContactIcon'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefon['ContactNickName'] = ((s as any).locArgs?.[3] ?? 0);
  (s as any).telefon['SMSTime'] = ((s as any).locArgs?.[4] ?? 0);
  (s as any).telefon['SMSStatus'] = qspUntranslated(s, "ARGS[5]", { location: "telefon" });
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('.'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('/'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = '((s as any).images ?? 0)/((s as any).system ?? 0)/((s as any).phone ?? 0)/((s as any).icons ?? 0)/' + ((s as any).telefon ?? 0)?.['ContactIcon'];
  }
  if (((s as any).telefon ?? 0)?.['SMSStatus'] === 0) {
    (s as any).telefon['SMSstyle1'] = '<b>';
    (s as any).telefon['SMSstyle2'] = '</b>';
  } else {
    (s as any).telefon['SMSstyle1'] = '';
    (s as any).telefon['SMSstyle2'] = '';
  }
  // TODO-QSP: <td><img height=100 src="<<$telefon[''ContactIcon'']>>"></td>
  // TODO-QSP: <td><<$telefon[''SMSstyle1'']>><<$telefon[''ContactNickName'']>><<$telefon[''SMSstyle2'']>></td>
  // TODO-QSP: <td align="right"><<$telefon[''SMSstyle1'']>><a href="exec:gs ''telefon'', ''show_sms'', <<telefon['...
  // TODO-QSP: <td><<$telefon[''SMSstyle1'']>><a href="exec:gs ''telefon'', ''delete_sms'', <<telefon[''SMSIndex'']...
  // TODO-QSP: </tr>'
  return;
  scene.build();
}

function enterSendSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['backButton'] = 'gs \'telefon\', \'Phone_sms\'';
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Send SMS</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/<<ii...
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0) {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<br/>');
    if (((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] > 0) {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<b>You still can send <<subscription[\'metered_calls-sms_limit\']>> text messages on your contract</b>');
    } else {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<b>You have run out of text messages on your contract</b>');
    }
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).telefon_i = 0;
  // TODO-QSP: :smscontactloop
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
    if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_contactsms_row', ((s as any).telefon_i ?? 0)));
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'smscontactloop'
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterGetContactsmsRow(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['ContactIcon'] = qspUntranslated(s, "contactIcon[ARGS[1]]", { location: "telefon" });
  (s as any).telefon['ContactNPCcode'] = qspUntranslated(s, "contact[ARGS[1]]", { location: "telefon" });
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('.'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('/'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = '((s as any).images ?? 0)/((s as any).system ?? 0)/((s as any).phone ?? 0)/((s as any).icons ?? 0)/' + ((s as any).telefon ?? 0)?.['ContactIcon'];
  }
  // TODO-QSP: $result +=    '<td><img width="75" src="<<$telefon[''ContactIcon'']>>"></td>'
  // TODO-QSP: $result +=    '<td><<$npc_nickname[$telefon[''ContactNPCcode'']]>></td>'
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0  &&  ((s as any).subscription ?? 0)?.['metered_calls-sms_limit'] <= 0) {
    // TODO-QSP: $result +=  '<td>New Message</td>'
  } else {
    // TODO-QSP: $result +=  '<td><a href="exec:gs ''telefon'', ''npcSendListSms'', ''<<$telefon[''ContactNPCcode'']>...
  }
  // TODO-QSP: $result +=  '</tr>'
  return;
  scene.build();
}

function enterNpcSendListSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['backButton'] = 'gs \'telefon\', \'send_sms\' ';
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Send SMS</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/<<ii...
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%">');
  (s as any).telefon_i = 0;
  // TODO-QSP: :npcSendListSmsLoop
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).SMSSendContact ?? {}).length) {
    if (((s as any).SMSSendContact ?? 0)?.[String((s as any).telefon_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_sms_send_row', ((s as any).telefon_i ?? 0)));
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'npcSendListSmsLoop'
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterGetSmsSendRow(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['ContactNPCcode'] = qspUntranslated(s, "SMSSendContact[ARGS[1]]", { location: "telefon" });
  // TODO-QSP: <tr>
  // TODO-QSP: <td><<$npc_nickname[$telefon[''ContactNPCcode'']]>></td>
  // TODO-QSP: <td><a href="exec: gs ''telefon'', ''smsSendMessage'', ''<<ARGS[0]>>''"><<$SMSSendMessage[ARGS[0]]>>...
  // TODO-QSP: </tr>'
  return;
  scene.build();
}

function enterSmsSendMessage(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$SMSSendCode[ARGS[1]]>>'
  qspCall(s, 'internet_mobile', 'send_sms');
  if (((s as any).SMSSendRepeatable ?? 0)[((s as any).ARGS ?? 0)[1]] === 0) {
    // TODO-QSP: gs 'telefon', 'delete_sms_send_index', ARGS[1]
  }
  qspCall(s, 'telefon', 'Phone_sms');
  scene.build();
}

function enterAddSmsToSend(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSSendid'] = 0;
  (s as any).telefon['SMSSendLastID'] = ((s as any).telefon['SMSSendLastID'] ?? 0) + (1);
  // TODO-QSP: $SMSSendContact[telefon['SMSSendid']]  = $ARGS[1]
  // TODO-QSP: $SMSSendMessage[telefon['SMSSendid']]  = $ARGS[2]
  // TODO-QSP: $SMSSendCode[telefon['SMSSendid']]    = $ARGS[3]
  // TODO-QSP: SMSSendRepeatable[telefon['SMSSendid']]  =  ARGS[4]
  // TODO-QSP: SMSSendIdentifier[telefon['SMSSendid']]  = telefon['SMSSendLastID']
  (s as any).telefon['SMSSendIdentifier'] = qspUntranslated(s, "SMSSendIdentifier[telefon['SMSSendid']]", { location: "telefon" });
  scene.build();
}

function enterDeleteSmsSendIndex(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['SMSSendid'] = qspUntranslated(s, "ARGS[1]", { location: "telefon" });
  scene.build();
}

function enterDeleteSmsSendId(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = qspUntranslated(s, "arrpos('SMSSendIdentifier', ARGS[1])", { location: "telefon" });
  if (((s as any).telefon_i ?? 0) >= 0) {
    qspCall(s, 'telefon', 'delete_sms_send_index', ((s as any).telefon_i ?? 0));
  }
  scene.build();
}

function enterIncomingSMSCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon_i = 0;
  // TODO-QSP: :telefonIncSMSLoop
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
    if (((s as any).contactISMSCode ?? 0)?.[String((s as any).telefon_i ?? 0)] !== "") {
      if ((0 as any)) {
        // TODO-QSP: gs 'telefon', 'ClearInSMSSchedule', $contact[telefon_i]
      }
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'telefonIncSMSLoop'
  }
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $phonetheme_name[0] = 'Custom_Standard'
  // TODO-QSP: $phonetheme_name[1] = 'Bimbo'
  // TODO-QSP: $phonetheme_name[2] = 'Custom_Aluminus'
  // TODO-QSP: $phonetheme_name[3] = 'Custom_Bottlecapped'
  // TODO-QSP: $phonetheme_name[4] = 'Custom_Galactic'
  // TODO-QSP: $phonetheme_name[5] = 'Custom_Vectored'
  // TODO-QSP: $phonetheme_name[6] = 'Custom_Veneer'
  // TODO-QSP: $phonetheme_name[7] = 'Custom_Voidwalker'
  // TODO-QSP: $phonetheme_name[8] = 'Custom_Voidwalker Red'
  // TODO-QSP: $phonetheme_name[9] = 'Custom_Voidwalker Toxic'
  // TODO-QSP: $phonetheme_name[10] = 'Gopnik'
  // TODO-QSP: $phonetheme_name[11] = 'Sports'
  // TODO-QSP: $phonetheme_name[12] = 'Succubus'
  // TODO-QSP: $phonetheme_name[13] = 'Woodshop'
  (s as any).phonetheme[0] = 1;
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  scene.build();
}

function enterDisplay(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).menu_off ?? 0))) {
    if (((s as any).ARGS ?? 0)[1] !== 0  &&  ((s as any).locArgs?.[1] ?? 0) !== '') {
      (s as any).telefon['backButton'] = 'gs \'stat\' ';
    }
    // TODO-QSP: pl $func('cleanHTML', $func('telefon', 'get_header_string') + $telefon['body'] + $func('telefon', 'g...
  } else {
    // TODO-QSP: pl $func('cleanHTML', $func('telefon', 'get_header_string') + $telefon['body'], 1)
  }
  return;
  scene.build();
}

function enterGetHeaderString(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += '<b><<$func(''time'', ''get_time_string'', hour, minut)>></b><br>'
  // TODO-QSP: $result += '<table cellspacing="0" width="80%">'
  // TODO-QSP: $result +=   '<tr>'
  // TODO-QSP: $result +=     '<td><img src="images/system/icons/icon_statusbar_left.png"></td>'
  if (((s as any).telefon ?? 0)?.['UnreadSMS'] === 0) {
    // TODO-QSP: $result += '<td></td>'
  } else {
    // TODO-QSP: $result += '<td>You have 1 unread message</td>'
    // TODO-QSP: $result += '<td>You have <<telefon[''UnreadSMS'']>> unread messages</td>'
  }
  // TODO-QSP: $result +=     '<td align="right"><img src="images/system/icons/icon_statusbar_right<<min(max(0, (pc...
  // TODO-QSP: $result +=   '</tr>'
  // TODO-QSP: $result += '</table><br>'
  return;
  scene.build();
}

function enterGetFooterString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).telefon ?? 0)?.['backButton'] === '') {
    (s as any).telefon['backButton'] = 'gs \'telefon\', \'Phone_menu\' ';
  }
  // TODO-QSP: $result += '<br><br>'
  // TODO-QSP: $result += '<a href="exec:gs''stat''">Put Phone Away.</a>'
  // TODO-QSP: $result += '<br>'
  // TODO-QSP: $result += '</center>'
  (s as any).telefon['backButton'] = 'gs \'telefon\', \'Phone_menu\' ';
  return;
  scene.build();
}

function enterPhoneMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).phone_off ?? 0) === 1) {
    scene.text('<center><b>Your phone is disabled for this event</b></center>');
  } else {
    qspCall(s, 'obj_din', 'menu_disabled');
    (s as any).telefon['body'] = '';
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_camera'' "><img height="80" width="80" src="images/system/phon...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_calendar'' "><img height="80" width="80" src="images/system/ph...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_pictures'' "><img height="80" width="80" src="images/system/ph...
    // TODO-QSP: <br>
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_media'' "><img height="80" width="80" src="images/system/phone...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_notebook'' "><img height="80" width="80" src="images/system/ph...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_wheather'' "><img height="80" width="80" src="images/system/ph...
    // TODO-QSP: <br>
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_contactlist'' "><img height="80" width="80" src="images/system...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_sms'' "><img height="80" width="80" src="images/system/phone/t...
    // TODO-QSP: <a href="exec:gs ''telefon'', ''Phone_megafon'' "><img height="80" width="80" src="images/system/pho...
    // TODO-QSP: <br>'
    if (((s as any).menu_off ?? 0) === 1) {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<a href="exec:gs \'obj_din\', \'menu_disabled\'"><img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon_settings.png"></a><br>');
    } else {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<a href="exec:killvar \'menu_page\' & gt \'$menu_settings\'"><img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon_settings.png"></a><br>');
    }
    qspCall(s, 'telefon', 'display', 'main');
  }
  scene.build();
}

function enterPhoneCamera(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '<font size=6>Camera</font><br>';
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<img src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon_camera.png" height="80" width="80"><br><br>');
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'phone_selfies', 'open_camera'));
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhoneCalendar(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Calendar</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
  // TODO-QSP: <b>Today:</b><br>
  // TODO-QSP: <<$weekName>>, <<day>> <<$monthName>> <<year>><br>'
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhonePictures(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['phone_selfies', 'view_selfies'] }]);
  scene.build();
}

function enterPhoneMedia(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Media</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
  // TODO-QSP: <b>This option is not active</b><br>'
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhoneNotebook(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'housing', 'rent');
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Planner</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
  // TODO-QSP: <<year>>-<<$monthName>>-<<day>>, <<$weekName>><br><br>'
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
  // TODO-QSP: :pnotebook
  (s as any).daynum = ((s as any).daystart ?? 0)+((s as any).i ?? 0);
  if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) < 9) {
    // TODO-QSP: $calendarday += $list + 'New Year holidays'
    if (((s as any).d1 ?? 0) === 1) {
      // TODO-QSP: $calendarday += ', New Year'
    }
    if (((s as any).d1 ?? 0) === 7) {
      // TODO-QSP: $calendarday += ', Christmas'
    }
  }
  if (((s as any).m1 ?? 0) === 2  &&  ((s as any).d1 ?? 0) === 23) {
    // TODO-QSP: $calendarday += $list + 'Defender of Fatherland Day'
  }
  if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 8) {
    // TODO-QSP: $calendarday += $list + 'Women''s Day'
  }
  if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 1) {
    // TODO-QSP: $calendarday += $list + 'Spring and Labor Day'
  }
  if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 2) {
    // TODO-QSP: $calendarday += $list + 'National holiday'
  }
  if (((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 9) {
    // TODO-QSP: $calendarday += $list + 'Victory Day'
  }
  if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 12) {
    // TODO-QSP: $calendarday += $list + 'Russia Day'
  }
  if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 13) {
    // TODO-QSP: $calendarday += $list + 'National holiday'
  }
  if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
    // TODO-QSP: $calendarday += $list + 'Unity Day'
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) === 1) {
      // TODO-QSP: $calendarday += $list + 'First day of Winter break.'
    }
    if (((s as any).m1 ?? 0) === 1  &&  ((s as any).d1 ?? 0) === 15) {
      // TODO-QSP: $calendarday += $list + 'Last day of Winter break.'
    }
    if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 20) {
      // TODO-QSP: $calendarday += $list + 'First day of Spring break.'
    }
    if (((s as any).m1 ?? 0) === 3  &&  ((s as any).d1 ?? 0) === 26) {
      // TODO-QSP: $calendarday += $list + 'Last day of Spring break.'
    }
    if (((s as any).y1 ?? 0) === 2017  &&  ((s as any).m1 ?? 0) === 5  &&  ((s as any).d1 ?? 0) === 25) {
      // TODO-QSP: $calendarday += $list + 'Graduation Day!'
    }
    if (((s as any).m1 ?? 0) === 6  &&  ((s as any).d1 ?? 0) === 1) {
      // TODO-QSP: $calendarday += $list + 'First day of Summer break.'
    }
    if (((s as any).m1 ?? 0) === 8  &&  ((s as any).d1 ?? 0) === 31) {
      // TODO-QSP: $calendarday += $list + 'Last day of Summer break.'
    }
    if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 4) {
      // TODO-QSP: $calendarday += $list + 'First day of Autumn break.'
    }
    if (((s as any).m1 ?? 0) === 11  &&  ((s as any).d1 ?? 0) === 11) {
      // TODO-QSP: $calendarday += $list + 'Last day of Autumn break.'
    }
  }
  if (((s as any).daynum ?? 0) >= ((s as any).daylastperiod ?? 0)+28  &&  ((s as any).daynum ?? 0) < ((s as any).daylastperiod ?? 0)+31) {
    // TODO-QSP: $calendarday += $list + '<font color=''red''><b>Menstruation!</b></font>'
  }
  if (((s as any).daynum ?? 0) >= ((s as any).daylastperiod ?? 0)+12  &&  ((s as any).daynum ?? 0) < ((s as any).daylastperiod ?? 0)+14) {
    // TODO-QSP: $calendarday += $list + '<font color=#336600><b>Ovulation!</b></font>'
  }
  if (((s as any).pregChem ?? 0) >= 6720) {
    // TODO-QSP: $calendarday += $list + '<font color=''red''><b>Birthing day!</b></font>'
  }
  if (((s as any).w1 ?? 0) < 5  &&  (((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed')) {
    // TODO-QSP: $calendarday += $list + 'Working as a secretary. <i>(9:00 - ' + $func('time', 'get_time_string', 17,...
  }
  if (((s as any).w1 ?? 0) < 5  &&  ((s as any).job_status ?? 0)?.['pav_factory'] === 'employed') {
    // TODO-QSP: $calendarday += $list + 'Working as a seamstress. '
    if (((s as any).age ?? 0) < 18) {
      // TODO-QSP: $calendarday += '<i>(' + $func('time', 'get_time_string', 16, 0)+' - ' + $func('time', 'get_time_str...
    }
  }
  if (((s as any).w1 ?? 0) > 1  &&  ((s as any).w1 ?? 0) <= 6  &&  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
    // TODO-QSP: $calendarday += $list + 'Working as a waitress. <i>(' + $func('time', 'get_time_string', 12, 0) + ' ...
  }
  if (((s as any).w1 ?? 0) > 1  &&  ((s as any).w1 ?? 0) <= 5  &&  ((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed') {
    // TODO-QSP: $calendarday += $list + 'Working as a nurse. <i>(' + $func('time', 'get_time_string', 8, 0) + ' - ' ...
  }
  if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
    (s as any).temp_strip_sched = qspUntranslated(s, "val(job_active_schedule['city_strip_bargirl'])", { location: "telefon" });
    if (((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl'] === '') {
      (s as any).temp_strip_sched = 0;
    }
    if (((s as any).temp_strip_sched ?? 0) === 1) {
      if (((s as any).w1 ?? 0) === 5  ||  ((s as any).w1 ?? 0) === 6) {
        // TODO-QSP: $calendarday += $list + 'Working as a bargirl at Golden Girls. <i>(Arrive ' + $func('time', 'get_tim...
      }
      if (((s as any).w1 ?? 0) === 6) {
        // TODO-QSP: $calendarday += $list + '<i>Bargirl payday.</i>'
      }
    } else {
      if (((s as any).w1 ?? 0) === 3  ||  ((s as any).w1 ?? 0) === 4) {
        // TODO-QSP: $calendarday += $list + 'Working as a bargirl at Golden Girls. <i>(Arrive ' + $func('time', 'get_tim...
      }
      if (((s as any).w1 ?? 0) === 4) {
        // TODO-QSP: $calendarday += $list + '<i>Bargirl payday.</i>'
      }
    }
  }
  if (((s as any).temp_tel_pf_type ?? 0) !== '') {
    // TODO-QSP: $calendarday += $list + 'Porn shoot: <i><<$porndesc[val($temp_tel_pf_type)]>></i>'
  }
  if (((s as any).d1 ?? 0) === 25  &&  (((s as any).job_status ?? 0)?.['city_diner_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed'  ||  ((s as any).tanwork ?? 0) === 1  ||  ((s as any).job_status ?? 0)?.['pav_factory'] === 'employed')) {
    // TODO-QSP: $calendarday += $list + '<i>Pay day!</i>'
  }
  if (((s as any).d1 ?? 0) === ((s as any).nyp_day ?? 0)  &&  ((s as any).m1 ?? 0) === 12  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    // TODO-QSP: $calendarday += $list + 'New Year''s party at ' + $func('time', 'get_time_string', 14, 0) + '!'
  }
  if ((((s as any).npc_QW ?? 0)?.['A33']-2) % 2 === 1  &&  ((s as any).sisboyday ?? 0)+1 === ((s as any).daynum ?? 0)) {
    if (((s as any).sisboytrioQW ?? 0) === 1) {
      // TODO-QSP: $calendarday += $list + '<font color="orange">Threesome with Anya and Roma at ' + $func('time', 'get...
    } else {
      // TODO-QSP: $calendarday += $list + '<font color="orange">Anya having sex with Roma at ' + $func('time', 'get_ti...
    }
  }
  if (((s as any).sisboyparty ?? 0) === 2  &&  ((s as any).sisboyparty_day ?? 0)+1 === ((s as any).daynum ?? 0)) {
    // TODO-QSP: $calendarday += $list + '<font color="orange">Party at Rex''s, gathering before ' + $func('time', 'g...
  }
  if ((!((s as any).rent1 ?? 0))) {
    // TODO-QSP: $calendarday += $list + 'Rent on city apartment expires!'
  }
  if ((!((s as any).rent4 ?? 0))) {
    // TODO-QSP: $calendarday += $list + 'Rent on Pushkin apartment expires!'
  }
  if (((s as any).birthday ?? 0) === ((s as any).d1 ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).m1 ?? 0)) {
    // TODO-QSP: $calendarday += $list + 'My birthday!'
  }
  if (((s as any).kid ?? 0) > 0) {
    (s as any).k1 = ((s as any).kid ?? 0);
    // TODO-QSP: :kiddieloop
    if (((s as any).daykid ?? 0)?.[String((s as any).k1 ?? 0)] === ((s as any).d1 ?? 0)  &&  ((s as any).monthkid ?? 0)?.[String((s as any).k1 ?? 0)] === ((s as any).m1 ?? 0)) {
      // TODO-QSP: $calendarday += $list + 'Birthday of my <<$polreb[k1]>> <<$kidname[k1]>>, my <<kid>>. baby!'
    }
    if (((s as any).k1 ?? 0) > 1) {
      (s as any).k1 = ((s as any).k1 ?? 0) - (1);
      // TODO-QSP: jump 'kiddieloop'
    }
  }
  if (((s as any).calendarday ?? 0) !== '') {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<b><<$monthName[m1]>> <<d1>>, <<$weekName[w1]>>:</b>');
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (((s as any).calendarday ?? 0) +'<((s as any).br ?? 0)>');
  }
  if (((s as any).i ?? 0) < 14) {
    (s as any).rent1 = ((s as any).rent1 ?? 0) - (1);
    (s as any).rent4 = ((s as any).rent4 ?? 0) - (1);
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).ds1 = ((s as any).ds1 ?? 0) + (1);
    qspCall(s, 'time', 'to_date', ((s as any).ds1 ?? 0));
    (s as any).w1 = ((s as any).dateVars ?? 0)?.['week'];
    (s as any).d1 = ((s as any).dateVars ?? 0)?.['day'];
    (s as any).m1 = ((s as any).dateVars ?? 0)?.['month'];
    (s as any).y1 = ((s as any).dateVars ?? 0)?.['year'];
    // TODO-QSP: jump 'pnotebook'
  }
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhoneWheather(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Weather</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
  // TODO-QSP: <b>Temperature:</b><br>
  // TODO-QSP: <<$temperature>>. <<$osadki>><br>
  // TODO-QSP: P.O.P. today is <<weatherFall>>%<br>'
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhoneContactlist(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>Contacts</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
  // TODO-QSP: <table cellspacing="0" width="80%">'
  (s as any).telefon_i = 0;
  // TODO-QSP: :contactloop2
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).contact ?? {}).length) {
    if (((s as any).contactAnon ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
      (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'format_contact_string', ((s as any).contactIcon ?? 0)?.[String((s as any).telefon_i ?? 0)], ((s as any).npc_nickname ?? 0)?.[((s as any).contact ?? 0)?.[String((s as any).telefon_i ?? 0)]], ((s as any).contactOCode ?? 0)?.[String((s as any).telefon_i ?? 0)], ((s as any).contactOSche ?? 0)?.[String((s as any).telefon_i ?? 0)]));
    }
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'contactloop2'
  }
  if (((s as any).telalla ?? 0) > 0) {
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'format_contact_string', 'icon_ira1', 'Alla', qspUntranslated(s, "\"telsob === 'Alla' & gt 'lover_call'", { location: "telefon" }), qspUntranslated(s, "'mobilaraz'\"", { location: "telefon" }), 'hour >= 8  &&  hour <= 20'));
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterFormatContactString(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['ContactIcon'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).telefon['ContactNickName'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).telefon['ContactCallCode'] = ((s as any).locArgs?.[3] ?? 0);
  (s as any).telefon['ContactCallSchedule'] = ((s as any).locArgs?.[4] ?? 0);
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('.'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = ((s as any).telefon['ContactIcon'] ?? 0) + ('.png');
  }
  if (((qspUntranslated(s, "\u00000\u0000", { location: "telefon" })).indexOf(('/'))) + 1 === 0) {
    (s as any).telefon['ContactIcon'] = '((s as any).images ?? 0)/((s as any).system ?? 0)/((s as any).phone ?? 0)/((s as any).icons ?? 0)/' + ((s as any).telefon ?? 0)?.['ContactIcon'];
  }
  if ((!(0 as any))) {
    (s as any).telefon['ContactCallCode'] = 'gs \'telefon\', \'phone_call_reject\'';
  }
  // TODO-QSP: $result +=    '<td><img width="75" src="<<$telefon[''ContactIcon'']>>"></td>'
  // TODO-QSP: $result +=    '<td><<$telefon[''ContactNickName'']>></td>'
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 0  &&  ((s as any).subscription ?? 0)?.['metered_calls'] < 4) {
    // TODO-QSP: $result +=  '<td align="right"><b>Call</b></td>'
  } else {
    // TODO-QSP: $result +=  '<td align="right"><b><a href="exec:$callerid = ''<<$telefon[''ContactIcon'']>>'' & <<$t...
  }
  // TODO-QSP: $result +=  '</tr>'
  scene.build();
}

function enterPhoneSms(s: GameState, scene: SceneBuilder): void {
  (s as any).telefon['body'] = '';
  // TODO-QSP: <font size=6>SMS</font><br>
  // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/<<ii...
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<b><a href="exec:gs \'telefon\', \'send_sms\'">Send new SMS</a></b><br>');
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<table cellspacing="0" width="80%"><tr><th>Icon</th><th>Name</th><th align="right">Received</th><th></th></tr>');
  (s as any).telefon['UnreadSMS'] = 0;
  (s as any).telefon_i = 0;
  // TODO-QSP: :smsloop
  if (((s as any).telefon_i ?? 0) < Object.keys((s as any).SMSContact ?? {}).length) {
    (s as any).telefon['contactid'] = qspUntranslated(s, "arrpos('contact', SMSContact[telefon_i])", { location: "telefon" });
    if (((s as any).telefon ?? 0)?.['contactid'] === -1) {
      (s as any).telefonCon['NPCName'] = '';
      (s as any).telefonCon['Icon'] = 'icon_na.png';
    } else {
      (s as any).telefonCon['NPCName'] = ((s as any).npc_nickname ?? 0)?.[qspUntranslated(s, "contact[telefon['contactid']]", { location: "telefon" })];
      (s as any).telefonCon['Icon'] = qspUntranslated(s, "contactIcon[telefon['contactid']]", { location: "telefon" });
    }
    if (((s as any).SMSMessageRead ?? 0)?.[String((s as any).telefon_i ?? 0)] === 0) {
      (s as any).telefon['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
    }
    (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + (qspFunc(s, 'telefon', 'get_sms_row', ((s as any).telefon_i ?? 0), ((s as any).telefonCon ?? 0)?.['Icon'], ((s as any).telefonCon ?? 0)?.['NPCName'], ((s as any).SMSTime ?? 0)?.[String((s as any).telefon_i ?? 0)], ((s as any).SMSMessageRead ?? 0)?.[String((s as any).telefon_i ?? 0)]));
    (s as any).telefon_i = ((s as any).telefon_i ?? 0) + (1);
    // TODO-QSP: jump 'smsloop'
  }
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('<b><a href="exec:gs \'telefon\', \'delete_sms\',\'0\',\'all\'">Delete All</a></b><br>');
  (s as any).telefon['body'] = ((s as any).telefon['body'] ?? 0) + ('</table><br>');
  qspCall(s, 'telefon', 'display');
  scene.build();
}

function enterPhoneMegafon(s: GameState, scene: SceneBuilder): void {
  if (((s as any).subscription ?? 0)?.['monthly_calls'] === 1) {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] < ((s as any).day ?? 0)) {
    }
  } else {
    if (((s as any).subscription ?? 0)?.['monthly_calls-date'] > 0) {
    }
    (s as any).telefon['body'] = '';
    // TODO-QSP: <font size=6>MegaFon</font><br>
    // TODO-QSP: <img height="80" width="80" src="images/system/phone/theme/<<$phonetheme_name[pcs_phonetheme]>>/icon...
    // TODO-QSP: <b><<$contractmessage>></b>'
    qspCall(s, 'telefon', 'display');
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
    default:
      enterAddContact(s, scene);
      break;
  }
}

export const telefon: LocationDef = {
  name: 'telefon',
  title: 'Your phone is disabled for this event',
  region: 'other',
  enter: enter,
};
