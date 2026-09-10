import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['were_met'] === 1  &&  ((s as any).util_rand_favor ?? 0) < 3) {
    (s as any).util_rand_favor = Math.floor(Math.random() * 3) + 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).util_rand_favor ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A172');
      scene.img('images/characters/shared/headshots_main/big172.jpg');
    } else {
      qspCall(s, 'boyStat', 'A174');
      scene.img('images/characters/shared/headshots_main/big174.jpg');
      if (((s as any).util_rand_favor ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A173');
        scene.img('images/characters/shared/headshots_main/big173.jpg');
      }
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$boydesc>> approaches you. "Hey, I need your help with something."
      scene.text(`${((s as any).boydesc ?? 0)} approaches you. "Hey, I need your help with something."`);
      scene.actions([
        { label: 'Sure what is it?', handler: (st: GameState) => {
    if ((!((s as any).campfire ?? 0))) {
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The fire is out. Can you please ensure it keeps g...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says. "The fire is out. Can you please ensure it keeps going while we are outside?"`);
      }
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he uses his stern voice. "The fire is out. You can at least...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," he uses his stern voice. "The fire is out. You can at least keep the fire going. No way you are that much of a whiny princess."`);
      }
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] -= 3
  }, goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    } else {
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The hut is a mess. Could you take care of it, ple...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says. "The hut is a mess. Could you take care of it, please?"`);
      }
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he uses his stern voice. "The house is a mess. Take care of...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," he uses his stern voice. "The house is a mess. Take care of it."`);
      }
      if (((s as any).dirty_swamp_yard ?? 0) > 5) {
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "The yard is a mess. Can you please take care of i...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says. "The yard is a mess. Can you please take care of it?"`);
        }
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says sternly. "What the hell is all this trash doing out...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says sternly. "What the hell is all this trash doing out there? Go and pick it all."`);
        }
        scene.actions([
          { label: 'Clean the yard', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 3
  }, goto: ['hunter_favors', 'yard_cleanup'] },
        ]);
      } else {
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says. "We don't have anything for dinner. Could you plea...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says. "We don't have anything for dinner. Could you please cook something?"`);
        }
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>," he says sternly. "We have nothing to eat for dinner, you us...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}," he says sternly. "We have nothing to eat for dinner, you useless bitch. Go make something before we starve."`);
        }
        if (((s as any).boletus ?? 0) > 0) {
          scene.actions([
            { label: 'Cook some mushroom soup (0:30)', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 4
    qspCall(st, 'hunter_favors', 'mushroom_soup');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Cook some meat stew (1:00)', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 3
    qspCall(st, 'hunter_favors', 'meat_stew');
  } },
            { label: '"There is nothing to cook though…"', goto: ['gad_swamp_yard', 'start'] },
          ]);
        }
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] >= 15) {
          scene.text('"Actually, never mind. I got this, thanks, though."');
        }
        if (((s as any).hunterVars ?? 0)?.['collective_opinion'] < 15) {
          scene.text('"Actually, never mind. I do not have anything you are useful for."');
        }
        scene.actions([
          { label: 'Okay', handler: (st: GameState) => {
    (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (5);
  }, goto: ['gad_swamp_yard', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Clean the hut', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 2
  }, goto: ['hunter_favors', 'dirty_swamphouse'] },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"I\'ll help later, busy right now" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I\'ll help later, busy right now"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
    scene.actions([
      { label: '"What?! Do I look like a servant to you?', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    // TODO-QSP: dynamic text: You walk away from <<$boydesc>>
    scene.text(`You walk away from ${((s as any).boydesc ?? 0)}`);
    (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (10);
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  }, goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  }
  scene.build();
}

export const hunter_favors: LocationDef = {
  name: 'hunter_favors',
  title: 'You notice that the yard has gotten pretty dirty. "I need to',
  region: 'other',
  enter: enter,
};
