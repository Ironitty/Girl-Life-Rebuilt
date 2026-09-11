import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: $textsexhunter[2] = '<<$boydesc>> staring you in the face until your lips slide on his hard dick. In...
  // TODO-QSP: $textsexhunter[3] = '<<$boydesc>> finished and left with a satisfied smile on her face, and you are ...
  // TODO-QSP: $textsexhunter[4] = 'Enough to enjoy in this position, the guy says…'
  // TODO-QSP: $textsexhunter[5] = 'Guys look you in the face while your lips slide on their hard members. Interrup...
  // TODO-QSP: $textsexhunter[6] = '<<$boydesc>> finished and walked away with a satisfied smile on his face, and y...
  // TODO-QSP: $textsexhunter[7] = 'Enough to enjoy in this position, guys…'
  // TODO-QSP: $textsexhunter[8] = '<<$boydesc>> staring you in the face until your lips slide on his hard dick…'
  // TODO-QSP: $textsexhunter[9] = 'Guys look you in the face while your lips slide on their hard members…'
  // TODO-QSP: $textsexhunter[10] = '<<$boydesc>> finished and walked away with a satisfied smile on her face, and ...
  // TODO-QSP: $textsexhunter[11] = 'Gradually, a pleasant warmth growing and throbbing in the abdomen, then the se...
  // TODO-QSP: $textsexhunter[12] = 'You feel nice when <<dick>> cm dick is moving inside of your ass and you moan ...
  if (((s as any).args ?? 0)[0] === 'gadsexOral1') {
    (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
    (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
    if (((s as any).pcs_throat ?? 0) <= 15) {
      (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
    }
    if (((s as any).pcs_throat ?? 0) > 15) {
      (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
    }
    scene.img('images/locations/gadukino/sex/mitka/mitkagadsexoral1.\'+rand(1, 2)+\'.jpg');
    // TODO-QSP: dynamic text: You kneel in front of a boy. <<$boydesc>> takes his <<dick>> cm dick, brings it ...
    scene.text(`You kneel in front of a boy. ${((s as any).boydesc ?? 0)} takes his ${((s as any).dick ?? 0)} cm dick, brings it to your lips…`);
    qspCall(s, 'oral', 'start');
    // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).horny_boyA ?? 0) < 100) {
      if (((s as any).huntsexa ?? 0) === 1) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
      }
      if (((s as any).huntsexa ?? 0) === 2) {
        // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
      }
      if (((s as any).huntsexa ?? 0) === 3) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
      }
      if (((s as any).huntsexa ?? 0) === 4) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
      }
      if (((s as any).huntsexa ?? 0) === 5) {
        // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
      }
      if (((s as any).huntsexa ?? 0) === 6) {
        // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
      }
    } else {
      scene.actions([
        { label: 'Suck on', goto: ['mitkasex', 'gadOralCum1'] },
      ]);
    }
  }
  scene.build();
}

function enterForest1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).boyAsex = 0;
  (s as any).dirty_dickA = 0;
  (s as any).boyAsexa = 0;
  qspCall(s, 'boyStat', '', ((s as any).locArgs?.[1] ?? 0));
  (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsex1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: Entering deeper into the thicket <<$boydesc>> comes up to you and Mira. He undre...
  scene.text(`Entering deeper into the thicket ${((s as any).boydesc ?? 0)} comes up to you and Mira. He undresses you both and makes you kneel before him…`);
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_2'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_3'
  }
  scene.build();
}

function enterForest2(s: GameState, scene: SceneBuilder): void {
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  (s as any).temp_ms = Math.floor(Math.random() * 2) + 1;
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    if (((s as any).temp_ms ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63');
    }
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A61');
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 2) {
      if (((s as any).temp_ms ?? 0) === 1) {
        qspCall(s, 'boyStat', 'A63');
      }
      if (((s as any).temp_ms ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A62');
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 3) {
        if (((s as any).temp_ms ?? 0) === 1) {
          qspCall(s, 'boyStat', 'A61');
        }
        if (((s as any).temp_ms ?? 0) === 2) {
          qspCall(s, 'boyStat', 'A62');
        }
      }
    }
  }
  (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
  (s as any).horny_boyB = Math.floor(Math.random() * 91) + 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsex2.jpg');
  scene.text('Entering deeper into the thicket the guys come up to you and Mira. They undress you both and make you kneel before them…');
  scene.actions([
    { label: 'Suck', goto: ['mitkasex', 'forestOral2_1'] },
  ]);
  scene.build();
}

function enterForest3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).mitboysex = 0;
  (s as any).mitboysexrand = Math.floor(Math.random() * 5) + 1;
  (s as any).Mira_enema = 0;
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsex3.jpg');
  scene.text('Entering deeper into the thicket the guys come up to you and Mira. They undress you both and make you kneel before them…');
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral3_1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral3_2'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral3_3'
  }
  scene.build();
}

function enterGad1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).boyAsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).dirty_dickA = 0;
  qspCall(s, 'boyStat', '', ((s as any).locArgs?.[1] ?? 0));
  (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsex1...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsex1.1.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsex1...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsex1.2.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> takes you out to some field, and undresses you. He makes you kneel ...
  scene.text(`${((s as any).boydesc ?? 0)} takes you out to some field, and undresses you. He makes you kneel in front of him…`);
  scene.actions([
    { label: 'Suck', goto: ['mitkasex', 'gadsexOral1'] },
  ]);
  scene.build();
}

function enterGad2(s: GameState, scene: SceneBuilder): void {
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
  (s as any).horny_boyB = Math.floor(Math.random() * 91) + 0;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsex2...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsex2.1.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsex2...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsex2.2.jpg"></center>`);
  }
  scene.text('The guys take you to some field and undress you. You drop to your knees and place your hands on their members…');
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    if (((s as any).pcs_throat ?? 0) <= 15) {
      (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
      (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (5);
    }
    if (((s as any).pcs_throat ?? 0) > 15) {
      (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
      (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
    }
    scene.img('images/locations/gadukino/sex/mitka/mitkagadsexoral2.\'+rand(1, 2)+\'.jpg');
    scene.text('You kneel in front of the boys. They are taking your members out and bring them to your lips…');
    if (((s as any).temp_ms ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A61');
      qspCall(s, 'oral', 'start');
    } else {
      if (((s as any).temp_ms ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A63');
        qspCall(s, 'oral', 'start');
      } else {
        if (((s as any).temp_ms ?? 0) === 3) {
          qspCall(s, 'boyStat', 'A61');
          qspCall(s, 'oral', 'start');
          qspCall(s, 'boyStat', 'A62');
          qspCall(s, 'oral', 'start');
        }
      }
    }
    // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
    qspCall(s, 'stat', '');
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
      if (((s as any).huntsexa ?? 0) === 1) {
        // TODO-QSP: act 'Bend': gt 'mitkasex', 'gadStan'
      }
      if (((s as any).huntsexa ?? 0) === 2) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCow2'
      }
      if (((s as any).huntsexa ?? 0) === 3) {
        // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDog2'
      }
    } else {
      if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
        scene.actions([
          { label: 'Suck on', goto: ['mitkasex', 'gadOralCum2_2'] },
        ]);
      } else {
        if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
          scene.actions([
            { label: 'Suck on', goto: ['mitkasex', 'gadOralCum2_1'] },
          ]);
        } else {
          if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
            scene.actions([
              { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum2'] },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterGadOralCum2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).protect = 0;
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexoralcum2_1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase tempo, actively wor...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase tempo, actively working his cock with your lips and tongue…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  scene.text('');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadOralCum2_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexoralcum2_2.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase tempo, actively wor...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase tempo, actively working his cock with your lips and tongue…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadHandsCum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  (s as any).protect = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexhandscum2.\'+rand(1, 2)+\'.jpg');
  scene.text('You are lying on the ground. The guys feel the approaching orgasm and put your hands on their members, and you\'re told to finish them off. You went to work and were soon rewarded for your diligence, they groaned and you felt your body get showered in hot cum.');
  qspCall(s, 'arousal', 'hj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] <= 0) {
    scene.text('After the guys went about their business and you are left to clean yourself up.');
  }
  if (((s as any).mc_inventory ?? 0)?.['cosmetics'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).body_write = 1;
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) - (1);
    scene.img('images/locations/gadukino/sex/mitka/mitkagadsexhandscum2.3.jpg');
    scene.text('When the guys finished, they painted on your body "fuck slut" and writing a couple of other obscene words, and went about their business. You are left to clean yourself up.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['mitkasex', 'end'] },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['mitkasex', 'end'] },
    ]);
  }
  scene.build();
}

function enterGadDog2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_throat ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexdog2.\'+rand(1, 3)+\'.jpg');
  scene.text('You bend over in front of the boys. One is penetrating your pussy from behind while another fucks your mouth.');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'dinsex', 'boy_puts_condom');
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
      }
    }
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Bend over': gt 'mitkasex', 'gadStan'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCow2'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      scene.actions([
        { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadDogCum2_2'] },
      ]);
    } else {
      if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
        scene.actions([
          { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadDogCum2_1'] },
        ]);
      } else {
        if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
          scene.actions([
            { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum2'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterGadDogCum2_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexdogcum2_1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase tempo, actively wor...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase tempo, actively working his cock with your lips and tongue…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadDogCum2_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexd...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexdogcum2_2.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexd...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexdogcum2_3.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: You bend over sticking out your ass, and feel <<$boydesc>> starts moving faster…
  scene.text(`You bend over sticking out your ass, and feel ${((s as any).boydesc ?? 0)} starts moving faster…`);
  if (((s as any).pcs_horny ?? 0) >= 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[11]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[11]", { location: "mitkasex" })}`);
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadCow2(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_throat ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcow2.jpg');
  scene.text('One guy lies on the ground. You mount his cock by climbing on top of him. The second guy raises his cock to your lips…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'dinsex', 'boy_puts_condom');
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
      }
    }
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Bend': gt 'mitkasex', 'gadStan'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDog2'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      scene.actions([
        { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadCowCum2_2'] },
      ]);
    } else {
      if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
        scene.actions([
          { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadCowCum2_1'] },
        ]);
      } else {
        if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
          scene.actions([
            { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum2'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterGadCowCum2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcowcum2_1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase tempo, actively wor...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase tempo, actively working his cock with your lips and tongue…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'bj', (-5), 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadCowCum2_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcowcum2_2.jpg');
  scene.text('You jump on the guys cock gradually speeding up the pace, knowing that he will soon cum…');
  if (((s as any).pcs_horny ?? 0) >= 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[11]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[11]", { location: "mitkasex" })}`);
  }
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadStan(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_throat ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexstan2.jpg');
  scene.text('You bend over in front of the boys. One is penetrating your pussy from behind while another fucks your mouth.');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'dinsex', 'boy_puts_condom');
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
      }
    }
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCow2'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDog2'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      scene.actions([
        { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadStanCum2_2'] },
      ]);
    } else {
      if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
        scene.actions([
          { label: 'Make one of the boys cum', goto: ['mitkasex', 'gadStanCum2_1'] },
        ]);
      } else {
        if (((s as any).horny_boyA ?? 0) >= 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
          scene.actions([
            { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum2'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterGadStanCum2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexstancum2_1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase tempo, actively wor...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase tempo, actively working his cock with your lips and tongue…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadStanCum2_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexstancum2_2.jpg');
  // TODO-QSP: dynamic text: You bend over sticking out your ass, and feel <<$boydesc>> starts moving faster…
  scene.text(`You bend over sticking out your ass, and feel ${((s as any).boydesc ?? 0)} starts moving faster…`);
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temp_ms ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A62');
  }
  if (((s as any).temp_ms ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A61');
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
  }
  if (((s as any).huntsexa ?? 0) === 6) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
  }
  scene.build();
}

function enterGadOralCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).protect = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexoralcuml1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase your pace…
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase your pace…`);
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterGadSideVag1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexs...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexsidevag1.1.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexs...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexsidevag1.2.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: You lie on your side, <<$boydesc>> rubs up against your pussy…
  scene.text(`You lie on your side, ${((s as any).boydesc ?? 0)} rubs up against your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
    }
  } else {
    scene.actions([
      { label: 'Lie on your side then', goto: ['mitkasex', 'gadSideVagCum1'] },
    ]);
  }
  scene.build();
}

function enterGadSideVagCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexsidevagcum1.jpg');
  // TODO-QSP: dynamic text: You lie on your side, feeling that <<$boydesc>> gradually starts to move faster…
  scene.text(`You lie on your side, feeling that ${((s as any).boydesc ?? 0)} gradually starts to move faster…`);
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterGadMisVag1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexm...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexmisvag1.1.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexm...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexmisvag1.2.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: You lie on your back, <<$boydesc>> moves to the side that with your exposed puss...
  scene.text(`You lie on your back, ${((s as any).boydesc ?? 0)} moves to the side that with your exposed pussy waiting for him…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
    }
  } else {
    scene.actions([
      { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum1'] },
    ]);
  }
  scene.build();
}

function enterGadDogVag1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexdogvag1.jpg');
  // TODO-QSP: dynamic text: You bend over for <<$boydesc>> so he can penetrate your pussy…
  scene.text(`You bend over for ${((s as any).boydesc ?? 0)} so he can penetrate your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'gadsexOral1'] },
    ]);
  }
  scene.build();
}

function enterGadCowVag1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).pcs_horny ?? 0) < 60) {
    scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcowvag1.\'+rand(1, 2)+\'.jpg');
  } else {
    scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcowvag1.\'+rand(3, 4)+\'.jpg');
  }
  // TODO-QSP: dynamic text: <<$boydesc>> lays on the ground, and you mount his cock…
  scene.text(`${((s as any).boydesc ?? 0)} lays on the ground, and you mount his cock…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
    }
  } else {
    scene.actions([
      { label: 'Keep riding', goto: ['mitkasex', 'gadCowVagCum1'] },
    ]);
  }
  scene.build();
}

function enterGadCowVagCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexcowvagcum1.jpg');
  scene.text('You jump on the guy\'s cock gradually speeding up the pace, knowing that he will soon cum…');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterGadDogAnal1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_ass ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (30);
  }
  if (((s as any).pcs_ass ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexd...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexdoganal1.'+rand(1, 2)+'.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexd...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexdoganal1.'+rand(3, 4)+'.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: You bend over for <<$boydesc>> so he can penetrate your ass…
  scene.text(`You bend over for ${((s as any).boydesc ?? 0)} so he can penetrate your ass…`);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowAnal1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
    }
  } else {
    scene.actions([
      { label: 'Make the boy cum', goto: ['mitkasex', 'gadDogAnalCum1'] },
    ]);
  }
  scene.build();
}

function enterGadDogAnalCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 6) + 5);
  (s as any).pose = 1;
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  (s as any).protect = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexdoganalcum1.jpg');
  // TODO-QSP: dynamic text: You bend over, sticking out your ass, and feel <<$boydesc>> starts moving faster...
  scene.text(`You bend over, sticking out your ass, and feel ${((s as any).boydesc ?? 0)} starts moving faster…`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: dynamic text: After a while <<$boydesc>> moaned and you feel your ass fill with warm cum.
  scene.text(`After a while ${((s as any).boydesc ?? 0)} moaned and you feel your ass fill with warm cum.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterGadCowAnal1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_ass ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (30);
  }
  if (((s as any).pcs_ass ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  if (((s as any).pcs_horny ?? 0) < 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexc...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexcowanal1.'+rand(1, 2)+'.jpg"></center>`);
  }
  if (((s as any).pcs_horny ?? 0) >= 60) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkagadsexc...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkagadsexcowanal1.'+rand(3, 4)+'.jpg"></center>`);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> lays on the ground, and you mount his cock…
  scene.text(`${((s as any).boydesc ?? 0)} lays on the ground, and you mount his cock…`);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'gadSideVag1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'gadMisVag1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'gadCowVag1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogVag1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'gadDogAnal1'
    }
  } else {
    scene.actions([
      { label: 'Lie on the ground', goto: ['mitkasex', 'gadHandsCum1'] },
    ]);
  }
  scene.build();
}

function enterGadHandsCum1(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 0;
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/mitka/mitkagadsexhandscum1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You are lying on the ground. <<$boydesc>>, feeling the approaching orgasm, pulls...
  scene.text(`You are lying on the ground. ${((s as any).boydesc ?? 0)}, feeling the approaching orgasm, pulls out of you and tells you to jerk him off. You went to work and were soon rewarded for your diligence, he groaned and you felt hot drops of sperm spray on your body.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestOral1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 7) + 1;
  if (((s as any).pcs_throat ?? 0) <= 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral1_1.jpg');
  // TODO-QSP: dynamic text: Mira watches as you kneel in front of a boy. <<$boydesc>> takes his <<dick>>cm d...
  scene.text(`Mira watches as you kneel in front of a boy. ${((s as any).boydesc ?? 0)} takes his ${((s as any).dick ?? 0)}cm dick and brings it to your lips…`);
  scene.text('Mira stands by your side, not interfering with the process.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 7) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestOralCum1_1'] },
    ]);
  }
  scene.build();
}

function enterForestOral1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 7) + 1;
  if (((s as any).pcs_throat ?? 0) <= 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral1_2.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You and Mira are on your knees before the guy. <<$boydesc>> takes his <<dick>> c...
  scene.text(`You and Mira are on your knees before the guy. ${((s as any).boydesc ?? 0)} takes his ${((s as any).dick ?? 0)} cm dick, and brings it to your lips…`);
  scene.text('Mira is below, caressing his balls with her tongue, giving him extra pleasure.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 7) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestOralCum1_1'] },
    ]);
  }
  scene.build();
}

function enterForestOral1_3(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 7) + 1;
  if (((s as any).pcs_throat ?? 0) <= 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral1_3.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You see Mira kneel in front of a boy. <<$boydesc>> takes his <<dick>> cm dick, b...
  scene.text(`You see Mira kneel in front of a boy. ${((s as any).boydesc ?? 0)} takes his ${((s as any).dick ?? 0)} cm dick, brings it to her lips…`);
  scene.text('You and Mira hard suck and lick the guy\'s dick, your lips and tongues touching and sometimes, merging in this kind of kiss.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 7) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestOralCum1_1'] },
    ]);
  }
  scene.build();
}

function enterForestOralCum1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).protect = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoralcuml1_1.jpg');
  // TODO-QSP: dynamic text: Realizing that <<$boydesc>> will soon tire out, you increase your pace. Mira sta...
  scene.text(`Realizing that ${((s as any).boydesc ?? 0)} will soon tire out, you increase your pace. Mira stands by your side, not interfering with the process.`);
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestSide1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside1_1.jpg');
  // TODO-QSP: dynamic text: You lie on your side, <<$boydesc>> rubs up against your pussy…
  scene.text(`You lie on your side, ${((s as any).boydesc ?? 0)} rubs up against your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: Mira is lying next to you and watches his <<dick>> centimeter piston hammer in y...
  scene.text(`Mira is lying next to you and watches his ${((s as any).dick ?? 0)} centimeter piston hammer in your ${((s as any).pc_desc ?? 0)?.['pussy']} vagina.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Lie on your side', goto: ['mitkasex', 'forestSideCum1_1'] },
    ]);
  }
  scene.build();
}

function enterForestSideCum1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexsidecum1_1.jpg');
  // TODO-QSP: dynamic text: You lie on your side, slightly changing the pose as <<$boydesc>> gradually start...
  scene.text(`You lie on your side, slightly changing the pose as ${((s as any).boydesc ?? 0)} gradually starts to move faster…`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestSide1_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside1_2.jpg');
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    // TODO-QSP: dynamic text: You lie next to Mira and watch <<$boydesc>> <<dick>> cm cock ram her developed p...
    scene.text(`You lie next to Mira and watch ${((s as any).boydesc ?? 0)} ${((s as any).dick ?? 0)} cm cock ram her developed pussy.`);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    // TODO-QSP: dynamic text: You lie next to Mira and watch <<$boydesc>> <<dick>> cm cock rams her gaping vag...
    scene.text(`You lie next to Mira and watch ${((s as any).boydesc ?? 0)} ${((s as any).dick ?? 0)} cm cock rams her gaping vagina.`);
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_3'
    }
  }
  scene.build();
}

function enterForestCow1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  if ((!((s as any).miralesb ?? 0))) {
    scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow1_1.jpg');
  } else {
    scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexccowkiss1_2.jpg');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  }
  // TODO-QSP: dynamic text: <<$boydesc>> lays on the ground, and you mount his cock…
  scene.text(`${((s as any).boydesc ?? 0)} lays on the ground, and you mount his cock…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if ((!((s as any).miralesb ?? 0))) {
    scene.text('Mira lying next to you and watches as you jump on his penis.');
  }
  if (((s as any).miralesb ?? 0) > 2) {
    scene.text('While you jump on the guy, Mira, kisses your lips, and feels how your body shakes to the rhythmic beats of the member pounding you.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Keep riding', goto: ['mitkasex', 'forestSideCum1_2'] },
    ]);
  }
  scene.build();
}

function enterForestSideCum1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcowcum1_1.jpg');
  scene.text('You jump on the guy\'s cock gradually speeding up the pace, knowing that he will soon cum…');
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestCow1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow1_1.jpg');
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    // TODO-QSP: dynamic text: You sit beside a guy and watch as Mira jumps on his dick. Simultaneously <<$boyd...
    scene.text(`You sit beside a guy and watch as Mira jumps on his dick. Simultaneously ${((s as any).boydesc ?? 0)}, puts his hand between your legs, and shoves his fingers in your pussy, gradually arousing you.`);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    // TODO-QSP: dynamic text: You sit beside a guy and watch as Mira gaping vagina swallows his whole <<dick>>...
    scene.text(`You sit beside a guy and watch as Mira gaping vagina swallows his whole ${((s as any).dick ?? 0)} cm dick. Simultaneously ${((s as any).boydesc ?? 0)}, puts his hand between your legs, and shoves his fingers in your pussy, gradually arousing you.`);
  }
  if (((s as any).miralesb ?? 0) > 0) {
    scene.text('You can bend over and kiss <a href="exec:gt \'mitkasex\', \'forestCowKiss1_1\'">Mira</a>.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  scene.text('You can take the cock out of Mira and <a href="exec:gt \'mitkasex\', \'forestCowOral1_1\'">suck</a> it.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestCowCum1_2'] },
    ]);
  }
  scene.build();
}

function enterForestCowKiss1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A64');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexccowkiss1_1.jpg');
  scene.text('Watching Mira ride on the cock, you suddenly wanted to kiss her. You brought your lips to hers and they merged in a passionate kiss. You can feel the rhythmic tremors of her body as she gets pounded from below.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
  qspCall(s, 'arousal', 'end');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestCowCum1_2'] },
    ]);
  }
  scene.build();
}

function enterForestCowCum1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcowcum1_2.jpg');
  // TODO-QSP: dynamic text: Mira rides on the cock gradually speeding up the pace. Suddenly <<$boydesc>> gro...
  scene.text(`Mira rides on the cock gradually speeding up the pace. Suddenly ${((s as any).boydesc ?? 0)} groaned and realized that he had finished in Mira.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestCowOral1_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_throat ?? 0) <= 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).horny_boyA ?? 0) < 100) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkaforests...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkaforestsexccoworal1_1.jpg"></center>`);
  }
  if (((s as any).horny_boyA ?? 0) >= 100) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/gadukino/sex/mitka/mitkaforests...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/gadukino/sex/mitka/mitkaforestsexccoworalcuml1_1.jpg"></center>`);
  }
  scene.text('Removing the member from Mira\'s vagina of you bring it to your lips…');
  qspCall(s, 'oral', 'start');
  if (((s as any).horny_boyA ?? 0) >= 100) {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'dinsex', 'bj_swallow_random');
  }
  if (((s as any).horny_boyA ?? 0) < 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  }
  if (((s as any).horny_boyA ?? 0) >= 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Finish', goto: ['mitkasex', 'end'] },
    ]);
  }
  scene.build();
}

function enterForestDog1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog1_1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You bend over for <<$boydesc>> so he can penetrate your pussy…
  scene.text(`You bend over for ${((s as any).boydesc ?? 0)} so he can penetrate your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: Mira sits on her knees next to you and watches the <<dick>> centimeter piston ha...
  scene.text(`Mira sits on her knees next to you and watches the ${((s as any).dick ?? 0)} centimeter piston hammer in your ${((s as any).pc_desc ?? 0)?.['pussy']} vagina.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestDogCum1_1'] },
    ]);
  }
  scene.build();
}

function enterForestDogCum1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdogcum1_1.jpg');
  // TODO-QSP: dynamic text: You bend over, sticking out your ass, and feel <<$boydesc>> start moving faster…
  scene.text(`You bend over, sticking out your ass, and feel ${((s as any).boydesc ?? 0)} start moving faster…`);
  if (((s as any).pcs_horny ?? 0) >= 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[11]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[11]", { location: "mitkasex" })}`);
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsex', 'sexcum');
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestDog1_2(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog1_2.\'+rand(1, 2)+\'.jpg');
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    // TODO-QSP: dynamic text: You're standing near Mira and watch <<$boydesc>> <<dick>> cm cock ram her develo...
    scene.text(`You're standing near Mira and watch ${((s as any).boydesc ?? 0)} ${((s as any).dick ?? 0)} cm cock ram her developed pussy.`);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    // TODO-QSP: dynamic text: You're standing near Mira and watch <<$boydesc>> <<dick>> cm cock ram her gaping...
    scene.text(`You're standing near Mira and watch ${((s as any).boydesc ?? 0)} ${((s as any).dick ?? 0)} cm cock ram her gaping vagina.`);
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_3'
    }
  } else {
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestDogCum1_2'] },
    ]);
  }
  scene.build();
}

function enterForestDogCum1_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdogcum1_2.jpg');
  // TODO-QSP: dynamic text: You see that <<$boydesc>>, in Mira, gradually accelerating his pace. Suddenly <<...
  scene.text(`You see that ${((s as any).boydesc ?? 0)}, in Mira, gradually accelerating his pace. Suddenly ${((s as any).boydesc ?? 0)} groaned and realized that he was came inside her.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1, 'sub', 'group');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestDog1_3(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog1_3.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> bends you over with Mira perched on top on your back, making a kind...
  scene.text(`${((s as any).boydesc ?? 0)} bends you over with Mira perched on top on your back, making a kind of sandwich. After this construction he began thrust into your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.text('After a while he pulled out his cock, he shoved it in Mira. You can feel her body tremble under his rhythmic strokes, rocking you at the same time in sync.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide1_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestSide1_2'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow1_1'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow1_2'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog1_1'
    }
    if (((s as any).huntsexa ?? 0) === 6) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog1_2'
    }
  } else {
    scene.actions([
      { label: 'Doggy', goto: ['mitkasex', 'forestDogCum1_3'] },
    ]);
  }
  scene.build();
}

function enterForestDogCum1_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pose = 1;
  qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdogcum1_3.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: Feeling the approaching orgasm <<$boydesc>> puts and Mira next to each other and...
  scene.text(`Feeling the approaching orgasm ${((s as any).boydesc ?? 0)} puts and Mira next to each other and began stroking his penis. Soon he groaned and you feel warm drops of cum on your ass.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[10]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[10]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestOral2_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  if (((s as any).pcs_throat ?? 0) <= 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (5);
  }
  if (((s as any).pcs_throat ?? 0) > 15) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral2_1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You kneel in front of a boy. <<$boydesc>> takes his <<dick>> cm dick and brings ...
  scene.text(`You kneel in front of a boy. ${((s as any).boydesc ?? 0)} takes his ${((s as any).dick ?? 0)} cm dick and brings it to your lips…`);
  qspCall(s, 'oral', 'start');
  scene.text('<a href="exec:gt \'mitkasex\', \'forestOral_mira2_1\'">Mira</a> is squatting nearby.');
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (5);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestCow2_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_2'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestOralCum2_1'] },
    ]);
  }
  scene.build();
}

function enterForestDog2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (5);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog2_1.\'+rand(1, 2)+\'.jpg');
  scene.text('You bend over before the guy, so he can penetrate you from behind…');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.text('You hear Mira, slightly moaning and swaying to the beat of the thrusts of the second guy fucking her next to you.');
  if (((s as any).horny_boyB ?? 0) >= 100) {
    scene.text('Suddenly the guy grabs her hair and setting himself on his knees, starts to masturbate in front of her face.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_2'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
      if (((s as any).huntsexa ?? 0) === 1) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
      }
      if (((s as any).huntsexa ?? 0) === 2) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
      }
      if (((s as any).huntsexa ?? 0) === 3) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
      }
    } else {
      scene.actions([
        { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
      ]);
    }
  }
  scene.build();
}

function enterForestDog2_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  (s as any).pose = 1;
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog2_2.\'+rand(1, 2)+\'.jpg');
  scene.text('You bend over before the guy, so he can penetrate you from behind…');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.text('Near you the second guy rides Mira.');
  if (((s as any).horny_boyB ?? 0) >= 100) {
    scene.text('Suddenly the guy rudely pushes her off and setting himself on his knees, starts to masturbate in front of her face.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestCow2_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_1'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
      if (((s as any).huntsexa ?? 0) === 1) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
      }
      if (((s as any).huntsexa ?? 0) === 2) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
      }
      if (((s as any).huntsexa ?? 0) === 3) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
      }
    } else {
      scene.actions([
        { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
      ]);
    }
  }
  scene.build();
}

function enterForestDogSide2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  (s as any).pose = 1;
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside2_1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You lie on your side, <<$boydesc>> rubs up against your pussy…
  scene.text(`You lie on your side, ${((s as any).boydesc ?? 0)} rubs up against your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  scene.text('Right in front of you Mira is enthusiastically sucking the second guy.');
  if (((s as any).horny_boyB ?? 0) >= 100) {
    scene.text('Suddenly the guy pops his cock out of her mouth and starts to jerk off in front of her face.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_2'
    }
  } else {
    if (((s as any).horny_boyA ?? 0) < 100  &&  ((s as any).horny_boyB ?? 0) >= 100) {
      (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
      if (((s as any).huntsexa ?? 0) === 1) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
      }
      if (((s as any).huntsexa ?? 0) === 2) {
        // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
      }
      if (((s as any).huntsexa ?? 0) === 3) {
        // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
      }
    } else {
      scene.actions([
        { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
      ]);
    }
  }
  scene.build();
}

function enterForestOralCum2_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoralcum2_1.jpg');
  scene.text('You are on your knees before a guy, his cock in front of your face…');
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'bj_swallow_random');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  if (((s as any).horny_boyB ?? 0) < 100  &&  (!((s as any).boyB_cum ?? 0))) {
    (s as any).temp_ms = Math.floor(Math.random() * 2) + 1;
    if (((s as any).temp_ms ?? 0) === 1) {
      scene.text('Near you moaning <a href="exec:gt \'mitkasex\', \'forestDog_mira2_1\'">Mira</a>.');
    }
    if (((s as any).temp_ms ?? 0) === 2) {
      scene.text('Near you moaning <a href="exec:gt \'mitkasex\', \'forestCow_mira2_1\'">Mira</a>.');
    }
  } else {
    if (((s as any).horny_boyB ?? 0) >= 100  &&  (!((s as any).boyB_cum ?? 0))) {
      scene.text('Near you is on her knees with her mouth open is <a href="exec:gt \'mitkasex\', \'forestOralCum_mira2_1\'">Mira</a>.');
    } else {
      scene.text('Mira is sitting on the ground near you, waiting for you to finish, and occasionally throwing glances in your direction.');
    }
  }
  (s as any).protect = 0;
  if ((!((s as any).boyB_cum ?? 0))) {
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['mitkasex', 'forestRelax2'] },
    ]);
  } else {
    qspCall(s, 'arousal', 'end');
    (s as any).boyB_cum = 0;
    scene.actions([
      { label: 'Finish', goto: ['mitkasex', 'end'] },
    ]);
  }
  scene.build();
}

function enterForestRelax2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexrelax2.jpg');
  scene.text('You are done for now and watch as Mira contines to get fucked.');
  if (((s as any).horny_boyB ?? 0) < 100) {
    (s as any).temp_ms = Math.floor(Math.random() * 2) + 1;
    if (((s as any).temp_ms ?? 0) === 1) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestDog_mira2_1'
    }
    if (((s as any).temp_ms ?? 0) === 2) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestCow_mira2_1'
    }
  } else {
    scene.actions([
      { label: 'Watch', goto: ['mitkasex', 'forestOralCum_mira2_1'] },
    ]);
  }
  scene.build();
}

function enterForestSide2_2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside2_2.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You lie on your side, <<$boydesc>> rubs up against your pussy…
  scene.text(`You lie on your side, ${((s as any).boydesc ?? 0)} rubs up against your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).horny_boyA ?? 0) < 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you on her knees with her mouth open is <a href="exec:gt \'mitkasex\', \'forestOralCum_mira2_1\'">Mira</a>.');
  }
  if (((s as any).horny_boyA ?? 0) >= 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you the second guy cums straight into Mira\'s wide open mouth.');
  }
  if (((s as any).boyB_cum ?? 0) === 1) {
    scene.text('Mira is sitting on the ground near you, waiting for you to finish, and occasionally throwing glances in your direction.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).boyB_cum = 1;
  if (((s as any).horny_boyA ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
    ]);
  }
  scene.build();
}

function enterForestSide2_3(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside2_3.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: You lie on your side, <<$boydesc>> rubs up against your pussy…
  scene.text(`You lie on your side, ${((s as any).boydesc ?? 0)} rubs up against your pussy…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).horny_boyA ?? 0) < 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you on her knees with her mouth open is <a href="exec:gt \'mitkasex\', \'forestOralCum_mira2_1\'">Mira</a>.');
  }
  if (((s as any).horny_boyA ?? 0) >= 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you the second guy cums straight into Mira\'s wide open mouth.');
  }
  if (((s as any).boyB_cum ?? 0) === 1) {
    scene.text('Mira is sitting on the ground near you, waiting for you to finish, and occasionally throwing glances in your direction.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).boyB_cum = 1;
  if (((s as any).horny_boyA ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
    ]);
  }
  scene.build();
}

function enterForestCow2_1(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  if (((s as any).pcs_vag ?? 0) <= 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (20);
  }
  if (((s as any).pcs_vag ?? 0) > 25) {
    (s as any).horny_boyA = ((s as any).horny_boyA ?? 0) + (10);
  }
  (s as any).pose = 1;
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow2_1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> lies down you, throwing a leg across his body while he gets on top ...
  scene.text(`${((s as any).boydesc ?? 0)} lies down you, throwing a leg across his body while he gets on top of you…`);
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  if (((s as any).horny_boyA ?? 0) < 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you on her knees with her mouth open is <a href="exec:gt \'mitkasex\', \'forestOralCum_mira2_1\'">Mira</a>.');
  }
  if (((s as any).horny_boyA ?? 0) >= 100  &&  (!((s as any).boyB_cum ?? 0))) {
    scene.text('Near you the second guy cums straight into Mira\'s wide open mouth.');
  }
  if (((s as any).boyB_cum ?? 0) === 1) {
    scene.text('Mira is sitting on the ground near you, waiting for you to finish, and occasionally throwing glances in your direction.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).boyB_cum = 1;
  if (((s as any).horny_boyA ?? 0) < 100) {
    (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestOralCum2_1'] },
    ]);
  }
  scene.build();
}

function enterForestOralMira2_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral_mira2_1.\'+rand(1, 2)+\'.jpg');
  scene.text('Stealing a gaze to the side, you see Mira, diligently sucking the second guy.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestCow2_1'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestDog2_2'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestOralCum2_1'] },
    ]);
  }
  scene.build();
}

function enterForestRelax3(s: GameState, scene: SceneBuilder): void {
  (s as any).boyB_cum = 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoralcum_mira2_1.jpg');
  scene.text('Looking towards Mira, you see the guy cum in her open mouth while she kneels before him.');
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyA ?? 0) < 100) {
    // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
    (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_2'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Lie on your side': gt 'mitkasex', 'forestSide2_3'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Sit down': gt 'mitkasex', 'forestCow2_1'
    }
  } else {
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['mitkasex', 'end'] },
    ]);
  }
  scene.build();
}

function enterForestDogMira2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow_mira2_1.\'+rand(1, 2)+\'.jpg');
  scene.text('Mira moaning loadly rides on the dick of the second guy.');
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyB ?? 0) >= 100) {
    scene.text('Suddenly the guy grabs Mira by the hair and setting himself on his knees, starts to masturbate in front of her face.');
  }
  if (((s as any).horny_boyB ?? 0) < 100) {
    scene.actions([
      { label: 'Continue', goto: ['mitkasex', 'forestRelax3'] },
    ]);
  } else {
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestOralCum_mira2_1'] },
    ]);
  }
  scene.build();
}

function enterForestCowMira2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] < 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (20);
  }
  if (((s as any).MiraVars ?? 0)?.['Mitka_fucks'] >= 50) {
    (s as any).horny_boyB = ((s as any).horny_boyB ?? 0) + (10);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog_mira2_1.\'+rand(1, 2)+\'.jpg');
  scene.text('You see Mira bending over. She is moaning slightly and swinging to the beat of the thrusts of the second guy.');
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).horny_boyB ?? 0) >= 100) {
    scene.text('Suddenly the guy rudely pushes her off and setting himself on his knees, starts to masturbate in front of the face.');
  }
  if (((s as any).horny_boyB ?? 0) < 100) {
    scene.actions([
      { label: 'Continue', goto: ['mitkasex', 'forestRelax3'] },
    ]);
  } else {
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Make him cum', goto: ['mitkasex', 'forestOralCum_mira2_1'] },
    ]);
  }
  scene.build();
}

function enterForestRelax(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexrelax1.\'+rand(1, 2)+\'.jpg');
  scene.text('You sit on the ground, and relax for a moment…');
  (s as any).mirarand = Math.floor(Math.random() * 2) + 1;
  if (((s as any).mirarand ?? 0) === 1  &&  ((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    scene.text('Not far from you three guys gangbang <a href="exec:gt \'mitkasex\', \'forestDP_mira3\'">Mira</a>.');
  }
  if (((s as any).mirarand ?? 0) === 2  &&  ((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    scene.text('Not far from you three guys gangbang <a href="exec:gt \'mitkasex\', \'forestCow_mira3\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
  } else {
    scene.actions([
      { label: 'Look at Mira', goto: ['mitkasex', 'forestCum_mira3'] },
    ]);
  }
  scene.build();
}

function enterForestOral3_3(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral3.\'+rand(5, 6)+\'.jpg');
  scene.text('You kneel in front of the boys and suck their dicks, taking turns and paying attention to each one…');
  qspCall(s, 'boyStat', 'A63');
  qspCall(s, 'oral', 'start');
  qspCall(s, 'boyStat', 'A61');
  qspCall(s, 'oral', 'start');
  qspCall(s, 'boyStat', 'A62');
  qspCall(s, 'oral', 'start');
  scene.text('Near you sitting on the ground is <a href="exec:gt \'mitkasex\', \'forestRelax_mira\'">Mira</a>.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestCum3_3'] },
    ]);
  }
  scene.build();
}

function enterForestOral3_2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral3.\'+rand(3, 4)+\'.jpg');
  scene.text('You kneel in front of the boys and suck their dicks, taking turns and paying attention to each one…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'oral', 'start');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'oral', 'start');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'oral', 'start');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).mirarand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).mirarand ?? 0) === 1) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestOral_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 2) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestThroat_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 3) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestCow_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 4) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogV_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 5) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogA_mira1\'">Mira</a> moaning nearby.');
    }
  } else {
    scene.text('Near you is <a href="exec:gt \'mitkasex\', \'forestCum_mira1\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestOral3_1(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral3.\'+rand(1, 2)+\'.jpg');
  scene.text('You are on your knees before a guy, his cock in front of your face…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A61');
      qspCall(s, 'oral', 'start');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'oral', 'start');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).mirarand = Math.floor(Math.random() * 4) + 1;
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).mirarand ?? 0) === 1) {
      scene.text('Nearby you hear a loud moan from <a href="exec:gt \'mitkasex\', \'forestCow_mira2\'">Mira</a>.');
    }
    if (((s as any).mirarand ?? 0) === 2) {
      scene.text('Nearby you hear a loud moan from <a href="exec:gt \'mitkasex\', \'forestSide_mira2\'">Mira</a>.');
    }
    if (((s as any).mirarand ?? 0) === 3) {
      scene.text('Nearby you hear a loud moan from <a href="exec:gt \'mitkasex\', \'forestMis_mira2\'">Mira</a>.');
    }
    if (((s as any).mirarand ?? 0) === 4) {
      scene.text('Nearby you hear a loud moan from <a href="exec:gt \'mitkasex\', \'forestDog_mira2\'">Mira</a>.');
    }
  } else {
    scene.text('Near you is <a href="exec:gt \'mitkasex\', \'forestCum_mira2\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck on', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestVag3(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexvag3.\'+rand(1, 2)+\'.jpg');
  scene.text('You lie on the ground. One guy perched between your legs and the second member brings his cock to your lips…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickA ?? 0) > 0) {
      scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    }
    if ((!((s as any).boyBsex ?? 0))) {
      (s as any).boyBsex = 1;
    }
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
        scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if ((!((s as any).boyAsex ?? 0))) {
        (s as any).boyAsex = 1;
      }
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'dinsex', 'boy_puts_condom');
      qspCall(s, 'dinsex', 'vaginal_sex', 10);
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
          scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        if ((!((s as any).boyCsex ?? 0))) {
          (s as any).boyCsex = 1;
        }
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'dinsex', 'boy_puts_condom');
        qspCall(s, 'dinsex', 'vaginal_sex', 10);
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).mirarand = Math.floor(Math.random() * 5) + 1;
  (s as any).mirarand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).mirarand ?? 0) === 1) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestOral_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 2) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestThroat_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 3) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestCow_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 4) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogV_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 5) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogA_mira1\'">Mira</a> moaning nearby.');
    }
  } else {
    scene.text('Near you is <a href="exec:gt \'mitkasex\', \'forestCum_mira1\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestAnal3_3(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexanal3.\'+rand(5, 6)+\'.jpg');
  scene.text('You bend over in front of the boys. One moves to penetrate your ass while the others shove their dicks in your face.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A62');
    qspCall(s, 'oral', 'start');
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
      scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    }
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickC ?? 0) > 0) {
      scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    }
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickA ?? 0) > 0) {
      scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    }
    if ((!((s as any).boyBsexa ?? 0))) {
      (s as any).boyBsexa = 1;
    }
    // TODO-QSP: gs 'boyStat', 'A61' & dirty_dickB += 1
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A61');
      qspCall(s, 'oral', 'start');
      if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
        // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
        scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickB ?? 0) > 0) {
        scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
        scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if ((!((s as any).boyAsexa ?? 0))) {
        (s as any).boyAsexa = 1;
      }
      // TODO-QSP: gs 'boyStat', 'A63' & dirty_dickA += 1
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A63');
        qspCall(s, 'oral', 'start');
        if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickA ?? 0) > 0) {
          scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        qspCall(s, 'boyStat', 'A61');
        if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
          scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        qspCall(s, 'oral', 'start');
        if ((!((s as any).boyCsexa ?? 0))) {
          (s as any).boyCsexa = 1;
        }
        // TODO-QSP: gs 'boyStat', 'A62' & dirty_dickC += 1
        qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  scene.text('Near you sitting on the ground is <a href="exec:gt \'mitkasex\', \'forestRelax_mira\'">Mira</a>.');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestCum3_3'] },
    ]);
  }
  scene.build();
}

function enterForestAnal3_2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexanal3.\'+rand(3, 4)+\'.jpg');
  scene.text('You bend over in front of the boys. One moves to penetrate your ass while the others shove their dicks in your face.');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickA ?? 0) > 0) {
      scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
      qspCall(s, 'mood', 'lower', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    }
    if ((!((s as any).boyBsexa ?? 0))) {
      (s as any).boyBsexa = 1;
    }
    // TODO-QSP: gs 'boyStat', 'A61' & dirty_dickB += 1
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'oral', 'start');
      if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
        scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickC ?? 0) > 0) {
        scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      }
      if ((!((s as any).boyAsexa ?? 0))) {
        (s as any).boyAsexa = 1;
      }
      // TODO-QSP: gs 'boyStat', 'A63' & dirty_dickA += 1
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'oral', 'start');
        if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
          scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "mitkasex" })}`);
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).Mira_enema ?? 0) === 0  &&  ((s as any).dirty_dickB ?? 0) > 0) {
          scene.text('The member smells quite unpleasant and tastes of feces. You should have done an enema. Maybe remember that for next time?');
          qspCall(s, 'mood', 'lower', 'small');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
        }
        if ((!((s as any).boyCsexa ?? 0))) {
          (s as any).boyCsexa = 1;
        }
        // TODO-QSP: gs 'boyStat', 'A62' & dirty_dickC += 1
        qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).mirarand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).mirarand ?? 0) === 1) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestOral_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 2) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestThroat_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 3) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestCow_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 4) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogV_mira1\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 5) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDogA_mira1\'">Mira</a> moaning nearby.');
    }
  } else {
    scene.text('Near you is <a href="exec:gt \'mitkasex\', \'forestCum_mira1\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestAnal3_1(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ms = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  (s as any).mitboysex = ((s as any).mitboysex ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexanal3.\'+rand(1, 2)+\'.jpg');
  scene.text('You bend over as the guys jockey to fuck your ass first…');
  if (((s as any).temp_ms ?? 0) === 1) {
    if ((!((s as any).boyAsexa ?? 0))) {
      (s as any).boyAsexa = 1;
    }
    // TODO-QSP: gs 'boyStat', 'A63' & dirty_dickA += 1
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      if ((!((s as any).boyBsexa ?? 0))) {
        (s as any).boyBsexa = 1;
      }
      // TODO-QSP: gs 'boyStat', 'A61' & dirty_dickB += 1
      qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        if ((!((s as any).boyCsexa ?? 0))) {
          (s as any).boyCsexa = 1;
        }
        // TODO-QSP: gs 'boyStat', 'A62' & dirty_dickC += 1
        qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
      }
    }
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).mirarand = Math.floor(Math.random() * 4) + 1;
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).mirarand ?? 0) === 1) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestCow_mira2\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 2) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestSide_mira2\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 3) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestMis_mira2\'">Mira</a> moaning nearby.');
    }
    if (((s as any).mirarand ?? 0) === 4) {
      scene.text('You hear <a href="exec:gt \'mitkasex\', \'forestDog_mira2\'">Mira</a> moaning nearby.');
    }
  } else {
    scene.text('Near you is <a href="exec:gt \'mitkasex\', \'forestCum_mira2\'">Mira</a>.');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Kneel', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestCum3_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).mitboysex = 0;
  (s as any).protect = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum3.3.jpg');
  scene.text('You kneel in front of the boys and suck their dicks, taking turns and paying attention to each one…');
  qspCall(s, 'boyStat', 'A63');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
  } else {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'boyStat', 'A61');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
  } else {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'boyStat', 'A62');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
  } else {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
  }
  qspCall(s, 'oral', 'start');
  scene.text('Soon, unable to withstand your skill the guys start to finish. Jets of sperm hit you in the mouth and face. There was so much sperm your mouth can\'t hold it all and it runs down your chin and onto your breasts. The guys have you clean their dicks before going about their business. You are left alone to clean up.');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestCum3_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).mitboysex = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum3.2.jpg');
  scene.text('You kneel in front of the boys and suck their dicks, taking turns and paying attention to each one…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
    } else {
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
    }
    qspCall(s, 'oral', 'start');
    qspCall(s, 'boyStat', 'A61');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
    if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
      qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
    } else {
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
    }
    qspCall(s, 'oral', 'start');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
      qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
      if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
        qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
      } else {
        qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
      }
      qspCall(s, 'oral', 'start');
      qspCall(s, 'boyStat', 'A63');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
      qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
      if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
        qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
      } else {
        qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
      }
      qspCall(s, 'oral', 'start');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A61');
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
        if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
          qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
        } else {
          qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
        }
        qspCall(s, 'oral', 'start');
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 666);
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 666);
        if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
          qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1, '', '', 666);
        } else {
          qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1, '', '', 666);
        }
        qspCall(s, 'oral', 'start');
      }
    }
  }
  scene.text('Soon, unable to withstand your skill the guys start to finish. Jets of sperm hit you in the mouth and face. There was so much sperm your mouth can\'t hold it all and it runs down your chin and onto your breasts. The guys have you clean their dicks before going about their business. You are left alone to clean up.');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestCum3_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).mitboysex = 0;
  (s as any).protect = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum3.1.jpg');
  scene.text('You are on your knees before a guy, his cock in front of your face…');
  if (((s as any).temp_ms ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A63');
    qspCall(s, 'oral', 'start');
    qspCall(s, 'dinsex', 'bj_swallow_random');
  } else {
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A61');
      qspCall(s, 'oral', 'start');
      qspCall(s, 'dinsex', 'bj_swallow_random');
    } else {
      if (((s as any).temp_ms ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'oral', 'start');
        qspCall(s, 'dinsex', 'bj_swallow_random');
      }
    }
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterForestRelaxMira(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexrelax_mira\'+rand(1, 2)+\'.jpg');
  scene.text('Mira is sitting next to you while the boys are not up to it, watching as you fuck…');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_3'] },
    ]);
  }
  scene.build();
}

function enterForestDPMira3(s: GameState, scene: SceneBuilder): void {
  (s as any).mirarand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).mirarand ?? 0) === 1) {
    (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  }
  if (((s as any).mirarand ?? 0) === 2) {
    (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  }
  if (((s as any).mirarand ?? 0) === 3) {
    (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdp_mira3.jpg');
  scene.text('You see Mira as the boys pull Mira onto their three members, filling all of her holes. Mira is only moaning and breathing hard as she gets fucked from all angles.');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
  }
  scene.build();
}

function enterForestCowMira3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow_mira3.jpg');
  scene.text('You look at Mira, moaning loudly, jumping on the penis of one boy and serving the other two with her mouth.');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
  }
  scene.build();
}

function enterForestCowMira2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow_mira2.\'+rand(1, 3)+\'.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, riding on the penis of one boy at the same time sucking a second cock.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestSideMira2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexside_mira2.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, while lying on her side. She fucks one of the guys while she sucks second.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestMisMira2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexmis_mira2.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, while lying on her back. She fucks one of the guys while she sucks second.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestDogMira2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdog_mira2.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, while bending over. She fucks one of the guys while she sucks second.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_1'] },
    ]);
  }
  scene.build();
}

function enterForestCowMira1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcow_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, riding on the penis of one boy.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestDogVMira1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdogv_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, bending over while one guy hammers her pussy.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestDogAMira1(s: GameState, scene: SceneBuilder): void {
  (s as any).mirarand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).mirarand ?? 0) === 1) {
    (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  }
  if (((s as any).mirarand ?? 0) === 2) {
    (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  }
  if (((s as any).mirarand ?? 0) === 3) {
    (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexdoga_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, bending over while one guy hammers her ass.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestThroatMira1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexthroat_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, while deepthroating a cock.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestOralMira1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexoral_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, while sucking a cock.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  if (((s as any).mitboysex ?? 0) < ((s as any).mitboysexrand ?? 0)) {
    if (((s as any).huntsexa ?? 0) === 1) {
      // TODO-QSP: act 'Lie on your back': gt 'mitkasex', 'forestVag3'
    }
    if (((s as any).huntsexa ?? 0) === 2) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_1'
    }
    if (((s as any).huntsexa ?? 0) === 3) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_2'
    }
    if (((s as any).huntsexa ?? 0) === 4) {
      // TODO-QSP: act 'Doggy': gt 'mitkasex', 'forestAnal3_3'
    }
    if (((s as any).huntsexa ?? 0) === 5) {
      // TODO-QSP: act 'Watch': gt 'mitkasex', 'forestRelax'
    }
  } else {
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
    ]);
  }
  scene.build();
}

function enterForestCumMira1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum_mira1.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, as she plays with the cum covering her face and body.');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
  ]);
  scene.build();
}

function enterForestCumMira2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum_mira2.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, as she plays with the cum covering her face and body.');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "mitkasex" })}`);
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck', goto: ['mitkasex', 'forestCum3_2'] },
  ]);
  scene.build();
}

function enterForestCumMira3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsexcum_mira3.jpg');
  scene.text('Turning your head to look at Mira, you can see her, moaning loudly, as she plays with the cum covering her face and body.');
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', goto: ['mitkasex', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'forest1':
      enterForest1(s, scene);
      break;
    case 'forest2':
      enterForest2(s, scene);
      break;
    case 'forest3':
      enterForest3(s, scene);
      break;
    case 'gad1':
      enterGad1(s, scene);
      break;
    case 'gad2':
      enterGad2(s, scene);
      break;
    case 'gadOralCum2_1':
      enterGadOralCum2_1(s, scene);
      break;
    case 'gadOralCum2_2':
      enterGadOralCum2_2(s, scene);
      break;
    case 'gadHandsCum2':
      enterGadHandsCum2(s, scene);
      break;
    case 'gadDog2':
      enterGadDog2(s, scene);
      break;
    case 'gadDogCum2_1':
      enterGadDogCum2_1(s, scene);
      break;
    case 'gadDogCum2_2':
      enterGadDogCum2_2(s, scene);
      break;
    case 'gadCow2':
      enterGadCow2(s, scene);
      break;
    case 'gadCowCum2_1':
      enterGadCowCum2_1(s, scene);
      break;
    case 'gadCowCum2_2':
      enterGadCowCum2_2(s, scene);
      break;
    case 'gadStan':
      enterGadStan(s, scene);
      break;
    case 'gadStanCum2_1':
      enterGadStanCum2_1(s, scene);
      break;
    case 'gadStanCum2_2':
      enterGadStanCum2_2(s, scene);
      break;
    case 'gadOralCum1':
      enterGadOralCum1(s, scene);
      break;
    case 'gadSideVag1':
      enterGadSideVag1(s, scene);
      break;
    case 'gadSideVagCum1':
      enterGadSideVagCum1(s, scene);
      break;
    case 'gadMisVag1':
      enterGadMisVag1(s, scene);
      break;
    case 'gadDogVag1':
      enterGadDogVag1(s, scene);
      break;
    case 'gadCowVag1':
      enterGadCowVag1(s, scene);
      break;
    case 'gadCowVagCum1':
      enterGadCowVagCum1(s, scene);
      break;
    case 'gadDogAnal1':
      enterGadDogAnal1(s, scene);
      break;
    case 'gadDogAnalCum1':
      enterGadDogAnalCum1(s, scene);
      break;
    case 'gadCowAnal1':
      enterGadCowAnal1(s, scene);
      break;
    case 'gadHandsCum1':
      enterGadHandsCum1(s, scene);
      break;
    case 'forestOral1_1':
      enterForestOral1_1(s, scene);
      break;
    case 'forestOral1_2':
      enterForestOral1_2(s, scene);
      break;
    case 'forestOral1_3':
      enterForestOral1_3(s, scene);
      break;
    case 'forestOralCum1_1':
      enterForestOralCum1_1(s, scene);
      break;
    case 'forestSide1_1':
      enterForestSide1_1(s, scene);
      break;
    case 'forestSideCum1_1':
      enterForestSideCum1_1(s, scene);
      break;
    case 'forestSide1_2':
      enterForestSide1_2(s, scene);
      break;
    case 'forestCow1_1':
      enterForestCow1_1(s, scene);
      break;
    case 'forestSideCum1_2':
      enterForestSideCum1_2(s, scene);
      break;
    case 'forestCow1_2':
      enterForestCow1_2(s, scene);
      break;
    case 'forestCowKiss1_1':
      enterForestCowKiss1_1(s, scene);
      break;
    case 'forestCowCum1_2':
      enterForestCowCum1_2(s, scene);
      break;
    case 'forestCowOral1_1':
      enterForestCowOral1_1(s, scene);
      break;
    case 'forestDog1_1':
      enterForestDog1_1(s, scene);
      break;
    case 'forestDogCum1_1':
      enterForestDogCum1_1(s, scene);
      break;
    case 'forestDog1_2':
      enterForestDog1_2(s, scene);
      break;
    case 'forestDogCum1_2':
      enterForestDogCum1_2(s, scene);
      break;
    case 'forestDog1_3':
      enterForestDog1_3(s, scene);
      break;
    case 'forestDogCum1_3':
      enterForestDogCum1_3(s, scene);
      break;
    case 'forestOral2_1':
      enterForestOral2_1(s, scene);
      break;
    case 'forestDog2_1':
      enterForestDog2_1(s, scene);
      break;
    case 'forestDog2_2':
      enterForestDog2_2(s, scene);
      break;
    case 'forestDogSide2_1':
      enterForestDogSide2_1(s, scene);
      break;
    case 'forestOralCum2_1':
      enterForestOralCum2_1(s, scene);
      break;
    case 'forestRelax2':
      enterForestRelax2(s, scene);
      break;
    case 'forestSide2_2':
      enterForestSide2_2(s, scene);
      break;
    case 'forestSide2_3':
      enterForestSide2_3(s, scene);
      break;
    case 'forestCow2_1':
      enterForestCow2_1(s, scene);
      break;
    case 'forestOral_mira2_1':
      enterForestOralMira2_1(s, scene);
      break;
    case 'forestRelax3':
      enterForestRelax3(s, scene);
      break;
    case 'forestDog_mira2_1':
      enterForestDogMira2_1(s, scene);
      break;
    case 'forestCow_mira2_1':
      enterForestCowMira2_1(s, scene);
      break;
    case 'forestRelax':
      enterForestRelax(s, scene);
      break;
    case 'forestOral3_3':
      enterForestOral3_3(s, scene);
      break;
    case 'forestOral3_2':
      enterForestOral3_2(s, scene);
      break;
    case 'forestOral3_1':
      enterForestOral3_1(s, scene);
      break;
    case 'forestVag3':
      enterForestVag3(s, scene);
      break;
    case 'forestAnal3_3':
      enterForestAnal3_3(s, scene);
      break;
    case 'forestAnal3_2':
      enterForestAnal3_2(s, scene);
      break;
    case 'forestAnal3_1':
      enterForestAnal3_1(s, scene);
      break;
    case 'forestCum3_3':
      enterForestCum3_3(s, scene);
      break;
    case 'forestCum3_2':
      enterForestCum3_2(s, scene);
      break;
    case 'forestCum3_1':
      enterForestCum3_1(s, scene);
      break;
    case 'forestRelax_mira':
      enterForestRelaxMira(s, scene);
      break;
    case 'forestDP_mira3':
      enterForestDPMira3(s, scene);
      break;
    case 'forestCow_mira3':
      enterForestCowMira3(s, scene);
      break;
    case 'forestCow_mira2':
      enterForestCowMira2(s, scene);
      break;
    case 'forestSide_mira2':
      enterForestSideMira2(s, scene);
      break;
    case 'forestMis_mira2':
      enterForestMisMira2(s, scene);
      break;
    case 'forestDog_mira2':
      enterForestDogMira2(s, scene);
      break;
    case 'forestCow_mira1':
      enterForestCowMira1(s, scene);
      break;
    case 'forestDogV_mira1':
      enterForestDogVMira1(s, scene);
      break;
    case 'forestDogA_mira1':
      enterForestDogAMira1(s, scene);
      break;
    case 'forestThroat_mira1':
      enterForestThroatMira1(s, scene);
      break;
    case 'forestOral_mira1':
      enterForestOralMira1(s, scene);
      break;
    case 'forestCum_mira1':
      enterForestCumMira1(s, scene);
      break;
    case 'forestCum_mira2':
      enterForestCumMira2(s, scene);
      break;
    case 'forestCum_mira3':
      enterForestCumMira3(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mitkasex: LocationDef = {
  name: 'mitkasex',
  title: 'Entering deeper into the thicket the guys come up to you and',
  region: 'other',
  enter: enter,
};
