import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'Military', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Army Camp</b></center>');
  scene.img('images/locations/city/shared/military/military.jpg');
  scene.text('A small city with a lot of tents and full of people, a lot of soldiers are running around with guns, training.');
  if (((s as any).week ?? 0) < 6  ||  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'money', 'earn', 5000);
    scene.actions([
      { label: 'Go back to town', goto: ['city_residential', ''] },
    ]);
  }
  scene.actions([
    { label: 'Work in the infirmary', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).sanrand = Math.floor(Math.random() * 11) + 0;
    // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 2)
    qspCall(s, 'stat', '');
    if ((!((s as any).sanrand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['Military', 'san0'] }]);
    }
    if (((s as any).sanrand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['Military', 'san1'] }]);
    }
    scene.text('You are working in the infirmary.');
    scene.actions([
      { label: 'Leave', goto: ['Military', 'start'] },
    ]);
  } },
    { label: 'Go to your tent', goto: ['Palatka', 'start'] },
    { label: 'Take a walk in the woods', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/military/woman_forest.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).milprorand = Math.floor(Math.random() * 11) + 0;
    qspCall(s, 'stat', '');
    scene.text('You walk for a while in the forest.');
    if ((!((s as any).milprorand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['Military', 'pro0'] }]);
    }
    if (((s as any).milprorand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['Military', 'pro1'] }]);
    }
    scene.actions([
      { label: 'Finish', goto: ['Military', 'start'] },
    ]);
  } },
    { label: 'Get some food and drink from the mess hall', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
  ]);
  scene.build();
}

function enterSan0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'soldier', Math.floor(Math.random() * 13) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/city/shared/military/sex/san0.jpg');
  scene.text('During the examination, the patient shows you his erection and looks at you with anticipation.');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Drive him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Drive him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['Military', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Play along', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 41;
    (s as any).sexpartkno = 1;
  }, goto: ['sex', 'minet'] },
  ]);
  scene.build();
}

function enterSan1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'army doctor', Math.floor(Math.random() * 11) + 22);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/city/shared/military/sex/san1.jpg');
  scene.text('While the infirmary is unoccupied, the doctor begins to molest you.');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Drive him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Drive him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['Military', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Play along', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 42;
    (s as any).sexpartkno = 1;
  }, goto: ['sex', 'minet'] },
  ]);
  scene.build();
}

function enterPro0(s: GameState, scene: SceneBuilder): void {
  scene.text('You met two soldiers whom ask you to help them out with a war game, in the role of a captive spy.');
  qspCall(s, 'willpower', 'gangbang', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'gangbang', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['Military', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Soldier', Math.floor(Math.random() * 17) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    // TODO-QSP: $boy[0] = $boy
    qspCall(s, 'npcgeneratec', '', 0, 'Soldier', Math.floor(Math.random() * 17) + 18);
    // TODO-QSP: $boy[1] = $npclastgenerated
    scene.img('images/locations/city/shared/military/sex/pro0.jpg');
    scene.text('Your hands are tied and you are led to the headquarters where they set up an interrogation, then with the words "Now the interrogation begins!", they pull out their cocks. That\'s what you get for allowing two burly men you do not even know to bind your hands.');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    (s as any).SUB = ((s as any).SUB ?? 0) + (1);
    (s as any).picrand = 21;
    (s as any).sexpartkno = 1;
  }, goto: ['sexdvoe', 'var'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPro1(s: GameState, scene: SceneBuilder): void {
  scene.text('You notice that a guy follows you for several minutes.');
  qspCall(s, 'willpower', 'rape', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'rape', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/military/forest_running.jpg');
    if (((s as any).pcs_run ?? 0) < 10) {
      (s as any).peshimraperand = Math.floor(Math.random() * 12) + 0;
    } else {
      if (((s as any).pcs_run ?? 0) < 20) {
        (s as any).peshimraperand = Math.floor(Math.random() * 21) + 0;
      } else {
        if (((s as any).pcs_run ?? 0) < 30) {
          (s as any).peshimraperand = Math.floor(Math.random() * 31) + 0;
        } else {
          if (((s as any).pcs_run ?? 0) < 40) {
            (s as any).peshimraperand = Math.floor(Math.random() * 41) + 0;
          } else {
            if (((s as any).pcs_run ?? 0) < 50) {
              (s as any).peshimraperand = Math.floor(Math.random() * 51) + 0;
            } else {
              if (((s as any).pcs_run ?? 0) < 60) {
                (s as any).peshimraperand = Math.floor(Math.random() * 61) + 0;
              } else {
                if (((s as any).pcs_run ?? 0) < 70) {
                  (s as any).peshimraperand = Math.floor(Math.random() * 71) + 0;
                } else {
                  if (((s as any).pcs_run ?? 0) < 80) {
                    (s as any).peshimraperand = Math.floor(Math.random() * 81) + 0;
                  } else {
                    if (((s as any).pcs_run ?? 0) < 90) {
                      (s as any).peshimraperand = Math.floor(Math.random() * 91) + 0;
                    } else {
                      (s as any).peshimraperand = Math.floor(Math.random() * 90) + 11;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).peshimraperand ?? 0) < 11) {
      scene.text('You tried to run away but the guy caught you.');
      scene.actions([
        { label: 'Continue', goto: ['military', 'rape'] },
      ]);
    } else {
      scene.text('You are rushing headlong, crashing through the bushes. Finally you ran back to the camp.');
      scene.actions([
        { label: 'Continue', goto: ['military', 'start'] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Ignore it', goto: ['military', 'rape'] },
  ]);
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'rapist', Math.floor(Math.random() * 13) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  scene.text('You suddenly feel a blow on the back of your head, and lose consciousness.');
  scene.text('…');
  scene.img('images/locations/city/shared/military/sex/rape1.jpg');
  scene.text('…');
  scene.text('You woke up in a barn with a bag on your head, so you can\'t see anything. You also have a headache from the impact to your head, and a leash around your neck.');
  scene.actions([
    { label: 'Shout', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/military/sex/rape2.jpg');
    scene.text('You began to cry for help, when a dick is stuffed in your mouth.');
    scene.text('"Here\'s something to shut your mouth", came the voice of a rapist.');
    scene.text('You tried to spit it out, but it\'s getting worse as he thrust it down your throat, and began to throatfuck you.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_manage', '');
    scene.img('images/locations/city/shared/military/sex/rape3.jpg');
    scene.text('When you are starting to lose consciousness choking on his cock, he takes it out of your mouth, pulls the baf from your head and throws you on a crate. He steps to you, forcing his dick into your vagina quite forcefully. Although you can see now, you still tied up to do effectively anything.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/military/sex/rape4.jpg');
    scene.text('When your pussy bored him, he turned you around and drove his cock into your ass. You cry out in pain, but he does not care and continues to fuck your ass as hard as he could. You cry and beg him to at least use some lubrication, but he just scowls in response. You pass out from the pain and shock.');
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).pcs_makeup = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 240;
    scene.img('images/locations/city/shared/military/sex/rape5.jpg');
    scene.text('You do not know how much time passed since you fainted, but when you regain your concoiusness he\'s pulling out of you. He pulls you to your knees and stuck his dick in your mouth, saying only a word, "Suck". You dutifully start to suck him off with your ass is brutally raped and in pain, wondering whether to bite it off, but before you could give it a second thought your rapist suddenly comes in your mouth. After this you are immediately knocked out again with a blow to your head.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'rapist');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['military', 'start'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'san0':
      enterSan0(s, scene);
      break;
    case 'san1':
      enterSan1(s, scene);
      break;
    case 'pro0':
      enterPro0(s, scene);
      break;
    case 'pro1':
      enterPro1(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const Military: LocationDef = {
  name: 'Military',
  title: 'Army Camp',
  region: 'other',
  locationType: 'event',
  description: ['A small city with a lot of tents and full of people, a lot of soldiers are running around with guns, training.'],
  enter: enter,
};
