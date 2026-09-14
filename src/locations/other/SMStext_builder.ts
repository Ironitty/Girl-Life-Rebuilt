import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetSmsId(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length > 1) {
    (s as any).result = qspUntranslated(s, "SMSIdentifier[ARGS[1]]", { location: "SMStext_builder" });
  } else {
    if (Object.keys((s as any).SMSBuilderVars ?? {}).length > 0) {
      (s as any).result = ((s as any).SMSBuilderVars ?? 0)?.['SMSIdentifier'];
    } else {
      (s as any).result = ((s as any).telefon ?? 0)?.['SMSIdentifier'];
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetIndexFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "SMStext_builder" });
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheckIfSmsExistsFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" })) >= 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['reset_flag'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoesIndexExist(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).locArgs?.[1] ?? 0) >= 0  &&  ((s as any).locArgs?.[1] ?? 0) < ((s as any).telefon ?? 0)?.['SMSCount']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterSend(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_text_width = Math.max(10, 90 - 2 * (String(((s as any).locArgs?.[1] ?? 0)).length));
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=' + qspUntranslated(s, "temp_text_width>", { location: "SMStext_builder" }) + '%></td><td collspan=2 bgcolor=pink style="padding-top:5pt; padding-bottom:5pt; padding-left:10pt; padding-right:3pt"><font color=black>');
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</font></td></tr></table>');
  scene.build();
}

function enterSendImg(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=10%></td><td collspan=2 bgcolor=pink align=center style="white-space:pre-wrap">');
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  // TODO-QSP: $SMSBuilderVars['text'] += '<br><img src="<<$ARGS[1]>>" alt="<<$ARGS[2]>>" style="horizontal-align:center; max-height:90%; max-width:90%"><br><br>'
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td></tr></table>');
  scene.build();
}

function enterSendVideo(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=10%></td><td collspan=2 bgcolor=pink align=center style="white-space:pre-wrap">');
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  // TODO-QSP: $SMSBuilderVars['text'] += '<br><video autoplay loop src="<<$ARGS[1]>>" alt="<<$ARGS[2]>>" style="horizontal-align:center; max-height:90%; max-width:90%"></video><br><br>'
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td></tr></table>');
  scene.build();
}

function enterReceive(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_text_width = Math.max(10, 90 - 2 * (String(((s as any).locArgs?.[1] ?? 0)).length));
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" style="padding-top:5pt; padding-bottom:5pt; padding-left:10pt; padding-right:3pt"><font color=black>');
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</font></td><td width=' + qspUntranslated(s, "temp_text_width>", { location: "SMStext_builder" }) + '%></td></tr></table>');
  scene.build();
}

function enterReceiveImg(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" align=center style="white-space:pre-wrap">');
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  // TODO-QSP: $SMSBuilderVars['text'] += '<br><img src="<<$ARGS[1]>>" alt="<<$ARGS[2]>>" style="horizontal-align:center; max-height:90%; max-width:90%"><br><br>'
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td><td width=10%></td></tr></table>');
  scene.build();
}

function enterReceiveVideo(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" align=center style="white-space:pre-wrap">');
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  // TODO-QSP: $SMSBuilderVars['text'] += '<br><video autoplay loop src="<<$ARGS[1]>>" alt="<<$ARGS[2]>>" style="horizontal-align:center; max-height:90%; max-width:90%"></video><br><br>'
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td><td width=10%></td></tr></table>');
  // TODO-QSP: end
  scene.build();
}

function enterAddReply(s: GameState, scene: SceneBuilder): void {
  (s as any).stb_n_args = 0;
  (s as any).stb_i = 2;
  // TODO-QSP: :SMS_build_reply_loop
  if (((s as any).stb_i ?? 0) < ((s as any).stb_n_args ?? 0)) {
    if (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] === '') {
      // TODO-QSP: $temp_reply_str += '<<ARGS[stb_i]>>, '
    } else {
      // TODO-QSP: $temp_reply_str += '''<<$ARGS[stb_i]>>'', '
    }
    (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
    // TODO-QSP: jump 'SMS_build_reply_loop'
  }
  // TODO-QSP: $temp_reply_str += 'telefon[''SMSIndex'']">' + $ARGS[1] + '</a>'
  // TODO-QSP: $SMSBuilderReplies[] = $temp_reply_str
  scene.build();
}

function enterPrivateSetReplies(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('<table>');
  (s as any).stb_maxi = 0;
  (s as any).stb_i = 0;
  // TODO-QSP: :SMS_reply_loop
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('<tr><td>\' + $SMSBuilderReplies[stb_i] + \'</td></tr>');
  (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
  if (((s as any).stb_i ?? 0) < ((s as any).stb_maxi ?? 0)) {
    // TODO-QSP: jump 'SMS_reply_loop'
  }
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('</table>');
  // TODO-QSP: end
  scene.build();
}

function enterSendSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).stb_n_args = 0;
  (s as any).stb_i = 3;
  // TODO-QSP: :SMS_build_send_selfie_loop
  if (((s as any).stb_i ?? 0) < ((s as any).stb_n_args ?? 0)) {
    if (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] === '') {
      // TODO-QSP: $temp_reply_str += ', <<ARGS[stb_i]>>'
    } else {
      // TODO-QSP: $temp_reply_str += ', ''<<$ARGS[stb_i]>>'''
    }
    (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
    // TODO-QSP: jump 'SMS_build_send_selfie_loop'
  }
  // TODO-QSP: $temp_reply_str += '"><<$ARGS[1]>></a>'
  // TODO-QSP: $SMSBuilderReplies[] = $temp_reply_str
  // TODO-QSP: end
  scene.build();
}

function enterAddEndImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_imgs ?? 0)[0] === '') {
    // TODO-QSP: $SMSBuilderImages[0] = $ARGS[1]
  } else {
    if (((s as any).temp_imgs ?? 0)[1] === '') {
      // TODO-QSP: $SMSBuilderImages[1] = $ARGS[1]
    } else {
      if (((s as any).temp_imgs ?? 0)[2] === '') {
        // TODO-QSP: $SMSBuilderImages[2] = $ARGS[1]
      } else {
        if (((s as any).temp_imgs ?? 0)[3] === '') {
          // TODO-QSP: $SMSBuilderImages[3] = $ARGS[1]
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrivateSetEndImg(s: GameState, scene: SceneBuilder): void {
  (s as any).stb_i = 0;
  // TODO-QSP: :stb_psei_loop
  if (((s as any).stb_i ?? 0) < Object.keys((s as any).SMSBuilderImages ?? {}).length) {
    if (((s as any).SMSPicture1 ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
      // TODO-QSP: $SMSPicture1[ARGS[1]] = $SMSBuilderImages[stb_i]
    } else {
      if (((s as any).SMSPicture2 ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
        // TODO-QSP: $SMSPicture2[ARGS[1]] = $SMSBuilderImages[stb_i]
      } else {
        if (((s as any).SMSPicture3 ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
          // TODO-QSP: $SMSPicture3[ARGS[1]] = $SMSBuilderImages[stb_i]
        } else {
          if (((s as any).SMSPicture4 ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
            // TODO-QSP: $SMSPicture4[ARGS[1]] = $SMSBuilderImages[stb_i]
          }
        }
      }
    }
    (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
    // TODO-QSP: jump 'stb_psei_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddSms(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).SMSBuilderReplies ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivateSetReplies(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = '';
  }
  // TODO-QSP: gs 'telefon', 'add_sms', $ARGS[1], $SMSBuilderVars['text'], $SMSBuilderVars['replies'], $SMSBuilderI...
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['reset_flag'] = 0;
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = '';
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = '';
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['SMSIdentifier'] = ((s as any).telefon ?? 0)?.['SMSIdentifier'];
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['SMSIndex'] = ((s as any).telefon ?? 0)?.['SMSIndex'];
  if (((s as any).locArgs?.[2] ?? 0) !== 0  &&  ((s as any).locArgs?.[2] ?? 0) !== '') {
    if (!(s as any).telefon) (s as any).telefon = {}; (s as any).telefon['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) - (1);
    // TODO-QSP: SMSMessageRead[SMSBuilderVars['SMSIndex']] = 1
  }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateSmsFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" })), ((((s as any).locArgs?.[2] ?? 0) === '') ? (qspUntranslated(s, "ARGS[2]", { location: "SMStext_builder" })) : (((s as any).locArgs?.[2] ?? 0)))]; enterUpdateSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUpdateSms(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['SMSIndex'] = qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" });
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])) {
    return;
  }
  if (Object.keys((s as any).SMSBuilderReplies ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivateSetReplies(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = '';
  }
  if (Object.keys((s as any).SMSBuilderImages ?? {}).length > 0) {
    // TODO-QSP: gs 'SMStext_builder', 'private_set_end_img', SMSBuilderVars['SMSIndex']
  }
  if (((s as any).SMSBuilderVars ?? 0)?.['reset_flag'] === 1) {
    // TODO-QSP: $SMSMessage[SMSBuilderVars['SMSIndex']] = ''
  }
  // TODO-QSP: $SMSMessage[SMSBuilderVars['SMSIndex']] += $SMSBuilderVars['text']
  // TODO-QSP: $SMSReplies[SMSBuilderVars['SMSIndex']] = $SMSBuilderVars['replies']
  if (((s as any).locArgs?.[2] ?? 0) !== 0  ||  ((s as any).locArgs?.[2] ?? 0) !== '') {
    // TODO-QSP: gs 'SMStext_builder', 'set_unread', SMSBuilderVars['SMSIndex']
  }
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['reset_flag'] = 0;
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['text'] = '';
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['replies'] = '';
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['SMSIdentifier'] = ((s as any).telefon ?? 0)?.['SMSIdentifier'];
  // TODO-QSP: end
  scene.build();
}

function enterShowSmsFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" }))]; enterShowSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterShowSms(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).SMSBuilderVars) (s as any).SMSBuilderVars = {}; (s as any).SMSBuilderVars['SMSIndex'] = qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" });
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])) {
    return;
  }
  // TODO-QSP: gs 'SMStext_builder', 'update_sms', SMSBuilderVars['SMSIndex']
  // TODO-QSP: gs 'telefon', 'show_sms', SMSBuilderVars['SMSIndex']
  // TODO-QSP: end
  scene.build();
}

function enterSetUnreadFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" }))]; enterSetUnread(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterSetUnread(s: GameState, scene: SceneBuilder): void {
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" }))) {
    return;
  }
  if (((s as any).SMSMessageRead ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    if (!(s as any).telefon) (s as any).telefon = {}; (s as any).telefon['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
    // TODO-QSP: SMSMessageRead[ARGS[1]] = 0
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUpdateTimeFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" }))]; enterUpdateTime(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterUpdateTime(s: GameState, scene: SceneBuilder): void {
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', qspUntranslated(s, "ARGS[1]", { location: "SMStext_builder" }))) {
    return;
  }
  // TODO-QSP: $SMSTime[ARGS[1]] = "<<$func('time', 'get_time_string', hour, minut)>> <<$weekName>> <<day>> <<$mont...
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_sms_id':
      enterGetSmsId(s, scene);
      break;
    case 'get_index_from_id':
      enterGetIndexFromId(s, scene);
      break;
    case 'check_if_sms_exists_from_id':
      enterCheckIfSmsExistsFromId(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'does_index_exist':
      enterDoesIndexExist(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'send':
      enterSend(s, scene);
      break;
    case 'send_img':
      enterSendImg(s, scene);
      break;
    case 'send_video':
      enterSendVideo(s, scene);
      break;
    case 'receive':
      enterReceive(s, scene);
      break;
    case 'receive_img':
      enterReceiveImg(s, scene);
      break;
    case 'receive_video':
      enterReceiveVideo(s, scene);
      break;
    case 'add_reply':
      enterAddReply(s, scene);
      break;
    case 'private_set_replies':
      enterPrivateSetReplies(s, scene);
      break;
    case 'send_selfie':
      enterSendSelfie(s, scene);
      break;
    case 'add_end_img':
      enterAddEndImg(s, scene);
      break;
    case 'private_set_end_img':
      enterPrivateSetEndImg(s, scene);
      break;
    case 'add_sms':
      enterAddSms(s, scene);
      break;
    case 'update_sms_from_id':
      enterUpdateSmsFromId(s, scene);
      break;
    case 'update_sms':
      enterUpdateSms(s, scene);
      break;
    case 'show_sms_from_id':
      enterShowSmsFromId(s, scene);
      break;
    case 'show_sms':
      enterShowSms(s, scene);
      break;
    case 'set_unread_from_id':
      enterSetUnreadFromId(s, scene);
      break;
    case 'set_unread':
      enterSetUnread(s, scene);
      break;
    case 'update_time_from_id':
      enterUpdateTimeFromId(s, scene);
      break;
    case 'update_time':
      enterUpdateTime(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const SMStext_builder: LocationDef = {
  name: 'SMStext_builder',
  region: 'other',
  enter: enter,
};
