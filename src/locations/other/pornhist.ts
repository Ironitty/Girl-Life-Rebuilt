import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShort(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  // TODO-QSP: :pornhistloop
  if (((s as any).pornfilmMonth ?? 0)?.[String((s as any).i ?? 0)] >= 10  &&  ((s as any).pornfilmDay ?? 0)?.[String((s as any).i ?? 0)] >= 10) {
    // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-<<pornfilmMonth[i]>>-<<pornfilmDay[i]>>'
  } else {
    if (((s as any).pornfilmMonth ?? 0)?.[String((s as any).i ?? 0)] >= 10  &&  ((s as any).pornfilmDay ?? 0)?.[String((s as any).i ?? 0)] < 10) {
      // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-<<pornfilmMonth[i]>>-0<<pornfilmDay[i]>>'
    } else {
      if (((s as any).pornfilmMonth ?? 0)?.[String((s as any).i ?? 0)] < 10  &&  ((s as any).pornfilmDay ?? 0)?.[String((s as any).i ?? 0)] >= 10) {
        // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-0<<pornfilmMonth[i]>>-<<pornfilmDay[i]>>'
      } else {
        // TODO-QSP: $pornfilmDate[i] = '<<pornfilmYear[i]>>-0<<pornfilmMonth[i]>>-0<<pornfilmDay[i]>>'
      }
    }
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
  scene.build();
}

function enterPdetail(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><h1>Filmography of <font color="magenta"><<$pfname>></font></h1></center...
  scene.text(`<center><h1>Filmography of <font color="magenta">${((s as any).pfname ?? 0)}</font></h1></center>`);
  scene.text('<center><table width="90%" cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  (s as any).i = 1;
  // TODO-QSP: :pornhistloop2
  if (((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)] === '') {
    if ((!((s as any).firstvariable ?? 0))) {
      (s as any).firstvariable = 1;
      (s as any).fvvalue = ((s as any).i ?? 0);
    }
    // TODO-QSP: dynamic text: <b><a href="exec:$porntitle[fvvalue] = input('<font color=#FF0000>WARNING!</font...
    scene.text(`<b><a href="exec:$porntitle[fvvalue] = input('<font color=#FF0000>WARNING!</font> No matter where you clicked, it will name the <b>first</b> unnamed movie! This action can be done only once!') & gs 'pornhist', 'pdetail'">${((s as any).i ?? 0)}. Movie</a></b>`);
  } else {
    if (((s as any).i ?? 0) === 1) {
      // TODO-QSP: dynamic text: <b><font color="brown"><<$porntitle[i]>><<$pfname>></font></b>
      scene.text(`<b><font color="brown">${((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)]}${((s as any).pfname ?? 0)}</font></b>`);
    } else {
      // TODO-QSP: dynamic text: <b><font color="brown"><<$porntitle[i]>></font></b>
      scene.text(`<b><font color="brown">${((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)]}</font></b>`);
    }
  }
  if (((s as any).daystart ?? 0) - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)] === 0) {
    // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (Today)</font>
    scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)]} (Today)</font>`);
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (Yesterday)</font>
      scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)]} (Yesterday)</font>`);
    } else {
      // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (<<daystart - pornday...
      scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)]} (${((s as any).daystart ?? 0) - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)]} days ago)</font>`);
    }
  }
  // TODO-QSP: dynamic text:  <b>Actress age:</b> <font size=2><<pornfilmActAge[i]>></font> <font size=2>(App...
  scene.text(` <b>Actress age:</b> <font size=2>${((s as any).pornfilmActAge ?? 0)?.[String((s as any).i ?? 0)]}</font> <font size=2>(Appears: ${((s as any).pornfilmAppAge ?? 0)?.[String((s as any).i ?? 0)]})</font>`);
  if (((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)] === 'Fifty fans of') {
    // TODO-QSP: dynamic text:  <b>Actors:</b> <font size=2><<$pornfilmActor[i]>> <<$pfname>> and <<$pfname>> h...
    scene.text(` <b>Actors:</b> <font size=2>${((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)]} ${((s as any).pfname ?? 0)} and ${((s as any).pfname ?? 0)} herself</font>`);
  } else {
    // TODO-QSP: dynamic text:  <b>Actors:</b> <font size=2><<$pornfilmActor[i]>> and <<$pfname>></font>
    scene.text(` <b>Actors:</b> <font size=2>${((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)]} and ${((s as any).pfname ?? 0)}</font>`);
  }
  // TODO-QSP: dynamic text:  <b>Income:</b> <font size=2><<$func('money', 'string_profit', pornfilmCash[i])>...
  scene.text(` <b>Income:</b> <font size=2>${qspFunc(s, 'money', 'string_profit', ((s as any).pornfilmCash ?? 0)?.[String((s as any).i ?? 0)])}</font>`);
  if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 15) {
    scene.text(' <b>Acting:</b> <font size=2>Your acting was as fake as a bad boobjob. Did you get paid for this?</font>');
  } else {
    if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 30) {
      scene.text(' <b>Acting:</b> <font size=2>You were acting quite fake, but it was passable.</font>');
    } else {
      if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 45) {
        scene.text(' <b>Acting:</b> <font size=2>You probably could have done better, but at least you were not totally unconvincing.</font>');
      } else {
        if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 60) {
          scene.text(' <b>Acting:</b> <font size=2>You were actually acting, even if it wasn\'t entirely convincing.</font>');
        } else {
          if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 75) {
            scene.text(' <b>Acting:</b> <font size=2>You were acting really well.</font>');
          } else {
            if (((s as any).pornfilmacting ?? 0)?.[String((s as any).i ?? 0)] < 90) {
              scene.text(' <b>Acting:</b> <font size=2>As a professional actress, everybody believed your every gesture and sentence.</font>');
            } else {
              scene.text(' <b>Acting:</b> <font size=2>Your performance was phenomenal. You may actually win some awards with this one.</font>');
            }
          }
        }
      }
    }
  }
  if (((s as any).pornfilmvnesh ?? 0)?.[String((s as any).i ?? 0)] >= 9) {
    scene.text(' <b>Look:</b> <font size=2>Amazingly beautiful.</font>');
  } else {
    if (((s as any).pornfilmvnesh ?? 0)?.[String((s as any).i ?? 0)] >= 7) {
      scene.text(' <b>Look:</b> <font size=2>Beautiful.</font>');
    } else {
      if (((s as any).pornfilmvnesh ?? 0)?.[String((s as any).i ?? 0)] >= 5) {
        scene.text(' <b>Look:</b> <font size=2>Attractive.</font>');
      } else {
        scene.text(' <b>Look:</b> <font size=2>Unnoticeable.</font>');
      }
    }
  }
  // TODO-QSP: dynamic text:  <b>Description:</b> <font size=2><<$pfilmtext>></font>
  scene.text(` <b>Description:</b> <font size=2>${((s as any).pfilmtext ?? 0)}</font>`);
  if (((s as any).pornfilmstory ?? 0)?.[String((s as any).i ?? 0)] === '') {
    if ((!((s as any).firstvariable2 ?? 0))) {
      (s as any).firstvariable2 = 1;
      (s as any).fvvalue2 = ((s as any).i ?? 0);
    }
    scene.text(' <b>Story:</b> <font size=2><a href="exec:$pornfilmstory[fvvalue2] = input(\'<font color=#FF0000>WARNING!</font> No matter where you clicked, you will enter the story of the <b>first</b> movie missing it! This action can be done only once!\') & gs \'pornhist\', \'pdetail\'">Missing story</a></font>');
  } else {
    // TODO-QSP: dynamic text:  <b>Story:</b> <font color=#1B4532 size=2><<$pornfilmstory[i]>></font>
    scene.text(` <b>Story:</b> <font color=#1B4532 size=2>${((s as any).pornfilmstory ?? 0)?.[String((s as any).i ?? 0)]}</font>`);
  }
  // TODO-QSP: dynamic text:  <b>Tags: <font color=#541717 size=2><<$pfilmtags>></font></b>
  scene.text(` <b>Tags: <font color=#541717 size=2>${((s as any).pfilmtags ?? 0)}</font></b>`);
  if (((s as any).pornDanger ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).pfType ?? 0) === 1) {
    scene.text(' <font color="red" size=2><b>You were unprotected and fertile during the shoot.</b></font>');
  }
  if (((s as any).i ?? 0) < ((s as any).film ?? 0)) {
    // TODO-QSP: *p '<font color="sienna"><hr></font>'
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'pornhistloop2'
  }
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Return to Reputation', handler: (st: GameState) => {
    // TODO-QSP: killvar 'pornfilmdesc'
    // TODO-QSP: killvar 'porntag'
    (st as any).menu_page = 5;
  }, goto: ['$menu_character', 'reputation'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'short':
      enterShort(s, scene);
      break;
    case 'pdetail':
      enterPdetail(s, scene);
      break;
    default:
      enterShort(s, scene);
      break;
  }
}

export const pornhist: LocationDef = {
  name: 'pornhist',
  title: '<center><table width="90%" cellspacing="0" cellpadding="20" ',
  region: 'other',
  enter: enter,
};
