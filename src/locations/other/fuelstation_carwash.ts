import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'fuelstation_carwash', 'start');
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 3) + 0);
    scene.text('The gas station worker chases you away. "At least wash yourself off first, whore!"');
    scene.actions([
      { label: 'Leave', goto: ['fuelstation', 'start'] },
      { label: 'Go to the toilet', goto: ['fuelstation', 'toilet'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'wash'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    (s as any).slut_compare = ((s as any).fame ?? 0)?.['city_slut'];
  } else {
    if (((s as any).region ?? 0) === 'pav') {
      (s as any).slut_compare = ((s as any).fame ?? 0)?.['pav_slut'];
    }
  }
  if (((s as any).PCloBimbo ?? 0) === 1  ||  ((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'sweat', 'add', 2);
    if (((s as any).pcs_apprnc ?? 0) >= 60) {
      // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
      scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 100)}.`);
      qspCall(s, 'money', 'earn', 100);
      if ((Math.floor(Math.random() * 100) + 1) <= Math.min(Math.max(20, ((s as any).slut_compare ?? 0)), 80)) {
        scene.text('As you finish washing another car, the driver walks up to you to give you a tip. From the way he\'s looking at you, it\'s obvious he\'s interested in something more as well.');
        (s as any).carwashscene = Math.floor(Math.random() * 100) + 1;
        if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(25, ((s as any).slut_compare ?? 0)), 50)  &&  ((s as any).carwashscene ?? 0) >= 25) {
          scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'assQ'] }]);
        } else {
          if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(50, ((s as any).slut_compare ?? 0)), 65)  &&  ((s as any).carwashscene ?? 0) >= 50) {
            scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'pussyQ'] }]);
          } else {
            if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(65, ((s as any).slut_compare ?? 0)), 85)  &&  ((s as any).carwashscene ?? 0) >= 65) {
              scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'handQ'] }]);
            } else {
              if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(85, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).carwashscene ?? 0) >= 85) {
                scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'blowQ'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'titsQ'] }]);
              }
            }
          }
        }
      } else {
        qspCall(s, 'fuelstation_carwash', 'flash_passing');
      }
    } else {
      // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
      scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 80)}.`);
      qspCall(s, 'money', 'earn', 80);
      qspCall(s, 'fuelstation_carwash', 'flash_passing');
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'sweat', 'add', 2);
    qspCall(s, 'money', 'earn', 60);
    scene.img(`images/locations/shared/carwash/regular${Math.floor(Math.random() * 4) + 1}.jpg`);
    // TODO-QSP: dynamic text: You wash the windows of several cars and earn <<$func('money', 'string_profit', ...
    scene.text(`You wash the windows of several cars and earn ${qspFunc(s, 'money', 'string_profit', 60)}.`);
    qspCall(s, 'fuelstation_carwash', 'flash_passing');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlashPassing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloPants ?? 0) > 0  ||  ((s as any).PCloSkirt ?? 0) > 0) {
    if (((s as any).pcs_inhib ?? 0) >= 35) {
      scene.actions([
        { label: 'Flash your tits at passing cars', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'titsFlash', 'Free', 'Flash'
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
      scene.actions([
        { label: 'Flash your ass at passing cars', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'assFlash', 'Free', 'Flash'
  } },
      ]);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Flash your pussy at passing cars', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'pussyFlash', 'Free', 'Flash'
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterTitsQ(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: "Want to earn some more cash, girl? Show me your tits and I'll give you <<$func(...
  scene.text(`"Want to earn some more cash, girl? Show me your tits and I'll give you ${qspFunc(s, 'money', 'string_profit', 50)}. It's easy money."`);
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  ||  ((s as any).pcs_inhib ?? 0) >= 35  ||  ((s as any).pcs_horny ?? 0) >= 40) {
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'titsFlash', 'Paid', 'Question'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['fuelstation_carwash', 'refuse'] },
  ]);
  scene.build();
}

function enterAssQ(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: "What a nice ass you have there. Will <<$func('money', 'string_profit', 50)>> co...
  scene.text(`"What a nice ass you have there. Will ${qspFunc(s, 'money', 'string_profit', 50)} convince you to show it to me?"`);
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  ||  ((s as any).pcs_horny ?? 0) >= 60) {
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'assFlash', 'Paid', 'Question'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['fuelstation_carwash', 'refuse'] },
  ]);
  scene.build();
}

function enterPussyQ(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: "You look like a cool girl. Let me see your pussy and I'll give you <<$func('mon...
  scene.text(`"You look like a cool girl. Let me see your pussy and I'll give you ${qspFunc(s, 'money', 'string_profit', 50)}."`);
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  ||  ((s as any).pcs_horny ?? 0) >= 80) {
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'pussyFlash', 'Paid', 'Question'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['fuelstation_carwash', 'refuse'] },
  ]);
  scene.build();
}

function enterHandQ(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: "Could you help me out, girl? It's getting tight down here in my pants just look...
  scene.text(`"Could you help me out, girl? It's getting tight down here in my pants just looking at you. How about you… help me out? I'll pay you ${qspFunc(s, 'money', 'string_profit', 200)}."`);
  if (((s as any).slut_compare ?? 0) >= 25  ||  ((s as any).pcs_horny ?? 0) >= 25) {
    scene.actions([
      { label: 'Give him a handjob', goto: ['fuelstation_carwash', 'handjob', '\'Paid\''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['fuelstation_carwash', 'refuse'] },
  ]);
  scene.build();
}

function enterBlowQ(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/bimboclean${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: "Looking hot today, girl! How about you put your mouth to good use? I'll pay you...
  scene.text(`"Looking hot today, girl! How about you put your mouth to good use? I'll pay you ${qspFunc(s, 'money', 'string_profit', 200)}."`);
  if (((s as any).slut_compare ?? 0) >= 30  ||  ((s as any).pcs_horny ?? 0) >= 30) {
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'blowjob', 'Paid', 'Question'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['fuelstation_carwash', 'refuse'] },
  ]);
  scene.build();
}

function enterRefuse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 35) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/pc/reactions/no.mp4');
  scene.text('You consider his offer, but decide to turn him down and walk away.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to washing cars', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterTitsFlash(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    if ((Math.floor(Math.random() * 100) + 1) < 15) {
      if (((s as any).PCloPants ?? 0) > 0) {
      }
    }
  } else {
    if (((s as any).PCloPants ?? 0) > 0) {
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'pull down', 'lift up') + ' your top and show him your ...
    // TODO-QSP: $flash_text[1] = 'You quickly cover up and take your money.'
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'Question') {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'pull down', 'lift up') + ' your top and show him your ...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'lift up', 'pull down') + ' your top and cover up.'
    } else {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'pull down', 'lift up') + ' your top and expose your br...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'lift up', 'pull down') + ' your top and cover up.'
    }
  }
  qspCall(s, 'flash', 'tits', ((s as any).temp_loc_type ?? 0), 1, 2);
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 50);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 2) + 0);
      }
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  ||  ((s as any).pcs_horny ?? 0) >= 5)  &&  (((s as any).PCloBimbo ?? 0) === 1  ||  ((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).locArgs?.[2] ?? 0) === 'Question') {
    (s as any).carwashscene = Math.floor(Math.random() * 100) + 1;
    if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(30, ((s as any).slut_compare ?? 0)), 60)  &&  ((s as any).carwashscene ?? 0) >= 50) {
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'pussyQ'] },
      ]);
    } else {
      if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(60, ((s as any).slut_compare ?? 0)), 80)  &&  ((s as any).carwashscene ?? 0) >= 60) {
        scene.actions([
          { label: 'Continue', goto: ['fuelstation_carwash', 'handQ'] },
        ]);
      } else {
        if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(80, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).carwashscene ?? 0) >= 80) {
          scene.actions([
            { label: 'Continue', goto: ['fuelstation_carwash', 'blowQ'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', goto: ['fuelstation_carwash', 'assQ'] },
          ]);
        }
      }
    }
  } else {
    scene.actions([
      { label: 'Go back to the gas station', handler: (st: GameState) => {
    if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
      ((s as any).stat ?? {})['prostitution_count'] = (((s as any).stat ?? {})['prostitution_count'] ?? 0) + (1);
    }
  }, goto: ['fuelstation', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAssFlash(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) < 10) {
      if (((s as any).PCloPants ?? 0) > 0) {
      }
    }
  } else {
    if (((s as any).PCloPants ?? 0) > 0) {
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    // TODO-QSP: $flash_text[1] = 'You quickly cover up and take your money.'
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'Question') {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'pull your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    } else {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'pull your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    }
  }
  qspCall(s, 'flash', 'butt', ((s as any).temp_loc_type ?? 0), 1, 2);
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 50);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 2) + 0);
      }
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  ||  ((s as any).pcs_horny ?? 0) >= 10)  &&  (((s as any).PCloBimbo ?? 0) === 1  ||  ((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).locArgs?.[2] ?? 0) === 'Question') {
    (s as any).carwashscene = Math.floor(Math.random() * 100) + 1;
    if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(50, ((s as any).slut_compare ?? 0)), 75)  &&  ((s as any).carwashscene ?? 0) >= 50) {
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'handQ'] },
      ]);
    } else {
      if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(75, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).carwashscene ?? 0) >= 75) {
        scene.actions([
          { label: 'Continue', goto: ['fuelstation_carwash', 'blowQ'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['fuelstation_carwash', 'pussyQ'] },
        ]);
      }
    }
  } else {
    scene.actions([
      { label: 'Go back to the gas station', handler: (st: GameState) => {
    if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
      ((s as any).stat ?? {})['prostitution_count'] = (((s as any).stat ?? {})['prostitution_count'] ?? 0) + (1);
    }
  }, goto: ['fuelstation', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyFlash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    // TODO-QSP: $flash_text[1] = 'You quickly cover up and take your money.'
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'Question') {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'pull your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    } else {
      // TODO-QSP: $flash_text[0] = 'You ' + iif(PCloSkirt > 0, 'lift your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
      // TODO-QSP: $flash_text[1] = 'You ' + iif(PCloSkirt > 0, 'pull your ' + iif(PCloDress = 1, 'dress', 'skirt') + '...
    }
  }
  qspCall(s, 'flash', 'full', ((s as any).temp_loc_type ?? 0), 3, 2);
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 50);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', 1);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', 1);
      }
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 4);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  ||  ((s as any).pcs_horny ?? 0) >= 15)  &&  (((s as any).PCloBimbo ?? 0) === 1  ||  ((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).locArgs?.[2] ?? 0) === 'Question') {
    (s as any).carwashscene = Math.floor(Math.random() * 100) + 1;
    if (((s as any).carwashscene ?? 0) <= Math.min(Math.max(60, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).carwashscene ?? 0) >= 60) {
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'blowQ'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'handQ'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Go back to the gas station', handler: (st: GameState) => {
    if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
      ((s as any).stat ?? {})['prostitution_count'] = (((s as any).stat ?? {})['prostitution_count'] ?? 0) + (1);
    }
  }, goto: ['fuelstation', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHandjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'gas station customer', Math.floor(Math.random() * 23) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 200);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', 2);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', 2);
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      qspCall(s, 'fame', 'pav', 'sex', 2);
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 50) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 6);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/shared/sex/handjob/hand.jpg');
    } else {
      scene.img('images/shared/sex/handjob/hj.jpg');
    }
  } else {
    (s as any).i = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).i ?? 0))) {
      scene.img(`images/shared/sex/handjob/hj${((s as any).i ?? 0)}.mp4`);
    } else {
      scene.img(`images/shared/sex/handjob/handjob${((s as any).i ?? 0)}.mp4`);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    scene.text('You follow him behind the gas station, where you get the promised money. You then kneel down, unzip his pants and start working his shaft with your hands.');
    qspCall(s, 'arousal', 'hj', 15, 'sub', 'prostitution', 'unknown');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      scene.text('You lead him behind the gas station where you kneel down, unzip his pants and start working his shaft with your hands.');
      qspCall(s, 'arousal', 'hj', 15, 'dom', 'unknown');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: After a while, the man starts pulling your head closer to him. "I'll give you <<...
  scene.text(`After a while, the man starts pulling your head closer to him. "I'll give you ${qspFunc(s, 'money', 'string_profit', 200)} if you open that mouth for me."`);
  if ((((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  &&  ((s as any).pcs_inhib ?? 0) >= 30)  ||  ((s as any).pcs_horny ?? 0) >= 30) {
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    // TODO-QSP: gt 'fuelstation_carwash', 'blowjob', 'Paid', 'handjob'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep using your hand', goto: ['fuelstation_carwash', 'handjobEndQ'] },
  ]);
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'Question') {
    qspCall(s, 'npcgeneratec', '', 0, 'gas station customer', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 200);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', 2);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', 2);
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      qspCall(s, 'fame', 'pav', 'sex', 2);
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 50) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 6);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    scene.img(`images/locations/shared/carwash/sex/blowjob${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/shared/carwash/sex/blowjob${Math.floor(Math.random() * 3) + 1}.mp4`);
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'Question') {
    if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
      scene.text('You follow him behind the gas station, where you get the promised money. You then kneel down, unzip his pants and take his dick into your mouth.');
      qspCall(s, 'arousal', 'bj', 15, 'sub', 'prostitution', 'unknown');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
        scene.text('You lead him behind the gas station where kneel down, unzip his pants and take his dick into your mouth.');
        qspCall(s, 'arousal', 'bj', 15, 'dom', 'unknown');
      }
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'handjob') {
      if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
        scene.text('You grab the money he tosses at you before taking his dick into your mouth.');
        qspCall(s, 'arousal', 'bj', 15, 'sub', 'prostitution', 'unknown');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
          scene.text('You take his dick into your mouth.');
          qspCall(s, 'arousal', 'bj', 15, 'dom', 'unknown');
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: After a while, the man starts trying to remove your clothes. "I'll give you <<$f...
  scene.text(`After a while, the man starts trying to remove your clothes. "I'll give you ${qspFunc(s, 'money', 'string_profit', 400)} if you let me take your pussy."`);
  if ((((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo'  &&  ((s as any).pcs_inhib ?? 0) >= 40)  ||  ((s as any).pcs_horny ?? 0) >= 40) {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Offer your ass instead', goto: ['fuelstation_carwash', 'fuckAnal', '\'Paid\''] },
      ]);
    } else {
      scene.actions([
        { label: 'Offer your pussy', goto: ['fuelstation_carwash', 'fuckPussy', '\'Paid\''] },
        { label: 'Offer your ass', goto: ['fuelstation_carwash', 'fuckAnal', '\'Paid\''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck harder to make him cum', goto: ['fuelstation_carwash', 'blowjobEndQ'] },
  ]);
  scene.build();
}

function enterFuckPussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 400);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', 4);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', 4);
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      qspCall(s, 'fame', 'pav', 'sex', 4);
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 14);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    scene.img(`images/locations/shared/carwash/sex/fuckpussy${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/shared/carwash/sex/fuckpussy${Math.floor(Math.random() * 4) + 1}.mp4`);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    scene.text('You take the money before bending over and letting the man fuck your pussy.');
    qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'prostitution', 'unknown');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      scene.text('You bend over and let the man start fucking your pussy.');
      qspCall(s, 'arousal', 'vaginal', 30, 'dom', 'unknown');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['fuelstation_carwash', 'pussyEndQ'] },
  ]);
  scene.build();
}

function enterFuckAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    qspCall(s, 'money', 'earn', 400);
    if (((s as any).region ?? 0) === 'city') {
      qspCall(s, 'fame', 'city', 'prostitute', 4);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'fame', 'pav', 'prostitute', 4);
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      qspCall(s, 'fame', 'pav', 'sex', 4);
    }
  }
  if (((s as any).pcs_inhib ?? 0) < 60) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 14);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 50) {
    scene.img(`images/locations/shared/carwash/sex/fuckanal${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img(`images/locations/shared/carwash/sex/fuckanal${Math.floor(Math.random() * 4) + 1}.mp4`);
  }
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  if (((s as any).locArgs?.[1] ?? 0) === 'Paid') {
    scene.text('You take the money before bending over and letting the man fuck your ass. His cock is still wet with your saliva as it slides inside you.');
    qspCall(s, 'arousal', 'anal', 30, 'sub', 'prostitution', 'unknown');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Free') {
      scene.text('You bend over and let the man start fucking your ass. His cock is still wet with your saliva as it slides inside you.');
      qspCall(s, 'arousal', 'anal', 30, 'dom', 'unknown');
    }
  }
  qspCall(s, 'stat', '');
  (s as any).rapePussyChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).rapePussyChance ?? 0) <= Math.min(Math.max(1, ((s as any).slut_compare ?? 0)), 20)) {
    scene.actions([
      { label: 'Continue', goto: ['fuelstation_carwash', 'rapePussy'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['fuelstation_carwash', 'analEndQ'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRapePussy(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/shared/carwash/sex/hardanal${Math.floor(Math.random() * 5) + 1}.mp4`);
  scene.text('The man fucks your ass furiously, taking no heed of your painful moans. As you try to move away to limit the depth he can reach in your ass, he slaps your ass hard.');
  scene.text('"Stop moving, bitch! Who do you think you are that you can tell me what to do?!" he shouts.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('He gropes your ass, lifts it up and suddenly spots your hymen.');
    scene.text('"Wait, you\'re a virgin?! Such a tease and still a virgin!"');
    if ((Math.floor(Math.random() * 100) + 1) <= Math.min(Math.max(1, ((s as any).slut_compare ?? 0)), 50)) {
      scene.text('"It would have happened sooner or later anyway, virgin slut. Now enjoy and remember this moment; I know I will!"');
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'rapePussyYes', '\'virgin\''] },
      ]);
    } else {
      scene.text('"Girls like you should not be acting like this! Someone should have taught you a lesson a long time ago."');
      scene.actions([
        { label: 'Continue', goto: ['fuelstation_carwash', 'punishSpank'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Continue', goto: ['fuelstation_carwash', 'rapePussyYes', '\'normal\''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRapePussyYes(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 11) + 10);
  scene.img(`images/locations/shared/carwash/sex/pussytoanal${Math.floor(Math.random() * 3) + 1}.mp4`);
  if (((s as any).locArgs?.[1] ?? 0) === 'virgin') {
    qspCall(s, 'mood', 'lower', 'large');
    scene.text('He gropes your ass, lifts it up and pushes his dick inside your pussy in one thrust. You feel your hymen break and know your virginity is now gone forever.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'normal') {
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('He gropes your ass, lifts it up and pushes his dick inside your pussy in one thrust, all the way to the hilt.');
    }
  }
  qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'prostitution', 'rough', 'rape', 'unknown');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['fuelstation_carwash', 'vaginaCum', '\'rape\''] },
  ]);
  scene.build();
}

function enterPussyEndQ(s: GameState, scene: SceneBuilder): void {
  scene.text('You can feel that the man is about to cum, so you decide to…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your pussy', goto: ['fuelstation_carwash', 'vaginaCum', '\'consensual\''] },
    { label: 'Let him cum on your face', goto: ['fuelstation_carwash', 'blowjobEndFace', '\'inside\''] },
    { label: 'Let him cum in your mouth', goto: ['fuelstation_carwash', 'blowjobEndMouth', '\'inside\''] },
  ]);
  scene.build();
}

function enterAnalEndQ(s: GameState, scene: SceneBuilder): void {
  scene.text('You can feel that the man is about to ejaculate, so you decide to…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your ass', goto: ['fuelstation_carwash', 'assCum'] },
    { label: 'Let him cum on your face', goto: ['fuelstation_carwash', 'blowjobEndFace', '\'inside\''] },
    { label: 'Let him cum in your mouth', goto: ['fuelstation_carwash', 'blowjobEndMouth', '\'inside\''] },
  ]);
  scene.build();
}

function enterVaginaCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 4);
  }
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (4);
  qspCall(s, 'cum_call', '', '');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/carwash/sex/cumpussy${Math.floor(Math.random() * 5) + 1}.mp4`);
  if (((s as any).locArgs?.[1] ?? 0) === 'consensual') {
    qspCall(s, 'mood', 'raise', 'small');
    scene.text('You let him cum in your pussy. A pleasant warmth fills your insides as he shoots his load deep inside you. When he pulls out, some of it leaks out of your hole.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'rape') {
      qspCall(s, 'mood', 'lower', 'medium');
      scene.text('The pounding suddenly stops as he cums inside you. You can feel his cum spurting into you and when he pulls out, some of it leaks out of your hole.');
    }
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the gas station', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterAssCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 4);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'anus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/carwash/sex/cumanal${Math.floor(Math.random() * 2) + 1}.mp4`);
  scene.text('You let him cum inside your ass. A pleasant warmth fills your insides as he shoots his load deep inside you. When he pulls out, some of it leaks out of you before you can tighten your worn out anus.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to gas station', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterHandjobEndQ(s: GameState, scene: SceneBuilder): void {
  scene.text('You can feel that the man is about to cum, so you decide to take it…');
  // TODO-QSP: end
  scene.actions([
    { label: 'On your face', goto: ['fuelstation_carwash', 'blowjobEndFace', '\'outside\''] },
    { label: 'On your hands', goto: ['fuelstation_carwash', 'handjobEndHands'] },
  ]);
  scene.build();
}

function enterHandjobEndHands(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'cum_call', 'hands');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 30) {
    scene.img(`images/shared/sex/cum/handjob/hand0,${Math.floor(Math.random() * 2) + 0}.mp4`);
  } else {
    scene.img(`images/shared/sex/cum/handjob/hand${Math.floor(Math.random() * 2) + 1}.jpg`);
  }
  scene.text('When the man starts cumming, you quickly point his cock away from your face. Your hands are covered in cum by the time he\'s done.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the gas station', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterBlowjobEndQ(s: GameState, scene: SceneBuilder): void {
  scene.text('You can feel that the man is about to cum, so you decide to take it…');
  // TODO-QSP: end
  scene.actions([
    { label: 'On your face', goto: ['fuelstation_carwash', 'blowjobEndFace', '\'outside\''] },
    { label: 'In your mouth', goto: ['fuelstation_carwash', 'blowjobEndMouth', '\'outside\''] },
  ]);
  scene.build();
}

function enterBlowjobEndFace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'cum_call', 'face');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) < 30) {
    scene.img(`images/locations/shared/carwash/sex/cumface${Math.floor(Math.random() * 2) + 1}.mp4`);
  } else {
    scene.img(`images/locations/shared/carwash/sex/cumface${Math.floor(Math.random() * 4) + 1}.jpg`);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'outside') {
    scene.text('When the man starts cumming, you quickly point his cock towards your face. Your face is covered in cum by the time he\'s done.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'inside') {
      scene.text('When the man starts cumming, you quickly take his cock out of your mouth and point it towards your face. Your face is covered in cum by the time he\'s done.');
    }
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the gas station', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterBlowjobEndMouth(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) < 60) {
    scene.img(`images/locations/shared/carwash/sex/cummouth${Math.floor(Math.random() * 4) + 1}.jpg`);
  } else {
    scene.img('images/locations/shared/carwash/sex/cummouth1.mp4');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'outside') {
    scene.text('When the man starts cumming, you quickly open your mouth while keeping his cock aimed at your tongue, giving him a good view of the cum as it flies inside your mouth.');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'inside') {
      scene.text('When the man starts cumming, you quickly take his cock out of your mouth and aim it at your tongue, giving him a good view of the cum as it flies inside your mouth.');
    }
  }
  scene.text('Your mouth is full of cum. You decide to…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow it', goto: ['fuelstation_carwash', 'blowjobEndMouthSwallow'] },
    { label: 'Spit it out', goto: ['fuelstation_carwash', 'blowjobEndMouthSpit'] },
  ]);
  scene.build();
}

function enterBlowjobEndMouthSwallow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 4);
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/carwash/sex/swallow${Math.floor(Math.random() * 4) + 1}.jpg`);
  scene.text('You gulp down the mouthful of cum and present your tongue to him.');
  scene.text('The man smiles and slaps you mildly on the face. "What a nice young slut you are. Next time I need a refill, I\'ll be sure to stop by."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the gas station', goto: ['fuelstation', 'start'] },
  ]);
  scene.build();
}

function enterBlowjobEndMouthSpit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  }
  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 100) + 1) > 50) {
    scene.img(`images/locations/shared/carwash/sex/spit${Math.floor(Math.random() * 3) + 1}.jpg`);
  } else {
    scene.img('images/locations/shared/carwash/sex/spit1.mp4');
  }
  scene.text('You spit the cum out between the legs of your customer.');
  scene.text('His face darkens. "What, my cum isn\'t good enough for you to swallow? I\'ll teach you, bitch!"');
  scene.text('He moves closer to you with an angry scowl on his face…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Run back to the gas station', goto: ['fuelstation_carwash', 'runback'] },
  ]);
  scene.build();
}

function enterRunback(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) <= Math.min(Math.max(25, ((s as any).pcs_stren ?? 0), ((s as any).pcs_agil ?? 0)), 75)) {
    scene.img('images/locations/gadukino/village/turn_back.jpg');
    scene.text('You manage to escape his grasp and take a quick look behind you to make sure he\'s not following you before heading back to the gas station.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Escape', goto: ['fuelstation', 'start'] },
    ]);
  } else {
    ((s as any).pain ?? {})['cheeks'] = (((s as any).pain ?? {})['cheeks'] ?? 0) + (2);
    ((s as any).pain ?? {})['head'] = (((s as any).pain ?? {})['head'] ?? 0) + (2);
    ((s as any).pain ?? {})['mouth'] = (((s as any).pain ?? {})['mouth'] ?? 0) + (2);
    ((s as any).pain ?? {})['neck'] = (((s as any).pain ?? {})['neck'] ?? 0) + (4);
    scene.img('images/locations/shared/carwash/sex/punishbeatface.mp4');
    scene.text('You aren\'t quick enough and he catches you. He pushes you down and starts to slap across the face.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'skill_base', 'stren', 'resist', 'medium');
    (s as any).will_cost = (((s as any).will_cost ?? 0) * 3) / 2;
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him off and escape [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him off and escape [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['fuelstation_carwash', 'fight'] },
      ]);
    }
    scene.actions([
      { label: 'Endure his punishment', goto: ['fuelstation_carwash', 'punish'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFight(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_energy = Math.max(0, ((s as any).pcs_energy ?? 0) - 35);
  (s as any).pcs_hydra = Math.max(0, ((s as any).pcs_hydra ?? 0) - 35);
  qspCall(s, 'arousal', 'end');
  scene.actions([{ label: 'Continue', goto: ['fuelstation', 'start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPunish(s: GameState, scene: SceneBuilder): void {
  (s as any).punishType = Math.floor(Math.random() * 100) + 1;
  if (((s as any).punishType ?? 0) <= Math.min(Math.max(50, ((s as any).slut_compare ?? 0)), 75)  &&  ((s as any).punishType ?? 0) >= 50) {
    scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'punishAnal'] }]);
  } else {
    if (((s as any).punishType ?? 0) <= Math.min(Math.max(75, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).punishType ?? 0) >= 75) {
      scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'punishPussyQ'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['fuelstation_carwash', 'punishSpank'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunishSpank(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 0;
  qspCall(s, 'mood', 'lower', 'small');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  ((s as any).pain ?? {})['asscheeks'] = (((s as any).pain ?? {})['asscheeks'] ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/carwash/sex/punishspank.mp4');
  scene.text('The angry man drags you to a more secluded area, bends you over and starts to spank your ass very hard.');
  scene.text('After twenty minutes of ruthless punishment, he finally stops and you crawl away with your ass burning.');
  qspCall(s, 'arousal', 'foreplay', 15, 'sub', 'rough', 'unknown');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'fuelstation_carwash', 'punishEnd');
  // TODO-QSP: end
  scene.build();
}

function enterPunishAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 0;
  qspCall(s, 'mood', 'lower', 'medium');
  ((s as any).pain ?? {})['asshole'] = (((s as any).pain ?? {})['asshole'] ?? 0) + (6);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'cum_call', 'anus');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/carwash/sex/punishanal${Math.floor(Math.random() * 3) + 1}.mp4`);
  scene.text('The angry man drags you to a more secluded area, bends you over and sticks a finger in your ass.');
  scene.text('Your anus fully exposed, he starts fucking it ruthlessly.');
  scene.text('After half an hour of rough assfucking, he releases his grip on you so you can finally crawl away, your aching ass sore from the brutal penetration.');
  qspCall(s, 'arousal', 'anal', 30, 'sub', 'rough', 'rape', 'unknown');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'fuelstation_carwash', 'punishEnd');
  // TODO-QSP: end
  scene.build();
}

function enterPunishPussyQ(s: GameState, scene: SceneBuilder): void {
  scene.text('The angry man drags you to a more secluded area where he bends you over and starts rubbing your pussy.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('"Wait, you\'re a virgin?! Such a slutty tease and you\'re still a virgin?"');
    (s as any).penetrate = 0;
    if (((s as any).penetrate ?? 0) <= Math.min(Math.max(50, ((s as any).slut_compare ?? 0)), 75)  &&  ((s as any).penetrate ?? 0) >= 50) {
      scene.text('"I\'ll spare your virginity, but you\'re still getting fucked. Sluts have more than one hole for a reason, right?"');
      scene.actions([
        { label: 'Endure it', goto: ['fuelstation_carwash', 'punishAnal'] },
      ]);
    } else {
      if (((s as any).penetrate ?? 0) <= Math.min(Math.max(75, ((s as any).slut_compare ?? 0)), 100)  &&  ((s as any).penetrate ?? 0) >= 75) {
        scene.text('"This makes it even better! I haven\'t had a virgin in forever! I\'m going to enjoy your tears, slut."');
        scene.actions([
          { label: 'Endure it', goto: ['fuelstation_carwash', 'punishPussy', '\'virgin\''] },
        ]);
      } else {
        scene.text('"Someone should have done this a long time ago, but I\'ll spare you penetration this time!"');
        scene.actions([
          { label: 'Endure it', goto: ['fuelstation_carwash', 'punishSpank'] },
        ]);
      }
    }
  } else {
    scene.text('"Let\'s try what you\'ve been teasing, you ungrateful whore!"');
    scene.actions([
      { label: 'Endure it', goto: ['fuelstation_carwash', 'punishPussy', '\'normal\''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPunishPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = 0;
  ((s as any).pain ?? {})['vaginal'] = (((s as any).pain ?? {})['vaginal'] ?? 0) + (4);
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'cum_call', '', '');
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/carwash/sex/punishpussy${Math.floor(Math.random() * 5) + 1}.mp4`);
  if (((s as any).locArgs?.[1] ?? 0) === 'virgin') {
    scene.text('Your pussy fully exposed, he slowly inserts his cock inside you. He pushes right up against your hymen, savoring the moment. Suddenly, you feel your hymen break and know your virginity is now gone forever.');
    qspCall(s, 'mood', 'lower', 'huge');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'normal') {
      scene.text('Your pussy fully exposed, he starts ruthlessly fucking it.');
      qspCall(s, 'mood', 'lower', 'medium');
    }
  }
  scene.text('After half an hour, he releases his grip on you so you can finally crawl away, your aching pussy sore from the brutal penetration.');
  qspCall(s, 'arousal', 'vaginal', 30, 'sub', 'rough', 'rape', 'unknown');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'fuelstation_carwash', 'punishEnd');
  // TODO-QSP: end
  scene.build();
}

function enterPunishEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_abd_thresh = (qspFunc(s, 'math', 'int_clamp', ((s as any).slut_compare ?? 0) / 3, 0, 250)) + (qspFunc(s, 'archetypes', 'get_percentage', 'bimbo', 1) / 2) + (((s as any).trait_vars ?? {})?.['doormat'] * 30) + (((s as any).alko ?? 0) * 8) - (Math.min(((s as any).pcs_stren ?? 0) - 50, 0) * 2) - (Math.min(((s as any).pcs_run ?? 0) - 50, 0) * 2) - (Math.min(((s as any).prcptn_lvl ?? 0) - 50, 0) * 2);
  if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1) {
    (s as any).temp_abd_thresh = 0;
  } else {
    if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
      // TODO-QSP: temp_abd_thresh /= 5
    } else {
      if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3) {
        (s as any).temp_abd_thresh = (((s as any).temp_abd_thresh ?? 0) * 3) / 2;
      } else {
        if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
          // TODO-QSP: temp_abd_thresh *= 2
        }
      }
    }
  }
  (s as any).temp_abd_thresh = qspFunc(s, 'math', 'int_clamp', ((s as any).temp_abd_thresh ?? 0), 0, 500);
  if ((Math.floor(Math.random() * 1000) + 1) <= ((s as any).temp_abd_thresh ?? 0)) {
    scene.text('Your perpetrator isn\'t done with you, however.');
    scene.text('He catches you again, drags you to his car and pushes you into the trunk…');
    scene.text('You have a feeling this won\'t go well for you…');
    scene.actions([
      { label: 'Cry for help', goto: ['abduction', 'start'] },
    ]);
  } else {
    scene.text('Your perpetrator stands up and just watches as you crawl away in pain.');
    scene.text('He turns around and calmly walks away, leaving you alone.');
    scene.actions([
      { label: 'Escape', goto: ['fuelstation', 'start'] },
    ]);
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
    case 'wash':
      enterWash(s, scene);
      break;
    case 'flash_passing':
      enterFlashPassing(s, scene);
      break;
    case 'titsQ':
      enterTitsQ(s, scene);
      break;
    case 'assQ':
      enterAssQ(s, scene);
      break;
    case 'pussyQ':
      enterPussyQ(s, scene);
      break;
    case 'handQ':
      enterHandQ(s, scene);
      break;
    case 'blowQ':
      enterBlowQ(s, scene);
      break;
    case 'refuse':
      enterRefuse(s, scene);
      break;
    case 'titsFlash':
      enterTitsFlash(s, scene);
      break;
    case 'assFlash':
      enterAssFlash(s, scene);
      break;
    case 'pussyFlash':
      enterPussyFlash(s, scene);
      break;
    case 'handjob':
      enterHandjob(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'fuckPussy':
      enterFuckPussy(s, scene);
      break;
    case 'fuckAnal':
      enterFuckAnal(s, scene);
      break;
    case 'rapePussy':
      enterRapePussy(s, scene);
      break;
    case 'rapePussyYes':
      enterRapePussyYes(s, scene);
      break;
    case 'pussyEndQ':
      enterPussyEndQ(s, scene);
      break;
    case 'analEndQ':
      enterAnalEndQ(s, scene);
      break;
    case 'vaginaCum':
      enterVaginaCum(s, scene);
      break;
    case 'assCum':
      enterAssCum(s, scene);
      break;
    case 'handjobEndQ':
      enterHandjobEndQ(s, scene);
      break;
    case 'handjobEndHands':
      enterHandjobEndHands(s, scene);
      break;
    case 'blowjobEndQ':
      enterBlowjobEndQ(s, scene);
      break;
    case 'blowjobEndFace':
      enterBlowjobEndFace(s, scene);
      break;
    case 'blowjobEndMouth':
      enterBlowjobEndMouth(s, scene);
      break;
    case 'blowjobEndMouthSwallow':
      enterBlowjobEndMouthSwallow(s, scene);
      break;
    case 'blowjobEndMouthSpit':
      enterBlowjobEndMouthSpit(s, scene);
      break;
    case 'runback':
      enterRunback(s, scene);
      break;
    case 'fight':
      enterFight(s, scene);
      break;
    case 'punish':
      enterPunish(s, scene);
      break;
    case 'punishSpank':
      enterPunishSpank(s, scene);
      break;
    case 'punishAnal':
      enterPunishAnal(s, scene);
      break;
    case 'punishPussyQ':
      enterPunishPussyQ(s, scene);
      break;
    case 'punishPussy':
      enterPunishPussy(s, scene);
      break;
    case 'punishEnd':
      enterPunishEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fuelstation_carwash: LocationDef = {
  name: 'fuelstation_carwash',
  title: 'The gas station worker chases you away. "At least wash yours',
  region: 'other',
  enter: enter,
};
