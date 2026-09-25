import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFamily(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/progulka.jpg');
  scene.text(`You feel a hand patting your leg and open your eyes to see Anya kneeling next to you. "${((s as any).pcs_nickname ?? '')}, are you okay? It looks like you were having a bad dream." You quickly look around and realize that you're in your bedroom as Anya stands up. "Come on, everyone's waiting for us."`);
  scene.text('You tilt your head as you reply. "Who\'s waiting for us?"');
  scene.text('She smiles. "You know. Mom, Vlad and Kolka. Have you hit your head or something? Come on, you know that we can\'t eat breakfast without you." She takes your hand and leads you to the kitchen.');
  scene.actions([
    { label: 'Enter kitchen', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('You enter the kitchen to see your stepfather and Kolka laughing at a joke that you can\'t quite hear. They both stop laughing as you enter. Anya offers you a chair and sits down next to you. You look around in relief until you hear something bumping against the kitchen door.');
    scene.actions([
      { label: 'Turn to see what it is', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/mom/prost` + (Math.floor(Math.random() * 3) + 4) + '.jpg"></center>');
    scene.text(`Your mother backs out of the kitchen with a tray of food and places some in front of each of you. "Nice of you to finally join us, ${((st as any).pcs_nickname ?? '')}. I was beginning to think that you were never going to wake up." You giggle as you start eating.`);
    scene.actions([
      { label: 'Eat breakfast', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/mom/prost` + (Math.floor(Math.random() * 3) + 4) + '.jpg"></center>');
    scene.text('Your mother suddenly shouts out. "HEY! No eating until your brother gets here!" You look and see your stepfather whispering in Kolka\'s ear, but stopping as soon as you face them.');
    scene.text('You point at Kolka. "He\'s right there…"');
    scene.text('Your mother crosses her arms. "I\'m not talking about Kolka." She walks back to the kitchen as your brother and stepfather continue cackling and whispering at each other. You look around in confusion until you hear light moaning nearby.');
    scene.text('You peek over the kitchen doorway to see your mother bent over the stove with a dark burly figure pressing against her before you suddenly feel someone\'s hand on one of your breasts.');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You turn to see Kolka squeezing your right breast as he gives your stepfather a thumbs up. You push Kolka away and hear your stepfather shouting. "Hey, don\'t push your little brother like that!"');
    scene.text('You\'re taken aback as you respond. "But he touched me!"');
    scene.text(`Your mother then enters the room with her pants around her ankles. "Come on ${((st as any).pcs_nickname ?? '')}, it's not like all the other boys haven't already fucked you before. Why not let your brother have a chance?"`);
    scene.text(`Kolka quickly chimes in. "Yeah ${((st as any).pcs_nickname ?? '')}, don't be selfish!"`);
    scene.text('You see everyone in the room scolding you before you hear a voice shout. "Don\'t worry everyone, I\'ll put this bitch in her place!"');
    scene.actions([
      { label: 'Turn to see who it is', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/threaten1.jpg');
    scene.text('You turn to see Yurik without any clothes on walking into the room before grabbing you by your throat and pushing you against the wall.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra8.mp4');
    scene.text('You can faintly feel something entering your pussy and feel tears streaming down your cheeks. You faintly hear some soft voices in the distance. "Watch her head! Don\'t drop her! Come on, get that door open!"');
    scene.text(`A few seconds later, you hear someone whispering in your ear. "It's okay ${((st as any).pcs_firstname ?? '')}. This is your place now. You didn't think that you could keep that precious body to yourself, did you?"`);
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('You slowly turn to see Niko standing next to you with a wide grin on his face. "You never need to worry my princess. I\'ll keep your pussy well fed with all the cocks in town." He leans over and gives you a kiss on the cheek.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    scene.text('You suddenly hear Yurik groan as he starts pumping his cum inside your pussy before talking to Niko. "What a worthless whore. Couldn\'t even rock her hips a little. If I wanted to fuck a blow up doll, I would have kept fucking her mother."');
    scene.text('He then leaves as you start hearing the soft voices again, but they sound closer. "Is she going to be okay? She\'ll be fine. She just needs some more rest… She\'s moving. Do you think she\'s…?"');
    scene.actions([
      { label: '…', goto: ['NikoMeyHome', 'aftermath'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWoods(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).track_loop = 'sound/happyhome/HappyHome.mp3';
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).VKWoods = 1;
  (s as any).VKSmiley = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/1.jpg');
  scene.text('\'You can feel grass on your face which you quickly brush away before looking around and noticing that you\'re in the middle of the woods, surrounded by an eerie mist. \' + $OpenInnerThought + \'What\'s going on? Why am I here? How did I get here? Where am I?\' + $CloseInnerThought');
  scene.text('You stand up and look around, trying to get your bearings when you hear music and the sounds of laughter in the far distance. ' + ((s as any).OpenInnerThought ?? '') + 'Where is this music coming from? Was that a person laughing? Maybe they can help me.' + ((s as any).CloseInnerThought ?? '') + ' You start heading in the direction of the noise when you suddenly feel a cold chill running down your spine. ' + ((s as any).OpenInnerThought ?? '') + 'Something about that laughter is… unnerving.' + ((s as any).CloseInnerThought ?? ''));
  scene.actions([
    { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods2'] },
  ]);
  scene.build();
}

function enterWoods2(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 2;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/2.jpg');
  scene.text('$OpenInnerThought + \'These woods are so dark. How did I get here?\' + $CloseInnerThought');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods3'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods3(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 3;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/3.jpg');
  scene.text('$OpenInnerThought + \'Still so dark. Am I even going the right way?\' + $CloseInnerThought');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods4'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods4(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 4;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/4.jpg');
  scene.text('$OpenInnerThought + \'More woods? At least I can see some light.\' + $CloseInnerThought');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods5'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods5(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 5;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/5.jpg');
  scene.text('$OpenInnerThought + \'Must keep moving. There must be a way out of here.\' + $CloseInnerThought');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods6'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods6(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 6;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/6.jpg');
  scene.text('$OpenInnerThought + \'Will this ever end? That freak is still lurking around.\' + $CloseInnerThought');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods7'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods7(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 7;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/7.jpg');
  scene.text('$OpenInnerThought + \'Will I be trapped here forever? Wait, what\'s that?\' + $CloseInnerThought + \' You see a set of train tracks ahead of you. The music gets louder the closer you approach them.\'');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  scene.text('You can hear a woman crying in the distance.');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Head toward the train tracks', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Head toward the train tracks', goto: ['NikoDreams', 'woods8'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoods8(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).VKWoods = 8;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/8.jpg');
  scene.text('You start following the tracks towards a light at what appears to be the end of the forest. ' + ((s as any).OpenInnerThought ?? '') + 'Is this it? Am I finally out of this forest?' + ((s as any).CloseInnerThought ?? ''));
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    if (((s as any).VKSmiley ?? 0) === 2) {
      scene.text('You can hear laughter in the distance.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    } else {
      if (((s as any).VKSmiley ?? 0) === 3) {
        scene.text('You can hear someone laughing far away.');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      }
    }
  }
  scene.text('You can hear a woman crying nearby.');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods_home'] },
    ]);
  }
  scene.actions([
    { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
  ]);
  scene.build();
}

function enterWoodsHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if ((!((s as any).VKHappyHome ?? 0))) {
    (s as any).VKHappyHome = 1;
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b><h4><font color=#E400FF>${'Happy Home'}</font></h4></b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/mansion/happyhome.jpg');
  if ((!((s as any).VKTeeHee ?? 0))) {
    scene.text('You finally approach the end of the forest and see a derelict house. As you walk towards it, you can can see what appears to be a woman standing in the middle of the path leading to the house crying. ' + ((s as any).OpenInnerThought ?? '') + 'She must be stranded here like me. Maybe I can help her.' + ((s as any).CloseInnerThought ?? '') + ' You suddenly feel a cold chill run down your spine before seeing a strange looking <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NikoDreams\u0027, \u0027teehee\u0027); return false;">cat</a> sitting on a tree stump, licking its paw.');
  } else {
    scene.text('There is an old derelict house in the distance, but the path to the house is blocked by a crying woman. <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NikoDreams\u0027, \u0027teehee\u0027); return false;">TeeHee</a> continuously rubs against your leg while purring softly.');
  }
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/weepeeidle.jpg');
  scene.actions([
    { label: 'Approach the crying woman', goto: ['NikoDreams', 'weepee1'] },
  ]);
  scene.build();
}

function enterTeehee(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  if ((!((s as any).VKTeeHee ?? 0))) {
    scene.text(`<center><b><h4><font color=#FF00CC>${'Strange Cat'}</font></h4></b></center>`);
  } else {
    scene.text(`<center><b><h4><font color=#FF00CC>${'TeeHee'}</font></h4></b></center>`);
  }
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/teehee.jpg');
  if ((!((s as any).VKTeeHee ?? 0))) {
    scene.text('You approach the cat and it turns to you with a creepy grin. "Tee hee, who is thee?"');
    scene.text('You recoil in shock. "You can talk?!"');
    scene.text('The cat grins wider. "Only if you want me to. Tee hee."');
    scene.text('"Umm, what do you want exactly?"');
    scene.text('The cat laughs. "What do I want? You approached me. Tee hee."');
    scene.text(`"My name is ${((s as any).pcs_firstname ?? '')}. What's yours?"`);
    scene.text('The cat grins again. "My name is TeeHee and I am so happy to meet thee."');
    scene.text('You pet TeeHee\'s head, causing her to start purring. "This is the end of the path for now. Come with me to return to your own path."');
    scene.text('"But that woman might need my help."');
    scene.text('TeeHee frowns as she responds. "She doesn\'t need you for the reasons you may think. You really should come with me, not WeePee."');
  } else {
    scene.text(`We meet again, ${((s as any).pcs_firstname ?? '')}. Have you come to re-join your own path, or do you wish to stay and face WeePee's wrath?`);
  }
  scene.actions([
    { label: 'Accept TeeHee\'s offer', handler: (st: GameState) => {
    (st as any).VKTeeHee = 1;
    (st as any).VKWoods = (-1);
    (st as any).VKSmiley = 3;
  }, goto: ['NikoMeyHome', 'aftermath2'] },
    { label: 'Walk away', handler: (st: GameState) => {
    (st as any).VKTeeHee = 1;
  }, goto: ['NikoDreams', 'woods_home'] },
  ]);
  scene.build();
}

function enterSmiley1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Smiley'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/smiley2.jpg');
  scene.text('As you walk through the forest, you hear loud laughing behind you and suddenly feel something rubbing across your throat, causing a stream of blood to begin pouring out of your neck. You let out a gurgled scream as your energy fades and the ground rushes toward you…');
  scene.actions([
    { label: 'Rest in peace', handler: (st: GameState) => {
    (st as any).VKSmiley = 3;
  }, goto: ['NikoMeyHome', 'aftermath2'] },
  ]);
  scene.build();
}

function enterWeepee1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b><h4><font color=#E400FF>${'WeePee'}</font></h4></b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/weepee.jpg');
  scene.text('As you approach the crying woman, she instantly turns around and lunges toward you, shoving her hand into your chest and pulling out your heart, staring into your eyes as she watches your life slowly drain away…');
  scene.actions([
    { label: 'Rest in peace', handler: (st: GameState) => {
    (st as any).VKSmiley = 3;
  }, goto: ['NikoMeyHome', 'aftermath2'] },
  ]);
  scene.build();
}

function enterWoodsHide(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text(`<center><b>${'Smiley'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/smiley.jpg');
    scene.text('You quickly duck behind a tree just as a horrific looking man, wielding a bloody battle axe and wearing clown makeup, comes out of the mist. He laughs loudly as he walks past the tree that you\'re hiding behind. He doesn\'t seem to notice you and disappears back into the mist.');
    (s as any).VKSmiley = (Math.floor(Math.random() * 2) + 3);
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    scene.img('' + qspFunc(s, '$face_image') + '');
    scene.text('You quickly duck behind a tree and stare into the forest. You wait for a few seconds before realizing that there\'s nothing there. You get out from behind the tree and brush the dirt from your leg.');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/${((s as any).VKWoods ?? '')}.jpg`);
  }
  scene.actions([
    { label: 'Continue', goto: ['NikoDreams', 'woods' + ((s as any).VKWoods ?? 0) + ''] },
  ]);
  scene.build();
}

function enterFriends(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/vicky.jpg');
  scene.text('You slowly open your eyes and see Vicky playfully shaking your shoulder. "Hey there, sleepy head! Did you sleep well?"');
  scene.text(`You give ${((s as any).VK_VikName ?? '')} a warm smile. "I guess but… Where am I?"`);
  scene.text('"After what happened at school, we were bored, so we decided to have you dance for us." Vicky replies and you tilt your head.');
  scene.text('"Dance… for us?" Vicky giggles as she points to her right. You turn to see Katja and Natalia sitting next to the bed.');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
  scene.text(`"Come on ${((s as any).pcs_nickname ?? '')}. What are you waiting for?" Katja asks.`);
  scene.text('Natalia nods "Don\'t worry, I threw away all your clothes. Whores don\'t need clothes." You look down and notice that you\'re naked before Katja suddenly slams the bed frame. "Enough messing around! DANCE WHORE!"');
  scene.actions([
    { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/sex/Cam/cam2.mp4');
    scene.text('You quickly stand up and start dancing as Vicky reaches forward and shoves her fingers inside your pussy while Katja sticks her finger in your ass. Natalia walks up to you and starts squeezing your breasts.');
    scene.text('"And they thought that Sonia was a whore." Vicky says and Katja giggles.');
    scene.text(`"That's just silly! ${((st as any).pcs_firstname ?? '')} is the only whore here."`);
    scene.text('Natalia nods. "I agree. I don\'t even know why she thought that she could hide it."');
    scene.text('$OpenInnerThought + \'Why are they being so mean to me? And why can\'t I stop dancing?\' + $CloseInnerThought');
    scene.text('Vicky gives your ass a firm smack. "Alright, we\'ve kept the boys waiting long enough!"');
    scene.actions([
      { label: 'Boys?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/exposed1.jpg');
    scene.text('Vicky pulls you toward the door, which opens on it\'s own and you suddenly find yourself in the school hallway with all the boys hollering at you. "Hey everyone! The whore is here!" The boys all charge you and start rubbing on your body while making lude comments.');
    scene.text(`"Here's the whore again! ${((st as any).pcs_firstname ?? '')} doesn't even care about trying to hide it!" Artem says.`);
    scene.text('"I know right? She\'s such a worthless whore. I almost don\'t even want her anymore," Petka responds.');
    scene.text('"Her pussy is probably all stretched out by now. It\'s like ground zero," Radomir adds.');
    scene.actions([
      { label: 'Boys?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big7.jpg');
    scene.text('Lesco then walks up to you. "It may be used up, but I might as well try it." He then grabs you by the hair, pulls out his dick and shoves it in your mouth.');
    scene.actions([
      { label: 'Suck Lesco\'s dick', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/blowjob3.mp4');
    scene.text('You start sucking Lesco\'s dick as the boys around you begin hollering.');
    scene.text(`"Wow! ${((st as any).pcs_firstname ?? '')} is even sucking Lesco's dick. What a fucking cum dumpster!" Lena comments.`);
    scene.text('"She seems to be enjoying it too. Gross!" Lera responds.');
    scene.text('"Don\'t look at me. I never taught her that." Mr Tsarev adds.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/locker/hall1.mp4');
    scene.text('Lesco pulls you up on top of him and you start riding his dick as tears stream down your face. ' + ((st as any).OpenInnerThought ?? '') + 'Why is this happening? Why are they all laughing at me? Please someone make this stop!' + ((st as any).CloseInnerThought ?? ''));
    scene.actions([
      { label: 'Continue riding him', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    scene.text('Lesco groans as he pumps his cum inside you. You look down to see your belly inflating as a seemingly endless stream of cum pours into you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/progulka.jpg');
    scene.text(`Anya suddenly grabs you by the hair and leads you to the door. "Mom needs to speak with you, ${((st as any).pcs_firstname ?? '')}."`);
    scene.actions([
      { label: 'Walk through the door', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/mom/prost` + (Math.floor(Math.random() * 3) + 4) + '.jpg"></center>');
    scene.text(`You enter the room, recognizing it as your apartment. Your mother is standing in front of you with a sneer on her face. "${((st as any).pcs_firstname ?? '')}! You let those boys get you pregnant? I can't believe you!"`);
    scene.text('"Not only that. She\'s also been eating my pussy," Anya adds and your mother\'s eyes widen.');
    scene.text('Kolka speaks up too. "She also had sex with me and is the mother of my child."');
    scene.text('Your mother is seething with rage as she grabs onto a knife and drives it into your inflated stomach, causing the cum to flood out.');
    scene.actions([
      { label: 'Fall', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/friends/darkness.jpg');
    scene.text(`'You fall to the ground and stare at your stomach, watching as an almost endless stream of cum pours out of you. You suddenly hear someone whisper in your ear. "Hey, are you alright?" You look around to see who it was, but see nothing at all. You're surrounded by darkness. ' + $OpenInnerThought + 'Where did everyone go? Where am I? It's so dark.' + $CloseInnerThought + ' You hear the voice whisper again. "${((st as any).pcs_firstname ?? '')}, wake up…"'`);
    scene.actions([
      { label: '…', goto: ['NikoEv2', 'niko_wake'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterClassroomDream(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/rest.jpg');
  scene.text(`You can feel yourself getting tired, so you lay your head down on your desk to rest as you wait for the period to end. After a few seconds, you hear someone shouting. "Who's that sleeping in my class?" You immediately sit up, pretending that you weren't laying down as you continue listening to the teacher. "Always remember to double check the problem, so that you can be confident with your solution. Now let's move on to the next lesson… How to treat a whore. For this lesson, I will need a volunteer. Miss ${((s as any).pcs_lastname ?? '')}, get up here now."`);
  scene.actions([
    { label: 'Who me?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text('You recoil in shock. "Wha… Me?" The teacher places both hands on your desk. "Of course I mean you. Do you know of any other whores that haven\'t already volunteered?" You can just barely make out Sonia under the table sucking on the teacher\'s dick.');
    scene.actions([
      { label: 'Walk to the front of the class', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/stand.jpg');
    scene.text('As you walk to the front of the class, you suddenly feel your clothes falling off. You quickly try to grab them, but they dissolve in your hands. You try covering your body, but the teacher shouts at you. "STOP COVERING YOURSELF YOUNG LADY! Whores should always keep their fuckholes on display." You can feel your body trembling as you finally approach the front of the class. "Now this is what you do to a whore. Notice her pussy here? This is the best place to fuck, but don\'t get carried away, or she could end up pregnant with a whore baby." He then motions you to come toward him.');
    scene.actions([
      { label: 'Move closer', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/blowjob1.mp4');
    scene.text('As soon as you get close, the teacher grabs you and forces you onto your knees. He pushes his dick against your lips. "Open up for your reward." You open your mouth, allowing his dick to enter. You start eagerly sucking his dick for what feels like a few minutes before he grabs your waist, lifts you up and drops you on top of his desk.');
    scene.actions([
      { label: 'See what he does', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/sex.jpg');
    scene.text('He pushes you over, rams his dick inside you and starts thrusting. All you can think about is the humiliation of being fucked by your teacher in front of your class. ' + ((st as any).OpenInnerThought ?? '') + 'Why is this happening? Why me? Will I never have a normal life again? Will I always be…' + ((st as any).CloseInnerThought ?? '') + ` You suddenly hear a soft voice whispering in your ear. "Hey ${((st as any).pcs_firstname ?? '')}, are you okay? Come on, get up…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/leave.jpg');
    scene.text(`You open your eyes and see all of the students getting out of their chairs and leaving the class while chatting with each other. You feel a hand on your shoulder shaking you, so you quickly turn to see Natalia with a concerned look on her face. "Are you alright, ${((st as any).pcs_firstname ?? '')}?"`);
    scene.text('You take a second to collect your thoughts before responding. "I don\'t know why I keep having these terrible nightmares."');
    scene.text('Natalia rubs your back as she responds. "Things must be so hard for you. I\'m so sorry."');
    scene.text('Not wanting to worry Natalia, you give her a fake smile. "They\'re just dreams, I\'ll be fine."');
    scene.actions([
      { label: 'Smile at Natalia', handler: (st: GameState) => {
    (st as any).NikoEv = 13;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/smile1.jpg');
    scene.text('Natalia rubs your forehead when you suddenly hear heavy breathing and turn to see Petia. "Are you two gonna kiss?"');
    scene.text('Natalia recoils in shock. "Go away, perv!" Petia quickly walks away and Natalia looks back at you. "We can talk later."');
    scene.text('You smile. "That sounds great."');
    scene.text('You then both walk out of the class.');
    scene.actions([
      { label: 'Leave classroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['NikoEv2', 'Lunch Chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPuppeteer(s: GameState, scene: SceneBuilder): void {
  (s as any).VKPuppetDream = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/class/rest.jpg');
  scene.text('You can feel the day dragging in slowly, so you rest your head on the desk trying your best to focus on anything but today\'s lesson. The light occasionally creeps in between your arms so you keep re-adjusting until it stops, causing you to feel at peace as you slumber through the lesson.');
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bedroom/dream/class/1.jpg');
    scene.text('You awaken and slowly lift your head, looking around the room but immediately recoil in shock when you notice how dark the classroom is. ' + ((st as any).OpenInnerThought ?? '') + 'Whoa, how long did I sleep? Oh shit, I must have slept through the whole day! I should get home right now!' + ((st as any).CloseInnerThought ?? '') + ' You quickly shove your books into your bag and walk to the door.');
    scene.actions([
      { label: 'Go to the hallway', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (st as any).track_loop = 'sound/happyhome/happyhome.mp3';
      (st as any).volume = 40;
      (st as any).music_loop = 1;
    }
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bedroom/dream/class/2.jpg');
    scene.text('As soon as you reach the hallway, you hear a strange muffled laugh in the distance, along with a strange melody which sounds very far away. ' + ((st as any).OpenInnerThought ?? '') + 'Who could that be? Maybe someone is flooding one of the bathrooms again. That music though. Where is it coming from? Outside maybe?' + ((st as any).CloseInnerThought ?? ''));
    scene.actions([
      { label: 'Head downstairs', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bedroom/dream/class/3.jpg');
    scene.text('You reach the bottom of the stairs and hear the laughter getting louder. ' + ((st as any).OpenInnerThought ?? '') + 'Hmm, I must be getting closer.' + ((st as any).CloseInnerThought ?? '') + ' The hallway is dark, but you can see a light at the end.');
    scene.actions([
      { label: 'Continue down the hallway', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bedroom/dream/class/4.jpg');
    scene.text('You continue walking down the hallway until you reach a strange puddle on the floor, coming from one of the lockers. ' + ((st as any).OpenInnerThought ?? '') + 'What is this stuff? Did someone have a drink in their locker that\'s spilled?' + ((st as any).CloseInnerThought ?? '') + ' When you look closer, you notice that the locker is slightly open and leaking the strange liquid.');
    scene.actions([
      { label: 'Open the locker', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.text(`<center><b><h4><font color=#FFA200>${'Puppet'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/puppet.jpg');
    scene.text('You slowly open the locker to find a creepy doll inside, which is constantly laughing in an automated voice. ' + ((st as any).OpenInnerThought ?? '') + 'Who left this here? And why is it all wet? What is this stuff?' + ((st as any).CloseInnerThought ?? '') + ' The doll is heavier than it looks and seems to be covered in a thick warm liquid. ' + ((st as any).OpenInnerThought ?? '') + 'What is this?' + ((st as any).CloseInnerThought ?? '') + ' You look closely as you hold up the doll to the light and notice that the liquid is dark red, almost like blood. The doll has some strings attached to it\'s wrists and ankles. ' + ((st as any).OpenInnerThought ?? '') + 'Maybe it\'s a puppet?' + ((st as any).CloseInnerThought ?? '') + ' You look into it\'s eyes and notice your own reflection next to something else…');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'stat', '');
    scene.text(`<center><b><h4><font color=#FFA200>${'Puppeteer'}</font></h4></b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/residents/puppeteer.jpg');
    scene.text('You turn around, but are quickly grabbed by the cheeks and launched onto the ground by a horrific looking man with long sharp nails. You dive to the side, dodging a swipe of his nails before quickly crawling away, only to be grabbed by your ankles and dragged back. You let out a loud scream as the insane laughing man pulls you towards him. You turn to try and fight him off, but he immediately drives his nails into your eyes…');
    scene.actions([
      { label: '…', handler: (st: GameState) => {
    (st as any).music_loop = 0;
    qspCall(st, 'stat', '');
    scene.text(`<center><b><h4><font color=#FF00CC>${'' + ((st as any).pcs_firstname ?? '') + ' [' + ((st as any).pcs_nickname ?? '') + '] ' + ((st as any).pcs_lastname ?? '') + ''}</font></h4></b></center>`);
    scene.img('' + qspFunc(s, '$face_image', '') + '');
    scene.text(`You quickly jump up screaming, only to notice that you're still in class. The whole class is staring at you in shock. "Miss ${((st as any).pcs_lastname ?? '')}, what's wrong?" Mr Tsarev asks softly in a concerned voice. You sit completely speechless for a few seconds before hearing the bell ringing. You quickly pack up your things and head for the door as some of your classmates whisper to each other.`);
    scene.text('"Whoa, what\'s her problem?" Arkadi asks.');
    scene.text('"Maybe she\'s on the pipe or something?" Niko replies.');
    scene.text('"I hope that she\'s okay…" Natalia asks in a concerned voice.');
    scene.text('"I bet she was just looking for attention. I wouldn\'t put it past her." Christina sneers.');
    scene.text('"Maybe she\'s just a psycho bitch and finally snapped?" Bella says in a mocking tone.');
    scene.actions([
      { label: 'Quickly leave the classroom', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'family':
      enterFamily(s, scene);
      break;
    case 'woods':
      enterWoods(s, scene);
      break;
    case 'woods2':
      enterWoods2(s, scene);
      break;
    case 'woods3':
      enterWoods3(s, scene);
      break;
    case 'woods4':
      enterWoods4(s, scene);
      break;
    case 'woods5':
      enterWoods5(s, scene);
      break;
    case 'woods6':
      enterWoods6(s, scene);
      break;
    case 'woods7':
      enterWoods7(s, scene);
      break;
    case 'woods8':
      enterWoods8(s, scene);
      break;
    case 'woods_home':
      enterWoodsHome(s, scene);
      break;
    case 'teehee':
      enterTeehee(s, scene);
      break;
    case 'smiley1':
      enterSmiley1(s, scene);
      break;
    case 'weepee1':
      enterWeepee1(s, scene);
      break;
    case 'woods_hide':
      enterWoodsHide(s, scene);
      break;
    case 'friends':
      enterFriends(s, scene);
      break;
    case 'classroom_dream':
      enterClassroomDream(s, scene);
      break;
    case 'Puppeteer':
      enterPuppeteer(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoDreams: LocationDef = {
  name: 'NikoDreams',
  region: 'other',
  enter: enter,
};
