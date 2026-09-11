import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).placerParameter ?? {})['want_to_meet'] = 0;
  if ((Math.floor(Math.random() * 151) + 0) < ((s as any).pcs_apprnc ?? 0)  &&  ((Math.floor(Math.random() * 11) + 0) > 2  ||  ((s as any).placerParameter ?? 0)?.['friend_index'] === 14)) {
    ((s as any).placerParameter ?? {})['want_to_meet'] = 1;
    if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
      ((s as any).placerStringParameter ?? {})['text_someone'] = 'guy';
    } else {
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
        ((s as any).placerStringParameter ?? {})['text_someone'] = 'two guys';
      } else {
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 3) {
          ((s as any).placerStringParameter ?? {})['text_someone'] = 'three guys';
        } else {
          if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 4) {
            ((s as any).placerStringParameter ?? {})['text_someone'] = 'four guys';
          } else {
            if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 5) {
              ((s as any).placerStringParameter ?? {})['text_someone'] = 'five guys';
            } else {
              if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 6) {
                ((s as any).placerStringParameter ?? {})['text_someone'] = 'six guys';
              }
            }
          }
        }
      }
    }
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 50  &&  ((s as any).placerParameter ?? 0)?.['know_slut'] === 0) {
      if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 1) {
        (s as any).knowrand = Math.floor(Math.random() * 2) + 0;
      } else {
        if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
          (s as any).knowrand = Math.floor(Math.random() * 5) + 0;
        }
      }
      if ((!((s as any).knowrand ?? 0))) {
        ((s as any).placerParameter ?? {})['know_slut'] = 1;
      }
    }
    if (((s as any).placerParameter ?? 0)?.['friend_index'] !== 0) {
      ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey ladies!';
    } else {
      ((s as any).placerParameter ?? {})['slut_visual'] = 0;
      if (((s as any).pcs_makeup ?? 0) === 4) {
        ((s as any).placerParameter ?? {})['slut_visual'] = (((s as any).placerParameter ?? {})['slut_visual'] ?? 0) + (1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0) {
        ((s as any).placerParameter ?? {})['slut_visual'] = (((s as any).placerParameter ?? {})['slut_visual'] ?? 0) + (1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
        ((s as any).placerParameter ?? {})['slut_visual'] = (((s as any).placerParameter ?? {})['slut_visual'] ?? 0) + (1);
      }
      if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
        }
        if ((!(Math.floor(Math.random() * 2) + 0))) {
        }
      }
      ((s as any).placerStringParameter ?? {})['text_start_meet'] = '' + qspUntranslated(s, "txt_a>", { location: "placer_man" }) + ' <<$txt_b>>';
    }
  } else {
    if (((s as any).placerParameter ?? 0)?.['friend_index'] === 0) {
      if (((s as any).placerParameter ?? 0)?.['know_slut'] === 1) {
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
          ((s as any).placerStringParameter ?? {})['text_start_meet'] = ' The guy grins, he recognizes who you are.';
        } else {
          if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 1) {
            ((s as any).placerStringParameter ?? {})['text_start_meet'] = ' The guys whisper to one another: "Look guys, it\'s ' + qspUntranslated(s, "pcs_nickname>", { location: "placer_man" }) + '. She\'s a pretty big <<$gnikname>>, from what I heard."';
          }
        }
      } else {
        ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey girl!';
        if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
          ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hi honey!';
        }
      }
    } else {
      ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey girl!';
      if (((s as any).placerParameter ?? 0)?.['recognize_status'] === 2) {
        ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hi honey!';
      }
    }
  }
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Nice clothes, slut!';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey, slut!';
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey, whore!';
        } else {
          if (((s as any).temp_rand ?? 0) === 3) {
            ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Hey girl!';
          } else {
            if (((s as any).temp_rand ?? 0) === 4) {
              ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Aren\'t you a whore?';
            } else {
              ((s as any).placerStringParameter ?? {})['text_start_meet'] = 'Oh, a prostitute!';
            }
          }
        }
      }
    }
    ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + (' ');
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('How much for a blowjob?');
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('Didn\'t I see you at the brothel the other day?');
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('I\'m saving up for you, babe!');
        } else {
          if (((s as any).temp_rand ?? 0) === 3) {
            ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('Nice rack!');
          } else {
            if (((s as any).temp_rand ?? 0) === 4) {
              ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('Is this where you usually work?');
            } else {
              ((s as any).placerStringParameter ?? {})['text_start_meet'] = (((s as any).placerStringParameter ?? {})['text_start_meet'] ?? 0) + ('I\'d like to see you work that mouth.');
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const placer_man: LocationDef = {
  name: 'placer_man',
  region: 'other',
  enter: enter,
};
