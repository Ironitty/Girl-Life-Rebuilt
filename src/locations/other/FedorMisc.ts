import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFedorIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorIntro = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/Men/Gang/fight.jpg');
  scene.text('As you walk out of the cafeteria, you see a crowd of students gathered around; what appears to be a fight. You move closer to get a better look when one of the boys in the fight gets knocked back into you. You recoil as one of the boys throws a punch that misses the other, but is rushing toward your face. Suddenly you feel someone\'s arm press against your chest, pushing you away from the fight, and saving you from getting hit. The one who saved you says, "That was a close one. Are you alright?');
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A5', 5);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    scene.text('You turn to see Fedor Kozlov smiling at you. You return the smile and say, "I am now, thanks to you." Fedor responds, "Well I couldn\'t let such a pretty girl like you get hurt." you lower your head; trying to hide your flushing cheeks, as you reply, "I bet you say that to all the girls." Fedor chuckles, "I not going to lie, if all the girls looked like you then I would." a few members of the school faculty begin breaking up the fight, as Fedor says, "It seems that everything has been taken care of. If you would like to chat then feel free to stop by the hallway, and you can usually catch me at the sports center, after school. Hopefully I will see you again soon." Fedor then walks away while waving at you.');
    scene.actions([
      { label: 'Wave back', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorChat(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 5;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).fedorKozlovQW ?? 0) === -10) {
    // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
    scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
  } else {
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  if (((s as any).fedorKozlovQW ?? 0) === -10) {
    scene.text('Ever since Fedor gave Vasily a blowjob in the school courtyard, everyone calls him Masha.');
  } else {
    scene.text('Ever since Fedor gave Vasily a blowjob in the school courtyard, everyone calls him Masha but to you, he will always be Fedor.');
    scene.text('Fedor is a decent athlete. He often trains with his good friend Ivan, but lacks the level of talent that Ivan does have.');
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: dynamic text: Fedor notices your messy hair and pulls out his <a href="exec:gt 'FedorMisc', 'C...
    scene.text(`Fedor notices your messy hair and pulls out his <a href="exec:gt 'FedorMisc', 'Comb', ${qspUntranslated(s, "ARGS[1]", { location: "FedorMisc" })}">comb</a>.`);
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
    scene.text('Fedor is an outcast in school, and doesn\'t have anyone to sit with during lunch.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 6) {
    scene.text('Fedor is a Super Hero, Pssst you shouldn\'t be seeing this. please report this bug.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 3) {
    scene.text('Fedor is a nerd, and usually spends lunch time with them.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
    scene.text('Fedor is part of the athletic clique in your school.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 1) {
    scene.text('Fedor is popular, and spends time with the other popular kids usually.');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 4) {
    scene.text('Fedor is a Gopnik, and spends a lot of time doing what Gopniks usually do: be loud, and drink beer.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] < 20) {
    scene.text('You and Fedor don\'t get along at all.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 40) {
    scene.text('You and Fedor don\'t get along very well.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 60) {
    scene.text('You and Fedor have a normal relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A5'] < 80) {
    scene.text('You and Fedor have a good relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 80) {
    scene.text('You and Fedor have a great relationship.');
  }
  if (((s as any).ARGS ?? 0)[1] !== 1) {
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  }
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A5', Math.floor(Math.random() * 6) + 5);
    (s as any).numnpc = 5;
    if (((s as any).loc ?? 0) === 'pav_disco') {
      (s as any).minut = ((s as any).minut ?? 0) + (5);
    }
    qspCall(s, 'stat', '');
    if (((s as any).fedorKozlovQW ?? 0) === -10) {
      // TODO-QSP: dynamic text: <center><b><h4><font color=#FF00FF><<"Fyodor [Masha] Kozlov">></font></h4></b></...
      scene.text(`<center><b><h4><font color=#FF00FF>${'Fyodor [Masha] Kozlov'}</font></h4></b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast1.jpg');
    } else {
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/shared/headshots_main/big5.jpg');
    }
    if (((s as any).npc_rel ?? 0)?.['A5'] < 20) {
      scene.text('You speak to Fedor about a number of random experiences you had. Fedor listens to you with a moderate amount of interest.');
    } else {
      scene.text('You chat with Fedor, sharing multiple stories as Fedor happily listens and shares some thoughts on a number of them.');
      if (((s as any).npc_rel ?? 0)?.['A5'] >= 80) {
        scene.text('You chat with Fedor, sharing multiple stories as Fedor happily listens while sharing several new stories of his own.');
      }
      if (((s as any).ARGS ?? 0)[1] !== 1) {
        scene.actions([
          { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        scene.actions([
          { label: 'Move away', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
    }
    if (((s as any).ARGS ?? 0)[1] !== 1) {
      if (((s as any).numnpc ?? 0) === 5  &&  ((s as any).fedorKozlovQW ?? 0) >= 20) {
        scene.actions([
          { label: 'Let\'s go somewhere private', goto: ['FedorMisc', 'Fedor Chat 2'] },
        ]);
      }
      if ((((s as any).fedorKozlovQW ?? 0) > 1  ||  ((s as any).fedorKozlovQW ?? 0) < -10)  &&  ((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).FyodorVsNiko ?? 0) === 0  &&  (!((s as any).FedorVsNiko ?? 0))) {
        // TODO-QSP: act 'Ask for help with Niko': gt 'NikoPayback', 'Fedor Help'
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Fedor Intro':
      enterFedorIntro(s, scene);
      break;
    case 'Fedor Chat':
      enterFedorChat(s, scene);
      break;
    default:
      enterFedorIntro(s, scene);
      break;
  }
}

export const FedorMisc: LocationDef = {
  name: 'FedorMisc',
  title: '<<"Fyodor [Fedor] Kozlov">>',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'school_bathroom',
  description: ['As you walk out of the cafeteria, you see a crowd of students gathered around; what appears to be a fight. You move closer to get a better look when one of the boys in the fight gets knocked back into you. You recoil as one of the boys throws a punch that misses the other, but is rushing toward your face. Suddenly you feel someone\'s arm press against your chest, pushing you away from the fight, and saving you from getting hit. The one who saved you says, "That was a close one. Are you alright?'],
  enter: enter,
};
