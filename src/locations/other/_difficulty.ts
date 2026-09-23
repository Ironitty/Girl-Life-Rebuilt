import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPreset(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'set') {
    if (String((s as any).locArgs?.[2] ?? '') === 'sims') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = (-4);
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
      ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = (-4);
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 3;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = (-3);
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = (-3);
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = (-4);
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 1;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 1;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 1;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 1;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 0;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
      ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'very easy') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = (-3);
        ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
        ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = (-3);
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 2;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = (-2);
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = (-2);
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = (-3);
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 2;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 2;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 2;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 1;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 0;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
        ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'easy') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = (-1);
          ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
          ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = (-1);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 1;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = (-1);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = (-1);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = (-2);
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 0;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 0;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 2;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 2;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 0;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
          ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'normal') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 0;
            ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
            ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 0;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 1;
            ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'hard') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 2;
              ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
              ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = 2;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = (-1);
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 1;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 1;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 2;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 3;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 3;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 0;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 0;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 1;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 0;
              ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 1;
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'very hard') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 3;
                ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
                ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = 3;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = (-2);
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 2;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 2;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 3;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 3;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 4;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 3;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 3;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 1;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 0;
                ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 0;
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'russia') {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['deg_speed_opt'] = 4;
                  ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['pos_mult_opt'] = 0;
                  ((s as any).cfg_vars = (s as any).cfg_vars ?? {})['neg_mult_opt'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['pos_mood_opt'] = (-3);
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['neg_mood_opt'] = 3;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['wp_cost_opt'] = 3;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['preg_chance'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_lovers'] = 0;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_robbers'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_snatchers'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['random_rapists'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['abduction_chance'] = 4;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['tatiana_apprnc_change'] = 1;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['auto_tampons'] = 0;
                  ((s as any).cheatVars = (s as any).cheatVars ?? {})['track_period'] = 0;
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'get') {
      (s as any).result = 0;
      if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
        if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 1  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 1  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
          (s as any).result = 1;
        }
      } else {
        if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
          if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
            (s as any).result = 2;
          }
        } else {
          if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
            if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === -2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
              (s as any).result = 3;
            }
          } else {
            if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
              if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 0  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 0  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 1  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                (s as any).result = 4;
              }
            } else {
              if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
                if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -1  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 1  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 2  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 0  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
                  (s as any).result = 5;
                }
              } else {
                if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
                  if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -2  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 2  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 3  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 3  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                    (s as any).result = 6;
                  }
                } else {
                  if (((s as any).cheatVars ?? 0)?.['deg_speed_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
                    if (((s as any).cfg_vars ?? 0)?.['pos_mult_opt'] === 0  &&  ((s as any).cfg_vars ?? 0)?.['neg_mult_opt'] === 4  &&  ((s as any).cheatVars ?? 0)?.['pos_mood_opt'] === -3  &&  ((s as any).cheatVars ?? 0)?.['neg_mood_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['wp_cost_opt'] === 3  &&  ((s as any).cheatVars ?? 0)?.['preg_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] === 0  &&  ((s as any).cheatVars ?? 0)?.['random_robbers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] === 4  &&  ((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4  &&  ((s as any).cheatVars ?? 0)?.['tatiana_apprnc_change'] === 1  &&  ((s as any).cheatVars ?? 0)?.['auto_tampons'] === 0  &&  ((s as any).cheatVars ?? 0)?.['track_period'] === 0) {
                      (s as any).result = 7;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetdifficultyInt(s: GameState, scene: SceneBuilder): void {
  ((s as any).cheatVars = (s as any).cheatVars ?? {})['skill_gain'] = Math.min(Math.max(1, ((s as any).locArgs?.[1] ?? 0)), 4);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetdifficulty(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'easy peasy') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'relaxed') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'hardcore') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3]; enterSetdifficultyInt(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetdifficulty(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 'realistic';
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
    (s as any).result = 'easy peasy';
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
    (s as any).result = 'relaxed';
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
    (s as any).result = 'hardcore';
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetexpadj(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 20 * (((s as any).cheatVars ?? {})?.['skill_gain'] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetExpGain(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 100;
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
    (s as any).result = 300;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
    (s as any).result = 200;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
    (s as any).result = 50;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetDegLoss(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, '_difficulty', 'get_multiplied', ((s as any).egVars ?? 0)?.['deg_loss_mult'], 100, ((s as any).cheatVars ?? 0)?.['deg_speed_custom']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddmoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'earn', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterAddmoneystring(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', 'string_profit', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterSpendmoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterGetMultiplied(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === -99) {
    (s as any).result = 0;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 0) {
      (s as any).result = ((s as any).locArgs?.[2] ?? 0);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 1) {
        (s as any).result = (((s as any).locArgs?.[2] ?? 0) * 5) / 4;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 2) {
          (s as any).result = (((s as any).locArgs?.[2] ?? 0) * 3) / 2;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 3) {
            (s as any).result = ((s as any).locArgs?.[2] ?? 0) * 2;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 4) {
              (s as any).result = ((s as any).locArgs?.[2] ?? 0) * 3;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === -1) {
                (s as any).result = (((s as any).locArgs?.[2] ?? 0) * 3) / 4;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === -2) {
                  (s as any).result = (((s as any).locArgs?.[2] ?? 0) * 2) / 3;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === -3) {
                    (s as any).result = ((s as any).locArgs?.[2] ?? 0) / 2;
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === -4) {
                      (s as any).result = ((s as any).locArgs?.[2] ?? 0) / 3;
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 99) {
                        (s as any).result = (((s as any).locArgs?.[2] ?? 0) * ((s as any).locArgs?.[3] ?? 0)) / 100;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSpendmoneystring(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'money', 'string_price', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterGetmaxgrades(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 1) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 185) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 2) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 155) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 3) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 133) / 100;
  }
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 4) {
    (s as any).max_grades = (((s as any).pcs_intel ?? 0) * 115) / 100;
  }
  if (((s as any).max_grades ?? 0) > 100) {
    (s as any).max_grades = 100;
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['skill_gain'] === 0) {
    ((s as any).cheatVars = (s as any).cheatVars ?? {})['skill_gain'] = 3;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'preset':
      enterPreset(s, scene);
      break;
    case 'setdifficulty_int':
      enterSetdifficultyInt(s, scene);
      break;
    case 'setdifficulty':
      enterSetdifficulty(s, scene);
      break;
    case 'getdifficulty':
      enterGetdifficulty(s, scene);
      break;
    case 'getexpadj':
      enterGetexpadj(s, scene);
      break;
    case 'get_exp_gain':
      enterGetExpGain(s, scene);
      break;
    case 'get_deg_loss':
      enterGetDegLoss(s, scene);
      break;
    case 'addmoney':
      enterAddmoney(s, scene);
      break;
    case 'addmoneystring':
      enterAddmoneystring(s, scene);
      break;
    case 'spendmoney':
      enterSpendmoney(s, scene);
      break;
    case 'get_multiplied':
      enterGetMultiplied(s, scene);
      break;
    case 'spendmoneystring':
      enterSpendmoneystring(s, scene);
      break;
    case 'getmaxgrades':
      enterGetmaxgrades(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _difficulty: LocationDef = {
  name: '_difficulty',
  region: 'other',
  enter: enter,
};
