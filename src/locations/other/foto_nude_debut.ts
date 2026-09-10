import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNudeDebutMemory(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('Hello, if you are seeing this page it is either because you were already doing nude modelling on a save before this content was added or the game has bugged out for some reason.');
  scene.text('The following scene is a memory of your full frontal debut as a model and the creator encourages you to roleplay it as your character would have been at the time of their first nude shoot.');
  scene.text('Please enjoy.');
  scene.actions([
    { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut_pre'] },
  ]);
  scene.build();
}

function enterNudeDebutPre(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"You want to do a nude shoot? This would be your first one, won\'t it?" the manager asks.');
  scene.text('"Yes," you nod back.');
  qspCall(s, 'foto_nude_debut', 'nude_debut_shave_start');
  scene.build();
}

function enterNudeDebutShaveStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_leghair ?? 0) > 3) {
    (s as any).temp['model_shave'] = '"And your legs too."';
  }
  if (((s as any).modelfoto ?? 0)?.['nude_shave_no'] === 1) {
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      (s as any).modelfoto['nude_shave_yes'] = 1;
      scene.text('"I see you came prepared this time," he says, eyeing the smooth clean-shaven skin over your pussy. "Let\'s get to work then."');
      scene.actions([
        { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
      ]);
    } else {
      if (((s as any).pcs_pubes ?? 0) > 10) {
        scene.text('"Then you know the policy. Go shave that muff off," he says, gesturing towards the hair growing between your legs.');
      } else {
        scene.text('"Then you know the policy. Go shave that stubble off," he says, gesturing towards the hair growing between your legs.');
      }
      qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
    }
  } else {
    if (((s as any).pcs_pubes ?? 0) > 3) {
      qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
      if (((s as any).pcs_pubes ?? 0) < 10) {
        if (((s as any).foto_persuade ?? 0) === 5) {
          // TODO-QSP: dynamic text: "Just one thing. You need to shave that stubble off," he says, eyeing the fuzzy ...
          scene.text(`"Just one thing. You need to shave that stubble off," he says, eyeing the fuzzy patch between your legs. ${((s as any).temp ?? 0)?.['model_shave']}`);
        } else {
          // TODO-QSP: dynamic text: "You'll have to shave that stubble off," he says, eyeing the fuzzy patch between...
          scene.text(`"You'll have to shave that stubble off," he says, eyeing the fuzzy patch between your legs. ${((s as any).temp ?? 0)?.['model_shave']}`);
        }
        scene.actions([
          { label: 'But I\'m growing it out', handler: (st: GameState) => {
    scene.text('"But I\'m growing it out," you protest.');
    scene.text('"Start again tomorrow," he shrugs. "It\'s your debut. All models must be clean-shaven for their nude debut. Even if I wanted to give you a pass, it\'s not up to me. Besides, stubble looks bad."');
    qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
  } },
        ]);
      } else {
        if (((s as any).foto_persuade ?? 0) === 5) {
          // TODO-QSP: dynamic text: "Just one thing. You need to shave that off first," he says, eyeing your pubic h...
          scene.text(`"Just one thing. You need to shave that off first," he says, eyeing your pubic hair. ${((s as any).temp ?? 0)?.['model_shave']}`);
        } else {
          // TODO-QSP: dynamic text: "You need to shave that off first," he says, eyeing your pubic hair. <<$temp['mo...
          scene.text(`"You need to shave that off first," he says, eyeing your pubic hair. ${((s as any).temp ?? 0)?.['model_shave']}`);
        }
        scene.actions([
          { label: 'But I like it this way', handler: (st: GameState) => {
    scene.text('"But I like it this way," you protest.');
    scene.text('"Policy," he shrugs. "It\'s your debut. All models must be clean-shaven for their nude debut. Even if I wanted to give you a pass, it\'s not up to me. You can start growing it out again tomorrow."');
    qspCall(s, 'foto_nude_debut', 'nude_debut_shave_options');
  } },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: "Then let's get to work. Go ahead and meet us on set <<rand(11,30)>>."
      scene.text(`"Then let's get to work. Go ahead and meet us on set ${Math.floor(Math.random() * 20) + 11}."`);
      scene.text('You nod and follow his instructions, heading off to the designated set.');
      scene.actions([
        { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
      ]);
    }
  }
  scene.build();
}

function enterNudeDebutShaveOptions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    (s as any).modelfoto['nude_shave_no'] = 1;
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"If that\'s a requirement, then I\'m out," you say shaking your head.');
    scene.text('"Okay," he shrugs. "Come back if you change your mind. Did you want to do a different shoot today?"');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'studio'] },
      { label: 'Look at something else', goto: ['foto_shoot', 'model'] },
    ]);
  } },
    { label: 'Okay', handler: (st: GameState) => {
    (s as any).modelfoto['nude_shave_yes'] = 1;
    scene.text('"Okay," you nod. "I\'ll get it done."');
    scene.text('"Go to the showers and do it now," he says. "We\'ll arrange the set in the meantime."');
    scene.actions([
      { label: 'Go shave', goto: ['foto_nude_debut', 'nude_debut_shaving'] },
    ]);
  } },
    { label: 'Okay (hesitant)', handler: (st: GameState) => {
    (s as any).modelfoto['nude_shave_yes'] = 1;
    scene.text('"Okay…" you mumble. "I… I guess I could…"');
    scene.text('"Go to the showers and do it now," he says. "We\'ll arrange the set in the meantime."');
    scene.actions([
      { label: 'Go shave', goto: ['foto_nude_debut', 'nude_debut_shaving'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNudeDebutShaving(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/shower.jpg');
  if (((s as any).pcs_pubes ?? 0) < 10) {
    scene.text('You follow the instructions you\'ve been given and dutifully shave off the stubble surrounding your pussy. A few minutes later, you\'re silky smooth and head to the set.');
  } else {
    scene.text('You follow the instructions you\'ve been given and dutifully shave off the bush covering your pussy. A few minutes later, you\'re silky smooth and head to the set.');
  }
  (s as any).pcs_pubes = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['foto_nude_debut', 'nude_debut1'] },
  ]);
  scene.build();
}

function enterNudeDebut1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if (((s as any).fame ?? 0)?.['city_modelling'] > 500) {
    scene.text('There\'s a buzz on set as the studio prepares to shoot your nude debut.');
    if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text('You\'ve gone topless before, but for such a famous model as yourself, baring everything is still exciting news for everyone involved in the publication. Especially for the upper management who get to sell the pictures.');
      } else {
        scene.text('You\'ve shown your nipples on one occasion or another, but you\'ve never gone fully topless before, let alone fully nude. It\'s no wonder there\'s excitement that you\'re soon going to bare it all. Especially for the upper management who get to sell the pictures.');
      }
    } else {
      scene.text('As a model whose name regularly comes up in magazines and internet articles, often in the running for \'Sexiest Woman of the Year\', your fame is undeniable. So to jump from never having published a topless spread to baring it all in a full nude, it\'s no wonder there\'s excitement that you\'re soon going to bare it all. Especially for the upper management who get to sell the pictures.');
    }
  } else {
    scene.text('There\'s a modest buzz on set as the crew prepares to shoot your nude debut.');
    if (((s as any).modelfoto ?? 0)?.['nip'] > 0) {
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text('You\'ve gone topless before, but for a model such as yourself with a decent following, baring everything is still exciting news for everyone involved in the publication.');
      } else {
        scene.text('You\'ve shown your nipples on one occasion or another, but you\'ve never gone fully topless before, let alone fully nude. For a model such as yourself with a decent following, baring everything is still exciting news for everyone involved in the publication.');
      }
    } else {
      scene.text('As a model with a decent following, even if you\'re not super famous, your name still pops up in celebrity magazines now and then. So to go from never having published a topless shoot to a full nude shoot is exciting news.');
    }
    if (((s as any).modelfoto ?? 0)?.['shoots'] > 0) {
      scene.text('The crew move to prepare the set for your nude debut.');
      if (((s as any).modelfoto ?? 0)?.['topless'] > 0) {
        scene.text('You\'ve done a few shoots for the studio before, including topless ones, but with models always walking around the studio naked, it seems this is just business as usual for them today.');
      } else {
        scene.text('You\'ve done a few shoots for the studio before but with models always walking around the studio naked, it seems this is just business as usual for them today.');
      }
    } else {
      scene.text('The crew move to prepare the set.');
      scene.text('This is your first modelling shoot ever but no one seems surprised or even find it remarkable that you\'re jumping straight into it. It seems to them that you\'re just one of the many desperate girls who come into the studio, willing to bare it all for easy money.');
    }
    qspCall(s, 'foto_nude_debut', 'nude_debut2');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nude_debut_memory':
      enterNudeDebutMemory(s, scene);
      break;
    case 'nude_debut_pre':
      enterNudeDebutPre(s, scene);
      break;
    case 'nude_debut_shave_start':
      enterNudeDebutShaveStart(s, scene);
      break;
    case 'nude_debut_shave_options':
      enterNudeDebutShaveOptions(s, scene);
      break;
    case 'nude_debut_shaving':
      enterNudeDebutShaving(s, scene);
      break;
    case 'nude_debut1':
      enterNudeDebut1(s, scene);
      break;
    default:
      enterNudeDebutMemory(s, scene);
      break;
  }
}

export const foto_nude_debut: LocationDef = {
  name: 'foto_nude_debut',
  title: 'Hello, if you are seeing this page it is either because you ',
  region: 'other',
  description: ['Hello, if you are seeing this page it is either because you were already doing nude modelling on a save before this content was added or the game has bugged out for some reason.'],
  enter: enter,
};
