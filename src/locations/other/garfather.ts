import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).fatherAge = ((s as any).year ?? 0) - (((((s as any).npc_dob ?? {})?.['A28']) - (((s as any).npc_dob ?? {})?.['A28'] % 10000)) / 10000);
  qspCall(s, 'stat', '');
  qspCall(s, 'dinSex', '');
  qspCall(s, 'family_schedule', '');
  scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
  scene.img('images/characters/shared/headshots_main/big28.jpg');
  // TODO-QSP: dynamic text: Your stepfather is a greying, slightly flabby man working as a truck driver. He ...
  scene.text(`Your stepfather is a greying, slightly flabby man working as a truck driver. He is ${((s as any).fatherAge ?? 0)} years old. Your mother divorced your biological father and married Vladimir when you were only one year old. You've never seen your biological father since their divorce, and as such you have no real memory of him.`);
  qspCall(s, 'father', 'fatherRep');
  if (((s as any).locat ?? 0)?.['Stepdad'] !== 9) {
    scene.actions([{ label: 'Continue', goto: ['gargazel', ''] }]);
  }
  if (((s as any).pcs_horny ?? 0) > 50  &&  ((s as any).npc_had_sex ?? 0)?.['A28']) {
    qspCall(s, 'willpower', 'sex', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Seduce your stepfather [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Seduce your stepfather [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'boyStat', 'A28');
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.pre${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('You walk up to the Gazelle and pick up a sponge. Bending slightly forwards, you begin washing the car and simultaneously putting your ass on display for your stepfather.');
    scene.text('"- Oh…" - Stepfather did not expect this from you, but his involuntary exhalation and kindled eyes tell you he is enjoying it very much.');
    scene.text('Your stepfather walks up behind you and puts his hands on your ass. He leisurely begins to knead your butt.');
    qspCall(s, 'arousal', 'foreplay', 3, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/blowjob/bimbo.knees${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('You fall on your knees in front of your stepfather and place the palm of your hand on his crotch. You can feel his erection through the fabric of his jeans, and begin to caress him. After a while you unzip his pants and pull out his cock, taking a firm grasp on it with one hand.');
    qspCall(s, 'arousal', 'hj', 3, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take his dick in your mouth', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.0,${Math.floor(Math.random() * 5) + 0}.jpg`);
    scene.text('Your stepfather opens the passenger side door of the Gazelle, and you sit down on the seat. He places a hand on your head and guides his dick towards your mouth.');
    scene.text('You leisurely lick your stepfather\'s dick, caress his balls, and then take his cock in your mouth. Soon the cock began to throb, giving signs of an early end.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off and swallow his sperm', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A28'] < 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A28', 2);
    }
    (s as any).fatherSuck = ((s as any).fatherSuck ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'A28', 1);
    scene.img(`images/shared/sex/cum/mouth/cum1,${Math.floor(Math.random() * 11) + 0}.mp4`);
    // TODO-QSP: dynamic text: You continue to suck your stepfather's dick as it continues throbbing. Suddenly,...
    scene.text(`You continue to suck your stepfather's dick as it continues throbbing. Suddenly, he arches his back and you feel cum begin to pour into your mouth. Although you try your best, the amount of cum flowing from your stepfathers dick is simply too much for you, and some of it instead flows out of your mouth and down your chin. Soon your ${((s as any).boydesc ?? 0)} finishes and you pull his cock out of your sperm-smelling mouth. You can feel the taste of sperm in your mouth, and your ${((s as any).pc_desc ?? 0)?.['lips']} lips are wet with cum.`);
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
    ]);
  } },
      { label: 'Take his load on your face', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A28'] < 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A28', 2);
    }
    (s as any).fatherSuck = ((s as any).fatherSuck ?? 0) + (1);
    (s as any).sexpartkno = 1;
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    (s as any).gar_rand1 = Math.floor(Math.random() * 101) + 0;
    if (((s as any).gar_rand1 ?? 0) < 49) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/cum/facial/facial0,<<rand(0,8)...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/shared/sex/cum/facial/facial0,${Math.floor(Math.random() * 9) + 0}.jpg"></center>`);
    }
    if (((s as any).gar_rand1 ?? 0) >= 50) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/cum/facial/facial0,<<rand(0,8)...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/shared/sex/cum/facial/facial0,${Math.floor(Math.random() * 9) + 0}.jpg"></center>`);
    }
    scene.text('You stop sucking on your stepfather\'s cock just as he reaches orgasm, and a jet of sperm immediately hits you in the face. You squeeze your eyes shut for fear of getting cum in your eyes and feel another jet of hot sperm land on your face.');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'incest');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Bend over, leaning against the Gazelle', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.1,${Math.floor(Math.random() * 3) + 0}.jpg`);
    scene.text('Your stepfather grabs you and pulls you up from your knees, turning you to face the Gazelle. You plant your hands on the car, and arch your back to give him easier access to your ass and pussy. Once you\'re in position, he begins caressing your pussy lining up his dick against your hole.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Wait I am still a virgin', handler: (st: GameState) => {
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinSex', 'analsex', 10, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).sexpartkno = 1;
    if (((s as any).npc_rel ?? 0)?.['A28'] < 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A28', 3);
    }
    if ((!((s as any).fathersex ?? 0))) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).fathersex = ((s as any).fathersex ?? 0) + (1);
    scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.cum1,0.jpg');
    scene.text('You feel his dick pushing into your ass.');
    if ((!((s as any).protect ?? 0))) {
      scene.text('After a thorough fucking, you feel your stepfather\'s cock begin to throb within you. Your stepfather\'s body spasms, his cock filling your ass with his sperm.');
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'incest');
      (s as any).spafinloc = 3;
      qspCall(s, 'cum_manage', '');
    } else {
      scene.text('After a thorough fucking, you feel your stepfather\'s cock begin to throb within you. Your stepfather\'s body spasms, his cock filling the condom with his sperm.');
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'incest');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him take you', handler: (st: GameState) => {
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinSex', 'vaginal_sex', 10, 'sub', 'incest');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).sexpartkno = 1;
    if (((s as any).npc_rel ?? 0)?.['A28'] < 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A28', 3);
    }
    if ((!((s as any).fathersex ?? 0))) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).fathersex = ((s as any).fathersex ?? 0) + (1);
    scene.img('images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.cum1,0.jpg');
    scene.text('You feel his dick pushing into your pussy.');
    if ((!((s as any).protect ?? 0))) {
      scene.text('After a thorough fucking, you feel your stepfather\'s cock begin to throb within you. Your stepfather\'s body spasms, his cock filling your pussy with his sperm.');
      qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'incest');
      (s as any).spafinloc = 0;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'cuminsidereact', 'your stepfather');
    } else {
      scene.text('After a thorough fucking, you feel your stepfather\'s cock begin to throb within you. Your stepfather\'s body spasms, his cock filling the condom with his sperm.');
      qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'incest');
      (s as any).spafinloc = 17;
      qspCall(s, 'cum_manage', '');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
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
    }
  }
  if (((s as any).fatherdrunk ?? 0)===1) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    // TODO-QSP: dynamic text: Your stepfather is a greying, slightly flabby man who works as a truck driver. H...
    scene.text(`Your stepfather is a greying, slightly flabby man who works as a truck driver. He is ${((s as any).fatherAge ?? 0)} years old. Your mother divorced your biological father and married Vladimir when you were only one year old. You've never seen your biological father since their divorce, and as such you have no real memory of him.`);
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).npc_rel ?? 0)?.['A28']<20) {
      // TODO-QSP: dynamic text: You approach your stepfather and uncle Misha and try to ask if you can join them...
      scene.text(`You approach your stepfather and uncle Misha and try to ask if you can join them, but your stepfather cuts you off before you can even finish your sentence. "${((s as any).pcs_nickname ?? 0)}, get out of here! This is a no bitch zone!" he shouts, laughing drunkenly as he waves you off. Uncle Misha finds your stepfather's degrading talk hilarious, and joins in. You're clearly not welcome in the garage.`);
      if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
        qspCall(s, 'willpower', 'misc', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Persist and ask if you can join them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Persist and ask if you can join them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('You try to get your stepfather to let you join them but he\'s equally persistent in telling you to get lost, being quite rude about it too. He really doesn\'t like you at all.');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Move away', goto: ['gargazel', ''] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A28']>=20  &&  ((s as any).npc_rel ?? 0)?.['A28']<40) {
        // TODO-QSP: dynamic text: You ask your stepfather if you can join them, but he'll have none of it. "<<$pcs...
        scene.text(`You ask your stepfather if you can join them, but he'll have none of it. "${((s as any).pcs_nickname ?? 0)}, isn't it past your bedtime? *Hic!* Shoo, go home! *Hic!*"`);
        if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
          qspCall(s, 'willpower', 'misc', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Try to persuade him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Try to persuade him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('You do your best, but your stepfather remains adamant and sends you home.');
    scene.actions([
      { label: 'Move away', goto: ['gargazel', ''] },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Move away', goto: ['gargazel', ''] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A28'] >=40) {
          if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) <= 60) {
            qspCall(s, 'dinfather', 'gardrunkchat');
          } else {
            if ((Math.floor(Math.random() * 3) + 0) > 0) {
              qspCall(s, 'dinfather', 'gardrunkchat');
            } else {
              scene.text('You relax and have some drinks with the guys, happy to just sit back and listen to the funny stories they exchange.');
              if (((s as any).npc_rel ?? 0)?.['A28'] < 40) {
                (s as any).FatherMolest = 1;
              } else {
                if (((s as any).npc_rel ?? 0)?.['A28'] < 60) {
                  (s as any).FatherMolest = Math.floor(Math.random() * 8) + 0;
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A28'] < 80) {
                    (s as any).FatherMolest = Math.floor(Math.random() * 4) + 0;
                  } else {
                    (s as any).FatherMolest = Math.floor(Math.random() * 2) + 0;
                  }
                }
              }
              if (((s as any).FatherMolest ?? 0) > 0) {
                qspCall(s, 'dinfather', 'gardrunkchat');
              } else {
                scene.text('You can\'t help but notice that uncle Misha is staring at you the whole time. You feel like he\'s not just undressing you in his mind, but that he\'s fucking you in all sorts of positions with reckless abandon.');
                if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).sosedknow ?? 0)===1) {
                  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Show him your breasts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Show him your breasts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim33.jpg');
    // TODO-QSP: dynamic text: In a moment of horniness, you slowly and teasingly bend over with a playful smil...
    scene.text(`In a moment of horniness, you slowly and teasingly bend over with a playful smile on your lips, providing uncle Misha with an amazing view of your ${((s as any).titsize ?? 0)} breasts.`);
    if ((((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) < 60) {
      (s as any).mishaLust = 2;
    }
    if ((((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) >= 60  &&  (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) < 120) {
      (s as any).mishaLust = Math.floor(Math.random() * 4) + 1;
    }
    if ((((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) >= 120  &&  (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) < 200) {
      (s as any).mishaLust = Math.floor(Math.random() * 2) + 1;
    }
    if ((((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A54']/10)) >= 200) {
      (s as any).mishaLust = 1;
    }
    if (((s as any).mishaLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Uncle Misha is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. You\'re happy he at least had enough decency to not clue in your stepfather, who happened to have his back turned against you.');
    } else {
      scene.text('You try to be discrete so your stepfather doesn\'t notice what you just did, and uncle Misha is quite flustered by the show you just gave him. He stumbles over his words while your stepfather talks to him about bumpers, as you smile mischievously and give uncle Misha a wink when your stepfather looks away.');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  }
                }
                if (((s as any).pcs_horny ?? 0) >= 60  ||  ((s as any).TouchedByFather ?? 0)===1) {
                  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Get their attention by dropping your bottle [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Get their attention by dropping your bottle [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('Even though you\'re horny and want the guys to notice you, they are paying more attention to their booze and their conversation. You can change that. Making sure it doesn\'t break, you \'accidentally\' drop your bottle and bend over to pick it up without bending your knees, giving them a spectacular view of your ass. You make a show of trying to reduce the spillage, wiping the floor while staying in your current position.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim35.jpg"></center>`);
        scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. Uncle Misha just has a smug grin on his face.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim34.jpg"></center>`);
        scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. Neither of them seem to have noticed you\'re not wearing panties.');
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim37.jpg');
        scene.text('You stick your ass out as much as you can, showing off your ass as much as you can. As you turn around, you notice that both your stepfather and uncle\'s gazes are glued to your ass. You simply smile and return to the table as they blubber and try to find excuses.');
        scene.actions([
          { label: 'Tease them some more', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim38.jpg');
    scene.text('You sit back down, still having their full attention. You try to excuse your behavior: "I\'m sorry guys, my clothes rub my pussy raw, bending over normally makes me feel very uncomfortable."');
    scene.actions([
      { label: 'Show them your pussy when they ask', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim39.jpg');
    // TODO-QSP: dynamic text: Uncle Misha is onto your act, and decides to push you to your limits. He smiles ...
    scene.text(`Uncle Misha is onto your act, and decides to push you to your limits. He smiles and says: "Oh really, ${((s as any).pcs_nickname ?? 0)}? Why don't you show us, maybe we can help you. Isn't that right, Vladimir?" Too turned on to decline, you pull your panties to the side and show them your pussy. It's really not all that sore, but your arousal has coloured it nice and red and it makes your pussy lips look a bit more puffy. The guys didn't think you would actually follow through with this, and are flabbergasted when you do.`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).pantyworntype ?? 0) === 'none') {
          qspCall(s, 'arousal', 'flash', 5);
          qspCall(s, 'arousal', 'flash', (-5));
          qspCall(s, 'arousal', 'vaginal_finger', (-5), 'exhibitionism', 'rough');
          scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim40.jpg');
          // TODO-QSP: dynamic text: Slightly disappointed, you move away from the table. Lost in your own thoughts, ...
          scene.text(`Slightly disappointed, you move away from the table. Lost in your own thoughts, you don't notice uncle Misha's legs and trip over them. Since you're not wearing any underwear, you're giving your uncle one hell of a show as you fall down onto your hands and knees. He immediately reaches out and runs his fingers over your wet pussy lips. He fingers you briefly, then returning his fingers to his nose to take a deep whiff. "You have nice holes, ${((s as any).pcs_nickname ?? 0)}, young and juicy…" Realizing he won't do anything more with your stepfather right there in the room, you get up and fix your clothes before sitting back down at the table.`);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'stat', '');
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  }
                }
                if (((s as any).pcs_horny ?? 0) >= 75  ||  ((s as any).TouchedByFather ?? 0)===1) {
                  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.text('You, pretending to not notice, slowly spread your legs while you talk with the guys.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim31.jpg"></center>`);
        scene.text('Trying to direct Uncle Misha\'s attention to something across the room, your stepfather signals you to cover yourself up with agitated hand movements.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim52.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather notices what you're trying to do. After he distracts uncle Misha...
        scene.text(`Your stepfather notices what you're trying to do. After he distracts uncle Misha for long enough, he turns to you and whispers: "${((s as any).pcs_nickname ?? 0)}, don't… just don't. You have no idea what you're getting yourself into." Intimidated by the gravity of his voice, you do as he says and cover up.`);
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather realizes what you're up to and pulls you closer to him, desire b...
        scene.text(`Your stepfather realizes what you're up to and pulls you closer to him, desire burning in his eyes. He runs his hands over your ass cheeks and thighs, petting and kneading them, and then pushes your panties to the side. Two of his fingers are exploring your sphincter, rubbing and teasing you. "Is there something you want, ${((s as any).pcs_nickname ?? 0)}?" he asks with a smug grin on his face, knowing he turned the tables on you. All you can do is whimper in response. He pulls away his hand just in time, before uncle Misha notices what's going on.`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim25.jpg"></center>`);
        scene.text('Noticing your stepfather\'s blush, you realize at least one person at the table noticed you\'re not wearing any underwear. When uncle Misha looks away, he quickly reaches for you and fingers your wet pussy. A needy moan escapes your lips as he pulls his hand way, and he quickly starts a conversation about wind shield wipers. Uncle Misha has no idea what just went down.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['gargazel', ''] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['gargazel', ''] },
    { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 10);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Your stepfather, Vladimir Mikhailovich Scriabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Your stepfather is sitting on a chair, twirling some kind of dirty car part in his hands. You sit down next to him on a nearby chair.');
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
      scene.text('You try to have a conversation with your stepfather, but he dislikes you too much to even pretend to be interested in what you have to say.');
      if (((s as any).sorryday ?? 0) !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'willpower', 'misc', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Apologize [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Apologize [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).sorryday = ((s as any).daystart ?? 0);
    // TODO-QSP: gs 'npc_relationship', 'modify_exact', 'A28', (pcs_intel/10) + (pcs_apprnc/20)
    qspCall(s, 'stat', '');
    scene.text('You profusely apologize to your stepfather, and after a while you can tell his attitude towards you is slightly milder.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 40) {
        scene.text('You try to have a conversation with your stepfather, but he\'s not really interested and barely has anything to contribute while you do all the talking.');
        if (((s as any).sorryday ?? 0) !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'willpower', 'misc', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Try to get on his good side [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Try to get on his good side [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).sorryday = ((s as any).daystart ?? 0);
    // TODO-QSP: gs 'npc_relationship', 'modify_exact', 'A28', (pcs_intel/10) + (pcs_apprnc/20)
    qspCall(s, 'stat', '');
    scene.text('You spend some time trying to get on your stepfather\'s good side, and you feel like he likes you a bit more after you show interest in the things he enjoys.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A28'] >= 40) {
          if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) <= 60) {
            qspCall(s, 'dinfather', 'garchat');
          } else {
            if ((Math.floor(Math.random() * 100) + 0) < 80) {
              qspCall(s, 'dinfather', 'garchat');
            } else {
              scene.text('You relax and share funny stories with your stepfather.');
              if (((s as any).npc_rel ?? 0)?.['A28'] < 40) {
                (s as any).FatherMolest = 1;
              } else {
                if (((s as any).npc_rel ?? 0)?.['A28'] < 60) {
                  (s as any).FatherMolest = Math.floor(Math.random() * 8) + 0;
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A28'] < 80) {
                    (s as any).FatherMolest = Math.floor(Math.random() * 4) + 0;
                  } else {
                    (s as any).FatherMolest = Math.floor(Math.random() * 2) + 0;
                  }
                }
              }
              if (((s as any).FatherMolest ?? 0) > 0) {
                qspCall(s, 'dinfather', 'garchat');
              } else {
                qspCall(s, 'dinfather', 'gar_act1');
                qspCall(s, 'dinfather', 'gar_act2');
                qspCall(s, 'dinfather', 'gar_act3');
              }
            }
          }
        }
      }
    }
  } },
    { label: 'Help', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 4) + 0);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Stepfather Vladimir Skryabin</b></center>');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Your stepfather is sitting on a chair, twirling some kind of dirty car part in his hands. You sit down next to him on a nearby chair.');
    qspCall(s, 'father', 'fatherRep');
    if (((s as any).npc_rel ?? 0)?.['A28'] < 20) {
      // TODO-QSP: dynamic text: You offer to help your stepfather out in the garage. He waves you away and grump...
      scene.text(`You offer to help your stepfather out in the garage. He waves you away and grumpily says "Get out of the way ${((s as any).pcs_nickname ?? 0)}, can't you see I'm busy? Besides, why would I want to be around you?"`);
      if (((s as any).sorryday ?? 0) !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'willpower', 'misc', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Apologize [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Apologize [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).sorryday = ((s as any).daystart ?? 0);
    // TODO-QSP: gs 'npc_relationship', 'modify_exact', 'A28', (pcs_intel/10) + (pcs_apprnc/20)
    qspCall(s, 'stat', '');
    scene.text('You profusely apologize to your stepfather, and after a while you can tell his attitude towards you is slightly milder.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A28'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A28'] < 40) {
        scene.text('You ask your stepfather if there\'s anything you can do to help him out in the garage, but he shrugs and shakes his head. "And what would you even do? Maybe you should go help your mother in the kitchen, that seems to suit your skill set better."');
        if (((s as any).sorryday ?? 0) !== ((s as any).daystart ?? 0)) {
          qspCall(s, 'willpower', 'misc', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Try to get on his good side [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Try to get on his good side [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).sorryday = ((s as any).daystart ?? 0);
    // TODO-QSP: gs 'npc_relationship', 'modify_exact', 'A28', (pcs_intel/10) + (pcs_apprnc/20)
    qspCall(s, 'stat', '');
    scene.text('You spend some time trying to get on your stepfather\'s good side, and you feel like he likes you a bit more after you show interest in the things he enjoys.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A28'] >= 40) {
          if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) <= 60) {
            qspCall(s, 'dinfather', 'garhelpchat');
          } else {
            if ((Math.floor(Math.random() * 100) + 0) < 80) {
              qspCall(s, 'dinfather', 'garhelpchat');
            } else {
              scene.text('You help your stepfather while he works on the Gazelle, handing him the bolts and tools he needs.');
              if (((s as any).npc_rel ?? 0)?.['A28'] < 40) {
                (s as any).FatherMolest = 1;
              } else {
                if (((s as any).npc_rel ?? 0)?.['A28'] < 60) {
                  (s as any).FatherMolest = Math.floor(Math.random() * 8) + 0;
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A28'] < 80) {
                    (s as any).FatherMolest = Math.floor(Math.random() * 4) + 0;
                  } else {
                    (s as any).FatherMolest = Math.floor(Math.random() * 2) + 0;
                  }
                }
              }
              if (((s as any).FatherMolest ?? 0) > 0  ||  (((s as any).pcs_horny ?? 0) < 30  &&  ((s as any).TouchedByFather ?? 0) === 0)) {
                qspCall(s, 'dinfather', 'garhelpchat');
              } else {
                if (((s as any).pcs_horny ?? 0) >= 60  ||  ((s as any).TouchedByFather ?? 0) === 1) {
                  qspCall(s, 'willpower', 'exhib', 'self');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('While pretending not to notice, you slowly spread your legs as you talk.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0) === 1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim31.jpg"></center>`);
        // TODO-QSP: dynamic text: You notice your stepfather's eyes darting down while you talk, and suddenly his ...
        scene.text(`You notice your stepfather's eyes darting down while you talk, and suddenly his face turns beet red. You look down and notice your skimpy underwear did a very poor job of hiding your pussy. Your stepfather is clearly embarrassed and surprised. He loudly clears his throat and says "${((s as any).pcs_nickname ?? 0)} don't do that, that's no way for a lady to behave. And go put some normal underwear on."`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim24.jpg"></center>`);
        // TODO-QSP: dynamic text: You notice your stepfather's eyes darting down while you talk, and suddenly his ...
        scene.text(`You notice your stepfather's eyes darting down while you talk, and suddenly his face turns beet red. "What's wrong?" you ask him innocently, knowing full well you're not wearing underwear and that he has a great view of your bare pussy. You're not fooling him though, and he doesn't appreciate your teasing in the slightest. "${((s as any).pcs_nickname ?? 0)}, stop that at once and go put some pants on."`);
      }
    }
    if (((s as any).fatherLust ?? 0) === 1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather realizes what you're up to and pulls you closer to him, desire b...
        scene.text(`Your stepfather realizes what you're up to and pulls you closer to him, desire burning in his eyes. He runs his hands over your ass cheeks and thighs, petting and kneading them, and then pushes your panties to the side. Two of his fingers are exploring your sphincter, rubbing and teasing you. "Is there something you want, ${((s as any).pcs_nickname ?? 0)}?" he asks with a smug grin on his face, knowing he turned the tables on you. All you can do is whimper in response.`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim26.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather gets a glimpse of your bare pussy and realizes what you're up to...
        scene.text(`Your stepfather gets a glimpse of your bare pussy and realizes what you're up to. "${((s as any).pcs_nickname ?? 0)}… are you not wearing panties? Get down on the ground and spread your legs for me, Daddy has to know now." You do as he says, lie down on the ground and spread your legs wide. He kneels in front of you, pulls your clothes to the side and rubs your pussy and thighs with his rough calloused hands. "Just as I thought, you little minx!" he says with a grin on his face. After he had his fun he helps you get back up and even helps you straighten your clothes, his hands lingering on your hips and ass a few seconds longer than is needed.`);
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  }
                }
                if (((s as any).pcs_horny ?? 0) >= 50  ||  ((s as any).TouchedByFather ?? 0) === 1) {
                  qspCall(s, 'willpower', 'exhib', 'self', 'easy');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: '\'Accidentally\' drop the wrench [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: '\'Accidentally\' drop the wrench [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.img(`images/locations/pavlovsk/resident/apartment/garage/father/sex/father.gar.pre${Math.floor(Math.random() * 6) + 0}.jpg`);
    scene.text('Feeling horny, you decide to tease your stepfather while you help him in the garage. You let the wrench slip out of your hand, the loud clattering of metal on the stone floor ringing throughout the garage. "Oops! I can be so clumsy sometimes…" you say with a smile, bending over to pick up the wrench without bending your knees. In this pose, you give your stepfather a great view of your ass.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim29.jpg"></center>`);
        scene.text('Even though your body is definitely having an effect on him your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel uncomfortable.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim27.jpg"></center>`);
        scene.text('The sight of your ass makes your stepfather uncomfortable. "Clumsy you say? It seems like that wrench is not the only thing you let slip today", he snarks, referring to your lack of underwear. His snarky tone and disapproving look make you feel a bit awkward.');
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim29.jpg"></center>`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim27.jpg"></center>`);
      }
      scene.text('Even though he did not expect this from you, you can tell by the spark in his eyes and his heavier breathing that he definitely likes what he sees.');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  }
                }
                scene.actions([
                  { label: 'Fondle your breasts as you talk', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flashlite', 5);
    qspCall(s, 'arousal', 'foreplay', (-5), 'incest', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim28.jpg');
    // TODO-QSP: dynamic text: In a moment of horniness, you slowly and teasingly bend over with a playful smil...
    scene.text(`In a moment of horniness, you slowly and teasingly bend over with a playful smile on your lips, providing your stepfather with an amazing view of your ${((s as any).titsize ?? 0)} breasts.`);
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = Math.floor(Math.random() * 2) + 1;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable.');
    } else {
      if (((s as any).fatherLust ?? 0)===1) {
        scene.text('Even though he did not expect this from you, you can tell by the spark in his eyes and his heavier breathing that he definitely likes what he sees.');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const garfather: LocationDef = {
  name: 'garfather',
  title: 'Your stepfather, Vladimir Mikhailovich Scriabin',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
