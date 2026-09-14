import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

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
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
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
        qspCall(s, 'boyStat', 'D<<dildonumber>>');
        if (((s as any).pussycap ?? 0) < 2  ||  (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
          scene.actions([
            { label: 'Use the dildo on your pussy', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('<center><b>Are you sure? Doing so will most likely break your hymen.</b></center>');
      scene.actions([
        { label: 'Do it', handler: (st: GameState) => {
    (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (15);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).loc ?? 0) === 'bedr') {
      scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
    }
    if (((s as any).loc ?? 0) === 'vanrPar') {
      scene.img('images/shared/sex/mast/dildovann.jpg');
    } else {
      scene.img('images/shared/sex/mast/dildo.jpg');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVagmastDildoStart(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$AnyaMsg>>
    scene.text(`${((s as any).AnyaMsg || '')}`);
    scene.actions([
      { label: 'Stop fucking your pussy', goto: ['selfplay', 'start'] },
    ]);
  } },
        { label: 'No', goto: ['selfplay', 'start'] },
      ]);
    } else {
      (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (15);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).loc ?? 0) === 'bedr') {
        scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
      }
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.img('images/shared/sex/mast/dildovann.jpg');
      } else {
        scene.img('images/shared/sex/mast/dildo.jpg');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVagmastDildoStart(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$AnyaMsg>>
      scene.text(`${((s as any).AnyaMsg || '')}`);
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
      scene.actions([{ label: 'Continue', goto: ['selfplay', 'brushplay'] }]);
    }
  } },
    ]);
  }
  if (((s as any).loc ?? 0) === 'vanrPar'  &&  ((s as any).selfplaytime ?? 0) >= 60) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVanVtor(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).loc ?? 0) === 'gad_gpbarn') {
    if (!(s as any).npc_horny) (s as any).npc_horny = {}; (s as any).npc_horny['A66'] = ((s as any).npc_horny['A66'] ?? 0) + (1);
    scene.text('Bandit the dog is watching you curiously.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterHoleCapDesc(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
    if (((s as any).pussycap ?? 0) === 3) {
    } else {
      if (((s as any).pussycap ?? 0) > 0) {
      } else {
        if ((!((s as any).pussycap ?? 0))) {
        } else {
          if (((s as any).pussycap ?? 0) < 0) {
          }
        }
      }
    }
  } else {
    if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      if (((s as any).pussycap ?? 0) === 3) {
      } else {
        if (((s as any).pussycap ?? 0) === 2) {
        } else {
          if (((s as any).pussycap ?? 0) === 1) {
          } else {
            if ((!((s as any).pussycap ?? 0))) {
            } else {
              if (((s as any).pussycap ?? 0) === -1) {
              } else {
                if (((s as any).pussycap ?? 0) === -2) {
                } else {
                  if (((s as any).pussycap ?? 0) === -3) {
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
        } else {
          if (((s as any).pussycap ?? 0) === 2) {
          } else {
            if (((s as any).pussycap ?? 0) === 1) {
            } else {
              if ((!((s as any).pussycap ?? 0))) {
              } else {
                if (((s as any).pussycap ?? 0) === -1) {
                } else {
                  if (((s as any).pussycap ?? 0) === -2) {
                  } else {
                    if (((s as any).pussycap ?? 0) === -3) {
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
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
    if (((s as any).analcap ?? 0) === 3) {
    } else {
      if (((s as any).analcap ?? 0) > 0) {
      } else {
        if ((!((s as any).analcap ?? 0))) {
        } else {
          if (((s as any).analcap ?? 0) < 0) {
          }
        }
      }
    }
  } else {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] < 2) {
      if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        if (((s as any).analcap ?? 0) === 3) {
        } else {
          if (((s as any).analcap ?? 0) === 2) {
          } else {
            if (((s as any).analcap ?? 0) === 1) {
            } else {
              if ((!((s as any).analcap ?? 0))) {
              } else {
                if (((s as any).analcap ?? 0) === -1) {
                } else {
                  if (((s as any).analcap ?? 0) === -2) {
                  } else {
                    if (((s as any).analcap ?? 0) === -3) {
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).analcap ?? 0) === 3) {
        } else {
          if (((s as any).analcap ?? 0) === 2) {
          } else {
            if (((s as any).analcap ?? 0) === 1) {
            } else {
              if ((!((s as any).analcap ?? 0))) {
              } else {
                if (((s as any).analcap ?? 0) === -1) {
                } else {
                  if (((s as any).analcap ?? 0) === -2) {
                  } else {
                    if (((s as any).analcap ?? 0) === -3) {
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
          } else {
            if (((s as any).analcap ?? 0) === 2) {
            } else {
              if (((s as any).analcap ?? 0) === 1) {
              } else {
                if ((!((s as any).analcap ?? 0))) {
                } else {
                  if (((s as any).analcap ?? 0) === -1) {
                  } else {
                    if (((s as any).analcap ?? 0) === -2) {
                    } else {
                      if (((s as any).analcap ?? 0) === -3) {
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
            } else {
              if (((s as any).analcap ?? 0) === 2) {
              } else {
                if (((s as any).analcap ?? 0) === 1) {
                } else {
                  if ((!((s as any).analcap ?? 0))) {
                  } else {
                    if (((s as any).analcap ?? 0) === -1) {
                    } else {
                      if (((s as any).analcap ?? 0) === -2) {
                      } else {
                        if (((s as any).analcap ?? 0) === -3) {
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
  if (((s as any).dildonumber ?? 0) === 1) {
  }
  if (((s as any).dildonumber ?? 0) === 2) {
  }
  if (((s as any).dildonumber ?? 0) === 3) {
  }
  if (((s as any).dildonumber ?? 0) === 4) {
  }
  if (((s as any).dildonumber ?? 0) === 5) {
  }
  if (((s as any).dildonumber ?? 0) === 6) {
  }
  if (((s as any).dildonumber ?? 0) === 7) {
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
  if (((s as any).locArgs?.[1] ?? 0) === 'brush_keepgoing') {
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
      { label: 'Keep playing with the brush', goto: ['selfplay', 'brushplay', '\'brush_keepgoing\''] },
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
  if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    if ((!((s as any).mesec ?? 0))) {
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
    }
    qspCall(s, 'arousal', 'auto_lube', 'vag', 'custom');
  } else {
    if ((!((s as any).auto_vag_lube ?? 0))) {
    } else {
      if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
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
  if (((s as any).mesec ?? 0) > 0) {
  }
  if (((s as any).pussycap ?? 0) === 2) {
  } else {
    if (((s as any).pussycap ?? 0) === 1) {
    } else {
      if ((!((s as any).pussycap ?? 0))) {
      } else {
        if (((s as any).pussycap ?? 0) < 0) {
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$entrymessage>>Once you have part of it's length inside, you stop for a moment...
  scene.text(`${((s as any).entrymessage || '')}Once you have part of it's length inside, you stop for a moment to give yourself time to adjust to the length and girth of the toy stretching you open. It's not long before you slowly start moving, letting the dildo slide almost all the way out of your pussy before preparing to push it back inside…`);
  (s as any).mast_vag = ((s as any).dildonumber ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
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
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'vag_keepgoing') {
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
        scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this rubber cock. You\'re pounding your pussy, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit\' +iif(trait_vars[\'buttslut\'] > 1, \', even rubbing a finger against your sensitive asshole\', \') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd sounds of the toy smacking against your snatch.');
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
          scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this big rubber cock. You\'re pounding your pussy, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit\' +iif(trait_vars[\'buttslut\'] > 1, \', even rubbing a finger against your sensitive asshole\', \') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the large toy sliding in and out of your sloppy pussy.');
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
            scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your pussy with this massive rubber cock. You\'re pounding your pussy, again and again and again. Slamming the heavy dildo in and out of your hole at increasing speeds, grabbing at your breasts or flicking your clit\' +iif(trait_vars[\'buttslut\'] > 1, \', even rubbing a finger against your sensitive asshole\', \') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the massive toy sliding in and out of your sloppy, wide stretched cunt.');
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
    if (((s as any).mesec ?? 0) > 0) {
      qspCall(s, 'mood', 'lower', 'tiny');
    }
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow. You slam the dildo up...
        scene.text(`You're so horny you don't even think of starting off slow. You slam the dildo up inside your dripping pussy, gasping in pleasure as you take the full length and feel the base rest against your crotch.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
        if ((!((s as any).vgape ?? 0))) {
          (s as any).vgape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow. You start slamming th...
          scene.text(`You're so horny you don't even think of starting off slow. You start slamming the large dildo up inside your dripping pussy and after just a few thrusts you have it just about balls deep in your hungry hole. You gasp and moan as you enjoy the extra length and girth of the large toy stretching and filling your snatch.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
          if (((s as any).vgape ?? 0) === 1) {
            (s as any).vgape = 2;
          } else {
            if ((!((s as any).vgape ?? 0))) {
              (s as any).vgape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow, despite the toy's mas...
            scene.text(`You're so horny you don't even think of starting off slow, despite the toy's massive size. You start slamming the dildo up inside your dripping pussy, caring less about control and more about stuffing your hole with the heavy toy as quickly as possible. You gasp and moan as the extreme length and girth fills you completely, your snatch stretched tightly around it. Much of the toy just doesn't fit, but it doesn't stop you from slamming it back in again and again.${((s as any).assslutmessage || '')}${((s as any).temp_mens || '')}`);
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
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your pussy', goto: ['selfplay', 'pussy_dildo_mast', '\'vag_keepgoing\''] },
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
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] < 2) {
      if (((s as any).pcs_ass ?? 0) >= 15) {
      } else {
        if (((s as any).pcs_ass ?? 0) < 15) {
        } else {
          if (((s as any).pcs_ass ?? 0) < 7) {
          } else {
            if ((!((s as any).pcs_ass ?? 0))) {
            }
          }
        }
      }
    }
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) < 15) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    } else {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    }
  }
  if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    qspCall(s, 'arousal', 'auto_lube', 'anal', 'custom');
  } else {
    if ((!((s as any).auto_anal_lube ?? 0))) {
      qspCall(s, 'arousal', 'anal_finger', 1, 'spit');
    } else {
      if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
        qspCall(s, 'arousal', 'anal_finger', 1, 'spit');
      }
    }
  }
  if (((s as any).dildonumber ?? 0) < 3) {
    if (((s as any).analcap ?? 0) === 2) {
    } else {
      if (((s as any).analcap ?? 0) === 1) {
      } else {
        if ((!((s as any).analcap ?? 0))) {
        } else {
          if (((s as any).analcap ?? 0) === -1) {
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
            }
          }
        }
      }
    }
  }
  if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
    if (((s as any).analcap ?? 0) === 2) {
    } else {
      if (((s as any).analcap ?? 0) === 1) {
      } else {
        if ((!((s as any).analcap ?? 0))) {
        } else {
          if (((s as any).analcap ?? 0) === -1) {
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
            }
          }
        }
      }
    }
  }
  if (((s as any).dildonumber ?? 0) >= 5) {
    if (((s as any).analcap ?? 0) === 2) {
    } else {
      if (((s as any).analcap ?? 0) === 1) {
      } else {
        if ((!((s as any).analcap ?? 0))) {
        } else {
          if (((s as any).analcap ?? 0) === -1) {
          } else {
            if (((s as any).analcap ?? 0) <= -2) {
            }
          }
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$virginmessage>><<$plugmessage>><<$lubemessage>><<$warmupmessage>> After finge...
  scene.text(`${((s as any).virginmessage || '')}${((s as any).plugmessage || '')}${((s as any).lubemessage || '')}${((s as any).warmupmessage || '')} After fingering your ass for a few more seconds, you pull them out and place the ${((s as any).dildo_desc || '')} near your hole.`);
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
    if (((s as any).analcap ?? 0) === 2) {
    } else {
      if (((s as any).analcap ?? 0) === 1) {
      } else {
        if ((!((s as any).analcap ?? 0))) {
        } else {
          if (((s as any).analcap ?? 0) < 0) {
          }
        }
      }
    }
  }
  if (((s as any).analcap ?? 0) === 2) {
  } else {
    if (((s as any).analcap ?? 0) === 1) {
    } else {
      if ((!((s as any).analcap ?? 0))) {
      } else {
        if (((s as any).analcap ?? 0) < 0) {
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$entrymessage>>Once you have most of it's length inside your hole, you stop fo...
  scene.text(`${((s as any).entrymessage || '')}Once you have most of it's length inside your hole, you stop for a moment to give yourself time to adjust to the length and girth of the toy stretching you open. It's not long before you slowly start moving, letting your dildo slide almost all the way out of your ass before pushing it back inside…`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSisProv(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$AnyaMsg>>
  scene.text(`${((s as any).AnyaMsg || '')}`);
  qspCall(s, 'arousal', 'anal_dildo', 5, 'masturbate');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) > 0) {
    if (((s as any).org_temp ?? 0) < ((s as any).orgasm ?? 0)) {
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
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
  if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'anal_keepgoing') {
    if (((s as any).pcs_horny ?? 0) >= 85) {
      if (((s as any).dildonumber ?? 0) < 3) {
        // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
        scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this rubber cock. You\'re pounding your ass, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples\' +iif(trait_vars[\'buttslut\'] < 2, \' or sliding a hand between your legs to rub your pussy\', \', ignoring your pussy and focussing on what your slutty ass is feeling\') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd sounds of the toy smacking up between your cheeks.');
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
          scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this big rubber cock. You\'re pounding your ass, again and again and again. Slamming the dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples\' +iif(trait_vars[\'buttslut\'] < 2, \' or sliding a hand between your legs to rub your pussy\', \', ignoring your pussy and focussing on what your slutty ass is feeling\') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the large toy sliding in and out of your well fucked ass.');
          if (((s as any).agape ?? 0) === 1) {
            (s as any).agape = 2;
          } else {
            if ((!((s as any).agape ?? 0))) {
              (s as any).agape = 1;
            }
          }
        } else {
          if (((s as any).dildonumber ?? 0) > 5) {
            // TODO-QSP: dynamic text: You keep going. You're so horny right now, it feels like you can't think of anyt...
            scene.text('You keep going. You\'re so horny right now, it feels like you can\'t think of anything besides fucking your ass with this massive rubber cock. You\'re pounding your ass, again and again and again. Slamming the heavy dildo in and out of your hole at increasing speeds, grabbing at your breasts and pinching your nipples\' +iif(trait_vars[\'buttslut\'] < 2, \' or sliding a hand between your legs to rub your pussy\', \', ignoring your pussy and focussing on what your slutty ass is feeling\') + \' as you chase down an orgasm. Your eyes are closed as you gasp and moan loudly, accompanied by the lewd squelching sounds of the massive toy sliding in and out of your well fucked ass.');
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
        // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow. You slam the dildo in...
        scene.text(`You're so horny you don't even think of starting off slow. You slam the dildo inside your twitching asshole, gasping in pleasure as you take the full length and feel its balls smack against your crotch as your asshole swallows it all the way to the base.${((s as any).assslutmessage || '')}`);
        if ((!((s as any).agape ?? 0))) {
          (s as any).agape = 1;
        }
      } else {
        if (((s as any).dildonumber ?? 0) >= 3  &&  ((s as any).dildonumber ?? 0) < 5) {
          // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow. You start slamming th...
          scene.text(`You're so horny you don't even think of starting off slow. You start slamming the large dildo up inside your eager asshole and after just a few thrusts you have it pushed balls deep in your hungry hole. You gasp and moan as you enjoy the extra length and girth of the large toy stretching and filling your ass.${((s as any).assslutmessage || '')}`);
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
              // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow, plopping the massive ...
              scene.text(`You're so horny you don't even think of starting off slow, plopping the massive toy on the ground before squatting down above and taking it in again. Your excited impatience works against you however as your legs slip, causing you to just… drop. With a heavy grunt, you find yourself seated on the floor, your eyes rolled back as your asshole is instantly stuffed and tightly stretched around a massive rubber cock. You catch your breath and moan loudly, putting a hand on your now bulging stomach. Thank God your hole is experienced… and that you stretched beforehand.${((s as any).assslutmessage || '')}`);
              if (((s as any).trait_vars ?? 0)?.['buttslut'] === 3) {
              }
            } else {
              // TODO-QSP: dynamic text: You're so horny you don't even think of starting off slow, plopping the massive ...
              scene.text(`You're so horny you don't even think of starting off slow, plopping the massive toy on the ground before sitting back and taking it in again. All you care about now is stuffing your eager asshole as much and as fast as possible. Too long after, you find yourself fully seated with the massive rubber cock stuffed balls deep in your rear. You moan loudly as you place your hand on your bulging stomach with your asshole stretched tightly around its extreme girth.${((s as any).assslutmessage || '')}`);
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
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Keep fucking your ass', goto: ['selfplay', 'anal_dildo_mast', '\'anal_keepgoing\''] },
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
    scene.text('Your <a href="exec:gs \'selfplay\',\'bath_suction_dildo\'">suction dildo</a> is stuck to the bath tub.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0) {
      scene.text('You can stick your suction dildo to the <a href="exec:gs \'selfplay\',\'bathtub_suction_dildo_apply\' & gt $loc, $loc_arg">bath tub</a> to play with.');
    }
  }
  if ((0 as any) === 1  ||  (0 as any) === 1) {
    scene.text('Your suction dildo is <a href="exec:gt \'selfplay\',\'shower_suction_dildo\'">inside the shower</a>.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0) {
      scene.text('You can also stick a suction dildo inside <a href="exec:gs \'selfplay\',\'shower_suction_dildo_apply\' & gt $loc, $loc_arg">the shower</a>.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathtubSuctionDildoApply(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_bathtub_dildo = 1'
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo += 1'
  if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) - (1);
  // TODO-QSP: end
  scene.build();
}

function enterBathtubSuctionDildoRemove(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic '<<$loc>>_bathtub_dildo = 0'
  // TODO-QSP: dynamic '<<$loc>>_suction_dildo -= 1'
  if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
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
  if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) - (1);
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
  if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['dildo_suction'] = ((s as any).mc_inventory['dildo_suction'] ?? 0) + (1);
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Take it off', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'bathtub_suction_dildo_remove');
    dynamicGoto(st, 'loc', 'loc_arg');
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Take it off', handler: (st: GameState) => {
    qspCall(st, 'selfplay', 'shower_suction_dildo_remove');
    dynamicGoto(st, 'loc', 'loc_arg');
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
        } else {
          scene.text('You bounce up and down on your dildo, allowing yourself to sofly moan in pleasure, fairly certain that the sound of the shower ought to cover up most of your voice. Maybe it\'s just the steam but you feel like you\'re enjoying yourself a lot more than you might otherwise.');
        }
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
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
        } else {
          scene.text('<i>Haahhh~! Hhhh~! Mmmm~! Unnnh~!</i>');
          scene.text('You bounce up and down on your dildo, creating ripples in the bathwater with your motion. In a very tiny voice, you let out small moans, doing your best but unable to completely hold it.');
        }
      } else {
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you ride your dildo, thoroughly enjoying yourself and making sure anyone on the other side of the wall knows you\'re enjoying yourself too.');
      }
    } else {
      if (((s as any).loc ?? 0) === 'vanrPar') {
        if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
          scene.text('<i>Ahh~! Aaahhhh~! Ahhhh~! Aaaaahhhh~!</i>');
          scene.text('You continue bouncing up and down on your dildo, unwilling to finish your shower while you\'re still enjoying yourself. Maybe it\'s just the steam in the room but your body feels like it\'s on fire right now and you can\'t help but cry out loudly, so happy your family is gone for the weekend.');
        } else {
          scene.text('<i>Hnnn~! Hnnnnhhh~! Nnnnn~! Mmmmm~!</i>');
          scene.text('You continue bouncing up and down on your dildo, unwilling to finish your shower while you\'re still enjoying yourself. Maybe it\'s just the steam in the room but your body feels like it\'s on fire right now and it\'s so difficult to not let your voice escape and travel into the hallway.');
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
        } else {
          scene.text('<i>Haahhh~! Hhhh~! Mmmm~! Unnnh~!</i>');
          scene.text('Though whimpers and gasps escape your lips, you do your best to keep your voice under control so your family doesn\'t catch you masturbating in the shower.');
        }
      } else {
        scene.text('<b>thump</b><b>thump</b><b>thump</b><b>thump');
        scene.text('<i>Haahhh~! Hhhh~! Unnnh~! Unnnh~! Ahhh~!</i>');
        scene.text('Your cries of pleasure echo off the walls of the bathroom as you slap your ass back and forth against the shower wall, thorougly enjoying the dildo that\'s pumping in and out of you right now.');
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
  (s as any).dildo_type = qspUntranslated(s, "ARGS[1]", { location: "selfplay" });
  if (((s as any).pcs_horny ?? 0) >= 90) {
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
    (s as any).dildo_timer = 0;
    qspCall(s, 'arousal', 'end');
    if (((s as any).dildo_type ?? 0) !== 1) {
      (s as any).mirror_steam = ((s as any).hour ?? 0);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Finish masturbating [+iif(dildo_type = 1, \' and unmount your d...]', handler: (st: GameState) => {
    (s as any).dildo_timer = 0;
    if (((s as any).dildo_type ?? 0) >= 1  &&  ((s as any).dildo_type ?? 0) < 4) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBathtubSuctionDildoRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerSuctionDildoRemove(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    qspCall(s, 'arousal', 'end');
    if (((s as any).dildo_type ?? 0) !== 1) {
      (s as any).mirror_steam = ((s as any).hour ?? 0);
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSisProv(s: GameState, scene: SceneBuilder): void {
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
          }
          if (((s as any).proverkasisterhere ?? 0) === 1) {
            (s as any).proverkasisterhere = 2;
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
  } else {
    if (((s as any).mast_anal ?? 0) === 2  ||  ((s as any).mast_anal ?? 0) === 3) {
    } else {
      if (((s as any).mast_anal ?? 0) === 4  ||  ((s as any).mast_anal ?? 0) === 5) {
      } else {
        if (((s as any).mast_anal ?? 0) >= 6  ||  ((s as any).mast_anal ?? 0) <= 8) {
        } else {
          if (((s as any).mast_anal ?? 0) === 9) {
          }
        }
      }
    }
  }
  if (((s as any).mast_vag ?? 0) === 1) {
  } else {
    if (((s as any).mast_vag ?? 0) === 2  ||  ((s as any).mast_vag ?? 0) === 3) {
    } else {
      if (((s as any).mast_vag ?? 0) === 4  ||  ((s as any).mast_vag ?? 0) === 5) {
      } else {
        if (((s as any).mast_vag ?? 0) >= 6  ||  ((s as any).mast_vag ?? 0) <= 8) {
        } else {
          if (((s as any).mast_vag ?? 0) === 9) {
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
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>? What's taking so long? Hurry up and get out of there!"
    scene.text(`"${((s as any).pcs_nickname || '')}? What's taking so long? Hurry up and get out of there!"`);
    return;
    scene.actions([
      { label: 'Get out of the bath and dry yourself off', goto: ['selfplay', 'stop'] },
    ]);
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
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
    scene.text('You put your hand down between your legs and gently rub your fingers over your groin. Running your fingers between your pussy lips, you scout out your clitoris and lightly run your finger over it repeatedly. The feeling you get out of this is great and you feel a pleasant warmth spreading in your lower area.');
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 2) + 0);
    scene.text('You caress your clit with your fingers. It feels nice, but you\'re in such a bad mood that you\'re too distracted to really enjoy it.');
  }
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
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 2);
        scene.text('You feel your pussy clasping around your fingers very tightly.');
      } else {
        if (((s as any).pcs_vag ?? 0) < 10) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
          scene.text('You feel your slippery pussy walls around your fingers. It feels nice and tight.');
        } else {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 2);
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
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFingering3(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 1);
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
      scene.text('You shove four of your fingers inside your tight pussy, feeling your walls grip tightly around them. It doesn\'t hurt, but doesn\'t feel very good either.');
    } else {
      if (((s as any).pcs_vag ?? 0) < 20) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 3);
        scene.text('You stick four of your fingers inside your tight pussy, feeling your pussy walls grip tightly around them.');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 7) + 6);
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
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
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
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSelfFisting_1(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 1);
      (s as any).vaginaTemp = ((s as any).vaginaTemp ?? 0) + (1);
      scene.text('You bring all your fingers together and shove your whole hand up your tight pussy. It doesn\'t hurt, but doesn\'t feel very good either.');
    } else {
      if (((s as any).pcs_vag ?? 0) < 25) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 4) + 3);
        scene.text('You bring all your fingers together and stuff your whole hand up your tight pussy, feeling your walls grip tightly around it.');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 7) + 6);
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
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
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
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
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
  if (((s as any).analPlugIn ?? 0) === 1) {
    if (((s as any).pcs_ass ?? 0) < 15) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    } else {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull both fingers out of your ass and wait for the immediate pain to subside. You then slowly start pushing just a single digit back into your asshole.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
      { label: 'Choose a different way to masturbate', goto: ['selfplay', 'start'] },
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
  if (((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull the three fingers out of your ass and wait for the immediate pain to subside. You then slowly start pushing one and then a second back into your asshole.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
      { label: 'Choose a different way to masturbate', goto: ['selfplay', 'start'] },
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
  if (((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull two fingers out of your ass, letting your hole clench back around the remaining two as you wait for the immediate pain to subside. You then slowly start pushing a third digit back into your asshole.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
      { label: 'Choose a different way to masturbate', goto: ['selfplay', 'start'] },
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
  if (((s as any).locArgs?.[1] ?? 0) === 2) {
    scene.text('You pull two fingers out of your ass, letting your hole clench back around the remaining two as you wait for the immediate pain to subside. You then slowly start pushing a third digit back into your asshole.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
      { label: 'Choose a different way to masturbate', goto: ['selfplay', 'start'] },
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
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
      return;
      scene.actions([
        { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
      ]);
    } else {
      scene.actions([
        { label: 'Masturbate a different way', goto: ['selfplay', 'start'] },
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
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
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
