// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  // TODO-QSP: :pornhistloop
  if (((s as any).pornfilmMonth ?? 0)?.[String((s as any).i ?? 0)] >= 10  &&  ((s as any).pornfilmDay ?? 0)?.[String((s as any).i ?? 0)] >= 10) {
    // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-<<pornfilmMonth[i]>>-<<pornfilmDay[i]>>'
  } else {
    // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-<<pornfilmMonth[i]>>-0<<pornfilmDay[i]>>'
    if (((s as any).pornfilmMonth ?? 0)?.[String((s as any).i ?? 0)] < 10  &&  ((s as any).pornfilmDay ?? 0)?.[String((s as any).i ?? 0)] >= 10) {
      // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-0<<pornfilmMonth[i]>>-<<pornfilmDay[i]>>'
    } else {
      // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-0<<pornfilmMonth[i]>>-0<<pornfilmDay[i]>>'
    }
    if (((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)] === '') {
      // TODO-QSP: $pfilmhistory += '● <b><<i>>. Movie</b><br><font size=2></font><br>'
    } else {
      if (((s as any).i ?? 0) === 1) {
        // TODO-QSP: $pfilmhistory += '● <b>'+$porntitle[i]+'<<$pfname>></b><br><font size=2>'+$pfilmtext+'</font><br>'
      } else {
        // TODO-QSP: $pfilmhistory += '● <b>'+$porntitle[i]+'</b><br><font size=2>'+$pfilmtext+'</font><br>'
      }
    }
    if (((s as any).i ?? 0) < ((s as any).film ?? 0)) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'pornhistloop'
    }
  }
  scene.build();
}

export const pornhist: LocationDef = {
  name: 'pornhist',
  title: '<center><table width="90%" cellspacing="0" cellpadding="20" ',
  region: 'other',
  enter: enter,
};
