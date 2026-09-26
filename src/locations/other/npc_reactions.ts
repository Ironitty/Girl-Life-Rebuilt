import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_reaction_hourly = undefined;
  return;
  if (String((s as any).locArgs?.[1] ?? '') === 'cikl') {
    (s as any).npc_reaction_daily = undefined;
    if (((s as any).week ?? 0) === 1) {
      (s as any).npc_reaction_weekly = undefined;
    }
    return;
  }
  if (((s as any).npc_preferences ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
  }
  if (!isNaN((String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[1] ?? 0)).slice((2)-1)) !== '') {
    (s as any).nr_temp_npc_name = (((s as any).npc_usedname ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0);
  } else {
    (s as any).nr_temp_npc_name = ((s as any).locArgs?.[1] ?? 0);
  }
  scene.build();
}

function enterGeneral(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_reaction_first_time ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_tan'] === 1  &&  (!((s as any).pcs_tan ?? 0))) {
    ((s as any).npc_reaction_first_time = (s as any).npc_reaction_first_time ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_tan'] = 0;
  }
  if (qspFunc(s, 'pcs_has_attr', 'cum_face')  &&  ((s as any).npc_reaction_hourly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_cum_on_face'] === 0) {
    (s as any).result = qspFunc(s, 'npc_reactions', 'cum_on_face', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'cum_clothes')  &&  ((s as any).npc_reaction_hourly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_cum_on_clothes'] === 0) {
      (s as any).result = qspFunc(s, 'npc_reactions', 'cum_on_clothes', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_pregnant')  &&  ((s as any).npc_reaction_pregnant ?? 0)[(String((s as any).locArgs?.[1] ?? ''))] === 0) {
        (s as any).result = qspFunc(s, 'npc_reactions', 'pregnant', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
      } else {
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_fit'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'body_fit')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'fit'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_piercing'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercing_visible')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'piercing'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_strong'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'stats_strength_strong')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'strong'];
          }
        }
        if (((s as any).npc_reaction_first_time ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_tan'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'body_tan')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'tan'];
          }
        }
        if (((s as any).npc_reaction_first_time ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_tattoo'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoo_visible')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'tattoo'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_bimbo'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'bimbo_look'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_goth'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'goth_look'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_punk'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'punk_look'];
          }
        }
        if (((s as any).npc_reaction_daily ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_short_skirt'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_short')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'short_skirt'];
          }
        }
        if (((s as any).npc_reaction_daily ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_clothes_thinnes'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'clothes_thinnes'];
          }
        }
        if (((s as any).npc_reaction_weekly ?? 0)[(String((s as any).locArgs?.[1] ?? '')) + '_makeup'] === 0) {
          if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_any')) {
            (s as any).npc_reaction_choice = [...((s as any).npc_reaction_choice ?? []), 'makeup'];
          }
        }
        (s as any).npc_reaction_chosen = (((s as any).npc_reaction_choice ?? 0)?.[(Math.floor(Math.random() * (0 - 0 + 1)) + (0))] ?? 0);
        if (((s as any).npc_reaction_chosen ?? 0) === '') {
          (s as any).result = '';
        } else {
          (s as any).result = qspFunc(s, 'npc_reactions', ((s as any).npc_reaction_chosen ?? 0), ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
        }
        (s as any).npc_reactions_temp_preferences = undefined;
        (s as any).npc_reaction_chosen = undefined;
        (s as any).npc_reaction_choice = undefined;
      }
    }
  }
  scene.build();
}

function enterBimboLook(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_bimbo'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_bimbo'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['bimbo'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"You\'re gorgeous! I adore your fashion sense!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"That\'s a great look. It should never be changed!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"At the very least, you know how to dress correctly" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"You\'re putting forth too much effort. That look is pointless on you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"That outfit is really wasted on a slut like you!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_bimbo'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['bimbo'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Don\'t get me wrong! You\'re always as stunning as ever! It\'s just that look isn\'t for me" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"You\'re quite nice; I simply believe a different style might fit you more" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"I don\'t give a damn about how you look. It has no effect on me" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"That look is perfect for you! That is, I despise both" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"At least the appearance corresponds to the personality: cheap and superficial" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"You\'re always stunning, no matter what you\'re wearing!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"You\'re very nice. And that style suits you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"I don\'t mind. Simply put on whatever you want." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"What are you trying to do? Maybe you should care less about looks and more about not being a bitch?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"A slut remains a slut. It doesn\'t matter how she dresses" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGothLook(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_goth'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_goth'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['goth'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, ' + ((s as any).pcs_nickname ?? 0) + ', you really pull off the goth look well!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says while looking you up and down.';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"You know, ' + ((s as any).pcs_nickname ?? 0) + ', not many people can pull off goth, but I think you look really great," ' + ((s as any).nr_temp_npc_name ?? 0) + ' says.';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Goth is certainly an interesting look for you, ' + ((s as any).pcs_nickname ?? 0) + '," ' + ((s as any).nr_temp_npc_name ?? 0) + ' says.';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"Ugh, you can\'t pull off the goth look at all!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says, waving at you dismissively.';
          } else {
            (s as any).result = '"You look like a wet dog, ' + ((s as any).pcs_nickname ?? 0) + '! The goth style isn\'t for wannabe losers like you!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says, sneering at you.';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_goth'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['goth'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Even on you, ' + ((s as any).pcs_nickname ?? 0) + ', I\'m just not a fan of this goth thing," ' + ((s as any).nr_temp_npc_name ?? 0) + ' says, looking over your outfit.';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Are you sure about this, ' + ((s as any).pcs_nickname ?? 0) + '?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says while poking at your outfit. "It\'s so dark and gloomy, I don\'t think it suits you."';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"That is one ugly outfit, ' + ((s as any).pcs_nickname ?? 0) + '," ' + ((s as any).nr_temp_npc_name ?? 0) + ' says. "You should find a trendier style to wear, it\'ll make you look better."';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Seeing you in that terrible outfit reminds me of why I don\'t like you, ' + ((s as any).pcs_nickname ?? 0) + '," ' + ((s as any).nr_temp_npc_name ?? 0) + ' says, rolling their eyes at you.';
            } else {
              (s as any).result = '"Wow, you found an equally ugly style to match your ugly face!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says, laughing at you.';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Yeah, still amazing. Don\'t care what you wear" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Yeah, it\'s a nice look for you, if you\'re into all that goth stuff" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Don\'t worry, it\'s not the goth look. I just don\'t care about you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"It\'s not what you wear. I just don\'t like you. So stop trying to be edgy with that goth style" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"The fuck are you wearing? You know what, don\'t answer. I think the problem it\'s not the dress, it\'s just you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPunkLook(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_punk'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_punk'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['punk'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, I love your style! You have such a cool edge to you, I admire it." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"I like your punk style, it\'s different and unique. You have a good sense of fashion." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"The punk style is cool, but I don\'t really have an opinion on the person wearing it." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"I like the punk look, but I don\'t like the attitude that usually comes with it. You need to tone it down a bit." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = ' "I can\'t stand people like you who try to act tough with that punk style. It\'s just a front for insecurity." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_style_punk'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['punk'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I\'m not a fan of the punk style, but I love you anyway. You\'re just a really nice person." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I don\'t like your punk style, but I still think you\'re a decent person." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = ' "I don\'t like the punk style, but it doesn\'t really affect my opinion of you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I really don\'t like the punk look on you. It doesn\'t suit you at all." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"I hate that punk style, and I hate that you\'re wearing it. You\'re bringing down the whole community." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I don\'t have a strong opinion on punk style, but I love you no matter what you wear." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I don\'t care about your punk style, but I still like you as a person." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"The punk style is just a style to me, it doesn\'t impact my thoughts on you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I don\'t have a strong feeling about punk style, but I don\'t like it on you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"I don\'t have an opinion on punk style, but I hate your attitude and behavior." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterClothesThinnes(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_daily = (s as any).npc_reaction_daily ?? {})[((s as any).locArgs?.[1] ?? 0) + '_clothes_thinnes'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_thin'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['clothes_thinnes'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, you look amazing in that thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + '! You always know how to dress to impress." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"Nice ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + '! You have a great sense of style." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"I see you\'re wearing a thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + 'today." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"That ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ' is a bit too revealing for my taste, but I suppose it\'s your choice." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"What were you thinking wearing something so revealing in public?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_thin'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['clothes_thinnes'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Oh, I see you\'re wearing a thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ' today! I love you regardless of what you wear." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"You look nice in that thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ', but I always thought you looked great no matter what." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"The thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ' is interesting. It doesn\'t really impact my opinion of you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I\'m not a fan of thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dresses') : ('skirts')) + ', but it\'s not my place to judge what you wear." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"I can\'t stand seeing you in that thin ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + '. It\'s disrespectful and shows poor judgement." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Oh, they look nice and comfortable in that ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + '. I adore them." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"The ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ' suits them well, I like it." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"It\'s just a ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ', doesn\'t affect my opinion of them." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I personally prefer more coverage, but to each their own." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"I can\'t stand how revealing that ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('outfit')) + ' is, it\'s disrespectful." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterShortSkirt(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_daily = (s as any).npc_reaction_daily ?? {})[((s as any).locArgs?.[1] ?? 0) + '_short_skirt'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_skirt_short'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['short_skirt'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Such a lovely skirt for such lovely legs!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"That is a lovely skirt! Without it, it would be even better!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"That\'s a nice skirt" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"Could you please spare us the sight of your legs by not wearing a skirt so short?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"Why would you waste such a skirt on a cow like you?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['clothes_skirt_short'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['short_skirt'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"That skirt does not do you credit! You\'re better than that!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Why ruin your perfect look with a skirt like that?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Yeah, that skirt is not for you. Or anybody else" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"What a perfect look. A shitty skirt for a shitty person" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = ' "I had no idea someone could look that bad in such a little skirt" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"You\'re always beautiful. That skirt it\'s just the cherry on top!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"It\'s not the skirt, it\'s what beneath that counts!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"That skirt is ok. Don\'t get too excited" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = ' "It\'s not that I don\'t like the skirt. It\'s that I don\'t like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Shitty skirt. Shitty person. Can you go away? Please!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPiercing(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_piercing'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_piercing_visible'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['piercing'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, that\'s a cool piercing! It really suits you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"I really like your piercing, it\'s so unique." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Interesting piercing, it definitely makes a statement." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"I\'m not a fan of piercings, but I can see why some people would like them. I guess it\'s just not my style." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"What kind of person would do that to their body? Only a stupid cow like you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_piercing_visible'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['piercing'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I\'m not a fan of piercings, but I still love you just the same." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I don\'t care for the piercing, but I still think you\'re a great person." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I don\'t like piercings, and the fact that you have one makes me dislike you a little." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"That piercing is just offensive to me. I can\'t stand being around people who express themselves like that." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I don\'t have an opinion on piercings, but I love you regardless." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I don\'t have an opinion on piercings, but I love you regardless." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"It\'s just a piercing, doesn\'t make a difference to me either way." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I don\'t have a strong feeling about piercings, but it does make me think less of you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Indifference towards piercings is fine, but hate towards you is another matter." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_makeup'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_makeup_any'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['makeup'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow! You\'re so beautiful! And with flawless makeup!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"That\'s a nice makeup! A perfect natural look!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Nice makeup" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"I really don\'t care about makeup and we\'re not friends. Please leave." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"Makeup alone isn\'t enough! I just don\'t like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_makeup_any'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['makeup'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Maybe a touch too much cosmetics, but you\'re still stunning." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Why not try a more natural look? Why hide your lovely face?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"I prefer girl without makeup, sorry" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"If you were trying to look like a clown, you succeeded" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Wow, shitty makeup, for a shitty person" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I\'m not an expert, but I believe that makeup is perfect for you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"It\'s not your makeup that is lovely, it\'s your face" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Nah, a natural look would suit you better" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I really don\'t care for your makeup and we\'re not friends so leave me alone" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Makeup is not enough to to make me like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTattoo(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_first_time = (s as any).npc_reaction_first_time ?? {})[((s as any).locArgs?.[1] ?? 0) + '_tattoo'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_tattoo_visible'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tattoo'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = ' "I really like your ink! The only thing that could make it better would be to add my name on it" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"I adore your tats! They\'re pretty wonderful!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Yeah, the tattoos are nice, even on you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = ' "Tattoos are OK. It\'s only you that I dislike" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"I\'m sorry, but tattoos on people like you are like putting lipstick on a fucking pig and expecting it would make things better" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cosmetics_tattoo_visible'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tattoo'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Don\'t get me wrong: I adore you; I simply don\'t believe your tattoos do you credit" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Why would you tattoo your body? I prefer it without tattoos" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"It\'s not your fault; I simply dislike tattoos." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I dislike tattoos and dislike you. Please leave" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Sluts and tattoos. I dislike both of these things" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Although I don\'t particularly like tattoos, they are incredibly attractive when you have them." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Tattoos look great on you even if I don\'t really like them." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"I\'m not interested in tattoos, and I\'m not interested in you. So, what keeps you here?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"No, not at all. Tattoos alone will not make me like you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"You are aware that tattoos are not a replacement for personality, correct? You are still a useless piece of shit" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumOnFace(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_hourly = (s as any).npc_reaction_hourly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_cum_on_face'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['cum_face'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_face'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"You know you\'re a bad girl? Maybe next time I\'ll moisturize your face?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"Maybe you could invite me to the next facial party?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"What piques my interest? A woman who let her lover to come on her face!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"Who was so anxious to use you as a cum bucket, c\'mon?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"How much did you beg for someone to come on your ugly face?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cum_face'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_face'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Why would you let someone ruin such a beautiful face with their cum?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I\'m not that comfortable seeing cum on that lovely face" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Maybe wash you face before coming and talking to me?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Of cause someone like you wouldn\'t take one minutes to wash her face after sucking someone dick" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"You\'re ugly enough, could you not come here with fucking cum on your stupid face?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I think you should get a napkin and wash your face. Your still lovely, but shit, that is nasty" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"You should really go and wash your face before anyone sees you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Didn\'t your mum ever told you to wash you face after use?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Maybe next time swallow? You\'re even uglier now with cum on your face" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Who wasted an orgasm on that ugly face?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumOnClothes(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_hourly = (s as any).npc_reaction_hourly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_cum_on_clothes'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['cum_clothes'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_clothes'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"I believe someone had a good time! You should probably wash your clothes" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"Maybe you should wash your clothes? I don\'t mind of course, but others might" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"I\'m not against having fun, but perhaps you could wash your clothes afterward?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"Who had the stomach to cum on you?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"Who wasted an orgasm on your shitty clothes?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['cum_clothes'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['cum_on_clothes'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Don\'t get me wrong, you\'re always lovely, but cum on clothed is such a turn-off" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"That is not a very nice… look. Wash that cum from your clothes and you\'ll be perfect" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Could you at least be presentable before going out? And wash that nasty shit from your clothes?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Cum on your shitty clothes? Of course, nobody would ever want to see you naked" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Who wasted an orgasm on your shitty clothes?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Don\'t get me wrong, you\'re always lovely, but cum on clothed is such a turn-off" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"That is not a very nice… look. Wash that cum from your clothes and you\'ll be perfect" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Could you at least be presentable before going out? And wash that nasty shit from your clothes?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Cum on your shitty clothes? Of course, nobody would ever want to see you naked" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Who wasted an orgasm on your shitty clothes?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPregnant(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_pregnant = (s as any).npc_reaction_pregnant ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_pregnant'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['pregnant'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = ' "How can you be pregnant and still look so beautiful?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"You\'re still lovely even when you\'re pregnant!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Congratulations on you pregnancy!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"Who knocked you up?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"Of course the slut is pregnant! At least that\'s a good use of your cunt" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_pregnant'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['pregnant'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"You\'re pregnant? Wow… I mean, wow…"' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Aren\'t you a little young to be pregnant? Well, if you\'re ok with it, I\'m too" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"I think you\'re too young to be pregnant" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Now that you\'re pregnant you\'re even worse!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Who the hell had the stomach to cum inside of you and cram a baby into your belly?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Beautiful. And pregnant. Wow!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"You\'re pregnant! I hope everything is going well!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Shouldn\'t you have waited before becoming pregnant?" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"That\'s why I never cum inside whores. They tend to get pregnant" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"You\'re pregnant? I\'m sure you don\'t even know who the father is, you whore" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTan(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_first_time = (s as any).npc_reaction_first_time ?? {})[((s as any).locArgs?.[1] ?? 0) + '_tan'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_tan'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tan'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = ' "Wow, that tan really suits you! It brings out the color in your eyes and gives you a healthy glow. Keep it up, it looks great on you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"Wow, that tan really suits you! It brings out the color in your eyes" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"Oh, you have a tan. That\'s nice" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = ' "I have to admit, the tan does look good on you. But I still don\'t like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"Even with the tan, I still find your presence repulsive." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_tan'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['tan'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I\'m not a fan of tans, but I still love you regardless. Your inner beauty shines through no matter what" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = ' "I don\'t care much for tans, but I still think you\'re great. Your personality outshines any physical characteristic "' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Tans aren\'t really my thing, but you seem to like it. To each their own I suppose" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = ' "The tan might look good to some, but it doesn\'t change my opinion of you, slut" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"The tan may be in style, but it doesn\'t change my feelings towards you. I still can\'t stand you and everything you represent" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Tans are okay, I suppose. But it doesn\'t matter to me because I love you no matter what" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"A tan is fine, I guess. You seem to be happy with it, and that\'s what\'s important to me" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"You have a tan now. That\'s interesting" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"The tan may make you look different, but it doesn\'t change my feelings towards you. I still don\'t like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"The tan may be new, but it doesn\'t change my hatred towards you. I still fucking hate you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterStrong(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_strong'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['stats_strength_strong'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['strong'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, you\'re so strong! I love girls who take care of their bodies!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"You\'re very strong! Nice!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"I would never have guessed you were this strong" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"At least the cow can lift some weight" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = ' "A strong bitch remains a bitch, sorry" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['stats_strength_strong'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['strong'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I usually don\'t like girls who can lift more than me. But you\'re an exception!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Muscles on a girl are usually a turn-off. But you still look fantastic!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Nah, strong girls are just not for me" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Holy fuck, you look like a freak who lifts weights" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"You know that girls should be cute? And they should not look like an Austrian fucking bodybuilder!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I never knew strong girls could be so cute" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"Nice muscles. You have to spend a lot of time in the gym" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Wow, you\'re so strong" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I don\'t care how much you can lift. I still don\'t like you" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = ' "Strong or not, you\'re still a whore. Please leave me alone!" ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterFit(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_reaction_weekly = (s as any).npc_reaction_weekly ?? {})[((s as any).locArgs?.[1] ?? 0) + '_fit'] = 1;
  if (((s as any).npc_nr_pref_values ?? 0)?.['body_fit'] > 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['fit'] === 1) {
    if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
      (s as any).result = '"Wow, you\'re in great shape! I admire your dedication to fitness." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
        (s as any).result = '"Nice physique! You\'re looking good." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
          (s as any).result = '"You\'re certainly fit, but I don\'t have any particular feelings about you one way or another." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
            (s as any).result = '"You\'re in good shape, but I don\'t like your personality." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            (s as any).result = '"You\'re in good physical condition, but I hate everything about you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          }
        }
      }
    }
  } else {
    if (((s as any).npc_nr_pref_values ?? 0)?.['body_fit'] < 0  ||  ((s as any).npc_reactions_temp_preferences ?? 0)?.['fit'] === -1) {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"I know I don\'t typically like fit people, but there\'s something about you that\'s just so charming and endearing." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I\'m not a fan of overly fit people, but you seem pretty cool." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Your fitness doesn\'t really impress me, but it also doesn\'t bother me." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"I don\'t really like overly fit people, and to be honest, I don\'t really like you either. Something about you just rubs me the wrong way." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"Ugh, I can\'t stand you. You\'re way too fit for your own good, and you act like you\'re better than everyone else because of it. Give me a break." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 80  ||  String((s as any).locArgs?.[2] ?? '') === 'love') {
        (s as any).result = '"Your fitness level doesn\'t really matter to me, to be honest. I\'m just really drawn to your personality and charm. I love spending time with you." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
      } else {
        if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 60  ||  String((s as any).locArgs?.[2] ?? '') === 'like') {
          (s as any).result = '"I don\'t really care one way or the other about your fitness level, but I do think you\'re a pretty cool person. I enjoy your company." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
        } else {
          if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 40  ||  String((s as any).locArgs?.[2] ?? '') === 'indifferent') {
            (s as any).result = '"Your fitness is fine, but it doesn\'t really factor into my opinion of you one way or the other. You seem like an okay person, I guess." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
          } else {
            if (((s as any).npc_rel ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 20  ||  String((s as any).locArgs?.[2] ?? '') === 'dislike') {
              (s as any).result = '"Your fitness level doesn\'t matter to me, but I can\'t say I\'m a big fan of you as a person. Something about you just rubs me the wrong way." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            } else {
              (s as any).result = '"I don\'t really care about your fitness level, but I absolutely can\'t stand you as a person. You just seem so arrogant and entitled." ' + ((s as any).nr_temp_npc_name ?? 0) + ' says';
            }
          }
        }
      }
    }
  }
  (s as any).npc_nr_pref_traits = undefined;
  (s as any).npc_nr_pref_values = undefined;
  (s as any).nr_temp_npc_name = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stat':
      enterStat(s, scene);
      break;
    case 'general':
      enterGeneral(s, scene);
      break;
    case 'bimbo_look':
      enterBimboLook(s, scene);
      break;
    case 'goth_look':
      enterGothLook(s, scene);
      break;
    case 'punk_look':
      enterPunkLook(s, scene);
      break;
    case 'clothes_thinnes':
      enterClothesThinnes(s, scene);
      break;
    case 'short_skirt':
      enterShortSkirt(s, scene);
      break;
    case 'piercing':
      enterPiercing(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'tattoo':
      enterTattoo(s, scene);
      break;
    case 'cum_on_face':
      enterCumOnFace(s, scene);
      break;
    case 'cum_on_clothes':
      enterCumOnClothes(s, scene);
      break;
    case 'pregnant':
      enterPregnant(s, scene);
      break;
    case 'tan':
      enterTan(s, scene);
      break;
    case 'strong':
      enterStrong(s, scene);
      break;
    case 'fit':
      enterFit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc_reactions: LocationDef = {
  name: 'npc_reactions',
  region: 'other',
  enter: enter,
};
