import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_set_preference', 'A1', 'body_ass_flat', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'body_ass_big', 'approve');
  qspCall(s, 'npc_set_preference', 'A1', 'body_ass_heart', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'body_ass_bubble', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_tits_small', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_tits_big', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'body_tits_huge', 'approve');
  qspCall(s, 'npc_set_preference', 'A1', 'body_lips_thin', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'body_lips_plump', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'body_bmi_starving', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_bmi_overweight', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'body_bmi_obese', 'hate');
  qspCall(s, 'npc_set_preference', 'A1', 'stats_strength_weak', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'stats_strength_athletic', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'stats_strength_strong', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'stats_strength_manly', 'hate');
  qspCall(s, 'npc_set_preference', 'A1', 'body_sweat_sweaty', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_sweat_stinky', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_fit', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'body_pregnant', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'body_tan', 'approve');
  qspCall(s, 'npc_set_preference', 'A1', 'clothes_style_punk', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'clothes_style_goth', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'cosmetics_makeup_any', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'cosmetics_tattoo_visible', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'cum_face', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'cum_clothes', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_pubes_shaven', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_pubes_grown', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_pubes_styled', 'neutral');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_leg', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_color_blonde', 'like');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_color_dyed', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_length_veryshort', 'hate');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_length_short', 'dislike');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_length_chin', 'disapprove');
  qspCall(s, 'npc_set_preference', 'A1', 'hair_length_long', 'like');
  if (((s as any).locArgs?.[0] ?? 0) === 'A2') {
    qspCall(s, 'npc_set_preference', 'A2', 'body_tits_average', 'approve');
    qspCall(s, 'npc_set_preference', 'A2', 'body_tits_huge', 'disapprove');
    qspCall(s, 'npc_set_preference', 'A2', 'body_bmi_starving', 'disapprove');
    qspCall(s, 'npc_set_preference', 'A2', 'body_bmi_obese', 'dislike');
    qspCall(s, 'npc_set_preference', 'A2', 'stats_strength_manly', 'disapprove');
    qspCall(s, 'npc_set_preference', 'A2', 'clothes_style_bimbo', 'dislike');
    qspCall(s, 'npc_set_preference', 'A2', 'cum_face', 'dislike');
    qspCall(s, 'npc_set_preference', 'A2', 'cum_clothes', 'dislike');
    qspCall(s, 'npc_set_preference', 'A2', 'hair_pubes_shaven', 'approve');
    qspCall(s, 'npc_set_preference', 'A2', 'hair_pubes_grown', 'disapprove');
    qspCall(s, 'npc_set_preference', 'A2', 'hair_leg_not', 'dislike');
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'A3') {
      qspCall(s, 'npc_set_preference', 'A3', 'body_ass_average', 'approve');
      qspCall(s, 'npc_set_preference', 'A3', 'body_ass_bubble', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'body_tits_big', 'disapprove');
      qspCall(s, 'npc_set_preference', 'A3', 'body_tits_huge', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'body_bmi_starving', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'body_bmi_overweight', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'body_bmi_obese', 'hate');
      qspCall(s, 'npc_set_preference', 'A3', 'stats_strength_weak', 'disapprove');
      qspCall(s, 'npc_set_preference', 'A3', 'stats_strength_athletic', 'like');
      qspCall(s, 'npc_set_preference', 'A3', 'body_fit', 'love');
      qspCall(s, 'npc_set_preference', 'A3', 'body_pregnant', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'body_tan', 'approve');
      qspCall(s, 'npc_set_preference', 'A3', 'clothes_style_bimbo', 'dislike');
      qspCall(s, 'npc_set_preference', 'A3', 'cum_face', 'disapprove');
      qspCall(s, 'npc_set_preference', 'A3', 'cum_clothes', 'disapprove');
      qspCall(s, 'npc_set_preference', 'A3', 'hair_pubes_shaven', 'approve');
      qspCall(s, 'npc_set_preference', 'A3', 'hair_pubes_grown', 'disapprove');
      qspCall(s, 'npc_set_preference', 'A3', 'hair_leg_not', 'dislike');
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'A4') {
        qspCall(s, 'npc_set_preference', 'A4', 'body_ass_big', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'body_ass_heart', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'body_ass_bubble', 'dislike');
        qspCall(s, 'npc_set_preference', 'A4', 'body_tits_small', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'body_tits_big', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'body_tits_huge', 'dislike');
        qspCall(s, 'npc_set_preference', 'A4', 'stats_strength_weak', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'stats_strength_athletic', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'stats_strength_strong', 'like');
        qspCall(s, 'npc_set_preference', 'A4', 'stats_strength_manly', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'body_fit', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'clothes_style_bimbo', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'clothes_style_punk', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'cosmetics_makeup_any', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'cosmetics_tattoo_visible', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'cum_face', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'cum_clothes', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_pubes_grown', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_pubes_styled', 'like');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_length_short', 'approve');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_length_shoulder', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_length_bra', 'disapprove');
        qspCall(s, 'npc_set_preference', 'A4', 'hair_length_long', 'disapprove');
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'A5') {
          qspCall(s, 'npc_set_preference', 'A5', 'stats_strength_strong', 'like');
          qspCall(s, 'npc_set_preference', 'A5', 'stats_strength_manly', 'like');
          qspCall(s, 'npc_set_preference', 'A5', 'body_tan', 'like');
          qspCall(s, 'npc_set_preference', 'A5', 'clothes_style_bimbo', 'like');
          qspCall(s, 'npc_set_preference', 'A5', 'cosmetics_makeup_any', 'like');
          qspCall(s, 'npc_set_preference', 'A5', 'cum_face', 'dislike');
          qspCall(s, 'npc_set_preference', 'A5', 'cum_clothes', 'dislike');
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'A6') {
            qspCall(s, 'npc_set_preference', 'A6', 'body_ass_flat', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'body_tits_small', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'body_tits_huge', 'approve');
            qspCall(s, 'npc_set_preference', 'A6', 'stats_strength_weak', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'stats_strength_athletic', 'approve');
            qspCall(s, 'npc_set_preference', 'A6', 'stats_strength_strong', 'approve');
            qspCall(s, 'npc_set_preference', 'A6', 'stats_strength_manly', 'like');
            qspCall(s, 'npc_set_preference', 'A6', 'body_fit', 'like');
            qspCall(s, 'npc_set_preference', 'A6', 'clothes_style_punk', 'approve');
            qspCall(s, 'npc_set_preference', 'A6', 'clothes_style_goth', 'approve');
            qspCall(s, 'npc_set_preference', 'A6', 'cum_face', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'cum_clothes', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'hair_pubes_grown', 'disapprove');
            qspCall(s, 'npc_set_preference', 'A6', 'hair_leg', 'disapprove');
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'A7') {
              qspCall(s, 'npc_set_preference', 'A7', 'cosmetics_makeup_any', 'like');
              qspCall(s, 'npc_set_preference', 'A7', 'cum_face', 'dislike');
              qspCall(s, 'npc_set_preference', 'A7', 'cum_clothes', 'dislike');
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'A8') {
                qspCall(s, 'npc_set_preference', 'A8', 'body_pregnant', 'dislike');
                qspCall(s, 'npc_set_preference', 'A8', 'stats_strength_strong', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'stats_strength_manly', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'body_tan', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'clothes_style_bimbo', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'clothes_style_punk', 'dislike');
                qspCall(s, 'npc_set_preference', 'A8', 'clothes_thin_high', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'clothes_skirt_short', 'like');
                qspCall(s, 'npc_set_preference', 'A8', 'cosmetics_piercing_visible', 'dislike');
                qspCall(s, 'npc_set_preference', 'A8', 'cosmetics_tattoo_visible', 'dislike');
                qspCall(s, 'npc_set_preference', 'A8', 'cum_face', 'dislike');
                qspCall(s, 'npc_set_preference', 'A8', 'cum_clothes', 'dislike');
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'A9') {
                  qspCall(s, 'npc_set_preference', 'A9', 'body_ass_flat', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_ass_big', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_ass_heart', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_ass_bubble', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_tits_small', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_tits_big', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_tits_huge', 'like');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_lips_plump', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_bmi_starving', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_bmi_underweight', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_bmi_overweight', 'disapprove');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_bmi_obese', 'hate');
                  qspCall(s, 'npc_set_preference', 'A9', 'stats_strength_strong', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'stats_strength_manly', 'hate');
                  qspCall(s, 'npc_set_preference', 'A9', 'body_pregnant', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'clothes_skirt_short', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'clothes_style_punk', 'like');
                  qspCall(s, 'npc_set_preference', 'A9', 'cosmetics_makeup_any', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'cosmetics_piercing_visible', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'cosmetics_tattoo_visible', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'hair_pubes_shaven', 'approve');
                  qspCall(s, 'npc_set_preference', 'A9', 'hair_pubes_grown', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'hair_leg', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'hair_length_veryshort', 'dislike');
                  qspCall(s, 'npc_set_preference', 'A9', 'hair_length_short', 'disapprove');
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'A10') {
                    qspCall(s, 'npc_set_preference', 'A10', 'body_ass_flat', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_ass_big', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_ass_heart', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_ass_bubble', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_tits_small', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_tits_big', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_tits_huge', 'like');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_lips_plump', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_bmi_starving', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_bmi_underweight', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_bmi_overweight', 'disapprove');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_bmi_obese', 'hate');
                    qspCall(s, 'npc_set_preference', 'A10', 'stats_strength_weak', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'stats_strength_strong', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'stats_strength_manly', 'hate');
                    qspCall(s, 'npc_set_preference', 'A10', 'body_pregnant', 'hate');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_exposed_bra', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_exposed_panties', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_skirt_long', 'disapprove');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_skirt_short', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_style_bimbo', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'clothes_style_punk', 'like');
                    qspCall(s, 'npc_set_preference', 'A10', 'cosmetics_makeup_any', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'cosmetics_piercing_visible', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'cosmetics_tattoo_visible', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'cum_face', 'like');
                    qspCall(s, 'npc_set_preference', 'A10', 'cum_clothes', 'like');
                    qspCall(s, 'npc_set_preference', 'A10', 'hair_pubes_shaven', 'approve');
                    qspCall(s, 'npc_set_preference', 'A10', 'hair_pubes_grown', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'hair_leg', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'hair_length_veryshort', 'dislike');
                    qspCall(s, 'npc_set_preference', 'A10', 'hair_length_short', 'disapprove');
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 'A11') {
                      qspCall(s, 'npc_set_preference', 'A11', 'body_ass_bubble', 'disapprove');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_tits_big', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_tits_huge', 'like');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_lips_plump', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_bmi_starving', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_bmi_underweight', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_bmi_overweight', 'disapprove');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_bmi_obese', 'dislike');
                      qspCall(s, 'npc_set_preference', 'A11', 'stats_strength_weak', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'stats_strength_strong', 'dislike');
                      qspCall(s, 'npc_set_preference', 'A11', 'stats_strength_manly', 'hate');
                      qspCall(s, 'npc_set_preference', 'A11', 'body_pregnant', 'hate');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_exposed_bra', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_exposed_panties', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_skirt_long', 'disapprove');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_skirt_short', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_style_bimbo', 'disapprove');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_style_punk', 'like');
                      qspCall(s, 'npc_set_preference', 'A11', 'clothes_style_goth', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'cosmetics_makeup_any', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'cosmetics_piercing_visible', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'cosmetics_tattoo_visible', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'cum_face', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'cum_clothes', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'hair_pubes_shaven', 'approve');
                      qspCall(s, 'npc_set_preference', 'A11', 'hair_pubes_grown', 'hate');
                      qspCall(s, 'npc_set_preference', 'A11', 'hair_leg', 'hate');
                      qspCall(s, 'npc_set_preference', 'A11', 'hair_length_veryshort', 'dislike');
                      qspCall(s, 'npc_set_preference', 'A11', 'hair_length_short', 'disapprove');
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 'A12') {
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'A13') {
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 'A14') {
                            qspCall(s, 'npc_set_preference', 'A14', 'body_ass_bubble', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_ass_heart', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_ass_big', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_bmi_starving', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_bmi_normal', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_fit', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_tan', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_tits_big', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'body_tits_average', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_bimbo', 'hate');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_punk', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_thin_high', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_ass', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_bra', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_panties', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_pussy', 'hate');
                            qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_tits', 'hate');
                            qspCall(s, 'npc_set_preference', 'A14', 'cosmetics_deodorant', 'like');
                            qspCall(s, 'npc_set_preference', 'A14', 'cosmetics_makeup_any', 'love');
                            qspCall(s, 'npc_set_preference', 'A14', 'cosmetics_piercing_visible', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'cosmetics_tattoo_visible', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'hair_pubes_shaven', 'love');
                            qspCall(s, 'npc_set_preference', 'A14', 'hair_pubes_grown', 'dislike');
                            qspCall(s, 'npc_set_preference', 'A14', 'hair_leg', 'hate');
                            qspCall(s, 'npc_set_preference', 'A14', 'hair_leg_not', 'love');
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 'A15') {
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 'A16') {
                                qspCall(s, 'npc_set_preference', 'A16', 'body_tits_small', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_bmi_starving', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_bmi_underweight', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_bmi_normal', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_bmi_obese', 'disaprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'stats_strength_normal', 'love');
                                qspCall(s, 'npc_set_preference', 'A16', 'stats_strength_athletic', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'stats_strength_strong', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'stats_strength_manly', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_sweat_sweaty', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_sweat_stinky', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'body_fit', 'approve');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_exposed_ass', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_exposed_bra', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_exposed_panties', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_exposed_pussy', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_exposed_tits', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_skirt_long', 'approve');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_skirt_normal', 'approve');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_skirt_short', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_thin_high', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_style_bimbo', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_style_punk', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'clothes_style_goth', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'cosmetics_deodorant', 'approve');
                                qspCall(s, 'npc_set_preference', 'A16', 'cosmetics_makeup_any', 'love');
                                qspCall(s, 'npc_set_preference', 'A16', 'cosmetics_piercing_visible', 'approve');
                                qspCall(s, 'npc_set_preference', 'A16', 'cosmetics_tattoo_visible', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'cum_face', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'cum_clothes', 'hate');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_pubes_shaven', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_pubes_grown', 'neutral');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_pubes_styled', 'love');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_leg', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_leg_not', 'like');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_color_blonde', 'dislike');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_color_dyed', 'disapprove');
                                qspCall(s, 'npc_set_preference', 'A16', 'hair_length_veryshort', 'dislike');
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 'A17') {
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 'A18') {
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 'A19') {
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 'A20') {
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_ass_bubble', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_tits_big', 'disapprove');
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_tits_huge', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_bmi_starving', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_bmi_underweight', 'disapprove');
                                        qspCall(s, 'npc_set_preference', 'A20', 'body_bmi_obese', 'disapprove');
                                        qspCall(s, 'npc_set_preference', 'A20', 'stats_strength_weak', 'disapprove');
                                        qspCall(s, 'npc_set_preference', 'A20', 'stats_strength_athletic', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'stats_strength_strong', 'like');
                                        qspCall(s, 'npc_set_preference', 'A20', 'stats_strength_manly', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'clothes_style_bimbo', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'clothes_style_punk', 'like');
                                        qspCall(s, 'npc_set_preference', 'A20', 'cosmetics_makeup_any', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'cum_face', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'cum_clothes', 'dislike');
                                        qspCall(s, 'npc_set_preference', 'A20', 'hair_pubes_styled', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'hair_color_dyed', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'hair_length_veryshort', 'approve');
                                        qspCall(s, 'npc_set_preference', 'A20', 'hair_length_short', 'approve');
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 'A21') {
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_ass_average', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_ass_bubble', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_tits_average', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_tits_huge', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_starving', 'disapprove');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_overweight', 'disapprove');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_obese', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_weak', 'disapprove');
                                          qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_athletic', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_strong', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_manly', 'hate');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_fit', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'body_tan', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'clothes_style_bimbo', 'hate');
                                          qspCall(s, 'npc_set_preference', 'A21', 'clothes_style_punk', 'love');
                                          qspCall(s, 'npc_set_preference', 'A21', 'clothes_style_goth', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'cosmetics_makeup_any', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'cosmetics_piercing_visible', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'cosmetics_tattoo_visible', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'cum_face', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'cum_clothes', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_pubes_shaven', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_pubes_grown', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_pubes_styled', 'approve');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_leg_not', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_color_dyed', 'like');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_length_veryshort', 'dislike');
                                          qspCall(s, 'npc_set_preference', 'A21', 'hair_length_short', 'dislike');
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 'A22') {
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 'A23') {
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_ass_big', 'approve');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_ass_heart', 'approve');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_ass_bubble', 'love');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_tits_big', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_tits_huge', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_bmi_starving', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_bmi_underweight', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_bmi_overweight', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_bmi_obese', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'stats_strength_weak', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'stats_strength_athletic', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'stats_strength_manly', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_sweat_sweaty', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_sweat_stinky', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_fit', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'body_tan', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_exposed_ass', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_exposed_bra', 'disapprove');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_exposed_panties', 'disapprove');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_exposed_pussy', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_exposed_tits', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_skirt_short', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_style_punk', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'clothes_style_goth', 'disapprove');
                                              qspCall(s, 'npc_set_preference', 'A23', 'cosmetics_makeup_any', 'love');
                                              qspCall(s, 'npc_set_preference', 'A23', 'cosmetics_piercing_visible', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'cum_face', 'hate');
                                              qspCall(s, 'npc_set_preference', 'A23', 'cum_clothes', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_pubes_shaven', 'like');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_pubes_grown', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_pubes_styled', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_leg', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_length_veryshort', 'dislike');
                                              qspCall(s, 'npc_set_preference', 'A23', 'hair_length_short', 'dislike');
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'A24') {
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_ass_bubble', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_tits_huge', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'body_pregnant', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_starving', 'disapprove');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_overweight', 'disapprove');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_bmi_obese', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_weak', 'disapprove');
                                                qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_athletic', 'approve');
                                                qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_strong', 'approve');
                                                qspCall(s, 'npc_set_preference', 'A21', 'stats_strength_manly', 'disapprove');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_fit', 'like');
                                                qspCall(s, 'npc_set_preference', 'A21', 'body_tan', 'like');
                                                qspCall(s, 'npc_set_preference', 'A24', 'clothes_style_bimbo', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'clothes_style_punk', 'like');
                                                qspCall(s, 'npc_set_preference', 'A24', 'clothes_style_goth', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'clothes_thin_high', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'clothes_skirt_short', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'cosmetics_piercing_visible', 'like');
                                                qspCall(s, 'npc_set_preference', 'A24', 'cosmetics_tattoo_visible', 'like');
                                                qspCall(s, 'npc_set_preference', 'A24', 'cum_face', 'dislike');
                                                qspCall(s, 'npc_set_preference', 'A24', 'cum_clothes', 'dislike');
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'A25') {
                                                  qspCall(s, 'npc_set_preference', 'A25', 'body_ass_average', 'approve');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'body_ass_heart', 'approve');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'body_bmi_starving', 'disapprove');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'body_bmi_obese', 'disapprove');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'stats_strength_strong', 'disapprove');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'stats_strength_manly', 'dislike');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'clothes_skirt_short', 'approve');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'clothes_style_bimbo', 'disapprove');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'cosmetics_makeup_any', 'like');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'hair_pubes_shaven', 'approve');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'hair_pubes_grown', 'disapprove');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'hair_leg', 'dislike');
                                                  qspCall(s, 'npc_set_preference', 'A25', 'hair_length_veryshort', 'disapprove');
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A26') {
                                                    qspCall(s, 'npc_set_preference', 'A26', 'body_pregnant', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'stats_strength_strong', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'stats_strength_manly', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'clothes_style_bimbo', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'clothes_style_punk', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'clothes_style_goth', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'clothes_thin_high', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'clothes_skirt_short', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'cosmetics_makeup_any', 'like');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'cosmetics_piercing_visible', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'cum_face', 'dislike');
                                                    qspCall(s, 'npc_set_preference', 'A26', 'cum_clothes', 'dislike');
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A28') {
                                                      qspCall(s, 'npc_set_preference', 'A28', 'body_pregnant', 'dislike');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'stats_strength_strong', 'dislike');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'stats_strength_manly', 'dislike');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'body_tan', 'like');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'clothes_style_bimbo', 'like');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'clothes_style_punk', 'dislike');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'clothes_style_goth', 'dislike');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'cosmetics_makeup_any', 'like');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'cum_face', 'like');
                                                      qspCall(s, 'npc_set_preference', 'A28', 'cum_clothes', 'like');
                                                    } else {
                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A29') {
                                                        qspCall(s, 'npc_set_preference', 'A29', 'body_pregnant', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'stats_strength_strong', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'stats_strength_manly', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'clothes_style_bimbo', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'clothes_style_punk', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'clothes_style_goth', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'clothes_thin_high', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'clothes_skirt_short', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'cosmetics_piercing_visible', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'cosmetics_tattoo_visible', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'cum_face', 'dislike');
                                                        qspCall(s, 'npc_set_preference', 'A29', 'cum_clothes', 'dislike');
                                                      } else {
                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A30') {
                                                          qspCall(s, 'npc_set_preference', 'A30', 'body_tan', 'like');
                                                          qspCall(s, 'npc_set_preference', 'A30', 'clothes_style_bimbo', 'dislike');
                                                          qspCall(s, 'npc_set_preference', 'A30', 'cosmetics_makeup_any', 'like');
                                                          qspCall(s, 'npc_set_preference', 'A30', 'cum_face', 'dislike');
                                                          qspCall(s, 'npc_set_preference', 'A30', 'cum_clothes', 'dislike');
                                                        } else {
                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A33') {
                                                          } else {
                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A34') {
                                                            } else {
                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A35') {
                                                                qspCall(s, 'npc_set_preference', 'A35', 'body_pregnant', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'stats_strength_strong', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'stats_strength_manly', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'clothes_style_bimbo', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'clothes_style_punk', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'clothes_style_goth', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'clothes_thin_high', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'clothes_skirt_short', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'cosmetics_makeup_any', 'like');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'cosmetics_piercing_visible', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'cum_face', 'dislike');
                                                                qspCall(s, 'npc_set_preference', 'A35', 'cum_clothes', 'dislike');
                                                              } else {
                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A54') {
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'body_pregnant', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'stats_strength_strong', 'dislike');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'stats_strength_manly', 'dislike');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'body_tan', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'clothes_style_bimbo', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'clothes_thin_high', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'clothes_skirt_short', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'cosmetics_makeup_any', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'cum_face', 'like');
                                                                  qspCall(s, 'npc_set_preference', 'A54', 'cum_clothes', 'like');
                                                                } else {
                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A55') {
                                                                    qspCall(s, 'npc_set_preference', 'A55', 'clothes_thin_high', 'like');
                                                                    qspCall(s, 'npc_set_preference', 'A55', 'clothes_skirt_short', 'like');
                                                                    qspCall(s, 'npc_set_preference', 'A55', 'cosmetics_makeup_any', 'like');
                                                                  } else {
                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A56') {
                                                                    } else {
                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A57') {
                                                                      } else {
                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A58') {
                                                                        } else {
                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A59') {
                                                                          } else {
                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A69') {
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'stats_strength_strong', 'like');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'stats_strength_manly', 'like');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'clothes_style_bimbo', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'clothes_style_punk', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'clothes_style_goth', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'clothes_thin_high', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'clothes_skirt_short', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'cosmetics_piercing_visible', 'dislike');
                                                                              qspCall(s, 'npc_set_preference', 'A69', 'cosmetics_tattoo_visible', 'dislike');
                                                                            } else {
                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A70') {
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'body_pregnant', 'dislike');
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'stats_strength_strong', 'dislike');
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'stats_strength_manly', 'dislike');
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'clothes_thin_high', 'like');
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'clothes_skirt_short', 'like');
                                                                                qspCall(s, 'npc_set_preference', 'A70', 'cosmetics_makeup_any', 'like');
                                                                              } else {
                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A71') {
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'body_pregnant', 'like');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'stats_strength_strong', 'like');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'stats_strength_manly', 'like');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'cosmetics_makeup_any', 'like');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'cosmetics_piercing_visible', 'dislike');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'cosmetics_tattoo_visible', 'dislike');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'cum_face', 'dislike');
                                                                                  qspCall(s, 'npc_set_preference', 'A71', 'cum_clothes', 'dislike');
                                                                                } else {
                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A72') {
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'body_pregnant', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'stats_strength_strong', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'stats_strength_manly', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'clothes_style_bimbo', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'clothes_style_punk', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'clothes_style_goth', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'clothes_thin_high', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'clothes_skirt_short', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'cosmetics_makeup_any', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'cosmetics_piercing_visible', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'cosmetics_tattoo_visible', 'dislike');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'cum_face', 'like');
                                                                                    qspCall(s, 'npc_set_preference', 'A72', 'cum_clothes', 'like');
                                                                                  } else {
                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A77') {
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'stats_strength_strong', 'dislike');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'stats_strength_manly', 'dislike');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'body_tan', 'dislike');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'clothes_style_goth', 'like');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'clothes_thin_high', 'like');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'clothes_skirt_short', 'like');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'cosmetics_makeup_any', 'like');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'cosmetics_piercing_visible', 'like');
                                                                                      qspCall(s, 'npc_set_preference', 'A77', 'cosmetics_tattoo_visible', 'like');
                                                                                    } else {
                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A82') {
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_ass_flat', 'disapprove');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_ass_big', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_ass_heart', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_ass_bubble', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_tits_small', 'disapprove');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_tits_big', 'like');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_tits_huge', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_lips_plump', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_lips_big', 'like');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_lips_pillowy', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'body_bmi_obese', 'dislike');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'stats_strength_strong', 'disapprove');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'stats_strength_manly', 'dislike');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'clothes_skirt_short', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'clothes_style_punk', 'like');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'clothes_style_goth', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'cosmetics_makeup_any', 'like');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'cosmetics_piercing_visible', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'cosmetics_tattoo_visible', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'cum_face', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'cum_clothes', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'hair_pubes_shaven', 'approve');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'hair_pubes_grown', 'disapprove');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'hair_leg', 'dislike');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'hair_color_dyed', 'like');
                                                                                        qspCall(s, 'npc_set_preference', 'A82', 'hair_curly', 'like');
                                                                                      } else {
                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A83') {
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'stats_strength_strong', 'dislike');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'stats_strength_manly', 'dislike');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'body_tan', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'clothes_style_bimbo', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'clothes_thin_high', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'clothes_skirt_short', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'cosmetics_makeup_any', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'cum_face', 'like');
                                                                                          qspCall(s, 'npc_set_preference', 'A83', 'cum_clothes', 'like');
                                                                                        } else {
                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A84') {
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_ass_flat', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_ass_average', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_tits_average', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_tits_huge', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_lips_plump', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_lips_big', 'like');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_lips_pillowy', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_bmi_starving', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_bmi_obese', 'dislike');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'stats_strength_athletic', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'stats_strength_strong', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'stats_strength_manly', 'dislike');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_fit', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_pregnant', 'dislike');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'body_tan', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'clothes_skirt_short', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'clothes_thin_high', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'clothes_style_bimbo', 'dislike');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'clothes_style_punk', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'clothes_style_goth', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'cosmetics_makeup_any', 'like');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'cosmetics_piercing_visible', 'approve');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'cosmetics_tattoo_visible', 'like');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'cum_face', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'cum_clothes', 'disapprove');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'hair_pubes_shaven', 'like');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'hair_pubes_grown', 'hate');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'hair_leg', 'hate');
                                                                                            qspCall(s, 'npc_set_preference', 'A84', 'hair_curly', 'like');
                                                                                          } else {
                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A89') {
                                                                                              qspCall(s, 'npc_set_preference', 'A89', 'stats_strength_strong', 'like');
                                                                                              qspCall(s, 'npc_set_preference', 'A89', 'stats_strength_manly', 'like');
                                                                                              qspCall(s, 'npc_set_preference', 'A89', 'cosmetics_makeup_any', 'like');
                                                                                            } else {
                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A112') {
                                                                                                qspCall(s, 'npc_set_preference', 'A112', 'stats_strength_strong', 'dislike');
                                                                                                qspCall(s, 'npc_set_preference', 'A112', 'stats_strength_manly', 'dislike');
                                                                                                qspCall(s, 'npc_set_preference', 'A112', 'body_tan', 'like');
                                                                                                qspCall(s, 'npc_set_preference', 'A112', 'clothes_style_bimbo', 'like');
                                                                                                qspCall(s, 'npc_set_preference', 'A112', 'cosmetics_makeup_any', 'like');
                                                                                              } else {
                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A122') {
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'body_pregnant', 'dislike');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'stats_strength_strong', 'dislike');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'stats_strength_manly', 'dislike');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'body_tan', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'clothes_style_bimbo', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'clothes_style_goth', 'dislike');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'clothes_thin_high', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'clothes_skirt_short', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'cosmetics_makeup_any', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'cum_face', 'like');
                                                                                                  qspCall(s, 'npc_set_preference', 'A122', 'cum_clothes', 'like');
                                                                                                } else {
                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A123') {
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'body_pregnant', 'dislike');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'stats_strength_strong', 'dislike');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'stats_strength_manly', 'dislike');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'body_tan', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'clothes_style_bimbo', 'dislike');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'clothes_style_punk', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'clothes_thin_high', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'clothes_skirt_short', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'cosmetics_makeup_any', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'cosmetics_piercing_visible', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'cosmetics_tattoo_visible', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'cum_face', 'like');
                                                                                                    qspCall(s, 'npc_set_preference', 'A123', 'cum_clothes', 'like');
                                                                                                  } else {
                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A124') {
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'body_pregnant', 'dislike');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'stats_strength_strong', 'dislike');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'stats_strength_manly', 'dislike');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'body_tan', 'dislike');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'clothes_style_bimbo', 'dislike');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'clothes_thin_high', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'clothes_skirt_short', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'cosmetics_makeup_any', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'cosmetics_piercing_visible', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'cosmetics_tattoo_visible', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'cum_face', 'like');
                                                                                                      qspCall(s, 'npc_set_preference', 'A124', 'cum_clothes', 'like');
                                                                                                    } else {
                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A125') {
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'body_pregnant', 'dislike');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'stats_strength_strong', 'dislike');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'stats_strength_manly', 'dislike');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'clothes_style_bimbo', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'clothes_style_punk', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'clothes_style_goth', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'clothes_thin_high', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'clothes_skirt_short', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'cosmetics_makeup_any', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'cosmetics_piercing_visible', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'cosmetics_tattoo_visible', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'cum_face', 'like');
                                                                                                        qspCall(s, 'npc_set_preference', 'A125', 'cum_clothes', 'like');
                                                                                                      } else {
                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A126') {
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'body_pregnant', 'dislike');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'stats_strength_strong', 'dislike');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'stats_strength_manly', 'dislike');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'body_tan', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'clothes_style_bimbo', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'clothes_thin_high', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'clothes_skirt_short', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'cosmetics_makeup_any', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'cum_face', 'like');
                                                                                                          qspCall(s, 'npc_set_preference', 'A126', 'cum_clothes', 'like');
                                                                                                        } else {
                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A127') {
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_ass_flat', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_ass_average', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_ass_heart', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_ass_bubble', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_tits_average', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_tits_big', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_lips_plump', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_lips_big', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_bmi_starving', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_bmi_overweight', 'dislike');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_bmi_obese', 'hate');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'stats_strength_athletic', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'stats_strength_strong', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'stats_strength_manly', 'dislike');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'body_fit', 'disapprove');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'clothes_skirt_short', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'clothes_thin_high', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'clothes_style_bimbo', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'clothes_style_punk', 'like');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'clothes_style_goth', 'like');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'cosmetics_makeup_any', 'like');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'cosmetics_piercing_visible', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'cosmetics_tattoo_visible', 'like');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'cum_face', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'cum_clothes', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'hair_pubes_shaven', 'like');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'hair_pubes_grown', 'hate');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'hair_leg', 'hate');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'hair_color_dyed', 'approve');
                                                                                                            qspCall(s, 'npc_set_preference', 'A127', 'hair_straight', 'approve');
                                                                                                          } else {
                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A128') {
                                                                                                              qspCall(s, 'npc_set_preference', 'A128', 'body_tan', 'like');
                                                                                                              qspCall(s, 'npc_set_preference', 'A128', 'cosmetics_makeup_any', 'like');
                                                                                                            } else {
                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A129') {
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'body_pregnant', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'stats_strength_strong', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'stats_strength_manly', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'clothes_style_bimbo', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'clothes_style_punk', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'clothes_style_goth', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'clothes_thin_high', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'clothes_skirt_short', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'cum_face', 'dislike');
                                                                                                                qspCall(s, 'npc_set_preference', 'A129', 'cum_clothes', 'dislike');
                                                                                                              } else {
                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A130') {
                                                                                                                  qspCall(s, 'npc_set_preference', 'A130', 'body_tan', 'like');
                                                                                                                  qspCall(s, 'npc_set_preference', 'A130', 'clothes_style_bimbo', 'like');
                                                                                                                  qspCall(s, 'npc_set_preference', 'A130', 'cosmetics_makeup_any', 'like');
                                                                                                                } else {
                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A131') {
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'body_pregnant', 'dislike');
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'stats_strength_strong', 'like');
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'stats_strength_manly', 'like');
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'body_tan', 'like');
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'cosmetics_makeup_any', 'like');
                                                                                                                    qspCall(s, 'npc_set_preference', 'A131', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                  } else {
                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A132') {
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'stats_strength_strong', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'stats_strength_manly', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'body_tan', 'like');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'clothes_style_bimbo', 'like');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'clothes_style_punk', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'clothes_style_goth', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'cosmetics_makeup_any', 'like');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'cum_face', 'dislike');
                                                                                                                      qspCall(s, 'npc_set_preference', 'A132', 'cum_clothes', 'dislike');
                                                                                                                    } else {
                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A133') {
                                                                                                                        qspCall(s, 'npc_set_preference', 'A133', 'body_pregnant', 'like');
                                                                                                                        qspCall(s, 'npc_set_preference', 'A133', 'body_tan', 'like');
                                                                                                                        qspCall(s, 'npc_set_preference', 'A133', 'cosmetics_makeup_any', 'like');
                                                                                                                      } else {
                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A134') {
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'stats_strength_strong', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'stats_strength_manly', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'clothes_style_bimbo', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'clothes_style_punk', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'clothes_style_goth', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'clothes_thin_high', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'clothes_skirt_short', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'cosmetics_makeup_any', 'like');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'cum_face', 'like');
                                                                                                                          qspCall(s, 'npc_set_preference', 'A134', 'cum_clothes', 'like');
                                                                                                                        } else {
                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A135') {
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'stats_strength_strong', 'like');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'stats_strength_manly', 'like');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'clothes_style_bimbo', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'clothes_style_punk', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'clothes_style_goth', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'clothes_thin_high', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'clothes_skirt_short', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'cosmetics_makeup_any', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'cum_face', 'dislike');
                                                                                                                            qspCall(s, 'npc_set_preference', 'A135', 'cum_clothes', 'dislike');
                                                                                                                          } else {
                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A136') {
                                                                                                                              qspCall(s, 'npc_set_preference', 'A136', 'body_tan', 'like');
                                                                                                                              qspCall(s, 'npc_set_preference', 'A136', 'clothes_style_bimbo', 'like');
                                                                                                                              qspCall(s, 'npc_set_preference', 'A136', 'cosmetics_makeup_any', 'like');
                                                                                                                            } else {
                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A137') {
                                                                                                                                qspCall(s, 'npc_set_preference', 'A137', 'body_tan', 'like');
                                                                                                                                qspCall(s, 'npc_set_preference', 'A137', 'clothes_style_bimbo', 'dislike');
                                                                                                                                qspCall(s, 'npc_set_preference', 'A137', 'cosmetics_makeup_any', 'like');
                                                                                                                              } else {
                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A138') {
                                                                                                                                  qspCall(s, 'npc_set_preference', 'A138', 'clothes_thin_high', 'like');
                                                                                                                                  qspCall(s, 'npc_set_preference', 'A138', 'clothes_skirt_short', 'like');
                                                                                                                                  qspCall(s, 'npc_set_preference', 'A138', 'cosmetics_makeup_any', 'like');
                                                                                                                                } else {
                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A139') {
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_ass_average', 'approve');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_ass_heart', 'approve');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_ass_bubble', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_lips_thin', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_bmi_starving', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_bmi_overweight', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_bmi_obese', 'hate');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'stats_strength_athletic', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'stats_strength_strong', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'stats_strength_manly', 'hate');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'body_tan', 'approve');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_exposed_ass', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_exposed_panties', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_exposed_tits', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_style_bimbo', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_style_punk', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'clothes_style_goth', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'cosmetics_makeup_any', 'approve');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'cosmetics_tattoo_visible', 'disapprove');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'cum_face', 'hate');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'cum_clothes', 'hate');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'hair_pubes_shaven', 'approve');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'hair_pubes_grown', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'hair_leg', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'hair_length_veryshort', 'dislike');
                                                                                                                                    qspCall(s, 'npc_set_preference', 'A139', 'hair_length_short', 'disapprove');
                                                                                                                                  } else {
                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A140') {
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_ass_flat', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_ass_average', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_ass_big', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_ass_heart', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_tits_small', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_tits_big', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_lips_thin', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_lips_plump', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_bmi_underweight', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_bmi_overweight', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_bmi_obese', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'stats_strength_weak', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'stats_strength_athletic', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'stats_strength_strong', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'stats_strength_manly', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_sweat_sweaty', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_sweat_stinky', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_pregnant', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'body_tan', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_exposed_ass', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_exposed_panties', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_exposed_pussy', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_exposed_tits', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_skirt_long', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_skirt_normal', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_skirt_short', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'clothes_style_punk', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'cosmetics_makeup_any', 'love');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'cosmetics_tattoo_visible', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'cum_face', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'cum_clothes', 'hate');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_pubes_shaven', 'like');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_pubes_grown', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_leg', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_leg_not', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_length_veryshort', 'dislike');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_length_short', 'disapprove');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_length_bra', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_length_long', 'approve');
                                                                                                                                      qspCall(s, 'npc_set_preference', 'A140', 'hair_straight', 'approve');
                                                                                                                                    } else {
                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A141') {
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'body_sweat_stinky', 'disapprove');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'body_fit', 'approve');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'body_pregnant', 'disapprove');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_exposed_ass', 'dislike');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_exposed_bra', 'disapprove');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_exposed_panties', 'disapprove');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_exposed_tits', 'dislike');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'cum_face', 'hate');
                                                                                                                                        qspCall(s, 'npc_set_preference', 'A141', 'cum_clothes', 'hate');
                                                                                                                                      } else {
                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A142') {
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'body_bmi_obese', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'stats_strength_strong', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'stats_strength_manly', 'dislike');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'body_sweat_sweaty', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'body_sweat_stinky', 'dislike');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_exposed_ass', 'dislike');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_exposed_bra', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_exposed_panties', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_exposed_tits', 'dislike');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_skirt_long', 'approve');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_thin_high', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_style_punk', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'clothes_style_goth', 'approve');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'cosmetics_tattoo_visible', 'disapprove');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'cum_face', 'hate');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'cum_clothes', 'hate');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'hair_length_bra', 'approve');
                                                                                                                                          qspCall(s, 'npc_set_preference', 'A142', 'hair_length_long', 'approve');
                                                                                                                                        } else {
                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A143') {
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_ass_bubble', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_tits_huge', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_lips_pillowy', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_bmi_overweight', 'dislike');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_bmi_obese', 'hate');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'stats_strength_weak', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'stats_strength_athletic', 'approve');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'stats_strength_strong', 'approve');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'stats_strength_manly', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_fit', 'approve');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'body_pregnant', 'hate');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'clothes_skirt_long', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'clothes_style_bimbo', 'hate');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'clothes_style_punk', 'love');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'clothes_style_goth', 'love');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'cosmetics_makeup_any', 'like');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'cosmetics_piercing_visible', 'like');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'cosmetics_tattoo_visible', 'love');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_pubes_shaven', 'approve');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_pubes_grown', 'hate');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_leg', 'dislike');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_color_dyed', 'approve');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_length_veryshort', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_length_short', 'disapprove');
                                                                                                                                            qspCall(s, 'npc_set_preference', 'A143', 'hair_length_long', 'disapprove');
                                                                                                                                          } else {
                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A144') {
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_ass_flat', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_ass_heart', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_ass_bubble', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_tits_small', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_tits_average', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_tits_huge', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_lips_thin', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_lips_pillowy', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_bmi_starving', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_bmi_overweight', 'dislike');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_bmi_obese', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'stats_strength_strong', 'dislike');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'stats_strength_manly', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_sweat_stinky', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_fit', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_pregnant', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_tan', 'neutral');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'body_tan_not', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_exposed_ass', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_exposed_bra', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_exposed_panties', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_exposed_pussy', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_exposed_tits', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_skirt_long', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_skirt_short', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_thin_high', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_style_bimbo', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_style_punk', 'love');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'clothes_style_goth', 'love');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'cosmetics_makeup_any', 'like');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'cosmetics_piercing_visible', 'like');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'cosmetics_tattoo_visible', 'love');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_pubes_shaven', 'approve');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_pubes_grown', 'hate');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_leg', 'dislike');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_color_dyed', 'love');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_length_veryshort', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_length_short', 'disapprove');
                                                                                                                                              qspCall(s, 'npc_set_preference', 'A144', 'hair_straight', 'approve');
                                                                                                                                            } else {
                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A145') {
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_ass_flat', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_ass_big', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_ass_bubble', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_tits_big', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_tits_huge', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_lips_big', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_lips_pillowy', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_bmi_starving', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_bmi_underweight', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_bmi_overweight', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_bmi_obese', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'stats_strength_weak', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'stats_strength_normal', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'stats_strength_strong', 'love');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'stats_strength_manly', 'like');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_fit', 'love');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'body_pregnant', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_exposed_ass', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_exposed_bra', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_exposed_panties', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_exposed_pussy', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_exposed_tits', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_skirt_long', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_skirt_normal', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_skirt_short', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_thin_high', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_style_bimbo', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_style_punk', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'clothes_style_goth', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'cosmetics_makeup_any', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'cum_face', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'cum_clothes', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_pubes_shaven', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_pubes_grown', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_leg', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_color_black', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_color_brown', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_color_red', 'dislike');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_color_blonde', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_veryshort', 'approve');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_short', 'like');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_chin', 'love');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_shoulder', 'like');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_bra', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_length_long', 'hate');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_curly', 'disapprove');
                                                                                                                                                qspCall(s, 'npc_set_preference', 'A145', 'hair_straight', 'approve');
                                                                                                                                              } else {
                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A146') {
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_ass_flat', 'disapprove');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_ass_big', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_ass_heart', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_ass_bubble', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_tits_small', 'disapprove');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_tits_big', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_tits_huge', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_lips_thin', 'disapprove');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_lips_plump', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_lips_big', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_lips_pillowy', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_bmi_starving', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_bmi_underweight', 'disapprove');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_bmi_obese', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'stats_strength_strong', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'stats_strength_manly', 'hate');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_pregnant', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'body_tan', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'clothes_skirt_short', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'clothes_thin_high', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'clothes_style_punk', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'clothes_style_goth', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_pubes_shaven', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_pubes_grown', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_leg', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_leg_not', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_color_red', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_color_blonde', 'like');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_color_dyed', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_length_veryshort', 'dislike');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_length_short', 'disapprove');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_length_shoulder', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_length_bra', 'approve');
                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A146', 'hair_length_long', 'approve');
                                                                                                                                                } else {
                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A147') {
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_ass_flat', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_ass_big', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_ass_heart', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_tits_average', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_tits_big', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_lips_thin', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_lips_plump', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_bmi_underweight', 'like');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_bmi_normal', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_bmi_overweight', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_bmi_obese', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'stats_strength_weak', 'love');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'stats_strength_strong', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'stats_strength_manly', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_sweat_sweaty', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_sweat_stinky', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_pregnant', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'body_tan', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'clothes_skirt_short', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'clothes_style_bimbo', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'cum_face', 'disapprove');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'cum_clothes', 'disapprove');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_pubes_shaven', 'like');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_pubes_grown', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_leg', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_color_black', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_color_red', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_color_blonde', 'like');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_color_dyed', 'approve');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_length_veryshort', 'hate');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_length_short', 'dislike');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_length_chin', 'disapprove');
                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A147', 'hair_straight', 'approve');
                                                                                                                                                  } else {
                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A148') {
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_ass_big', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_ass_bubble', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_tits_small', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_tits_big', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_lips_thin', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_lips_normal', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_lips_big', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_lips_pillowy', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_bmi_starving', 'hate');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_bmi_obese', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'stats_strength_weak', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'stats_strength_athletic', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'stats_strength_strong', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'stats_strength_manly', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_sweat_none', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_sweat_sweaty', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_sweat_stinky', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_fit', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_pregnant', 'love');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'body_tan', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_exposed_ass', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_exposed_bra', 'disapprove');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_exposed_panties', 'approve');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_exposed_pussy', 'hate');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_exposed_tits', 'disapprove');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_skirt_normal', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_thin_high', 'approve');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'clothes_style_bimbo', 'approve');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'cosmetics_deodorant', 'approve');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'cum_face', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'cum_clothes', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'hair_pubes_shaven', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'hair_pubes_grown', 'dislike');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'hair_leg_not', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'hair_length_shoulder', 'like');
                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A148', 'hair_curly', 'like');
                                                                                                                                                    } else {
                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A149') {
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_ass_flat', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_ass_big', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_ass_heart', 'like');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_ass_bubble', 'love');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_tits_average', 'like');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_tits_big', 'love');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_tits_huge', 'like');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_lips_normal', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_lips_plump', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_bmi_starving', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_bmi_normal', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_bmi_obese', 'hate');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'stats_strength_weak', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'stats_strength_athletic', 'love');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'stats_strength_strong', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'stats_strength_manly', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_fit', 'love');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'body_tan', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_exposed_ass', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_exposed_bra', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_exposed_tits', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_skirt_short', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_thin_high', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_style_punk', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'clothes_style_goth', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'cosmetics_deodorant', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'cum_face', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'cum_clothes', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_pubes_shaven', 'love');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_pubes_grown', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_pubes_styled', 'like');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_leg', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_leg_not', 'approve');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_length_veryshort', 'dislike');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_length_short', 'disapprove');
                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A149', 'hair_length_chin', 'disapprove');
                                                                                                                                                      } else {
                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A150') {
                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A150', 'clothes_style_punk', 'dislike');
                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A150', 'cum_face', 'dislike');
                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A150', 'cum_clothes', 'dislike');
                                                                                                                                                        } else {
                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A151') {
                                                                                                                                                          } else {
                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A152') {
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_ass_big', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_ass_heart', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_tits_small', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_tits_average', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_tits_big', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_lips_thin', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_lips_plump', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_bmi_underweight', 'like');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_bmi_normal', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_bmi_overweight', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_bmi_obese', 'hate');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'stats_strength_weak', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'stats_strength_athletic', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'stats_strength_strong', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'stats_strength_manly', 'hate');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_sweat_sweaty', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_sweat_stinky', 'hate');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_fit', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'body_pregnant', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'clothes_skirt_short', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'clothes_style_punk', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'clothes_style_goth', 'love');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'cum_face', 'disapprove');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'cum_clothes', 'disapprove');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_pubes_shaven', 'like');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_pubes_grown', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_leg', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_color_dyed', 'approve');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_length_veryshort', 'dislike');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_length_short', 'disapprove');
                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A152', 'hair_straight', 'approve');
                                                                                                                                                            } else {
                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A153') {
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_ass_flat', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_ass_bubble', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_bmi_starving', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_bmi_underweight', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_bmi_obese', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'stats_strength_manly', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_sweat_sweaty', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'body_sweat_stinky', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_exposed_ass', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_exposed_bra', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_exposed_panties', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_exposed_tits', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'cum_face', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'cum_clothes', 'dislike');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'hair_pubes_grown', 'disapprove');
                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A153', 'hair_leg', 'disapprove');
                                                                                                                                                              } else {
                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A154') {
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_ass_flat', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_ass_heart', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_ass_bubble', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_tits_small', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_tits_huge', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_lips_thin', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_bmi_obese', 'hate');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'stats_strength_weak', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'stats_strength_strong', 'dislike');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'stats_strength_manly', 'hate');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'body_pregnant', 'dislike');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_exposed_ass', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_exposed_bra', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_exposed_pussy', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_exposed_tits', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_skirt_short', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_thin_high', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_style_punk', 'like');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'clothes_style_goth', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_pubes_shaven', 'like');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_pubes_grown', 'hate');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_leg', 'hate');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_color_blonde', 'like');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_color_dyed', 'approve');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A154', 'hair_length_short', 'disapprove');
                                                                                                                                                                } else {
                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A155') {
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_ass_flat', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_ass_heart', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_ass_bubble', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_tits_small', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_tits_huge', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_lips_thin', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_lips_plump', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_lips_big', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_bmi_obese', 'hate');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'stats_strength_weak', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'stats_strength_strong', 'dislike');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'stats_strength_manly', 'hate');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_pregnant', 'dislike');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'body_tan_not', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_exposed_ass', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_exposed_bra', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_exposed_pussy', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_exposed_tits', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_skirt_short', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_thin_high', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_style_bimbo', 'like');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_style_punk', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'clothes_style_goth', 'like');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_pubes_shaven', 'like');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_pubes_grown', 'hate');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_leg', 'hate');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_color_blonde', 'like');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_color_dyed', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_length_short', 'disapprove');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_length_shoulder', 'approve');
                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A155', 'hair_length_bra', 'approve');
                                                                                                                                                                  } else {
                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A156') {
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_ass_flat', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_ass_heart', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_ass_bubble', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_tits_small', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_tits_huge', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_lips_thin', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_bmi_obese', 'hate');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'stats_strength_weak', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'stats_strength_strong', 'dislike');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'stats_strength_manly', 'hate');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_pregnant', 'dislike');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'body_tan', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_exposed_ass', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_exposed_bra', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_exposed_pussy', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_exposed_tits', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_skirt_short', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_thin_high', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_style_bimbo', 'hate');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_style_punk', 'like');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'clothes_style_goth', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_pubes_shaven', 'like');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_pubes_grown', 'hate');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_leg', 'hate');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_color_red', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_color_dyed', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_length_short', 'disapprove');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_length_bra', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_length_long', 'approve');
                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A156', 'hair_curly', 'approve');
                                                                                                                                                                    } else {
                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A157') {
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_ass_flat', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_ass_heart', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_ass_bubble', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_tits_small', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_tits_big', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_tits_huge', 'like');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_lips_thin', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_bmi_obese', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'stats_strength_weak', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'stats_strength_normal', 'neutral');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'stats_strength_strong', 'dislike');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'stats_strength_manly', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_pregnant', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'body_tan_not', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_exposed_ass', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_exposed_bra', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_exposed_pussy', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_exposed_tits', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_skirt_short', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_thin_high', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_style_bimbo', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_style_punk', 'like');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'clothes_style_goth', 'disapprove');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'cum_face', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'cum_clothes', 'approve');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_pubes_shaven', 'like');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_pubes_grown', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_pubes_styled', 'neutral');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_leg', 'hate');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A157', 'hair_length_short', 'disapprove');
                                                                                                                                                                      } else {
                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A158') {
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_ass_flat', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_ass_heart', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_ass_bubble', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_tits_big', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_tits_huge', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_lips_thin', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_lips_pillowy', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_bmi_obese', 'hate');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'stats_strength_weak', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'stats_strength_athletic', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'stats_strength_strong', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'stats_strength_manly', 'hate');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_sweat_stinky', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'body_pregnant', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_exposed_ass', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_exposed_bra', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_exposed_pussy', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_exposed_tits', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_skirt_long', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_skirt_short', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_thin_high', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_style_punk', 'like');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'clothes_style_goth', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'cosmetics_tattoo_visible', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_pubes_shaven', 'like');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_pubes_grown', 'hate');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_leg', 'hate');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_color_black', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_color_red', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_color_dyed', 'approve');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_length_short', 'disapprove');
                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A158', 'hair_straight', 'approve');
                                                                                                                                                                        } else {
                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A159') {
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_ass_flat', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_ass_bubble', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_tits_small', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_tits_huge', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_lips_thin', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_lips_pillowy', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_bmi_starving', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_bmi_obese', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'stats_strength_manly', 'disapprove');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_sweat_sweaty', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_sweat_stinky', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'body_tan', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'clothes_style_bimbo', 'love');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'cosmetics_makeup_any', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'cum_face', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'cum_clothes', 'approve');
                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A159', 'hair_leg', 'disapprove');
                                                                                                                                                                          } else {
                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A165') {
                                                                                                                                                                            } else {
                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A166') {
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'cum_face', 'dislike');
                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A166', 'cum_clothes', 'dislike');
                                                                                                                                                                              } else {
                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A173') {
                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A173', 'body_bmi_starving', 'like');
                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A173', 'body_bmi_underweight', 'like');
                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A173', 'body_tits_small', 'like');
                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A173', 'hair_color_blonde', 'like');
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A184') {
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'body_tan', 'like');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'clothes_thin_high', 'dislike');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'clothes_skirt_short', 'dislike');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'cum_face', 'dislike');
                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A184', 'cum_clothes', 'dislike');
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A189') {
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'clothes_style_punk', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'clothes_style_goth', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'clothes_thin_high', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'clothes_skirt_short', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'cosmetics_piercing_visible', 'like');
                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A189', 'cosmetics_tattoo_visible', 'like');
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A204') {
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'clothes_style_punk', 'like');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'clothes_style_goth', 'like');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'cosmetics_piercing_visible', 'like');
                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A204', 'cosmetics_tattoo_visible', 'like');
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A205') {
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'body_tan', 'dislike');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'clothes_style_punk', 'like');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'clothes_style_goth', 'like');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'clothes_thin_high', 'like');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'cosmetics_piercing_visible', 'like');
                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A205', 'cosmetics_tattoo_visible', 'like');
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A220') {
                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A220', 'body_tan', 'like');
                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A220', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A220', 'clothes_thin_high', 'like');
                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A220', 'clothes_skirt_short', 'like');
                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A220', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A238') {
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'body_pregnant', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'clothes_style_punk', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'clothes_style_goth', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'clothes_thin_high', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'clothes_skirt_short', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'cum_face', 'dislike');
                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A238', 'cum_clothes', 'dislike');
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A239') {
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'body_pregnant', 'dislike');
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'body_tan', 'like');
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                                qspCall(s, 'npc_set_preference', 'A239', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A240') {
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A242') {
                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A242', 'clothes_thin_high', 'like');
                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A242', 'clothes_skirt_short', 'like');
                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A242', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A243') {
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_ass_flat', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_ass_big', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_ass_heart', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_ass_bubble', 'love');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_tits_average', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_tits_big', 'love');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_tits_huge', 'love');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_bmi_starving', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_bmi_underweight', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_bmi_normal', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_bmi_obese', 'hate');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'stats_strength_athletic', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_sweat_sweaty', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_sweat_stinky', 'hate');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'body_fit', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_exposed_ass', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_exposed_bra', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_exposed_panties', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_exposed_pussy', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_exposed_tits', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_skirt_long', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_skirt_short', 'love');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'clothes_thin_high', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'cum_face', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'cum_clothes', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_pubes_shaven', 'love');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_pubes_grown', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_leg', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_color_brown', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_color_red', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_color_blonde', 'like');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A243', 'hair_length_short', 'dislike');
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A244') {
                                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A244', 'clothes_thin_high', 'like');
                                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A244', 'clothes_skirt_short', 'like');
                                                                                                                                                                                                        qspCall(s, 'npc_set_preference', 'A244', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A245') {
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_ass_flat', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_ass_big', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_ass_heart', 'love');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_ass_bubble', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_tits_average', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_tits_big', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_bmi_starving', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_bmi_underweight', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_bmi_normal', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_bmi_overweight', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_bmi_obese', 'hate');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'stats_strength_weak', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'stats_strength_normal', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_sweat_sweaty', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_sweat_stinky', 'hate');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_fit', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'body_tan_not', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_exposed_ass', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_exposed_bra', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_exposed_panties', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_exposed_pussy', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_exposed_tits', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_skirt_long', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_skirt_short', 'love');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_thin_high', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_style_bimbo', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_style_punk', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'clothes_style_goth', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'cosmetics_piercing_visible', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'cosmetics_tattoo_visible', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'cum_face', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'cum_clothes', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_pubes_shaven', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_pubes_grown', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_pubes_styled', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_leg', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_leg_not', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_color_brown', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_color_red', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_color_blonde', 'like');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_color_dyed', 'love');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_length_veryshort', 'dislike');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_length_short', 'disapprove');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_length_shoulder', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_length_bra', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_length_long', 'approve');
                                                                                                                                                                                                          qspCall(s, 'npc_set_preference', 'A245', 'hair_straight', 'approve');
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A246') {
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'stats_strength_strong', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'stats_strength_manly', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'body_tan', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'clothes_thin_high', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'clothes_skirt_short', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'cum_face', 'like');
                                                                                                                                                                                                            qspCall(s, 'npc_set_preference', 'A246', 'cum_clothes', 'like');
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A247') {
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'body_tan', 'like');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'clothes_thin_high', 'like');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'clothes_skirt_short', 'like');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'cum_face', 'dislike');
                                                                                                                                                                                                              qspCall(s, 'npc_set_preference', 'A247', 'cum_clothes', 'dislike');
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A248') {
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A254') {
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'body_pregnant', 'dislike');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'clothes_style_bimbo', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'clothes_style_punk', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'clothes_style_goth', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'clothes_thin_high', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'clothes_skirt_short', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'cosmetics_piercing_visible', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'cosmetics_tattoo_visible', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'cum_face', 'like');
                                                                                                                                                                                                                  qspCall(s, 'npc_set_preference', 'A254', 'cum_clothes', 'like');
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (((s as any).locArgs?.[0] ?? 0) === 'A255') {
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'stats_strength_strong', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'stats_strength_manly', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'clothes_style_punk', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'clothes_style_goth', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'clothes_thin_high', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'clothes_skirt_short', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'cosmetics_piercing_visible', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'cosmetics_tattoo_visible', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'cum_face', 'dislike');
                                                                                                                                                                                                                    qspCall(s, 'npc_set_preference', 'A255', 'cum_clothes', 'dislike');
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (((s as any).locArgs?.[0] ?? 0) === 'A256') {
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'clothes_style_bimbo', 'dislike');
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'clothes_style_punk', 'dislike');
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'clothes_style_goth', 'like');
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'cosmetics_makeup_any', 'like');
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'cum_face', 'dislike');
                                                                                                                                                                                                                      qspCall(s, 'npc_set_preference', 'A256', 'cum_clothes', 'dislike');
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (((s as any).locArgs?.[0] ?? 0) === 'A257') {
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (((s as any).locArgs?.[0] ?? 0) === 'A269') {
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (((s as any).locArgs?.[0] ?? 0) === 'A270') {
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (((s as any).locArgs?.[0] ?? 0) === 'A271') {
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (((s as any).locArgs?.[0] ?? 0) === 'A272') {
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (((s as any).locArgs?.[0] ?? 0) === 'A273') {
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
    }
  }
  scene.build();
}

export const npc_standard_preferences: LocationDef = {
  name: 'npc_standard_preferences',
  region: 'other',
  enter: enter,
};
