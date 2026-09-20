import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).dildonumber ?? 0))) {
    (s as any).dildohand = 0;
  }
  if (((s as any).dildonumber ?? 0) > 0) {
    (s as any).dildohand = (((s as any).dildonumber ?? 0) + 1) * 5;
  }
  if ((!((s as any).mastrOnce ?? 0))) {
    (s as any).mastrOnce = 1;
    (s as any).org_temp = ((s as any).orgasm ?? 0);
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'bedrPar'  ||  ((s as any).loc ?? 0) === 'gad_gpbarn') {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/mast/start.jpg"></center>
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/shared/sex/mast/start.jpg"></center>`);
  }
  if (((s as any).loc ?? 0) === 'vanrPar') {
    // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/shared/sex/mast/startvann...
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh || '')} src="images/shared/sex/mast/startvann.mp4"></video></center>`);
  }
  if (((s as any).sisboytrio ?? 0) > 0  &&  ((s as any).sis_watch ?? 0) === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
    (s as any).sis_watch = 1;
    if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
      (s as any).sis_watch = 2;
      scene.text('Anya smiles and lets you carry on.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDildoOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_horny ?? 0) > 0) {
    scene.actions([
      { label: 'Caress your clitoris', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'clit_play');
  } },
      { label: 'Put a finger in your ass', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'anal_fingering');
  } },
      { label: 'Put a finger in your pussy', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering');
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) > 10) {
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] >= 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1) {
      if (((s as any).dildonumber ?? 0) > 0) {
        qspCall(s, 'boyStat', 'D' + ((s as any).dildonumber ?? 0) + '');
        if (((s as any).pussycap ?? 0) < 2  ||  (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
          scene.actions([
            { label: 'Use the dildo on your pussy', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('<center><b>Are you sure? Doing so will most likely break your hymen.</b></center>');
      scene.actions([
        { label: 'Do it', handler: (st: GameState) => {
    (st as any).selfplaytime = ((st as any).selfplaytime ?? 0) + (15);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSisProv(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).husID ?? 0) !== ''  &&  ((st as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((st as any).loc ?? 0) === 'bedr') {
      qspGoto(st, 'husbsex', 'husb_mastr_vtor');
    }
    if (((st as any).loc ?? 0) === 'vanrPar') {
      scene.img('images/shared/sex/mast/dildovann.jpg');
    } else {
      scene.img('images/shared/sex/mast/dildo.jpg');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVagmastDildoStart(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$AnyaMsg>>
    scene.text(`${((st as any).AnyaMsg || '')}`);
    scene.actions([
      { label: 'Stop fucking your pussy', goto: ['selfplay', 'start'] },
    ]);
  } },
        { label: 'No', goto: ['selfplay', 'start'] },
      ]);
    } else {
      (st as any).selfplaytime = ((st as any).selfplaytime ?? 0) + (15);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSisProv(s, scene); (st as any).locArgs = __savedLocArgs; }
      if (((st as any).husID ?? 0) !== ''  &&  ((st as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((st as any).loc ?? 0) === 'bedr') {
        qspGoto(st, 'husbsex', 'husb_mastr_vtor');
      }
      if (((st as any).loc ?? 0) === 'vanrPar') {
        scene.img('images/shared/sex/mast/dildovann.jpg');
      } else {
        scene.img('images/shared/sex/mast/dildo.jpg');
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVagmastDildoStart(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'stat', '');
      // TODO-QSP: dynamic text: <<$AnyaMsg>>
      scene.text(`${((st as any).AnyaMsg || '')}`);
      scene.actions([
        { label: 'Stop fucking your pussy', goto: ['selfplay', 'start'] },
      ]);
    }
  } },
          ]);
        }
        if (((s as any).analcap ?? 0) <= 2  ||  (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
          scene.actions([
            { label: 'Use the dildo on your ass', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'anal_dildo_start');
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['comb'] === 1) {
    scene.actions([
      { label: 'Stick your brush handle in your pussy', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('<center><b>Are you sure? Doing so will most likely break your hymen.</b></center>');
      scene.actions([
        { label: 'Do it', goto: ['selfplay', 'brushplay'] },
        { label: 'No', goto: ['selfplay', 'start'] },
      ]);
    } else {
      qspGoto(st, 'selfplay', 'brushplay');
    }
  } },
    ]);
  }
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).loc ?? 0) === 'gad_gpbarn') {
    ((s as any).npc_horny = (s as any).npc_horny ?? {})['A66'] = ((s as any).npc_horny['A66'] ?? 0) + (1);
    scene.text('Bandit the dog is watching you curiously.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterHoleCapDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).pussy_cap_desc = '';
  if ((((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
    if (((s as any).pussycap ?? 0) === 3) {
      (s as any).pussy_cap_desc = 'Looking at your pussy, one would think that this enormous dildo would never fit inside you, but your true nature as a succubus makes everything the perfect size for your pussy.';
    } else {
      if (((s as any).pussycap ?? 0) > 0) {
        (s as any).pussy_cap_desc = 'Looking at your pussy, one would think that this big dildo would cause you a lot of pain, but your true nature as a succubus makes everything the perfect size for your pussy.';
      } else {
        if ((!((s as any).pussycap ?? 0))) {
          (s as any).pussy_cap_desc = 'It will fill your pussy quite comfortably.';
        } else {
          if (((s as any).pussycap ?? 0) < 0) {
            (s as any).pussy_cap_desc = 'One would think that this dildo would not fill you up at all, but your true nature as a succubus makes it fill your pussy perfectly.';
          }
        }
      }
    }
  } else {
    if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      if (((s as any).pussycap ?? 0) === 3) {
        (s as any).pussy_cap_desc = 'Even if you use lube, there\'s no way your pussy can take something of this size yet. You <i>really</i> shouldn\'t try it.';
      } else {
        if (((s as any).pussycap ?? 0) === 2) {
          (s as any).pussy_cap_desc = 'You guess you could make it fit into your pussy with enough lube, but even then it\'s still too big for comfort and would not be much fun.';
        } else {
          if (((s as any).pussycap ?? 0) === 1) {
            (s as any).pussy_cap_desc = 'It would still be a bit of a stretch when you use some lube, but you know your pussy can take it.';
          } else {
            if ((!((s as any).pussycap ?? 0))) {
              (s as any).pussy_cap_desc = 'It will fill your pussy quite comfortably thanks to some added lube.';
            } else {
              if (((s as any).pussycap ?? 0) === -1) {
                (s as any).pussy_cap_desc = 'It would fit nicely in your pussy. Your lube would make it slide in very easily, but also make it feel a bit smaller than you\'re used to taking.';
              } else {
                if (((s as any).pussycap ?? 0) === -2) {
                  (s as any).pussy_cap_desc = 'When you lube it up, you guess you could fuck your pussy with it, even if it is <i>much</i> smaller than you\'re used to taking.';
                } else {
                  if (((s as any).pussycap ?? 0) === -3) {
                    (s as any).pussy_cap_desc = 'Something bigger would be more fun. You\'d effectively be wasting lube and insulting your pussy\'s capacity with this.';
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).auto_vag_lube ?? 0) === 0  ||  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        if (((s as any).pussycap ?? 0) === 3) {
          (s as any).pussy_cap_desc = 'There\'s no way your pussy can take something of this size yet! It <i>could</i> work if you used some lube, but for now you <i>really</i> shouldn\'t try it.';
        } else {
          if (((s as any).pussycap ?? 0) === 2) {
            (s as any).pussy_cap_desc = 'You guess you could make it fit into your pussy, but it\'s still too big for comfort and would not be much fun. If you used some lube, it would go much easier, though.';
          } else {
            if (((s as any).pussycap ?? 0) === 1) {
              (s as any).pussy_cap_desc = 'It would be a bit of a stretch, but you know your pussy can take it. If you used some lube, it would go in easier, though.';
            } else {
              if ((!((s as any).pussycap ?? 0))) {
                (s as any).pussy_cap_desc = 'It will fill your pussy quite comfortably.';
              } else {
                if (((s as any).pussycap ?? 0) === -1) {
                  (s as any).pussy_cap_desc = 'It would fit nicely in your pussy, even if it is a bit smaller than you\'re used to taking.';
                } else {
                  if (((s as any).pussycap ?? 0) === -2) {
                    (s as any).pussy_cap_desc = 'You guess you could fuck your pussy with it, even if it is <i>much</i> smaller than you\'re used to taking.';
                  } else {
                    if (((s as any).pussycap ?? 0) === -3) {
                      (s as any).pussy_cap_desc = 'Something bigger would be more fun. It would almost be insulting to use this on your pussy.';
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
  (s as any).anal_cap_desc = '';
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
    if (((s as any).analcap ?? 0) === 3) {
      (s as any).anal_cap_desc = 'Looking at your anus, one would think that this enormous dildo would never fit inside you, but your true nature as a succubus makes everything the perfect size for your ass.';
    } else {
      if (((s as any).analcap ?? 0) > 0) {
        (s as any).anal_cap_desc = 'Looking at your anus, one would think that this big dildo would cause you a lot of pain but your true nature as a succubus makes everything the perfect size for your ass.';
      } else {
        if ((!((s as any).analcap ?? 0))) {
          (s as any).anal_cap_desc = 'It will fill your ass quite comfortably.';
        } else {
          if (((s as any).analcap ?? 0) < 0) {
            (s as any).anal_cap_desc = 'One would think that this dildo would not fill you up at all, but your true nature as a succubus makes it fill your ass perfectly.';
          }
        }
      }
    }
  } else {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] < 2) {
      if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        if (((s as any).analcap ?? 0) === 3) {
          (s as any).anal_cap_desc = 'Even if you use lube, there\'s no way your ass can take something of this size yet. You <i>really</i> shouldn\'t try it.';
        } else {
          if (((s as any).analcap ?? 0) === 2) {
            (s as any).anal_cap_desc = 'You guess you could make it fit into your ass with enough lube, but even then it\'s still too big for comfort and would not be much fun.';
          } else {
            if (((s as any).analcap ?? 0) === 1) {
              (s as any).anal_cap_desc = 'It would still be a bit of a stretch when you use some lube, but you know your ass can take it.';
            } else {
              if ((!((s as any).analcap ?? 0))) {
                (s as any).anal_cap_desc = 'It will fill your ass quite comfortably thanks to some added lube.';
              } else {
                if (((s as any).analcap ?? 0) === -1) {
                  (s as any).anal_cap_desc = 'It would fit nicely in your ass. Your lube would make it slide in very easily, but also make it feel a bit smaller than you\'re used to taking.';
                } else {
                  if (((s as any).analcap ?? 0) === -2) {
                    (s as any).anal_cap_desc = 'When you lube it up, you guess you could fuck your ass with it, even if it is <i>much</i> smaller than you\'re used to taking.';
                  } else {
                    if (((s as any).analcap ?? 0) === -3) {
                      (s as any).anal_cap_desc = 'Something bigger would be more fun. You\'d effectively be wasting lube and insulting the capacity of your ass with this.';
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).analcap ?? 0) === 3) {
          (s as any).anal_cap_desc = 'There\'s no way your ass can take something of this size yet. It <i>could</i> work if you used some lube, but for now you <i>really</i> shouldn\'t try it.';
        } else {
          if (((s as any).analcap ?? 0) === 2) {
            (s as any).anal_cap_desc = 'You guess you can make it fit into your ass, but it\'s still too big for comfort and would not be much fun. If you used some lube, it would go much easier, though.';
          } else {
            if (((s as any).analcap ?? 0) === 1) {
              (s as any).anal_cap_desc = 'It would be a bit of a stretch, but you know your ass can take it. If you used some lube, it would go in easier, though.';
            } else {
              if ((!((s as any).analcap ?? 0))) {
                (s as any).anal_cap_desc = 'It will fill your ass quite comfortably.';
              } else {
                if (((s as any).analcap ?? 0) === -1) {
                  (s as any).anal_cap_desc = 'It would fit nicely in your ass, even if it is a bit smaller than you\'re used to taking.';
                } else {
                  if (((s as any).analcap ?? 0) === -2) {
                    (s as any).anal_cap_desc = 'You guess you could fuck your ass with it, even if it is <i>much</i> smaller than you\'re used to taking.';
                  } else {
                    if (((s as any).analcap ?? 0) === -3) {
                      (s as any).anal_cap_desc = 'Something bigger would be more fun. It would almost be insulting to use this on your ass.';
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
          if (((s as any).analcap ?? 0) === 3) {
            (s as any).anal_cap_desc = 'As much as you love getting your ass stuffed, even if you used lube, there\'s no way your ass can take something of this size… <i>yet</i>.';
          } else {
            if (((s as any).analcap ?? 0) === 2) {
              (s as any).anal_cap_desc = 'You do enjoy getting your ass stuffed, but this is just a bit too big for comfort. The lube is the only way you could still make it fit.';
            } else {
              if (((s as any).analcap ?? 0) === 1) {
                (s as any).anal_cap_desc = 'You know this one would give your ass a good stretch and you\'re enough of a assslut that you\'re excited for the experience. Adding lube really helps up your game.';
              } else {
                if ((!((s as any).analcap ?? 0))) {
                  (s as any).anal_cap_desc = 'You love taking it up the ass and you know it will fill you up quite comfortably. The added lube makes it easier than it would have been.';
                } else {
                  if (((s as any).analcap ?? 0) === -1) {
                    (s as any).anal_cap_desc = 'You love taking it up the ass and it would fit inside nicely. Your lube would make it slide in very easily, but also make it feel a bit smaller than you\'re used to taking.';
                  } else {
                    if (((s as any).analcap ?? 0) === -2) {
                      (s as any).anal_cap_desc = 'You\'re a assslut and are always happy to take it up the ass, even if this one is <i>much</i> smaller than you\'re used to taking. Adding lube is fine, but not really needed.';
                    } else {
                      if (((s as any).analcap ?? 0) === -3) {
                        (s as any).anal_cap_desc = 'Even though a assslut like you is always happy for anal, you know you\'d be much happier with something a bit bigger. Using lube makes it feel like a waste.';
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).auto_anal_lube ?? 0) === 0  ||  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
            if (((s as any).analcap ?? 0) === 3) {
              (s as any).anal_cap_desc = 'As much as you love getting your ass stuffed, there\'s no way your ass can take something of this size… <i>yet</i>. It <i>could</i> work if you used some lube.';
            } else {
              if (((s as any).analcap ?? 0) === 2) {
                (s as any).anal_cap_desc = 'You do enjoy getting your ass stuffed, but this is just a bit too big for comfort, even though you could still make it fit. If you used some lube, it would go much easier, though.';
              } else {
                if (((s as any).analcap ?? 0) === 1) {
                  (s as any).anal_cap_desc = 'You know this one would give your ass a good stretch and you\'re enough of a assslut that you\'re excited for the experience. If you used some lube, it would go much easier, though.';
                } else {
                  if ((!((s as any).analcap ?? 0))) {
                    (s as any).anal_cap_desc = 'You love taking it up the ass and you know it will fill you up quite comfortably.';
                  } else {
                    if (((s as any).analcap ?? 0) === -1) {
                      (s as any).anal_cap_desc = 'You love taking it up the ass and it would fit inside nicely, even if it is a bit smaller than you\'re used to taking.';
                    } else {
                      if (((s as any).analcap ?? 0) === -2) {
                        (s as any).anal_cap_desc = 'You\'re a assslut and are always happy to take it up the ass, even if this one is <i>much</i> smaller than you\'re used to taking.';
                      } else {
                        if (((s as any).analcap ?? 0) === -3) {
                          (s as any).anal_cap_desc = 'Even though a assslut like you is always happy for anal, you know you\'d be much happier with something a bit bigger.';
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
  // TODO-QSP: end
  scene.build();
}

function enterHoleCapCalc(s: GameState, scene: SceneBuilder): void {
  (s as any).vag_temp = ((s as any).pcs_vag ?? 0);
  if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    (s as any).vag_temp = ((s as any).vag_temp ?? 0) + (8);
  }
  if (((s as any).dildohand ?? 0) < ((s as any).vag_temp ?? 0) + 5  &&  ((s as any).dildohand ?? 0) > ((s as any).vag_temp ?? 0) - 5) {
    (s as any).pussycap = 0;
  }
  if (((s as any).dildohand ?? 0) < ((s as any).vag_temp ?? 0)) {
    if (((s as any).dildohand ?? 0) <= ((s as any).vag_temp ?? 0) - 15) {
      (s as any).pussycap = (-3);
    } else {
      if (((s as any).dildohand ?? 0) <= ((s as any).vag_temp ?? 0) - 10) {
        (s as any).pussycap = (-2);
      } else {
        if (((s as any).dildohand ?? 0) <= ((s as any).vag_temp ?? 0) - 5) {
          (s as any).pussycap = (-1);
        }
      }
    }
  }
  if (((s as any).dildohand ?? 0) > ((s as any).vag_temp ?? 0)) {
    if (((s as any).dildohand ?? 0) >= ((s as any).vag_temp ?? 0) + 15) {
      (s as any).pussycap = 3;
    } else {
      if (((s as any).dildohand ?? 0) >= ((s as any).vag_temp ?? 0) + 10) {
        (s as any).pussycap = 2;
      } else {
        if (((s as any).dildohand ?? 0) >= ((s as any).vag_temp ?? 0) + 5) {
          (s as any).pussycap = 1;
        }
      }
    }
  }
  (s as any).ass_temp = ((s as any).pcs_ass ?? 0);
  if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    (s as any).ass_temp = ((s as any).ass_temp ?? 0) + (8);
  }
  if (((s as any).dildohand ?? 0) < ((s as any).ass_temp ?? 0) + 5  &&  ((s as any).dildohand ?? 0) > ((s as any).ass_temp ?? 0) - 5) {
    (s as any).analcap = 0;
  }
  if (((s as any).dildohand ?? 0) < ((s as any).ass_temp ?? 0)) {
    if (((s as any).dildohand ?? 0) <= ((s as any).ass_temp ?? 0) - 15) {
      (s as any).analcap = (-3);
    } else {
      if (((s as any).dildohand ?? 0) <= ((s as any).ass_temp ?? 0) - 10) {
        (s as any).analcap = (-2);
      } else {
        if (((s as any).dildohand ?? 0) <= ((s as any).ass_temp ?? 0) - 5) {
          (s as any).analcap = (-1);
        }
      }
    }
  }
  if (((s as any).dildohand ?? 0) > ((s as any).ass_temp ?? 0)) {
    if (((s as any).dildohand ?? 0) >= ((s as any).ass_temp ?? 0) + 15) {
      (s as any).analcap = 3;
    } else {
      if (((s as any).dildohand ?? 0) >= ((s as any).ass_temp ?? 0) + 10) {
        (s as any).analcap = 2;
      } else {
        if (((s as any).dildohand ?? 0) >= ((s as any).ass_temp ?? 0) + 5) {
          (s as any).analcap = 1;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDildosizeDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).dildo_desc = '';
  if (((s as any).dildonumber ?? 0) === 1) {
    (s as any).dildo_desc = 'small, 10cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 2) {
    (s as any).dildo_desc = 'average, 15cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 3) {
    (s as any).dildo_desc = 'above average, 20cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 4) {
    (s as any).dildo_desc = 'large, 25cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 5) {
    (s as any).dildo_desc = 'huge, 30cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 6) {
    (s as any).dildo_desc = 'enormous, 35cm long dildo';
  }
  if (((s as any).dildonumber ?? 0) === 7) {
    (s as any).dildo_desc = 'gigantic, 40cm long dildo';
  }
  // TODO-QSP: end
  scene.build();
}

function enterDildoOptions(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDildosizeDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).dildonumber ?? 0) !== 0) {
    // TODO-QSP: dynamic text: l
    scene.text('l');
    // TODO-QSP: dynamic text: l 'You decide to play with your <<$dildo_desc>>. <<$pussy_cap_desc>> <<$anal_cap...
    scene.text(`l 'You decide to play with your ${((s as any).dildo_desc || '')}. ${((s as any).pussy_cap_desc || '')} ${((s as any).anal_cap_desc || '')}'`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    if (((s as any).dildonumber ?? 0) === 1) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
    if (((s as any).dildonumber ?? 0) === 2) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1) {
    if (((s as any).dildonumber ?? 0) === 3) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
    if (((s as any).dildonumber ?? 0) === 4) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1) {
    if (((s as any).dildonumber ?? 0) === 5) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
    if (((s as any).dildonumber ?? 0) === 6) {
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1) {
    if (((s as any).dildonumber ?? 0) === 7) {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrushplay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'D1');
  scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj17.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 'brush_keepgoing') {
    scene.text('You keep fucking your pussy with the brush handle, speeding up or slowing down and trying different angles or depths as your arousal builds. You let out soft moans and little gasps as you find just the right spots, adding to the stimulation by rubbing a finger over your clit.');
    qspCall(s, 'arousal', 'clit_finger', (-5), 'masturbate');
    qspCall(s, 'stat', '');
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (15);
      qspCall(s, 'mood', 'lower', 'tiny');
      if ((!((s as any).mesec ?? 0))) {
        scene.text('You flinch at the sudden pain when the improvised toy tears through your hymen and pull it back out instinctively, revealing a bit of blood on the handle. It hurt, but not quite as much as you thought it would. Good thing you didn\'t use something bigger.');
      } else {
        if (((s as any).mesec ?? 0) > 0) {
          qspCall(s, 'mood', 'lower', 'tiny');
          scene.text('You flinch at the sudden pain when the improvised toy tears through your hymen and pull it back out instinctively, revealing a bit of blood on the handle. Most of it is probably from your period, but you\'re sure some of it came from your broken hymen as well. It hurt, but not quite as much as you thought it would. Good thing you didn\'t use something bigger.');
        }
      }
    }
    scene.text('You moan softly as the handle slides into your pussy. You close your eyes for a moment as you enjoy the feeling of having something filling up your pussy. You wait a moment for your pussy to adjust before you slowly start moving, letting the handle slide almost all the way out of your hole and then pushing it back inside…');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Keep playing with the brush', goto: ['selfplay', 'brushplay', 'brush_keepgoing'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterVagmastDildoStart(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  scene.img('images/shared/sex/mast/dildo.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDildosizeDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).lubemessage = '';
  if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    if ((!((s as any).mesec ?? 0))) {
      (s as any).lubemessage = 'You take a tube of lubricant and squeeze some out onto the tips of your fingers. You rub it between your pussy lips and stick a finger inside to make sure your hole is nice and slippery.';
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        qspCall(s, 'mood', 'lower', 'tiny');
        (s as any).lubemessage = 'You take a tube of lubricant and squeeze some out onto the tips of your fingers. You rub it between your pussy lips and stick a finger inside to make sure your hole is nice and slippery. When you pull your finger out you see it\'s now covered in a mix of lube and blood from your period.';
      }
    }
    (s as any).lube_txt = '';
    qspCall(s, 'arousal', 'auto_lube', 'vag', 'custom');
  } else {
    if ((!((s as any).auto_vag_lube ?? 0))) {
      (s as any).lubemessage = 'You rub a finger along your clit and between your pussy lips to get your juices flowing, making sure you\'re a bit more wet before starting.';
    } else {
      if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        (s as any).lubemessage = 'Since you don\'t have any extra lube right now, you rub a finger between your lower lips to get your juices flowing and make sure you\'re nice and wet before starting.';
      }
    }
  }
  // TODO-QSP: dynamic text: <<$lubemessage>>Deciding that your pussy is as prepared as you can get it, you l...
  scene.text(`${((s as any).lubemessage || '')}Deciding that your pussy is as prepared as you can get it, you line up the ${((s as any).dildo_desc || '')} against your entrance.`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    if (((s as any).pcs_horny ?? 0) < 80) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      qspCall(s, 'mood', 'lower', 'medium');
      if ((!((s as any).mesec ?? 0))) {
        scene.text('You bite your lip in pain and tears start to stream from your eyes when the dildo tears through your hymen. You cry out and pull it back out instinctively, revealing a bit of blood on your dildo. Maybe you weren\'t as ready as you thought. You should probably stop for now.');
      } else {
        if (((s as any).mesec ?? 0) > 0) {
          qspCall(s, 'mood', 'lower', 'tiny');
          scene.text('You bite your lip in pain and tears start to stream from your eyes when the dildo tears through your hymen. You cry out and pull it back out instinctively, revealing blood on your dildo. Most of it is probably from your period, but you\'re sure some of it came from your broken hymen as well. Maybe you weren\'t as ready as you thought. You should probably stop for now.');
        }
      }
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('You flinch at the sudden pain when the dildo tears through your hymen. It hurt, but not quite as much as you thought it would.');
    }
  }
  (s as any).temp_mens = '';
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).temp_mens = 'Blood from your period leaks from your pussy, getting squished out around the dildo.';
  }
  (s as any).entry_message = '';
  if (((s as any).pussycap ?? 0) === 2) {
    (s as any).entry_message = 'As the ' + ((s as any).dildo_desc ?? 0) + ' slowly enters your pussy, you give an involuntary yelp and bite your lip in pain as it fills and stretches you out more than you\'re used to. ' + ((s as any).temp_mens ?? 0) + '';
  } else {
    if (((s as any).pussycap ?? 0) === 1) {
      (s as any).entry_message = 'You groan slightly when the ' + ((s as any).dildo_desc ?? 0) + ' slowly enters your pussy. It does feel good, but also still hurts a little as it fills and stretches your tight hole. ' + ((s as any).temp_mens ?? 0) + '';
    } else {
      if ((!((s as any).pussycap ?? 0))) {
        (s as any).entry_message = 'You moan softly as the ' + ((s as any).dildo_desc ?? 0) + ' slides into your pussy. You close your eyes for a moment as you enjoy the feeling of having your pussy stuffed full. ' + ((s as any).temp_mens ?? 0) + '';
      } else {
        if (((s as any).pussycap ?? 0) < 0) {
          (s as any).entry_message = 'More than used to this size the ' + ((s as any).dildo_desc ?? 0) + ' easlily slips into your pussy. You moan softly and bite your lip in anticipation of giving yourself a good pounding. ' + ((s as any).temp_mens ?? 0) + '';
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$entrymessage>>Once you have part of it''s length inside, you stop for a momen...
  scene.text(`${((s as any).entrymessage || '')}Once you have part of it's length inside, you stop for a moment to give yourself time to adjust to the length and girth of the toy stretching you open. It's not long before you slowly start moving, letting the dildo slide almost all the way out of your pussy before preparing to push it back inside…`);
  (s as any).mast_vag = ((s as any).dildonumber ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your pussy with the dildo', goto: ['selfplay', 'pussy_dildo_mast'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyDildoMast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/mast/dildo.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).assslutmessage = '';
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
    (s as any).assslutmessage = ' As you enjoy the feeling of the dildo sliding in and out of your pussy, you wonder briefly if you should have stuck it up your ass instead. The pleasure chases that thought away quickly though… You may be a assslut, but it\'s still fun for your pussy to be played with too.';
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'vag_keepgoing') {
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
        scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this rubber cock. You\'re pounding your pussy, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit' + ((((s as any).trait_vars ?? 0)?.['buttslut'] > 1) ? (', even rubbing a finger against your sensitive asshole') : ('')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd sounds of the toy smacking against your snatch.');
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo all the way up inside you and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside your pussy. You moan and gasp, grinding the base against your pussy as you ride out your orgasm, trying to make it last as long as possible before the overstimulation makes you stop.';
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
          scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this big rubber cock. You\'re pounding your pussy, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit' + ((((s as any).trait_vars ?? 0)?.['buttslut'] > 1) ? (', even rubbing a finger against your sensitive asshole') : ('')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the large toy sliding in and out of your sloppy pussy.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo all the way up inside you and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the large toy inside your pussy. Gasping, quivering, and clenching, you ride out your orgasm while impaled by the big rubber cock.';
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
            scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this massive rubber cock. You\'re pounding your pussy, again and again and again. Slamming the heavy dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit' + ((((s as any).trait_vars ?? 0)?.['buttslut'] > 1) ? (', even rubbing a finger against your sensitive asshole') : ('')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the massive toy sliding in and out of your sloppy, wide stretched cunt.');
            (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo as deep as it can go for the final time. You cum explosively, your widely stretched walls squeezing even tighter around it, almost making the massive toy feel even larger inside you. Gasping, quivering, and clenching, you ride out your orgasm, every twitch making it last longer before you collapse in exhausted bliss.';
            if (((s as any).vgape ?? 0) === 2) {
              (s as any).vgape = 3;
            } else {
              if (((s as any).vgape ?? 0) === 1) {
                (s as any).vgape = 2;
              } else {
                if ((!((s as any).vgape ?? 0))) {
                  (s as any).vgape = 1;
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).dildonumber ?? 0) < 3) {
        scene.text('You keep fucking your pussy with the dildo, speeding up or slowing down and trying different angles or depths as your arousal builds. You let out the occasional soft moans as you hit just the right spots, enjoying the feeling of the rubber cock\'s balls smacking between your legs as it slides in and out between your lower lips.');
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          scene.text('You keep fucking your pussy with the large dildo, speeding up or slowing down and trying different angles or depths as your arousal builds. You let out the occasional soft moans as you hit just the right spots, or gasp at just how good it fills and stretches your hole when you take the whole length of the rubber cock up inside you.');
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            scene.text('You keep fucking your pussy with the massive dildo, speeding up or slowing down and struggling with different angles and depths as your arousal builds. Every deep thrust stretches you wide and fills you up completely, you can\'t help but moan from the sensation as it rubs against every good spot you might have.');
            if (((s as any).vgape ?? 0) === 2) {
              (s as any).vgape = 3;
            } else {
              if (((s as any).vgape ?? 0) === 1) {
                (s as any).vgape = 2;
              } else {
                if ((!((s as any).vgape ?? 0))) {
                  (s as any).vgape = 1;
                }
              }
            }
          }
        }
      }
    }
  } else {
    (s as any).temp_mens = '';
    if (((s as any).mesec ?? 0) > 0) {
      qspCall(s, 'mood', 'lower', 'tiny');
      (s as any).temp_mens = ' Your toy is covered in a mix of fluids, including blood from your period. You\'re really trying not to think about it for now.';
    }
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow. You slam the dildo ...
        scene.text(`You're so horny you don't even think of starting off slow. You slam the dildo up inside your dripping pussy, gasping in pleasure as you take the full length and feel the base rest against your crotch.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo all the way up inside you and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside your pussy. You moan and gasp, grinding the base against your pussy as you ride out your orgasm, trying to make it last as long as possible before the overstimulation makes you stop.';
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow. You start slamming ...
          scene.text(`You're so horny you don't even think of starting off slow. You start slamming the large dildo up inside your dripping pussy and after just a few thrusts you have it just about balls deep in your hungry hole. You gasp and moan as you enjoy the extra length and girth of the large toy stretching and filling your snatch.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo all the way up inside you and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the large toy inside your pussy. Gasping, quivering, and clenching, you ride out your orgasm while impaled by the big rubber cock.';
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow, despite the toy''s ...
            scene.text(`You're so horny you don't even think of starting off slow, despite the toy's massive size. You start slamming the dildo up inside your dripping pussy, caring less about control and more about stuffing your hole with the heavy toy as quickly as possible. You gasp and moan as the extreme length and girth fills you completely, your snatch stretched tightly around it. Much of the toy just doesn't fit, but it doesn't stop you from slamming it back in again and again.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
            (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam the dildo as deep as it can go for the final time. You cum explosively, your widely stretched walls squeezing even tighter around it, almost making the massive toy feel even larger inside you. Gasping, quivering, and clenching, you ride out your orgasm, every twitch making it last longer before you collapse in exhausted bliss.';
            if (((s as any).vgape ?? 0) === 2) {
              (s as any).vgape = 3;
            } else {
              if (((s as any).vgape ?? 0) === 1) {
                (s as any).vgape = 2;
              } else {
                if ((!((s as any).vgape ?? 0))) {
                  (s as any).vgape = 1;
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You slide the dildo in and out of your pussy, slowly ramping up the speed and ta...
        scene.text(`You slide the dildo in and out of your pussy, slowly ramping up the speed and taking it deeper with each thrust. It's not long before you've got the base pushing against your crotch.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You slide the large dildo in and out of your pussy, slowly ramping up the speed ...
          scene.text(`You slide the large dildo in and out of your pussy, slowly ramping up the speed and taking it deeper with each thrust, enjoying the extra length and girth as you feel your hole stretch around it. You try your hardest to get it as close to balls deep as you can manage.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You slide the massive dildo in and out of your pussy, the heavy toy a bit hard t...
            scene.text(`You slide the massive dildo in and out of your pussy, the heavy toy a bit hard to control as you slowly ramp up the speed and take it deeper with each thrust. The extreme length and girth completely stuffs your pussy and stretches you wide. Your pussy stretched wide and stuffed to the fullest, yet there's still so much of the toy that just can't fit inside you.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
            if (((s as any).vgape ?? 0) === 2) {
              (s as any).vgape = 3;
            } else {
              if (((s as any).vgape ?? 0) === 1) {
                (s as any).vgape = 2;
              } else {
                if ((!((s as any).vgape ?? 0))) {
                  (s as any).vgape = 1;
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).mast_anal = ((s as any).dildonumber ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your pussy', goto: ['selfplay', 'pussy_dildo_mast', 'vag_keepgoing'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalDildoStart(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDildosizeDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/sex/mast/dildoanal.jpg');
  (s as any).virginmessage = '';
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] < 2) {
      if (((s as any).pcs_ass ?? 0) >= 15) {
        (s as any).virginmessage = 'Fucking yourself in the ass has become the norm for you by now and it\'s clear you enjoy it. You don\'t really care that you\'re still a virgin.';
      } else {
        if (((s as any).pcs_ass ?? 0) < 15) {
          (s as any).virginmessage = 'You\'re getting quite used to fucking yourself in the ass. You still haven\'t lost your virginity, but you don\'t feel like you need to since anal is pretty fun.';
        } else {
          if (((s as any).pcs_ass ?? 0) < 7) {
            (s as any).virginmessage = 'You\'re still new to taking a toy up your ass but you\'ve realized it isn\'t a bad way to masturbate. And it lets you keep your virginity intact.';
          } else {
            if ((!((s as any).pcs_ass ?? 0))) {
              (s as any).virginmessage = 'You never thought the first hole you\'d stick anything more than a finger into would be your asshole. You hope preserving your virginity this way will be worth it.';
            }
          }
        }
      }
    } else {
      (s as any).virginmessage = 'You never would have imagined how much you\'d grow to love fucking yourself in the ass when you did it the first time. You\'re a proud virgin and a happy, highly experienced assslut.';
    }
  }
  (s as any).plugmessage = '';
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) < 15) {
      (s as any).plugmessage = 'You carefully pull the plug out of your narrow and tight ass.';
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    } else {
      (s as any).plugmessage = 'You give the plug in your ass a small tug and easily pull it out of your hole.';
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    }
  }
  (s as any).lubemessage = '';
  if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    (s as any).lubemessage = 'You take a tube of lubricant and squeeze a little on the tips of your fingers. You rub it around your asshole, sticking a finger inside to make sure it\'s properly lubed up.';
    (s as any).lube_txt = '';
    qspCall(s, 'arousal', 'auto_lube', 'anal', 'custom');
  } else {
    if ((!((s as any).auto_anal_lube ?? 0))) {
      (s as any).lubemessage = 'You spit on your fingers and use your saliva to lubricate your anus.';
      qspCall(s, 'arousal', 'anal_finger', 1, 'spit');
    } else {
      if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        (s as any).lubemessage = 'Since you don\'t have any lube left, you spit on your fingers and use your saliva to lubricate your anus.';
        qspCall(s, 'arousal', 'anal_finger', 1, 'spit');
      }
    }
  }
  (s as any).warmupmessage = '';
  if (((s as any).dildonumber ?? 0) < 3) {
    if (((s as any).analcap ?? 0) === 2) {
      (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, stuffing first one and then a second inside. It hurts a bit and you can feel your anus squeeze very tightly around them.';
    } else {
      if (((s as any).analcap ?? 0) === 1) {
        (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sticking first one and then a second inside. You can feel your anus squeeze tightly around them.';
      } else {
        if ((!((s as any).analcap ?? 0))) {
          (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sliding first one and then a second inside. They go in fairly easily and you feel your anus close nicely around them.';
        } else {
          if (((s as any).analcap ?? 0) === -1) {
            (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, easily sliding two inside. You feel your anus close comfortably around them and you can even twirl them around a bit.';
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
              (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sliding two of them inside with barely any effort. You decide to stick in a third finger for the hell of it, just so you can feel that tightness around them again.';
            }
          }
        }
      }
    }
  }
  if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
    if (((s as any).analcap ?? 0) === 2) {
      (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, stuffing two and then a third inside. It hurts a bit and you can feel your anus squeeze very tightly around them.';
    } else {
      if (((s as any).analcap ?? 0) === 1) {
        (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sticking two and then a third inside. You can feel your anus squeeze tightly around them.';
      } else {
        if ((!((s as any).analcap ?? 0))) {
          (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, quickly ending up with three of them inside your ass. They slide in fairly easily and you feel your anus wrapped comfortably around them.';
        } else {
          if (((s as any).analcap ?? 0) === -1) {
            (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, quickly ending up with three inside your ass. You feel your anus close comfortably around them and you can even twirl them around a bit.';
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
              (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sliding two then three up your ass with barely any effort. You decide to stick in a fourth finger for the hell of it, just so you can feel that tightness around them again.';
            }
          }
        }
      }
    }
  }
  if (((s as any).dildonumber ?? 0) >= 5) {
    if (((s as any).analcap ?? 0) === 2) {
      (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, stretching your hole with three fingers before stuffing a fourth inside. It hurts a bit and you can feel your anus squeeze very tightly around them.';
    } else {
      if (((s as any).analcap ?? 0) === 1) {
        (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, stretching your hole with three fingers before sticking a fourth inside. You can feel your anus squeeze tightly around them.';
      } else {
        if ((!((s as any).analcap ?? 0))) {
          (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, quickly ending up with four inside your ass. They slide in fairly easily and you feel your anus wrapped comfortably around them.';
        } else {
          if (((s as any).analcap ?? 0) === -1) {
            (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, quickly ending up with four inside your ass. You feel your anus close comfortably around them and you play a bit by wiggling and twirling them inside your experienced hole.';
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
              (s as any).warmupmessage = 'You take the time to massage and stretch your asshole with your fingers, sliding three then four up your ass with barely any effort. You decide not to go for five because you\'re eager to let your toy both stretch <i>and</i> fill your slutty hole.';
            }
          }
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$virginmessage>><<$plugmessage>><<$lubemessage>><<$warmupmessage>> After finge...
  scene.text(`${((s as any).virginmessage || '')}${((s as any).plugmessage || '')}${((s as any).lubemessage || '')}${((s as any).warmupmessage || '')} After fingering your ass for a few more seconds, you pull them out and place the ${((s as any).dildo_desc || '')} near your hole.`);
  (s as any).entrymessage = '';
  (s as any).assslutmessage = '';
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
    if (((s as any).analcap ?? 0) === 2) {
      (s as any).assslutmessage = 'As much as you love taking it up the ass, you realize it\'s just not as much fun when you go too big too fast.';
    } else {
      if (((s as any).analcap ?? 0) === 1) {
        (s as any).assslutmessage = 'Even though the toy is just a bit bigger than what your ass can easily take right now, the assslut inside you still enjoys it all the same.';
      } else {
        if ((!((s as any).analcap ?? 0))) {
          (s as any).assslutmessage = 'The toy fits inside perfectly and you shiver slightly in pleasure as your asshole squeezes down around it. It\'s so good being a assslut.';
        } else {
          if (((s as any).analcap ?? 0) < 0) {
            (s as any).assslutmessage = 'A assslut of your experience would of course appreciate something a bit bigger, though as long as you get your ass fucked you don\'t really mind the small size too much.';
          }
        }
      }
    }
  }
  if (((s as any).analcap ?? 0) === 2) {
    (s as any).entrymessage = 'As the ' + ((s as any).dildo_desc ?? 0) + ' slowly enters your ass, you give an involuntary yelp and bite your lip in pain as it fills and stretches you out more than you\'re used to.' + ((s as any).assslutmessage ?? 0) + ' ';
  } else {
    if (((s as any).analcap ?? 0) === 1) {
      (s as any).entrymessage = 'You groan slightly when the ' + ((s as any).dildo_desc ?? 0) + ' slowly enters your ass. It does feel good, but also still hurts a little as it fills and stretches your tight hole.' + ((s as any).assslutmessage ?? 0) + ' ';
    } else {
      if ((!((s as any).analcap ?? 0))) {
        (s as any).entrymessage = 'You moan softly as the ' + ((s as any).dildo_desc ?? 0) + ' slides into your ass. You close your eyes for a moment as you enjoy the feeling of getting your ass stuffed full.' + ((s as any).assslutmessage ?? 0) + ' ';
      } else {
        if (((s as any).analcap ?? 0) < 0) {
          (s as any).entrymessage = 'More than used to this size, the ' + ((s as any).dildo_desc ?? 0) + ' easlily slips into your asshole. ' + ((s as any).assslutmessage ?? 0) + 'You moan softly and bite your lip in anticipation of giving your ass a good pounding.';
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$entrymessage>>Once you have most of it''s length inside your hole, you stop f...
  scene.text(`${((s as any).entrymessage || '')}Once you have most of it's length inside your hole, you stop for a moment to give yourself time to adjust to the length and girth of the toy stretching you open. It's not long before you slowly start moving, letting your dildo slide almost all the way out of your ass before pushing it back inside…`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  (s as any).orgasm_txt = 'You\'re so horny that the small amount of fingering and the initial penetration of the dildo makes you cum already.';
  qspCall(s, 'arousal', 'anal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your ass with the dildo', goto: ['selfplay', 'anal_dildo_mast'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalDildoMast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/mast/dildoanal.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHoleCapCalc(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).assslutmessage = '';
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
    (s as any).assslutmessage = 'You pause for a moment as you enjoy the feeling of having your slutty asshole stretched and stuffed by the toy fully seated between your ass cheeks…';
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'anal_keepgoing') {
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
        scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this rubber cock. You\'re pounding your ass, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples' + ((((s as any).trait_vars ?? 0)?.['buttslut'] < 2) ? (' or sliding a hand between your legs to rub your pussy') : (', ignoring your pussy and focussing on what your slutty ass is feeling')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd sounds of the toy smacking up between your cheeks.');
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until you slam the dildo all the way up inside your ass and finally climax, hard. Your asshole clamps down tight and you focus on the feel of the toy rubbing between your ass cheeks. You moan and gasp, grinding down on it even harder as you ride out your orgasm, trying to make it last as long as possible before the overstimulation makes you stop.';
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
          scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this big rubber cock. You\'re pounding your ass, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples' + ((((s as any).trait_vars ?? 0)?.['buttslut'] < 2) ? (' or sliding a hand between your legs to rub your pussy') : (', ignoring your pussy and focussing on what your slutty ass is feeling')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the large toy sliding in and out of your well fucked ass.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until you slam the large dildo all the way up inside your ass and finally climax, hard. Your asshole clamps down tight and you focus on the feel of the toy rubbing between your ass cheeks and filling up your insides. Gasping, quivering, and clenching, you ride out your orgasm while impaled by the big rubber cock.';
          if (((s as any).agape ?? 0) === 1) {
            (s as any).agape = 2;
          } else {
            if ((!((s as any).agape ?? 0))) {
              (s as any).agape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You keep going. You''re so horny right now, it feels like you can''t think of an...
            scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this massive rubber cock. You\'re pounding your ass, again and again and again. Slamming the heavy dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples' + ((((s as any).trait_vars ?? 0)?.['buttslut'] < 2) ? (' or sliding a hand between your legs to rub your pussy') : (', ignoring your pussy and focussing on what your slutty ass is feeling')) + ' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the massive toy sliding in and out of your well fucked ass.');
            (s as any).orgasm_txt = 'Pleasure and heat build between your legs until you slam yourself down, taking the huge dildo balls deep up inside your ass again and finally climax. You cum explosively, your widely stretched asshole clamping down as tight as it can around the rubber monster, head thrown back and eyes rolled up as the full length bulges out your stomach. Gasping, quivering, and clenching, you ride out your orgasm, every twitch making it last longer before you ' + (((Math.floor(Math.random() * 3) + 0) === 1) ? ('collapse to the side in exhausted bliss, the toy slipping out of your hole with a lewd pop.') : ('settle back in exhausted bliss.'));
            if (((s as any).agape ?? 0) === 2) {
              (s as any).agape = 3;
            } else {
              if (((s as any).agape ?? 0) === 1) {
                (s as any).agape = 2;
              } else {
                if ((!((s as any).agape ?? 0))) {
                  (s as any).agape = 1;
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).dildonumber ?? 0) < 3) {
        scene.text('You keep fucking your ass with the dildo, speeding up or slowing down and trying different angles or depths as your arousal builds. You let out the occasional soft moans as you hit just the right spots, enjoying the feeling of the rubber cock\'s balls slapping your crotch as it slides in and out between asscheeks.');
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          scene.text('You keep fucking your ass with the large dildo, speeding up or slowing down and trying different angles or depths as your arousal builds. You let out the occasional soft moans as you hit just the right spots, or gasp at just how good it fills and stretches your hole when you take the whole length of the rubber cock up inside you.');
          if (((s as any).agape ?? 0) === 1) {
            (s as any).agape = 2;
          } else {
            if ((!((s as any).agape ?? 0))) {
              (s as any).agape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            scene.text('You keep bouncing on the massive dildo, speeding up or slowing down and testing out different depths as your arousal builds. Every deep thrust stretches you wide and fills you up completely and you can\'t help but moan from the sensation as it slides between your ass cheeks and rubs against every good spot you might have inside…');
            if (((s as any).agape ?? 0) === 2) {
              (s as any).agape = 3;
            } else {
              if (((s as any).agape ?? 0) === 1) {
                (s as any).agape = 2;
              } else {
                if ((!((s as any).agape ?? 0))) {
                  (s as any).agape = 1;
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow. You slam the dildo ...
        scene.text(`You're so horny you don't even think of starting off slow. You slam the dildo inside your twitching asshole, gasping in pleasure as you take the full length and feel its balls smack against your crotch as your asshole swallows it all the way to the base.${((s as any).assslutmessage || '')}`);
        (s as any).orgasm_txt = 'The pleasure sneaks up on you as you suddenly climax, hard. Your asshole clamps down tight and you focus on the feel of the toy rubbing between your ass cheeks. You moan and gasp, grinding down on it even harder as you ride out your orgasm, trying to make it last as long as possible before the overstimulation makes you stop.';
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow. You start slamming ...
          scene.text(`You're so horny you don't even think of starting off slow. You start slamming the large dildo up inside your eager asshole and after just a few thrusts you have it pushed balls deep in your hungry hole. You gasp and moan as you enjoy the extra length and girth of the large toy stretching and filling your ass.${((s as any).assslutmessage || '')}`);
          (s as any).orgasm_txt = 'The pleasure sneaks up on you as you suddenly climax, hard. Your asshole clamps down tight and you focus on the feel of the toy rubbing between your ass cheeks and filling up your insides. Gasping, quivering, and clenching, you ride out your orgasm while impaled by the big rubber cock.';
          if (((s as any).agape ?? 0) === 1) {
            (s as any).agape = 2;
          } else {
            if ((!((s as any).agape ?? 0))) {
              (s as any).agape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            if (((s as any).analcap ?? 0) <= 0  &&  (Math.floor(Math.random() * 5) + 0) === 1) {
              // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow, plopping the massiv...
              scene.text(`You're so horny you don't even think of starting off slow, plopping the massive toy on the ground before squatting down above and taking it in again. Your excited impatience works against you however as your legs slip, causing you to just… drop. With a heavy grunt, you find yourself seated on the floor, your eyes rolled back as your asshole is instantly stuffed and tightly stretched around a massive rubber cock. You catch your breath and moan loudly, putting a hand on your now bulging stomach. Thank God your hole is experienced… and that you stretched beforehand.${((s as any).assslutmessage || '')}`);
              (s as any).orgasm_txt = 'As the moment of shock disappears, ' + ((((s as any).trait_vars ?? 0)?.['buttslut'] === 3) ? ('the pleasure of having your slutty asshole stuffed so suddenly and so completely makes you climax.') : ('the pleasure sneaks up on you and you climax.')) + ' You cum explosively, your widely stretched asshole clamping down as tight as it can around the rubber monster, head thrown back and eyes rolled up as the full length bulges out your stomach. Gasping, quivering, and clenching, you ride out your sudden orgasm, every twitch making it last longer before you ' + (((Math.floor(Math.random() * 3) + 0) === 1) ? ('collapse to the side in exhausted bliss, the toy slipping out of your hole with a lewd pop.') : ('settle back in exhausted bliss.'));
              if (((s as any).trait_vars ?? 0)?.['buttslut'] === 3) {
                (s as any).orgasm_or = 'yes';
              }
            } else {
              // TODO-QSP: dynamic text: You''re so horny you don''t even think of starting off slow, plopping the massiv...
              scene.text(`You're so horny you don't even think of starting off slow, plopping the massive toy on the ground before sitting back and taking it in again. All you care about now is stuffing your eager asshole as much and as fast as possible. Too long after, you find yourself fully seated with the massive rubber cock stuffed balls deep in your rear. You moan loudly as you place your hand on your bulging stomach with your asshole stretched tightly around its extreme girth.${((s as any).assslutmessage || '')}`);
              (s as any).orgasm_txt = 'Pleasure and heat build between your legs until you slam yourself down, taking the huge dildo balls deep up inside your ass again and finally climax. You cum explosively, your widely stretched asshole clamping down as tight as it can around the rubber monster, head thrown back and eyes rolled up as the full length bulges out your stomach. Gasping, quivering, and clenching, you ride out your orgasm, every twitch making it last longer before you ' + (((Math.floor(Math.random() * 3) + 0) === 1) ? ('collapse to the side in exhausted bliss, the toy slipping out of your hole with a lewd pop.') : ('settle back in exhausted bliss.'));
            }
            if (((s as any).agape ?? 0) === 2) {
              (s as any).agape = 3;
            } else {
              if (((s as any).agape ?? 0) === 1) {
                (s as any).agape = 2;
              } else {
                if ((!((s as any).agape ?? 0))) {
                  (s as any).agape = 1;
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You slide the dildo in and out of your ass, slowly ramping up the speed and taki...
        scene.text(`You slide the dildo in and out of your ass, slowly ramping up the speed and taking it deeper with each thrust. It's not long before you've got its balls smacking against your crotch as your asshole swallows it all the way to the base.${((s as any).assslutmessage || '')}`);
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You slide the large dildo in and out of your ass, slowly ramping up the speed an...
          scene.text(`You slide the large dildo in and out of your ass, slowly ramping up the speed and taking it deeper with each thrust, enjoying the extra length and girth as you feel your asshole stretch around it. It's not long before you've got its balls smacking against your crotch as your asshole swallows the large toy all the way to the base.${((s as any).assslutmessage || '')}`);
          if (((s as any).agape ?? 0) === 1) {
            (s as any).agape = 2;
          } else {
            if ((!((s as any).agape ?? 0))) {
              (s as any).agape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: With the massive dildo standing on the floor behind you, you sit back as you sli...
            scene.text(`With the massive dildo standing on the floor behind you, you sit back as you slide it in and out of your ass, the sheer size making it a bit harder to take it in easily, slowly ramping up the speed as it slips deeper. Your asshole is tightly stretched around its extreme girth and you can feel it's length making your stomach bulge. It doesn't take much longer before you find yourself fully seated with the massive rubber dick stuffed up your ass.${((s as any).assslutmessage || '')}`);
            if (((s as any).agape ?? 0) === 2) {
              (s as any).agape = 3;
            } else {
              if (((s as any).agape ?? 0) === 1) {
                (s as any).agape = 2;
              } else {
                if ((!((s as any).agape ?? 0))) {
                  (s as any).agape = 1;
                }
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your ass', goto: ['selfplay', 'anal_dildo_mast', 'anal_keepgoing'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSuctionDildo(s: GameState, scene: SceneBuilder): void {
  if ((0 as any) === 1) {
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027selfplay/u0027, /u0027bath_suction_dildo/u0027); return false;">suction dildo</a> is stuck to the bath tub.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0) {
      scene.text('You can stick your suction dildo to the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027selfplay/u0027, /u0027bathtub_suction_dildo_apply/u0027); return false;">bath tub</a> to play with.');
    }
  }
  if ((0 as any) === 1  ||  (0 as any) === 1) {
    scene.text('Your suction dildo is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027selfplay/u0027, /u0027shower_suction_dildo/u0027); return false;">inside the shower</a>.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0) {
      scene.text('You can also stick a suction dildo inside <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027selfplay/u0027, /u0027shower_suction_dildo_apply/u0027); return false;">the shower</a>.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathtubSuctionDildoApply(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_bathtub_dildo = 1'
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo += 1'
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) - (1);
  // TODO-QSP: end
  scene.build();
}

function enterBathtubSuctionDildoRemove(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_bathtub_dildo = 0'
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo -= 1'
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enterShowerSuctionDildoApply(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo += 1'
  if (((s as any).bathtype ?? 0) === 'bathtub shower') {
    // TODO-QSP: dynamic '<<$loc>>_bath_shower_dildo = 1'
  } else {
    if ((String(((s as any).bathtype ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'glass shower') {
      // TODO-QSP: dynamic '<<$loc>>_glass_shower_dildo = 1'
    }
  }
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) - (1);
  // TODO-QSP: end
  scene.build();
}

function enterShowerSuctionDildoRemove(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo -= 1'
  if (((s as any).bathtype ?? 0) === 'bathtub shower') {
    // TODO-QSP: dynamic '<<$loc>>_bath_shower_dildo = 0'
  } else {
    if ((String(((s as any).bathtype ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'glass shower') {
      // TODO-QSP: dynamic '<<$loc>>_glass_shower_dildo = 0'
    }
  }
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enterBathtubDildoCheck(s: GameState, scene: SceneBuilder): void {
  if ((0 as any) === 1) {
    scene.actions([
      { label: 'Ride your bathtub dildo', goto: ['selfplay', 'bath_bathtub_suction_dildo_ride'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerDildoCheck(s: GameState, scene: SceneBuilder): void {
  if ((0 as any) === 1) {
    scene.actions([
      { label: 'Ride your bathtub dildo', goto: ['selfplay', 'shower_bathtub_suction_dildo_ride'] },
    ]);
  }
  if ((0 as any) === 1) {
    scene.actions([
      { label: 'Ride your wall mounted dildo', goto: ['selfplay', 'glass_shower_suction_dildo_fuck'] },
    ]);
  } else {
    if ((0 as any) === 1) {
      scene.actions([
        { label: 'Ride your wall mounted dildo', goto: ['selfplay', 'shower_bathtub_wall_dildo_fuck'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathSuctionDildo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/bathtub_dildo.jpg');
  scene.text('Your suction dildo is currently stuck onto the bathtub.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave it there', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Take it off', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'bathtub_suction_dildo_remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Ride it', goto: ['selfplay', 'bath_suction_dildo_ride'] },
  ]);
  scene.build();
}

function enterShowerSuctionDildo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/shower_dildo.jpg');
  scene.text('Your suction dildo is currently stuck on the wall of the shower.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave it there', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Take it off', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'shower_suction_dildo_remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBathSuctionDildoRide(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'boyStat', 'D2');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/bath_dildo.mp4');
  if ((!((s as any).dildo_timer ?? 0))) {
    (s as any).dildo_timer = 1;
    (s as any).dildo_start_minute = ((s as any).minut ?? 0);
    (s as any).dildo_start_hour = ((s as any).hour ?? 0);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('You wince in pain as you sit down on your dildo and it tears through your hymen. After giving yourself a minute to adjust, you tentatively bounce up and down on it, until you start to enjoy yourself.');
  } else {
    if (((s as any).dildo_start_minute ?? 0) === ((s as any).minut ?? 0)  &&  ((s as any).dildo_start_hour ?? 0) === ((s as any).hour ?? 0)) {
      scene.text('You spend 5 minutes bouncing up and down on the dildo mounted on your bathtub wall and having a good time.');
    } else {
      scene.text('You spend 5 more minutes happily bouncing up and down on your bathtub mounted dildo.');
    }
  }
  (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Gasping, quivering, and clenching, you ride out your orgasm while impaled on your bathtub dildo.';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterDildoMasturbateOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  // TODO-QSP: end
  scene.build();
}

function enterShowerBathtubSuctionDildoRide(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'boyStat', 'D2');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/shower_bath_dildo1.mp4');
  if ((!((s as any).dildo_timer ?? 0))) {
    (s as any).dildo_timer = 1;
    (s as any).dildo_start_minute = ((s as any).minut ?? 0);
    (s as any).dildo_start_hour = ((s as any).hour ?? 0);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Leaving the shower running, you move the curtain aside and ease down onto your bathtub mounted rubber cock.');
    scene.text('You wince in pain as it tears through your hymen and slip on the wet tub floor, gasping aloud when you suddenly find yourself ass-to-tub and the entire thing shoved up your pussy.');
    scene.text('<i>Ow! Ow! Ow! Ow! I did not mean to take the full length of that thing right away!</i>');
    scene.text('Biting hard on your lip, you give yourself a minute to adjust and let your walls stretch out. Eventually you feel a little braver and you tentatively bounce up and down on it. One bounce becomes two, two becomes twelve, and suddenly you are jumping up and down on it with reckless abandon, very much enjoying your big rubber cock.');
  } else {
    if (((s as any).dildo_start_minute ?? 0) === ((s as any).minut ?? 0)  &&  ((s as any).dildo_start_hour ?? 0) === ((s as any).hour ?? 0)) {
      scene.text('Leaving the shower running, you move the curtain aside and ease down onto your bathtub mounted rubber cock.');
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.text('<i>Haahhh~! Hhhh~! Mmmm~! Unnnh~!</i>');
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and the fact that your family is gone for the weekend.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Gasping, quivering, and clenching, you cry out loudly and ride out your orgasm while your voice echos back at you off the walls.';
        } else {
          scene.text('You bounce up and down on your dildo, allowing yourself to sofly moan in pleasure, fairly certain that the sound of the shower ought to cover up most of your voice. Maybe it\'s just the steam but you feel like you\'re enjoying yourself a lot more than you might otherwise.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Gasping, quivering, and clenching, you ride out your orgasm while impaled on your bathtub dildo doing your best not to allow your voice escape and let your family know what you\'ve been up to.';
        }
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. You cry out loudly in climax, caught in the euphoric bliss of release, before slowly winding down.';
      }
    } else {
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.text('<i>Hnnn~! Hnnnnhhh~! Nnnnn~! Mmmmm~!</i>');
        scene.text('You continue bouncing up and down on your dildo, unwilling to finish your shower while you\'re still enjoying yourself.');
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterDildoMasturbateOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBathBathtubSuctionDildoRide(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'boyStat', 'D2');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/shower_bath_dildo2.mp4');
  if ((!((s as any).dildo_timer ?? 0))) {
    (s as any).dildo_timer = 1;
    (s as any).dildo_start_minute = ((s as any).minut ?? 0);
    (s as any).dildo_start_hour = ((s as any).hour ?? 0);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Pulling yourself up out of the bath, you point your ass towards your suction mounted dildo and ease your pussy onto it.');
    scene.text('You wince in pain as it tears through your hymen and you slip, the bathwater sloshing around from your sudden movement. Next thing you know, you\'re gasping aloud when you suddenly find yourself ass-to-tub and the entire dildo shoved up your pussy to the hilt.');
    scene.text('<i>Ow! Ow! Ow! Ow! I did not mean to take the full length of that thing right away!</i>');
    scene.text('Biting hard on your lip, you give yourself a minute to adjust and let your walls stretch out. Eventually you feel a little braver and you tentatively bounce up and down on it. One bounce becomes two, two becomes twelve, and suddenly you are jumping up and down on it with reckless abandon, creating mini waves in the bathwater and very much enjoying your big rubber cock.');
  } else {
    if (((s as any).dildo_start_minute ?? 0) === ((s as any).minut ?? 0)  &&  ((s as any).dildo_start_hour ?? 0) === ((s as any).hour ?? 0)) {
      scene.text('Pulling yourself out of the bath, you decide it\'s time for a different kind of relaxation and ease down onto your bathtub mounted rubber cock.');
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('You bounce up and down on your dildo, creating sloshes in the bathwater with your motion and moaning loudly, taking advantage of the fact your family is gone for the weekend.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Legs shaking and splashing bathwater everywhere, you ride out your orgasm while impaled on your dildo, crying out in a loud voice that echos off the bathroom walls.';
        } else {
          scene.text('<i>Haahhh~! Hhhh~! Mmmm~! Unnnh~!</i>');
          scene.text('You bounce up and down on your dildo, creating ripples in the bathwater with your motion. In a very tiny voice, you let out small moans, doing your best but unable to completely hold it.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Legs shaking and splashing bathwater everywhere, you ride out your orgasm while impaled on your bathtub dildo taking strained breaths to prevent your voice escaping and letting your family know what you\'ve been up to.';
        }
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. You cry out loudly in climax, caught in the euphoric bliss of release, before it slowly winds down.';
      }
    } else {
      if (((s as any).loc ?? 0) === 'vanrPar') {
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('<i>Ahh~! Aaahhhh~! Ahhhh~! Aaaaahhhh~!</i>');
          scene.text('You continue bouncing up and down on your dildo, unwilling to finish your shower while you\'re still enjoying yourself. Maybe it\'s just the steam in the room but your body feels like it\'s on fire right now and you can\'t help but cry out loudly, so happy your family is gone for the weekend.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Legs shaking and splashing bathwater everywhere, you groan loudly and ride out your orgasm while impaled on your dildo.';
        } else {
          scene.text('<i>Hnnn~! Hnnnnhhh~! Nnnnn~! Mmmmm~!</i>');
          scene.text('You continue bouncing up and down on your dildo, unwilling to finish your shower while you\'re still enjoying yourself. Maybe it\'s just the steam in the room but your body feels like it\'s on fire right now and it\'s so difficult to not let your voice escape and travel into the hallway.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam yourself all the way down onto your dildo and climax hard all over it. Your walls squeeze tight and you can feel the entire shape of the rubber cock inside you. Legs shaking and splashing bathwater everywhere, you ride out your orgasm while impaled on your dildo taking strained breaths to prevent your voice escaping and letting your family know what you\'ve been up to.';
        }
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterDildoMasturbateOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShowerBathtubWallDildoFuck(s: GameState, scene: SceneBuilder): void {
  (s as any).vaginal_slip = 10;
  qspCall(s, 'mood', 'raise', 1);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'boyStat', 'D2');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/shower_dildo2.mp4');
  (s as any).orgasm_txt = 'You can\'t take it anymore and throw yourself as far back onto the dildo as you can, impaling yourself to the hilt on it. Spraying your clit with the showerhead, you don\'t stop even when your orgasm makes you a quivering mess, standing up on your tiptoes as pleasure rocks your entire body.';
  if ((!((s as any).dildo_timer ?? 0))) {
    (s as any).dildo_timer = 1;
    (s as any).dildo_start_minute = ((s as any).minut ?? 0);
    (s as any).dildo_start_hour = ((s as any).hour ?? 0);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Leaving the shower running, you bend over, pointing your bottom towards your wall mounted dildo. You figure it\'s time that you test this thing out.');
    scene.text('Lining it up with your pussy, you slowly push yourself back onto it, feeling it stretch you and penetrate you until you feel it bumping against your hymen. After taking a deep breath, you force your ass backward, immediately letting out a whimper of pain when you feel it tear through your maidenhood.');
    scene.text('Biting hard on your lip, you give yourself a minute to adjust and let your walls stretch out. Eventually you feel a little braver and you tentatively slide off of it and then push back on again. With big long strokes, you pull all the way off and then push slowly back on until your filled and you feel your ass touching the wall. Soon it starts to feel good, and you pick up the pace. And then you grab the showerhead and start spraying your clit with it while you slam yourself back on forth on your rubber cock.');
    scene.text('<i>Ohhhhhh yeahhhhhh… I could get used to this…</i>');
  } else {
    if (((s as any).dildo_start_minute ?? 0) === ((s as any).minut ?? 0)  &&  ((s as any).dildo_start_hour ?? 0) === ((s as any).hour ?? 0)) {
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.text('Using the wall of the tub as leverage, you breathe hard as you push your ass back and forth on the dildo mounted on the wall. Hot water from the shower rains down and steam fills the air and you to play tag with the bathtub wall, repeatedly tapping it with the back of your ass while your pussy gets stuffed with rubber.');
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('<b>thump</b><b>thump</b><b>thump</b><b>thump');
          scene.text('<i>Ahh~! Aaahhhh~! Ahhhh~! Aaaaahhhh~!</i>');
          scene.text('The echos of your moans and your ass bounce off the shower walls as you happily take advantage of the fact your family is away for the weekend.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam your ass all the way to the wall and climax hard all over your dildo. Your walls squeeze tight and you can perfectly feel the shape of the entire rubber cock inside you. Legs shaking and knees trying not to buckle, you ride out your orgasm while impaled on your shower dildo, screaming out an orgasm that can probably be heard from your room.';
        } else {
          scene.text('<i>Haahhh~! Hhhh~! Mmmm~! Unnnh~!</i>');
          scene.text('Though whimpers and gasps escape your lips, you do your best to keep your voice under control so your family doesn\'t catch you masturbating in the shower.');
          (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam your ass all the way to the wall and climax hard all over your dildo. Your walls squeeze tight and you can perfectly feel the shape of the entire rubber cock inside you. Legs shaking and knees trying not to buckle, you ride out your orgasm while impaled on your shower dildo, taking gasping breaths instead of screaming and letting your family know what you\'ve been up to.';
        }
      } else {
        scene.text('<b>thump</b><b>thump</b><b>thump</b><b>thump');
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you slap your ass back and forth against the shower wall, thorougly enjoying the dildo that\'s pumping in and out of you right now.');
        (s as any).orgasm_txt = 'Pleasure and heat build between your legs until finally you slam your ass all the way to the wall and climax hard all over your dildo. Your walls squeeze tight and you can perfectly feel the shape of the entire rubber cock inside you. You cry out loudly in climax, legs shaking and knees trying not to buckle, as you ride out your orgasm caught in euphoric bliss.';
      }
    } else {
      if (((s as any).loc ?? 0) === 'vanrPar') {
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('<b>thump</b><b>thump</b><b>thump</b><b>thump');
          scene.text('<i>Ahh~! Aaahhhh~! Ahhhh~! Aaaaahhhh~!</i>');
          scene.text('The shower keeps raining down on you just as you keep fucking your wall mounted dildo, making squelching noises as you occasionally slide it up and down with the force of your thrusts. Loud gasps escape your lips and you are so happy your family isn\'t here right now.');
        } else {
          scene.text('<i>Hnnn~! Hnnnnhhh~! Nnnnn~! Mmmmm~!</i>');
          scene.text('You\'re not done yet. The shower keeps raining down on you just as you keep fucking your wall mounted dildo, making squelching noises as you occasionally slide it up and down with the force of your thrusts. Maybe it\'s just the steam in the room but your body feels like its on fire right now and it\'s so difficult to not let your voice escape and travel into the hallway.');
        }
      } else {
        scene.text('<i><b>thump</b></i> <i><b>thump</b></i> <i><b>thump</b></i> <i><b>thump</b></i>');
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterDildoMasturbateOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterGlassShowerSuctionDildoFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 1);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).vaginal_slip = 10;
  qspCall(s, 'boyStat', 'D2');
  scene.img('images/shared/home/bathroom/shower_dildo1.mp4');
  (s as any).orgasm_txt = 'You can\'t take it anymore and throw yourself as far back onto the dildo as you can, impaling yourself to the hilt on it. Spraying your clit with the showerhead, you don\'t stop even when your orgasm makes you a quivering mess, standing up on your tiptoes as pleasure rocks your entire body.';
  if ((!((s as any).dildo_timer ?? 0))) {
    (s as any).dildo_timer = 1;
    (s as any).dildo_start_minute = ((s as any).minut ?? 0);
    (s as any).dildo_start_hour = ((s as any).hour ?? 0);
  }
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Moving your bottom over towards your wall mounted dildo, you figure it\'s time that you test this thing out.');
    scene.text('Lining it up with your pussy, you slowly push yourself back onto it, feeling it stretch you and penetrate you until you feel it bumping against your hymen. After taking a deep breath, you force your ass backward, immediately letting out a whimper of pain when you feel it tear through your maidenhood.');
    scene.text('Biting hard on your lip, you give yourself a minute to adjust and let your walls stretch out. Eventually you feel a little braver and you tentatively slide off of it and then push back on again. With big long strokes, you pull all the way off and then push slowly back on until your filled and you feel your ass touching the wall. Soon it starts to feel good, and you pick up the pace. And then you grab the showerhead and start spraying your clit with it while you slam yourself back on forth on your rubber cock.');
    scene.text('<i>Ohhhhhh yeahhhhhh… I could get used to this…</i>');
  } else {
    if (((s as any).dildo_start_minute ?? 0) === ((s as any).minut ?? 0)  &&  ((s as any).dildo_start_hour ?? 0) === ((s as any).hour ?? 0)) {
      scene.text('"Haahhh~!" <i>thump</i> "Hhhh~!" <i>thump</i> "Unnnh~!" <i>thump</i> "Unnnh~!" <i>thump</i> "Ahhh~!"');
      scene.text('Cries of pleasure echo inside the shower, as you repeatedly slam yourself back against your wall mounted dildo. Your ass makes a thumping sound every time you drive yourself to the base of the dildo and the only other sound is the white noise of the showerhead spraying against your clit.');
    } else {
      scene.text('"Anngh~!" <i><b>thump</b></i> "Hnnngh~!" <i><b>thump</b></i> "Unnngh~!" <i><b>thump</b></i> "Mmmnngh~!" <i><b>thump</b></i> "Ahhh~!!</i>');
      scene.text('The thump of your ass against the wall is even louder now, but your voice too. In the far back of your mind, you vaguely wonder how awkward it might be if you have to explain to the landlord you shattered the shower by fucking a rubber cock you suctioned to it.');
    }
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5]; enterDildoMasturbateOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDildoMasturbateOptions(s: GameState, scene: SceneBuilder): void {
  (s as any).dildo_type = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).pcs_horny ?? 0) >= 90) {
    (s as any).orgasm_or = 'yes';
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).dildo_type ?? 0) === 1) {
    scene.actions([
      { label: 'Keep masturbating', handler: (st: GameState) => {
    // TODO-QSP: killvar 'dildo_type'
  }, goto: ['selfplay', 'bath_suction_dildo_ride'] },
    ]);
  } else {
    if (((s as any).dildo_type ?? 0) === 2) {
      scene.actions([
        { label: 'Keep masturbating', handler: (st: GameState) => {
    // TODO-QSP: killvar 'dildo_type'
  }, goto: ['selfplay', 'shower_bathtub_suction_dildo_ride'] },
      ]);
    } else {
      if (((s as any).dildo_type ?? 0) === 3) {
        scene.actions([
          { label: 'Keep masturbating', handler: (st: GameState) => {
    // TODO-QSP: killvar 'dildo_type'
  }, goto: ['selfplay', 'bath_bathtub_suction_dildo_ride'] },
        ]);
      } else {
        if (((s as any).dildo_type ?? 0) === 4) {
          scene.actions([
            { label: 'Keep masturbating', handler: (st: GameState) => {
    // TODO-QSP: killvar 'dildo_type'
  }, goto: ['selfplay', 'shower_bathtub_wall_dildo_fuck'] },
          ]);
        } else {
          if (((s as any).dildo_type ?? 0) === 5) {
            scene.actions([
              { label: 'Keep masturbating', handler: (st: GameState) => {
    // TODO-QSP: killvar 'dildo_type'
  }, goto: ['selfplay', 'glass_shower_suction_dildo_fuck'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish masturbating [+iif(dildo_type = 1, \', \' and dry off\')]', handler: (st: GameState) => {
    (st as any).dildo_timer = 0;
    qspCall(st, 'arousal', 'end');
    if (((st as any).dildo_type ?? 0) !== 1) {
      (st as any).mirror_steam = ((st as any).hour ?? 0);
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Finish masturbating [+iif(dildo_type = 1, \' and unmount your d...]', handler: (st: GameState) => {
    (st as any).dildo_timer = 0;
    if (((st as any).dildo_type ?? 0) >= 1  &&  ((st as any).dildo_type ?? 0) < 4) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBathtubSuctionDildoRemove(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterShowerSuctionDildoRemove(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
    qspCall(st, 'arousal', 'end');
    if (((st as any).dildo_type ?? 0) !== 1) {
      (st as any).mirror_steam = ((st as any).hour ?? 0);
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSisProv(s: GameState, scene: SceneBuilder): void {
  (s as any).AnyaMsg = '';
  if (((s as any).loc ?? 0) === 'bedrPar') {
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Anya_Gad'] === 0) {
      if (((s as any).locat ?? 0)?.['Anya_inroom'] === 0  &&  (!((s as any).proverkasisterhere ?? 0))) {
        (s as any).proverkasisterhere = 1;
      }
      if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
        if (((s as any).sisboytrio ?? 0) > 0  &&  ((s as any).sis_watch ?? 0) === 1) {
          (s as any).sis_watch = 2;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisReact(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).proverkasisterhere ?? 0) === 2  &&  (Math.floor(Math.random() * 3) + 1) === 3) {
            (s as any).SisterKnowMastr = ((s as any).SisterKnowMastr ?? 0) + (1);
            (s as any).AnyaMsg = qspFunc(s, 'wrap', 'neg b', 'Anya saw you masturbate.');
          }
          if (((s as any).proverkasisterhere ?? 0) === 1) {
            (s as any).proverkasisterhere = 2;
            (s as any).AnyaMsg = qspFunc(s, 'wrap', 'neg b', 'You hear footsteps approaching your room.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSisReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mast_anal ?? 0) === 1) {
    (s as any).AnyaMsg = 'Anya enters the room and sees you fingering your ass. She smiles and waves at you to carry on.';
  } else {
    if (((s as any).mast_anal ?? 0) === 2  ||  ((s as any).mast_anal ?? 0) === 3) {
      (s as any).AnyaMsg = 'Anya enters the room and catches you with the dildo up your ass. "Don\'t stop on my account, ' + ((s as any).pcs_nickname ?? 0) + '. It\'s good that you\'re practicing doing butt stuff."';
    } else {
      if (((s as any).mast_anal ?? 0) === 4  ||  ((s as any).mast_anal ?? 0) === 5) {
        (s as any).AnyaMsg = 'Anya enters the room and catches you with the dildo up your ass. "Don\'t let me bother you, ' + ((s as any).pcs_nickname ?? 0) + '. It looks like you\'re really starting enjoy anal too."';
      } else {
        if (((s as any).mast_anal ?? 0) >= 6  ||  ((s as any).mast_anal ?? 0) <= 8) {
          (s as any).AnyaMsg = 'Anya enters the room and comes to a sudden stop, her eyes widening at the size of the toy you\'ve got lodged up your ass. "Damn sis, you\'ve turned full on anal size queen haven\'t you? I\'ll just… read or something. You keep enjoying yourself."';
        } else {
          if (((s as any).mast_anal ?? 0) === 9) {
            (s as any).AnyaMsg = 'Anya enters the room and comes to a sudden stop as she catches you with your fist lodged up your ass. "Damn sis, how\'d you even reach around that far? I\'ll just… read or something. You keep enjoying yourself."';
          }
        }
      }
    }
  }
  if (((s as any).mast_vag ?? 0) === 1) {
    (s as any).AnyaMsg = 'Anya enters the room and sees you fingering your pussy. She just smiles and waves at you to carry on.';
  } else {
    if (((s as any).mast_vag ?? 0) === 2  ||  ((s as any).mast_vag ?? 0) === 3) {
      (s as any).AnyaMsg = 'Anya enters the room and catches you with the dildo up your pussy. "Don\'t stop on my account, ' + ((s as any).pcs_nickname ?? 0) + '. I\'m happy you discovered how good a dick feels."';
    } else {
      if (((s as any).mast_vag ?? 0) === 4  ||  ((s as any).mast_vag ?? 0) === 5) {
        (s as any).AnyaMsg = 'Anya enters the room and catches you fucking your pussy with the dildo. "Don\'t let me bother you, ' + ((s as any).pcs_nickname ?? 0) + '. We all need a good release now and then."';
      } else {
        if (((s as any).mast_vag ?? 0) >= 6  ||  ((s as any).mast_vag ?? 0) <= 8) {
          (s as any).AnyaMsg = 'Anya enters the room and comes to a sudden stop, her eyes widening at the size of the toy you\'re stuffing in your pussy. "Damn sis, you\'ve gone full on size queen haven\'t you? I\'ll just… read or something. You keep enjoying yourself."';
        } else {
          if (((s as any).mast_vag ?? 0) === 9) {
            (s as any).AnyaMsg = 'Anya enters the room and comes to a sudden stop as she catches you with your fist lodged up your hole. "Damn sis, how long did it take to stretch yourself out that much? I\'ll just… read or something. You keep enjoying yourself."';
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVanVtor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  (((s as any).hour ?? 0) >= 6  ||  (Math.floor(Math.random() * 10) + 1) === 1)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (50);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.text('You hear shouting from outside the bathroom door.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>? What''s taking so long? Hurry up and get out of there!"
    scene.text(`"${((s as any).pcs_nickname || '')}? What's taking so long? Hurry up and get out of there!"`);
    scene.actions([
{ label: 'Get out of the bath and dry yourself off', goto: ['selfplay', 'stop'] },
]);
    return;
  } else {
    (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) - (15);
  }
  // TODO-QSP: end
  scene.build();
}

function enterClitPlay(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_vag = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).loc ?? 0) === 'vanrPar') {
    scene.img('images/shared/sex/mast/klitvann.jpg');
  } else {
    scene.img('images/shared/sex/mast/klit.mp4');
  }
  if (((s as any).pcs_mood ?? 0) >= 20) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    scene.text('You put your hand down between your legs and gently rub your fingers over your groin. Running your fingers between your pussy lips, you scout out your clitoris and lightly run your finger over it repeatedly. The feeling you get out of this is great and you feel a pleasant warmth spreading in your lower area.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.text('You caress your clit with your fingers. It feels nice, but you\'re in such a bad mood that you\'re too distracted to really enjoy it.');
  }
  (s as any).orgasm_txt = 'Suddenly, you rub your clit just right and your whole body starts to shiver in orgasm. The intensity of the orgasm nearly makes you scream, but you bite down on your lip and do your best to stifle down the moans so no one hears you.';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'clit_finger', (-20), 'masturbate');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFingering(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterFingering(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (2);
  (s as any).mast_vag = 1;
  scene.img('images/shared/sex/mast/finger.jpg');
  if (((s as any).mesec ?? 0) > 0) {
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('Your pussy has some dried up blood from your period on it. You attempt to shove your finger in, but are kind of grossed out by the idea and reconsider.');
  } else {
    if (((s as any).mesec ?? 0) <= 0) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
        scene.text('You run a finger over your soft, wet lower lips before gradually attempting to slide it into your pussy. You feel your hymen stretch a little as you slide first one and a minute later, a second finger inside.');
      } else {
        scene.text('You run your fingers over your soft, wet lower lips to lube them up a little before you proceed to slide one inside, quickly followed by a second.');
      }
      if (((s as any).pcs_vag ?? 0) < 5  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 2));
        scene.text('You feel your pussy clasping around your fingers very tightly.');
      } else {
        if (((s as any).pcs_vag ?? 0) < 10) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 6) + 5));
          scene.text('You feel your slippery pussy walls around your fingers. It feels nice and tight.');
        } else {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 2));
          scene.text('Having your fingers in your pussy feels nice, but it doesn\'t feel very tight. You feel like you can take more.');
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: <<$AnyaMsg>>
      scene.text(`${((s as any).AnyaMsg || '')}`);
      qspCall(s, 'arousal', 'vaginal_finger', 2, 'masturbate');
      qspCall(s, 'stat', '');
      if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
        scene.actions([
          { label: 'Fuck yourself with your fingers', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering2');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterFingering2(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (10);
  (s as any).mast_vag = 1;
  scene.img('images/shared/sex/mast/finger.jpg');
  if (((s as any).args ?? 0)[1] === 2) {
    scene.text('You switch back to using just two fingers and keep moving them in and out. This is much more comfortable and you get back to softly pinching your nipples as you play with yourself.');
  } else {
    if (((s as any).args ?? 0)[1] === 1) {
      scene.text('You continue fucking yourself with your fingers, massaging and squeezing your breasts.');
    } else {
      scene.text('You start moving your fingers in and out, softly pinching your nipples as you play with yourself.');
    }
  }
  if (((s as any).pcs_vag ?? 0) <= 12  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('Your pussy walls are stretched nicely from the finger fucking and you feel a pleasant warmth spread in your lower body.');
  } else {
    if (((s as any).pcs_vag ?? 0) > 12) {
      scene.text('Your pussy is quite loose, and you have to work hard to get as much enjoyment out of it.');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_finger', 10, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Thrust four of your fingers into your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Thrust four of your fingers into your pussy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'medium');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFingering3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Thrust four of your fingers into your pussy', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering3');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fingering yourself', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering2', 1);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterFingering3(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (2);
  scene.img('images/shared/sex/mast/hand.jpg');
  scene.text('You decide to go bigger by shoving four of your fingers inside your pussy.');
  if (((s as any).pcs_vag ?? 0) < 10) {
    if (((s as any).vgape ?? 0) < 3) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
    scene.text('You shove four of your fingers inside your tight pussy, and feel it stretch out way more than is comfortable. It\'s actually rather painful.');
    scene.actions([
      { label: 'Go back to using two fingers', goto: ['selfplay', 'fingering2', '2'] },
    ]);
  } else {
    if (((s as any).pcs_vag ?? 0) < 15  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
      scene.text('You shove four of your fingers inside your tight pussy, feeling your walls grip tightly around them. It doesn\'t hurt, but doesn\'t feel very good either.');
    } else {
      if (((s as any).pcs_vag ?? 0) < 20) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 3));
        scene.text('You stick four of your fingers inside your tight pussy, feeling your pussy walls grip tightly around them.');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 7) + 6));
        scene.text('You swiftly stick four of your fingers in your pussy and feel how nicely it envelops them. You get a pleasant feeling of fullness.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_finger', 2, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Use your fingers to fuck yourself', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering4');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterFingering4(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (10);
  (s as any).mast_vag = 1;
  if (((s as any).pcs_vag ?? 0) < 10) {
    if (((s as any).vgape ?? 0) < 3) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
  }
  scene.img('images/shared/sex/mast/hand.jpg');
  if (((s as any).args ?? 0)[1] === 2) {
    scene.text('You pull your hand out of your pussy and wait for the immediate pain to subside. You then start adding back one finger after another until you\'ve got four of them stuffed inside yourself again.');
  } else {
    if (((s as any).args ?? 0)[1] === 1) {
      scene.text('You continue moving your hand, thrusting your fingers into your pussy again and again, occasionally flicking your clit with your thumb and still pawing at your breasts.');
    } else {
      scene.text('You start to slowly move your hand, thrusting your fingers in and out of your pussy as you use your other hand to play with your breasts.');
    }
  }
  if (((s as any).pcs_vag ?? 0) <= 15  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
    scene.text('You\'re stretching your pussy to the point where it becomes rather painful and don\'t get any enjoyment out of it.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 11) + 10));
    if (((s as any).pcs_vag ?? 0) < 20) {
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
    }
    scene.text('Your pussy walls are stretched nicely from the finger fucking and you feel a pleasant warmth spread in your lower body.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_finger', 10, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    if (((s as any).pcs_vag ?? 0) > 10) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.actions([
          { label: 'Stuff your whole hand into your pussy', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'self_fisting_1');
  } },
        ]);
      } else {
        qspCall(s, 'willpower', 'misc', 'self', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stuff your whole hand into your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stuff your whole hand into your pussy (Break your hymnen)', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSelfFisting_1(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Use your fingers to fuck yourself', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering4', 1);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterSelfFisting_1(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (2);
  (s as any).mast_vag = 9;
  scene.img('images/shared/sex/mast/self_fisting.jpg');
  if (((s as any).pcs_vag ?? 0) < 15) {
    if (((s as any).vgape ?? 0) < 3) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
    (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
    scene.text('You bring all your fingers together and shove your whole hand up your tight pussy, but you feel it stretch out way more than is comfortable. It\'s actually rather painful.');
    scene.actions([
      { label: 'Go back to using four fingers', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'fingering4', 2);
  } },
    ]);
  } else {
    if (((s as any).pcs_vag ?? 0) < 20) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
      scene.text('You bring all your fingers together and shove your whole hand up your tight pussy. It doesn\'t hurt, but doesn\'t feel very good either.');
    } else {
      if (((s as any).pcs_vag ?? 0) < 25) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 3));
        scene.text('You bring all your fingers together and stuff your whole hand up your tight pussy, feeling your walls grip tightly around it.');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 7) + 6));
        scene.text('You bring all your fingers together and easily stick your whole hand up your tight pussy. You get a pleasant feeling of fullness.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'self_fisting', 2, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Start fisting yourself', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'self_fisting_2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterSelfFisting_2(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (10);
  (s as any).mast_vag = 9;
  if (((s as any).pcs_vag ?? 0) < 15) {
    if (((s as any).vgape ?? 0) < 3) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
  }
  scene.img('images/shared/sex/mast/self_fisting.jpg');
  if (((s as any).args ?? 0)[1] === 1) {
    scene.text('You keep moving your arm, keeping your legs up and spread as wide as you can to keep stuffing your pussy with your fist… again and again.');
  } else {
    scene.text('You slowly start moving your arm, putting your legs up to make it easier to stuff your fist up your pussy, over and over.');
  }
  if (((s as any).pcs_vag ?? 0) > 20) {
    if (((s as any).pcs_vag ?? 0) < 25) {
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 11) + 10));
    scene.text('Your pussy walls are stretched nicely from the fisting and you feel a pleasant warmth spread in your lower body.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (10);
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('You\'re stretching your pussy to the point where it becomes rather painful and don\'t get any enjoyment out of it.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'self_fisting', 10, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fisting your pussy', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'self_fisting_2', 1);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterAnalFingering(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_anal = 1;
  scene.img('images/shared/sex/mast/1.jpg');
  (s as any).plugmessage = '';
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) < 15) {
      (s as any).plugmessage = 'You carefully pull the plug out of your narrow and tight ass.';
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    } else {
      (s as any).plugmessage = 'You give the plug in your ass a small tug and easily pull it out of your hole.';
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull both fingers out of your ass and wait for the immediate pain to subside. You then slowly start pushing just a single digit back into your asshole.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
      if (((s as any).pcs_ass ?? 0) >= 5) {
        scene.text('You keep fucking your asshole with one finger. It slides in quite easily.');
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.text('You keep fucking your asshole with one finger. Your anus is squeezing your finger tightly.');
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 5) {
        scene.text('You press a finger against your asshole and push it in. It slides in quite easily.');
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.text('You press a finger against your tight asshole and push it in. Your anus is squeezing your finger tightly.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_finger', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Keep fingering your ass', goto: ['selfplay', 'anal_fingering', '1'] },
      { label: 'Add a second finger', goto: ['selfplay', 'anal_fingering2'] },
      { label: 'Choose a different way to masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterAnalFingering2(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_anal = 1;
  scene.img('images/shared/sex/mast/2.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull the three fingers out of your ass and wait for the immediate pain to subside. You then slowly start pushing one and then a second back into your asshole.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
      if (((s as any).pcs_ass ?? 0) >= 10) {
        scene.text('You keep fucking your asshole with two fingers. They\'re sliding in fairly easily.');
        if (((s as any).agape ?? 0) < 1) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 5  &&  ((s as any).pcs_ass ?? 0) < 10) {
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You keep fucking your asshole with two fingers. You can feel your anus squeezing your fingers tightly.');
          if (((s as any).agape ?? 0) < 1) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
        } else {
          (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('Fucking your already sore asshole with two fingers was a bad idea. It hurts a lot and you feel like you damaged it further.');
          scene.actions([
            { label: 'Go back to using just one finger', goto: ['selfplay', 'anal_fingering'] },
          ]);
        }
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 10) {
        scene.text('You relax and squeeze a second finger in, alongside the first. It slides in fairly easily.');
        if (((s as any).agape ?? 0) < 1) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 5  &&  ((s as any).pcs_ass ?? 0) < 10) {
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You slide a second finger into your asshole. You can feel your anus squeezing your fingers tightly.');
          if (((s as any).agape ?? 0) < 1) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
        } else {
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
          scene.text('When you slide in the second finger, you feel a sharp pain in your anus. You may have tried too much, too fast.');
          scene.actions([
            { label: 'Go back to using just one finger', goto: ['selfplay', 'anal_fingering', '2'] },
          ]);
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_finger', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    if (((s as any).pcs_ass ?? 0) < 25) {
      scene.actions([
        { label: 'Keep fucking your ass with two fingers', goto: ['selfplay', 'anal_fingering2', '1'] },
      ]);
    }
    scene.actions([
      { label: 'Thrust a third finger into your ass', goto: ['selfplay', 'anal_fingering3'] },
      { label: 'Choose a different way to masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterAnalFingering3(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_anal = 1;
  scene.img('images/shared/sex/mast/3.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull two fingers out of your ass, letting your hole clench back around the remaining two as you wait for the immediate pain to subside. You then slowly start pushing a third digit back into your asshole.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
      if (((s as any).pcs_ass ?? 0) >= 15) {
        scene.text('You keep fucking your ass with three fingers. Your asshole is fairly loose and you manage to slide all three fingers in and out without much effort.');
        if (((s as any).agape ?? 0) < 2) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 10  &&  ((s as any).pcs_ass ?? 0) < 15) {
          if (((s as any).agape ?? 0) < 2) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You keep fucking your ass with three fingers. You can feel your hole squeezing your fingers tightly as they move in and out.');
          if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
          }
        } else {
          (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
          scene.text('Fucking your already sore asshole with three fingers was a bad idea. It hurts a lot and you feel like you damaged it further.');
          scene.actions([
            { label: 'Go back to using two fingers', goto: ['selfplay', 'anal_fingering2', '2'] },
          ]);
        }
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 15) {
        scene.text('Your asshole is fairly loose, and you manage to slide three fingers in without much effort.');
        if (((s as any).agape ?? 0) < 2) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 10  &&  ((s as any).pcs_ass ?? 0) < 15) {
          if (((s as any).agape ?? 0) < 2) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You slide three fingers into your asshole. You can feel your anus squeezing your fingers tightly.');
          if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
          }
        } else {
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
          scene.text('When you slide in three fingers, you feel a sharp pain in your anus. You may have tried too much, too fast.');
          scene.actions([
            { label: 'Go back to using two fingers', goto: ['selfplay', 'anal_fingering2', '2'] },
          ]);
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_finger', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)  &&  ((s as any).agape ?? 0) < 3) {
    if (((s as any).pcs_ass ?? 0) < 30) {
      scene.actions([
        { label: 'Keep fucking your ass with three fingers', goto: ['selfplay', 'anal_fingering3', '1'] },
      ]);
    }
    scene.actions([
      { label: 'Push a fourth finger into your asshole', goto: ['selfplay', 'anal_fingering4'] },
      { label: 'Choose a different way to masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterAnalFingering4(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_anal = 1;
  scene.img('images/shared/sex/mast/4.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull two fingers out of your ass, letting your hole clench back around the remaining two as you wait for the immediate pain to subside. You then slowly start pushing a third digit back into your asshole.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
      if (((s as any).pcs_ass ?? 0) >= 20) {
        scene.text('You keep fucking your ass with four fingers. Your asshole is feeling fairly loose around them, and you manage to slide all four fingers in and out without much effort.');
        if (((s as any).agape ?? 0) < 3) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 15  &&  ((s as any).pcs_ass ?? 0) < 20) {
          if (((s as any).agape ?? 0) < 3) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You keep fucking your ass with four fingers. You can feel your hole squeezing your fingers tightly as they move in and out.');
          if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
          }
        } else {
          (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
          qspCall(s, 'mood', 'lower', 'small');
          scene.text('Fucking your already sore asshole with four fingers was a bad idea. It hurts a lot and you feel like you damaged it further.');
          scene.actions([
            { label: 'Go back to using three fingers', goto: ['selfplay', 'anal_fingering3', '2'] },
          ]);
        }
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 20) {
        scene.text('Your asshole is very loose and you manage to push four fingers into it.');
        if (((s as any).agape ?? 0) < 3) {
          (s as any).agape = ((s as any).agape ?? 0) + (1);
        }
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        if (((s as any).pcs_ass ?? 0) >= 15  &&  ((s as any).pcs_ass ?? 0) < 20) {
          if (((s as any).agape ?? 0) < 3) {
            (s as any).agape = ((s as any).agape ?? 0) + (1);
          }
          (s as any).analplay = ((s as any).analplay ?? 0) + (1);
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          scene.text('You manage to push four fingers into your asshole. You can feel your anus squeezing your fingers tightly.');
          if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
          }
        } else {
          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
          scene.text('When you slide in four fingers, you feel a sharp pain in your anus. You may have tried too much, too fast.');
          scene.actions([
            { label: 'Go back to using three fingers', goto: ['selfplay', 'anal_fingering3', '2'] },
          ]);
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_finger', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).org_temp ?? 0) === ((s as any).orgasm ?? 0)) {
    if (((s as any).pcs_ass ?? 0) < 35) {
      scene.actions([
        { label: 'Keep fucking your ass with four fingers', goto: ['selfplay', 'anal_fingering4', '1'] },
      ]);
    }
    scene.actions([
      { label: 'Stuff your whole hand in', goto: ['selfplay', 'anal_fisting'] },
      { label: 'Choose a different way to masturbate', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterAnalFisting(s: GameState, scene: SceneBuilder): void {
  (s as any).SelfFisting = ((s as any).SelfFisting ?? 0) + (1);
  (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (5);
  (s as any).mast_anal = 9;
  scene.img('images/shared/sex/mast/5.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) >= 25) {
      scene.text('You keep shoving your hand up your ass. There\'s still some resistance, but your experienced asshole lets you move your fist backwards and forwards fairly easily by now. The feeling of being stretched so much and the rubbing inside your ass is blissful.');
      if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 20  &&  ((s as any).pcs_ass ?? 0) < 25) {
        (s as any).analplay = ((s as any).analplay ?? 0) + (1);
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.text('You keep shoving your hand up your ass. There is still a lot of resistance but you are able to move your fist backwards and forwards while it\'s still in your ass. The feeling of being stretched so much and the rubbing inside your ass is blissful.');
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (1);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (40);
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You keep trying to shove your hand up your ass, hoping it will feel good despite the pain you\'re feeling. It doesn\'t seem to be working.');
        scene.actions([
          { label: 'Go back to using four fingers', goto: ['selfplay', 'anal_fingering4', '2'] },
        ]);
      }
    }
  } else {
    if (((s as any).pcs_ass ?? 0) >= 25) {
      scene.text('You bring all five your fingers together to form a cone shape and start pushing them in. Slowly but surely, you manage to stuff your entire hand into your ass. You feel your anal ring grip comfortably around your wrist.');
      if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
      }
    } else {
      if (((s as any).pcs_ass ?? 0) >= 20  &&  ((s as any).pcs_ass ?? 0) < 25) {
        (s as any).analplay = ((s as any).analplay ?? 0) + (1);
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.text('You bring all five your fingers together to form a cone shape and start pushing them in. It takes a lot of effort, but over the course of several minutes you manage to work your whole hand into your ass. You feel your anus squeeze your wrist tightly.');
        if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
        }
      } else {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) - (1);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You bring all five your fingers together to form a cone shape and start pushing them in. It takes a lot of effort but when you push your hand into your asshole, you feel a sharp pain in your anus. You may have tried too much, too fast.');
        scene.actions([
          { label: 'Go back to using four fingers', goto: ['selfplay', 'anal_fingering4', '2'] },
        ]);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'self_fisting_anal', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      scene.actions([
{ label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
]);
      return;
    } else {
      scene.actions([
        { label: 'Masturbate a different way', handler: (st: GameState) => {
    qspGoto(st, 'selfplay', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep fisting yourself', goto: ['selfplay', 'anal_fisting', '1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterStop(s: GameState, scene: SceneBuilder): void {
  (s as any).selfplaytime = 0;
  (s as any).mastrOnce = 0;
  (s as any).proverkasisterhere = 0;
  if (((s as any).vaginaTemp ?? 0) > ((s as any).pcs_vag ?? 0) * 2) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    (s as any).vaginaTemp = 0;
  }
  if (((s as any).analplay ?? 0) > ((s as any).pcs_ass ?? 0) * 2) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    (s as any).analplay = 0;
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1  &&  ((s as any).analPlugOut ?? 0) === 1) {
    scene.img('images/pc/body/analplug.jpg');
    scene.text('You had fun playing with your ass and look forward to doing it again. It doesn\'t feel right being so empty now though, so you quickly pop your assplug back up your slutty hole where it belongs. It\'s just <i>so</i> much better staying stretched and filled.');
    (s as any).analPlugIn = 1;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'hole_cap_desc':
      enterHoleCapDesc(s, scene);
      break;
    case 'hole_cap_calc':
      enterHoleCapCalc(s, scene);
      break;
    case 'dildosize_desc':
      enterDildosizeDesc(s, scene);
      break;
    case 'dildo_options':
      enterDildoOptions(s, scene);
      break;
    case 'brushplay':
      enterBrushplay(s, scene);
      break;
    case 'vagmast_dildo_start':
      enterVagmastDildoStart(s, scene);
      break;
    case 'pussy_dildo_mast':
      enterPussyDildoMast(s, scene);
      break;
    case 'anal_dildo_start':
      enterAnalDildoStart(s, scene);
      break;
    case 'anal_dildo_mast':
      enterAnalDildoMast(s, scene);
      break;
    case 'suction_dildo':
      enterSuctionDildo(s, scene);
      break;
    case 'bathtub_suction_dildo_apply':
      enterBathtubSuctionDildoApply(s, scene);
      break;
    case 'bathtub_suction_dildo_remove':
      enterBathtubSuctionDildoRemove(s, scene);
      break;
    case 'shower_suction_dildo_apply':
      enterShowerSuctionDildoApply(s, scene);
      break;
    case 'shower_suction_dildo_remove':
      enterShowerSuctionDildoRemove(s, scene);
      break;
    case 'bathtub_dildo_check':
      enterBathtubDildoCheck(s, scene);
      break;
    case 'shower_dildo_check':
      enterShowerDildoCheck(s, scene);
      break;
    case 'bath_suction_dildo':
      enterBathSuctionDildo(s, scene);
      break;
    case 'shower_suction_dildo':
      enterShowerSuctionDildo(s, scene);
      break;
    case 'bath_suction_dildo_ride':
      enterBathSuctionDildoRide(s, scene);
      break;
    case 'shower_bathtub_suction_dildo_ride':
      enterShowerBathtubSuctionDildoRide(s, scene);
      break;
    case 'bath_bathtub_suction_dildo_ride':
      enterBathBathtubSuctionDildoRide(s, scene);
      break;
    case 'shower_bathtub_wall_dildo_fuck':
      enterShowerBathtubWallDildoFuck(s, scene);
      break;
    case 'glass_shower_suction_dildo_fuck':
      enterGlassShowerSuctionDildoFuck(s, scene);
      break;
    case 'dildo_masturbate_options':
      enterDildoMasturbateOptions(s, scene);
      break;
    case 'sis_prov':
      enterSisProv(s, scene);
      break;
    case 'sis_react':
      enterSisReact(s, scene);
      break;
    case 'van_vtor':
      enterVanVtor(s, scene);
      break;
    case 'clit_play':
      enterClitPlay(s, scene);
      break;
    case 'fingering':
      enterFingering(s, scene);
      break;
    case 'fingering2':
      enterFingering2(s, scene);
      break;
    case 'fingering3':
      enterFingering3(s, scene);
      break;
    case 'fingering4':
      enterFingering4(s, scene);
      break;
    case 'self_fisting_1':
      enterSelfFisting_1(s, scene);
      break;
    case 'self_fisting_2':
      enterSelfFisting_2(s, scene);
      break;
    case 'anal_fingering':
      enterAnalFingering(s, scene);
      break;
    case 'anal_fingering2':
      enterAnalFingering2(s, scene);
      break;
    case 'anal_fingering3':
      enterAnalFingering3(s, scene);
      break;
    case 'anal_fingering4':
      enterAnalFingering4(s, scene);
      break;
    case 'anal_fisting':
      enterAnalFisting(s, scene);
      break;
    case 'stop':
      enterStop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const selfplay: LocationDef = {
  name: 'selfplay',
  title: 'Are you sure? Doing so will most likely break your hymen.',
  region: 'other',
  enter: enter,
};
