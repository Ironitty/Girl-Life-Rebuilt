import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterShort(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  (s as any).pfilmhistory = '';
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
  // TODO-QSP: end
  scene.build();
}

function enterPdetail(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><h1>Filmography of <font color="magenta"><<$pfname>></font></h1></center...
  scene.text(`<center><h1>Filmography of <font color="magenta">${((s as any).pfname || '')}</font></h1></center>`);
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
    scene.text(`<b><a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $porntitle[fvvalue] = input(\\u0027<font color=#FF0000>WARNING!</font> No matter where you clicked, it will name the <b>first</b> unnamed movie! This action can be done only once!\\u0027) */ return s; }); window.__gameStore.getState().doGoto(\\u0027pornhist\\u0027, \\u0027pdetail\\u0027); return false;">${((s as any).i || '')}. Movie</a></b>`);
  } else {
    if (((s as any).i ?? 0) === 1) {
      // TODO-QSP: dynamic text: <b><font color="brown"><<$porntitle[i]>><<$pfname>></font></b>
      scene.text(`<b><font color="brown">${((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)] ?? ''}${((s as any).pfname || '')}</font></b>`);
    } else {
      // TODO-QSP: dynamic text: <b><font color="brown"><<$porntitle[i]>></font></b>
      scene.text(`<b><font color="brown">${((s as any).porntitle ?? 0)?.[String((s as any).i ?? 0)] ?? ''}</font></b>`);
    }
  }
  if (((s as any).daystart ?? 0) - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)] === 0) {
    // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (Today)</font>
    scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)] ?? ''} (Today)</font>`);
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (Yesterday)</font>
      scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)] ?? ''} (Yesterday)</font>`);
    } else {
      // TODO-QSP: dynamic text:  <b>Production date:</b> <font size=2><<$pornfilmDate[i]>> (<<daystart - pornday...
      scene.text(` <b>Production date:</b> <font size=2>${((s as any).pornfilmDate ?? 0)?.[String((s as any).i ?? 0)] ?? ''} (${((s as any).daystart ?? '') - ((s as any).porndaystart ?? 0)?.[String((s as any).i ?? 0)]} days ago)</font>`);
    }
  }
  // TODO-QSP: dynamic text:  <b>Actress age:</b> <font size=2><<pornfilmActAge[i]>></font> <font size=2>(App...
  scene.text(` <b>Actress age:</b> <font size=2>${((s as any).pornfilmActAge ?? 0)?.[String((s as any).i ?? 0)] ?? ''}</font> <font size=2>(Appears: ${((s as any).pornfilmAppAge ?? 0)?.[String((s as any).i ?? 0)] ?? ''})</font>`);
  if (((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)] === 'Fifty fans of') {
    // TODO-QSP: dynamic text:  <b>Actors:</b> <font size=2><<$pornfilmActor[i]>> <<$pfname>> and <<$pfname>> h...
    scene.text(` <b>Actors:</b> <font size=2>${((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)] ?? ''} ${((s as any).pfname || '')} and ${((s as any).pfname || '')} herself</font>`);
  } else {
    // TODO-QSP: dynamic text:  <b>Actors:</b> <font size=2><<$pornfilmActor[i]>> and <<$pfname>></font>
    scene.text(` <b>Actors:</b> <font size=2>${((s as any).pornfilmActor ?? 0)?.[String((s as any).i ?? 0)] ?? ''} and ${((s as any).pfname || '')}</font>`);
  }
  // TODO-QSP: dynamic text:  <b>Income:</b> <font size=2><<$func('money', 'string_profit', pornfilmCash[i])>...
  scene.text(` <b>Income:</b> <font size=2>${qspFunc(s, 'money', 'string_profit', ((s as any).pornfilmCash ?? 0)?.[String((s as any).i ?? 0)] ?? '')}</font>`);
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
  scene.text(` <b>Description:</b> <font size=2>${((s as any).pfilmtext || '')}</font>`);
  if (((s as any).pornfilmstory ?? 0)?.[String((s as any).i ?? 0)] === '') {
    if ((!((s as any).firstvariable2 ?? 0))) {
      (s as any).firstvariable2 = 1;
      (s as any).fvvalue2 = ((s as any).i ?? 0);
    }
    scene.text(' <b>Story:</b> <font size=2><a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $pornfilmstory[fvvalue2] = input(\\u0027<font color=#FF0000>WARNING!</font> No matter where you clicked, you will enter the story of the <b>first</b> movie missing it! This action can be done only once!\\u0027) */ return s; }); window.__gameStore.getState().doGoto(\\u0027pornhist\\u0027, \\u0027pdetail\\u0027); return false;">Missing story</a></font>');
  } else {
    // TODO-QSP: dynamic text:  <b>Story:</b> <font color=#1B4532 size=2><<$pornfilmstory[i]>></font>
    scene.text(` <b>Story:</b> <font color=#1B4532 size=2>${((s as any).pornfilmstory ?? 0)?.[String((s as any).i ?? 0)] ?? ''}</font>`);
  }
  // TODO-QSP: dynamic text:  <b>Tags: <font color=#541717 size=2><<$pfilmtags>></font></b>
  scene.text(` <b>Tags: <font color=#541717 size=2>${((s as any).pfilmtags || '')}</font></b>`);
  if (((s as any).pornDanger ?? 0)?.[String((s as any).i ?? 0)] === 1  &&  ((s as any).pfType ?? 0) === 1) {
    scene.text(' <font color="red" size=2><b>You were unprotected and fertile during the shoot.</b></font>');
  }
  if (((s as any).i ?? 0) < ((s as any).film ?? 0)) {
    scene.text('<font color="sienna"><hr></font>');
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'pornhistloop2'
  }
  scene.text('</td></tr></table></center>');
  // TODO-QSP: end
  (s as any).pornfilmdesc = qspUntranslated(s, "{", { location: "pornhist" });
  (s as any).film_type = ((s as any).locArgs?.[0] ?? 0);
  if (((s as any).tits ?? 0) >= 4) {
    // TODO-QSP: $porndesc[1] = 'Titfuck'
  } else {
    // TODO-QSP: $porndesc[1] = 'Handjob'
  }
  // TODO-QSP: $porndesc[2] = 'Blowjob'
  // TODO-QSP: $porndesc[3] = 'Vaginal sex with facial'
  // TODO-QSP: $porndesc[4] = 'Vaginal and anal sex with facial'
  // TODO-QSP: $porndesc[5] = 'Threesome with anal creampie and facial'
  // TODO-QSP: $porndesc[6] = 'Threesome with double penetration, facial and swallowing'
  // TODO-QSP: $porndesc[7] = 'Vaginal sex with creampie'
  // TODO-QSP: $porndesc[8] = 'Double penetration with vaginal creampies'
  // TODO-QSP: $porndesc[9] = 'Spitroast with two guys with creampie and swallowing'
  // TODO-QSP: $porndesc[10] = 'Four guy gangbang with vaginal sex and cumshots'
  // TODO-QSP: $porndesc[11] = 'Four guy gangbang with vaginal sex and creampies'
  // TODO-QSP: $porndesc[12] = 'Four guy gangbang with anal sex and anal creampies'
  // TODO-QSP: $porndesc[13] = 'Two double penetration with four guys, vaginal and anal creampies'
  // TODO-QSP: $porndesc[14] = 'Gangbang with 50 guys'
  // TODO-QSP: $porndesc[15] = 'Anal sex with anal creampie'
  // TODO-QSP: $porndesc[16] = 'Anal sex with cumshot'
  // TODO-QSP: $porndesc[17] = 'Lesbian sex with double dildo'
  // TODO-QSP: $porndesc[18] = 'Lesbian sex with strapon'
  // TODO-QSP: $porndesc[19] = 'Primary role in MFF threesome'
  // TODO-QSP: $porndesc[20] = 'Secondary role in MFF threesome'
  if (((s as any).film_type ?? 0) === 1) {
    (s as any).pfType = 0;
    (s as any).pcash = 20;
    (s as any).pfactor = 1;
    (s as any).actbonus = 1;
    if (((s as any).tits ?? 0) >= 4) {
      (s as any).tags = 'titjob, handjob, cumshot';
      (s as any).pfilmtext = 'You gave a guy a titfuck and he came on your tits.';
    } else {
      (s as any).tags = 'handjob, cumshot';
      (s as any).pfilmtext = 'You jerked off a guy and he came on your tits.';
    }
  } else {
    if (((s as any).film_type ?? 0) === 2) {
      (s as any).pfType = 0;
      (s as any).pcash = 30;
      (s as any).pfactor = 1;
      (s as any).actbonus = 1;
      (s as any).tags = 'blowjob, facial';
      (s as any).pfilmtext = 'You gave a guy a blowjob and got a facial.';
    } else {
      if (((s as any).film_type ?? 0) === 3) {
        (s as any).pfType = 0;
        (s as any).pcash = 50;
        (s as any).pfactor = 1;
        (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
        (s as any).tags = 'blowjob, vaginal, facial';
        (s as any).pfilmtext = 'You gave a guy a blowjob and he fucked you before giving you a facial.';
      } else {
        if (((s as any).film_type ?? 0) === 4) {
          (s as any).pfType = 0;
          (s as any).pcash = 60;
          (s as any).pfactor = 1;
          (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
          (s as any).tags = 'blowjob, facial, vaginal, anal';
          (s as any).pfilmtext = 'You gave a guy a blowjob and he fucked your pussy and ass before giving you a facial.';
        } else {
          if (((s as any).film_type ?? 0) === 5) {
            (s as any).pfType = 0;
            (s as any).pcash = 70;
            (s as any).pfactor = 2;
            (s as any).actbonus = Math.floor(Math.random() * 3) + 1;
            (s as any).tags = 'facial, vaginal, anal, blowjob, anal creampie';
            (s as any).pfilmtext = 'A guy fucked your pussy and ass and came in your ass while you sucked off another guy who gave you a facial.';
          } else {
            if (((s as any).film_type ?? 0) === 6) {
              (s as any).pfType = 0;
              (s as any).pcash = 90;
              (s as any).pfactor = 2;
              (s as any).actbonus = Math.floor(Math.random() * 3) + 1;
              (s as any).tags = 'DP, vaginal, anal, blowjob, facial, swallowing';
              (s as any).pfilmtext = 'A guy fucked your pussy and ass while you sucked off another guy. They then double penetrated you before cumming on your face. You swallowed their loads.';
            } else {
              if (((s as any).film_type ?? 0) === 7) {
                (s as any).pfType = 1;
                (s as any).pcash = 80;
                (s as any).pfactor = 1;
                (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                (s as any).tags = 'vaginal';
                (s as any).pfilmtext = 'You gave a guy a blowjob before he fucked you and gave you a creampie.';
              } else {
                if (((s as any).film_type ?? 0) === 8) {
                  (s as any).pfType = 1;
                  (s as any).pcash = 100;
                  (s as any).pfactor = 2;
                  (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                  (s as any).tags = 'DP, vaginal, anal';
                  (s as any).pfilmtext = 'Two guys fucked you in double penetration before giving you a double creampie.';
                } else {
                  if (((s as any).film_type ?? 0) === 9) {
                    (s as any).pfType = 1;
                    (s as any).pcash = 90;
                    (s as any).pfactor = 2;
                    (s as any).actbonus = Math.floor(Math.random() * 3) + 1;
                    (s as any).tags = 'blowjob, vaginal, swallowing';
                    (s as any).pfilmtext = 'Two guys fucked your pussy and mouth. One gave you a creampie and the other came in your mouth and you swallowed.';
                  } else {
                    if (((s as any).film_type ?? 0) === 10) {
                      (s as any).pfType = 1;
                      (s as any).pcash = 120;
                      (s as any).pfactor = 4;
                      (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                      (s as any).tags = 'vaginal, cumshot';
                      (s as any).pfilmtext = 'Four guys fucked your pussy and they all ejaculated on your body and face.';
                    } else {
                      if (((s as any).film_type ?? 0) === 11) {
                        (s as any).pfType = 1;
                        (s as any).pcash = 150;
                        (s as any).pfactor = 4;
                        (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                        (s as any).tags = 'vaginal';
                        (s as any).pfilmtext = 'Four guys fucked your pussy, giving you four creampies.';
                      } else {
                        if (((s as any).film_type ?? 0) === 12) {
                          (s as any).pfType = 0;
                          (s as any).pcash = 150;
                          (s as any).pfactor = 4;
                          (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                          (s as any).tags = 'anal, anal creampie';
                          (s as any).pfilmtext = 'Four guys fucked your ass, giving you four anal creampies.';
                        } else {
                          if (((s as any).film_type ?? 0) === 13) {
                            (s as any).pfType = 1;
                            (s as any).pcash = 150;
                            (s as any).pfactor = 4;
                            (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                            (s as any).tags = 'DP, vaginal, anal';
                            (s as any).pfilmtext = 'Four guys fucked you in double penetration in pairs. You got two double creampies.';
                          } else {
                            if (((s as any).film_type ?? 0) === 14) {
                              (s as any).pfType = 1;
                              (s as any).pcash = 300;
                              (s as any).pfactor = 50;
                              (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                              (s as any).tags = 'vaginal, anal, blowjob, cumshot, facial, swallowing';
                              (s as any).pfilmtext = 'Fifty of your fans fucked you however they could. Almost all of them came in your pussy.';
                              (s as any).pstory = 'You called out to your fans on the internet, giving them an opportunity to fuck you however they like.';
                            } else {
                              if (((s as any).film_type ?? 0) === 15) {
                                (s as any).pfType = 0;
                                (s as any).pcash = 50;
                                (s as any).pfactor = 1;
                                (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                                (s as any).tags = 'blowjob, anal, anal creampie';
                                (s as any).pfilmtext = 'You gave a guy a blowjob before he fucked your ass and gave you an anal creampie.';
                              } else {
                                if (((s as any).film_type ?? 0) === 16) {
                                  (s as any).pfType = 0;
                                  (s as any).pcash = 50;
                                  (s as any).pfactor = 1;
                                  (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                                  (s as any).tags = 'blowjob, anal, cumshot';
                                  (s as any).pfilmtext = 'You gave a guy a blowjob and he fucked your ass. He came over your ass.';
                                } else {
                                  if (((s as any).film_type ?? 0) === 17) {
                                    (s as any).pfType = 0;
                                    (s as any).pcash = 50;
                                    (s as any).pfactress = 1;
                                    (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                                    (s as any).tags = 'tribbing, double dildo, vaginal';
                                    (s as any).pfilmtext = 'You had sex with a girl using a double dildo.';
                                  } else {
                                    if (((s as any).film_type ?? 0) === 18) {
                                      (s as any).pfType = 0;
                                      (s as any).pcash = 50;
                                      (s as any).pfactress = 1;
                                      (s as any).actbonus = Math.floor(Math.random() * 2) + 1;
                                      (s as any).tags = 'strapon, vaginal, anal';
                                      (s as any).pfilmtext = 'You had sex with a girl using a strapon.';
                                    } else {
                                      if (((s as any).film_type ?? 0) === 19) {
                                        (s as any).pfType = 0;
                                        (s as any).pcash = 100;
                                        (s as any).pfactor = 1;
                                        (s as any).pfactress = 1;
                                        (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                                        (s as any).tags = 'mff, blowjob, anal, cumshare';
                                        (s as any).pfilmtext = 'You took part in an MFF threesome, sucking a guy off before he fucked your ass while the girl licked your pussy. You got an anal creampie and shared it with the girl.';
                                      } else {
                                        if (((s as any).film_type ?? 0) === 20) {
                                          (s as any).pfType = 0;
                                          (s as any).pcash = 100;
                                          (s as any).pfactor = 1;
                                          (s as any).pfactress = 1;
                                          (s as any).actbonus = Math.floor(Math.random() * 2) + 2;
                                          (s as any).tags = 'mff, blowjob, anal, creampie, cumshare, cuni';
                                          (s as any).pfilmtext = 'You took part in an MFF threesome, sucking him off before he fucked her ass while you licked her pussy. She shared her anal creampie with you.';
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).porntag = qspUntranslated(s, "{", { location: "pornhist" });
  if (((s as any).pornfilmAppAge ?? 0)?.[String((s as any).i ?? 0)] < 20) {
    (s as any).pfilmtags = 'teen';
  } else {
    if (((s as any).pornfilmAppAge ?? 0)?.[String((s as any).i ?? 0)] >= 40) {
      (s as any).pfilmtags = 'mature';
    } else {
      (s as any).pfilmtags = '';
    }
  }
  if (((s as any).pornfilmpreg ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags+=', pregnant'
    } else {
      (s as any).pfilmtags = 'pregnant';
    }
  }
  if (((s as any).pfactor ?? 0) === 0  &&  ((s as any).pfactress ?? 0) > 0) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags += ', lesbian'
    } else {
      (s as any).pfilmtags = 'lesbian';
    }
  }
  if (((s as any).pfactor ?? 0) > 2  &&  (!((s as any).pfactress ?? 0))) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags += ', gangbang'
    } else {
      (s as any).pfilmtags = 'gangbang';
    }
  } else {
    if (((s as any).pfactor ?? 0) > 2  &&  ((s as any).pfactress ?? 0) > 1) {
      if (((s as any).pfilmtags ?? 0) !== '') {
        // TODO-QSP: $pfilmtags += ', orgy'
      } else {
        (s as any).pfilmtags = 'orgy';
      }
    } else {
      if (((s as any).pfactor ?? 0) === 2  &&  (!((s as any).pfactress ?? 0))) {
        if (((s as any).pfilmtags ?? 0) !== '') {
          // TODO-QSP: $pfilmtags += ', threesome'
        } else {
          (s as any).pfilmtags = 'threesome';
        }
      } else {
        if (((s as any).pfactor ?? 0) === 1  &&  ((s as any).pfactress ?? 0) === 1) {
          if (((s as any).pfilmtags ?? 0) !== '') {
            // TODO-QSP: $pfilmtags += ', threesome'
          } else {
            (s as any).pfilmtags = 'threesome';
          }
        } else {
          if (((s as any).pfactor ?? 0) === 0  &&  ((s as any).pfactress ?? 0) === 2) {
            if (((s as any).pfilmtags ?? 0) !== '') {
              // TODO-QSP: $pfilmtags += ', threesome'
            } else {
              (s as any).pfilmtags = 'threesome';
            }
          }
        }
      }
    }
  }
  if (((s as any).pfType ?? 0) === 1) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags += ', creampie'
    } else {
      (s as any).pfilmtags = 'creampie';
    }
  }
  if (((s as any).tits ?? 0) >= 4) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags += ', big tits'
    } else {
      (s as any).pfilmtags = 'big tits';
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
    if (((s as any).pfilmtags ?? 0) !== '') {
      // TODO-QSP: $pfilmtags += ', big ass'
    } else {
      (s as any).pfilmtags = 'big ass';
    }
  }
  if (((s as any).pfilmtags ?? 0) !== '') {
    // TODO-QSP: $pfilmtags += ', '+$tags
  } else {
    (s as any).pfilmtags = ((s as any).tags ?? 0);
  }
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
      enterDefault(s, scene);
      break;
  }
}

export const pornhist: LocationDef = {
  name: 'pornhist',
  title: '<center><table width="90%" cellspacing="0" cellpadding="20" ',
  region: 'other',
  enter: enter,
};
