// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === 'world') {
    (s as any).map_title = 'World Map';
    (s as any).map_img = 'world_klein_russia_areas_labeled.png';
    (s as any).map_nav = '<center><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
  } else {
    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_center') {
      (s as any).map_title = 'City Center';
      (s as any).map_img = 'city_center_clean_labeled.png';
      (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_residential\\u0027); return false;">City Residential</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_industrial\\u0027); return false;">City Industrial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_island\\u0027); return false;">Vasilyevsky Island</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_park\\u0027); return false;">Central Park</a><br><b>Transport:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027metro\\u0027); return false;">Metro</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027train\\u0027); return false;">Train</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
    } else {
      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(17))) === 'city_residential') {
        (s as any).map_title = 'City Residential';
        (s as any).map_img = 'city_residential_labeled.png';
        (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_industrial\\u0027); return false;">City Industrial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_suburbs\\u0027); return false;">City Suburbs</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
      } else {
        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'city_industrial') {
          (s as any).map_title = 'City Industrial';
          (s as any).map_img = 'city_industrial_labeled.png';
          (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_residential\\u0027); return false;">City Residential</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027train\\u0027); return false;">Train</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
        } else {
          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_island') {
            (s as any).map_title = 'Vasilyevsky Island';
            (s as any).map_img = 'city_island_labeled.png';
            (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_canals\\u0027); return false;">Canals</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
          } else {
            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_suburbs') {
              (s as any).map_title = 'City Suburbs';
              (s as any).map_img = 'city_suburbs_labeled.png';
              (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_residential\\u0027); return false;">City Residential</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_lake\\u0027); return false;">Lake</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027bus\\u0027); return false;">Bus</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
            } else {
              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'city_park') {
                (s as any).map_title = 'Central Park';
                (s as any).map_img = 'city_park_labeled_v2.png';
                (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_suburbs\\u0027); return false;">City Suburbs</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_lake\\u0027); return false;">Lake</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
              } else {
                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(10))) === 'city_lake') {
                  (s as any).map_title = 'Lake';
                  (s as any).map_img = 'city_lake_labeled.png';
                  (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_park\\u0027); return false;">Central Park</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_suburbs\\u0027); return false;">City Suburbs</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_canals\\u0027); return false;">Canals</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                } else {
                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_canals') {
                    (s as any).map_title = 'Canals';
                    (s as any).map_img = 'city_canals_labeled.png';
                    (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_island\\u0027); return false;">Vasilyevsky Island</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_lake\\u0027); return false;">Lake</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                  } else {
                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(14))) === 'city_redlight') {
                      (s as any).map_title = 'Red Light';
                      (s as any).map_img = 'city_redlight_labeled.png';
                      (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_market\\u0027); return false;">Market</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                    } else {
                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'city_market') {
                        (s as any).map_title = 'Market';
                        (s as any).map_img = 'city_market_labeled.png';
                        (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_redlight\\u0027); return false;">Red Light</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin\\u0027); return false;">Pushkin</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                      } else {
                        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'uni_') {
                          (s as any).map_title = 'University';
                          (s as any).map_img = 'uni_grounds_labeled_v2.png';
                          (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027metro\\u0027); return false;">Metro</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                        } else {
                          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(13))) === 'pushkin_parks') {
                            (s as any).map_title = 'Pushkin Park';
                            (s as any).map_img = 'pushkin_parks_labeled.png';
                            (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin\\u0027); return false;">Pushkin</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                          } else {
                            if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'pushkin') {
                              (s as any).map_title = 'Pushkin';
                              (s as any).map_img = 'pushkin_labeled.png';
                              (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_market\\u0027); return false;">Market</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin_parks\\u0027); return false;">Pushkin Park</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027train\\u0027); return false;">Train</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                            } else {
                              if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(15))) === 'pav_commercial') {
                                (s as any).map_title = 'Pavlovsk Commercial';
                                (s as any).map_img = 'pav_commercial_labeled_v2.png';
                                (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin_parks\\u0027); return false;">Pushkin Park</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_residential\\u0027); return false;">Residential</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_industrial\\u0027); return false;">Industrial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_complex\\u0027); return false;">Five Eight</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                              } else {
                                if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(16))) === 'pav_residential') {
                                  (s as any).map_title = 'Pavlovsk Residential';
                                  (s as any).map_img = 'pav_residential_labeled_v2.png';
                                  (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_industrial\\u0027); return false;">Industrial</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                } else {
                                  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(15))) === 'pav_industrial') {
                                    (s as any).map_title = 'Pavlovsk Industrial';
                                    (s as any).map_img = 'pav_industrial_labeled.png';
                                    (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_residential\\u0027); return false;">Residential</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                  } else {
                                    if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'pav_complex') {
                                      (s as any).map_title = 'Five Eight Estate';
                                      (s as any).map_img = 'pav_complex_labeled.png';
                                      (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_park\\u0027); return false;">Park</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                    } else {
                                      if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(9))) === 'pav_park') {
                                        (s as any).map_title = 'Pavlovsk Park';
                                        (s as any).map_img = 'pav_park_labeled.png';
                                        (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_complex\\u0027); return false;">Five Eight</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_market\\u0027); return false;">Market</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                      } else {
                                        if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'pav_market') {
                                          (s as any).map_title = 'Pavlovsk Market';
                                          (s as any).map_img = 'pav_market_labeled.png';
                                          (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_park\\u0027); return false;">Park</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_commercial\\u0027); return false;">Commercial</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027train\\u0027); return false;">Train</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                        } else {
                                          if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'gad_'  ||  ((s as any).locArgs?.[0] ?? 0) === 'gadukino') {
                                            (s as any).map_title = 'Gadukino';
                                            (s as any).map_img = 'gad_forest_labeled.png';
                                            (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027road\\u0027); return false;">Highway</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin_parks\\u0027); return false;">Pushkin Park</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 'metro') {
                                              (s as any).map_title = 'Metro';
                                              (s as any).map_img = 'metro_labeled.png';
                                              (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_center\\u0027); return false;">City Center</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027uni_grounds\\u0027, \\u0027\\u0027); return false;">University</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'train') {
                                                (s as any).map_title = 'Train Station';
                                                (s as any).map_img = 'train_labeled.png';
                                                (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pushkin\\u0027); return false;">Pushkin</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027pav_market\\u0027); return false;">Market (Pav)</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_industrial\\u0027); return false;">City Industrial</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'bus') {
                                                  (s as any).map_title = 'Bus Terminal';
                                                  (s as any).map_img = 'bus_labeled.png';
                                                  (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027city_suburbs\\u0027); return false;">City Suburbs</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027road\\u0027); return false;">Highway</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 'road') {
                                                    (s as any).map_title = 'Highway';
                                                    (s as any).map_img = 'road.png';
                                                    (s as any).map_nav = '<center><b>You are here: ' + ((s as any).locArgs?.[0] ?? 0) + '</b><br><b>Areas:</b> <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027bus\\u0027); return false;">Bus</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027gadukino\\u0027); return false;">Gadukino</a><br><br><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027map_view\\u0027, \\u0027world\\u0027, \\u0027\\u0027); return false;">&lt;- World Map</a> | <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
                                                    // TODO-QSP: else:
                                                    (s as any).map_title = 'World Map';
                                                    (s as any).map_img = 'world_klein_russia_areas_labeled.png';
                                                    (s as any).map_nav = '<center><a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027\\u0027, \\u0027\\u0027); return false;">&lt;- Back</a></center>';
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
  // TODO-QSP: dynamic text: $map_nav
  scene.text(String((s as any).map_nav ?? ''));
  scene.img(`images/system/map/${((s as any).map_img || '')}`);
  scene.build();
}

export const map_view: LocationDef = {
  name: 'map_view',
  region: 'other',
  enter: enter,
};
