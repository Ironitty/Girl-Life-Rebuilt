import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).ArtemBeInHome = 1;
  if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 1  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
    scene.actions([{ label: 'Continue', goto: ['artem_katja_sex', 'going_home_together'] }]);
  }
  if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
    if (((s as any).katjaQW ?? 0)?.['horny'] >= Math.floor(Math.random() * 101) + 100) {
      scene.actions([{ label: 'Continue', goto: ['artem_katja_sex', 'home_work_ask_katja'] }]);
    }
    if (Math.floor(Math.random() * 5) + 0 === 0  &&  Math.floor(Math.random() * 11) + 5 <= ((s as any).artemQW ?? 0)?.['confidence']) {
      scene.actions([{ label: 'Continue', goto: ['artem_katja_sex', 'home_work_ask_artem'] }]);
    }
  }
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A2']} ${((s as any).npc_lastname ?? 0)?.['A2']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).artemVitokQW ?? 0) === 0) {
    scene.text('You walk across the school courtyard to meet up with Artem. He gives you a friendly nod as you approach. "You ready to go?"');
    scene.text('Just as you\'re about to leave the courtyard with Artem, you run into Vitek, who doesn\'t look pleased.');
    // TODO-QSP: dynamic text: Vitek looks at Artem disdainfully. "Where are you going with this four-eyed lose...
    scene.text(`Vitek looks at Artem disdainfully. "Where are you going with this four-eyed loser, ${((s as any).pcs_nickname ?? 0)}?" he sneers.`);
    scene.text('You smile at him. "Relax Vitek, Artem is just tutoring me after class. My school performance needs a boost and he kindly offered to help me out," you reassure him.');
    scene.text('Vitek frowns. "He \'kindly offered\'? Right… I don\'t trust this freak! Just look at him, he\'s eyeing you up and down constantly!"');
    // TODO-QSP: dynamic text: Artem is getting quite nervous, and tries to appease Vitek. "Vitek, come on man!...
    scene.text(`Artem is getting quite nervous, and tries to appease Vitek. "Vitek, come on man! You know I would never do that! I'm only helping ${((s as any).pcs_nickname ?? 0)} out with her studies, I swear!"`);
    scene.text('You can see Vitek\'s body tense up. He\'s not buying Artem\'s story at all, and looks at him with distrust.');
    qspCall(s, 'willpower', 'skill_base', 'chrsm', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Reassure Vitek [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Reassure Vitek', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'chrsm', 0);
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).artemVitokQW = 1;
    qspCall(s, 'stat', '');
    scene.text('You decide that you should step up for Artem, but also reassure Vitek you\'re still with him. You need to be delicate about it though.');
    scene.text('You know Vitek well enough to know that he\'s seething right now, so you try to placate him. "Come on baby, don\'t you trust me? You know I\'m your girl… Artem is only helping me get better grades, that\'s all. We can still hang out later?"');
    scene.text('This seems to calm him a little, and you can see his body relax, but he still drives his point home by punching Artem in the shoulder.');
    // TODO-QSP: dynamic text: "You're lucky, four-eyes. If I even suspect that you've laid a finger on <<$pcs_...
    scene.text(`"You're lucky, four-eyes. If I even suspect that you've laid a finger on ${((s as any).pcs_nickname ?? 0)}, I'll put you in a wheelchair and have you pissing blood for the rest of your life! Got that?"`);
    scene.text('Artem is terrified, and quickly nods while he rubbing his shoulder. "Yes, yes! I understand!"');
    scene.text('Vitek leaves you be and you leave with Artem. You can see Artem\'s body still trembling as you walk down the streets.');
    scene.actions([
      { label: 'Go with Artem', handler: (st: GameState) => {
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
  }, goto: ['artemhome', 'artemroom'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say nothing', handler: (st: GameState) => {
    (s as any).artemVitokQW = 2;
    scene.text('You silently watch the two of them, and wonder if you should help Artem when suddenly Vitek punches him in the chest, knocking the wind out of him.');
    scene.text('Artem curls up into a ball and squeals like a girl. "Vitek, please! Don\'t hit me again, please!"');
    // TODO-QSP: dynamic text: Vitek leans over Artem's prone body and scoffs. "Walk away, now. If I ever see y...
    scene.text(`Vitek leans over Artem's prone body and scoffs. "Walk away, now. If I ever see you near ${((s as any).pcs_nickname ?? 0)} again, I'm knocking your teeth out! Got that?"`);
    scene.text('Artem, still curled up on the ground, wails "Okay, okay! I\'ll leave her alone! Just please, let me go!"');
    scene.text('Vitek gives him one more kick in the ass as he gets up. "Now get the fuck out of here before I change my mind, freak!"');
    scene.text('The terrified Artem quickly gathers his things and runs away from you, deciding it\'s not worth the risk to help you. Vitek spits on the ground with a satisfied grin on his face before walking away.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', 'main');
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).FedorArtemTalk = 1;
    // TODO-QSP: dynamic text: As you leave the school courtyard with Artem, Fedor stops you. He looks question...
    scene.text(`As you leave the school courtyard with Artem, Fedor stops you. He looks questioningly at Artem. "Artem, what's going on? Are you taking ${((s as any).pcs_nickname ?? 0)} somewhere? She's with me, you know…"`);
    // TODO-QSP: dynamic text: Artem blushes. "I know she is, Fedor. We're just going to do our homework togeth...
    scene.text(`Artem blushes. "I know she is, Fedor. We're just going to do our homework together. I'm tutoring ${((s as any).pcs_nickname ?? 0)} to help her school performance a little. She asked me to help her, by the way!"`);
    scene.text('You smile at Fedor. "I did ask him, Fedor. I really need the help for school, and Artem was friendly enough to help me out. We\'re just studying together, nothing more."');
    // TODO-QSP: dynamic text: Fedor sighs, but concedes. "Well… alright, <<$pcs_nickname>>. I don't like you g...
    scene.text(`Fedor sighs, but concedes. "Well… alright, ${((s as any).pcs_nickname ?? 0)}. I don't like you going with <i>him</i>, but I trust you."`);
    scene.text('After that he walks away, and you and Artem leave the schoolyard.');
    qspCall(s, 'stat', '');
    scene.text('You walk across the school courtyard to meet up with Artem. He gives you a friendly nod as you approach. "You ready to go?"');
    qspCall(s, 'stat', '');
    if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
      scene.actions([
        { label: 'Suggest you do your homework together with Katja', goto: ['artem_katja_sex', 'home_work_ask_player'] },
        { label: 'Say you are ready', handler: (st: GameState) => {
    scene.text('You smile. "Let\'s go study!"');
    scene.text('The two of you don\'t have much to talk about on the way there, and after a few minutes just decide to walk in silence.');
    scene.actions([
      { label: 'Go to Artem\'s home', handler: (st: GameState) => {
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
  }, goto: ['artemhome', 'artemroom'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You smile. "Let\'s go study!"');
      scene.text('The two of you don\'t have much to talk about on the way there, and after a few minutes just decide to walk in silence.');
      scene.actions([
        { label: 'Go to Artem\'s home', handler: (st: GameState) => {
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
  }, goto: ['artemhome', 'artemroom'] },
      ]);
    }
    scene.actions([
      { label: 'Go with Artem', handler: (st: GameState) => {
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
  }, goto: ['artemhome', 'artemroom'] },
    ]);
  }
  scene.build();
}

function enterLearn(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/study.jpg');
  scene.text('You spend an hour doing your homework together with Artem. Being rather smart, he explains several things to you. At the end of the hour, you feel like you had a very productive session, and that you learned a lot from Artem\'s tutoring.');
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).lernHome ?? 0) > 1) {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A2');
  } else {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A2');
  }
  (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 4) + 3);
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    // TODO-QSP: dynamic text: After you finish your homework, Artem has a serious look on his face. "<<$pcs_ni...
    scene.text(`After you finish your homework, Artem has a serious look on his face. "${((s as any).pcs_nickname ?? 0)}, everyone in the school is talking about how much of a slut you are. With how much I've been helping you… I think it's only fair you give me a little something in return…"`);
    scene.text('You frown at him. "What did you have in mind?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).artemQW ?? 0)?.['anal'] > 0) {
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
      (s as any).artemslut = Math.floor(Math.random() * 5) + 1;
      if (((s as any).artemslut ?? 0) <= 2) {
        scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
        scene.text('He looks at you expectantly. "Time for my payment. Today, I want a blowjob."');
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    scene.text('You decline. "I\'m not a whore that earns her way with sex!"');
    // TODO-QSP: dynamic text: "Look <<$pcs_nickname>>, I spent a lot of time and effort helping you out. Meanw...
    scene.text(`"Look ${((s as any).pcs_nickname ?? 0)}, I spent a lot of time and effort helping you out. Meanwhile, you… you suck off or fuck pretty much everyone who asks! But you won't touch me when I need it? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Agree to suck him off', goto: ['artem_sex', 'slut_bj'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Suck him off', goto: ['artem_sex', 'slut_bj'] },
        ]);
      } else {
        scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
        scene.text('He looks at you expectantly. "If you still want my help, I want more. I want to fuck you."');
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    scene.text('You decline. "I\'m not a whore that earns her way with sex!"');
    // TODO-QSP: dynamic text: "Look <<$pcs_nickname>>, I spent a lot of time and effort helping you out. Meanw...
    scene.text(`"Look ${((s as any).pcs_nickname ?? 0)}, I spent a lot of time and effort helping you out. Meanwhile, you… you suck off or fuck pretty much everyone who asks! But you won't touch me when I need it? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Let him fuck you', goto: ['artem_sex', 'slut_fuck'] },
    ]);
  } },
          ]);
        }
        scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
        scene.text('He looks at you expectantly. "I seen something in a porno I want to try. I want to stick it in your ass now."');
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    scene.text('You decline. "I\'m not a whore that earns her way with sex!"');
    // TODO-QSP: dynamic text: "Look <<$pcs_nickname>>, I spent a lot of time and effort helping you out. Meanw...
    scene.text(`"Look ${((s as any).pcs_nickname ?? 0)}, I spent a lot of time and effort helping you out. Meanwhile, you… you suck off or fuck pretty much everyone who asks! But you won't touch me when I need it? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Let him fuck your ass', goto: ['artem_sex', 'slut_anal'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him fuck you', goto: ['artem_sex', 'slut_fuck'] },
          { label: 'Let him fuck your ass', goto: ['artem_sex', 'slut_anal'] },
        ]);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
      scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
      scene.text('He looks at you expectantly. "I seen something in a porno I want to try. I want to stick it in your ass now."');
      qspCall(s, 'willpower', 'exhib', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    // TODO-QSP: dynamic text: You decline, and he's very offended by that. "Look <<$pcs_nickname>>, you've alr...
    scene.text(`You decline, and he's very offended by that. "Look ${((s as any).pcs_nickname ?? 0)}, you've already let me fuck you. Meanwhile, you… fuck pretty much everyone who asks! But now I can't fuck your ass and you turn into a prude? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Let him fuck your ass', goto: ['artem_sex', 'slut_anal'] },
    ]);
  } },
        ]);
      }
      if (((s as any).artemQW ?? 0)?.['bj'] >= 5) {
        scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
        scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
        scene.text('He looks at you expectantly. "If you still want my help, I want more. I want to fuck you."');
        if (((s as any).mesec ?? 0) > 0) {
          scene.text('You shake your head. "Sorry Artem… It\'s that time of the month, we can\'t."');
          scene.text('He blushes, then smiles. "That\'s okay. I can just fuck your ass then."');
          qspCall(s, 'stat', '');
          qspCall(s, 'willpower', 'exhib', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    // TODO-QSP: dynamic text: You decline, and he's very offended by that: "Look <<$pcs_nickname>>, you've alr...
    scene.text(`You decline, and he's very offended by that: "Look ${((s as any).pcs_nickname ?? 0)}, you've already sucked my dick. Meanwhile, you… fuck pretty much everyone who asks! But now I can't fuck you? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Let him butt fuck you', goto: ['artem_sex', 'slut_anal'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree to have anal sex instead', goto: ['artem_sex', 'slut_anal'] },
          ]);
        } else {
          qspCall(s, 'willpower', 'exhib', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    // TODO-QSP: dynamic text: You decline, and he's very offended by that: "Look <<$pcs_nickname>>, you've alr...
    scene.text(`You decline, and he's very offended by that: "Look ${((s as any).pcs_nickname ?? 0)}, you've already sucked my dick. Meanwhile, you… fuck pretty much everyone who asks! But now I can't fuck you? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Let him fuck you', goto: ['artem_sex', 'slut_fuck'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Let him fuck you', goto: ['artem_sex', 'slut_fuck'] },
          ]);
        }
      } else {
        if (((s as any).artemQW ?? 0)?.['stripsee'] === 0) {
          scene.text('"You know… I\'ve never seen a girl naked before. Only on pictures. Maybe you could…" he asks shyly.');
        } else {
          scene.text('"I enjoyed seeing you naked last time. I want you to strip for me again, but can you make a bit more of a show of it this time?" he asks shyly.');
        }
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    // TODO-QSP: dynamic text: You decline, and he's very offended by that: "Look <<$pcs_nickname>>, I spent a ...
    scene.text(`You decline, and he's very offended by that: "Look ${((s as any).pcs_nickname ?? 0)}, I spent a lot of time and effort helping you out. Meanwhile, you… you suck off or fuck pretty much everyone who asks! But you won't touch me? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Agree to strip', handler: (st: GameState) => {
    (s as any).artemQW['stripsee'] = ((s as any).artemQW['stripsee'] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/strip1.jpg');
    scene.text('You give him a serious look. "Okay, okay. You want me to get naked for you that badly?"');
    scene.text('He blushes, then nods. "I do. I think it\'s the least you can do for me."');
    scene.text('You think it over for a moment. "Okay, fine."');
    scene.text('He grins widely as you start stripping out of your clothes, slowly teasing him as you do. You might as well have some fun with this yourself.');
    scene.actions([
      { label: 'Start stripping', goto: ['artem_events', 'striptease'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
        scene.text('Artem stands and unbuttons his pants, pulling his stiff erection from his pants.');
        scene.text('He looks at you expectantly. "If you want my help, I want your mouth."');
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No way!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No way!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/bj1.jpg');
    // TODO-QSP: dynamic text: You decline, and he's very offended by that. "Look <<$pcs_nickname>>, I spent a ...
    scene.text(`You decline, and he's very offended by that. "Look ${((s as any).pcs_nickname ?? 0)}, I spent a lot of time and effort helping you out. Meanwhile, you… you suck off or fuck pretty much everyone who asks! But you won't touch me? That's so not fair! We're done… Find someone else to help you. Good luck with that attitude."`);
    scene.text('You can tell Artem is seriously offended by your refusal, and won\'t help you any further. Hopefully someone else can help you with your homework.');
    scene.actions([
      { label: 'Refuse', goto: ['artem_events', 'finalrefuse'] },
      { label: 'Agree to suck him off', goto: ['artem_sex', 'slut_bj'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree to strip', handler: (st: GameState) => {
    (s as any).artemQW['stripsee'] = ((s as any).artemQW['stripsee'] ?? 0) + (1);
    qspCall(s, 'fame', 'pav', 'sex', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/strip1.jpg');
    scene.text('You give him a serious look. "You want me to get <i>naked</i> for you?"');
    scene.text('You see him visibly swallow before he nods. "Yes. I think it\'s the least you can do for me."');
    scene.text('You think it over for a moment. "Okay, fine."');
    scene.text('He grins widely as you start stripping out of your clothes, slowly teasing him as you do. You might as well have some fun with this yourself.');
    scene.actions([
      { label: 'Start stripping', goto: ['artem_events', 'striptease'] },
    ]);
  } },
          { label: 'Suck him off', goto: ['artem_sex', 'slut_bj'] },
        ]);
      }
      scene.actions([
        { label: 'Let him fuck your ass', goto: ['artem_sex', 'slut_anal'] },
      ]);
    }
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('After you finish doing your homework with Artem, you put your books aside and relax for a few minutes on his bed.');
    scene.actions([
      { label: 'Talk', goto: ['artem_chat', 'chat'] },
      { label: 'Explore his room', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'learn':
      enterLearn(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const artem_events: LocationDef = {
  name: 'artem_events',
  title: '<<$npc_firstname[\'A2\']>> <<$npc_lastname[\'A2\']>>',
  region: 'other',
  description: ['You walk across the school courtyard to meet up with Artem. He gives you a friendly nod as you approach. "You ready to go?"'],
  enter: enter,
};
