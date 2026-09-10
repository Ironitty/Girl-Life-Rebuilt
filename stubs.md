# Stubs & Unimplemented Features

Last updated: 2026-09-07

## Working Locations (Registered)

### Pavlovsk (19 hand-ported)
pav_commercial, pav_residential, pav_industrial, pav_park, pav_lake, pav_cinema, pav_laundromat, pav_old_school, pav_church, pav_market, pav_hotel, pav_station, pav_pharmacy, pav_complex, pav_factory, pav_hotelReception, pav_lake_nude_forest, pav_lake_nude_events, pav_lake_nude

### Train System (5 hand-ported)
train, pav_train_hall, pav_train_market, pav_train_hall_events, city_industrial_train

### Map & Menu
map_view, menu_character, menu_looks, din_bad, telefon, journal, obj_din, clock_wait

### Other (8 hand-ported)
wardrobe, clothing_view, jobs_view, road, bus, mirror, trainbimbo, changingroom

### Pushkin (1 hand-ported)
pushkin

### City (1 hand-ported)
city_center

### Test
start, pav_street, pav_park, pav_cafe, pav_hotel

**Total working: ~46 locations**

## Stub Locations Referenced by Working Code (Will Break Navigation)

These are `goto` targets from working locations but are unregistered stubs:

| Location | Region | Source File |
|---|---|---|
| (none) | — | — |

**Note:** `train_events` and `train_incidental` were previously referenced but are now bypassed (events route directly to destination stations).

## Unregistered Stub Locations by Region

Total: **1,388 stub files** (auto-generated, have `description` + `actions` but no `enter` function)

| Region | Count | Notes |
|---|---|---|
| other/ | 1,221 | Shared systems, NPCs, events, sex scenes, jobs, shops, etc. (road, bus, mirror ported) |
| city/ | 57 | Industrial, residential, entertainment (city_center ported) |
| pavlovsk/ | 59 | Additional Pavlovsk locations (disco, pool, library, etc.) (hotelReception ported) |
| gadukino/ | 26 | Village, swamp, forest, grandparents' house |
| kgd/ | 16 | KGD (secret police) quest locations |
| pushkin/ | 11 | Pushkin district (ballet, theatre, cafe) (pushkin town center ported) |

### City (57 stubs)
city_industrial, city_residential, city_park, city_mall, city_market, city_marketsex, city_nightclub, city_nightclubToilet, city_redlight, city_sauna, city_saunawhore, city_hotel, city_library, city_pharmacy, city_laundromat, city_lake, city_island, city_mansion_entrance, city_mansion_residence_1/2/3, city_mariinsky, city_mariinsky_performances, city_mariinsky_rehearsals, city_jorahouse, city_kafe, city_kafeend, city_park, city_suburbs, city_trademission, city_trashplace, city_trashplaceevents, city_hermitage, city_experimental_trials, city_house_res_bathr/bedr/kitch/misc, city_irinaroom, city_musicstore, city_musicstore_stock, city_smalloffice, city_bordel, city_brothel

### Gadukino (26 stubs)
gadukino, gad_road, gad_market, gad_store, gad_beach, gad_river, gad_field, gad_meadow, gad_forest, gad_forest_events, gad_forest_lost, gad_church, gad_swamp, gad_swamp_woods, gad_swamp_yard, gad_swamphouse, gad_swampspring, gad_gphouse, gad_gpyard, gad_gpbarn, gad_gpbath, gad_gpchores, gad_miroslava_home, gad_prostitutes, gadukino_event

### Pushkin (11 stubs)
pushkin_sq, pushkin_parks, pushkin_cafe, pushkin_theatre, pushkin_ballet_center, pushkin_ballet_class, pushkin_ballet_evt, pushkin_ballet_init, pushkin_ballet_res, pushkin_ballet_secrets, pushkin_maya_residence

### KGD (16 stubs)
KGstart, KGDstart, KGDbefore, KGDexp, KGDfight, KGDgame, KGDparty, KGOLboss, KGOLenemy, KGOLexpa, KGOLfight, KGOLgame, KGZdyn, KGZfight, KGZgame, KGZstart

### Pavlovsk (59 stubs)
pav_disco, pav_disco_outside, pav_disco_classmates, pav_disco_coolkids, pav_disco_gopniks, pav_disco_jocks, pav_disco_sex, pav_discoev1, pav_pool, pav_pool_events, pav_pool_lifeguard, pav_lake_nude, pav_lake_nude_events, pav_lake_nude_forest, pav_library, pav_library_nerdstudy, pav_commcenter, pav_commclubs, pav_commercial_offices, pav_complexrolan, pav_complexb2, pav_complexb3, pav_complexOld, pav_hotelAdmin, pav_hotelWork, pav_voc_school, pav_voc_school_shower, pav_aptcourtev, pav_aptcourtev1, pav_beach_chat, pav_church2, pav_park_meet_event, pav_park_meet_kol_event, pav_park_sex, pav_parkev, pav_parkev1, prostitution_pavlovsk, etc.

### Other (1,224 stubs) — Major Categories

**Transport (6):** bus_events, bus_incidental, metro, metro_events, metro_incidental, taxi (bus ported)

**Shops (20+):** shop, shop_allure, shop_coco_carmen, shop_danilovich, shop_dolls, shop_erotomaniac, shop_exhibitionist, shop_fancy_pancy, shop_fashionista, shop_flamingos, shop_gm, shop_lusso, shop_materinstvo, shop_moncheri, shop_nerdvana, shop_photography, shop_pussycats, shop_scandalicious, shop_tsar_bomba, shop_utils, shoplifting, shopdacha

**NPCs/Characters (100+):** albina_*, anushka_*, artem_*, artur*, bel*, din*, katja_*, kotov*, lariska_*, marisha_*, miroslava_*, natbel_*, natkol*, nik*, rolan*, sonia*, vika*, zoya*, zvereva_*, fedor*, igor*, ily*, kendra*, krol*, krupo*, leonid*, misha*, nastja*, petka*, rad*, sergei*, stas*, tobi*, vladimir*, volkov*, yarik*, gosha*, grigory*, andrey*, andrei*, alex*, alexandria*, bel*, billsvid*, comendant*, dima*, dina*, fur*, gop*, gor*, hunter*, igor*, ily*, kaka*, katr*, kentr*, kiro*, koto*, krol*, krup*, leon*, misha*, nat*, nik*, olga*, petk*, rad*, serg*, stas*, tobi*, vika*, vlad*, volk*, yar*, zoya*, zver*

**Sex Scenes (50+):** sex, sexm, sexorg, sex_ev_*, sexdvoe, sexdvana, oral, anal, bdsm_*, bordel*, brothel*, lezb*, paysex, pod_*, placer_*, hookup_*, housecall, prostitution_*, cum_*, lover_*, etc.

**Jobs/Work (20+):** jobs, jobs_gigs, jobs_list, qjob, stwork, stwork2, stwork3, burgerWork, worksalon, photography_work, LCwork, WorkHosp, havana_*, music_*, foto_*, etc.

**Events (50+):** events, event, random_events, street_events_*, park_walkevents*, dream_events, sleep_events, wakeup_events, hourly_events, pre_sleep_events, bed_events, home_events, calendar_events, etc.

**Systems/Utilities (100+):** state, time, schedule, stat, stat_display, stat_funcs, stat_explanations, exp_gain, exp_deg, fame, mood, willpower, pain, arousal, arousal_funcs, arousal_stats, arousal_oneline, DNA, traits, pronouns, math, string, random, array, counter, deckShuffle, etc.

**UI/Menu (30+):** _menu_*, tabhead, progressbar, show_table, notification, help, help_characters, version, debug_tools, perf_profile, etc.

**Clothing/Appearance (80+):** _attributes_*, _body_image, _bra_image, _coat_image, _face_image, _panty_image, _purse_image, _shoe_image, _clothing_image, _item_description, _short_description, _bodysuit_image, _pcs_outfit_image, clothing_*, bra_*, coat_*, panty_*, purse_*, shoe_*, tattoo_*, piercing_*, underwear_*, etc.

**School/University (40+):** gschool_*, uni_*, nyp_school, etc.

**Intro/Character Creation (20+):** intro_*, begin, ender, gameover, etc.

## Missing Features / Systems

| Feature | Status | Notes |
|---|---|---|
| `shop_utils` (1652 lines) | STUB | Core shopping system |
| `transport_functions` | STUB | Train time/price/wait (values hardcoded in train.ts) |
| `calendar_events` | STUB | Calendar system not ported (per user request) |
| `street_events` | MISSING | No file exists |
| `train_events` (777 lines) | STUB | Bypassed for now (events route to destination) |
| `train_incidental` (183 lines) | STUB | Bypassed for now |
| `city_industrial_train` | STUB | "Get off" routes here for industrial dest |
| `metro` | STUB | No metro transport |
| `taxi` | STUB | No taxi transport |
| Weather system | PARTIAL | `weatherFall` and `sunWeather` never set by game logic |
| Bodysuit fields | PARTIAL | `bodysuitworntype`, `bodysuitwornnumber` not in GameState |
| `underwear` field | PARTIAL | Only `underwearType` exists, missing full underwear state |
| Body shape images | PARTIAL | Only `0.jpg`, `6.jpg`, `7.jpg` exist as direct files |
| `tg_adult_shared` story (4 pages) | MISSING | Not in introStories.ts |
| `sg_tg` story | MISSING | Not in introStories.ts |
| `gad_forest_labeled.png` | WRONG FORMAT | JPEG data saved with `.png` extension |
| `pav_station` (old stub) | DUPLICATE | Still registered; `pav_train_hall` is the real station |
| KGD quest (16 locations) | STUBS | Entire secret police quest unportable |
| Pushkin district (11 remaining) | STUBS | Ballet, theatre, cafe (pushkin town center ported) |
| Gadukino village (26 locations) | STUBS | Grandparents, swamp, forest |
| City (57 remaining) | STUBS | Mall, nightclub, mansion, hermitage, etc. (city_center ported) |
| Bus transport | WORKING | 4 stops, schedules, fares (simplified) |
| Disco/Pool/Library (Pavlovsk) | STUBS | Entertainment venues |
| All NPC dialogue | STUBS | 100+ character files |
| All sex scenes | STUBS | 50+ sex event files |
| All shop interiors | STUBS | 20+ shop files |
| School/University | STUBS | 40+ education files |
| Intro/Character creation | STUBS | 20+ intro files |
| Journal system | PARTIAL | Basic journal registered, full content missing |
| Phone system | PARTIAL | Basic phone registered, full content missing |
| Save/Load | WORKING | IndexedDB, 10 slots |
| Wardrobe | WORKING | Full clothing system |
| Jobs view | WORKING | 28 job types defined |
| Train transport | WORKING | 6 stations, 20 routes |
| Map navigation | WORKING | 24 areas |
| Themes | WORKING | Multiple color themes |
| Debug log | WORKING | F9 overlay + debug-log.txt |

## Known Bugs / Issues

| Issue | Location | Severity |
|---|---|---|
| `karta` property not in GameState | pavlovsk/index.ts:142,238 | LSP error |
| `readonly` tuple type for `goto` | pavlovsk/index.ts:261,262 | LSP error |
| `pav_station` duplicate registration | main.tsx + pavlovsk/index.ts | Confusing |
| Transport values hardcoded | train.ts | Maintenance |
| `train_events` / `train_incidental` bypassed | train.ts | Missing events |
| `city_industrial_train` is a stub | city/ | "Get off" breaks for industrial |
| `pav_lake_nude_forest` ported | pavlovsk/ | Working |
| `trainbimbo` ported | other/ | Working |
| No `enter` in stubs = generic fallback | All stubs | Wrong text/actions shown |

## Priority for Next Porting

1. **Gadukino village** (26 locations) — grandparents' house is a major storyline
2. **City** (57 remaining stubs) — mall, nightclub, mansion, hermitage, etc.
3. **Pushkin district** (11 remaining stubs) — ballet, theatre, cafe
4. **NPCs** — start with main cast (Katja, Din, Albina, etc.)
5. **Shops** — `shop_utils` + shop interiors
6. **`metro`** — city metro transport
7. **`taxi`** — taxi transport
8. **Sex scenes** — 50+ event files
