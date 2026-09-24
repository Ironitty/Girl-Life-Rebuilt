import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShowSms(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_curSMS = qspUntranslated(s, "SMSMessage[SMSSelfieVars['SMSIndex']]", { location: "SMS_selfies" });
  (s as any).temp_curReplies = qspUntranslated(s, "SMSReplies[SMSSelfieVars['SMSIndex']]", { location: "SMS_selfies" });
  // TODO-QSP: $SMSMessage[SMSSelfieVars['SMSIndex']] = $SMSSelfieVars['text']
  // TODO-QSP: $SMSReplies[SMSSelfieVars['SMSIndex']] = ''
  qspCall(s, 'telefon', 'show_sms', (((s as any).SMSSelfieVars ?? 0)?.['SMSIndex']));
  // TODO-QSP: $SMSMessage[SMSSelfieVars['SMSIndex']] = $temp_curSMS
  // TODO-QSP: $SMSReplies[SMSSelfieVars['SMSIndex']] = $temp_curReplies
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'show_sms', (((s as any).SMSSelfieVars ?? 0)?.['SMSIndex']));
  // TODO-QSP: end
  scene.build();
}

function enterSendSelfie(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['control'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['SMSIndex'] = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_return_string = '';
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['n_args'] = 0;
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 3;
  // TODO-QSP: :add_rest_ARGS_loop
  if (((s as any).SMSSelfieVars ?? 0)?.['i'] < ((s as any).SMSSelfieVars ?? 0)?.['n_args']) {
    if (((s as any).ARGS ?? 0)[((s as any).SMSSelfieVars ?? 0)?.['i']] === '') {
      // TODO-QSP: $temp_return_string += "<<ARGS[SMSSelfieVars['i']]>>, "
    } else {
      // TODO-QSP: $temp_return_string += "'<<$ARGS[SMSSelfieVars['i']]>>', "
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    // TODO-QSP: jump 'add_rest_ARGS_loop'
  }
  (s as any).temp_return_string = (String(((s as any).temp_return_string ?? 0)).slice((1)-1, ((1)-1)+((String(((s as any).temp_return_string ?? 0)).length) - 2)));
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['return_string'] = ((s as any).temp_return_string ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSelfieMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSelfieMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'phone_selfies', 'Phone_selfie_totals');
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = '<table width=80%><th>Selfies</th><tr><td>';
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 0;
  // TODO-QSP: :LocationLoop
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027SMS_selfies/u0027, /u0027showlocation/u0027); return false;">' + qspUntranslated(s, "selfieLocDesc[SMSSelfieVars['i']]", { location: "SMS_selfies" }) + ' selfies</a>');
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr></td><tr><td>');
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
  if (((s as any).SMSSelfieVars ?? 0)?.['i'] < Object.keys((s as any).selfieLoc ?? {}).length) {
    // TODO-QSP: jump 'LocationLoop'
  }
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027SMS_selfies/u0027, /u0027exit/u0027); return false;">Exit</a></td></tr></table>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowlocation(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = '<table width=80%><tr><th><font color="maroon">' + qspUntranslated(s, "selfieLocDesc[ARGS[1]]", { location: "SMS_selfies" }) + ' selfies</font></th></tr>';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), qspUntranslated(s, "selfieLoc[ARGS[1]]", { location: "SMS_selfies" })]; enterListretrieve(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><td colspan=3><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027SMS_selfies/u0027, /u0027selfie_menu/u0027); return false;">Go Back</a></td></tr>');
  ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><td colspan=3><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027SMS_selfies/u0027, /u0027exit/u0027); return false;">Exit</a></td></tr></table>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowSms(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterListretrieve(s: GameState, scene: SceneBuilder): void {
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('c'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveClothedSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('sw'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveSwimSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('u'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveUnderwearSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('n'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveNudeSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('b'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveBathSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('sh'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveShowerSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('ft'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveTitflashSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('fa'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrieveAssflashSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((String(((s as any).SMSSelfieVars ?? 0)?.['control']).indexOf(String('fp'))) + 1)  > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0)]; enterRetrievePussyflashSelfies(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRetrieveClothedSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Clothed selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 1;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_closelfie[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 3) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'clothed', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieClotot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveSwimSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Swimwear selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop1
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_swim[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'bikini', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieSwimtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop1'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveUnderwearSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieUndtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Underwear selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop2
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_undselfie[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'underwear', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieUndtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop2'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveNudeSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieNudtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Nude selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop3
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_nudselfie[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'nude', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieNudtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop3'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveBathSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieBathtot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Bath selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop4
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_bathselfie[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'bath', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieBathtot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop4'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveShowerSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieShowertot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Shower selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop5
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_showerselfie[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'shower', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieShowertot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop5'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveTitflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieTitFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Flashing tits selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop6
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_titflash[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'titflash', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieTitFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop6'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrieveAssflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfieAssFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Flashing ass selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop7
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_assflash[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'assflash', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfieAssFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop7'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  scene.build();
}

function enterRetrievePussyflashSelfies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).selfiePussyFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<tr><th colspan=3>Flashing pussy selfies</th></tr><tr>');
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = 1;
    // TODO-QSP: :temp_loop8
    // TODO-QSP: dynamic 'phone_locval = <<$ARGS[2]>>_pussyflash[<<SMSSelfieVars[''i'']>>]'
    if (((s as any).phone_locval ?? 0) === 1) {
      if (((s as any).SMSSelfieVars ?? 0)?.['column'] === 2) {
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr><tr>');
        ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = 0;
      }
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['column'] = ((s as any).SMSSelfieVars['column'] ?? 0) + (1);
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td width="33%">' + qspFunc(s, 'phone_selfies_popup', 'SMS_set_selfie', ((s as any).locArgs?.[2] ?? 0), 'pussyflash', ((s as any).locArgs?.[1] ?? 0), (((s as any).SMSSelfieVars ?? 0)?.['i'])) + '</td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['i'] = ((s as any).SMSSelfieVars['i'] ?? 0) + (1);
    if (((s as any).SMSSelfieVars ?? 0)?.['i'] <= ((s as any).selfiePussyFlashTot ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: jump 'temp_loop8'
    }
    if (((s as any).SMSSelfieVars ?? 0)?.['column'] !== 2) {
      ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('<td></td>');
    }
    ((s as any).SMSSelfieVars = (s as any).SMSSelfieVars ?? {})['text'] = ((s as any).SMSSelfieVars['text'] ?? 0) + ('</tr>');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'show_sms':
      enterShowSms(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'send_selfie':
      enterSendSelfie(s, scene);
      break;
    case 'selfie_menu':
      enterSelfieMenu(s, scene);
      break;
    case 'showlocation':
      enterShowlocation(s, scene);
      break;
    case 'listretrieve':
      enterListretrieve(s, scene);
      break;
    case 'retrieve_clothed_selfies':
      enterRetrieveClothedSelfies(s, scene);
      break;
    case 'retrieve_swim_selfies':
      enterRetrieveSwimSelfies(s, scene);
      break;
    case 'retrieve_underwear_selfies':
      enterRetrieveUnderwearSelfies(s, scene);
      break;
    case 'retrieve_nude_selfies':
      enterRetrieveNudeSelfies(s, scene);
      break;
    case 'retrieve_bath_selfies':
      enterRetrieveBathSelfies(s, scene);
      break;
    case 'retrieve_shower_selfies':
      enterRetrieveShowerSelfies(s, scene);
      break;
    case 'retrieve_titflash_selfies':
      enterRetrieveTitflashSelfies(s, scene);
      break;
    case 'retrieve_assflash_selfies':
      enterRetrieveAssflashSelfies(s, scene);
      break;
    case 'retrieve_pussyflash_selfies':
      enterRetrievePussyflashSelfies(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const SMS_selfies: LocationDef = {
  name: 'SMS_selfies',
  region: 'other',
  enter: enter,
};
