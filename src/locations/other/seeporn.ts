import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/tv/seeporn.mp4');
  scene.text('You and the boys sit down around the TV. Kolka puts on a DVD, and immediately, the screen is filled with porn.');
  (s as any).see_rand1 = Math.floor(Math.random() * 101) + 0;
  scene.actions([
    { label: 'Watch it', handler: (st: GameState) => {
    (s as any).kolkaseepornday = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).seepornofut = ((s as any).seepornofut ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).seepornofut ?? 0) + ((s as any).stat ?? 0)?.['mast']) * 2);
    qspCall(s, 'stat', '');
    if (((s as any).evgenQW ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
      scene.actions([{ label: 'Continue', goto: ['seeporn', 'SeePornPalevo'] }]);
    }
    if (((s as any).seepornofut ?? 0) < 3) {
      scene.text('The boys are looking at what is going on on the screen, but they are clearly uneasy and embarrassed with you here.');
    } else {
      scene.text('The guys have become accustomed to watching porn with you about, sometimes even commenting on what is happening.');
      if (((s as any).seepornofut ?? 0) >= 10) {
        scene.text('The boys intensely watch the porn. You notice a distinct tightness in their pants.');
        if (((s as any).evgenQW ?? 0) === 4) {
          (s as any).boyseeporn = ((s as any).boyseeporn ?? 0) + (1);
          qspCall(s, 'stat', '');
          scene.img('images/shared/home/tv/seeporn.mp4');
          // TODO-QSP: dynamic text: The boys intensely watch porn. You notice that they are all clearly aroused. Zhe...
          scene.text(`The boys intensely watch porn. You notice that they are all clearly aroused. Zhendos asks, "${((s as any).pcs_nickname ?? 0)}, want to put that mouth of yours to use?"`);
          qspCall(s, 'willpower', 'bj', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Tell them to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Tell them to fuck off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You tell them to fuck off.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
            ]);
          }
          return;
          scene.actions([
            { label: 'Keep quiet', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seepornblowbang.jpg');
    scene.text('Zhendos gets his dick out and pulls your face toward it. You dutifully wrap your lips around it and begin to suck. Your brother Kolka and Mishan also get their cocks out and stand around you. You start jerking them and sucking dick.');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A58');
    qspCall(s, 'npcStat', 'A59', 'a');
    qspCall(s, 'npcStat', 'A34', 'b');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID1 ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID2 ?? 0), 'group', 'incest', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seepornbbcum.jpg');
    scene.text('The boys don\'t last long and cum right in your face. Soon, almost all of your face is covered in a layer of sperm, and it\'s dripping onto your clothes.');
    (s as any).evgenrand = Math.floor(Math.random() * 5) + 1;
    qspCall(s, 'brother', 'brotherSexCount');
    if (((s as any).brotherQW ?? 0)?.['Sex'] > 6  &&  ((s as any).evgenrand ?? 0) === 1) {
      scene.actions([
        { label: 'Go with Kolka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'boyStat', 'A34');
    (s as any).sexpartkno = 1;
    (s as any).pose = 1;
    (s as any).brotherQW['sex_count_today'] = ((s as any).brotherQW['sex_count_today'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('Kolka tells the guys that he should take you home.');
    scene.text('As soon as you leave the school building, your brother whispers, "Let\'s look for a quiet place, I\'m still horny."');
    scene.text('Soon, you find a secluded spot, and Kolka says, "This looks good. Bend over."');
    if (((s as any).see_rand1 ?? 0) < 5) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/public/boysex.jpg"></center>
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/shared/sex/public/boysex.jpg"></center>`);
    }
    if (((s as any).see_rand1 ?? 0) >= 5  &&  ((s as any).see_rand1 ?? 0) < 30) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/shared/sex/public/publ1,<...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/shared/sex/public/publ1,${Math.floor(Math.random() * 3) + 0}.mp4"></video></center>`);
    }
    if (((s as any).see_rand1 ?? 0) >= 30) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/shared/sex/public/publ1,<<rand(0,6)>>.jpg...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/shared/sex/public/publ1,${Math.floor(Math.random() * 7) + 0}.jpg"></center>`);
    }
    scene.text('You let your brother fuck you from behind.');
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'brother', 'brotherSexEnd');
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          qspCall(s, 'stat', '');
          scene.img('images/locations/pavlovsk/school/grounds/seeporn/seeporn.jpg');
          // TODO-QSP: dynamic text: The boys intensely watch porn. You notice the bulges in their pants. Zhendos sud...
          scene.text(`The boys intensely watch porn. You notice the bulges in their pants. Zhendos suddenly takes your hand and holds it against his groin, and Mishan does the same with your other hand. Your brother Kolka laughs nervously. Mishan tells you conspiratorially, "${((s as any).pcs_nickname ?? 0)}, wank us off."`);
          qspCall(s, 'willpower', 'hj', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Pull your hands away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Pull your hands away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You angrily remove your hands and yell at the boys.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
            ]);
          }
          if (((s as any).evgenQW ?? 0) === 2  &&  (!(Math.floor(Math.random() * 2) + 0))) {
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/school/grounds/seeporn/seeporn.jpg');
            // TODO-QSP: dynamic text: The boys intensely watch porn. You notice the bulges in their pants. Zhendos sud...
            scene.text(`The boys intensely watch porn. You notice the bulges in their pants. Zhendos suddenly takes your hand and holds it against his groin, and Mishan does the same with your other hand. Your brother Kolka laughs nervously. Mishan says conspiratorially, "${((s as any).pcs_nickname ?? 0)}, wank us off."`);
            return;
            scene.actions([
              { label: 'What the fuck?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/seeporn.jpg');
    scene.text('You shake your head. Mishan says, "Come on, you\'re a girl, it\'s something good friends do for each other."');
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull your hands away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull your hands away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You angrily remove your hands and yell at the boys.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Jerk them', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A58');
    qspCall(s, 'npcStat', 'A59', 'a');
    qspCall(s, 'arousal', 'hj', 10, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID1 ?? 0), 'group', 'sub');
    if ((!((s as any).MihJenSex ?? 0))) {
      (s as any).MihJenSex = 1;
    }
    (s as any).evgenQW = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/doublehj.mp4');
    scene.text('They get there cocks out and you gently rub both members with your hands. Zhendos quickly groans, and his cock lets fly a jet of sperm onto your legs, immediately joined by one from Mishan, who also finishes on your legs.');
    scene.actions([
      { label: 'Resent', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seeporncumhj.jpg');
    // TODO-QSP: dynamic text: You shout, "You assholes, all over my legs!" but the boys are blissfully sprawle...
    scene.text(`You shout, "You assholes, all over my legs!" but the boys are blissfully sprawled on the couch. "Great handjob ${((s as any).pcs_nickname ?? 0)}, such small, soft hands."`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            qspCall(s, 'npcStat', 'A58');
            qspCall(s, 'stat', '');
            scene.img('images/locations/pavlovsk/school/grounds/seeporn/assgrab.jpg');
            scene.text('The boys intensely watch porn. You notice their boners straining to get out of their pants.');
            scene.text('You feel Zhendos\'s hand gently stroking your ass.');
            qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Pull his hands away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Pull his hands away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You angrily remove Zhendos\'s hand from your ass.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
              ]);
            }
            return;
            if (((s as any).evgenQW ?? 0) === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
              qspCall(s, 'stat', '');
              scene.img('images/shared/home/tv/seeporn.mp4');
              scene.text('The boys intensely watch porn. You notice, their boners straining to get out of their pants.');
              // TODO-QSP: dynamic text: Zhendos, looking at the porn, asks you, "Have you ever done that, <<$pcs_nicknam...
              scene.text(`Zhendos, looking at the porn, asks you, "Have you ever done that, ${((s as any).pcs_nickname ?? 0)}?"`);
              qspCall(s, 'willpower', 'misc', 'resist', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Tell him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Tell him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You put Zhendos in his place.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
                ]);
              }
              return;
              scene.actions([
                { label: 'Keep quiet', handler: (st: GameState) => {
    (s as any).evgenQW = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/seeporn_umm.mp4');
    scene.text('You swallow and remain silent, watching the porn. Mishan chuckles, "And now she\'s all flushed. It turns out the girls like porn as well."');
    qspCall(s, 'arousal', 'porn', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Pretend that nothing is happening', handler: (st: GameState) => {
    (s as any).evgenQW = 2;
    qspCall(s, 'arousal', 'foreplay', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/assgrab.jpg');
    scene.text('You sit on the couch turning red as a lobster, enjoying having your butt rubbed.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Jerk guys', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A58');
    qspCall(s, 'npcStat', 'A59', 'a');
    if ((!((s as any).MihJenSex ?? 0))) {
      (s as any).MihJenSex = 1;
    }
    qspCall(s, 'arousal', 'hj', 10, ((s as any).npcID ?? 0), 'group', 'sub');
    qspCall(s, 'arousal', 'hj', (-10), ((s as any).npcID1 ?? 0), 'group', 'sub');
    (s as any).boyseeporn = ((s as any).boyseeporn ?? 0) + (1);
    qspCall(s, 'stat', '');
    if (((s as any).boyseeporn ?? 0) < 2) {
      scene.img(`images/locations/pavlovsk/school/grounds/seeporn/sex/seeporn.hand1,${Math.floor(Math.random() * 3) + 0}.mp4`);
      scene.text('They get their cocks out, and you gently rub both members with your hands. Zhendos quickly groans and lets fly a jet of sperm onto your legs, immediately followed by Mishan, who also manages to hit your legs.');
      scene.actions([
        { label: 'Eew', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seeporncumhj.jpg');
    // TODO-QSP: dynamic text: You shout, "You assholes, all over my legs!" but the boys are blissfully sprawle...
    scene.text(`You shout, "You assholes, all over my legs!" but the boys are blissfully sprawled on the couch. "Great handjob ${((s as any).pcs_nickname ?? 0)}, such small, soft hands."`);
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'npcStat', 'A34', 'b');
      (s as any).evgenQW = 4;
      scene.img('images/locations/pavlovsk/school/grounds/seeporn/sex/seepornfirst.jpg');
      scene.img(`images/locations/pavlovsk/school/grounds/seeporn/sex/seepornbro0,${Math.floor(Math.random() * 3) + 0}.mp4`);
      scene.text('They get their cocks out, and you gently rub both members with your hands. Your brother Kolka walks over, his eyes filled with lust, and puts his dick in your mouth. Your eyes widen at this turn of events. Zhendos quickly groans, and from his cock flies a jet of sperm onto your legs, immediately followed by one from Mishan, who also manages to hit your legs.');
      qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'group', 'sub');
      qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'group', 'sub');
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'group', 'incest', 'sub');
      scene.actions([
        { label: '"Groo gaskers!"', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'clothes', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
      (s as any).brotherQW['Sex'] = 6;
    }
    scene.img('images/shared/sex/cum/facial/facial22.jpg');
    scene.text('Suddenly, your brother takes his dick out of your mouth, and a jet of hot cum splatters across your face.');
    scene.text('Mishan laughs, "Kolka, you just fucked your sister in the mouth!"');
    scene.text('Kolka wipes the sweat from his forehead. "Holy shit, I don\'t fucking believe it! The slut was asking for it! No man could have resisted!"');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
    ]);
  } },
      ]);
    }
  } },
            { label: 'Leave', goto: ['gschool_grounds', 'sports'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const seeporn: LocationDef = {
  name: 'seeporn',
  title: 'You and the boys sit down around the TV. Kolka puts on a DVD',
  region: 'other',
  description: ['You and the boys sit down around the TV. Kolka puts on a DVD, and immediately, the screen is filled with porn.'],
  enter: enter,
};
