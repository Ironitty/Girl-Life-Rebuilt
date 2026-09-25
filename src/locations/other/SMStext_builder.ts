import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

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
      (s as any).result = (((s as any).SMSBuilderVars ?? 0)?.['SMSIdentifier']);
    } else {
      (s as any).result = (((s as any).telefon ?? 0)?.['SMSIdentifier']);
    }
  }
  return;
  scene.build();
}

function enterGetIndexFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspUntranslated(s, "arrpos('SMSIdentifier', ARGS[1])", { location: "SMStext_builder" });
  return;
  scene.build();
}

function enterCheckIfSmsExistsFromId(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (qspFunc(s, 'SMStext_builder', 'get_index_from_id', ((s as any).locArgs?.[1] ?? 0)) >= 0);
  return;
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['reset_flag'] = 1;
  return;
  scene.build();
}

function enterDoesIndexExist(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (String((s as any).locArgs?.[1] ?? '') >= 0  &&  String((s as any).locArgs?.[1] ?? '') < ((s as any).telefon ?? 0)?.['SMSCount']);
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).SMSBuilderVars = undefined;
  (s as any).SMSBuilderReplies = undefined;
  (s as any).SMSBuilderImages = undefined;
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).stb_i = undefined;
  (s as any).stb_maxi = undefined;
  (s as any).SMSBuilderVars = undefined;
  (s as any).SMSBuilderReplies = undefined;
  (s as any).SMSBuilderImages = undefined;
  scene.build();
}

function enterSend(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_text_width = Math.max(10, 90 - 2 * (String(((s as any).locArgs?.[1] ?? 0)).length));
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=' + ((s as any).temp_text_width ?? 0) + '%></td><td collspan=2 bgcolor=pink style="padding-top:5pt; padding-bottom:5pt; padding-left:10pt; padding-right:3pt"><font color=black>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</font></td></tr></table>');
  (s as any).temp_text_width = undefined;
  scene.build();
}

function enterSendImg(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=10%></td><td collspan=2 bgcolor=pink align=center style="white-space:pre-wrap">');
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<br><img src="' + ((s as any).locArgs?.[1] ?? 0) + '" alt="' + ((s as any).locArgs?.[2] ?? 0) + '" style="horizontal-align:center; max-height:90%; max-width:90%"><br><br>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td></tr></table>');
  scene.build();
}

function enterSendVideo(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td width=10%></td><td collspan=2 bgcolor=pink align=center style="white-space:pre-wrap">');
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<br><video autoplay loop src="' + ((s as any).locArgs?.[1] ?? 0) + '" alt="' + ((s as any).locArgs?.[2] ?? 0) + '" style="horizontal-align:center; max-height:90%; max-width:90%"></video><br><br>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td></tr></table>');
  scene.build();
}

function enterReceive(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_text_width = Math.max(10, 90 - 2 * (String(((s as any).locArgs?.[1] ?? 0)).length));
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" style="padding-top:5pt; padding-bottom:5pt; padding-left:10pt; padding-right:3pt"><font color=black>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</font></td><td width=' + ((s as any).temp_text_width ?? 0) + '%></td></tr></table>');
  (s as any).temp_text_width = undefined;
  scene.build();
}

function enterReceiveImg(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" align=center style="white-space:pre-wrap">');
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<br><img src="' + ((s as any).locArgs?.[1] ?? 0) + '" alt="' + ((s as any).locArgs?.[2] ?? 0) + '" style="horizontal-align:center; max-height:90%; max-width:90%"><br><br>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td><td width=10%></td></tr></table>');
  scene.build();
}

function enterReceiveVideo(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<table width=80%><tr><td collspan=2 bgcolor="#D4CEF9" align=center style="white-space:pre-wrap">');
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).locArgs?.[1] ?? 0);
  }
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('<br><video autoplay loop src="' + ((s as any).locArgs?.[1] ?? 0) + '" alt="' + ((s as any).locArgs?.[2] ?? 0) + '" style="horizontal-align:center; max-height:90%; max-width:90%"></video><br><br>');
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = ((s as any).SMSBuilderVars['text'] ?? 0) + ('</td><td width=10%></td></tr></table>');
  scene.build();
}

function enterAddReply(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_reply_str = '[Reply] <a href="exec: gs ';
  (s as any).stb_n_args = 0;
  (s as any).stb_i = 2;
  while (true) {
    if (((s as any).stb_i ?? 0) < ((s as any).stb_n_args ?? 0)) {
      if (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] === '') {
        (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + ('' + (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0) + ', ');
      } else {
        (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + ('\'' + (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0) + '\', ');
      }
      (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
      break;
    }
    (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + ('telefon[\'SMSIndex\']">' + ((s as any).locArgs?.[1] ?? 0) + '</a>');
    (s as any).SMSBuilderReplies = [...((s as any).SMSBuilderReplies ?? []), ((s as any).temp_reply_str ?? 0)];
    (s as any).temp_reply_str = undefined;
    (s as any).stb_i = undefined;
    (s as any).stb_n_args = undefined;
  }
  scene.build();
}

function enterPrivateSetReplies(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('<table>');
  (s as any).stb_maxi = 0;
  (s as any).stb_i = 0;
  do {
    ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('<tr><td>' + (((s as any).SMSBuilderReplies ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0) + '</td></tr>');
    (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
    ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = ((s as any).SMSBuilderVars['replies'] ?? 0) + ('</table>');
    (s as any).SMSBuilderReplies = undefined;
    (s as any).stb_i = undefined;
    (s as any).stb_maxi = undefined;
  } while (((s as any).stb_i ?? 0) < ((s as any).stb_maxi ?? 0));
  scene.build();
}

function enterSendSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_reply_str = '[Selfie] <a href="exec: gs \'SMS_selfies\', \'send_selfie\', \'' + (String(((s as any).locArgs?.[2] ?? 0)).toLowerCase()) + '\', telefon[\'SMSIndex\']';
  (s as any).stb_n_args = 0;
  (s as any).stb_i = 3;
  while (true) {
    if (((s as any).stb_i ?? 0) < ((s as any).stb_n_args ?? 0)) {
      if (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] === '') {
        (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + (', ' + (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0) + '');
      } else {
        (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + (', \'' + (((s as any).ARGS ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0) + '\'');
      }
      (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
      break;
    }
    (s as any).temp_reply_str = ((s as any).temp_reply_str ?? 0) + ('">' + ((s as any).locArgs?.[1] ?? 0) + '</a>');
    (s as any).SMSBuilderReplies = [...((s as any).SMSBuilderReplies ?? []), ((s as any).temp_reply_str ?? 0)];
    (s as any).temp_reply_str = undefined;
    (s as any).stb_i = undefined;
    (s as any).stb_n_args = undefined;
  }
  scene.build();
}

function enterAddEndImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_imgs ?? 0)[0] === '') {
    ((s as any).SMSBuilderImages = (s as any).SMSBuilderImages ?? {})[0] = ((s as any).locArgs?.[1] ?? 0);
  } else {
    if (((s as any).temp_imgs ?? 0)[1] === '') {
      ((s as any).SMSBuilderImages = (s as any).SMSBuilderImages ?? {})[1] = ((s as any).locArgs?.[1] ?? 0);
    } else {
      if (((s as any).temp_imgs ?? 0)[2] === '') {
        ((s as any).SMSBuilderImages = (s as any).SMSBuilderImages ?? {})[2] = ((s as any).locArgs?.[1] ?? 0);
      } else {
        if (((s as any).temp_imgs ?? 0)[3] === '') {
          ((s as any).SMSBuilderImages = (s as any).SMSBuilderImages ?? {})[3] = ((s as any).locArgs?.[1] ?? 0);
        }
      }
    }
  }
  scene.build();
}

function enterPrivateSetEndImg(s: GameState, scene: SceneBuilder): void {
  (s as any).stb_i = 0;
  while (true) {
    if (((s as any).stb_i ?? 0) < Object.keys((s as any).SMSBuilderImages ?? {}).length) {
      if (((s as any).SMSPicture1 ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
        ((s as any).SMSPicture1 = (s as any).SMSPicture1 ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).SMSBuilderImages ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0);
      } else {
        if (((s as any).SMSPicture2 ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
          ((s as any).SMSPicture2 = (s as any).SMSPicture2 ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).SMSBuilderImages ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0);
        } else {
          if (((s as any).SMSPicture3 ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
            ((s as any).SMSPicture3 = (s as any).SMSPicture3 ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).SMSBuilderImages ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0);
          } else {
            if (((s as any).SMSPicture4 ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
              ((s as any).SMSPicture4 = (s as any).SMSPicture4 ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).SMSBuilderImages ?? 0)?.[String((s as any).stb_i ?? 0)] ?? 0);
            }
          }
        }
      }
      (s as any).stb_i = ((s as any).stb_i ?? 0) + (1);
      break;
    }
    (s as any).stb_i = undefined;
    (s as any).SMSBuilderImages = undefined;
  }
  scene.build();
}

function enterAddSms(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).SMSBuilderReplies ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivateSetReplies(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = '';
  }
  qspCall(s, 'telefon', 'add_sms', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSBuilderVars ?? 0)?.['text']), (((s as any).SMSBuilderVars ?? 0)?.['replies']), (((s as any).SMSBuilderImages ?? 0)?.[0] ?? 0), (((s as any).SMSBuilderImages ?? 0)?.[1] ?? 0), (((s as any).SMSBuilderImages ?? 0)?.[2] ?? 0), (((s as any).SMSBuilderImages ?? 0)?.[3] ?? 0));
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['reset_flag'] = 0;
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = '';
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = '';
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['SMSIdentifier'] = (((s as any).telefon ?? 0)?.['SMSIdentifier']);
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['SMSIndex'] = (((s as any).telefon ?? 0)?.['SMSIndex']);
  if (String((s as any).locArgs?.[2] ?? '') !== 0  &&  String((s as any).locArgs?.[2] ?? '') !== '') {
    ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) - (1);
    ((s as any).SMSMessageRead = (s as any).SMSMessageRead ?? {})[(((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])] = 1;
  }
  scene.build();
}

function enterUpdateSmsFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', ((s as any).locArgs?.[1] ?? 0)), ((String((s as any).locArgs?.[2] ?? '') === '') ? (((s as any).locArgs?.[2] ?? 0)) : (((s as any).locArgs?.[2] ?? 0)))]; enterUpdateSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUpdateSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['SMSIndex'] = ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])) {
    alert('SMStext_builder, update_sms Error: SMSIndex of ' + (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex']) + ' does not match an existing sms.');
    return;
  }
  if (Object.keys((s as any).SMSBuilderReplies ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrivateSetReplies(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = '';
  }
  if (Object.keys((s as any).SMSBuilderImages ?? {}).length > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])]; enterPrivateSetEndImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).SMSBuilderVars ?? 0)?.['reset_flag'] === 1) {
    ((s as any).SMSMessage = (s as any).SMSMessage ?? {})[(((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])] = '';
  }
  ((s as any).SMSMessage = (s as any).SMSMessage ?? {})[(((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])] = ((s as any).SMSMessage[(((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])] ?? 0) + ((((s as any).SMSBuilderVars ?? 0)?.['text']));
  ((s as any).SMSReplies = (s as any).SMSReplies ?? {})[(((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])] = (((s as any).SMSBuilderVars ?? 0)?.['replies']);
  if (String((s as any).locArgs?.[2] ?? '') !== 0  ||  String((s as any).locArgs?.[2] ?? '') !== '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])]; enterSetUnread(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['reset_flag'] = 0;
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['text'] = '';
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['replies'] = '';
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['SMSIdentifier'] = (((s as any).telefon ?? 0)?.['SMSIdentifier']);
  scene.build();
}

function enterShowSmsFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', ((s as any).locArgs?.[1] ?? 0))]; enterShowSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterShowSms(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSBuilderVars = (s as any).SMSBuilderVars ?? {})['SMSIndex'] = ((s as any).locArgs?.[1] ?? 0);
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])) {
    alert('SMStext_builder, show_sms Error: SMSIndex of ' + (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex']) + ' does not match an existing sms.');
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex'])]; enterUpdateSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'telefon', 'show_sms', (((s as any).SMSBuilderVars ?? 0)?.['SMSIndex']));
  scene.build();
}

function enterSetUnreadFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', ((s as any).locArgs?.[1] ?? 0))]; enterSetUnread(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterSetUnread(s: GameState, scene: SceneBuilder): void {
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).locArgs?.[1] ?? 0))) {
    alert('SMStext_builder, set_unread Error: SMSIndex of ' + ((s as any).locArgs?.[1] ?? 0) + ' does not match an existing sms.');
    return;
  }
  if (((s as any).SMSMessageRead ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).telefon = (s as any).telefon ?? {})['UnreadSMS'] = ((s as any).telefon['UnreadSMS'] ?? 0) + (1);
    ((s as any).SMSMessageRead = (s as any).SMSMessageRead ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  return;
  scene.build();
}

function enterUpdateTimeFromId(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', qspFunc(s, 'SMStext_builder', 'get_index_from_id', ((s as any).locArgs?.[1] ?? 0))]; enterUpdateTime(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  scene.build();
}

function enterUpdateTime(s: GameState, scene: SceneBuilder): void {
  if (! qspFunc(s, 'SMStext_builder', 'does_index_exist', ((s as any).locArgs?.[1] ?? 0))) {
    alert('SMStext_builder, update_time Error: SMSIndex of ' + ((s as any).locArgs?.[1] ?? 0) + ' does not match an existing sms.');
    return;
  }
  ((s as any).SMSTime = (s as any).SMSTime ?? {})[((s as any).locArgs?.[1] ?? 0)] = '' + qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? 0), ((s as any).minut ?? 0)) + ' ' + ((s as any).weekName ?? 0) + ' ' + ((s as any).day ?? 0) + ' ' + ((s as any).monthName ?? 0) + ' ' + ((s as any).year ?? 0) + '';
  return;
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
