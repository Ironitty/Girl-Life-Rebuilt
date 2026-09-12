import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).numnpc ?? 0) === 9  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200  &&  ((s as any).kotovLoveQW ?? 0) >= 0  &&  (((s as any).npc_rel ?? 0)?.['A9'] >= 80  ||  ((s as any).pcs_hotcat ?? 0) >= 5)) {
    if (((s as any).loc ?? 0) === 'pav_disco') {
      if (((s as any).alko ?? 0) < 3) {
        // TODO-QSP: dynamic text: <<$npc_firstname['A9']>>: "<<$pcs_nickname>> Hey, let's get drunk and then do so...
        scene.text(`${((s as any).npc_firstname ?? 0)?.['A9']}: "${((s as any).pcs_nickname ?? 0)} Hey, let's get drunk and then do something dumb."`);
        qspCall(s, 'willpower', 'drink', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-5));
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).kotovLoveQW ?? 0) > 0  &&  (!((s as any).VitekVsNiko ?? 0))) {
          scene.actions([
            { label: 'Tell him what Niko did to you', goto: ['NikoPayback', 'Vitek Help 2'] },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 5);
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.text('Vitek poured you a beer and you began drinking with him. Vitek stared into your eyes and tells you. "You\'re a cool girl, you know that."');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).alko ?? 0) >= 3) {
          // TODO-QSP: dynamic text: <<$npc_firstname['A9']>>: "<<$pcs_nickname>> Hey, let's dance."
          scene.text(`${((s as any).npc_firstname ?? 0)?.['A9']}: "${((s as any).pcs_nickname ?? 0)} Hey, let's dance."`);
          qspCall(s, 'willpower', 'misc', 'resist', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-5));
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          }
          scene.actions([
            { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 2);
    qspCall(s, 'exp_gain', 'danc', Math.floor(Math.random() * 3) + 1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    (s as any).kotovQW = ((s as any).kotovQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You go to the dance floor and started dancing with Vitek, he pawed at your ass with his strong hands.');
    if ((!((s as any).kotovLoveQW ?? 0))) {
      if (((s as any).kotovQW ?? 0) < 5  ||  ((s as any).npc_rel ?? 0)?.['A9'] === 0) {
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).kotovQW ?? 0) >= 5  &&  ((s as any).npc_rel ?? 0)?.['A9'] !== 0) {
          // TODO-QSP: dynamic text: The dance ended and Vitek took you by the hand, steering you to the wall. "Hey <...
          scene.text(`The dance ended and Vitek took you by the hand, steering you to the wall. "Hey ${((s as any).pcs_nickname ?? 0)}, wanna go out with me, be my chick? I'll wring any guy's neck for you."`);
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A9', 0);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You refused and Vitek looks completely confused, but he was immediately angry. "Well, then fuck you, you cock sucking whore!"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
            { label: 'Agree', handler: (st: GameState) => {
    (s as any).kotovLoveQW = 1;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A9']} ${((s as any).npc_lastname ?? 0)?.['A9']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Vitek was delighted "Sweet. I almost can\'t believe that you agreed to be my chick."');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
      }
    } else {
      if (((s as any).kotovLoveQW ?? 0) > 0) {
        // TODO-QSP: dynamic text: The dance ends and Vitek hugged you "<<$pcs_nickname>>, lets go to my house, whe...
        scene.text(`The dance ends and Vitek hugged you "${((s as any).pcs_nickname ?? 0)}, lets go to my house, where I can have my way with you." He says in his best seductive tone.`);
        qspCall(s, 'willpower', 'sex', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-5));
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Go with Vitek.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You left the disco and went in the direction Vitek\'s house, while he was holding your arm. Soon Vitek and you arrived at the dilapidated house, he opened the door and led you into the poor, unkept apartment. In the room clothes where lying in crumpled heaps everywhere on the floor and empty bottles littered the whole place.');
    scene.actions([
      { label: 'Continue', goto: ['kotovSex', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
          ]);
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npc_firstname['A9']>>: "Hey <<$pcs_nickname>>, I'm busy. I'll catch up with y...
      scene.text(`${((s as any).npc_firstname ?? 0)?.['A9']}: "Hey ${((s as any).pcs_nickname ?? 0)}, I'm busy. I'll catch up with you later." He says as he turns back to talk to his friends.`);
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } else {
    if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      // TODO-QSP: dynamic text: Vitek scowled and tells you "Well <<$pcs_nickname>>, whats this garbage I hear a...
      scene.text(`Vitek scowled and tells you "Well ${((s as any).pcs_nickname ?? 0)}, whats this garbage I hear about what you and ${((s as any).gnikname ?? 0)} did? The whole town already knows, the guys have been telling me all about it. You fucking bitch! "`);
      qspCall(s, 'willpower', 'misc', 'force', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Argue that it\'s not true [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Argue that it\'s not true [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).fame ?? 0)?.['pav_sex'] > 75) {
      qspCall(s, 'fame', 'pav', 'sex', (-75));
    }
    if (((s as any).fame ?? 0)?.['pav_prostitute'] > 75) {
      qspCall(s, 'fame', 'pav', 'prostitute', (-75));
    }
    qspCall(s, 'stat', '');
    scene.text('It takes a bit but you convince Vitek that all this was just gossip and none of it was true. Vitek frowned, "I\'ll knock their teeth out if they whisper one more word about you then. Don\'t worry, baby I will shut their yapping mouths."');
    if (((s as any).loc ?? 0) === 'gschool_lunch') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
    if (((s as any).loc ?? 0) === 'pav_disco') {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Accuse him of sleeping around', handler: (st: GameState) => {
    if (!(s as any).npc_rel) (s as any).npc_rel = {}; (s as any).npc_rel[String((s as any).static_num ?? 0)] = 0;
    (s as any).kotovLoveQW = (-1);
    qspCall(s, 'stat', '');
    scene.text('You started yelling at Vitek that he has fucked other girls. Vitek started yelling at you and suddenly, there is a ringing in your head, your vision is blurry. You find you\'re on the floor, with Vitek standing over you. Your cheek burns with pain, it takes you a few moments to understand what happened, it seems he slapped you, so hard it knocked you off your feet. "Stay away from me you fucking whore, it\'s over between us!"');
    if (((s as any).loc ?? 0) === 'gschool_lunch') {
      scene.actions([{ label: 'Continue', goto: ['gschool_lessons', 'short_break'] }]);
    }
    if (((s as any).loc ?? 0) === 'pav_disco') {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).loc ?? 0) === 'pav_disco') {
        if (((s as any).fame ?? 0)?.['pav_slut'] < 280) {
          // TODO-QSP: dynamic text: <<$npc_firstname[$static_num]>>: "<<$pcs_nickname>> Hey, let's get drunk and the...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).static_num ?? 0)]}: "${((s as any).pcs_nickname ?? 0)} Hey, let's get drunk and then do something dumb."`);
          qspCall(s, 'willpower', 'drink', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A9', (-5));
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          }
          scene.actions([
            { label: 'Drink beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).static_num ?? 0), 5);
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.text('You drink the beer with his group of friends.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: <<$npc_firstname[$static_num]>>: "Then what the fuck are you doing here cumwhore...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).static_num ?? 0)]}: "Then what the fuck are you doing here cumwhore? Came to suck some dick?"`);
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).static_num ?? 0), (-5));
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const kotovtalker: LocationDef = {
  name: 'kotovtalker',
  title: '<<$npc_firstname[\'A9\']>> <<$npc_lastname[\'A9\']>>',
  region: 'other',
  enter: enter,
};
