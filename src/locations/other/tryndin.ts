import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).tryndinQW['stairwell_chat'] = ((s as any).tryndinQW['stairwell_chat'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A77', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big77.jpg');
  if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 1) {
    scene.text('Tryndin tells you that he\'s a college student but he\'s going to graduate soon.');
  } else {
    scene.text('Tryndin tells you that he lives with his mother; his father filed for divorce a couple of years ago and now lives with a new wife and children.');
    if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 3) {
      scene.text('Tryndin tells you that he is working towards a law degree and his father promised to buy him a car if he succeeds.');
    } else {
      scene.text('Tryndin tells you that he has been taking dance lessons since he could walk and, even today, he often practices dancing at the fitness center.');
      if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 5) {
        scene.text('Tryndin tells you that he spends most of his evenings repairing computers. It costs him most of his free time, but at least he doesn\'t have to rely on his parents for money.');
      } else {
        scene.text('Tryndin tells you that, after college, he wants to go to the university and study law; he\'ll probably have to serve in the military first though.');
        if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] >= 7) {
          scene.text('Tryndin and you chat about life, computers and other things, cracking jokes and enjoying each other\'s company.');
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, we've been chatting here many times so I hope you don't mind...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, we've been chatting here many times so I hope you don't mind me asking but there is something that has been bugging me; where do I recognize you from? I swear I have seen you somewhere else that I can't just put my finger on."`);
          scene.text('You smile at the question and contemplate on just what you will tell him…');
          if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
            scene.actions([
              { label: 'Tell him you are a Model', goto: ['tryndin', 'model'] },
            ]);
          } else {
            if (((s as any).university ?? 0)?.['student'] === 1) {
              scene.actions([
                { label: 'Tell him you go to the University', goto: ['tryndin', 'uni_student'] },
              ]);
            } else {
              scene.actions([
                { label: 'Tell him you don\'t know', goto: ['tryndin', 'unknown'] },
              ]);
            }
            scene.text('You talk for a few minutes about random stuff before you say your goodbyes and go on your way.');
            scene.actions([
              { label: 'Tell him you are a Pornstar', goto: ['tryndin', 'pornstar'] },
              { label: 'Say goodbye and leave', goto: ['city_apt_building', 'floor_4'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

export const tryndin: LocationDef = {
  name: 'tryndin',
  title: 'Tryndin tells you that he\'s a college student but he\'s going',
  region: 'other',
  description: ['Tryndin tells you that he\'s a college student but he\'s going to graduate soon.'],
  enter: enter,
};
