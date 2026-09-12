import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sexstart = 1;
  (s as any).sexvar = Math.floor(Math.random() * 4) + 3;
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  scene.img('images/locations/shared/sex/sexrand/kiss.jpg');
  scene.text('You kiss for a while. It feels nice, but you want more!');
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 2) + 0;
  scene.actions([{ label: 'Continue', goto: ['sex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).textrand = Math.floor(Math.random() * 4) + 1;
  if (((s as any).SexTypeCheck ?? 0) === 0  &&  ((s as any).picrand ?? 0) > 1) {
    (s as any).SexTypeCheck = 1;
    (s as any).BlowBan = qspUntranslated(s, "arrpos('BlowArray', picrand)", { location: "sex" });
    (s as any).CooneyBan = qspUntranslated(s, "arrpos('CooneyArray', picrand)", { location: "sex" });
    (s as any).MissionBan = qspUntranslated(s, "arrpos('MissionArray', picrand)", { location: "sex" });
    (s as any).CowgirlBan = qspUntranslated(s, "arrpos('CowgirlArray', picrand)", { location: "sex" });
    (s as any).DoggyBan = qspUntranslated(s, "arrpos('DoggyArray', picrand)", { location: "sex" });
    (s as any).SidewaysBan = qspUntranslated(s, "arrpos('SidewaysArray', picrand)", { location: "sex" });
    (s as any).AnalBan = qspUntranslated(s, "arrpos('AnalArray', picrand)", { location: "sex" });
  }
  if (((s as any).BlowBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Give him a blowjob', goto: ['sex', 'minet'] },
    ]);
  }
  if (((s as any).CooneyBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Cooney', goto: ['sex', 'kuni'] },
    ]);
  }
  if (((s as any).MissionBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Missionary', goto: ['sex', 'vag'] },
    ]);
  }
  if (((s as any).CowgirlBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Cowgirl', goto: ['sex', 'nae'] },
    ]);
  }
  if (((s as any).DoggyBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Doggy style', goto: ['sex', 'rak'] },
    ]);
  }
  if (((s as any).SidewaysBan ?? 0) <= 0) {
    scene.actions([
      { label: 'Sideways', goto: ['sex', 'bok'] },
    ]);
  }
  if (((s as any).AnalBan ?? 0) <= 0) {
    scene.actions([
      { label: 'In the ass', goto: ['sex', 'anal'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMinet(s: GameState, scene: SceneBuilder): void {
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 1;
  if ((!((s as any).sxbj ?? 0))) {
    if (((s as any).svidboysex ?? 0) === 1) {
      (s as any).bja = ((s as any).bja ?? 0) + (1);
    }
    (s as any).sxbj = 1;
  }
  scene.img(`images/locations/shared/sex/sexrand/minet${((s as any).picrand ?? 0)}.jpg`);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('You take his member in your hand and pull his foreskin back, exposing the shiny head underneath. Giving him a sweet smile, you close your lips around it and run your tongue over the tip. You then continue to suck his cock vigorously, teasing him with your tongue and fondling his balls with your fingers. He moans blissfully while you service him with your mouth, not taking his eyes off you.');
  } else {
    if (((s as any).textrand ?? 0) === 2) {
      scene.text('You kneel down and place your hand on his nearly fully erect trunk. You smile at him shyly and mutter, "That\'s a nice cock you have there…" before closing your lips around the tip and sucking him off.');
    } else {
      if (((s as any).textrand ?? 0) === 3) {
        scene.text('You dart your tongue all over his shaft, licking him eagerly all the way from the tip of his cock to and including his testicles. Then your tender lips close around the well-engorged head, and you slowly take more and more of his length down your throat while you stroke the rest of his shaft that doesn\'t fit in your mouth with your hand.');
      } else {
        scene.text('You wrap your delicate fingers around his hard cock and guide it to your mouth, closing your lips around the tip. You try to take as much of his length down your throat as you can, gently caressing your own clit while you service him.');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) <= 0) {
    (s as any).sexvar = 0;
    scene.actions([{ label: 'Continue', goto: ['sex', 'end'] }]);
  } else {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>The man groans that he will cum soon.');
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BlowBan ?? 0) > 0  &&  ((s as any).MissionBan ?? 0) > 0  &&  ((s as any).CowgirlBan ?? 0) > 0  &&  ((s as any).DoggyBan ?? 0) > 0  &&  ((s as any).SidewaysBan ?? 0) > 0  &&  ((s as any).AnalBan ?? 0) > 0) {
    (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  } else {
    if (((s as any).sexvar ?? 0) === 1) {
      (s as any).sexvar = 0;
    }
  }
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 2;
  scene.img(`images/locations/shared/sex/sexrand/kuni${((s as any).picrand ?? 0)}.jpg`);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('He places gentle kisses and licks all across your thighs, slowly working his way to your sweet slit. When he reaches it, he eagerly thrusts his tongue inside you as far it will go, lapping up your juices enthusiastically.');
  } else {
    if (((s as any).textrand ?? 0) === 2) {
      scene.text('He immediately thrusts his tongue deep inside your pussy and moves it around as much as he can. He\'s completely ignoring your clitoris though, and the devious glint in his eyes makes you believe he\'s doing that on purpose. You enthusiastically rub your groin against his face in an attempt to get yourself off.');
    } else {
      if (((s as any).textrand ?? 0) === 3) {
        scene.text('With his nose against your clitoris and his tongue plunged deep inside you, he licks you enthusiastically. Then he moves away from you and guides your ass to his mouth, eagerly licking your sphincter and trying to squeeze his tongue in. It feels heavenly, and you moan loudly while you thrust your hips against his face, encouraging him to go on.');
      } else {
        scene.text('His tongue gently begins to lick your pussy lips. "Oh my!" you think to yourself, enjoying his touch more and more. When he pays more attention to your clitoris, you have to pull away from him for a moment… wow, that\'s intense!');
      }
    }
  }
  qspCall(s, 'arousal', 'cuni', 10);
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) <= 0) {
    (s as any).sexvar = 0;
    scene.actions([{ label: 'Continue', goto: ['sex', 'end'] }]);
  } else {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>The man groans that he will cum soon.');
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVag(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).sexstart ?? 0))) {
    (s as any).sexstart = 1;
    (s as any).sexvar = Math.floor(Math.random() * 5) + 3;
  }
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 3;
  if ((!((s as any).sxsex ?? 0))) {
    if (((s as any).svidboysex ?? 0) === 1) {
      (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    }
    (s as any).sxsex = 1;
  }
  scene.img(`images/locations/shared/sex/sexrand/${((s as any).locArgs?.[0] ?? 0)}${((s as any).picrand ?? 0)}.jpg`);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('He slowly penetrates you and keeps thrusting until most of his length is buried inside you. You eagerly kiss him when you see the look of ecstasy on his face and wrap your arms around him while he thrusts his hips against yours.');
  } else {
    if (((s as any).textrand ?? 0) === 2) {
      scene.text('His hard cock slides inside your wet cunt easily, and you feel the engorged head slowly part your insides when it goes deeper and deeper. You can\'t help but rub your clit, while you encourage him to fuck you harder.');
    } else {
      if (((s as any).textrand ?? 0) === 3) {
        scene.text('He doesn\'t stop until his cock bottoms out in you and then proceeds to fuck you with the entire length of his impressive shaft. His thrusts become more and more intense, and soon, the sound of his skin slapping against yours fills the room.');
      } else {
        scene.text('Your wet pussy eagerly takes his cock in, and you hear some embarrassing sopping sounds when he proceeds to fuck your pussy enthusiastically. You must\'ve wanted him pretty badly if you got this wet…');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', 10);
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) <= 0) {
    (s as any).sexvar = 0;
    scene.actions([{ label: 'Continue', goto: ['sex', 'end'] }]);
  } else {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>The man groans that he will cum soon.');
    }
  }
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  scene.actions([{ label: 'Continue', goto: ['sex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).sexstart ?? 0))) {
    (s as any).sexstart = 1;
    (s as any).sexvar = Math.floor(Math.random() * 5) + 3;
  }
  (s as any).sexvar = ((s as any).sexvar ?? 0) - (1);
  qspCall(s, 'dinsex2', 'stamina_npc');
  (s as any).pos = 4;
  if ((!((s as any).sxanal ?? 0))) {
    if (((s as any).svidboysex ?? 0) === 1) {
      (s as any).anala = ((s as any).anala ?? 0) + (1);
    }
    (s as any).sxanal = 1;
  }
  scene.img(`images/locations/shared/sex/sexrand/anal${((s as any).picrand ?? 0)}.jpg`);
  if (((s as any).textrand ?? 0) === 1) {
    scene.text('You spread your buttocks enticingly, inviting the man to fuck your ass. He does not hesitate and guides his cock to your puckered sphincter, slowly penetrating you further and further. He\'s a bit rough about it, making you squeal loudly with every thrust.');
  } else {
    if (((s as any).textrand ?? 0) === 2) {
      scene.text('His cock slowly but surely finds its way into your ass. After a while, he bottoms out in you, and you squeeze your ass around the base of his cock testily. The tightness of your sphincter around him makes his cock pulse even harder, and he groans, "Oh yea! Keep doing that! That feels great… don\'t stop!"');
    } else {
      if (((s as any).textrand ?? 0) === 3) {
        scene.text('You feel something thick and hard press against your sphincter and enter it. You cry out in pain, but he pays no attention to you and begins to fuck you enthusiastically. Slowly, your whimpers become moans of pleasure, and despite the pain, you greatly enjoy him fucking your ass.');
      } else {
        scene.text('You spread your buttocks enticingly, inviting the man to fuck your ass. He does not hesitate and guides his cock to your puckered sphincter, slowly penetrating you further and further. He\'s a bit rough about it, making you squeal loudly with every thrust.');
      }
    }
  }
  qspCall(s, 'arousal', 'anal', 10);
  qspCall(s, 'stat', '');
  if (((s as any).sexvar ?? 0) <= 0) {
    (s as any).sexvar = 0;
    scene.actions([{ label: 'Continue', goto: ['sex', 'end'] }]);
  } else {
    if (((s as any).sexvar ?? 0) === 1) {
      scene.text('<br>The man groans that he will cum soon.');
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex', 'var'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pos ?? 0) === 1) {
    scene.text('He groans loudly, and you feel his hard cock erupting in your mouth. You swallow it obediently, figuring that is what he wants you to do.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  } else {
    if (((s as any).pos ?? 0) === 2) {
      scene.text('Stroking himself while he pleasures you, he groans loudly, spraying his seed on the floor. Some of it splatters against your feet as well.');
      qspCall(s, 'cum_call', 'feet', ((s as any).npcID ?? 0), 1);
    } else {
      if (((s as any).pos ?? 0) === 3) {
        scene.text('He groans loudly, spraying his seed deep inside your pussy.');
        qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
        qspCall(s, 'cuminsidereact', '');
      } else {
        scene.text('He groans loudly, spraying his seed deep inside your ass.');
        qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).picrand ?? 0) >= 54  &&  ((s as any).picrand ?? 0) <= 73) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['office', 'work'] }]);
    }
    if (((s as any).picrand ?? 0) >= 74  &&  ((s as any).picrand ?? 0) <= 76) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['vann', 'start'] }]);
    }
    if (((s as any).picrand ?? 0) >= 77  &&  ((s as any).picrand ?? 0) <= 80) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['nichApartment', ''] }]);
    }
    if (((s as any).picrand ?? 0) >= 81  &&  ((s as any).picrand ?? 0) <= 82) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    if (((s as any).picrand ?? 0) >= 83  &&  ((s as any).picrand ?? 0) <= 84) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['dina', 'brodila'] }]);
    }
    if (((s as any).picrand ?? 0) >= 85  &&  ((s as any).picrand ?? 0) <= 86) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    if (((s as any).picrand ?? 0) === 87  ||  ((s as any).picrand ?? 0) === 90) {
      // TODO-QSP: killvar 'picrand'
      qspCall(s, 'dina', 'brodilk');
    }
    if (((s as any).picrand ?? 0) === 88) {
      // TODO-QSP: killvar 'picrand'
      qspCall(s, 'dina', 'brodils');
    }
    if (((s as any).picrand ?? 0) === 89) {
      // TODO-QSP: killvar 'picrand'
      scene.actions([{ label: 'Continue', goto: ['bed', 'start'] }]);
    }
    if (((s as any).svidboysex ?? 0) === 1) {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'svidboy_home', 'svidboy_home_arg'); } }]);
    }
    if (((s as any).sexloc ?? 0) === 'uni_dorm') {
      scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'dorm_room'] }]);
    }
    if (((s as any).sexloc ?? 0) === 'city_nightclub') {
      scene.actions([{ label: 'Continue', goto: ['city_nightclub', 'private_rooms'] }]);
    }
    dynamicGoto(st, 'sexloc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'var':
      enterVar(s, scene);
      break;
    case 'minet':
      enterMinet(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'vag':
      enterVag(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex: LocationDef = {
  name: 'sex',
  title: 'You kiss for a while. It feels nice, but you want more!',
  region: 'other',
  enter: enter,
};
