import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/shared/sex/mast/start.jpg"></center>`);
  }
  if (((s as any).loc ?? 0) === 'vanrPar') {
    // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/shared/sex/mast/startvann...
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/shared/sex/mast/startvann.mp4"></video></center>`);
  }
  if (((s as any).sisboytrio ?? 0) > 0  &&  ((s as any).sis_watch ?? 0) === 0  &&  ((s as any).loc ?? 0) === 'bedrPar') {
    (s as any).sis_watch = 1;
    if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
      (s as any).sis_watch = 2;
      scene.text('Anya smiles and lets you carry on.');
    }
  }
  qspCall(s, 'selfplay', 'sis_prov');
  qspCall(s, 'selfplay', 'hole_cap_calc');
  qspCall(s, 'selfplay', 'dildo_options');
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
    qspCall(s, 'selfplay', 'sis_prov');
    if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).loc ?? 0) === 'bedr') {
      scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
    }
    if (((s as any).loc ?? 0) === 'vanrPar') {
      scene.img('images/shared/sex/mast/dildovann.jpg');
    } else {
      scene.img('images/shared/sex/mast/dildo.jpg');
    }
    qspCall(s, 'selfplay', 'vagmast_dildo_start');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$AnyaMsg>>
    scene.text(`${((s as any).AnyaMsg ?? 0)}`);
    scene.actions([
      { label: 'Stop fucking your pussy', goto: ['selfplay', 'start'] },
    ]);
  } },
        { label: 'No', goto: ['selfplay', 'start'] },
      ]);
    } else {
      (s as any).selfplaytime = ((s as any).selfplaytime ?? 0) + (15);
      qspCall(s, 'selfplay', 'sis_prov');
      if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  ((s as any).loc ?? 0) === 'bedr') {
        scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
      }
      if (((s as any).loc ?? 0) === 'vanrPar') {
        scene.img('images/shared/sex/mast/dildovann.jpg');
      } else {
        scene.img('images/shared/sex/mast/dildo.jpg');
      }
      qspCall(s, 'selfplay', 'vagmast_dildo_start');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$AnyaMsg>>
      scene.text(`${((s as any).AnyaMsg ?? 0)}`);
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
    qspCall(s, 'selfplay', 'van_vtor');
  }
  if (((s as any).loc ?? 0) === 'gad_gpbarn') {
    (s as any).npc_horny['A66'] = ((s as any).npc_horny['A66'] ?? 0) + (1);
    scene.text('Bandit the dog is watching you curiously.');
  }
  scene.actions([
    { label: 'Stop masturbating', goto: ['selfplay', 'stop'] },
  ]);
  scene.build();
}

function enterHoleCapDesc(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4)) {
    if (((s as any).pussycap ?? 0) === 3) {
    } else {
      if ((!((s as any).pussycap ?? 0))) {
      }
      if (((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        if (((s as any).pussycap ?? 0) === 3) {
        } else {
          if (((s as any).pussycap ?? 0) === 1) {
          } else {
            if (((s as any).pussycap ?? 0) === -1) {
            } else {
              if (((s as any).pussycap ?? 0) === -3) {
              }
              if (((s as any).auto_vag_lube ?? 0) === 0  ||  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
                if (((s as any).pussycap ?? 0) === 3) {
                } else {
                  if (((s as any).pussycap ?? 0) === 1) {
                  } else {
                    if (((s as any).pussycap ?? 0) === -1) {
                    } else {
                      if (((s as any).pussycap ?? 0) === -3) {
                      }
                    }
                  }
                  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
                    if (((s as any).analcap ?? 0) === 3) {
                    } else {
                      if ((!((s as any).analcap ?? 0))) {
                      }
                      if (((s as any).trait_vars ?? 0)?.['buttslut'] < 2) {
                        if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                          if (((s as any).analcap ?? 0) === 3) {
                          } else {
                            if (((s as any).analcap ?? 0) === 1) {
                            } else {
                              if (((s as any).analcap ?? 0) === -1) {
                              } else {
                                if (((s as any).analcap ?? 0) === -3) {
                                }
                                if (((s as any).analcap ?? 0) === 3) {
                                } else {
                                  if (((s as any).analcap ?? 0) === 1) {
                                  } else {
                                    if (((s as any).analcap ?? 0) === -1) {
                                    } else {
                                      if (((s as any).analcap ?? 0) === -3) {
                                      }
                                    }
                                    if (((s as any).trait_vars ?? 0)?.['buttslut'] > 1) {
                                      if (((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
                                        if (((s as any).analcap ?? 0) === 3) {
                                        } else {
                                          if (((s as any).analcap ?? 0) === 1) {
                                          } else {
                                            if (((s as any).analcap ?? 0) === -1) {
                                            } else {
                                              if (((s as any).analcap ?? 0) === -3) {
                                              }
                                              if (((s as any).auto_anal_lube ?? 0) === 0  ||  ((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
                                                if (((s as any).analcap ?? 0) === 3) {
                                                } else {
                                                  if (((s as any).analcap ?? 0) === 1) {
                                                  } else {
                                                    if (((s as any).analcap ?? 0) === -1) {
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const selfplay: LocationDef = {
  name: 'selfplay',
  title: 'Are you sure? Doing so will most likely break your hymen.',
  region: 'other',
  description: ['Anya smiles and lets you carry on.'],
  enter: enter,
};
