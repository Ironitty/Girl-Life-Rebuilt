import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'set') {
    if (((s as any).locArgs?.[2] ?? 0) === 'sims') {
      qspCall(s, '_difficulty', 'setdifficulty_int', 1);
      (s as any).cheatVars['deg_speed_opt'] = (-4);
      (s as any).cfg_vars['pos_mult_opt'] = 0;
      (s as any).cfg_vars['neg_mult_opt'] = (-4);
      (s as any).cheatVars['pos_mood_opt'] = 3;
      (s as any).cheatVars['neg_mood_opt'] = (-3);
      (s as any).cheatVars['wp_cost_opt'] = (-3);
      (s as any).cheatVars['preg_chance'] = (-4);
      (s as any).cheatVars['random_lovers'] = 0;
      (s as any).cheatVars['random_robbers'] = 1;
      (s as any).cheatVars['random_snatchers'] = 1;
      (s as any).cheatVars['random_rapists'] = 1;
      (s as any).cheatVars['abduction_chance'] = 1;
      (s as any).cheatVars['tatiana_apprnc_change'] = 0;
      (s as any).cheatVars['auto_tampons'] = 1;
      (s as any).cheatVars['track_period'] = 1;
    } else {
      qspCall(s, '_difficulty', 'setdifficulty_int', 1);
      (s as any).cheatVars['deg_speed_opt'] = (-3);
      (s as any).cfg_vars['pos_mult_opt'] = 0;
      (s as any).cfg_vars['neg_mult_opt'] = (-3);
      (s as any).cheatVars['pos_mood_opt'] = 2;
      (s as any).cheatVars['neg_mood_opt'] = (-2);
      (s as any).cheatVars['wp_cost_opt'] = (-2);
      (s as any).cheatVars['preg_chance'] = (-3);
      (s as any).cheatVars['random_lovers'] = 0;
      (s as any).cheatVars['random_robbers'] = 2;
      (s as any).cheatVars['random_snatchers'] = 2;
      (s as any).cheatVars['random_rapists'] = 2;
      (s as any).cheatVars['abduction_chance'] = 1;
      (s as any).cheatVars['tatiana_apprnc_change'] = 0;
      (s as any).cheatVars['auto_tampons'] = 1;
      (s as any).cheatVars['track_period'] = 1;
      if (((s as any).locArgs?.[2] ?? 0) === 'easy') {
        qspCall(s, '_difficulty', 'setdifficulty_int', 2);
        (s as any).cheatVars['deg_speed_opt'] = (-1);
        (s as any).cfg_vars['pos_mult_opt'] = 0;
        (s as any).cfg_vars['neg_mult_opt'] = (-1);
        (s as any).cheatVars['pos_mood_opt'] = 1;
        (s as any).cheatVars['neg_mood_opt'] = (-1);
        (s as any).cheatVars['wp_cost_opt'] = (-1);
        (s as any).cheatVars['preg_chance'] = (-2);
        (s as any).cheatVars['random_lovers'] = 0;
        (s as any).cheatVars['random_robbers'] = 0;
        (s as any).cheatVars['random_snatchers'] = 0;
        (s as any).cheatVars['random_rapists'] = 2;
        (s as any).cheatVars['abduction_chance'] = 2;
        (s as any).cheatVars['tatiana_apprnc_change'] = 0;
        (s as any).cheatVars['auto_tampons'] = 1;
        (s as any).cheatVars['track_period'] = 1;
      } else {
        qspCall(s, '_difficulty', 'setdifficulty_int', 3);
        (s as any).cheatVars['deg_speed_opt'] = 0;
        (s as any).cfg_vars['pos_mult_opt'] = 0;
        (s as any).cfg_vars['neg_mult_opt'] = 0;
        (s as any).cheatVars['pos_mood_opt'] = 0;
        (s as any).cheatVars['neg_mood_opt'] = 0;
        (s as any).cheatVars['wp_cost_opt'] = 0;
        (s as any).cheatVars['preg_chance'] = 0;
        (s as any).cheatVars['random_lovers'] = 0;
        (s as any).cheatVars['random_robbers'] = 0;
        (s as any).cheatVars['random_snatchers'] = 0;
        (s as any).cheatVars['random_rapists'] = 0;
        (s as any).cheatVars['abduction_chance'] = 0;
        (s as any).cheatVars['tatiana_apprnc_change'] = 0;
        (s as any).cheatVars['auto_tampons'] = 1;
        (s as any).cheatVars['track_period'] = 1;
        if (((s as any).locArgs?.[2] ?? 0) === 'hard') {
          qspCall(s, '_difficulty', 'setdifficulty_int', 3);
          (s as any).cheatVars['deg_speed_opt'] = 2;
          (s as any).cfg_vars['pos_mult_opt'] = 0;
          (s as any).cfg_vars['neg_mult_opt'] = 2;
          (s as any).cheatVars['pos_mood_opt'] = (-1);
          (s as any).cheatVars['neg_mood_opt'] = 1;
          (s as any).cheatVars['wp_cost_opt'] = 1;
          (s as any).cheatVars['preg_chance'] = 2;
          (s as any).cheatVars['random_lovers'] = 0;
          (s as any).cheatVars['random_robbers'] = 3;
          (s as any).cheatVars['random_snatchers'] = 3;
          (s as any).cheatVars['random_rapists'] = 0;
          (s as any).cheatVars['abduction_chance'] = 0;
          (s as any).cheatVars['tatiana_apprnc_change'] = 1;
          (s as any).cheatVars['auto_tampons'] = 0;
          (s as any).cheatVars['track_period'] = 1;
        } else {
          qspCall(s, '_difficulty', 'setdifficulty_int', 3);
          (s as any).cheatVars['deg_speed_opt'] = 3;
          (s as any).cfg_vars['pos_mult_opt'] = 0;
          (s as any).cfg_vars['neg_mult_opt'] = 3;
          (s as any).cheatVars['pos_mood_opt'] = (-2);
          (s as any).cheatVars['neg_mood_opt'] = 2;
          (s as any).cheatVars['wp_cost_opt'] = 2;
          (s as any).cheatVars['preg_chance'] = 3;
          (s as any).cheatVars['random_lovers'] = 0;
          (s as any).cheatVars['random_robbers'] = 3;
          (s as any).cheatVars['random_snatchers'] = 4;
          (s as any).cheatVars['random_rapists'] = 3;
          (s as any).cheatVars['abduction_chance'] = 3;
          (s as any).cheatVars['tatiana_apprnc_change'] = 1;
          (s as any).cheatVars['auto_tampons'] = 0;
          (s as any).cheatVars['track_period'] = 0;
          if (((s as any).locArgs?.[2] ?? 0) === 'russia') {
            qspCall(s, '_difficulty', 'setdifficulty_int', 4);
            (s as any).cheatVars['deg_speed_opt'] = 4;
            (s as any).cfg_vars['pos_mult_opt'] = 0;
            (s as any).cfg_vars['neg_mult_opt'] = 4;
            (s as any).cheatVars['pos_mood_opt'] = (-3);
            (s as any).cheatVars['neg_mood_opt'] = 3;
            (s as any).cheatVars['wp_cost_opt'] = 3;
            (s as any).cheatVars['preg_chance'] = 4;
            (s as any).cheatVars['random_lovers'] = 0;
            (s as any).cheatVars['random_robbers'] = 4;
            (s as any).cheatVars['random_snatchers'] = 4;
            (s as any).cheatVars['random_rapists'] = 4;
            (s as any).cheatVars['abduction_chance'] = 4;
            (s as any).cheatVars['tatiana_apprnc_change'] = 1;
            (s as any).cheatVars['auto_tampons'] = 0;
            (s as any).cheatVars['track_period'] = 0;
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'get') {
            (s as any).result = 0;
            if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
              if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 1  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                (s as any).result = 1;
              }
            } else {
              if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                (s as any).result = 2;
              }
              if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
                if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                  (s as any).result = 3;
                }
              } else {
                if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                  (s as any).result = 4;
                }
                if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
                  if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                    (s as any).result = 5;
                  }
                } else {
                  if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 3  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                    (s as any).result = 6;
                  }
                  if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
                    if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 4  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                      (s as any).result = 7;
                    }
                  }
                }
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const _difficulty: LocationDef = {
  name: '_difficulty',
  region: 'other',
  enter: enter,
};
